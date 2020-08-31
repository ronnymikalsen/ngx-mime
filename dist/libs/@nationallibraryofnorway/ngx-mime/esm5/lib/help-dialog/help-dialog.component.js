import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
var HelpDialogComponent = /** @class */ (function () {
    function HelpDialogComponent(mediaObserver, intl, mimeResizeService) {
        this.mediaObserver = mediaObserver;
        this.intl = intl;
        this.mimeResizeService = mimeResizeService;
        this.tabHeight = {};
        this.mimeHeight = 0;
        this.destroyed = new Subject();
    }
    HelpDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (dimensions) {
            _this.mimeHeight = dimensions.height;
            _this.resizeTabHeight();
        });
        this.resizeTabHeight();
    };
    HelpDialogComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    HelpDialogComponent.prototype.resizeTabHeight = function () {
        var height = this.mimeHeight;
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
    };
    HelpDialogComponent.ctorParameters = function () { return [
        { type: MediaObserver },
        { type: MimeViewerIntl },
        { type: MimeResizeService }
    ]; };
    HelpDialogComponent = __decorate([
        Component({
            selector: 'mime-help',
            template: "<div id=\"help-container\" class=\"help-container\">\n  <div [ngSwitch]=\"mediaObserver.isActive('lt-md')\">\n    <div *ngSwitchCase=\"true\">\n      <mat-toolbar color=\"primary\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <button\n            mat-icon-button\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n          <h1 mat-dialog-title>{{intl.help.helpLabel}}</h1>\n        </div>\n      </mat-toolbar>\n    </div>\n    <div *ngSwitchDefault>\n      <mat-toolbar>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex>\n          <h1 class=\"heading-desktop\" mat-dialog-title>{{intl.help.helpLabel}}</h1>\n          <button\n            mat-icon-button\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      </mat-toolbar>\n    </div>\n  </div>\n  <div [ngStyle]=\"tabHeight\" class=\"help-content\">\n    <p [innerHTML]=\"intl.help.line1\"></p>\n    <p [innerHTML]=\"intl.help.line2\"></p>\n    <p [innerHTML]=\"intl.help.line3\"></p>\n    <p [innerHTML]=\"intl.help.line4\"></p>\n    <p [innerHTML]=\"intl.help.line5\"></p>\n    <p [innerHTML]=\"intl.help.line6\"></p>\n    <p [innerHTML]=\"intl.help.line7\"></p>\n    <p [innerHTML]=\"intl.help.line8\"></p>\n    <p [innerHTML]=\"intl.help.line9\"></p>\n    <p [innerHTML]=\"intl.help.line10\"></p>\n  </div>\n</div>\n",
            styles: [".help-container{font-family:Roboto,'Helvetica Neue',sans-serif;font-size:14px}.help-content{padding:16px;overflow:auto}::ng-deep .help-panel{max-width:none!important}::ng-deep .help-panel>.mat-dialog-container{padding:0!important;overflow:initial}"]
        })
    ], HelpDialogComponent);
    return HelpDialogComponent;
}());
export { HelpDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQVFwRjtJQUtFLDZCQUNTLGFBQTRCLEVBQzVCLElBQW9CLEVBQ25CLGlCQUFvQztRQUZyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUHZDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFSixzQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUTthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxVQUFzQjtZQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDcEMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTyw2Q0FBZSxHQUF2QjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLFNBQVMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJO2FBQzNDLENBQUM7U0FDSDthQUFNO1lBQ0wsTUFBTSxJQUFJLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsU0FBUyxFQUFFLE1BQU0sR0FBRyxJQUFJO2FBQ3pCLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQWxDdUIsYUFBYTtnQkFDdEIsY0FBYztnQkFDQSxpQkFBaUI7O0lBUm5DLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixrOUNBQTJDOztTQUU1QyxDQUFDO09BQ1csbUJBQW1CLENBMEMvQjtJQUFELDBCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0ExQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL2RpbWVuc2lvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLWhlbHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVscC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWxwLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB0YWJIZWlnaHQgPSB7fTtcbiAgcHJpdmF0ZSBtaW1lSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBtZWRpYU9ic2VydmVyOiBNZWRpYU9ic2VydmVyLFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIG1pbWVSZXNpemVTZXJ2aWNlOiBNaW1lUmVzaXplU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5taW1lUmVzaXplU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGRpbWVuc2lvbnM6IERpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgdGhpcy5taW1lSGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgIHRoaXMucmVzaXplVGFiSGVpZ2h0KCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucmVzaXplVGFiSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplVGFiSGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1pbWVIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5tZWRpYU9ic2VydmVyLmlzQWN0aXZlKCdsdC1tZCcpKSB7XG4gICAgICB0aGlzLnRhYkhlaWdodCA9IHtcbiAgICAgICAgbWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMjggKyAncHgnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWlnaHQgLT0gMjcyO1xuICAgICAgdGhpcy50YWJIZWlnaHQgPSB7XG4gICAgICAgIG1heEhlaWdodDogaGVpZ2h0ICsgJ3B4J1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxufVxuIl19