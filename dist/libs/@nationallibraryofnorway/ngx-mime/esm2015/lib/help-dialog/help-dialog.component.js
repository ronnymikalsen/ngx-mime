import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
let HelpDialogComponent = class HelpDialogComponent {
    constructor(mediaObserver, intl, mimeResizeService) {
        this.mediaObserver = mediaObserver;
        this.intl = intl;
        this.mimeResizeService = mimeResizeService;
        this.tabHeight = {};
        this.mimeHeight = 0;
        this.destroyed = new Subject();
    }
    ngOnInit() {
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe((dimensions) => {
            this.mimeHeight = dimensions.height;
            this.resizeTabHeight();
        });
        this.resizeTabHeight();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    resizeTabHeight() {
        let height = this.mimeHeight;
        if (this.mediaObserver.isActive('lt-md')) {
            this.tabHeight = {
                maxHeight: window.innerHeight - 128 + 'px'
            };
        }
        else {
            height -= 272;
            this.tabHeight = {
                maxHeight: height + 'px'
            };
        }
    }
};
HelpDialogComponent.ctorParameters = () => [
    { type: MediaObserver },
    { type: MimeViewerIntl },
    { type: MimeResizeService }
];
HelpDialogComponent = __decorate([
    Component({
        selector: 'mime-help',
        template: "<div id=\"help-container\" class=\"help-container\">\n  <div [ngSwitch]=\"mediaObserver.isActive('lt-md')\">\n    <div *ngSwitchCase=\"true\">\n      <mat-toolbar color=\"primary\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <button\n            mat-icon-button\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n          <h1 mat-dialog-title>{{intl.help.helpLabel}}</h1>\n        </div>\n      </mat-toolbar>\n    </div>\n    <div *ngSwitchDefault>\n      <mat-toolbar>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex>\n          <h1 class=\"heading-desktop\" mat-dialog-title>{{intl.help.helpLabel}}</h1>\n          <button\n            mat-icon-button\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      </mat-toolbar>\n    </div>\n  </div>\n  <div [ngStyle]=\"tabHeight\" class=\"help-content\">\n    <p [innerHTML]=\"intl.help.line1\"></p>\n    <p [innerHTML]=\"intl.help.line2\"></p>\n    <p [innerHTML]=\"intl.help.line3\"></p>\n    <p [innerHTML]=\"intl.help.line4\"></p>\n    <p [innerHTML]=\"intl.help.line5\"></p>\n    <p [innerHTML]=\"intl.help.line6\"></p>\n    <p [innerHTML]=\"intl.help.line7\"></p>\n    <p [innerHTML]=\"intl.help.line8\"></p>\n    <p [innerHTML]=\"intl.help.line9\"></p>\n    <p [innerHTML]=\"intl.help.line10\"></p>\n  </div>\n</div>\n",
        styles: [".help-container{font-family:Roboto,'Helvetica Neue',sans-serif;font-size:14px}.help-content{padding:16px;overflow:auto}::ng-deep .help-panel{max-width:none!important}::ng-deep .help-panel>.mat-dialog-container{padding:0!important;overflow:initial}"]
    })
], HelpDialogComponent);
export { HelpDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVFwRixJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQUs5QixZQUNTLGFBQTRCLEVBQzVCLElBQW9CLEVBQ25CLGlCQUFvQztRQUZyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUHZDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUk7YUFDM0MsQ0FBQztTQUNIO2FBQU07WUFDTCxNQUFNLElBQUksR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixTQUFTLEVBQUUsTUFBTSxHQUFHLElBQUk7YUFDekIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUVGLENBQUE7O1lBcEN5QixhQUFhO1lBQ3RCLGNBQWM7WUFDQSxpQkFBaUI7O0FBUm5DLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixrOUNBQTJDOztLQUU1QyxDQUFDO0dBQ1csbUJBQW1CLENBMEMvQjtTQTFDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYU9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLi9jb3JlL2ludGwvdmlld2VyLWludGwnO1xuaW1wb3J0IHsgTWltZVJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29yZS9tb2RlbHMvZGltZW5zaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pbWUtaGVscCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWxwLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlbHAtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVscERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHRhYkhlaWdodCA9IHt9O1xuICBwcml2YXRlIG1pbWVIZWlnaHQgPSAwO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG1lZGlhT2JzZXJ2ZXI6IE1lZGlhT2JzZXJ2ZXIsXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgbWltZVJlc2l6ZVNlcnZpY2U6IE1pbWVSZXNpemVTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1pbWVSZXNpemVTZXJ2aWNlLm9uUmVzaXplXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZGltZW5zaW9uczogRGltZW5zaW9ucykgPT4ge1xuICAgICAgICB0aGlzLm1pbWVIZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgdGhpcy5yZXNpemVUYWJIZWlnaHQoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5yZXNpemVUYWJIZWlnaHQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemVUYWJIZWlnaHQoKSB7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMubWltZUhlaWdodDtcblxuICAgIGlmICh0aGlzLm1lZGlhT2JzZXJ2ZXIuaXNBY3RpdmUoJ2x0LW1kJykpIHtcbiAgICAgIHRoaXMudGFiSGVpZ2h0ID0ge1xuICAgICAgICBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDEyOCArICdweCdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlaWdodCAtPSAyNzI7XG4gICAgICB0aGlzLnRhYkhlaWdodCA9IHtcbiAgICAgICAgbWF4SGVpZ2h0OiBoZWlnaHQgKyAncHgnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG59XG4iXX0=