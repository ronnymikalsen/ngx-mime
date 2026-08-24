import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { map } from 'rxjs';
import { IiifContentSearchService } from '../../core/iiif-content-search-service/iiif-content-search.service';
import { SearchResult } from '../../core/models/search-result';
import { CanvasGroupNavigatorComponent } from './canvas-group-navigator/canvas-group-navigator.component';
import { ContentSearchNavigatorComponent } from './content-search-navigator/content-search-navigator.component';

@Component({
  selector: 'mime-viewer-footer',
  templateUrl: './viewer-footer.component.html',
  styleUrls: ['./viewer-footer.component.scss'],
  imports: [
    MatDivider,
    MatToolbar,
    ContentSearchNavigatorComponent,
    NgClass,
    CanvasGroupNavigatorComponent,
  ],
})
export class ViewerFooterComponent {
  @ViewChild('mimeFooterBefore', { read: ViewContainerRef, static: true })
  mimeFooterBefore!: ViewContainerRef;
  @ViewChild('mimeFooterAfter', { read: ViewContainerRef, static: true })
  mimeFooterAfter!: ViewContainerRef;
  readonly searchResult = toSignal(inject(IiifContentSearchService).onChange, {
    initialValue: new SearchResult(),
  });
  readonly isXSmall = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.XSmall])
      .pipe(map((value: BreakpointState) => value.matches)),
    { initialValue: false },
  );
  readonly showContentSearchNavigator = computed(
    () => this.searchResult().size() > 0,
  );
  readonly showPageNavigator = computed(
    () => this.searchResult().size() === 0 || !this.isXSmall(),
  );
}
