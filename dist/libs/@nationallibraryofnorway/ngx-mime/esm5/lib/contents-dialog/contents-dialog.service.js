import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentsDialogComponent } from './contents-dialog.component';
import { ContentsDialogConfigStrategyFactory } from './contents-dialog-config-strategy-factory';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
var ContentsDialogService = /** @class */ (function () {
    function ContentsDialogService(dialog, contentsDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.contentsDialogConfigStrategyFactory = contentsDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isContentsDialogOpen = false;
        this.destroyed = new Subject();
    }
    ContentsDialogService.prototype.initialize = function () {
        var _this = this;
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (rect) {
            if (_this.isContentsDialogOpen) {
                var config = _this.getDialogConfig();
                _this.dialogRef.updatePosition(config.position);
                _this.dialogRef.updateSize(config.width, config.height);
            }
        });
    };
    ContentsDialogService.prototype.destroy = function () {
        this.close();
        this.destroyed.next();
    };
    Object.defineProperty(ContentsDialogService.prototype, "el", {
        set: function (el) {
            this._el = el;
        },
        enumerable: true,
        configurable: true
    });
    ContentsDialogService.prototype.open = function (selectedIndex) {
        var _this = this;
        if (!this.isContentsDialogOpen) {
            var config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(ContentsDialogComponent, config);
            if (selectedIndex) {
                this.dialogRef.componentInstance.selectedIndex = selectedIndex;
            }
            this.dialogRef.afterClosed().subscribe(function (result) {
                _this.isContentsDialogOpen = false;
            });
            this.isContentsDialogOpen = true;
        }
    };
    ContentsDialogService.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isContentsDialogOpen = false;
        }
        this.isContentsDialogOpen = false;
    };
    ContentsDialogService.prototype.toggle = function () {
        this.isContentsDialogOpen ? this.close() : this.open();
    };
    ContentsDialogService.prototype.isOpen = function () {
        return this.isContentsDialogOpen;
    };
    ContentsDialogService.prototype.getSelectedIndex = function () {
        return this.dialogRef && this.dialogRef.componentInstance
            ? this.dialogRef.componentInstance.selectedIndex
            : 0;
    };
    ContentsDialogService.prototype.getDialogConfig = function () {
        return this.contentsDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    };
    ContentsDialogService.ctorParameters = function () { return [
        { type: MatDialog },
        { type: ContentsDialogConfigStrategyFactory },
        { type: MimeResizeService }
    ]; };
    ContentsDialogService = __decorate([
        Injectable()
    ], ContentsDialogService);
    return ContentsDialogService;
}());
export { ContentsDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29udGVudHMtZGlhbG9nL2NvbnRlbnRzLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR3BGO0lBTUUsK0JBQ1UsTUFBaUIsRUFDakIsbUNBQXdFLEVBQ3hFLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVB0Qyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFFN0IsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFRywwQ0FBVSxHQUFqQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLElBQUksS0FBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUM3QixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx1Q0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUkscUNBQUU7YUFBTixVQUFPLEVBQWM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBSSxHQUFYLFVBQVksYUFBc0I7UUFBbEMsaUJBY0M7UUFiQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRW5FLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7YUFDaEU7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQzNDLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVNLHFDQUFLLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRU0sc0NBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBRU0sZ0RBQWdCLEdBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCO1lBQ3ZELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGFBQWE7WUFDaEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFTywrQ0FBZSxHQUF2QjtRQUNFLE9BQU8sSUFBSSxDQUFDLG1DQUFtQzthQUM1QyxNQUFNLEVBQUU7YUFDUixTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQXBFaUIsU0FBUztnQkFDb0IsbUNBQW1DO2dCQUNyRCxpQkFBaUI7O0lBVG5DLHFCQUFxQjtRQURqQyxVQUFVLEVBQUU7T0FDQSxxQkFBcUIsQ0E0RWpDO0lBQUQsNEJBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTVFWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csXG4gIE1hdERpYWxvZ0NvbmZpZyxcbiAgTWF0RGlhbG9nUmVmXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbnRlbnRzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50cy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5IH0gZnJvbSAnLi9jb250ZW50cy1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LWZhY3RvcnknO1xuaW1wb3J0IHsgTWltZVJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZW50c0RpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBpc0NvbnRlbnRzRGlhbG9nT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbnRlbnRzRGlhbG9nQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBjb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeTogQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnksXG4gICAgcHJpdmF0ZSBtaW1lUmVzaXplU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIHRoaXMubWltZVJlc2l6ZVNlcnZpY2Uub25SZXNpemVcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKHJlY3QgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0NvbnRlbnRzRGlhbG9nT3Blbikge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICAgICAgdGhpcy5kaWFsb2dSZWYudXBkYXRlUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi51cGRhdGVTaXplKGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIHNldCBlbChlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX2VsID0gZWw7XG4gIH1cblxuICBwdWJsaWMgb3BlbihzZWxlY3RlZEluZGV4PzogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmlzQ29udGVudHNEaWFsb2dPcGVuKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERpYWxvZ0NvbmZpZygpO1xuICAgICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbnRlbnRzRGlhbG9nQ29tcG9uZW50LCBjb25maWcpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbnRlbnRzRGlhbG9nT3BlbiA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmlzQ29udGVudHNEaWFsb2dPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgdGhpcy5pc0NvbnRlbnRzRGlhbG9nT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmlzQ29udGVudHNEaWFsb2dPcGVuID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNDb250ZW50c0RpYWxvZ09wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb250ZW50c0RpYWxvZ09wZW47XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmRpYWxvZ1JlZiAmJiB0aGlzLmRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZVxuICAgICAgPyB0aGlzLmRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5zZWxlY3RlZEluZGV4XG4gICAgICA6IDA7XG4gIH1cblxuICBwcml2YXRlIGdldERpYWxvZ0NvbmZpZygpOiBNYXREaWFsb2dDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5XG4gICAgICAuY3JlYXRlKClcbiAgICAgIC5nZXRDb25maWcodGhpcy5fZWwpO1xuICB9XG59XG4iXX0=