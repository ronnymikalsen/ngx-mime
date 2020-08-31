import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Subject, interval } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AttributionDialogComponent } from './attribution-dialog.component';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { AttributionDialogResizeService } from './attribution-dialog-resize.service';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { Dimensions } from '../core/models/dimensions';
let AttributionDialogService = class AttributionDialogService {
    constructor(dialog, mimeResizeService, attributionDialogResizeService, mimeDomHelper) {
        this.dialog = dialog;
        this.mimeResizeService = mimeResizeService;
        this.attributionDialogResizeService = attributionDialogResizeService;
        this.mimeDomHelper = mimeDomHelper;
        this.isAttributionDialogOpen = false;
        this.attributionDialogHeight = 0;
        this.destroyed = new Subject();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe((dimensions) => {
            if (this.isAttributionDialogOpen) {
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
            }
        });
        this.attributionDialogResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe((dimensions) => {
            if (this.isAttributionDialogOpen) {
                this.attributionDialogHeight = dimensions.height;
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
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
    open(timeout) {
        if (!this.isAttributionDialogOpen) {
            /**
             * Sleeping for material animations to finish
             * fix: https://github.com/angular/material2/issues/7438
             */
            interval(1000)
                .pipe(take(1))
                .subscribe(() => {
                const config = this.getDialogConfig();
                this.dialogRef = this.dialog.open(AttributionDialogComponent, config);
                this.dialogRef.afterClosed().subscribe((result) => {
                    this.isAttributionDialogOpen = false;
                    this.mimeDomHelper.setFocusOnViewer();
                });
                this.isAttributionDialogOpen = true;
                this.closeDialogAfter(timeout);
            });
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isAttributionDialogOpen = false;
        }
    }
    toggle() {
        this.isAttributionDialogOpen ? this.close() : this.open();
    }
    closeDialogAfter(seconds) {
        if (seconds > 0) {
            interval(seconds * 1000)
                .pipe(take(1))
                .subscribe(() => {
                this.close();
            });
        }
    }
    getDialogConfig() {
        const dimensions = this.getPosition(this._el);
        return {
            hasBackdrop: false,
            width: '180px',
            panelClass: 'attribution-panel',
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            autoFocus: true,
            restoreFocus: false
        };
    }
    getPosition(el) {
        const padding = 20;
        const dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new Dimensions({
            top: dimensions.top + dimensions.height - this.attributionDialogHeight - 68,
            left: dimensions.left + padding
        });
    }
};
AttributionDialogService.ctorParameters = () => [
    { type: MatDialog },
    { type: MimeResizeService },
    { type: AttributionDialogResizeService },
    { type: MimeDomHelper }
];
AttributionDialogService = __decorate([
    Injectable()
], AttributionDialogService);
export { AttributionDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24tZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvYXR0cmlidXRpb24tZGlhbG9nL2F0dHJpYnV0aW9uLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsQyxPQUFPLEVBQTRCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3ZELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBT25DLFlBQ1UsTUFBaUIsRUFDakIsaUJBQW9DLEVBQ3BDLDhCQUE4RCxFQUM5RCxhQUE0QjtRQUg1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVY5Qiw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFHaEMsNEJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU85QyxDQUFDO0lBRUcsVUFBVTtRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO2FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtnQkFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRO2FBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtZQUNwQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDLEVBQWM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2pDOzs7ZUFHRztZQUNILFFBQVEsQ0FBQyxJQUFJLENBQUM7aUJBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYixTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztTQUN0QztJQUNILENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsT0FBZTtRQUN0QyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDZixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYixTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRU8sZUFBZTtRQUNyQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsS0FBSyxFQUFFLE9BQU87WUFDZCxVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUFJO2dCQUMxQixJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJO2FBQzdCO1lBQ0QsU0FBUyxFQUFFLElBQUk7WUFDZixZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVPLFdBQVcsQ0FBQyxFQUFjO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNuQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sSUFBSSxVQUFVLENBQUM7WUFDcEIsR0FBRyxFQUNELFVBQVUsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRTtZQUN4RSxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQXJHbUIsU0FBUztZQUNFLGlCQUFpQjtZQUNKLDhCQUE4QjtZQUMvQyxhQUFhOztBQVgzQix3QkFBd0I7SUFEcEMsVUFBVSxFQUFFO0dBQ0Esd0JBQXdCLENBNkdwQztTQTdHWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXREaWFsb2csXG4gIE1hdERpYWxvZ1JlZixcbiAgTWF0RGlhbG9nQ29uZmlnXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF0dHJpYnV0aW9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXR0cmlidXRpb25EaWFsb2dSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi1kaWFsb2ctcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZURvbUhlbHBlciB9IGZyb20gJy4uL2NvcmUvbWltZS1kb20taGVscGVyJztcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi9jb3JlL21vZGVscy9kaW1lbnNpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uRGlhbG9nU2VydmljZSB7XG4gIHByaXZhdGUgaXNBdHRyaWJ1dGlvbkRpYWxvZ09wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxBdHRyaWJ1dGlvbkRpYWxvZ0NvbXBvbmVudD47XG4gIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGF0dHJpYnV0aW9uRGlhbG9nSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHJpdmF0ZSBtaW1lUmVzaXplU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGlvbkRpYWxvZ1Jlc2l6ZVNlcnZpY2U6IEF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZSxcbiAgICBwcml2YXRlIG1pbWVEb21IZWxwZXI6IE1pbWVEb21IZWxwZXJcbiAgKSB7fVxuXG4gIHB1YmxpYyBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIHRoaXMubWltZVJlc2l6ZVNlcnZpY2Uub25SZXNpemVcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChkaW1lbnNpb25zOiBEaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzQXR0cmlidXRpb25EaWFsb2dPcGVuKSB7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREaWFsb2dDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZS5vblJlc2l6ZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGRpbWVuc2lvbnM6IERpbWVuc2lvbnMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRyaWJ1dGlvbkRpYWxvZ09wZW4pIHtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0aW9uRGlhbG9nSGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXREaWFsb2dDb25maWcoKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbihjb25maWcucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gIH1cblxuICBzZXQgZWwoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbCA9IGVsO1xuICB9XG5cbiAgcHVibGljIG9wZW4odGltZW91dD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0F0dHJpYnV0aW9uRGlhbG9nT3Blbikge1xuICAgICAgLyoqXG4gICAgICAgKiBTbGVlcGluZyBmb3IgbWF0ZXJpYWwgYW5pbWF0aW9ucyB0byBmaW5pc2hcbiAgICAgICAqIGZpeDogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy83NDM4XG4gICAgICAgKi9cbiAgICAgIGludGVydmFsKDEwMDApXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGlhbG9nQ29uZmlnKCk7XG4gICAgICAgICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEF0dHJpYnV0aW9uRGlhbG9nQ29tcG9uZW50LCBjb25maWcpO1xuICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNBdHRyaWJ1dGlvbkRpYWxvZ09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWltZURvbUhlbHBlci5zZXRGb2N1c09uVmlld2VyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5pc0F0dHJpYnV0aW9uRGlhbG9nT3BlbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jbG9zZURpYWxvZ0FmdGVyKHRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nUmVmKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgdGhpcy5pc0F0dHJpYnV0aW9uRGlhbG9nT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc0F0dHJpYnV0aW9uRGlhbG9nT3BlbiA/IHRoaXMuY2xvc2UoKSA6IHRoaXMub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZURpYWxvZ0FmdGVyKHNlY29uZHM6IG51bWJlcikge1xuICAgIGlmIChzZWNvbmRzID4gMCkge1xuICAgICAgaW50ZXJ2YWwoc2Vjb25kcyAqIDEwMDApXG4gICAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXREaWFsb2dDb25maWcoKTogTWF0RGlhbG9nQ29uZmlnIHtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLl9lbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZSxcbiAgICAgIHdpZHRoOiAnMTgwcHgnLFxuICAgICAgcGFuZWxDbGFzczogJ2F0dHJpYnV0aW9uLXBhbmVsJyxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogZGltZW5zaW9ucy50b3AgKyAncHgnLFxuICAgICAgICBsZWZ0OiBkaW1lbnNpb25zLmxlZnQgKyAncHgnXG4gICAgICB9LFxuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgcmVzdG9yZUZvY3VzOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBvc2l0aW9uKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgY29uc3QgcGFkZGluZyA9IDIwO1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLm1pbWVEb21IZWxwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKTtcbiAgICByZXR1cm4gbmV3IERpbWVuc2lvbnMoe1xuICAgICAgdG9wOlxuICAgICAgICBkaW1lbnNpb25zLnRvcCArIGRpbWVuc2lvbnMuaGVpZ2h0IC0gdGhpcy5hdHRyaWJ1dGlvbkRpYWxvZ0hlaWdodCAtIDY4LFxuICAgICAgbGVmdDogZGltZW5zaW9ucy5sZWZ0ICsgcGFkZGluZ1xuICAgIH0pO1xuICB9XG59XG4iXX0=