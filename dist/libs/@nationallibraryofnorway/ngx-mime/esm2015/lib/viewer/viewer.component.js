import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, NgZone, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges, ViewChild, ViewContainerRef, AfterViewChecked } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, interval } from 'rxjs';
import { throttle, takeUntil, take } from 'rxjs/operators';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { ContentsDialogService } from '../contents-dialog/contents-dialog.service';
import { AttributionDialogService } from '../attribution-dialog/attribution-dialog.service';
import { ContentSearchDialogService } from '../content-search-dialog/content-search-dialog.service';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { ModeService } from '../core/mode-service/mode.service';
import { ViewerMode } from '../core/models/viewer-mode';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { MimeViewerConfig } from '../core/mime-viewer-config';
import { IiifContentSearchService } from './../core/iiif-content-search-service/iiif-content-search.service';
import { ViewerOptions } from '../core/models/viewer-options';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { AccessKeysService } from '../core/access-keys-handler-service/access-keys.service';
import { ViewerLayout } from '../core/models/viewer-layout';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ManifestUtils } from '../core/iiif-manifest-service/iiif-manifest-utils';
import { ViewerState } from '../core/models/viewerState';
import { StyleService } from '../core/style-service/style.service';
import { HelpDialogService } from '../help-dialog/help-dialog.service';
let ViewerComponent = class ViewerComponent {
    constructor(snackBar, intl, el, iiifManifestService, contentsDialogService, attributionDialogService, contentSearchDialogService, helpDialogService, viewerService, mimeService, changeDetectorRef, modeService, iiifContentSearchService, accessKeysHandlerService, canvasService, viewerLayoutService, styleService, zone) {
        this.snackBar = snackBar;
        this.intl = intl;
        this.el = el;
        this.iiifManifestService = iiifManifestService;
        this.contentsDialogService = contentsDialogService;
        this.attributionDialogService = attributionDialogService;
        this.contentSearchDialogService = contentSearchDialogService;
        this.helpDialogService = helpDialogService;
        this.viewerService = viewerService;
        this.mimeService = mimeService;
        this.changeDetectorRef = changeDetectorRef;
        this.modeService = modeService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.accessKeysHandlerService = accessKeysHandlerService;
        this.canvasService = canvasService;
        this.viewerLayoutService = viewerLayoutService;
        this.styleService = styleService;
        this.zone = zone;
        this.config = new MimeViewerConfig();
        this.tabIndex = 0;
        this.viewerModeChanged = new EventEmitter();
        this.canvasChanged = new EventEmitter();
        this.qChanged = new EventEmitter();
        this.manifestChanged = new EventEmitter();
        this.destroyed = new Subject();
        this.isCanvasPressed = false;
        this.viewerState = new ViewerState();
        this.errorMessage = null;
        contentsDialogService.el = el;
        attributionDialogService.el = el;
        contentSearchDialogService.el = el;
        helpDialogService.el = el;
        mimeService.el = el;
    }
    get mimeHeaderBeforeRef() {
        return this.header.mimeHeaderBefore;
    }
    get mimeHeaderAfterRef() {
        return this.header.mimeHeaderAfter;
    }
    get mimeFooterBeforeRef() {
        return this.footer.mimeFooterBefore;
    }
    get mimeFooterAfterRef() {
        return this.footer.mimeFooterAfter;
    }
    ngOnInit() {
        this.styleService.init();
        this.modeService.initialMode = this.config.initViewerMode;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe((manifest) => {
            if (manifest) {
                this.initialize();
                this.currentManifest = manifest;
                this.manifestChanged.next(manifest);
                this.viewerLayoutService.init(ManifestUtils.isManifestPaged(manifest));
                this.changeDetectorRef.detectChanges();
                this.viewerService.setUpViewer(manifest, this.config);
                if (this.config.attributionDialogEnabled && manifest.attribution) {
                    this.attributionDialogService.open(this.config.attributionDialogHideTimeout);
                }
                if (this.q) {
                    this.iiifContentSearchService.search(manifest, this.q);
                }
            }
        });
        this.viewerService.onOsdReadyChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((state) => {
            // Don't reset current page when switching layout
            if (state &&
                this.canvasIndex &&
                !this.canvasService.currentCanvasGroupIndex) {
                this.viewerService.goToCanvas(this.canvasIndex, false);
            }
        });
        this.iiifManifestService.errorMessage
            .pipe(takeUntil(this.destroyed))
            .subscribe((error) => {
            this.resetCurrentManifest();
            this.errorMessage = error;
            this.changeDetectorRef.detectChanges();
        });
        this.iiifContentSearchService.onQChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((q) => {
            this.qChanged.emit(q);
        });
        this.iiifContentSearchService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((sr) => {
            this.viewerService.highlight(sr);
        });
        this.viewerService.isCanvasPressed
            .pipe(takeUntil(this.destroyed))
            .subscribe((value) => {
            this.isCanvasPressed = value;
            this.changeDetectorRef.detectChanges();
        });
        this.modeService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((mode) => {
            this.toggleToolbarsState(mode.currentValue);
            if (mode.previousValue === ViewerMode.DASHBOARD &&
                mode.currentValue === ViewerMode.PAGE) {
                this.viewerState.contentDialogState.isOpen = this.contentsDialogService.isOpen();
                this.viewerState.contentDialogState.selectedIndex = this.contentsDialogService.getSelectedIndex();
                this.viewerState.contentsSearchDialogState.isOpen = this.contentSearchDialogService.isOpen();
                this.viewerState.helpDialogState.isOpen = this.helpDialogService.isOpen();
                this.zone.run(() => {
                    this.contentsDialogService.close();
                    this.contentSearchDialogService.close();
                    this.helpDialogService.close();
                });
            }
            if (mode.currentValue === ViewerMode.DASHBOARD) {
                this.zone.run(() => {
                    if (this.viewerState.contentDialogState.isOpen) {
                        this.contentsDialogService.open(this.viewerState.contentDialogState.selectedIndex);
                    }
                    if (this.viewerState.contentsSearchDialogState.isOpen) {
                        this.contentSearchDialogService.open();
                    }
                    if (this.viewerState.helpDialogState.isOpen) {
                        this.helpDialogService.open();
                    }
                });
            }
            this.viewerModeChanged.emit(mode.currentValue);
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((canvasGroupIndex) => {
            const canvasIndex = this.canvasService.findCanvasByCanvasIndex(canvasGroupIndex);
            if (canvasIndex !== -1) {
                this.canvasChanged.emit(canvasIndex);
            }
        });
        this.mimeService.onResize
            .pipe(takeUntil(this.destroyed), throttle(val => interval(ViewerOptions.transitions.OSDAnimationTime)))
            .subscribe(() => {
            setTimeout(() => {
                this.viewerService.home();
            }, ViewerOptions.transitions.OSDAnimationTime);
        });
        this.viewerLayoutService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((viewerLayout) => {
            this.viewerLayout = viewerLayout;
        });
        this.loadManifest();
    }
    ngOnChanges(changes) {
        let manifestUriIsChanged = false;
        let qIsChanged = false;
        let canvasIndexChanged = false;
        if (changes['q']) {
            const qChanges = changes['q'];
            if (!qChanges.isFirstChange() &&
                qChanges.currentValue !== qChanges.firstChange) {
                this.q = qChanges.currentValue;
                qIsChanged = true;
            }
        }
        if (changes['canvasIndex']) {
            const canvasIndexChanges = changes['canvasIndex'];
            if (!canvasIndexChanges.isFirstChange() &&
                canvasIndexChanges.currentValue !== canvasIndexChanges.firstChange) {
                this.canvasIndex = canvasIndexChanges.currentValue;
                canvasIndexChanged = true;
            }
        }
        if (changes['manifestUri']) {
            const manifestUriChanges = changes['manifestUri'];
            if (!manifestUriChanges.isFirstChange() &&
                manifestUriChanges.currentValue !== manifestUriChanges.previousValue) {
                this.modeService.mode = this.config.initViewerMode;
                this.manifestUri = manifestUriChanges.currentValue;
                manifestUriIsChanged = true;
            }
        }
        if (manifestUriIsChanged) {
            this.loadManifest();
        }
        else {
            if (qIsChanged) {
                this.iiifContentSearchService.search(this.currentManifest, this.q);
            }
            if (canvasIndexChanged) {
                this.viewerService.goToCanvas(this.canvasIndex, true);
            }
        }
    }
    handleKeys(event) {
        this.accessKeysHandlerService.handleKeyEvents(event);
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.config.isDropEnabled) {
            const url = event.dataTransfer.getData('URL');
            const params = new URL(url).searchParams;
            const manifestUri = params.get('manifest');
            const startCanvasId = params.get('canvas');
            if (manifestUri) {
                this.manifestUri = manifestUri.startsWith('//')
                    ? `${location.protocol}${manifestUri}`
                    : manifestUri;
                this.loadManifest();
                if (startCanvasId) {
                    this.manifestChanged.pipe(take(1)).subscribe(manifest => {
                        const canvasIndex = manifest.sequences[0].canvases.findIndex(c => c.id === startCanvasId);
                        if (canvasIndex !== -1) {
                            setTimeout(() => {
                                this.viewerService.goToCanvas(canvasIndex, true);
                            }, 0);
                        }
                    });
                }
            }
        }
        else {
            this.snackBar.open(this.intl.dropDisabled, null, {
                duration: 3000
            });
        }
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
        this.cleanup();
        this.iiifManifestService.destroy();
        this.iiifContentSearchService.destroy();
    }
    toggleToolbarsState(mode) {
        if (this.header && this.footer) {
            switch (mode) {
                case ViewerMode.DASHBOARD:
                    this.header.state = this.footer.state = 'show';
                    if (this.config.navigationControlEnabled && this.osdToolbar) {
                        this.osdToolbar.state = 'hide';
                    }
                    break;
                case ViewerMode.PAGE:
                    this.header.state = this.footer.state = 'hide';
                    if (this.config.navigationControlEnabled && this.osdToolbar) {
                        this.osdToolbar.state = 'show';
                    }
                    break;
            }
            this.changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewChecked() {
        this.mimeService.markForCheck();
    }
    loadManifest() {
        this.cleanup();
        this.iiifManifestService.load(this.manifestUri);
    }
    initialize() {
        this.attributionDialogService.initialize();
        this.contentsDialogService.initialize();
        this.contentSearchDialogService.initialize();
        this.helpDialogService.initialize();
    }
    cleanup() {
        this.viewerState = new ViewerState();
        this.attributionDialogService.destroy();
        this.contentsDialogService.destroy();
        this.contentSearchDialogService.destroy();
        this.helpDialogService.destroy();
        this.viewerService.destroy();
        this.resetErrorMessage();
    }
    resetCurrentManifest() {
        this.currentManifest = null;
    }
    resetErrorMessage() {
        this.errorMessage = null;
    }
    setClasses() {
        return {
            'mode-page': this.modeService.mode === ViewerMode.PAGE,
            'mode-page-zoomed': this.modeService.mode === ViewerMode.PAGE_ZOOMED,
            'mode-dashboard': this.modeService.mode === ViewerMode.DASHBOARD,
            'layout-one-page': this.viewerLayout === ViewerLayout.ONE_PAGE,
            'layout-two-page': this.viewerLayout === ViewerLayout.TWO_PAGE,
            'canvas-pressed': this.isCanvasPressed
        };
    }
};
ViewerComponent.ctorParameters = () => [
    { type: MatSnackBar },
    { type: MimeViewerIntl },
    { type: ElementRef },
    { type: IiifManifestService },
    { type: ContentsDialogService },
    { type: AttributionDialogService },
    { type: ContentSearchDialogService },
    { type: HelpDialogService },
    { type: ViewerService },
    { type: MimeResizeService },
    { type: ChangeDetectorRef },
    { type: ModeService },
    { type: IiifContentSearchService },
    { type: AccessKeysService },
    { type: CanvasService },
    { type: ViewerLayoutService },
    { type: StyleService },
    { type: NgZone }
];
__decorate([
    Input()
], ViewerComponent.prototype, "manifestUri", void 0);
__decorate([
    Input()
], ViewerComponent.prototype, "q", void 0);
__decorate([
    Input()
], ViewerComponent.prototype, "canvasIndex", void 0);
__decorate([
    Input()
], ViewerComponent.prototype, "config", void 0);
__decorate([
    Input()
], ViewerComponent.prototype, "tabIndex", void 0);
__decorate([
    Output()
], ViewerComponent.prototype, "viewerModeChanged", void 0);
__decorate([
    Output()
], ViewerComponent.prototype, "canvasChanged", void 0);
__decorate([
    Output()
], ViewerComponent.prototype, "qChanged", void 0);
__decorate([
    Output()
], ViewerComponent.prototype, "manifestChanged", void 0);
__decorate([
    ViewChild('mimeHeader', { static: true })
], ViewerComponent.prototype, "header", void 0);
__decorate([
    ViewChild('mimeFooter', { static: true })
], ViewerComponent.prototype, "footer", void 0);
__decorate([
    ViewChild('mimeOsdToolbar')
], ViewerComponent.prototype, "osdToolbar", void 0);
__decorate([
    HostListener('keyup', ['$event'])
], ViewerComponent.prototype, "handleKeys", null);
__decorate([
    HostListener('drop', ['$event'])
], ViewerComponent.prototype, "onDrop", null);
__decorate([
    HostListener('dragover', ['$event'])
], ViewerComponent.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event'])
], ViewerComponent.prototype, "onDragLeave", null);
ViewerComponent = __decorate([
    Component({
        selector: 'mime-viewer',
        template: "<div\n  id=\"mimeViewer\"\n  class=\"viewer-container\"\n  [ngClass]=\"setClasses()\"\n  [hidden]=\"errorMessage !== null\"\n  [tabIndex]=\"tabIndex\"\n>\n  <mime-spinner></mime-spinner>\n  <mime-viewer-header\n    class=\"navbar navbar-header\"\n    #mimeHeader\n  ></mime-viewer-header>\n  <mime-osd-toolbar\n    *ngIf=\"config?.navigationControlEnabled\"\n    #mimeOsdToolbar\n  ></mime-osd-toolbar>\n  <div id=\"openseadragon\"></div>\n  <mime-viewer-footer\n    class=\"navbar navbar-footer\"\n    #mimeFooter\n  ></mime-viewer-footer>\n</div>\n\n<div\n  class=\"error-container\"\n  *ngIf=\"errorMessage\"\n  fxLayout=\"column\"\n  fxLayoutAlign=\"center center\"\n>\n  <span>{{ intl.somethingHasGoneWrongLabel }}</span>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".viewer-container{overflow:hidden;box-sizing:border-box;position:relative;width:100%;height:100%;display:flex;flex-direction:column}:host::ng-deep.openseadragon-container{flex-grow:1}:host::ng-deep.openseadragon-canvas:focus{outline:0}#openseadragon{display:flex;flex-grow:1;flex-direction:column;opacity:0;width:100%}::ng-deep .viewer-container.mode-page-zoomed .tile:hover{cursor:-webkit-grab}.viewer-container.canvas-pressed,.viewer-container.canvas-pressed::ng-deep.tile:hover{cursor:grabbing;cursor:-webkit-grabbing}::ng-deep .viewer-container .tile{cursor:pointer;fill-opacity:0}::ng-deep .viewer-container.mode-dashboard.layout-one-page .tile,::ng-deep .viewer-container.mode-dashboard.layout-two-page .page-group .tile{stroke:rgba(0,0,0,.15);stroke-width:8;transition:stroke .25s}::ng-deep .viewer-container.mode-dashboard.layout-one-page .tile:hover,::ng-deep .viewer-container.mode-dashboard.layout-two-page .page-group:hover .tile{stroke:rgba(0,0,0,.45)}::ng-deep .viewer-container .hit{fill:rgba(255,255,0,.6)}::ng-deep .viewer-container .selected{fill:rgba(255,225,0,.6)}.navbar{position:absolute;width:100%;overflow:hidden;z-index:2}.navbar-header{top:0;width:100%}.navbar-footer{bottom:0}::ng-deep .cdk-overlay-container{z-index:2147483647}.error-container{width:100%;height:100%}[hidden]{display:none}"]
    })
], ViewerComponent);
export { ViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3ZXIvdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXBGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXRFLE9BQU8s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QUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aURBR2pDO0FBR0Q7SUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7NkNBZ0NoQztBQUdEO0lBREMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lEQUlwQztBQUdEO0lBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2tEQUlyQztBQTlTVSxlQUFlO0lBTjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLDR1QkFBc0M7UUFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyxlQUFlLENBd1gzQjtTQXhYWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBBZnRlclZpZXdDaGVja2VkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgU3ViamVjdCwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlLCB0YWtlVW50aWwsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGVudHNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vY29udGVudHMtZGlhbG9nL2NvbnRlbnRzLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2F0dHJpYnV0aW9uLWRpYWxvZy9hdHRyaWJ1dGlvbi1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZW50U2VhcmNoRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy9jb250ZW50LXNlYXJjaC1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lUmVzaXplU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbWltZS1yZXNpemUtc2VydmljZS9taW1lLXJlc2l6ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi4vY29yZS9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgTW9kZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL21vZGUtc2VydmljZS9tb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld2VyTW9kZSB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL3ZpZXdlci1tb2RlJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdlckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdmlld2VyLWhlYWRlci92aWV3ZXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3ZXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci1mb290ZXIvdmlld2VyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3NkVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vb3NkLXRvb2xiYXIvb3NkLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdlclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3ZpZXdlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJDb25maWcgfSBmcm9tICcuLi9jb3JlL21pbWUtdmlld2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLy4uL2NvcmUvaWlpZi1jb250ZW50LXNlYXJjaC1zZXJ2aWNlL2lpaWYtY29udGVudC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLy4uL2NvcmUvbW9kZWxzL3NlYXJjaC1yZXN1bHQnO1xuaW1wb3J0IHsgVmlld2VyT3B0aW9ucyB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL3ZpZXdlci1vcHRpb25zJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IEFjY2Vzc0tleXNTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9hY2Nlc3Mta2V5cy1oYW5kbGVyLXNlcnZpY2UvYWNjZXNzLWtleXMuc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXQgfSBmcm9tICcuLi9jb3JlL21vZGVscy92aWV3ZXItbGF5b3V0JztcbmltcG9ydCB7IFZpZXdlckxheW91dFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3ZpZXdlci1sYXlvdXQtc2VydmljZS92aWV3ZXItbGF5b3V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWFuaWZlc3RVdGlscyB9IGZyb20gJy4uL2NvcmUvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3QtdXRpbHMnO1xuaW1wb3J0IHsgVmlld2VyU3RhdGUgfSBmcm9tICcuLi9jb3JlL21vZGVscy92aWV3ZXJTdGF0ZSc7XG5pbXBvcnQgeyBNb2RlQ2hhbmdlcyB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL21vZGVDaGFuZ2VzJztcbmltcG9ydCB7IFN0eWxlU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc3R5bGUtc2VydmljZS9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vaGVscC1kaWFsb2cvaGVscC1kaWFsb2cuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pbWUtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIG1hbmlmZXN0VXJpOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBxOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjYW52YXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgY29uZmlnOiBNaW1lVmlld2VyQ29uZmlnID0gbmV3IE1pbWVWaWV3ZXJDb25maWcoKTtcbiAgQElucHV0KCkgcHVibGljIHRhYkluZGV4ID0gMDtcbiAgQE91dHB1dCgpIHZpZXdlck1vZGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Vmlld2VyTW9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjYW52YXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHFDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1hbmlmZXN0Q2hhbmdlZDogRXZlbnRFbWl0dGVyPE1hbmlmZXN0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaXNDYW52YXNQcmVzc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgY3VycmVudE1hbmlmZXN0OiBNYW5pZmVzdDtcbiAgcHJpdmF0ZSB2aWV3ZXJMYXlvdXQ6IFZpZXdlckxheW91dDtcbiAgcHJpdmF0ZSB2aWV3ZXJTdGF0ZSA9IG5ldyBWaWV3ZXJTdGF0ZSgpO1xuXG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZyA9IG51bGw7XG5cbiAgLy8gVmlld2NoaWxkc1xuICBAVmlld0NoaWxkKCdtaW1lSGVhZGVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBoZWFkZXI6IFZpZXdlckhlYWRlckNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnbWltZUZvb3RlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgZm9vdGVyOiBWaWV3ZXJGb290ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ21pbWVPc2RUb29sYmFyJylcbiAgcHJpdmF0ZSBvc2RUb29sYmFyOiBPc2RUb29sYmFyQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpaWlmTWFuaWZlc3RTZXJ2aWNlOiBJaWlmTWFuaWZlc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udGVudHNEaWFsb2dTZXJ2aWNlOiBDb250ZW50c0RpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGlvbkRpYWxvZ1NlcnZpY2U6IEF0dHJpYnV0aW9uRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlOiBDb250ZW50U2VhcmNoRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGhlbHBEaWFsb2dTZXJ2aWNlOiBIZWxwRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtaW1lU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBtb2RlU2VydmljZTogTW9kZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmQ29udGVudFNlYXJjaFNlcnZpY2U6IElpaWZDb250ZW50U2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIGFjY2Vzc0tleXNIYW5kbGVyU2VydmljZTogQWNjZXNzS2V5c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmlld2VyTGF5b3V0U2VydmljZTogVmlld2VyTGF5b3V0U2VydmljZSxcbiAgICBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLFxuICAgIHB1YmxpYyB6b25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgY29udGVudHNEaWFsb2dTZXJ2aWNlLmVsID0gZWw7XG4gICAgYXR0cmlidXRpb25EaWFsb2dTZXJ2aWNlLmVsID0gZWw7XG4gICAgY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuZWwgPSBlbDtcbiAgICBoZWxwRGlhbG9nU2VydmljZS5lbCA9IGVsO1xuICAgIG1pbWVTZXJ2aWNlLmVsID0gZWw7XG4gIH1cblxuICBnZXQgbWltZUhlYWRlckJlZm9yZVJlZigpOiBWaWV3Q29udGFpbmVyUmVmIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkZXIubWltZUhlYWRlckJlZm9yZTtcbiAgfVxuXG4gIGdldCBtaW1lSGVhZGVyQWZ0ZXJSZWYoKTogVmlld0NvbnRhaW5lclJlZiB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyLm1pbWVIZWFkZXJBZnRlcjtcbiAgfVxuXG4gIGdldCBtaW1lRm9vdGVyQmVmb3JlUmVmKCk6IFZpZXdDb250YWluZXJSZWYge1xuICAgIHJldHVybiB0aGlzLmZvb3Rlci5taW1lRm9vdGVyQmVmb3JlO1xuICB9XG5cbiAgZ2V0IG1pbWVGb290ZXJBZnRlclJlZigpOiBWaWV3Q29udGFpbmVyUmVmIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXIubWltZUZvb3RlckFmdGVyO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZVNlcnZpY2UuaW5pdCgpO1xuICAgIHRoaXMubW9kZVNlcnZpY2UuaW5pdGlhbE1vZGUgPSB0aGlzLmNvbmZpZy5pbml0Vmlld2VyTW9kZTtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIGlmIChtYW5pZmVzdCkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgIHRoaXMuY3VycmVudE1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gICAgICAgICAgdGhpcy5tYW5pZmVzdENoYW5nZWQubmV4dChtYW5pZmVzdCk7XG4gICAgICAgICAgdGhpcy52aWV3ZXJMYXlvdXRTZXJ2aWNlLmluaXQoXG4gICAgICAgICAgICBNYW5pZmVzdFV0aWxzLmlzTWFuaWZlc3RQYWdlZChtYW5pZmVzdClcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIHRoaXMudmlld2VyU2VydmljZS5zZXRVcFZpZXdlcihtYW5pZmVzdCwgdGhpcy5jb25maWcpO1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdHRyaWJ1dGlvbkRpYWxvZ0VuYWJsZWQgJiYgbWFuaWZlc3QuYXR0cmlidXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRpb25EaWFsb2dTZXJ2aWNlLm9wZW4oXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLmF0dHJpYnV0aW9uRGlhbG9nSGlkZVRpbWVvdXRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMucSkge1xuICAgICAgICAgICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uuc2VhcmNoKG1hbmlmZXN0LCB0aGlzLnEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnZpZXdlclNlcnZpY2Uub25Pc2RSZWFkeUNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHJlc2V0IGN1cnJlbnQgcGFnZSB3aGVuIHN3aXRjaGluZyBsYXlvdXRcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN0YXRlICYmXG4gICAgICAgICAgdGhpcy5jYW52YXNJbmRleCAmJlxuICAgICAgICAgICF0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9DYW52YXModGhpcy5jYW52YXNJbmRleCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuaWlpZk1hbmlmZXN0U2VydmljZS5lcnJvck1lc3NhZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChlcnJvcjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRDdXJyZW50TWFuaWZlc3QoKTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLm9uUUNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHE6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnFDaGFuZ2VkLmVtaXQocSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLm9uQ2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoc3I6IFNlYXJjaFJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnZpZXdlclNlcnZpY2UuaGlnaGxpZ2h0KHNyKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmlzQ2FudmFzUHJlc3NlZFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuaXNDYW52YXNQcmVzc2VkID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm1vZGVTZXJ2aWNlLm9uQ2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobW9kZTogTW9kZUNoYW5nZXMpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sYmFyc1N0YXRlKG1vZGUuY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZGUucHJldmlvdXNWYWx1ZSA9PT0gVmlld2VyTW9kZS5EQVNIQk9BUkQgJiZcbiAgICAgICAgICBtb2RlLmN1cnJlbnRWYWx1ZSA9PT0gVmlld2VyTW9kZS5QQUdFXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudmlld2VyU3RhdGUuY29udGVudERpYWxvZ1N0YXRlLmlzT3BlbiA9IHRoaXMuY29udGVudHNEaWFsb2dTZXJ2aWNlLmlzT3BlbigpO1xuICAgICAgICAgIHRoaXMudmlld2VyU3RhdGUuY29udGVudERpYWxvZ1N0YXRlLnNlbGVjdGVkSW5kZXggPSB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5nZXRTZWxlY3RlZEluZGV4KCk7XG4gICAgICAgICAgdGhpcy52aWV3ZXJTdGF0ZS5jb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlLmlzT3BlbiA9IHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuaXNPcGVuKCk7XG4gICAgICAgICAgdGhpcy52aWV3ZXJTdGF0ZS5oZWxwRGlhbG9nU3RhdGUuaXNPcGVuID0gdGhpcy5oZWxwRGlhbG9nU2VydmljZS5pc09wZW4oKTtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudHNEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmhlbHBEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZGUuY3VycmVudFZhbHVlID09PSBWaWV3ZXJNb2RlLkRBU0hCT0FSRCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlld2VyU3RhdGUuY29udGVudERpYWxvZ1N0YXRlLmlzT3Blbikge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgICAgICAgICAgIHRoaXMudmlld2VyU3RhdGUuY29udGVudERpYWxvZ1N0YXRlLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdlclN0YXRlLmNvbnRlbnRzU2VhcmNoRGlhbG9nU3RhdGUuaXNPcGVuKSB7XG4gICAgICAgICAgICAgIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2Uub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmlld2VyU3RhdGUuaGVscERpYWxvZ1N0YXRlLmlzT3Blbikge1xuICAgICAgICAgICAgICB0aGlzLmhlbHBEaWFsb2dTZXJ2aWNlLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdlck1vZGVDaGFuZ2VkLmVtaXQobW9kZS5jdXJyZW50VmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNhbnZhc1NlcnZpY2Uub25DYW52YXNHcm91cEluZGV4Q2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoY2FudmFzR3JvdXBJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhc0luZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDYW52YXNCeUNhbnZhc0luZGV4KFxuICAgICAgICAgIGNhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNhbnZhc0luZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuY2FudmFzQ2hhbmdlZC5lbWl0KGNhbnZhc0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLm1pbWVTZXJ2aWNlLm9uUmVzaXplXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSxcbiAgICAgICAgdGhyb3R0bGUodmFsID0+IGludGVydmFsKFZpZXdlck9wdGlvbnMudHJhbnNpdGlvbnMuT1NEQW5pbWF0aW9uVGltZSkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmhvbWUoKTtcbiAgICAgICAgfSwgVmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy5PU0RBbmltYXRpb25UaW1lKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy52aWV3ZXJMYXlvdXRTZXJ2aWNlLm9uQ2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgodmlld2VyTGF5b3V0OiBWaWV3ZXJMYXlvdXQpID0+IHtcbiAgICAgICAgdGhpcy52aWV3ZXJMYXlvdXQgPSB2aWV3ZXJMYXlvdXQ7XG4gICAgICB9KTtcblxuICAgIHRoaXMubG9hZE1hbmlmZXN0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgbGV0IG1hbmlmZXN0VXJpSXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgbGV0IHFJc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBsZXQgY2FudmFzSW5kZXhDaGFuZ2VkID0gZmFsc2U7XG4gICAgaWYgKGNoYW5nZXNbJ3EnXSkge1xuICAgICAgY29uc3QgcUNoYW5nZXM6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ3EnXTtcbiAgICAgIGlmIChcbiAgICAgICAgIXFDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSAmJlxuICAgICAgICBxQ2hhbmdlcy5jdXJyZW50VmFsdWUgIT09IHFDaGFuZ2VzLmZpcnN0Q2hhbmdlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5xID0gcUNoYW5nZXMuY3VycmVudFZhbHVlO1xuICAgICAgICBxSXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXNbJ2NhbnZhc0luZGV4J10pIHtcbiAgICAgIGNvbnN0IGNhbnZhc0luZGV4Q2hhbmdlczogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snY2FudmFzSW5kZXgnXTtcbiAgICAgIGlmIChcbiAgICAgICAgIWNhbnZhc0luZGV4Q2hhbmdlcy5pc0ZpcnN0Q2hhbmdlKCkgJiZcbiAgICAgICAgY2FudmFzSW5kZXhDaGFuZ2VzLmN1cnJlbnRWYWx1ZSAhPT0gY2FudmFzSW5kZXhDaGFuZ2VzLmZpcnN0Q2hhbmdlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jYW52YXNJbmRleCA9IGNhbnZhc0luZGV4Q2hhbmdlcy5jdXJyZW50VmFsdWU7XG4gICAgICAgIGNhbnZhc0luZGV4Q2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydtYW5pZmVzdFVyaSddKSB7XG4gICAgICBjb25zdCBtYW5pZmVzdFVyaUNoYW5nZXM6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ21hbmlmZXN0VXJpJ107XG4gICAgICBpZiAoXG4gICAgICAgICFtYW5pZmVzdFVyaUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpICYmXG4gICAgICAgIG1hbmlmZXN0VXJpQ2hhbmdlcy5jdXJyZW50VmFsdWUgIT09IG1hbmlmZXN0VXJpQ2hhbmdlcy5wcmV2aW91c1ZhbHVlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID0gdGhpcy5jb25maWcuaW5pdFZpZXdlck1vZGU7XG4gICAgICAgIHRoaXMubWFuaWZlc3RVcmkgPSBtYW5pZmVzdFVyaUNoYW5nZXMuY3VycmVudFZhbHVlO1xuICAgICAgICBtYW5pZmVzdFVyaUlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1hbmlmZXN0VXJpSXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmxvYWRNYW5pZmVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocUlzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5zZWFyY2godGhpcy5jdXJyZW50TWFuaWZlc3QsIHRoaXMucSk7XG4gICAgICB9XG4gICAgICBpZiAoY2FudmFzSW5kZXhDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzKHRoaXMuY2FudmFzSW5kZXgsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlS2V5cyhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuYWNjZXNzS2V5c0hhbmRsZXJTZXJ2aWNlLmhhbmRsZUtleUV2ZW50cyhldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJvcChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5jb25maWcuaXNEcm9wRW5hYmxlZCkge1xuICAgICAgY29uc3QgdXJsID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ1VSTCcpO1xuICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTCh1cmwpLnNlYXJjaFBhcmFtcztcbiAgICAgIGNvbnN0IG1hbmlmZXN0VXJpID0gcGFyYW1zLmdldCgnbWFuaWZlc3QnKTtcbiAgICAgIGNvbnN0IHN0YXJ0Q2FudmFzSWQgPSBwYXJhbXMuZ2V0KCdjYW52YXMnKTtcbiAgICAgIGlmIChtYW5pZmVzdFVyaSkge1xuICAgICAgICB0aGlzLm1hbmlmZXN0VXJpID0gbWFuaWZlc3RVcmkuc3RhcnRzV2l0aCgnLy8nKVxuICAgICAgICAgID8gYCR7bG9jYXRpb24ucHJvdG9jb2x9JHttYW5pZmVzdFVyaX1gXG4gICAgICAgICAgOiBtYW5pZmVzdFVyaTtcbiAgICAgICAgdGhpcy5sb2FkTWFuaWZlc3QoKTtcbiAgICAgICAgaWYgKHN0YXJ0Q2FudmFzSWQpIHtcbiAgICAgICAgICB0aGlzLm1hbmlmZXN0Q2hhbmdlZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZShtYW5pZmVzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNJbmRleCA9IG1hbmlmZXN0LnNlcXVlbmNlc1swXS5jYW52YXNlcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgIGMgPT4gYy5pZCA9PT0gc3RhcnRDYW52YXNJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChjYW52YXNJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9DYW52YXMoY2FudmFzSW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNuYWNrQmFyLm9wZW4odGhpcy5pbnRsLmRyb3BEaXNhYmxlZCwgbnVsbCwge1xuICAgICAgICBkdXJhdGlvbjogMzAwMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuaWlpZk1hbmlmZXN0U2VydmljZS5kZXN0cm95KCk7XG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgdG9nZ2xlVG9vbGJhcnNTdGF0ZShtb2RlOiBWaWV3ZXJNb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGVhZGVyICYmIHRoaXMuZm9vdGVyKSB7XG4gICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgY2FzZSBWaWV3ZXJNb2RlLkRBU0hCT0FSRDpcbiAgICAgICAgICB0aGlzLmhlYWRlci5zdGF0ZSA9IHRoaXMuZm9vdGVyLnN0YXRlID0gJ3Nob3cnO1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5uYXZpZ2F0aW9uQ29udHJvbEVuYWJsZWQgJiYgdGhpcy5vc2RUb29sYmFyKSB7XG4gICAgICAgICAgICB0aGlzLm9zZFRvb2xiYXIuc3RhdGUgPSAnaGlkZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFZpZXdlck1vZGUuUEFHRTpcbiAgICAgICAgICB0aGlzLmhlYWRlci5zdGF0ZSA9IHRoaXMuZm9vdGVyLnN0YXRlID0gJ2hpZGUnO1xuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5uYXZpZ2F0aW9uQ29udHJvbEVuYWJsZWQgJiYgdGhpcy5vc2RUb29sYmFyKSB7XG4gICAgICAgICAgICB0aGlzLm9zZFRvb2xiYXIuc3RhdGUgPSAnc2hvdyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMubWltZVNlcnZpY2UubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRNYW5pZmVzdCgpIHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UubG9hZCh0aGlzLm1hbmlmZXN0VXJpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuaGVscERpYWxvZ1NlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbnVwKCkge1xuICAgIHRoaXMudmlld2VyU3RhdGUgPSBuZXcgVmlld2VyU3RhdGUoKTtcbiAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nU2VydmljZS5kZXN0cm95KCk7XG4gICAgdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2UuZGVzdHJveSgpO1xuICAgIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuZGVzdHJveSgpO1xuICAgIHRoaXMuaGVscERpYWxvZ1NlcnZpY2UuZGVzdHJveSgpO1xuICAgIHRoaXMudmlld2VyU2VydmljZS5kZXN0cm95KCk7XG4gICAgdGhpcy5yZXNldEVycm9yTWVzc2FnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEN1cnJlbnRNYW5pZmVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRNYW5pZmVzdCA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RXJyb3JNZXNzYWdlKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcbiAgfVxuXG4gIHNldENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtb2RlLXBhZ2UnOiB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRSxcbiAgICAgICdtb2RlLXBhZ2Utem9vbWVkJzogdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0VfWk9PTUVELFxuICAgICAgJ21vZGUtZGFzaGJvYXJkJzogdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLkRBU0hCT0FSRCxcbiAgICAgICdsYXlvdXQtb25lLXBhZ2UnOiB0aGlzLnZpZXdlckxheW91dCA9PT0gVmlld2VyTGF5b3V0Lk9ORV9QQUdFLFxuICAgICAgJ2xheW91dC10d28tcGFnZSc6IHRoaXMudmlld2VyTGF5b3V0ID09PSBWaWV3ZXJMYXlvdXQuVFdPX1BBR0UsXG4gICAgICAnY2FudmFzLXByZXNzZWQnOiB0aGlzLmlzQ2FudmFzUHJlc3NlZFxuICAgIH07XG4gIH1cbn1cbiJdfQ==