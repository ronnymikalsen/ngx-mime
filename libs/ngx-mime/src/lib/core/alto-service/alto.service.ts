import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  BehaviorSubject,
  combineLatest,
  EMPTY,
  forkJoin,
  Observable,
  of,
  Subject,
  Subscriber,
  Subscription,
  timer,
} from 'rxjs';
import { catchError, finalize, map, switchMap, take } from 'rxjs/operators';
import { parseString } from 'xml2js';
import { AltoBuilder } from '../builders/alto';
import { CanvasService } from '../canvas-service/canvas-service';
import { HighlightService } from '../highlight-service/highlight.service';
import { IiifManifestService } from '../iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../intl';
import { MimeViewerConfig } from '../mime-viewer-config';
import { RecognizedTextMode, RecognizedTextModeChanges } from '../models';
import { Hit } from '../models/hit';
import { Manifest } from '../models/manifest';
import { ViewerLayoutService } from '../viewer-layout-service/viewer-layout-service';
import { Alto } from './alto.model';
import { HtmlFormatter } from './html.formatter';

@Injectable()
export class AltoService {
  intl = inject(MimeViewerIntl);
  readonly recognizedTextContentMode: Signal<RecognizedTextMode>;
  readonly isLoading: Signal<boolean>;
  readonly error: Signal<string | undefined>;
  readonly currentCanvasGroupHasTextSource: Signal<boolean | undefined>;
  readonly onRecognizedTextContentModeChange$: Observable<RecognizedTextModeChanges>;
  readonly onTextContentReady$: Observable<void>;
  readonly onTextHighlightsChange$: Observable<void>;
  private readonly http = inject(HttpClient);
  private readonly iiifManifestService = inject(IiifManifestService);
  private readonly highlightService = inject(HighlightService);
  private readonly canvasService = inject(CanvasService);
  private readonly viewerLayoutService = inject(ViewerLayoutService);
  private readonly sanitizer = inject(DomSanitizer);
  private config!: MimeViewerConfig;
  private altos: string[] = [];
  private readonly recognizedTextContentModeState = signal(
    RecognizedTextMode.NONE,
  );
  private readonly isLoadingState = signal(false);
  private readonly errorState = signal<string | undefined>(undefined);
  private readonly currentCanvasGroupHasTextSourceState = signal<
    boolean | undefined
  >(undefined);
  private readonly textContentReadySubject = new Subject<void>();
  private readonly textHighlightsChangedSubject = new Subject<void>();
  private manifest: Manifest | null = null;
  private subscriptions = new Subscription();
  private readonly altoBuilder = new AltoBuilder();
  private htmlFormatter!: HtmlFormatter;
  private hits: Hit[] | undefined;
  private initialized = false;
  private readonly recognizedTextContentModeChangesSubject =
    new BehaviorSubject<RecognizedTextModeChanges>({
      previousValue: RecognizedTextMode.NONE,
      currentValue: RecognizedTextMode.NONE,
    });

  constructor() {
    this.recognizedTextContentMode =
      this.recognizedTextContentModeState.asReadonly();
    this.isLoading = this.isLoadingState.asReadonly();
    this.error = this.errorState.asReadonly();
    this.currentCanvasGroupHasTextSource =
      this.currentCanvasGroupHasTextSourceState.asReadonly();
    this.onRecognizedTextContentModeChange$ =
      this.recognizedTextContentModeChangesSubject.asObservable();
    this.onTextContentReady$ = this.textContentReadySubject.asObservable();
    this.onTextHighlightsChange$ =
      this.textHighlightsChangedSubject.asObservable();
  }

  initialize() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.htmlFormatter = new HtmlFormatter();
    this.subscriptions = new Subscription();

    this.subscriptions.add(
      this.iiifManifestService.currentManifest.subscribe(
        (manifest: Manifest | null) => {
          this.manifest = manifest;
          this.errorState.set(undefined);
          this.currentCanvasGroupHasTextSourceState.set(undefined);
          this.clearCache();
        },
      ),
    );

