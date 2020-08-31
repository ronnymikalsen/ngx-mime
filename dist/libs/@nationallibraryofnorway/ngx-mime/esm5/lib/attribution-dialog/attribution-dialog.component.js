import { __decorate } from "tslib";
import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccessKeysService } from '../core/access-keys-handler-service/access-keys.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { StyleService } from '../core/style-service/style.service';
import { AttributionDialogResizeService } from './attribution-dialog-resize.service';
var AttributionDialogComponent = /** @class */ (function () {
    function AttributionDialogComponent(intl, renderer, el, changeDetectorRef, iiifManifestService, attributionDialogResizeService, styleService, accessKeysHandlerService) {
        this.intl = intl;
        this.renderer = renderer;
        this.el = el;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.attributionDialogResizeService = attributionDialogResizeService;
        this.styleService = styleService;
        this.accessKeysHandlerService = accessKeysHandlerService;
        this.destroyed = new Subject();
        attributionDialogResizeService.el = el;
    }
    AttributionDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.manifest = manifest;
            _this.changeDetectorRef.markForCheck();
        });
    };
    AttributionDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.styleService.onChange.pipe(takeUntil(this.destroyed)).subscribe(function (c) {
            var backgroundRgbaColor = _this.styleService.convertToRgba(c, 0.3);
            _this.renderer.setStyle(_this.container.nativeElement, 'background-color', backgroundRgbaColor);
        });
    };
    AttributionDialogComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    AttributionDialogComponent.prototype.handleKeys = function (event) {
        this.accessKeysHandlerService.handleKeyEvents(event);
    };
    AttributionDialogComponent.prototype.onResize = function (event) {
        this.attributionDialogResizeService.markForCheck();
    };
    AttributionDialogComponent.prototype.ngAfterViewChecked = function () {
        this.attributionDialogResizeService.markForCheck();
    };
    AttributionDialogComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: IiifManifestService },
        { type: AttributionDialogResizeService },
        { type: StyleService },
        { type: AccessKeysService }
    ]; };
    __decorate([
        ViewChild('container', { static: true })
    ], AttributionDialogComponent.prototype, "container", void 0);
    __decorate([
        HostListener('keyup', ['$event'])
    ], AttributionDialogComponent.prototype, "handleKeys", null);
    __decorate([
        HostListener('window:resize', ['$event'])
    ], AttributionDialogComponent.prototype, "onResize", null);
    AttributionDialogComponent = __decorate([
        Component({
            template: "<div #container id=\"attribution-container\" class=\"attribution-container\">\n  <mat-toolbar class=\"attribution-toolbar\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex>\n      <h1 mat-dialog-title>{{ intl.attributionLabel }}</h1>\n      <button\n        mat-icon-button\n        [aria-label]=\"intl.attributonCloseAriaLabel\"\n        [matTooltip]=\"intl.closeLabel\"\n        [matDialogClose]=\"true\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar>\n  <p mat-dialog-content [innerHTML]=\"manifest?.attribution\"> </p>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".attribution-toolbar{font-size:14px;background:0 0;min-height:20px!important;padding:8px}.mat-dialog-title{font-size:16px}.mat-dialog-content{padding:8px;margin:0}::ng-deep .attribution-panel{font-family:Roboto,'Helvetica Neue',sans-serif}::ng-deep .attribution-panel>.mat-dialog-container{background:0 0!important;font-size:11px;padding:0}::ng-deep .attribution-toolbar>.mat-toolbar-layout>.mat-toolbar-row{height:20px}"]
        })
    ], AttributionDialogComponent);
    return AttributionDialogComponent;
}());
export { AttributionDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbi1kaWFsb2cvYXR0cmlidXRpb24tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQU9yRjtJQU1FLG9DQUNTLElBQW9CLEVBQ25CLFFBQW1CLEVBQ25CLEVBQWMsRUFDZCxpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLDhCQUE4RCxFQUM5RCxZQUEwQixFQUMxQix3QkFBMkM7UUFQNUMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7UUFDOUQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFtQjtRQVg3QyxjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFhL0MsOEJBQThCLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNkNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWU7YUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsUUFBa0I7WUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9EQUFlLEdBQWY7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNwRSxJQUFNLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQzVCLGtCQUFrQixFQUNsQixtQkFBbUIsQ0FDcEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELCtDQUFVLEdBQVYsVUFBVyxLQUFvQjtRQUM3QixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFHRCw2Q0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixJQUFJLENBQUMsOEJBQThCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELHVEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyRCxDQUFDOztnQkFqRGMsY0FBYztnQkFDVCxTQUFTO2dCQUNmLFVBQVU7Z0JBQ0ssaUJBQWlCO2dCQUNmLG1CQUFtQjtnQkFDUiw4QkFBOEI7Z0JBQ2hELFlBQVk7Z0JBQ0EsaUJBQWlCOztJQVZYO1FBQXpDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7aUVBQXVCO0lBeUNoRTtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnRUFHakM7SUFHRDtRQURDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFHekM7SUFwRFUsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULHVtQkFBa0Q7WUFFbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVywwQkFBMEIsQ0F5RHRDO0lBQUQsaUNBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXpEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBY2Nlc3NLZXlzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvYWNjZXNzLWtleXMtaGFuZGxlci1zZXJ2aWNlL2FjY2Vzcy1rZXlzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWlpZk1hbmlmZXN0U2VydmljZSB9IGZyb20gJy4uL2NvcmUvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lVmlld2VySW50bCB9IGZyb20gJy4uL2NvcmUvaW50bC92aWV3ZXItaW50bCc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IFN0eWxlU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc3R5bGUtc2VydmljZS9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZSB9IGZyb20gJy4vYXR0cmlidXRpb24tZGlhbG9nLXJlc2l6ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9hdHRyaWJ1dGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdHRyaWJ1dGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25EaWFsb2dDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIHB1YmxpYyBtYW5pZmVzdDogTWFuaWZlc3Q7XG4gIHByaXZhdGUgZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGlpaWZNYW5pZmVzdFNlcnZpY2U6IElpaWZNYW5pZmVzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGlvbkRpYWxvZ1Jlc2l6ZVNlcnZpY2U6IEF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZSxcbiAgICBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWNjZXNzS2V5c0hhbmRsZXJTZXJ2aWNlOiBBY2Nlc3NLZXlzU2VydmljZVxuICApIHtcbiAgICBhdHRyaWJ1dGlvbkRpYWxvZ1Jlc2l6ZVNlcnZpY2UuZWwgPSBlbDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWlpZk1hbmlmZXN0U2VydmljZS5jdXJyZW50TWFuaWZlc3RcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChtYW5pZmVzdDogTWFuaWZlc3QpID0+IHtcbiAgICAgICAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5zdHlsZVNlcnZpY2Uub25DaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKS5zdWJzY3JpYmUoYyA9PiB7XG4gICAgICBjb25zdCBiYWNrZ3JvdW5kUmdiYUNvbG9yID0gdGhpcy5zdHlsZVNlcnZpY2UuY29udmVydFRvUmdiYShjLCAwLjMpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICBiYWNrZ3JvdW5kUmdiYUNvbG9yXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUtleXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLmFjY2Vzc0tleXNIYW5kbGVyU2VydmljZS5oYW5kbGVLZXlFdmVudHMoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIG9uUmVzaXplKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZS5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZS5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19