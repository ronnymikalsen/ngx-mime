import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable, signal, Signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { MimeViewerConfig } from '../mime-viewer-config';
import { ViewerLayout } from '../models/viewer-layout';

@Injectable()
export class ViewerLayoutService {
  readonly viewerLayout: Signal<ViewerLayout>;
  readonly onChange: Observable<ViewerLayout>;
  private readonly breakpointObserver = inject(BreakpointObserver);
  private config = new MimeViewerConfig();
  private readonly viewerLayoutState = signal(this.config.initViewerLayout);

  constructor() {
    this.viewerLayout = this.viewerLayoutState.asReadonly();
    this.onChange = toObservable(this.viewerLayout);
  }

  get layout(): ViewerLayout {
    return this.viewerLayout();
  }

  init(isPagedManifest?: boolean): void {
    if (
      this.config.initViewerLayout === ViewerLayout.TWO_PAGE &&
      isPagedManifest &&
      !this.isHandsetOrTabletInPortrait()
    ) {
      this.setLayout(ViewerLayout.TWO_PAGE);
    } else {
      this.setLayout(ViewerLayout.ONE_PAGE);
    }
  }

  setConfig(config: MimeViewerConfig) {
    this.config = config;
  }

  setLayout(viewerLayout: ViewerLayout) {
    this.viewerLayoutState.set(viewerLayout);
  }

  toggle() {
    if (this.viewerLayout() === ViewerLayout.TWO_PAGE) {
      this.setLayout(ViewerLayout.ONE_PAGE);
    } else if (this.viewerLayout() === ViewerLayout.ONE_PAGE) {
      this.setLayout(ViewerLayout.TWO_PAGE);
    }
  }

  private isHandsetOrTabletInPortrait(): boolean {
    return this.breakpointObserver.isMatched([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait,
    ]);
  }
}
