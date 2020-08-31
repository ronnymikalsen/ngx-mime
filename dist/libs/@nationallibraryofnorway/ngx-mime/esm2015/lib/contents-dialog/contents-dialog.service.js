import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentsDialogComponent } from './contents-dialog.component';
import { ContentsDialogConfigStrategyFactory } from './contents-dialog-config-strategy-factory';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
let ContentsDialogService = class ContentsDialogService {
    constructor(dialog, contentsDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.contentsDialogConfigStrategyFactory = contentsDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isContentsDialogOpen = false;
        this.destroyed = new Subject();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(rect => {
            if (this.isContentsDialogOpen) {
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
                this.dialogRef.updateSize(config.width, config.height);
            }
        });
    }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    set el(el) {
        this._el = el;
    }
    open(selectedIndex) {
        if (!this.isContentsDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(ContentsDialogComponent, config);
            if (selectedIndex) {
                this.dialogRef.componentInstance.selectedIndex = selectedIndex;
            }
            this.dialogRef.afterClosed().subscribe(result => {
                this.isContentsDialogOpen = false;
            });
            this.isContentsDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isContentsDialogOpen = false;
        }
        this.isContentsDialogOpen = false;
    }
    toggle() {
        this.isContentsDialogOpen ? this.close() : this.open();
    }
    isOpen() {
        return this.isContentsDialogOpen;
    }
    getSelectedIndex() {
        return this.dialogRef && this.dialogRef.componentInstance
            ? this.dialogRef.componentInstance.selectedIndex
            : 0;
    }
    getDialogConfig() {
        return this.contentsDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    }
};
ContentsDialogService.ctorParameters = () => [
    { type: MatDialog },
    { type: ContentsDialogConfigStrategyFactory },
    { type: MimeResizeService }
];
ContentsDialogService = __decorate([
    Injectable()
], ContentsDialogService);
export { ContentsDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29udGVudHMtZGlhbG9nL2NvbnRlbnRzLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBR3BGLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBTWhDLFlBQ1UsTUFBaUIsRUFDakIsbUNBQXdFLEVBQ3hFLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBcUM7UUFDeEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVB0Qyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFFN0IsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFRyxVQUFVO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUM3QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxFQUFFLENBQUMsRUFBYztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sSUFBSSxDQUFDLGFBQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFbkUsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzthQUNoRTtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztTQUNuQztRQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUI7WUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsYUFBYTtZQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsbUNBQW1DO2FBQzVDLE1BQU0sRUFBRTthQUNSLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUE7O1lBckVtQixTQUFTO1lBQ29CLG1DQUFtQztZQUNyRCxpQkFBaUI7O0FBVG5DLHFCQUFxQjtJQURqQyxVQUFVLEVBQUU7R0FDQSxxQkFBcUIsQ0E0RWpDO1NBNUVZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERpYWxvZyxcbiAgTWF0RGlhbG9nQ29uZmlnLFxuICBNYXREaWFsb2dSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29udGVudHNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnRzLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnkgfSBmcm9tICcuL2NvbnRlbnRzLWRpYWxvZy1jb25maWctc3RyYXRlZ3ktZmFjdG9yeSc7XG5pbXBvcnQgeyBNaW1lUmVzaXplU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbWltZS1yZXNpemUtc2VydmljZS9taW1lLXJlc2l6ZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRlbnRzRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGlzQ29udGVudHNEaWFsb2dPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29udGVudHNEaWFsb2dDb21wb25lbnQ+O1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIGNvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5OiBDb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeSxcbiAgICBwcml2YXRlIG1pbWVSZXNpemVTZXJ2aWNlOiBNaW1lUmVzaXplU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgdGhpcy5taW1lUmVzaXplU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVjdCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29udGVudHNEaWFsb2dPcGVuKSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREaWFsb2dDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLnVwZGF0ZVNpemUoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICB9XG5cbiAgc2V0IGVsKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fZWwgPSBlbDtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKHNlbGVjdGVkSW5kZXg/OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNDb250ZW50c0RpYWxvZ09wZW4pIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29udGVudHNEaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XG5cbiAgICAgIGlmIChzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmlzQ29udGVudHNEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNDb250ZW50c0RpYWxvZ09wZW4gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICB0aGlzLmlzQ29udGVudHNEaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaXNDb250ZW50c0RpYWxvZ09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0NvbnRlbnRzRGlhbG9nT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbiAgcHVibGljIGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbnRlbnRzRGlhbG9nT3BlbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZGlhbG9nUmVmICYmIHRoaXMuZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlXG4gICAgICA/IHRoaXMuZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLnNlbGVjdGVkSW5kZXhcbiAgICAgIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlhbG9nQ29uZmlnKCk6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnlcbiAgICAgIC5jcmVhdGUoKVxuICAgICAgLmdldENvbmZpZyh0aGlzLl9lbCk7XG4gIH1cbn1cbiJdfQ==