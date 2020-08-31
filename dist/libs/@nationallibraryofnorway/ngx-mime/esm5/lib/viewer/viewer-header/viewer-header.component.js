import { __decorate } from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ManifestUtils } from '../../core/iiif-manifest-service/iiif-manifest-utils';
import { MimeDomHelper } from '../../core/mime-dom-helper';
import { ViewerLayout } from '../../core/models/viewer-layout';
import { ViewerOptions } from '../../core/models/viewer-options';
import { ViewerLayoutService } from '../../core/viewer-layout-service/viewer-layout-service';
import { ContentSearchDialogService } from './../../content-search-dialog/content-search-dialog.service';
import { ContentsDialogService } from './../../contents-dialog/contents-dialog.service';
import { FullscreenService } from './../../core/fullscreen-service/fullscreen.service';
import { IiifManifestService } from './../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from './../../core/intl/viewer-intl';
import { HelpDialogService } from '../../help-dialog/help-dialog.service';
var ViewerHeaderComponent = /** @class */ (function () {
    function ViewerHeaderComponent(intl, changeDetectorRef, contentsDialogService, contentSearchDialogService, helpDialogService, iiifManifestService, fullscreenService, mimeDomHelper, viewerLayoutService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.contentsDialogService = contentsDialogService;
        this.contentSearchDialogService = contentSearchDialogService;
        this.helpDialogService = helpDialogService;
        this.iiifManifestService = iiifManifestService;
        this.fullscreenService = fullscreenService;
        this.mimeDomHelper = mimeDomHelper;
        this.viewerLayoutService = viewerLayoutService;
        this.state = 'hide';
        this.isContentSearchEnabled = false;
        this.isFullscreenEnabled = false;
        this.isInFullscreen = false;
        this.fullscreenLabel = this.intl.fullScreenLabel;
        this.isPagedManifest = false;
        this.viewerLayout = ViewerLayout.ONE_PAGE;
        this.ViewerLayout = ViewerLayout; // enables parsing of enum in template
        this.destroyed = new Subject();
    }
    Object.defineProperty(ViewerHeaderComponent.prototype, "headerState", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    ViewerHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isFullscreenEnabled = this.fullscreenService.isEnabled();
        this.intl.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () { return _this.changeDetectorRef.markForCheck(); });
        this.fullscreenService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () {
            _this.isInFullscreen = _this.fullscreenService.isFullscreen();
            _this.fullscreenLabel = _this.isInFullscreen
                ? _this.intl.exitFullScreenLabel
                : _this.intl.fullScreenLabel;
            _this.changeDetectorRef.detectChanges();
        });
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.manifest = manifest;
            _this.isContentSearchEnabled = manifest.service ? true : false;
            _this.isPagedManifest = ManifestUtils.isManifestPaged(manifest);
            _this.changeDetectorRef.detectChanges();
        });
        this.viewerLayoutService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (viewerLayout) {
            _this.viewerLayout = viewerLayout;
        });
    };
    ViewerHeaderComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    ViewerHeaderComponent.prototype.toggleContents = function () {
        this.contentSearchDialogService.close();
        this.helpDialogService.close();
        this.contentsDialogService.toggle();
    };
    ViewerHeaderComponent.prototype.toggleSearch = function () {
        this.contentsDialogService.close();
        this.helpDialogService.close();
        this.contentSearchDialogService.toggle();
    };
    ViewerHeaderComponent.prototype.toggleHelp = function () {
        this.contentsDialogService.close();
        this.contentSearchDialogService.close();
        this.helpDialogService.toggle();
    };
    ViewerHeaderComponent.prototype.toggleFullscreen = function () {
        return this.mimeDomHelper.toggleFullscreen();
    };
    ViewerHeaderComponent.prototype.isInFullScreen = function () {
        return this.fullscreenService.isFullscreen();
    };
    ViewerHeaderComponent.prototype.toggleViewerLayout = function () {
        this.viewerLayoutService.toggle();
    };
    ViewerHeaderComponent.prototype.setLayoutOnePage = function () {
        this.viewerLayoutService.setLayout(ViewerLayout.ONE_PAGE);
    };
    ViewerHeaderComponent.prototype.setLayoutTwoPage = function () {
        this.viewerLayoutService.setLayout(ViewerLayout.TWO_PAGE);
    };
    ViewerHeaderComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: ChangeDetectorRef },
        { type: ContentsDialogService },
        { type: ContentSearchDialogService },
        { type: HelpDialogService },
        { type: IiifManifestService },
        { type: FullscreenService },
        { type: MimeDomHelper },
        { type: ViewerLayoutService }
    ]; };
    __decorate([
        ViewChild('mimeHeaderBefore', { read: ViewContainerRef, static: true })
    ], ViewerHeaderComponent.prototype, "mimeHeaderBefore", void 0);
    __decorate([
        ViewChild('mimeHeaderAfter', { read: ViewContainerRef, static: true })
    ], ViewerHeaderComponent.prototype, "mimeHeaderAfter", void 0);
    __decorate([
        HostBinding('@headerState')
    ], ViewerHeaderComponent.prototype, "headerState", null);
    ViewerHeaderComponent = __decorate([
        Component({
            selector: 'mime-viewer-header',
            template: "<mat-toolbar>\n  <div\n    class=\"header-container\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"space-between center\"\n  >\n    <div><ng-template #mimeHeaderBefore></ng-template></div>\n    <div fxFlexOffset=\"16px\" class=\"label\" [matTooltip]=\"manifest?.label\">{{\n      manifest?.label\n    }}</div>\n    <div\n      fxFlex=\"noshrink\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"end center\"\n      class=\"buttons-container\"\n    >\n      <button\n        *ngIf=\"isPagedManifest\"\n        mat-icon-button\n        [id]=\"\n          viewerLayout === ViewerLayout.ONE_PAGE\n            ? 'toggleTwoPageViewButton'\n            : 'toggleSinglePageViewButton'\n        \"\n        [attr.aria-label]=\"\n          viewerLayout === ViewerLayout.ONE_PAGE\n            ? intl.twoPageViewLabel\n            : intl.singlePageViewLabel\n        \"\n        [matTooltip]=\"\n          viewerLayout === ViewerLayout.ONE_PAGE\n            ? intl.twoPageViewLabel\n            : intl.singlePageViewLabel\n        \"\n        (click)=\"toggleViewerLayout()\"\n      >\n        <mime-icon\n          [iconName]=\"\n            viewerLayout === ViewerLayout.ONE_PAGE\n              ? 'two_page_display'\n              : 'single_page_display'\n          \"\n        >\n        </mime-icon>\n      </button>\n      <button\n        id=\"contentsDialogButton\"\n        mat-icon-button\n        [attr.aria-label]=\"intl.contentsLabel\"\n        [matTooltip]=\"intl.contentsLabel\"\n        (click)=\"toggleContents()\"\n      >\n        <mat-icon aria-hidden=\"true\">list</mat-icon>\n      </button>\n      <button\n        id=\"contentSearchDialogButton\"\n        *ngIf=\"isContentSearchEnabled\"\n        mat-icon-button\n        [attr.aria-label]=\"intl.searchLabel\"\n        [matTooltip]=\"intl.searchLabel\"\n        (click)=\"toggleSearch()\"\n      >\n        <mat-icon aria-hidden=\"true\">search</mat-icon>\n      </button>\n      <button\n        id=\"helpDialogButton\"\n        mat-icon-button\n        [attr.aria-label]=\"intl.help.helpLabel\"\n        [matTooltip]=\"intl.help.helpLabel\"\n        (click)=\"toggleHelp()\"\n      >\n        <mat-icon aria-hidden=\"true\">help</mat-icon>\n      </button>\n\n      <button\n        id=\"fullscreenButton\"\n        *ngIf=\"isFullscreenEnabled\"\n        mat-icon-button\n        [attr.aria-label]=\"fullscreenLabel\"\n        [matTooltip]=\"fullscreenLabel\"\n        (click)=\"toggleFullscreen()\"\n      >\n        <mat-icon *ngIf=\"isInFullScreen\" aria-hidden=\"true\"\n          >fullscreen_exit</mat-icon\n        >\n        <mat-icon *ngIf=\"!isInFullScreen\" aria-hidden=\"true\"\n          >fullscreen</mat-icon\n        >\n      </button>\n    </div>\n    <div><ng-template #mimeHeaderAfter></ng-template></div>\n  </div>\n</mat-toolbar>\n",
            changeDetection: ChangeDetectionStrategy.Default,
            animations: [
                trigger('headerState', [
                    state('hide', style({
                        transform: 'translate(0, -100%)'
                    })),
                    state('show', style({
                        transform: 'translate(0px, 0px)'
                    })),
                    transition('hide => show', animate(ViewerOptions.transitions.toolbarsEaseInTime + 'ms ease-in')),
                    transition('show => hide', animate(ViewerOptions.transitions.toolbarsEaseOutTime + 'ms ease-out'))
                ])
            ],
            styles: [":host{max-height:64px}.header-container{width:100%}.label{font-size:17px;overflow:hidden;text-overflow:ellipsis}mat-toolbar{padding:0}.buttons-container{padding:0 16px}"]
        })
    ], ViewerHeaderComponent);
    return ViewerHeaderComponent;
}());
export { ViewerHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvdmlld2VyL3ZpZXdlci1oZWFkZXIvdmlld2VyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxjQUFjLEVB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cUJBQ2pDLENBQUMsQ0FDSDtvQkFDRCxVQUFVLENBQ1IsY0FBYyxFQUNkLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUNyRTtvQkFDRCxVQUFVLENBQ1IsY0FBYyxFQUNkLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxDQUN2RTtpQkFDRixDQUFDO2FBQ0g7O1NBQ0YsQ0FBQztPQUNXLHFCQUFxQixDQTZHakM7SUFBRCw0QkFBQztDQUFBLEFBN0dELElBNkdDO1NBN0dZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hbmlmZXN0VXRpbHMgfSBmcm9tICcuLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXV0aWxzJztcbmltcG9ydCB7IE1pbWVEb21IZWxwZXIgfSBmcm9tICcuLi8uLi9jb3JlL21pbWUtZG9tLWhlbHBlcic7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXQgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscy92aWV3ZXItbGF5b3V0JztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscy92aWV3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS92aWV3ZXItbGF5b3V0LXNlcnZpY2Uvdmlld2VyLWxheW91dC1zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb250ZW50LXNlYXJjaC1kaWFsb2cvY29udGVudC1zZWFyY2gtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGVudHNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb250ZW50cy1kaWFsb2cvY29udGVudHMtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRnVsbHNjcmVlblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2NvcmUvZnVsbHNjcmVlbi1zZXJ2aWNlL2Z1bGxzY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLy4uLy4uL2NvcmUvaW50bC92aWV3ZXItaW50bCc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgSGVscERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9oZWxwLWRpYWxvZy9oZWxwLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS12aWV3ZXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdlci1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2hlYWRlclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdoaWRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAtMTAwJSknXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3RhdGUoXG4gICAgICAgICdzaG93JyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwcHgsIDBweCknXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgJ2hpZGUgPT4gc2hvdycsXG4gICAgICAgIGFuaW1hdGUoVmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy50b29sYmFyc0Vhc2VJblRpbWUgKyAnbXMgZWFzZS1pbicpXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgJ3Nob3cgPT4gaGlkZScsXG4gICAgICAgIGFuaW1hdGUoVmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy50b29sYmFyc0Vhc2VPdXRUaW1lICsgJ21zIGVhc2Utb3V0JylcbiAgICAgIClcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnbWltZUhlYWRlckJlZm9yZScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIG1pbWVIZWFkZXJCZWZvcmU6IFZpZXdDb250YWluZXJSZWY7XG4gIEBWaWV3Q2hpbGQoJ21pbWVIZWFkZXJBZnRlcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIG1pbWVIZWFkZXJBZnRlcjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHVibGljIG1hbmlmZXN0OiBNYW5pZmVzdDtcbiAgcHVibGljIHN0YXRlID0gJ2hpZGUnO1xuICBpc0NvbnRlbnRTZWFyY2hFbmFibGVkID0gZmFsc2U7XG4gIGlzRnVsbHNjcmVlbkVuYWJsZWQgPSBmYWxzZTtcbiAgaXNJbkZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgZnVsbHNjcmVlbkxhYmVsID0gdGhpcy5pbnRsLmZ1bGxTY3JlZW5MYWJlbDtcbiAgaXNQYWdlZE1hbmlmZXN0ID0gZmFsc2U7XG4gIHZpZXdlckxheW91dDogVmlld2VyTGF5b3V0ID0gVmlld2VyTGF5b3V0Lk9ORV9QQUdFO1xuXG4gIFZpZXdlckxheW91dDogdHlwZW9mIFZpZXdlckxheW91dCA9IFZpZXdlckxheW91dDsgLy8gZW5hYmxlcyBwYXJzaW5nIG9mIGVudW0gaW4gdGVtcGxhdGVcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvbnRlbnRzRGlhbG9nU2VydmljZTogQ29udGVudHNEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2U6IENvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgaGVscERpYWxvZ1NlcnZpY2U6IEhlbHBEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZSxcbiAgICBwcml2YXRlIGZ1bGxzY3JlZW5TZXJ2aWNlOiBGdWxsc2NyZWVuU2VydmljZSxcbiAgICBwcml2YXRlIG1pbWVEb21IZWxwZXI6IE1pbWVEb21IZWxwZXIsXG4gICAgcHJpdmF0ZSB2aWV3ZXJMYXlvdXRTZXJ2aWNlOiBWaWV3ZXJMYXlvdXRTZXJ2aWNlXG4gICkge31cblxuICBASG9zdEJpbmRpbmcoJ0BoZWFkZXJTdGF0ZScpXG4gIGdldCBoZWFkZXJTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNGdWxsc2NyZWVuRW5hYmxlZCA9IHRoaXMuZnVsbHNjcmVlblNlcnZpY2UuaXNFbmFibGVkKCk7XG5cbiAgICB0aGlzLmludGwuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG5cbiAgICB0aGlzLmZ1bGxzY3JlZW5TZXJ2aWNlLm9uQ2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNJbkZ1bGxzY3JlZW4gPSB0aGlzLmZ1bGxzY3JlZW5TZXJ2aWNlLmlzRnVsbHNjcmVlbigpO1xuICAgICAgICB0aGlzLmZ1bGxzY3JlZW5MYWJlbCA9IHRoaXMuaXNJbkZ1bGxzY3JlZW5cbiAgICAgICAgICA/IHRoaXMuaW50bC5leGl0RnVsbFNjcmVlbkxhYmVsXG4gICAgICAgICAgOiB0aGlzLmludGwuZnVsbFNjcmVlbkxhYmVsO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1hbmlmZXN0OiBNYW5pZmVzdCkgPT4ge1xuICAgICAgICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gICAgICAgIHRoaXMuaXNDb250ZW50U2VhcmNoRW5hYmxlZCA9IG1hbmlmZXN0LnNlcnZpY2UgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMuaXNQYWdlZE1hbmlmZXN0ID0gTWFuaWZlc3RVdGlscy5pc01hbmlmZXN0UGFnZWQobWFuaWZlc3QpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy52aWV3ZXJMYXlvdXRTZXJ2aWNlLm9uQ2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgodmlld2VyTGF5b3V0OiBWaWV3ZXJMYXlvdXQpID0+IHtcbiAgICAgICAgdGhpcy52aWV3ZXJMYXlvdXQgPSB2aWV3ZXJMYXlvdXQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUNvbnRlbnRzKCkge1xuICAgIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcbiAgICB0aGlzLmhlbHBEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG4gICAgdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2UudG9nZ2xlKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VhcmNoKCkge1xuICAgIHRoaXMuY29udGVudHNEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG4gICAgdGhpcy5oZWxwRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UudG9nZ2xlKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlSGVscCgpIHtcbiAgICB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcbiAgICB0aGlzLmhlbHBEaWFsb2dTZXJ2aWNlLnRvZ2dsZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMubWltZURvbUhlbHBlci50b2dnbGVGdWxsc2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgaXNJbkZ1bGxTY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlblNlcnZpY2UuaXNGdWxsc2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlVmlld2VyTGF5b3V0KCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyTGF5b3V0U2VydmljZS50b2dnbGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMYXlvdXRPbmVQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyTGF5b3V0U2VydmljZS5zZXRMYXlvdXQoVmlld2VyTGF5b3V0Lk9ORV9QQUdFKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMYXlvdXRUd29QYWdlKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyTGF5b3V0U2VydmljZS5zZXRMYXlvdXQoVmlld2VyTGF5b3V0LlRXT19QQUdFKTtcbiAgfVxufVxuIl19