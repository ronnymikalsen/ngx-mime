import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import 'd3';
import 'openseadragon';
import { AttributionDialogModule } from './attribution-dialog/attribution-dialog.module';
import { CanvasGroupDialogModule } from './canvas-group-dialog/canvas-group-dialog.module';
import { ContentSearchDialogModule } from './content-search-dialog/content-search-dialog.module';
import { HelpDialogModule } from './help-dialog/help-dialog.module';
import { ContentsDialogModule } from './contents-dialog/contents-dialog.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { OsdToolbarComponent } from './viewer/osd-toolbar/osd-toolbar.component';
import { CanvasGroupNavigatorComponent } from './viewer/viewer-footer/canvas-group-navigator/canvas-group-navigator.component';
import { ContentSearchNavigatorComponent } from './viewer/viewer-footer/content-search-navigator/content-search-navigator.component';
import { ViewerFooterComponent } from './viewer/viewer-footer/viewer-footer.component';
import { IconComponent } from './viewer/viewer-header/icon/icon.component';
import { ViewerHeaderComponent } from './viewer/viewer-header/viewer-header.component';
import { ViewerSpinnerComponent } from './viewer/viewer-spinner/viewer-spinner.component';
import { ViewerComponent } from './viewer/viewer.component';
var MimeModule = /** @class */ (function () {
    function MimeModule() {
    }
    MimeModule = __decorate([
        NgModule({
            declarations: [
                ViewerComponent,
                ViewerHeaderComponent,
                ViewerFooterComponent,
                OsdToolbarComponent,
                ContentSearchNavigatorComponent,
                CanvasGroupNavigatorComponent,
                ViewerSpinnerComponent,
                IconComponent
            ],
            imports: [
                CoreModule,
                SharedModule,
                ContentsDialogModule,
                AttributionDialogModule,
                HelpDialogModule,
                ContentSearchDialogModule,
                CanvasGroupDialogModule
            ],
            exports: [ViewerComponent]
        })
    ], MimeModule);
    return MimeModule;
}());
export { MimeModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1pbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL25neC1taW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLElBQUksQ0FBQztBQUNaLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDakYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDL0gsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0ZBQW9GLENBQUM7QUFDckksT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQXdCNUQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsVUFBVTtRQXRCdEIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLGVBQWU7Z0JBQ2YscUJBQXFCO2dCQUNyQixxQkFBcUI7Z0JBQ3JCLG1CQUFtQjtnQkFDbkIsK0JBQStCO2dCQUMvQiw2QkFBNkI7Z0JBQzdCLHNCQUFzQjtnQkFDdEIsYUFBYTthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLHVCQUF1QjtnQkFDdkIsZ0JBQWdCO2dCQUNoQix5QkFBeUI7Z0JBQ3pCLHVCQUF1QjthQUN4QjtZQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMzQixDQUFDO09BQ1csVUFBVSxDQUFHO0lBQUQsaUJBQUM7Q0FBQSxBQUExQixJQUEwQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICdkMyc7XG5pbXBvcnQgJ29wZW5zZWFkcmFnb24nO1xuaW1wb3J0IHsgQXR0cmlidXRpb25EaWFsb2dNb2R1bGUgfSBmcm9tICcuL2F0dHJpYnV0aW9uLWRpYWxvZy9hdHRyaWJ1dGlvbi1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IENhbnZhc0dyb3VwRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9jYW52YXMtZ3JvdXAtZGlhbG9nL2NhbnZhcy1ncm91cC1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IENvbnRlbnRTZWFyY2hEaWFsb2dNb2R1bGUgfSBmcm9tICcuL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy9jb250ZW50LXNlYXJjaC1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IEhlbHBEaWFsb2dNb2R1bGUgfSBmcm9tICcuL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250ZW50c0RpYWxvZ01vZHVsZSB9IGZyb20gJy4vY29udGVudHMtZGlhbG9nL2NvbnRlbnRzLWRpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcbmltcG9ydCB7IE9zZFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci9vc2QtdG9vbGJhci9vc2QtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FudmFzR3JvdXBOYXZpZ2F0b3JDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci92aWV3ZXItZm9vdGVyL2NhbnZhcy1ncm91cC1uYXZpZ2F0b3IvY2FudmFzLWdyb3VwLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudFNlYXJjaE5hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdmlld2VyL3ZpZXdlci1mb290ZXIvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld2VyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3ZXIvdmlld2VyLWZvb3Rlci92aWV3ZXItZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3ZXIvdmlld2VyLWhlYWRlci9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXdlckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdmlld2VyL3ZpZXdlci1oZWFkZXIvdmlld2VyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld2VyU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vdmlld2VyL3ZpZXdlci1zcGlubmVyL3ZpZXdlci1zcGlubmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVmlld2VyQ29tcG9uZW50LFxuICAgIFZpZXdlckhlYWRlckNvbXBvbmVudCxcbiAgICBWaWV3ZXJGb290ZXJDb21wb25lbnQsXG4gICAgT3NkVG9vbGJhckNvbXBvbmVudCxcbiAgICBDb250ZW50U2VhcmNoTmF2aWdhdG9yQ29tcG9uZW50LFxuICAgIENhbnZhc0dyb3VwTmF2aWdhdG9yQ29tcG9uZW50LFxuICAgIFZpZXdlclNwaW5uZXJDb21wb25lbnQsXG4gICAgSWNvbkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29yZU1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgQ29udGVudHNEaWFsb2dNb2R1bGUsXG4gICAgQXR0cmlidXRpb25EaWFsb2dNb2R1bGUsXG4gICAgSGVscERpYWxvZ01vZHVsZSxcbiAgICBDb250ZW50U2VhcmNoRGlhbG9nTW9kdWxlLFxuICAgIENhbnZhc0dyb3VwRGlhbG9nTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtWaWV3ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1pbWVNb2R1bGUge31cbiJdfQ==