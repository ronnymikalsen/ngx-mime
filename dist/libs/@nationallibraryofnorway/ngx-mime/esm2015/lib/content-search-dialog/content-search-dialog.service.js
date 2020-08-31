import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentSearchDialogComponent } from './content-search-dialog.component';
import { ContentSearchDialogConfigStrategyFactory } from './content-search-dialog-config-strategy-factory';
import { MimeResizeService } from './../core/mime-resize-service/mime-resize.service';
let ContentSearchDialogService = class ContentSearchDialogService {
    constructor(dialog, contentSearchDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.contentSearchDialogConfigStrategyFactory = contentSearchDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isContentSearchDialogOpen = false;
        this.destroyed = new Subject();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(rect => {
            if (this.isContentSearchDialogOpen) {
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
    open() {
        if (!this.isContentSearchDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(ContentSearchDialogComponent, config);
            this.dialogRef.afterClosed().subscribe(result => {
                this.isContentSearchDialogOpen = false;
            });
            this.isContentSearchDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        this.isContentSearchDialogOpen = false;
    }
    toggle() {
        this.isContentSearchDialogOpen ? this.close() : this.open();
    }
    isOpen() {
        return this.isContentSearchDialogOpen;
    }
    getDialogConfig() {
        return this.contentSearchDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    }
};
ContentSearchDialogService.ctorParameters = () => [
    { type: MatDialog },
    { type: ContentSearchDialogConfigStrategyFactory },
    { type: MimeResizeService }
];
ContentSearchDialogService = __decorate([
    Injectable()
], ContentSearchDialogService);
export { ContentSearchDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC1zZWFyY2gtZGlhbG9nL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDYixNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBR3RGLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBTXJDLFlBQ1UsTUFBaUIsRUFDakIsd0NBQWtGLEVBQ2xGLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLDZDQUF3QyxHQUF4Qyx3Q0FBd0MsQ0FBMEM7UUFDbEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVB0Qyw4QkFBeUIsR0FBRyxLQUFLLENBQUM7UUFFbEMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBTTlDLENBQUM7SUFFRyxVQUFVO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUNsQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxFQUFFLENBQUMsRUFBYztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7SUFDeEMsQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTyxJQUFJLENBQUMsd0NBQXdDO2FBQ2pELE1BQU0sRUFBRTthQUNSLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUE7O1lBekRtQixTQUFTO1lBQ3lCLHdDQUF3QztZQUMvRCxpQkFBaUI7O0FBVG5DLDBCQUEwQjtJQUR0QyxVQUFVLEVBQUU7R0FDQSwwQkFBMEIsQ0FnRXRDO1NBaEVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdERpYWxvZyxcbiAgTWF0RGlhbG9nQ29uZmlnLFxuICBNYXREaWFsb2dSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29udGVudFNlYXJjaERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC1zZWFyY2gtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50U2VhcmNoRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5IH0gZnJvbSAnLi9jb250ZW50LXNlYXJjaC1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LWZhY3RvcnknO1xuaW1wb3J0IHsgTWltZVJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuLy4uL2NvcmUvbWltZS1yZXNpemUtc2VydmljZS9taW1lLXJlc2l6ZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgaXNDb250ZW50U2VhcmNoRGlhbG9nT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbnRlbnRTZWFyY2hEaWFsb2dDb21wb25lbnQ+O1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwcml2YXRlIGNvbnRlbnRTZWFyY2hEaWFsb2dDb25maWdTdHJhdGVneUZhY3Rvcnk6IENvbnRlbnRTZWFyY2hEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnksXG4gICAgcHJpdmF0ZSBtaW1lUmVzaXplU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIHRoaXMubWltZVJlc2l6ZVNlcnZpY2Uub25SZXNpemVcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKHJlY3QgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0NvbnRlbnRTZWFyY2hEaWFsb2dPcGVuKSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREaWFsb2dDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLnVwZGF0ZVNpemUoY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICB9XG5cbiAgc2V0IGVsKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fZWwgPSBlbDtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIGlmICghdGhpcy5pc0NvbnRlbnRTZWFyY2hEaWFsb2dPcGVuKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldERpYWxvZ0NvbmZpZygpO1xuICAgICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbnRlbnRTZWFyY2hEaWFsb2dDb21wb25lbnQsIGNvbmZpZyk7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW4gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc0NvbnRlbnRTZWFyY2hEaWFsb2dPcGVuID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0NvbnRlbnRTZWFyY2hEaWFsb2dPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxuICBwdWJsaWMgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQ29udGVudFNlYXJjaERpYWxvZ09wZW47XG4gIH1cblxuICBwcml2YXRlIGdldERpYWxvZ0NvbmZpZygpOiBNYXREaWFsb2dDb25maWcge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnlcbiAgICAgIC5jcmVhdGUoKVxuICAgICAgLmdldENvbmZpZyh0aGlzLl9lbCk7XG4gIH1cbn1cbiJdfQ==