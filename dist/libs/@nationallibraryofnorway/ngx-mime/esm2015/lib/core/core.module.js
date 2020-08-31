import { __decorate } from "tslib";
import { SpinnerService } from './spinner-service/spinner.service';
import { NgModule } from '@angular/core';
import { MimeViewerIntl } from './intl/viewer-intl';
import { IiifManifestService } from './iiif-manifest-service/iiif-manifest-service';
import { IiifContentSearchService } from './iiif-content-search-service/iiif-content-search.service';
import { CanvasService } from './canvas-service/canvas-service';
import { MimeResizeService } from './mime-resize-service/mime-resize.service';
import { FullscreenService } from './fullscreen-service/fullscreen.service';
import { ViewerService } from './viewer-service/viewer.service';
import { ModeService } from './mode-service/mode.service';
import { ClickService } from './click-service/click.service';
import { ViewerLayoutService } from './viewer-layout-service/viewer-layout-service';
import { AccessKeysService } from './access-keys-handler-service/access-keys.service';
import { ContentSearchNavigationService } from './navigation/content-search-navigation-service/content-search-navigation.service';
import { StyleService } from './style-service/style.service';
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    NgModule({
        providers: [
            MimeViewerIntl,
            IiifManifestService,
            IiifContentSearchService,
            MimeResizeService,
            FullscreenService,
            ViewerService,
            ClickService,
            CanvasService,
            ModeService,
            SpinnerService,
            AccessKeysService,
            ViewerLayoutService,
            ContentSearchNavigationService,
            StyleService
        ]
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUNsSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFvQjdELElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7Q0FBRyxDQUFBO0FBQWIsVUFBVTtJQWxCdEIsUUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsY0FBYztZQUNkLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsOEJBQThCO1lBQzlCLFlBQVk7U0FDYjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUc7U0FBYixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuL3NwaW5uZXItc2VydmljZS9zcGlubmVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuL2ludGwvdmlld2VyLWludGwnO1xuaW1wb3J0IHsgSWlpZk1hbmlmZXN0U2VydmljZSB9IGZyb20gJy4vaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL2lpaWYtY29udGVudC1zZWFyY2gtc2VydmljZS9paWlmLWNvbnRlbnQtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gJy4vY2FudmFzLXNlcnZpY2UvY2FudmFzLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZSc7XG5pbXBvcnQgeyBGdWxsc2NyZWVuU2VydmljZSB9IGZyb20gJy4vZnVsbHNjcmVlbi1zZXJ2aWNlL2Z1bGxzY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi92aWV3ZXItc2VydmljZS92aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlU2VydmljZSB9IGZyb20gJy4vbW9kZS1zZXJ2aWNlL21vZGUuc2VydmljZSc7XG5pbXBvcnQgeyBDbGlja1NlcnZpY2UgfSBmcm9tICcuL2NsaWNrLXNlcnZpY2UvY2xpY2suc2VydmljZSc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi92aWV3ZXItbGF5b3V0LXNlcnZpY2Uvdmlld2VyLWxheW91dC1zZXJ2aWNlJztcbmltcG9ydCB7IEFjY2Vzc0tleXNTZXJ2aWNlIH0gZnJvbSAnLi9hY2Nlc3Mta2V5cy1oYW5kbGVyLXNlcnZpY2UvYWNjZXNzLWtleXMuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24vY29udGVudC1zZWFyY2gtbmF2aWdhdGlvbi1zZXJ2aWNlL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdHlsZVNlcnZpY2UgfSBmcm9tICcuL3N0eWxlLXNlcnZpY2Uvc3R5bGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIE1pbWVWaWV3ZXJJbnRsLFxuICAgIElpaWZNYW5pZmVzdFNlcnZpY2UsXG4gICAgSWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLFxuICAgIE1pbWVSZXNpemVTZXJ2aWNlLFxuICAgIEZ1bGxzY3JlZW5TZXJ2aWNlLFxuICAgIFZpZXdlclNlcnZpY2UsXG4gICAgQ2xpY2tTZXJ2aWNlLFxuICAgIENhbnZhc1NlcnZpY2UsXG4gICAgTW9kZVNlcnZpY2UsXG4gICAgU3Bpbm5lclNlcnZpY2UsXG4gICAgQWNjZXNzS2V5c1NlcnZpY2UsXG4gICAgVmlld2VyTGF5b3V0U2VydmljZSxcbiAgICBDb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgU3R5bGVTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7fVxuIl19