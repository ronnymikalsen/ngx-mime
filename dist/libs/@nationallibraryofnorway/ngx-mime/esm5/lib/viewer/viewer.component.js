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
var ViewerComponent = /** @class */ (function () {
    function ViewerComponent(snackBar, intl, el, iiifManifestService, contentsDialogService, attributionDialogService, contentSearchDialogService, helpDialogService, viewerService, mimeService, changeDetectorRef, modeService, iiifContentSearchService, accessKeysHandlerService, canvasService, viewerLayoutService, styleService, zone) {
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
    Object.defineProperty(ViewerComponent.prototype, "mimeHeaderBeforeRef", {
        get: function () {
            return this.header.mimeHeaderBefore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "mimeHeaderAfterRef", {
        get: function () {
            return this.header.mimeHeaderAfter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "mimeFooterBeforeRef", {
        get: function () {
            return this.footer.mimeFooterBefore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerComponent.prototype, "mimeFooterAfterRef", {
        get: function () {
            return this.footer.mimeFooterAfter;
        },
        enumerable: true,
        configurable: true
    });
    ViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.styleService.init();
        this.modeService.initialMode = this.config.initViewerMode;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            if (manifest) {
                _this.initialize();
                _this.currentManifest = manifest;
                _this.manifestChanged.next(manifest);
                _this.viewerLayoutService.init(ManifestUtils.isManifestPaged(manifest));
                _this.changeDetectorRef.detectChanges();
                _this.viewerService.setUpViewer(manifest, _this.config);
                if (_this.config.attributionDialogEnabled && manifest.attribution) {
                    _this.attributionDialogService.open(_this.config.attributionDialogHideTimeout);
                }
                if (_this.q) {
                    _this.iiifContentSearchService.search(manifest, _this.q);
                }
            }
        });
        this.viewerService.onOsdReadyChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (state) {
            // Don't reset current page when switching layout
            if (state &&
                _this.canvasIndex &&
                !_this.canvasService.currentCanvasGroupIndex) {
                _this.viewerService.goToCanvas(_this.canvasIndex, false);
            }
        });
        this.iiifManifestService.errorMessage
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (error) {
            _this.resetCurrentManifest();
            _this.errorMessage = error;
            _this.changeDetectorRef.detectChanges();
        });
        this.iiifContentSearchService.onQChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (q) {
            _this.qChanged.emit(q);
        });
        this.iiifContentSearchService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (sr) {
            _this.viewerService.highlight(sr);
        });
        this.viewerService.isCanvasPressed
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (value) {
            _this.isCanvasPressed = value;
            _this.changeDetectorRef.detectChanges();
        });
        this.modeService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (mode) {
            _this.toggleToolbarsState(mode.currentValue);
            if (mode.previousValue === ViewerMode.DASHBOARD &&
                mode.currentValue === ViewerMode.PAGE) {
                _this.viewerState.contentDialogState.isOpen = _this.contentsDialogService.isOpen();
                _this.viewerState.contentDialogState.selectedIndex = _this.contentsDialogService.getSelectedIndex();
                _this.viewerState.contentsSearchDialogState.isOpen = _this.contentSearchDialogService.isOpen();
                _this.viewerState.helpDialogState.isOpen = _this.helpDialogService.isOpen();
                _this.zone.run(function () {
                    _this.contentsDialogService.close();
                    _this.contentSearchDialogService.close();
                    _this.helpDialogService.close();
                });
            }
            if (mode.currentValue === ViewerMode.DASHBOARD) {
                _this.zone.run(function () {
                    if (_this.viewerState.contentDialogState.isOpen) {
                        _this.contentsDialogService.open(_this.viewerState.contentDialogState.selectedIndex);
                    }
                    if (_this.viewerState.contentsSearchDialogState.isOpen) {
                        _this.contentSearchDialogService.open();
                    }
                    if (_this.viewerState.helpDialogState.isOpen) {
                        _this.helpDialogService.open();
                    }
                });
            }
            _this.viewerModeChanged.emit(mode.currentValue);
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (canvasGroupIndex) {
            var canvasIndex = _this.canvasService.findCanvasByCanvasIndex(canvasGroupIndex);
            if (canvasIndex !== -1) {
                _this.canvasChanged.emit(canvasIndex);
            }
        });
        this.mimeService.onResize
            .pipe(takeUntil(this.destroyed), throttle(function (val) { return interval(ViewerOptions.transitions.OSDAnimationTime); }))
            .subscribe(function () {
            setTimeout(function () {
                _this.viewerService.home();
            }, ViewerOptions.transitions.OSDAnimationTime);
        });
        this.viewerLayoutService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (viewerLayout) {
            _this.viewerLayout = viewerLayout;
        });
        this.loadManifest();
    };
    ViewerComponent.prototype.ngOnChanges = function (changes) {
        var manifestUriIsChanged = false;
        var qIsChanged = false;
        var canvasIndexChanged = false;
        if (changes['q']) {
            var qChanges = changes['q'];
            if (!qChanges.isFirstChange() &&
                qChanges.currentValue !== qChanges.firstChange) {
                this.q = qChanges.currentValue;
                qIsChanged = true;
            }
        }
        if (changes['canvasIndex']) {
            var canvasIndexChanges = changes['canvasIndex'];
            if (!canvasIndexChanges.isFirstChange() &&
                canvasIndexChanges.currentValue !== canvasIndexChanges.firstChange) {
                this.canvasIndex = canvasIndexChanges.currentValue;
                canvasIndexChanged = true;
            }
        }
        if (changes['manifestUri']) {
            var manifestUriChanges = changes['manifestUri'];
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
    };
    ViewerComponent.prototype.handleKeys = function (event) {
        this.accessKeysHandlerService.handleKeyEvents(event);
    };
    ViewerComponent.prototype.onDrop = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if (this.config.isDropEnabled) {
            var url = event.dataTransfer.getData('URL');
            var params = new URL(url).searchParams;
            var manifestUri = params.get('manifest');
            var startCanvasId_1 = params.get('canvas');
            if (manifestUri) {
                this.manifestUri = manifestUri.startsWith('//')
                    ? "" + location.protocol + manifestUri
                    : manifestUri;
                this.loadManifest();
                if (startCanvasId_1) {
                    this.manifestChanged.pipe(take(1)).subscribe(function (manifest) {
                        var canvasIndex = manifest.sequences[0].canvases.findIndex(function (c) { return c.id === startCanvasId_1; });
                        if (canvasIndex !== -1) {
                            setTimeout(function () {
                                _this.viewerService.goToCanvas(canvasIndex, true);
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
    };
    ViewerComponent.prototype.onDragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    ViewerComponent.prototype.onDragLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    ViewerComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
        this.cleanup();
        this.iiifManifestService.destroy();
        this.iiifContentSearchService.destroy();
    };
    ViewerComponent.prototype.toggleToolbarsState = function (mode) {
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
    };
    ViewerComponent.prototype.ngAfterViewChecked = function () {
        this.mimeService.markForCheck();
    };
    ViewerComponent.prototype.loadManifest = function () {
        this.cleanup();
        this.iiifManifestService.load(this.manifestUri);
    };
    ViewerComponent.prototype.initialize = function () {
        this.attributionDialogService.initialize();
        this.contentsDialogService.initialize();
        this.contentSearchDialogService.initialize();
        this.helpDialogService.initialize();
    };
    ViewerComponent.prototype.cleanup = function () {
        this.viewerState = new ViewerState();
        this.attributionDialogService.destroy();
        this.contentsDialogService.destroy();
        this.contentSearchDialogService.destroy();
        this.helpDialogService.destroy();
        this.viewerService.destroy();
        this.resetErrorMessage();
    };
    ViewerComponent.prototype.resetCurrentManifest = function () {
        this.currentManifest = null;
    };
    ViewerComponent.prototype.resetErrorMessage = function () {
        this.errorMessage = null;
    };
    ViewerComponent.prototype.setClasses = function () {
        return {
            'mode-page': this.modeService.mode === ViewerMode.PAGE,
            'mode-page-zoomed': this.modeService.mode === ViewerMode.PAGE_ZOOMED,
            'mode-dashboard': this.modeService.mode === ViewerMode.DASHBOARD,
            'layout-one-page': this.viewerLayout === ViewerLayout.ONE_PAGE,
            'layout-two-page': this.viewerLayout === ViewerLayout.TWO_PAGE,
            'canvas-pressed': this.isCanvasPressed
        };
    };
    ViewerComponent.ctorParameters = function () { return [
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
    ]; };
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
    return ViewerComponent;
}());
export { ViewerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3ZXIvdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNULGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXBGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSXRFLE9BQU8s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REFDWTtJQW9PeEM7UUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBR2pDO0lBR0Q7UUFEQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aURBZ0NoQztJQUdEO1FBREMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FEQUlwQztJQUdEO1FBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3NEQUlyQztJQTlTVSxlQUFlO1FBTjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLDR1QkFBc0M7WUFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVyxlQUFlLENBd1gzQjtJQUFELHNCQUFDO0NBQUEsQUF4WEQsSUF3WEM7U0F4WFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQWZ0ZXJWaWV3Q2hlY2tlZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFN1YmplY3QsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZSwgdGFrZVVudGlsLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRzRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2NvbnRlbnRzLWRpYWxvZy9jb250ZW50cy1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGlvbkRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9hdHRyaWJ1dGlvbi1kaWFsb2cvYXR0cmlidXRpb24tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9jb250ZW50LXNlYXJjaC1kaWFsb2cvY29udGVudC1zZWFyY2gtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZSc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IE1vZGVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9tb2RlLXNlcnZpY2UvbW9kZS5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdlck1vZGUgfSBmcm9tICcuLi9jb3JlL21vZGVscy92aWV3ZXItbW9kZSc7XG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3ZXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci1oZWFkZXIvdmlld2VyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld2VyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3ZXItZm9vdGVyL3ZpZXdlci1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE9zZFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL29zZC10b29sYmFyL29zZC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS92aWV3ZXItc2VydmljZS92aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lVmlld2VyQ29uZmlnIH0gZnJvbSAnLi4vY29yZS9taW1lLXZpZXdlci1jb25maWcnO1xuaW1wb3J0IHsgSWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb3JlL2lpaWYtY29udGVudC1zZWFyY2gtc2VydmljZS9paWlmLWNvbnRlbnQtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi8uLi9jb3JlL21vZGVscy9zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi9jb3JlL21vZGVscy92aWV3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBNaW1lVmlld2VySW50bCB9IGZyb20gJy4uL2NvcmUvaW50bC92aWV3ZXItaW50bCc7XG5pbXBvcnQgeyBBY2Nlc3NLZXlzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvYWNjZXNzLWtleXMtaGFuZGxlci1zZXJ2aWNlL2FjY2Vzcy1rZXlzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld2VyTGF5b3V0IH0gZnJvbSAnLi4vY29yZS9tb2RlbHMvdmlld2VyLWxheW91dCc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS92aWV3ZXItbGF5b3V0LXNlcnZpY2Uvdmlld2VyLWxheW91dC1zZXJ2aWNlJztcbmltcG9ydCB7IE1hbmlmZXN0VXRpbHMgfSBmcm9tICcuLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXV0aWxzJztcbmltcG9ydCB7IFZpZXdlclN0YXRlIH0gZnJvbSAnLi4vY29yZS9tb2RlbHMvdmlld2VyU3RhdGUnO1xuaW1wb3J0IHsgTW9kZUNoYW5nZXMgfSBmcm9tICcuLi9jb3JlL21vZGVscy9tb2RlQ2hhbmdlcyc7XG5pbXBvcnQgeyBTdHlsZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3N0eWxlLXNlcnZpY2Uvc3R5bGUuc2VydmljZSc7XG5pbXBvcnQgeyBIZWxwRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYW5pZmVzdFVyaTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgcTogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY2FudmFzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcHVibGljIGNvbmZpZzogTWltZVZpZXdlckNvbmZpZyA9IG5ldyBNaW1lVmlld2VyQ29uZmlnKCk7XG4gIEBJbnB1dCgpIHB1YmxpYyB0YWJJbmRleCA9IDA7XG4gIEBPdXRwdXQoKSB2aWV3ZXJNb2RlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFZpZXdlck1vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2FudmFzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBxQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBtYW5pZmVzdENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxNYW5pZmVzdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGlzQ2FudmFzUHJlc3NlZCA9IGZhbHNlO1xuICBwcml2YXRlIGN1cnJlbnRNYW5pZmVzdDogTWFuaWZlc3Q7XG4gIHByaXZhdGUgdmlld2VyTGF5b3V0OiBWaWV3ZXJMYXlvdXQ7XG4gIHByaXZhdGUgdmlld2VyU3RhdGUgPSBuZXcgVmlld2VyU3RhdGUoKTtcblxuICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBudWxsO1xuXG4gIC8vIFZpZXdjaGlsZHNcbiAgQFZpZXdDaGlsZCgnbWltZUhlYWRlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgaGVhZGVyOiBWaWV3ZXJIZWFkZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ21pbWVGb290ZXInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIGZvb3RlcjogVmlld2VyRm9vdGVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdtaW1lT3NkVG9vbGJhcicpXG4gIHByaXZhdGUgb3NkVG9vbGJhcjogT3NkVG9vbGJhckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRlbnRzRGlhbG9nU2VydmljZTogQ29udGVudHNEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXR0cmlidXRpb25EaWFsb2dTZXJ2aWNlOiBBdHRyaWJ1dGlvbkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb250ZW50U2VhcmNoRGlhbG9nU2VydmljZTogQ29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBoZWxwRGlhbG9nU2VydmljZTogSGVscERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWltZVNlcnZpY2U6IE1pbWVSZXNpemVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbW9kZVNlcnZpY2U6IE1vZGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlOiBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY2Nlc3NLZXlzSGFuZGxlclNlcnZpY2U6IEFjY2Vzc0tleXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdlckxheW91dFNlcnZpY2U6IFZpZXdlckxheW91dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdHlsZVNlcnZpY2U6IFN0eWxlU2VydmljZSxcbiAgICBwdWJsaWMgem9uZTogTmdab25lXG4gICkge1xuICAgIGNvbnRlbnRzRGlhbG9nU2VydmljZS5lbCA9IGVsO1xuICAgIGF0dHJpYnV0aW9uRGlhbG9nU2VydmljZS5lbCA9IGVsO1xuICAgIGNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLmVsID0gZWw7XG4gICAgaGVscERpYWxvZ1NlcnZpY2UuZWwgPSBlbDtcbiAgICBtaW1lU2VydmljZS5lbCA9IGVsO1xuICB9XG5cbiAgZ2V0IG1pbWVIZWFkZXJCZWZvcmVSZWYoKTogVmlld0NvbnRhaW5lclJlZiB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyLm1pbWVIZWFkZXJCZWZvcmU7XG4gIH1cblxuICBnZXQgbWltZUhlYWRlckFmdGVyUmVmKCk6IFZpZXdDb250YWluZXJSZWYge1xuICAgIHJldHVybiB0aGlzLmhlYWRlci5taW1lSGVhZGVyQWZ0ZXI7XG4gIH1cblxuICBnZXQgbWltZUZvb3RlckJlZm9yZVJlZigpOiBWaWV3Q29udGFpbmVyUmVmIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXIubWltZUZvb3RlckJlZm9yZTtcbiAgfVxuXG4gIGdldCBtaW1lRm9vdGVyQWZ0ZXJSZWYoKTogVmlld0NvbnRhaW5lclJlZiB7XG4gICAgcmV0dXJuIHRoaXMuZm9vdGVyLm1pbWVGb290ZXJBZnRlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGVTZXJ2aWNlLmluaXQoKTtcbiAgICB0aGlzLm1vZGVTZXJ2aWNlLmluaXRpYWxNb2RlID0gdGhpcy5jb25maWcuaW5pdFZpZXdlck1vZGU7XG4gICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1hbmlmZXN0OiBNYW5pZmVzdCkgPT4ge1xuICAgICAgICBpZiAobWFuaWZlc3QpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgICAgICAgIHRoaXMubWFuaWZlc3RDaGFuZ2VkLm5leHQobWFuaWZlc3QpO1xuICAgICAgICAgIHRoaXMudmlld2VyTGF5b3V0U2VydmljZS5pbml0KFxuICAgICAgICAgICAgTWFuaWZlc3RVdGlscy5pc01hbmlmZXN0UGFnZWQobWFuaWZlc3QpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICB0aGlzLnZpZXdlclNlcnZpY2Uuc2V0VXBWaWV3ZXIobWFuaWZlc3QsIHRoaXMuY29uZmlnKTtcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuYXR0cmlidXRpb25EaWFsb2dFbmFibGVkICYmIG1hbmlmZXN0LmF0dHJpYnV0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nU2VydmljZS5vcGVuKFxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hdHRyaWJ1dGlvbkRpYWxvZ0hpZGVUaW1lb3V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnEpIHtcbiAgICAgICAgICAgIHRoaXMuaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLnNlYXJjaChtYW5pZmVzdCwgdGhpcy5xKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLm9uT3NkUmVhZHlDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICAvLyBEb24ndCByZXNldCBjdXJyZW50IHBhZ2Ugd2hlbiBzd2l0Y2hpbmcgbGF5b3V0XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdGF0ZSAmJlxuICAgICAgICAgIHRoaXMuY2FudmFzSW5kZXggJiZcbiAgICAgICAgICAhdGhpcy5jYW52YXNTZXJ2aWNlLmN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzKHRoaXMuY2FudmFzSW5kZXgsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuZXJyb3JNZXNzYWdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZXJyb3I6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0Q3VycmVudE1hbmlmZXN0KCk7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5vblFDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChxOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5xQ2hhbmdlZC5lbWl0KHEpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5vbkNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHNyOiBTZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmhpZ2hsaWdodChzcik7XG4gICAgICB9KTtcblxuICAgIHRoaXMudmlld2VyU2VydmljZS5pc0NhbnZhc1ByZXNzZWRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLmlzQ2FudmFzUHJlc3NlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tb2RlU2VydmljZS5vbkNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1vZGU6IE1vZGVDaGFuZ2VzKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbGJhcnNTdGF0ZShtb2RlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2RlLnByZXZpb3VzVmFsdWUgPT09IFZpZXdlck1vZGUuREFTSEJPQVJEICYmXG4gICAgICAgICAgbW9kZS5jdXJyZW50VmFsdWUgPT09IFZpZXdlck1vZGUuUEFHRVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnZpZXdlclN0YXRlLmNvbnRlbnREaWFsb2dTdGF0ZS5pc09wZW4gPSB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5pc09wZW4oKTtcbiAgICAgICAgICB0aGlzLnZpZXdlclN0YXRlLmNvbnRlbnREaWFsb2dTdGF0ZS5zZWxlY3RlZEluZGV4ID0gdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2UuZ2V0U2VsZWN0ZWRJbmRleCgpO1xuICAgICAgICAgIHRoaXMudmlld2VyU3RhdGUuY29udGVudHNTZWFyY2hEaWFsb2dTdGF0ZS5pc09wZW4gPSB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLmlzT3BlbigpO1xuICAgICAgICAgIHRoaXMudmlld2VyU3RhdGUuaGVscERpYWxvZ1N0YXRlLmlzT3BlbiA9IHRoaXMuaGVscERpYWxvZ1NlcnZpY2UuaXNPcGVuKCk7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50U2VhcmNoRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5oZWxwRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlLmN1cnJlbnRWYWx1ZSA9PT0gVmlld2VyTW9kZS5EQVNIQk9BUkQpIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdlclN0YXRlLmNvbnRlbnREaWFsb2dTdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2Uub3BlbihcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdlclN0YXRlLmNvbnRlbnREaWFsb2dTdGF0ZS5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3ZXJTdGF0ZS5jb250ZW50c1NlYXJjaERpYWxvZ1N0YXRlLmlzT3Blbikge1xuICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdlclN0YXRlLmhlbHBEaWFsb2dTdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5oZWxwRGlhbG9nU2VydmljZS5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3ZXJNb2RlQ2hhbmdlZC5lbWl0KG1vZGUuY3VycmVudFZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jYW52YXNTZXJ2aWNlLm9uQ2FudmFzR3JvdXBJbmRleENoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGNhbnZhc0dyb3VwSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXNJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5maW5kQ2FudmFzQnlDYW52YXNJbmRleChcbiAgICAgICAgICBjYW52YXNHcm91cEluZGV4XG4gICAgICAgICk7XG4gICAgICAgIGlmIChjYW52YXNJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmNhbnZhc0NoYW5nZWQuZW1pdChjYW52YXNJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5taW1lU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCksXG4gICAgICAgIHRocm90dGxlKHZhbCA9PiBpbnRlcnZhbChWaWV3ZXJPcHRpb25zLnRyYW5zaXRpb25zLk9TREFuaW1hdGlvblRpbWUpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudmlld2VyU2VydmljZS5ob21lKCk7XG4gICAgICAgIH0sIFZpZXdlck9wdGlvbnMudHJhbnNpdGlvbnMuT1NEQW5pbWF0aW9uVGltZSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudmlld2VyTGF5b3V0U2VydmljZS5vbkNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHZpZXdlckxheW91dDogVmlld2VyTGF5b3V0KSA9PiB7XG4gICAgICAgIHRoaXMudmlld2VyTGF5b3V0ID0gdmlld2VyTGF5b3V0O1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmxvYWRNYW5pZmVzdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGxldCBtYW5pZmVzdFVyaUlzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGxldCBxSXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgbGV0IGNhbnZhc0luZGV4Q2hhbmdlZCA9IGZhbHNlO1xuICAgIGlmIChjaGFuZ2VzWydxJ10pIHtcbiAgICAgIGNvbnN0IHFDaGFuZ2VzOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWydxJ107XG4gICAgICBpZiAoXG4gICAgICAgICFxQ2hhbmdlcy5pc0ZpcnN0Q2hhbmdlKCkgJiZcbiAgICAgICAgcUNoYW5nZXMuY3VycmVudFZhbHVlICE9PSBxQ2hhbmdlcy5maXJzdENoYW5nZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucSA9IHFDaGFuZ2VzLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgcUlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydjYW52YXNJbmRleCddKSB7XG4gICAgICBjb25zdCBjYW52YXNJbmRleENoYW5nZXM6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ2NhbnZhc0luZGV4J107XG4gICAgICBpZiAoXG4gICAgICAgICFjYW52YXNJbmRleENoYW5nZXMuaXNGaXJzdENoYW5nZSgpICYmXG4gICAgICAgIGNhbnZhc0luZGV4Q2hhbmdlcy5jdXJyZW50VmFsdWUgIT09IGNhbnZhc0luZGV4Q2hhbmdlcy5maXJzdENoYW5nZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2FudmFzSW5kZXggPSBjYW52YXNJbmRleENoYW5nZXMuY3VycmVudFZhbHVlO1xuICAgICAgICBjYW52YXNJbmRleENoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlc1snbWFuaWZlc3RVcmknXSkge1xuICAgICAgY29uc3QgbWFuaWZlc3RVcmlDaGFuZ2VzOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWydtYW5pZmVzdFVyaSddO1xuICAgICAgaWYgKFxuICAgICAgICAhbWFuaWZlc3RVcmlDaGFuZ2VzLmlzRmlyc3RDaGFuZ2UoKSAmJlxuICAgICAgICBtYW5pZmVzdFVyaUNoYW5nZXMuY3VycmVudFZhbHVlICE9PSBtYW5pZmVzdFVyaUNoYW5nZXMucHJldmlvdXNWYWx1ZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9IHRoaXMuY29uZmlnLmluaXRWaWV3ZXJNb2RlO1xuICAgICAgICB0aGlzLm1hbmlmZXN0VXJpID0gbWFuaWZlc3RVcmlDaGFuZ2VzLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgbWFuaWZlc3RVcmlJc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYW5pZmVzdFVyaUlzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5sb2FkTWFuaWZlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHFJc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHRoaXMuY3VycmVudE1hbmlmZXN0LCB0aGlzLnEpO1xuICAgICAgfVxuICAgICAgaWYgKGNhbnZhc0luZGV4Q2hhbmdlZCkge1xuICAgICAgICB0aGlzLnZpZXdlclNlcnZpY2UuZ29Ub0NhbnZhcyh0aGlzLmNhbnZhc0luZGV4LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUtleXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmFjY2Vzc0tleXNIYW5kbGVyU2VydmljZS5oYW5kbGVLZXlFdmVudHMoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyb3AoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmlzRHJvcEVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IHVybCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCdVUkwnKTtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkwodXJsKS5zZWFyY2hQYXJhbXM7XG4gICAgICBjb25zdCBtYW5pZmVzdFVyaSA9IHBhcmFtcy5nZXQoJ21hbmlmZXN0Jyk7XG4gICAgICBjb25zdCBzdGFydENhbnZhc0lkID0gcGFyYW1zLmdldCgnY2FudmFzJyk7XG4gICAgICBpZiAobWFuaWZlc3RVcmkpIHtcbiAgICAgICAgdGhpcy5tYW5pZmVzdFVyaSA9IG1hbmlmZXN0VXJpLnN0YXJ0c1dpdGgoJy8vJylcbiAgICAgICAgICA/IGAke2xvY2F0aW9uLnByb3RvY29sfSR7bWFuaWZlc3RVcml9YFxuICAgICAgICAgIDogbWFuaWZlc3RVcmk7XG4gICAgICAgIHRoaXMubG9hZE1hbmlmZXN0KCk7XG4gICAgICAgIGlmIChzdGFydENhbnZhc0lkKSB7XG4gICAgICAgICAgdGhpcy5tYW5pZmVzdENoYW5nZWQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUobWFuaWZlc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzSW5kZXggPSBtYW5pZmVzdC5zZXF1ZW5jZXNbMF0uY2FudmFzZXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICBjID0+IGMuaWQgPT09IHN0YXJ0Q2FudmFzSWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoY2FudmFzSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzKGNhbnZhc0luZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMuaW50bC5kcm9wRGlzYWJsZWQsIG51bGwsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuZGVzdHJveSgpO1xuICAgIHRoaXMuaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHRvZ2dsZVRvb2xiYXJzU3RhdGUobW9kZTogVmlld2VyTW9kZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmhlYWRlciAmJiB0aGlzLmZvb3Rlcikge1xuICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgIGNhc2UgVmlld2VyTW9kZS5EQVNIQk9BUkQ6XG4gICAgICAgICAgdGhpcy5oZWFkZXIuc3RhdGUgPSB0aGlzLmZvb3Rlci5zdGF0ZSA9ICdzaG93JztcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcubmF2aWdhdGlvbkNvbnRyb2xFbmFibGVkICYmIHRoaXMub3NkVG9vbGJhcikge1xuICAgICAgICAgICAgdGhpcy5vc2RUb29sYmFyLnN0YXRlID0gJ2hpZGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBWaWV3ZXJNb2RlLlBBR0U6XG4gICAgICAgICAgdGhpcy5oZWFkZXIuc3RhdGUgPSB0aGlzLmZvb3Rlci5zdGF0ZSA9ICdoaWRlJztcbiAgICAgICAgICBpZiAodGhpcy5jb25maWcubmF2aWdhdGlvbkNvbnRyb2xFbmFibGVkICYmIHRoaXMub3NkVG9vbGJhcikge1xuICAgICAgICAgICAgdGhpcy5vc2RUb29sYmFyLnN0YXRlID0gJ3Nob3cnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLm1pbWVTZXJ2aWNlLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkTWFuaWZlc3QoKSB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmxvYWQodGhpcy5tYW5pZmVzdFVyaSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGlvbkRpYWxvZ1NlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuY29udGVudHNEaWFsb2dTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLmhlbHBEaWFsb2dTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW51cCgpIHtcbiAgICB0aGlzLnZpZXdlclN0YXRlID0gbmV3IFZpZXdlclN0YXRlKCk7XG4gICAgdGhpcy5hdHRyaWJ1dGlvbkRpYWxvZ1NlcnZpY2UuZGVzdHJveSgpO1xuICAgIHRoaXMuY29udGVudHNEaWFsb2dTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmhlbHBEaWFsb2dTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2UuZGVzdHJveSgpO1xuICAgIHRoaXMucmVzZXRFcnJvck1lc3NhZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRDdXJyZW50TWFuaWZlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50TWFuaWZlc3QgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEVycm9yTWVzc2FnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XG4gIH1cblxuICBzZXRDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnbW9kZS1wYWdlJzogdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0UsXG4gICAgICAnbW9kZS1wYWdlLXpvb21lZCc6IHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCxcbiAgICAgICdtb2RlLWRhc2hib2FyZCc6IHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5EQVNIQk9BUkQsXG4gICAgICAnbGF5b3V0LW9uZS1wYWdlJzogdGhpcy52aWV3ZXJMYXlvdXQgPT09IFZpZXdlckxheW91dC5PTkVfUEFHRSxcbiAgICAgICdsYXlvdXQtdHdvLXBhZ2UnOiB0aGlzLnZpZXdlckxheW91dCA9PT0gVmlld2VyTGF5b3V0LlRXT19QQUdFLFxuICAgICAgJ2NhbnZhcy1wcmVzc2VkJzogdGhpcy5pc0NhbnZhc1ByZXNzZWRcbiAgICB9O1xuICB9XG59XG4iXX0=