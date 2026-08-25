import { computed, Injectable, signal, Signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MimeViewerConfig } from '../mime-viewer-config';
import { ModeChanges, ViewerMode } from '../models';

@Injectable()
export class ModeService {
  readonly mode: Signal<ViewerMode>;
  readonly isPageZoomed: Signal<boolean>;
  readonly onChange: Observable<ModeChanges>;
  private config = new MimeViewerConfig();
  private readonly modeState = signal(this.config.initViewerMode);
  private readonly modeChangesSubject = new Subject<ModeChanges>();

  constructor() {
    this.mode = this.modeState.asReadonly();
    this.isPageZoomed = computed(() => this.mode() === ViewerMode.PAGE_ZOOMED);
    this.onChange = this.modeChangesSubject.asObservable();
  }

  initialize(): void {
    this.setMode(this.config.initViewerMode);
  }

  destroy() {
    this.setMode(this.config.initViewerMode);
  }

  setConfig(config: MimeViewerConfig) {
    this.config = config;
  }

  setMode(mode: ViewerMode): void {
    const previousValue = this.mode();
    this.modeState.set(mode);
    this.modeChangesSubject.next({
      currentValue: mode,
      previousValue,
    });
  }

  toggleMode(): void {
    if (this.mode() === ViewerMode.DASHBOARD) {
      this.setMode(ViewerMode.PAGE);
    } else if (
      this.mode() === ViewerMode.PAGE ||
      this.mode() === ViewerMode.PAGE_ZOOMED
    ) {
      this.setMode(ViewerMode.DASHBOARD);
    }
  }
}
