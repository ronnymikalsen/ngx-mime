import { Platform } from '@angular/cdk/platform';
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  linkedSignal,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  signal,
  SimpleChanges,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { interval, Subscription } from 'rxjs';
import { map, take, throttle } from 'rxjs/operators';
import { AttributionDialogService } from '../attribution-dialog/attribution-dialog.service';
import { CanvasGroupDialogService } from '../canvas-group-dialog/canvas-group-dialog.service';
import { ContentSearchDialogService } from '../content-search-dialog/content-search-dialog.service';
import { AccessKeysService } from '../core/access-keys-handler-service/access-keys.service';
import { AltoService } from '../core/alto-service/alto.service';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { IiifContentSearchService } from '../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { ManifestUtils } from '../core/iiif-manifest-service/iiif-manifest-utils';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { MimeViewerConfig } from '../core/mime-viewer-config';
import { ModeService } from '../core/mode-service/mode.service';
import {
  ModeChanges,
  RecognizedTextMode,
  RecognizedTextModeChanges,
  ViewerMode,
} from '../core/models';
import { Manifest } from '../core/models/manifest';
import { SearchResult } from '../core/models/search-result';
import { ViewerLayout } from '../core/models/viewer-layout';
import { ViewerOptions } from '../core/models/viewer-options';
import { ViewerState } from '../core/models/viewerState';
import { StyleService } from '../core/style-service/style.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { HelpDialogService } from '../help-dialog/help-dialog.service';
import { InformationDialogService } from '../information-dialog/information-dialog.service';
import { ViewDialogService } from '../view-dialog/view-dialog.service';
import { OsdToolbarComponent } from './osd-toolbar/osd-toolbar.component';
import { RecognizedTextContentComponent } from './recognized-text-content/recognized-text-content.component';
import { ViewerFooterComponent } from './viewer-footer/viewer-footer.component';
import { ViewerHeaderComponent } from './viewer-header/viewer-header.component';
import { ViewerSpinnerComponent } from './viewer-spinner/viewer-spinner.component';
import { VIEWER_PROVIDERS } from './viewer.providers';

