import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SharedModule } from './../shared/shared.module';
import { ContentsDialogService } from './contents-dialog.service';
import { ContentsDialogConfigStrategyFactory } from './contents-dialog-config-strategy-factory';
import { ContentsDialogComponent } from './contents-dialog.component';
import { MetadataComponent } from './metadata/metadata.component';
import { TocComponent } from './table-of-contents/table-of-contents.component';
var ContentsDialogModule = /** @class */ (function () {
    function ContentsDialogModule() {
    }
    ContentsDialogModule = __decorate([
        NgModule({
            imports: [SharedModule],
            declarations: [ContentsDialogComponent, MetadataComponent, TocComponent],
            providers: [
                ContentsDialogService,
                ContentsDialogConfigStrategyFactory,
                { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
            ],
            entryComponents: [ContentsDialogComponent]
        })
    ], ContentsDialogModule);
    return ContentsDialogModule;
}());
export { ContentsDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMtZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50cy1kaWFsb2cvY29udGVudHMtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLDRCQUE0QixFQUM3QixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFZL0U7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQVZoQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxDQUFDO1lBQ3hFLFNBQVMsRUFBRTtnQkFDVCxxQkFBcUI7Z0JBQ3JCLG1DQUFtQztnQkFDbkMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO2FBQ3ZFO1lBQ0QsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDM0MsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRXJyb3JTdGF0ZU1hdGNoZXIsXG4gIFNob3dPbkRpcnR5RXJyb3JTdGF0ZU1hdGNoZXJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGVudHNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9jb250ZW50cy1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeSB9IGZyb20gJy4vY29udGVudHMtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS1mYWN0b3J5JztcbmltcG9ydCB7IENvbnRlbnRzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50cy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1ldGFkYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9jQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS1vZi1jb250ZW50cy90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29udGVudHNEaWFsb2dDb21wb25lbnQsIE1ldGFkYXRhQ29tcG9uZW50LCBUb2NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb250ZW50c0RpYWxvZ1NlcnZpY2UsXG4gICAgQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnksXG4gICAgeyBwcm92aWRlOiBFcnJvclN0YXRlTWF0Y2hlciwgdXNlQ2xhc3M6IFNob3dPbkRpcnR5RXJyb3JTdGF0ZU1hdGNoZXIgfVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb250ZW50c0RpYWxvZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudHNEaWFsb2dNb2R1bGUge31cbiJdfQ==