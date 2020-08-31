import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { AttributionDialogComponent } from './attribution-dialog.component';
import { AttributionDialogService } from './attribution-dialog.service';
import { AttributionDialogResizeService } from './attribution-dialog-resize.service';
import { MimeDomHelper } from '../core/mime-dom-helper';
var AttributionDialogModule = /** @class */ (function () {
    function AttributionDialogModule() {
    }
    AttributionDialogModule = __decorate([
        NgModule({
            imports: [SharedModule],
            declarations: [AttributionDialogComponent],
            providers: [
                AttributionDialogService,
                AttributionDialogResizeService,
                MimeDomHelper
            ],
            entryComponents: [AttributionDialogComponent]
        })
    ], AttributionDialogModule);
    return AttributionDialogModule;
}());
export { AttributionDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24tZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9hdHRyaWJ1dGlvbi1kaWFsb2cvYXR0cmlidXRpb24tZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWXhEO0lBQUE7SUFBc0MsQ0FBQztJQUExQix1QkFBdUI7UUFWbkMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQzFDLFNBQVMsRUFBRTtnQkFDVCx3QkFBd0I7Z0JBQ3hCLDhCQUE4QjtnQkFDOUIsYUFBYTthQUNkO1lBQ0QsZUFBZSxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDOUMsQ0FBQztPQUNXLHVCQUF1QixDQUFHO0lBQUQsOEJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uRGlhbG9nU2VydmljZSB9IGZyb20gJy4vYXR0cmlidXRpb24tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXR0cmlidXRpb25EaWFsb2dSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi1kaWFsb2ctcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZURvbUhlbHBlciB9IGZyb20gJy4uL2NvcmUvbWltZS1kb20taGVscGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1NoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0F0dHJpYnV0aW9uRGlhbG9nQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQXR0cmlidXRpb25EaWFsb2dTZXJ2aWNlLFxuICAgIEF0dHJpYnV0aW9uRGlhbG9nUmVzaXplU2VydmljZSxcbiAgICBNaW1lRG9tSGVscGVyXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0F0dHJpYnV0aW9uRGlhbG9nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbkRpYWxvZ01vZHVsZSB7fVxuIl19