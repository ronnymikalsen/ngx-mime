import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CanvasGroupDialogComponent } from './canvas-group-dialog.component';
let CanvasGroupDialogService = class CanvasGroupDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.isCanvasGroupDialogOpen = false;
        this.destroyed = new Subject();
    }
    initialize() { }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    open(timeout) {
        if (!this.isCanvasGroupDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(CanvasGroupDialogComponent, config);
            this.dialogRef.afterClosed().subscribe(result => {
                this.isCanvasGroupDialogOpen = false;
            });
            this.isCanvasGroupDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isCanvasGroupDialogOpen = false;
        }
    }
    toggle() {
        this.isCanvasGroupDialogOpen ? this.close() : this.open();
    }
    getDialogConfig() {
        return {
            hasBackdrop: false,
            disableClose: true,
            panelClass: 'canvas-group-panel'
        };
    }
};
CanvasGroupDialogService.ctorParameters = () => [
    { type: MatDialog }
];
CanvasGroupDialogService = __decorate([
    Injectable()
], CanvasGroupDialogService);
export { CanvasGroupDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NhbnZhcy1ncm91cC1kaWFsb2cvY2FudmFzLWdyb3VwLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBS25DLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFKN0IsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBRWhDLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVULENBQUM7SUFFbEMsVUFBVSxLQUFVLENBQUM7SUFFckIsT0FBTztRQUNaLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztTQUN0QztJQUNILENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRU8sZUFBZTtRQUNyQixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLG9CQUFvQjtTQUNqQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBdEM2QixTQUFTOztBQUwxQix3QkFBd0I7SUFEcEMsVUFBVSxFQUFFO0dBQ0Esd0JBQXdCLENBMkNwQztTQTNDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csXG4gIE1hdERpYWxvZ1JlZixcbiAgTWF0RGlhbG9nQ29uZmlnXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENhbnZhc0dyb3VwRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW52YXNHcm91cERpYWxvZ1NlcnZpY2Uge1xuICBwcml2YXRlIGlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2FudmFzR3JvdXBEaWFsb2dDb21wb25lbnQ+O1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHt9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDYW52YXNHcm91cERpYWxvZ09wZW4pIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2FudmFzR3JvdXBEaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNDYW52YXNHcm91cERpYWxvZ09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB0aGlzLmlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2FudmFzR3JvdXBEaWFsb2dPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGdldERpYWxvZ0NvbmZpZygpOiBNYXREaWFsb2dDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRydWUsXG4gICAgICBwYW5lbENsYXNzOiAnY2FudmFzLWdyb3VwLXBhbmVsJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==