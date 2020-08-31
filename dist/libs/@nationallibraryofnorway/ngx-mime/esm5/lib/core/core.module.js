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
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
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
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQUNsSSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFvQjdEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFVBQVU7UUFsQnRCLFFBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkLG1CQUFtQjtnQkFDbkIsd0JBQXdCO2dCQUN4QixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsYUFBYTtnQkFDYixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2IsV0FBVztnQkFDWCxjQUFjO2dCQUNkLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQiw4QkFBOEI7Z0JBQzlCLFlBQVk7YUFDYjtTQUNGLENBQUM7T0FDVyxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFBLEFBQTFCLElBQTBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnLi9zcGlubmVyLXNlcnZpY2Uvc3Bpbm5lci5zZXJ2aWNlJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgSWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9paWlmLWNvbnRlbnQtc2VhcmNoLXNlcnZpY2UvaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgRnVsbHNjcmVlblNlcnZpY2UgfSBmcm9tICcuL2Z1bGxzY3JlZW4tc2VydmljZS9mdWxsc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld2VyU2VydmljZSB9IGZyb20gJy4vdmlld2VyLXNlcnZpY2Uvdmlld2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kZVNlcnZpY2UgfSBmcm9tICcuL21vZGUtc2VydmljZS9tb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpY2tTZXJ2aWNlIH0gZnJvbSAnLi9jbGljay1zZXJ2aWNlL2NsaWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld2VyTGF5b3V0U2VydmljZSB9IGZyb20gJy4vdmlld2VyLWxheW91dC1zZXJ2aWNlL3ZpZXdlci1sYXlvdXQtc2VydmljZSc7XG5pbXBvcnQgeyBBY2Nlc3NLZXlzU2VydmljZSB9IGZyb20gJy4vYWNjZXNzLWtleXMtaGFuZGxlci1zZXJ2aWNlL2FjY2Vzcy1rZXlzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRpb24tc2VydmljZS9jb250ZW50LXNlYXJjaC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi9zdHlsZS1zZXJ2aWNlL3N0eWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICBNaW1lVmlld2VySW50bCxcbiAgICBJaWlmTWFuaWZlc3RTZXJ2aWNlLFxuICAgIElpaWZDb250ZW50U2VhcmNoU2VydmljZSxcbiAgICBNaW1lUmVzaXplU2VydmljZSxcbiAgICBGdWxsc2NyZWVuU2VydmljZSxcbiAgICBWaWV3ZXJTZXJ2aWNlLFxuICAgIENsaWNrU2VydmljZSxcbiAgICBDYW52YXNTZXJ2aWNlLFxuICAgIE1vZGVTZXJ2aWNlLFxuICAgIFNwaW5uZXJTZXJ2aWNlLFxuICAgIEFjY2Vzc0tleXNTZXJ2aWNlLFxuICAgIFZpZXdlckxheW91dFNlcnZpY2UsXG4gICAgQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIFN0eWxlU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge31cbiJdfQ==