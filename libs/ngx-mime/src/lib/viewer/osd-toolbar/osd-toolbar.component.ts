import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { CanvasService } from '../../core/canvas-service/canvas-service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { injectMimeViewerIntlSignal } from '../../core/intl/viewer-intl.signal';
import { ModeService } from '../../core/mode-service/mode.service';
import { ViewingDirection } from '../../core/models/viewing-direction';
import { ViewerService } from '../../core/viewer-service/viewer.service';

@Component({
  selector: 'mime-osd-toolbar',
  templateUrl: './osd-toolbar.component.html',
  styleUrls: ['./osd-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFabButton, MatTooltip, MatIcon, MatMiniFabButton],
})
export class OsdToolbarComponent {
  private readonly modeService = inject(ModeService);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly iiifManifestService = inject(IiifManifestService);
  private readonly viewerService = inject(ViewerService);
  private readonly canvasService = inject(CanvasService);
  readonly intl = injectMimeViewerIntlSignal();

  @ViewChild('container', { static: true }) container!: ElementRef;
  readonly isZoomed = toSignal(
    this.modeService.onChange.pipe(map(() => this.modeService.isPageZoomed())),
    { initialValue: this.modeService.isPageZoomed() },
  );
  readonly isWeb = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Web])
      .pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );
  readonly manifest = toSignal(this.iiifManifestService.currentManifest, {
    initialValue: null,
  });
  readonly invert = computed(
    () => this.manifest()?.viewingDirection === ViewingDirection.LTR,
  );
  readonly currentCanvasGroupIndex = toSignal(
    this.viewerService.onCanvasGroupIndexChange,
    { initialValue: 0 },
  );
  readonly numberOfCanvasGroups = toSignal(
    this.canvasService.onNumberOfCanvasGroupsChange,
    { initialValue: 0 },
  );
  readonly isFirstCanvasGroup = computed(
    () => this.currentCanvasGroupIndex() === 0,
  );
  readonly isLastCanvasGroup = computed(
    () => this.currentCanvasGroupIndex() === this.numberOfCanvasGroups() - 1,
  );
  readonly fabState = signal<'closed' | 'open'>('closed');
  readonly fabIcon = computed(() =>
    this.fabState() === 'closed' ? 'menu' : 'clear',
  );
  readonly baseAnimationDelay = 20;

  toggleFab(): void {
    this.fabState.update((state) => (state === 'closed' ? 'open' : 'closed'));
  }

  zoomIn(): void {
    this.viewerService.zoomIn();
  }

  zoomOut(): void {
    this.viewerService.zoomOut();
  }

  home(): void {
    this.viewerService.home();
  }

  rotate(): void {
    this.viewerService.rotate();
  }

  goToPreviousCanvasGroup(): void {
    this.viewerService.goToPreviousCanvasGroup();
  }

  goToNextCanvasGroup(): void {
    this.viewerService.goToNextCanvasGroup();
  }
}
