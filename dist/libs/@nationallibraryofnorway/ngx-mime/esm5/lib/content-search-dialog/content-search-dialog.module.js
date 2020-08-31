import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { ContentSearchDialogService } from './content-search-dialog.service';
import { ContentSearchDialogConfigStrategyFactory } from './content-search-dialog-config-strategy-factory';
import { ContentSearchDialogComponent } from './content-search-dialog.component';
var ContentSearchDialogModule = /** @class */ (function () {
    function ContentSearchDialogModule() {
    }
    ContentSearchDialogModule = __decorate([
        NgModule({
            imports: [SharedModule],
            declarations: [ContentSearchDialogComponent],
            providers: [
                ContentSearchDialogService,
                ContentSearchDialogConfigStrategyFactory
            ],
            entryComponents: [ContentSearchDialogComponent]
        })
    ], ContentSearchDialogModule);
    return ContentSearchDialogModule;
}());
export { ContentSearchDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50LXNlYXJjaC1kaWFsb2cvY29udGVudC1zZWFyY2gtZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0csT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFXakY7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHlCQUF5QjtRQVRyQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDNUMsU0FBUyxFQUFFO2dCQUNULDBCQUEwQjtnQkFDMUIsd0NBQXdDO2FBQ3pDO1lBQ0QsZUFBZSxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDaEQsQ0FBQztPQUNXLHlCQUF5QixDQUFHO0lBQUQsZ0NBQUM7Q0FBQSxBQUF6QyxJQUF5QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IENvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9jb250ZW50LXNlYXJjaC1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZW50U2VhcmNoRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5IH0gZnJvbSAnLi9jb250ZW50LXNlYXJjaC1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LWZhY3RvcnknO1xuaW1wb3J0IHsgQ29udGVudFNlYXJjaERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC1zZWFyY2gtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTaGFyZWRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtDb250ZW50U2VhcmNoRGlhbG9nQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UsXG4gICAgQ29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5RmFjdG9yeVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb250ZW50U2VhcmNoRGlhbG9nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U2VhcmNoRGlhbG9nTW9kdWxlIHt9XG4iXX0=