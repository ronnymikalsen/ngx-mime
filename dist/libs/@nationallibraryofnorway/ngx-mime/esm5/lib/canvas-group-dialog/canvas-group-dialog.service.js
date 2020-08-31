import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CanvasGroupDialogComponent } from './canvas-group-dialog.component';
var CanvasGroupDialogService = /** @class */ (function () {
    function CanvasGroupDialogService(dialog) {
        this.dialog = dialog;
        this.isCanvasGroupDialogOpen = false;
        this.destroyed = new Subject();
    }
    CanvasGroupDialogService.prototype.initialize = function () { };
    CanvasGroupDialogService.prototype.destroy = function () {
        this.close();
        this.destroyed.next();
    };
    CanvasGroupDialogService.prototype.open = function (timeout) {
        var _this = this;
        if (!this.isCanvasGroupDialogOpen) {
            var config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(CanvasGroupDialogComponent, config);
            this.dialogRef.afterClosed().subscribe(function (result) {
                _this.isCanvasGroupDialogOpen = false;
            });
            this.isCanvasGroupDialogOpen = true;
        }
    };
    CanvasGroupDialogService.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isCanvasGroupDialogOpen = false;
        }
    };
    CanvasGroupDialogService.prototype.toggle = function () {
        this.isCanvasGroupDialogOpen ? this.close() : this.open();
    };
    CanvasGroupDialogService.prototype.getDialogConfig = function () {
        return {
            hasBackdrop: false,
            disableClose: true,
            panelClass: 'canvas-group-panel'
        };
    };
    CanvasGroupDialogService.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    CanvasGroupDialogService = __decorate([
        Injectable()
    ], CanvasGroupDialogService);
    return CanvasGroupDialogService;
}());
export { CanvasGroupDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NhbnZhcy1ncm91cC1kaWFsb2cvY2FudmFzLWdyb3VwLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFO0lBS0Usa0NBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKN0IsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVULENBQUM7SUFFbEMsNkNBQVUsR0FBakIsY0FBMkIsQ0FBQztJQUVyQiwwQ0FBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sdUNBQUksR0FBWCxVQUFZLE9BQWdCO1FBQTVCLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNqQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQzNDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVNLHdDQUFLLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVNLHlDQUFNLEdBQWI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVELENBQUM7SUFFTyxrREFBZSxHQUF2QjtRQUNFLE9BQU87WUFDTCxXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7SUFDSixDQUFDOztnQkFyQzJCLFNBQVM7O0lBTDFCLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0EyQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csXG4gIE1hdERpYWxvZ1JlZixcbiAgTWF0RGlhbG9nQ29uZmlnXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENhbnZhc0dyb3VwRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW52YXNHcm91cERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIGlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2FudmFzR3JvdXBEaWFsb2dDb21wb25lbnQ+O1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDYW52YXNHcm91cERpYWxvZ09wZW4pIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2FudmFzR3JvdXBEaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNDYW52YXNHcm91cERpYWxvZ09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB0aGlzLmlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGdldERpYWxvZ0NvbmZpZygpOiBNYXREaWFsb2dDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXG4gICAgICBwYW5lbENsYXNzOiAnY2FudmFzLWdyb3VwLXBhbmVsJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==