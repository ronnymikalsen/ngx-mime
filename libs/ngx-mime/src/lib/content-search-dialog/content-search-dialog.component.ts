import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgStyle } from '@angular/common';
import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  inject,
  linkedSignal,
  viewChild,
  viewChildren,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { form, FormField, submit } from '@angular/forms/signals';
import { MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {
  MatFormField,
  MatInput,
  MatPrefix,
  MatSuffix,
} from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { IiifContentSearchService } from '../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { Hit } from '../core/models/hit';
import { SearchResult } from '../core/models/search-result';
import { ContentSearchNavigationService } from '../core/navigation/content-search-navigation-service/content-search-navigation.service';

@Component({
  selector: 'mime-search',
  templateUrl: './content-search-dialog.component.html',
  styleUrls: ['./content-search-dialog.component.scss'],
  imports: [
    MatToolbar,
    MatIconButton,
    MatTooltip,
    MatDialogClose,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    FormField,
    MatFormField,
    MatPrefix,
    MatInput,
    MatSuffix,
    NgStyle,
    MatCard,
    MatCardContent,
    MatProgressBar,
  ],
})
export class ContentSearchDialogComponent {
  readonly dialogRef =
    inject<MatDialogRef<ContentSearchDialogComponent>>(MatDialogRef);
  readonly resultContainer = viewChild.required<ElementRef<HTMLElement>>(
    'contentSearchResult',
  );
  readonly qEl = viewChild.required<ElementRef<HTMLInputElement>>('query');
  readonly hitList = viewChildren('hitButton', {
    read: ElementRef,
  });
  readonly intl = injectMimeViewerIntlSignal();
  readonly isHandsetOrTabletInPortrait = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );
  readonly mimeHeight = toSignal(
    inject(MimeResizeService).onResize.pipe(map(({ height }) => height)),
    { initialValue: 0 },
  );
  readonly manifest = toSignal(inject(IiifManifestService).currentManifest, {
    initialValue: null,
  });
  readonly searchResult = toSignal(inject(IiifContentSearchService).onChange, {
    initialValue: new SearchResult(),
  });
  readonly searchModel = linkedSignal(() => ({
    query: this.searchResult().q,
  }));
  readonly searchForm = form(this.searchModel);
  readonly hits = computed(() => this.searchResult().hits);
  readonly currentSearch = linkedSignal(() => this.searchResult().q);
  readonly numberOfHits = computed(() => this.searchResult().size());
  readonly isSearching = toSignal(
    inject(IiifContentSearchService).isSearching,
    { initialValue: false },
  );
  readonly currentHit = toSignal(inject(IiifContentSearchService).onSelected, {
    initialValue: null,
  });
  readonly tabHeight = computed(() => ({
    maxHeight: this.isHandsetOrTabletInPortrait()
      ? `${window.innerHeight - 128}px`
      : `${this.mimeHeight() - 320}px`,
  }));
  private readonly iiifContentSearchService = inject(IiifContentSearchService);
  private readonly contentSearchNavigationService = inject(
    ContentSearchNavigationService,
  );

  constructor() {
    afterRenderEffect(() => {
      const searchResult = this.searchResult();
      if (searchResult.size() > 0) {
        this.resultContainer().nativeElement.focus();
      } else {
        this.qEl().nativeElement.focus();
      }
    });

    afterRenderEffect(() => {
      const currentHit = this.currentHit();
      if (currentHit !== null) {
        this.hitList()[currentHit.id]?.nativeElement.focus();
      }
    });
  }

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    await submit(this.searchForm, async () => this.search());
  }

  clear(): void {
    this.searchModel.set({ query: '' });
    this.search();
  }

  goToHit(hit: Hit): void {
    this.contentSearchNavigationService.selected(hit);
    if (this.isHandsetOrTabletInPortrait()) {
      this.dialogRef.close();
    }
  }

  private search(): void {
    const query = this.searchModel().query;
    const manifest = this.manifest();
    this.currentSearch.set(query);
    if (manifest) {
      this.iiifContentSearchService.search(manifest, query);
    }
  }
}