@Component({
  selector: 'mime-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    MatSidenavModule,
    ViewerSpinnerComponent,
    ViewerHeaderComponent,
    OsdToolbarComponent,
    RecognizedTextContentComponent,
    ViewerFooterComponent,
  ],
  providers: VIEWER_PROVIDERS,
})
export class ViewerComponent implements OnInit, OnDestroy, OnChanges {
  private readonly iiifManifestService = inject(IiifManifestService);
  private readonly viewDialogService = inject(ViewDialogService);
  private readonly informationDialogService = inject(InformationDialogService);
  private readonly attributionDialogService = inject(AttributionDialogService);
  private readonly contentSearchDialogService = inject(
    ContentSearchDialogService,
  );
  private readonly helpDialogService = inject(HelpDialogService);
  private readonly viewerService = inject(ViewerService);
  private readonly resizeService = inject(MimeResizeService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly modeService = inject(ModeService);
  private readonly iiifContentSearchService = inject(IiifContentSearchService);
  private readonly accessKeysHandlerService = inject(AccessKeysService);
  private readonly canvasService = inject(CanvasService);
  private readonly viewerLayoutService = inject(ViewerLayoutService);
  private readonly styleService = inject(StyleService);
  private readonly altoService = inject(AltoService);
  private readonly canvasGroupDialogService = inject(CanvasGroupDialogService);
  private readonly el = inject(ElementRef);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly zone = inject(NgZone);
  private readonly platform = inject(Platform);
  private readonly snackBar = inject(MatSnackBar);
  readonly intl = injectMimeViewerIntlSignal();
  private readonly errorMessageSource = toSignal(
    this.iiifManifestService.errorMessage,
    {
      initialValue: null,
      equal: () => false,
    },
  );

  readonly manifestUri = input<string | null>(null);
  readonly q = input<string>();
  readonly canvasIndex = input(0);
  readonly config = input<MimeViewerConfig>(new MimeViewerConfig());
  readonly tabIndex = input(0);
  readonly viewerModeChanged = output<ViewerMode>();
  readonly canvasChanged = output<number>();
  readonly qChanged = output<string>();
  readonly manifestChanged = output<Manifest>();
  readonly recognizedTextContentModeChanged = output<RecognizedTextMode>();
  readonly recognizedTextMode = RecognizedTextMode;
  id = 'ngx-mime-mimeViewer';
  openseadragonId = 'openseadragon';
  readonly recognizedTextContentMode = toSignal(
    this.altoService.onRecognizedTextContentModeChange$.pipe(
      map((changes) => changes.currentValue),
    ),
    { initialValue: this.altoService.recognizedTextContentMode },
  );
  readonly showHeaderAndFooterState = signal(false);
  readonly osdToolbarState = signal(false);
  readonly errorMessage = linkedSignal(() => this.errorMessageSource());
  private readonly header =
    viewChild.required<ViewerHeaderComponent>('mimeHeader');
  private readonly footer =
    viewChild.required<ViewerFooterComponent>('mimeFooter');
  private readonly subscriptions = new Subscription();
  private readonly isCanvasPressed = toSignal(
    this.viewerService.isCanvasPressed,
    { initialValue: false },
  );
  private readonly activeManifestUri = linkedSignal(() => this.manifestUri());
  private currentManifest!: Manifest | null;
  private pendingStartCanvasId: string | null = null;
  private readonly viewerLayout = toSignal(this.viewerLayoutService.onChange, {
    initialValue: null,
  });
  private viewerState = new ViewerState();

  constructor() {
    this.id = this.viewerService.id;
    this.openseadragonId = this.viewerService.openseadragonId;
    this.informationDialogService.el = this.el;
    this.informationDialogService.viewContainerRef = this.viewContainerRef;
    this.attributionDialogService.el = this.el;
    this.attributionDialogService.viewContainerRef = this.viewContainerRef;
    this.viewDialogService.el = this.el;
    this.viewDialogService.viewContainerRef = this.viewContainerRef;
    this.contentSearchDialogService.el = this.el;
    this.contentSearchDialogService.viewContainerRef = this.viewContainerRef;
    this.helpDialogService.el = this.el;
    this.helpDialogService.viewContainerRef = this.viewContainerRef;
    this.canvasGroupDialogService.viewContainerRef = this.viewContainerRef;
    this.resizeService.el = this.el;
  }

  get mimeHeaderBeforeRef(): ViewContainerRef {
    return this.header().mimeHeaderBefore();
  }

  get mimeHeaderAfterRef(): ViewContainerRef {
    return this.header().mimeHeaderAfter();
  }

  get mimeFooterBeforeRef(): ViewContainerRef {
    return this.footer().mimeFooterBefore();
  }

  get mimeFooterAfterRef(): ViewContainerRef {
    return this.footer().mimeFooterAfter();
  }

  @HostListener('keydown', ['$event'])
  handleKeys(event: KeyboardEvent) {
    this.accessKeysHandlerService.handleKeyEvents(event);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.config().isDropEnabled) {
      const url = event.dataTransfer.getData('URL');
      const params = new URL(url).searchParams;
      const manifestUri = params.get('manifest');
      const startCanvasId = params.get('canvas');
      if (manifestUri) {
        this.activeManifestUri.set(
          manifestUri.startsWith('//')
            ? `${location.protocol}${manifestUri}`
            : manifestUri,
        );
        this.cleanup();
        this.pendingStartCanvasId = startCanvasId;
        this.loadManifest();
      }
    } else {
      this.snackBar.open(this.intl().dropDisabled, undefined, {
        duration: 3000,
      });
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  ngOnInit(): void {
    this.styleService.initialize();

    this.subscriptions.add(
      this.iiifManifestService.currentManifest.subscribe(
        (manifest: Manifest | null) => {
          if (manifest) {
            this.initialize();
            this.currentManifest = manifest;
            this.manifestChanged.emit(manifest);
            this.goToPendingStartCanvas(manifest);
            this.viewerLayoutService.init(
              ManifestUtils.isManifestPaged(manifest),
            );
            // OpenSeadragon needs its host element to exist before setup.
            this.changeDetectorRef.detectChanges();
            const config = this.config();
            this.viewerService.setUpViewer(manifest, config);
            this.altoService.initialize();
            if (config.attributionDialogEnabled && manifest.attribution) {
              this.attributionDialogService.open(
                config.attributionDialogHideTimeout,
              );
            }

            const q = this.q();
            if (q) {
              this.iiifContentSearchService.search(manifest, q);
            }
          }
        },
      ),
    );

    this.subscriptions.add(
      this.viewerService.onOsdReadyChange.subscribe((state: boolean) => {
        // Don't reset current page when switching layout
        if (
          state &&
          this.canvasIndex() &&
          !this.canvasService.currentCanvasGroupIndex
        ) {
          this.viewerService.goToCanvas(this.canvasIndex(), false);
        }
      }),
    );

    this.subscriptions.add(
      this.iiifManifestService.errorMessage.subscribe(() => {
        this.resetCurrentManifest();
      }),
    );

    this.subscriptions.add(
      this.iiifContentSearchService.onQChange.subscribe((q: string) => {
        this.qChanged.emit(q);
      }),
    );

    this.subscriptions.add(
      this.iiifContentSearchService.onChange.subscribe((sr: SearchResult) => {
        this.altoService.setHits(sr.hits);
        this.viewerService.highlight(sr);
      }),
    );

    this.subscriptions.add(
      this.modeService.onChange.subscribe((mode: ModeChanges) => {
        const currentMode = mode.currentValue;
        if (currentMode !== undefined) {
          this.toggleToolbarsState(currentMode);
        }
        if (
          mode.previousValue === ViewerMode.DASHBOARD &&
          currentMode === ViewerMode.PAGE
        ) {
          this.viewerState.viewDialogState.isOpen =
            this.viewDialogService.isOpen();
          this.viewerState.contentDialogState.isOpen =
            this.informationDialogService.isOpen();
          this.viewerState.contentDialogState.selectedIndex =
            this.informationDialogService.getSelectedIndex();
          this.viewerState.contentsSearchDialogState.isOpen =
            this.contentSearchDialogService.isOpen();
          this.viewerState.helpDialogState.isOpen =
            this.helpDialogService.isOpen();
          this.zone.run(() => {
            this.viewDialogService.close();
            this.informationDialogService.close();
            this.contentSearchDialogService.close();
            this.helpDialogService.close();
          });
        }
        if (currentMode === ViewerMode.DASHBOARD) {
          this.zone.run(() => {
            if (this.viewerState.viewDialogState.isOpen) {
              this.viewDialogService.open();
            }
            if (this.viewerState.contentDialogState.isOpen) {
              this.informationDialogService.open(
                this.viewerState.contentDialogState.selectedIndex,
              );
            }
            if (this.viewerState.contentsSearchDialogState.isOpen) {
              this.contentSearchDialogService.open();
            }
            if (this.viewerState.helpDialogState.isOpen) {
              this.helpDialogService.open();
            }
          });
        }
        if (currentMode !== undefined) {
          this.zone.run(() => {
            this.viewerModeChanged.emit(currentMode);
          });
        }
      }),
    );

    this.subscriptions.add(
      this.canvasService.onCanvasGroupIndexChange.subscribe(
        (canvasGroupIndex: number) => {
          const canvasIndex =
            this.canvasService.findCanvasByCanvasIndex(canvasGroupIndex);
          if (canvasIndex !== -1) {
            this.canvasChanged.emit(canvasIndex);
          }
        },
      ),
    );

    this.subscriptions.add(
      this.resizeService.onResize
        .pipe(
          throttle((val) =>
            interval(ViewerOptions.transitions.OSDAnimationTime),
          ),
        )
        .subscribe(() => {
          setTimeout(() => {
            this.viewerService.home();
          }, ViewerOptions.transitions.OSDAnimationTime);
        }),
    );

    this.subscriptions.add(
      this.altoService.onRecognizedTextContentModeChange$.subscribe(
        (recognizedTextModeChanges: RecognizedTextModeChanges) => {
          this.recognizedTextContentModeChanged.emit(
            recognizedTextModeChanges.currentValue,
          );
        },
      ),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      const config = this.config();
      this.viewerService.setConfig(config);
      this.viewerLayoutService.setConfig(config);
      this.iiifContentSearchService.setConfig(config);
      this.altoService.setConfig(config);
      this.modeService.setConfig(config);
      this.modeService.initialize();
    }

    if (changes['manifestUri']) {
      this.cleanup();
      this.modeService.mode = this.config().initViewerMode;
      this.loadManifest();
    }

    if (changes['q']) {
      const q = this.q();
      if (this.currentManifest && q !== undefined) {
        this.iiifContentSearchService.search(this.currentManifest, q);
      }
    }

    if (changes['canvasIndex']) {
      const canvasIndex = this.canvasIndex();
      if (this.currentManifest) {
        this.viewerService.goToCanvas(canvasIndex, true);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.cleanup();
    this.iiifManifestService.destroy();
    this.iiifContentSearchService.destroy();
    this.styleService.destroy();
  }

  toggleToolbarsState(mode: ViewerMode): void {
    if (this.header() && this.footer()) {
      switch (mode) {
        case ViewerMode.DASHBOARD:
          this.showHeaderAndFooterState.set(true);
          if (this.config().navigationControlEnabled) {
            this.osdToolbarState.set(false);
          }
          break;
        case ViewerMode.PAGE:
          this.showHeaderAndFooterState.set(false);
          if (this.config().navigationControlEnabled) {
            this.osdToolbarState.set(true);
          }
          break;
      }
      // Consumers of this synchronous API expect the toolbar DOM state to be
      // updated before the method returns.
      this.changeDetectorRef.detectChanges();
    }
  }

  goToHomeZoom(): void {
    if (this.recognizedTextContentMode() !== this.recognizedTextMode.ONLY) {
      this.viewerService.home();
    }
  }

  setClasses() {
    return {
      'mode-page': this.modeService.mode === ViewerMode.PAGE,
      'mode-page-zoomed': this.modeService.isPageZoomed(),
      'mode-dashboard': this.modeService.mode === ViewerMode.DASHBOARD,
      'layout-one-page': this.viewerLayout() === ViewerLayout.ONE_PAGE,
      'layout-two-page': this.viewerLayout() === ViewerLayout.TWO_PAGE,
      'canvas-pressed': this.isCanvasPressed(),
      'broken-mix-blend-mode': !this.hasMixBlendModeSupport(),
    };
  }

  private loadManifest(): void {
    this.iiifManifestService
      .load(this.activeManifestUri())
      .pipe(take(1))
      .subscribe();
  }

  private initialize() {
    this.accessKeysHandlerService.initialize();
    this.attributionDialogService.initialize();
    this.viewDialogService.initialize();
    this.informationDialogService.initialize();
    this.contentSearchDialogService.initialize();
    this.helpDialogService.initialize();
    this.viewerService.initialize();
    this.resizeService.initialize();
  }

  private cleanup() {
    this.viewerState = new ViewerState();
    this.pendingStartCanvasId = null;
    this.accessKeysHandlerService.destroy();
    this.attributionDialogService.destroy();
    this.viewDialogService.destroy();
    this.informationDialogService.destroy();
    this.contentSearchDialogService.destroy();
    this.helpDialogService.destroy();
    this.viewerService.destroy();
    this.resizeService.destroy();
    this.resetErrorMessage();
  }

  private goToPendingStartCanvas(manifest: Manifest): void {
    const startCanvasId = this.pendingStartCanvasId;
    this.pendingStartCanvasId = null;
    if (!startCanvasId) {
      return;
    }

    const canvasIndex =
      manifest.sequences?.[0]?.canvases?.findIndex(
        (canvas) => canvas.id === startCanvasId,
      ) ?? -1;
    if (canvasIndex > 0) {
      setTimeout(() => {
        this.viewerService.goToCanvas(canvasIndex, true);
      }, 0);
    }
  }

  private resetCurrentManifest(): void {
    this.currentManifest = null;
  }

  private resetErrorMessage(): void {
    this.errorMessage.set(null);
  }

  private hasMixBlendModeSupport(): boolean {
    return !(this.platform.FIREFOX || this.platform.SAFARI);
  }
}
