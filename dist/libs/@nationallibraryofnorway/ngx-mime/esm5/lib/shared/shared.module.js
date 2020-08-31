import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MimeMaterialModule } from './mime-material.module';
import { SpinnerService } from '../core/spinner-service/spinner.service';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                FlexLayoutModule,
                MimeMaterialModule
            ],
            exports: [
                CommonModule,
                FlexLayoutModule,
                FormsModule,
                ReactiveFormsModule,
                MimeMaterialModule
            ],
            providers: [SpinnerService]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQW1CekU7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQWpCeEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsa0JBQWtCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzVCLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuXG5pbXBvcnQgeyBNaW1lTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21pbWUtbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zcGlubmVyLXNlcnZpY2Uvc3Bpbm5lci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgTWltZU1hdGVyaWFsTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1pbWVNYXRlcmlhbE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtTcGlubmVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG4iXX0=