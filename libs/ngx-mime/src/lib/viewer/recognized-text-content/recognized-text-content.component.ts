import {
  afterRenderEffect,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  linkedSignal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SafeHtml } from '@angular/platform-browser';
import { map, scan } from 'rxjs';
import { AltoService } from '../../core/alto-service/alto.service';
import { CanvasService } from '../../core/canvas-service/canvas-service';
import { HighlightService } from '../../core/highlight-service/highlight.service';
import { IiifContentSearchService } from '../../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { ManifestUtils } from '../../core/iiif-manifest-service/iiif-manifest-utils';
import { MimeViewerIntl } from '../../core/intl';
import { Manifest } from '../../core/models/manifest';

interface RecognizedTextSource {
  manifest: Manifest | null;
  isLoading: boolean;
  hasTextSource: boolean | undefined;
  textContentVersion: number;
  highlightsRevision: number;
}

interface RecognizedTextState {
  firstCanvas: SafeHtml | string | undefined;
  secondCanvas: SafeHtml | string | undefined;
  updatedCanvasGroupLabel: string | undefined;
  updatedCanvasGroupPageCount: number;
}

const emptyRecognizedTextState = (): RecognizedTextState => ({
  firstCanvas: '',
  secondCanvas: '',
  updatedCanvasGroupLabel: undefined,
  updatedCanvasGroupPageCount: 0,
});

const getCanvasGroupLabel = (canvases: number[]): string | undefined => {
  if (canvases.length === 0) {
    return undefined;
  }
  const firstPage = canvases[0] + 1;
  const lastPage = canvases[canvases.length - 1] + 1;
  return firstPage === lastPage ? `${firstPage}` : `${firstPage}–${lastPage}`;
};

@Component({
  selector: 'mime-recognized-text-content',
  templateUrl: './recognized-text-content.component.html',
  styleUrls: ['./recognized-text-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecognizedTextContentComponent {
  readonly viewerId = input.required<string>();
  readonly recognizedTextContentContainer = viewChild.required<
    ElementRef<HTMLElement>
  >('recognizedTextContentContainer');
  readonly intl = (() => {
    const intl = inject(MimeViewerIntl);
    return toSignal(intl.changes.pipe(map(() => ({ ...intl }))), {
      initialValue: intl,
    });
  })();
  readonly manifest = toSignal(inject(IiifManifestService).currentManifest, {
    initialValue: null,
  });
  readonly isLoading = toSignal(inject(AltoService).isLoading$, {
    initialValue: false,
  });
  readonly error = toSignal(inject(AltoService).hasErrors$, {
    initialValue: undefined,
  });
  readonly currentCanvasGroupHasTextSource = toSignal(
    inject(AltoService).currentCanvasGroupHasTextSource$,
    { initialValue: undefined },
  );
  readonly selectedHit = toSignal(
    inject(IiifContentSearchService).onSelected.pipe(map((hit) => hit?.id)),
    { initialValue: undefined },
  );
  readonly textContentVersion = toSignal(
    inject(AltoService).onTextContentReady$.pipe(
      scan((version) => version + 1, 0),
    ),
    { initialValue: 0 },
  );
  readonly highlightsRevision = toSignal(
    inject(AltoService).onTextHighlightsChange$.pipe(
      scan((version) => version + 1, 0),
    ),
    { initialValue: 0 },
  );
  readonly hasRecognizedTextContent = computed(() => {
    const manifest = this.manifest();
    return manifest
      ? ManifestUtils.hasRecognizedTextContent(manifest)
      : undefined;
  });
  readonly recognizedTextState = (() => {
    const canvasService = inject(CanvasService);
    const altoService = inject(AltoService);

    const refresh = (
      announceUpdate: boolean,
      previous?: RecognizedTextState,
    ): RecognizedTextState => {
      const canvases = canvasService.getCanvasesPerCanvasGroup(
        canvasService.currentCanvasGroupIndex,
      );
      if (!canvases?.length) {
        return announceUpdate
          ? emptyRecognizedTextState()
          : (previous ?? emptyRecognizedTextState());
      }

      const firstCanvas = altoService.getHtml(canvases[0]);
      const secondCanvas =
        canvases.length === 2 ? altoService.getHtml(canvases[1]) : '';
      const updatedCanvases = canvases.filter((_, index) =>
        index === 0 ? firstCanvas !== undefined : secondCanvas !== undefined,
      );

      return {
        firstCanvas,
        secondCanvas,
        updatedCanvasGroupLabel: announceUpdate
          ? getCanvasGroupLabel(updatedCanvases)
          : previous?.updatedCanvasGroupLabel,
        updatedCanvasGroupPageCount: announceUpdate
          ? updatedCanvases.length
          : (previous?.updatedCanvasGroupPageCount ?? 0),
      };
    };

    return linkedSignal<RecognizedTextSource, RecognizedTextState>({
      source: () => ({
        manifest: this.manifest(),
        isLoading: this.isLoading(),
        hasTextSource: this.currentCanvasGroupHasTextSource(),
        textContentVersion: this.textContentVersion(),
        highlightsRevision: this.highlightsRevision(),
      }),
      computation: (source, previous) => {
        if (!previous) {
          return refresh(false);
        }
        if (
          source.manifest !== previous.source.manifest ||
          source.isLoading ||
          (source.hasTextSource === undefined &&
            previous.source.hasTextSource !== undefined)
        ) {
          return emptyRecognizedTextState();
        }
        if (source.textContentVersion !== previous.source.textContentVersion) {
          return refresh(true, previous.value);
        }
        if (source.highlightsRevision !== previous.source.highlightsRevision) {
          return refresh(false, previous.value);
        }
        return previous.value;
      },
    });
  })();
  readonly firstCanvasRecognizedTextContent = computed(
    () => this.recognizedTextState().firstCanvas,
  );
  readonly secondCanvasRecognizedTextContent = computed(
    () => this.recognizedTextState().secondCanvas,
  );
  readonly updatedCanvasGroupLabel = computed(
    () => this.recognizedTextState().updatedCanvasGroupLabel,
  );
  readonly updatedCanvasGroupPageCount = computed(
    () => this.recognizedTextState().updatedCanvasGroupPageCount,
  );
  private readonly highlightService = inject(HighlightService);

  constructor() {
    let lastScrolledVersion = 0;
    afterRenderEffect(() => {
      const version = this.textContentVersion();
      if (version > lastScrolledVersion) {
        this.recognizedTextContentContainer().nativeElement.scrollTop = 0;
        lastScrolledVersion = version;
      }
    });

    afterRenderEffect(() => {
      this.recognizedTextState();
      const selectedHit = this.selectedHit();
      if (selectedHit !== undefined) {
        this.highlightService.highlightSelectedHit(
          this.viewerId(),
          selectedHit,
        );
      }
    });
  }
}
