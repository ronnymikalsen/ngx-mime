import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HelpDialogComponent } from './help-dialog.component';
import { HelpDialogService } from './help-dialog.service';
import { HelpDialogConfigStrategyFactory } from './help-dialog-config-strategy-factory';
var HelpDialogModule = /** @class */ (function () {
    function HelpDialogModule() {
    }
    HelpDialogModule = __decorate([
        NgModule({
            imports: [SharedModule],
            declarations: [HelpDialogComponent],
            providers: [
                HelpDialogService,
                HelpDialogConfigStrategyFactory
            ]
        })
    ], HelpDialogModule);
    return HelpDialogModule;
}());
export { HelpDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFVeEY7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQVI1QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbkMsU0FBUyxFQUFFO2dCQUNULGlCQUFpQjtnQkFDakIsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQUFHO0lBQUQsdUJBQUM7Q0FBQSxBQUFoQyxJQUFnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgSGVscERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vaGVscC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEhlbHBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9oZWxwLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBEaWFsb2dDb25maWdTdHJhdGVneUZhY3RvcnkgfSBmcm9tICcuL2hlbHAtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS1mYWN0b3J5JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1NoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hlbHBEaWFsb2dDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBIZWxwRGlhbG9nU2VydmljZSxcbiAgICBIZWxwRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSGVscERpYWxvZ01vZHVsZSB7fVxuIl19