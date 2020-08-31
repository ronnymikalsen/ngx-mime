import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelpDialogComponent } from './help-dialog.component';
import { HelpDialogConfigStrategyFactory } from './help-dialog-config-strategy-factory';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
var HelpDialogService = /** @class */ (function () {
    function HelpDialogService(dialog, helpDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.helpDialogConfigStrategyFactory = helpDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isHelpDialogOpen = false;
        this.destroyed = new Subject();
    }
    HelpDialogService.prototype.initialize = function () {
        var _this = this;
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () {
            if (_this.isHelpDialogOpen) {
                var config = _this.getDialogConfig();
                _this.dialogRef.updatePosition(config.position);
                _this.dialogRef.updateSize(config.width, config.height);
            }
        });
    };
    HelpDialogService.prototype.destroy = function () {
        this.close();
        this.destroyed.next();
    };
    Object.defineProperty(HelpDialogService.prototype, "el", {
        set: function (el) {
            this._el = el;
        },
        enumerable: true,
        configurable: true
    });
    HelpDialogService.prototype.open = function () {
        var _this = this;
        if (!this.isHelpDialogOpen) {
            var config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(HelpDialogComponent, config);
            this.dialogRef.afterClosed().subscribe(function () {
                _this.isHelpDialogOpen = false;
            });
            this.isHelpDialogOpen = true;
        }
    };
    HelpDialogService.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        this.isHelpDialogOpen = false;
    };
    HelpDialogService.prototype.toggle = function () {
        this.isHelpDialogOpen ? this.close() : this.open();
    };
    HelpDialogService.prototype.isOpen = function () {
        return this.isHelpDialogOpen;
    };
    HelpDialogService.prototype.getDialogConfig = function () {
        return this.helpDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    };
    HelpDialogService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: HelpDialogConfigStrategyFactory },
        { type: MimeResizeService }
    ]; };
    HelpDialogService = __decorate([
        Injectable()
    ], HelpDialogService);
    return HelpDialogService;
}());
export { HelpDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9oZWxwLWRpYWxvZy9oZWxwLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFHcEY7SUFNRSwyQkFDVSxNQUFpQixFQUNqQiwrQkFBZ0UsRUFDaEUsaUJBQW9DO1FBRnBDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQUNoRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUHRDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUFNOUMsQ0FBQztJQUVHLHNDQUFVLEdBQWpCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUTthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sbUNBQU8sR0FBZDtRQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFJLGlDQUFFO2FBQU4sVUFBTyxFQUFjO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUFBO0lBRU0sZ0NBQUksR0FBWDtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBRU8sMkNBQWUsR0FBdkI7UUFDRSxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDeEMsTUFBTSxFQUFFO2FBQ1IsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkF4RGlCLFNBQVM7Z0JBQ2dCLCtCQUErQjtnQkFDN0MsaUJBQWlCOztJQVRuQyxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCLENBZ0U3QjtJQUFELHdCQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0FoRVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSGVscERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vaGVscC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEhlbHBEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnkgfSBmcm9tICcuL2hlbHAtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS1mYWN0b3J5JztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVscERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBpc0hlbHBEaWFsb2dPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SGVscERpYWxvZ0NvbXBvbmVudD47XG4gIHByaXZhdGUgZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgaGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeTogSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeSxcbiAgICBwcml2YXRlIG1pbWVSZXNpemVTZXJ2aWNlOiBNaW1lUmVzaXplU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5taW1lUmVzaXplU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0hlbHBEaWFsb2dPcGVuKSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREaWFsb2dDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLnVwZGF0ZVNpemUoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gIH1cblxuICBzZXQgZWwoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzSGVscERpYWxvZ09wZW4pIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSGVscERpYWxvZ0NvbXBvbmVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0hlbHBEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNIZWxwRGlhbG9nT3BlbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZ1JlZikge1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gICAgdGhpcy5pc0hlbHBEaWFsb2dPcGVuID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNIZWxwRGlhbG9nT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbiAgcHVibGljIGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0hlbHBEaWFsb2dPcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaWFsb2dDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeVxuICAgICAgLmNyZWF0ZSgpXG4gICAgICAuZ2V0Q29uZmlnKHRoaXMuX2VsKTtcbiAgfVxufVxuIl19