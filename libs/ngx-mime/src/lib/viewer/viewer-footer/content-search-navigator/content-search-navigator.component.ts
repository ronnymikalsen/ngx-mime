import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { CanvasService } from '../../../core/canvas-service/canvas-service';
import { IiifContentSearchService } from '../../../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { injectMimeViewerIntlSignal } from '../../../core/intl/viewer-intl.signal';
import { SearchResult } from '../../../core/models/search-result';
import { ViewingDirection } from '../../../core/models/viewing-direction';
import { ContentSearchNavigationService } from '../../../core/navigation/content-search-navigation-service/content-search-navigation.service';

@Component({
  selector: 'mime-content-search-navigator',
  templateUrl: './content-search-navigator.component.html',
  styleUrls: ['./content-search-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbar, MatIconButton, MatTooltip, MatIcon, NgClass],
})
export class ContentSearchNavigatorComponent {
  readonly searchResult = input.required<SearchResult>();
  readonly intl = injectMimeViewerIntlSignal();
  readonly currentHit = toSignal(
    inject(ContentSearchNavigationService).currentHitCounter,
    { initialValue: 0 },
  );
  readonly isFirstHit = computed(() => this.currentHit() <= 0);
  readonly isLastHit = computed(
    () => this.currentHit() === this.searchResult().size() - 1,
  );
  readonly invert = toSignal(
    inject(IiifManifestService).currentManifest.pipe(
      map(
        (manifest) =>
          manifest?.viewingDirection !== undefined &&
          manifest.viewingDirection !== ViewingDirection.LTR,
      ),
    ),
    { initialValue: false },
  );
  readonly isHitOnActiveCanvasGroup = (() => {
    const canvasService = inject(CanvasService);
    const navigationService = inject(ContentSearchNavigationService);
    return toSignal(
      canvasService.onCanvasGroupIndexChange.pipe(
        map((canvasGroupIndex) => {
          navigationService.update(canvasGroupIndex);
          return navigationService.getHitOnActiveCanvasGroup();
        }),
      ),
      { initialValue: false },
    );
  })();
  private readonly iiifContentSearchService = inject(IiifContentSearchService);
  private readonly contentSearchNavigationService = inject(
    ContentSearchNavigationService,
  );
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.contentSearchNavigationService.initialize();
    this.destroyRef.onDestroy(() =>
      this.contentSearchNavigationService.destroy(),
    );
  }

  clear(): void {
    this.iiifContentSearchService.destroy();
  }

  goToNextHit(): void {
    this.contentSearchNavigationService.goToNextHit();
  }

  goToPreviousHit(): void {
    this.contentSearchNavigationService.goToPreviousHit();
  }
}
