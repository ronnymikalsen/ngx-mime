import { __decorate } from "tslib";
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { ViewerOptions } from '../../core/models/viewer-options';
import { ViewingDirection } from '../../core/models/viewing-direction';
import { StyleService } from '../../core/style-service/style.service';
import { CanvasService } from './../../core/canvas-service/canvas-service';
import { MimeViewerIntl } from './../../core/intl/viewer-intl';
import { MimeResizeService } from './../../core/mime-resize-service/mime-resize.service';
import { ViewerService } from './../../core/viewer-service/viewer.service';
var OsdToolbarComponent = /** @class */ (function () {
    function OsdToolbarComponent(intl, renderer, changeDetectorRef, mimeService, viewerService, canvasService, styleService, iiifManifestService) {
        this.intl = intl;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.mimeService = mimeService;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.styleService = styleService;
        this.iiifManifestService = iiifManifestService;
        this.osdToolbarStyle = {};
        this.state = 'hide';
        this.invert = false;
        this.destroyed = new Subject();
    }
    Object.defineProperty(OsdToolbarComponent.prototype, "osdToolbarState", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    OsdToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.invert = manifest.viewingDirection === ViewingDirection.LTR;
            _this.changeDetectorRef.detectChanges();
        });
        this.mimeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (dimensions) {
            _this.osdToolbarStyle = {
                top: dimensions.top + 110 + 'px'
            };
            _this.changeDetectorRef.detectChanges();
        });
        this.viewerService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (currentCanvasGroupIndex) {
            _this.numberOfCanvasGroups = _this.canvasService.numberOfCanvasGroups;
            _this.isFirstCanvasGroup = _this.isOnFirstCanvasGroup(currentCanvasGroupIndex);
            _this.isLastCanvasGroup = _this.isOnLastCanvasGroup(currentCanvasGroupIndex);
            _this.changeDetectorRef.detectChanges();
        });
        this.intl.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () { return _this.changeDetectorRef.markForCheck(); });
    };
    OsdToolbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.styleService.onChange.pipe(takeUntil(this.destroyed)).subscribe(function (c) {
            var backgroundRgbaColor = _this.styleService.convertToRgba(c, 0.3);
            _this.renderer.setStyle(_this.container.nativeElement, 'background-color', backgroundRgbaColor);
        });
    };
    OsdToolbarComponent.prototype.zoomIn = function () {
        this.viewerService.zoomIn();
    };
    OsdToolbarComponent.prototype.zoomOut = function () {
        this.viewerService.zoomOut();
    };
    OsdToolbarComponent.prototype.home = function () {
        this.viewerService.home();
    };
    OsdToolbarComponent.prototype.rotate = function () {
        this.viewerService.rotate();
    };
    OsdToolbarComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    OsdToolbarComponent.prototype.goToPreviousCanvasGroup = function () {
        this.viewerService.goToPreviousCanvasGroup();
    };
    OsdToolbarComponent.prototype.goToNextCanvasGroup = function () {
        this.viewerService.goToNextCanvasGroup();
    };
    OsdToolbarComponent.prototype.isOnFirstCanvasGroup = function (currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === 0;
    };
    OsdToolbarComponent.prototype.isOnLastCanvasGroup = function (currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === this.numberOfCanvasGroups - 1;
    };
    OsdToolbarComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: MimeResizeService },
        { type: ViewerService },
        { type: CanvasService },
        { type: StyleService },
        { type: IiifManifestService }
    ]; };
    __decorate([
        ViewChild('container', { static: true })
    ], OsdToolbarComponent.prototype, "container", void 0);
    __decorate([
        HostBinding('@osdToolbarState')
    ], OsdToolbarComponent.prototype, "osdToolbarState", null);
    OsdToolbarComponent = __decorate([
        Component({
            selector: 'mime-osd-toolbar',
            template: "<div #container class=\"osd-toolbar\" [ngStyle]=\"osdToolbarStyle\">\n  <div fxHide fxShow.gt-sm=\"true\">\n    <div\n      class=\"osd-toolbar-container\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\"\n    >\n      <div class=\"osd-toolbar-row\"> </div>\n      <div class=\"osd-toolbar-row\">\n        <ng-container *ngIf=\"invert\">\n          <button\n            id=\"navigateBeforeButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.previousPageLabel\"\n            [matTooltip]=\"intl.previousPageLabel\"\n            [disabled]=\"isFirstCanvasGroup\"\n            (click)=\"goToPreviousCanvasGroup()\"\n          >\n            <mat-icon>navigate_before</mat-icon>\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"!invert\">\n          <button\n            id=\"navigateNextButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.nextPageLabel\"\n            [matTooltip]=\"intl.nextPageLabel\"\n            [disabled]=\"isLastCanvasGroup\"\n            (click)=\"goToNextCanvasGroup()\"\n          >\n            <mat-icon>navigate_before</mat-icon>\n          </button>\n        </ng-container>\n        <button\n          (click)=\"home()\"\n          id=\"homeButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.homeLabel\"\n          [matTooltip]=\"intl.homeLabel\"\n        >\n          <mat-icon>home</mat-icon>\n        </button>\n        <ng-container *ngIf=\"invert\">\n          <button\n            id=\"navigateNextButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.nextPageLabel\"\n            [matTooltip]=\"intl.nextPageLabel\"\n            [disabled]=\"isLastCanvasGroup\"\n            (click)=\"goToNextCanvasGroup()\"\n          >\n            <mat-icon>navigate_next</mat-icon>\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"!invert\">\n          <button\n            id=\"navigateBeforeButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.previousPageLabel\"\n            [matTooltip]=\"intl.previousPageLabel\"\n            [disabled]=\"isFirstCanvasGroup\"\n            (click)=\"goToPreviousCanvasGroup()\"\n          >\n            <mat-icon>navigate_next</mat-icon>\n          </button>\n        </ng-container>\n      </div>\n\n      <div class=\"osd-toolbar-row\">\n        <button\n          (click)=\"zoomIn()\"\n          id=\"zoomInButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.zoomInLabel\"\n          [matTooltip]=\"intl.zoomInLabel\"\n        >\n          <mat-icon>zoom_in</mat-icon>\n        </button>\n\n        <button\n          (click)=\"rotate()\"\n          id=\"rotateButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.rotateCwLabel\"\n          [matTooltip]=\"intl.rotateCwLabel\"\n        >\n          <mat-icon>rotate_right</mat-icon>\n        </button>\n        <button\n          (click)=\"zoomOut()\"\n          id=\"zoomOutButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.zoomOutLabel\"\n          [matTooltip]=\"intl.zoomOutLabel\"\n        >\n          <mat-icon>zoom_out</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            animations: [
                trigger('osdToolbarState', [
                    state('hide', style({
                        transform: 'translate(-120px, 0)',
                        display: 'none'
                    })),
                    state('show', style({
                        transform: 'translate(0px, 0px)',
                        display: 'block'
                    })),
                    transition('hide => show', [
                        group([
                            style({ display: 'block' }),
                            animate(ViewerOptions.transitions.toolbarsEaseInTime + "ms ease-out")
                        ])
                    ]),
                    transition('show => hide', animate(ViewerOptions.transitions.toolbarsEaseOutTime + "ms ease-in"))
                ])
            ],
            styles: [":host{z-index:1}::ng-deep .osd-toolbar-row>.mat-toolbar-row{height:40px}.osd-toolbar{position:absolute;z-index:2;background:0 0;width:auto;border-radius:8px;margin-left:16px}"]
        })
    ], OsdToolbarComponent);
    return OsdToolbarComponent;
}());
export { OsdToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NkLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci9vc2QtdG9vbGJhci9vc2QtdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQW9DM0U7SUFjRSw2QkFDUyxJQUFvQixFQUNuQixRQUFtQixFQUNuQixpQkFBb0Ms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LFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7MERBQXVCO0lBRWhFO1FBREMsV0FBVyxDQUFDLGtCQUFrQixDQUFDOzhEQUcvQjtJQUxVLG1CQUFtQjtRQWxDL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qiwrc0dBQTJDO1lBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFVBQVUsRUFBRTtnQkFDVixPQUFPLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3pCLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO3dCQUNKLFNBQVMsRUFBRSxzQkFBc0I7d0JBQ2pDLE9BQU8sRUFBRSxNQUFNO3FCQUNoQixDQUFDLENBQ0g7b0JBQ0QsS0FBSyxDQUNILE1BQU0sRUFDTixLQUFLLENBQUM7d0JBQ0osU0FBUyxFQUFFLHFCQUFxQjt3QkFDaEMsT0FBTyxFQUFFLE9BQU87cUJBQ2pCLENBQUMsQ0FDSDtvQkFDRCxVQUFVLENBQUMsY0FBYyxFQUFFO3dCQUN6QixLQUFLLENBQUM7NEJBQ0osS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDOzRCQUMzQixPQUFPLENBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsZ0JBQWEsQ0FBQzt5QkFDdEUsQ0FBQztxQkFDSCxDQUFDO29CQUNGLFVBQVUsQ0FDUixjQUFjLEVBQ2QsT0FBTyxDQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLGVBQVksQ0FBQyxDQUN0RTtpQkFDRixDQUFDO2FBQ0g7O1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQTJHL0I7SUFBRCwwQkFBQztDQUFBLEFBM0dELElBMkdDO1NBM0dZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIGdyb3VwLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBWaWV3ZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMvdmlld2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWxzL3ZpZXdpbmctZGlyZWN0aW9uJztcbmltcG9ydCB7IFN0eWxlU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc3R5bGUtc2VydmljZS9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2NvcmUvY2FudmFzLXNlcnZpY2UvY2FudmFzLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLy4uLy4uL2NvcmUvaW50bC92aWV3ZXItaW50bCc7XG5pbXBvcnQgeyBNaW1lUmVzaXplU2VydmljZSB9IGZyb20gJy4vLi4vLi4vY29yZS9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbHMvZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3ZpZXdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS1vc2QtdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9vc2QtdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29zZC10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3NkVG9vbGJhclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdoaWRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMTIwcHgsIDApJyxcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3Nob3cnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgMHB4KScsXG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGUgPT4gc2hvdycsIFtcbiAgICAgICAgZ3JvdXAoW1xuICAgICAgICAgIHN0eWxlKHsgZGlzcGxheTogJ2Jsb2NrJyB9KSxcbiAgICAgICAgICBhbmltYXRlKGAke1ZpZXdlck9wdGlvbnMudHJhbnNpdGlvbnMudG9vbGJhcnNFYXNlSW5UaW1lfW1zIGVhc2Utb3V0YClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgJ3Nob3cgPT4gaGlkZScsXG4gICAgICAgIGFuaW1hdGUoYCR7Vmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy50b29sYmFyc0Vhc2VPdXRUaW1lfW1zIGVhc2UtaW5gKVxuICAgICAgKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT3NkVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBASG9zdEJpbmRpbmcoJ0Bvc2RUb29sYmFyU3RhdGUnKVxuICBnZXQgb3NkVG9vbGJhclN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG4gIHB1YmxpYyBvc2RUb29sYmFyU3R5bGUgPSB7fTtcbiAgcHVibGljIG51bWJlck9mQ2FudmFzR3JvdXBzOiBudW1iZXI7XG4gIHB1YmxpYyBpc0ZpcnN0Q2FudmFzR3JvdXA6IGJvb2xlYW47XG4gIHB1YmxpYyBpc0xhc3RDYW52YXNHcm91cDogYm9vbGVhbjtcbiAgcHVibGljIHN0YXRlID0gJ2hpZGUnO1xuICBpbnZlcnQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBtaW1lU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcbiAgICBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1hbmlmZXN0OiBNYW5pZmVzdCkgPT4ge1xuICAgICAgICB0aGlzLmludmVydCA9IG1hbmlmZXN0LnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5taW1lU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGRpbWVuc2lvbnM6IERpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgdGhpcy5vc2RUb29sYmFyU3R5bGUgPSB7XG4gICAgICAgICAgdG9wOiBkaW1lbnNpb25zLnRvcCArIDExMCArICdweCdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudmlld2VyU2VydmljZS5vbkNhbnZhc0dyb3VwSW5kZXhDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZDYW52YXNHcm91cHMgPSB0aGlzLmNhbnZhc1NlcnZpY2UubnVtYmVyT2ZDYW52YXNHcm91cHM7XG4gICAgICAgIHRoaXMuaXNGaXJzdENhbnZhc0dyb3VwID0gdGhpcy5pc09uRmlyc3RDYW52YXNHcm91cChcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmlzTGFzdENhbnZhc0dyb3VwID0gdGhpcy5pc09uTGFzdENhbnZhc0dyb3VwKFxuICAgICAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmludGwuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdHlsZVNlcnZpY2Uub25DaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKS5zdWJzY3JpYmUoYyA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kUmdiYUNvbG9yID0gdGhpcy5zdHlsZVNlcnZpY2UuY29udmVydFRvUmdiYShjLCAwLjMpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICBiYWNrZ3JvdW5kUmdiYUNvbG9yXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbUluKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyU2VydmljZS56b29tSW4oKTtcbiAgfVxuXG4gIHpvb21PdXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLnpvb21PdXQoKTtcbiAgfVxuXG4gIGhvbWUoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmhvbWUoKTtcbiAgfVxuXG4gIHJvdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2Uucm90YXRlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvUHJldmlvdXNDYW52YXNHcm91cCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2UuZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoKTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvTmV4dENhbnZhc0dyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvTmV4dENhbnZhc0dyb3VwKCk7XG4gIH1cblxuICBwcml2YXRlIGlzT25GaXJzdENhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudENhbnZhc0dyb3VwSW5kZXggPT09IDA7XG4gIH1cblxuICBwcml2YXRlIGlzT25MYXN0Q2FudmFzR3JvdXAoY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9PT0gdGhpcy5udW1iZXJPZkNhbnZhc0dyb3VwcyAtIDE7XG4gIH1cbn1cbiJdfQ==