    this.subscriptions.add(
      combineLatest([
        this.canvasService.onCanvasGroupIndexChange,
        this.viewerLayoutService.onChange,
      ])
        .pipe(
          switchMap(([currentCanvasGroupIndex]) => {
            this.errorState.set(undefined);
            this.currentCanvasGroupHasTextSourceState.set(undefined);
            this.isLoadingState.set(true);

            return timer(200).pipe(
              switchMap(() => this.loadCanvasGroup(currentCanvasGroupIndex)),
              finalize(() => this.isLoadingState.set(false)),
            );
          }),
        )
        .subscribe(() => this.textContentReadySubject.next()),
    );
  }

  setHits(hits?: Hit[]) {
    this.hits = hits;
    this.textHighlightsChangedSubject.next();
  }

  destroy() {
    this.setRecognizedTextContentMode(
      this.config?.initRecognizedTextContentMode ?? RecognizedTextMode.NONE,
    );

    this.subscriptions.unsubscribe();
    this.initialized = false;
    this.errorState.set(undefined);
    this.currentCanvasGroupHasTextSourceState.set(undefined);
    this.clearCache();
  }

  setConfig(config: MimeViewerConfig) {
    this.config = config;
  }

  showRecognizedTextContentOnly() {
    this.setRecognizedTextContentMode(RecognizedTextMode.ONLY);
  }

  showRecognizedTextContentInSplitView() {
    this.setRecognizedTextContentMode(RecognizedTextMode.SPLIT);
  }

  closeRecognizedTextContent() {
    this.setRecognizedTextContentMode(RecognizedTextMode.NONE);
  }

  getHtml(index: number): SafeHtml | undefined {
    return this.isInCache(index)
      ? this.sanitizer.bypassSecurityTrustHtml(
          this.highlightService.highlight(this.altos[index], index, this.hits),
        )
      : undefined;
  }

  clearCache() {
    this.altos = [];
  }

  private loadCanvasGroup(currentCanvasGroupIndex: number): Observable<void> {
    const sources: Observable<void>[] = [];
    const canvasGroup = this.canvasService.getCanvasesPerCanvasGroup(
      currentCanvasGroupIndex,
    );

    if (!canvasGroup || canvasGroup.length === 0) {
      this.currentCanvasGroupHasTextSourceState.set(false);

      return EMPTY;
    }
    this.addAltoSource(canvasGroup[0], sources);
    if (canvasGroup.length === 2) {
      this.addAltoSource(canvasGroup[1], sources);
    }
    this.currentCanvasGroupHasTextSourceState.set(sources.length > 0);

    return sources.length > 0
      ? forkJoin(sources).pipe(
          take(1),
          map(() => undefined),
        )
      : EMPTY;
  }

  private addAltoSource(index: number, sources: Observable<void>[]) {
    if (this.manifest && this.manifest.sequences) {
      const seq = this.manifest.sequences[0];
      if (seq.canvases) {
        const canvas = seq.canvases[index];
        if (canvas && canvas.altoUrl) {
          sources.push(this.add(index, canvas.altoUrl));
        }
      }
    }
  }

  private add(index: number, url: string): Observable<void> {
    return new Observable((observer) => {
      if (this.isInCache(index)) {
        this.done(observer);

        return;
      }

      return this.load(observer, index, url);
    });
  }

  private isInCache(index: number) {
    return this.altos[index] !== undefined;
  }

  private load(observer: Subscriber<void>, index: number, url: string) {
    return this.http
      .get(url, {
        headers: new HttpHeaders().set('Content-Type', 'text/xml'),
        responseType: 'text',
      })
      .pipe(
        take(1),
        catchError((err) => of({ isError: true, error: err })),
      )
      .subscribe((data: Alto | any) => {
        try {
          if (!data.isError) {
            parseString(
              data,
              { explicitChildren: true, preserveChildrenOrder: true },
              (error, result) => {
                const alto = this.altoBuilder.withAltoXml(result.alto).build();
                this.addToCache(index, alto);
                this.done(observer);
              },
            );
          } else {
            throw data.err;
          }
        } catch {
          this.handleLoadError(observer);
        }
      });
  }

  private addToCache(index: number, alto: Alto) {
    this.altos[index] = this.htmlFormatter.altoToHtml(alto);
  }

  private done(observer: Subscriber<void>) {
    this.complete(observer);
  }

  private handleLoadError(observer: Subscriber<void>) {
    this.errorState.set(this.intl.textContentErrorLabel);
    this.complete(observer);
  }

  private setRecognizedTextContentMode(value: RecognizedTextMode): void {
    const previousValue = this.recognizedTextContentMode();
    this.recognizedTextContentModeState.set(value);
    this.recognizedTextContentModeChangesSubject.next({
      currentValue: value,
      previousValue,
    });
  }

  private complete(observer: Subscriber<void>) {
    observer.next();
    observer.complete();
  }
}
