import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentSearchDialogComponent } from './content-search-dialog.component';
import { ContentSearchDialogConfigStrategyFactory } from './content-search-dialog-config-strategy-factory';
import { MimeResizeService } from './../core/mime-resize-service/mime-resize.service';
var ContentSearchDialogService = /** @class */ (function () {
    function ContentSearchDialogService(dialog, contentSearchDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.contentSearchDialogConfigStrategyFactory = contentSearchDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isContentSearchDialogOpen = false;
        this.destroyed = new Subject();
    }
    ContentSearchDialogService.prototype.initialize = function () {
        var _this = this;
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (rect) {
            if (_this.isContentSearchDialogOpen) {
                var config = _this.getDialogConfig();
                _this.dialogRef.updatePosition(config.position);
                _this.dialogRef.updateSize(config.width, config.height);
            }
        });
    };
    ContentSearchDialogService.prototype.destroy = function () {
        this.close();
        this.destroyed.next();
    };
    Object.defineProperty(ContentSearchDialogService.prototype, "el", {
        set: function (el) {
            this._el = el;
        },
        enumerable: true,
        configurable: true
    });
    ContentSearchDialogService.prototype.open = function () {
        var _this = this;
        if (!this.isContentSearchDialogOpen) {
            var config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(ContentSearchDialogComponent, config);
            this.dialogRef.afterClosed().subscribe(function (result) {
                _this.isContentSearchDialogOpen = false;
            });
            this.isContentSearchDialogOpen = true;
        }
    };
    ContentSearchDialogService.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        this.isContentSearchDialogOpen = false;
    };
    ContentSearchDialogService.prototype.toggle = function () {
        this.isContentSearchDialogOpen ? this.close() : this.open();
    };
    ContentSearchDialogService.prototype.isOpen = function () {
        return this.isContentSearchDialogOpen;
    };
    ContentSearchDialogService.prototype.getDialogConfig = function () {
        return this.contentSearchDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    };
    ContentSearchDialogService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: ContentSearchDialogConfigStrategyFactory },
        { type: MimeResizeService }
    ]; };
    ContentSearchDialogService = __decorate([
        Injectable()
    ], ContentSearchDialogService);
    return ContentSearchDialogService;
}());
export { ContentSearchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC1zZWFyY2gtZGlhbG9nL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR3RGO0lBTUUsb0NBQ1UsTUFBaUIsRUFDakIsd0NBQWtGLEVBQ2xGLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZDQUF3QyxHQUF4Qyx3Q0FBd0MsQ0FBMEM7UUFDbEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVB0Qyw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFFbEMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFRywrQ0FBVSxHQUFqQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLElBQUksS0FBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUNsQyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0Q0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUksMENBQUU7YUFBTixVQUFPLEVBQWM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFFTSx5Q0FBSSxHQUFYO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDM0MsS0FBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRU0sMENBQUssR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRU0sMkNBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVNLDJDQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN4QyxDQUFDO0lBRU8sb0RBQWUsR0FBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyx3Q0FBd0M7YUFDakQsTUFBTSxFQUFFO2FBQ1IsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkF4RGlCLFNBQVM7Z0JBQ3lCLHdDQUF3QztnQkFDL0QsaUJBQWlCOztJQVRuQywwQkFBMEI7UUFEdEMsVUFBVSxFQUFFO09BQ0EsMEJBQTBCLENBZ0V0QztJQUFELGlDQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0FoRVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGlhbG9nLFxuICBNYXREaWFsb2dDb25maWcsXG4gIE1hdERpYWxvZ1JlZlxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb250ZW50U2VhcmNoRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LXNlYXJjaC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRTZWFyY2hEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnkgfSBmcm9tICcuL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy1jb25maWctc3RyYXRlZ3ktZmFjdG9yeSc7XG5pbXBvcnQgeyBNaW1lUmVzaXplU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBpc0NvbnRlbnRTZWFyY2hEaWFsb2dPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29udGVudFNlYXJjaERpYWxvZ0NvbXBvbmVudD47XG4gIHByaXZhdGUgZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHByaXZhdGUgY29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeTogQ29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeSxcbiAgICBwcml2YXRlIG1pbWVSZXNpemVTZXJ2aWNlOiBNaW1lUmVzaXplU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5taW1lUmVzaXplU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVjdCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW4pIHtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERpYWxvZ0NvbmZpZygpO1xuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLnVwZGF0ZVBvc2l0aW9uKGNvbmZpZy5wb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5kaWFsb2dSZWYudXBkYXRlU2l6ZShjb25maWcud2lkdGgsIGNvbmZpZy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gIH1cblxuICBzZXQgZWwoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW4pIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29udGVudFNlYXJjaERpYWxvZ0NvbXBvbmVudCwgY29uZmlnKTtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuaXNDb250ZW50U2VhcmNoRGlhbG9nT3BlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgfVxuICAgIHRoaXMuaXNDb250ZW50U2VhcmNoRGlhbG9nT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb250ZW50U2VhcmNoRGlhbG9nT3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlhbG9nQ29uZmlnKCk6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeVxuICAgICAgLmNyZWF0ZSgpXG4gICAgICAuZ2V0Q29uZmlnKHRoaXMuX2VsKTtcbiAgfVxufVxuIl19