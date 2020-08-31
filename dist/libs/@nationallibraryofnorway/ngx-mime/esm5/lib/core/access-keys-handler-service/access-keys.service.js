import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ViewerService } from '../viewer-service/viewer.service';
import { CanvasService } from '../canvas-service/canvas-service';
import { ContentSearchDialogService } from '../../content-search-dialog/content-search-dialog.service';
import { ContentsDialogService } from '../../contents-dialog/contents-dialog.service';
import { ModeService } from '../mode-service/mode.service';
import { ViewerMode } from '../models/viewer-mode';
import { IiifManifestService } from '../iiif-manifest-service/iiif-manifest-service';
import { MimeDomHelper } from '../mime-dom-helper';
import { AccessKeys } from '../models/AccessKeys';
import { ContentSearchNavigationService } from '../navigation/content-search-navigation-service/content-search-navigation.service';
import { IiifContentSearchService } from '../iiif-content-search-service/iiif-content-search.service';
import { ViewingDirection } from '../models/viewing-direction';
var AccessKeysService = /** @class */ (function () {
    function AccessKeysService(viewerService, canvasService, modeService, iiifManifestService, iiifContentSearchService, contentSearchDialogService, contentsDialogService, mimeDomHelper, contentSearchNavigationService) {
        var _this = this;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.iiifManifestService = iiifManifestService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.contentSearchDialogService = contentSearchDialogService;
        this.contentsDialogService = contentsDialogService;
        this.mimeDomHelper = mimeDomHelper;
        this.contentSearchNavigationService = contentSearchNavigationService;
        this.isSearchable = false;
        this.hasHits = false;
        this.disabledKeys = [];
        this.destroyed = new Subject();
        this.invert = false;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.isSearchable = _this.isManifestSearchable(manifest);
            _this.invert = manifest.viewingDirection === ViewingDirection.RTL;
        });
        this.iiifContentSearchService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (result) {
            _this.hasHits = result.hits.length > 0;
        });
    }
    AccessKeysService.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    AccessKeysService.prototype.handleKeyEvents = function (event) {
        var accessKeys = new AccessKeys(event);
        if (!this.isKeyDisabled(event.keyCode)) {
            if (accessKeys.isArrowLeftKeys()) {
                if (!this.isZoomedIn()) {
                    this.invert
                        ? this.goToNextCanvasGroup()
                        : this.goToPreviousCanvasGroup();
                }
            }
            else if (accessKeys.isArrowRightKeys()) {
                if (!this.isZoomedIn()) {
                    this.invert
                        ? this.goToPreviousCanvasGroup()
                        : this.goToNextCanvasGroup();
                }
            }
            else if (accessKeys.isFirstCanvasGroupKeys()) {
                this.goToFirstCanvasGroup();
            }
            else if (accessKeys.isLastCanvasGroupKeys()) {
                this.goToLastCanvasGroup();
            }
            else if (accessKeys.isNextHitKeys() && this.hasHits) {
                this.goToNextHit();
            }
            else if (accessKeys.isPreviousHitKeys() && this.hasHits) {
                this.goToPreviousHit();
            }
            else if (accessKeys.isFullscreenKeys()) {
                this.toggleFullscreen();
            }
            else if (accessKeys.isSearchDialogKeys() && this.isSearchable) {
                this.toggleSearchDialog();
            }
            else if (accessKeys.isContentsDialogKeys()) {
                this.toggleContentsDialog();
            }
            else if (accessKeys.isResetSearchKeys()) {
                this.resetSearch();
            }
            else if (accessKeys.isPageDownKeys()) {
                this.goToNextCanvasGroup();
            }
            else if (accessKeys.isPageUpKeys()) {
                this.goToPreviousCanvasGroup();
            }
            else if (accessKeys.isZoomInKeys()) {
                this.zoomIn();
            }
            else if (accessKeys.isZoomOutKeys()) {
                this.zoomOut();
            }
            else if (accessKeys.isZoomHomeKeys()) {
                this.zoomHome();
            }
            else if (accessKeys.isRotateKeys()) {
                this.rotateClockWise();
            }
        }
    };
    AccessKeysService.prototype.goToNextCanvasGroup = function () {
        this.viewerService.goToNextCanvasGroup();
    };
    AccessKeysService.prototype.goToPreviousCanvasGroup = function () {
        this.viewerService.goToPreviousCanvasGroup();
    };
    AccessKeysService.prototype.goToFirstCanvasGroup = function () {
        this.viewerService.goToCanvasGroup(0, false);
    };
    AccessKeysService.prototype.goToLastCanvasGroup = function () {
        this.viewerService.goToCanvasGroup(this.canvasService.numberOfCanvasGroups - 1, false);
    };
    AccessKeysService.prototype.rotateClockWise = function () {
        this.viewerService.rotate();
        this.mimeDomHelper.setFocusOnViewer();
    };
    AccessKeysService.prototype.goToNextHit = function () {
        this.contentSearchNavigationService.goToNextCanvasGroupHit();
    };
    AccessKeysService.prototype.goToPreviousHit = function () {
        this.contentSearchNavigationService.goToPreviousCanvasGroupHit();
    };
    AccessKeysService.prototype.zoomIn = function () {
        if (this.modeService.mode === ViewerMode.DASHBOARD) {
            this.modeService.toggleMode();
        }
        else {
            this.viewerService.zoomIn();
        }
    };
    AccessKeysService.prototype.zoomOut = function () {
        if (this.modeService.mode === ViewerMode.PAGE) {
            this.modeService.toggleMode();
        }
        else if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            this.viewerService.zoomOut();
        }
    };
    AccessKeysService.prototype.zoomHome = function () {
        if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            this.viewerService.home();
        }
    };
    AccessKeysService.prototype.toggleSearchDialog = function () {
        if (this.modeService.mode === ViewerMode.PAGE ||
            this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            this.modeService.mode = ViewerMode.DASHBOARD;
            this.contentSearchDialogService.open();
        }
        else {
            if (this.contentSearchDialogService.isOpen()) {
                this.contentSearchDialogService.close();
            }
            else {
                this.contentSearchDialogService.open();
            }
        }
        this.contentsDialogService.close();
    };
    AccessKeysService.prototype.toggleContentsDialog = function () {
        if (this.modeService.mode === ViewerMode.PAGE ||
            this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            this.modeService.mode = ViewerMode.DASHBOARD;
            this.contentsDialogService.open();
        }
        else {
            if (this.contentsDialogService.isOpen()) {
                this.contentsDialogService.close();
            }
            else {
                this.contentsDialogService.open();
            }
        }
        this.contentSearchDialogService.close();
    };
    AccessKeysService.prototype.toggleFullscreen = function () {
        this.mimeDomHelper.toggleFullscreen();
        this.mimeDomHelper.setFocusOnViewer();
    };
    AccessKeysService.prototype.resetSearch = function () {
        this.iiifContentSearchService.destroy();
    };
    AccessKeysService.prototype.isManifestSearchable = function (manifest) {
        return manifest.service ? true : false;
    };
    AccessKeysService.prototype.isZoomedIn = function () {
        return this.modeService.mode === ViewerMode.PAGE_ZOOMED;
    };
    AccessKeysService.prototype.updateDisabledKeys = function () {
        this.resetDisabledKeys();
        if (this.contentsDialogService.isOpen()) {
            this.disableKeysForContentDialog();
        }
        else if (this.contentSearchDialogService.isOpen()) {
            this.diableKeysForContentSearchDialog();
        }
    };
    AccessKeysService.prototype.disableKeysForContentDialog = function () {
        this.disabledKeys = this.disabledKeys
            .concat(AccessKeys.ARROWLEFT)
            .concat(AccessKeys.ARROWRIGHT);
    };
    AccessKeysService.prototype.diableKeysForContentSearchDialog = function () {
        this.disabledKeys = this.disabledKeys
            .concat(AccessKeys.ARROWLEFT)
            .concat(AccessKeys.ARROWRIGHT)
            .concat(AccessKeys.firstCanvasGroupCodes)
            .concat(AccessKeys.lastCanvasGroupCodes)
            .concat(AccessKeys.zoomInCodes)
            .concat(AccessKeys.zoomOutCodes)
            .concat(AccessKeys.zoomHomeCodes)
            .concat(AccessKeys.nextHit)
            .concat(AccessKeys.previousHit)
            .concat(AccessKeys.toggleSearchDialogCodes)
            .concat(AccessKeys.toggleContentsDialogCodes)
            .concat(AccessKeys.toggleFullscreenCodes);
    };
    AccessKeysService.prototype.resetDisabledKeys = function () {
        this.disabledKeys = [];
    };
    AccessKeysService.prototype.isKeyDisabled = function (keyCode) {
        this.updateDisabledKeys();
        return this.disabledKeys.indexOf(keyCode) > -1;
    };
    AccessKeysService.ctorParameters = function () { return [
        { type: ViewerService },
        { type: CanvasService },
        { type: ModeService },
        { type: IiifManifestService },
        { type: IiifContentSearchService },
        { type: ContentSearchDialogService },
        { type: ContentsDialogService },
        { type: MimeDomHelper },
        { type: ContentSearchNavigationService }
    ]; };
    AccessKeysService = __decorate([
        Injectable()
    ], AccessKeysService);
    return AccessKeysService;
}());
export { AccessKeysService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLWtleXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2FjY2Vzcy1rZXlzLWhhbmRsZXItc2VydmljZS9hY2Nlc3Mta2V5cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDdkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUVyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQ25JLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRXRHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRy9EO0lBT0UsMkJBQ1UsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsV0FBd0IsRUFD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QTVOd0IsYUFBYTtnQkFDYixhQUFhO2dCQUNmLFdBQVc7Z0JBQ0gsbUJBQW1CO2dCQUNkLHdCQUF3QjtnQkFDdEIsMEJBQTBCO2dCQUMvQixxQkFBcUI7Z0JBQzdCLGFBQWE7Z0JBQ0ksOEJBQThCOztJQWhCN0QsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQixDQXFPN0I7SUFBRCx3QkFBQztDQUFBLEFBck9ELElBcU9DO1NBck9ZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdmlld2VyLXNlcnZpY2Uvdmlld2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gJy4uL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29udGVudC1zZWFyY2gtZGlhbG9nL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRzRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbnRlbnRzLWRpYWxvZy9jb250ZW50cy1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RlU2VydmljZSB9IGZyb20gJy4uL21vZGUtc2VydmljZS9tb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlld2VyTW9kZSB9IGZyb20gJy4uL21vZGVscy92aWV3ZXItbW9kZSc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBNaW1lRG9tSGVscGVyIH0gZnJvbSAnLi4vbWltZS1kb20taGVscGVyJztcbmltcG9ydCB7IEFjY2Vzc0tleXMgfSBmcm9tICcuLi9tb2RlbHMvQWNjZXNzS2V5cyc7XG5pbXBvcnQgeyBDb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRpb24tc2VydmljZS9jb250ZW50LXNlYXJjaC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vaWlpZi1jb250ZW50LXNlYXJjaC1zZXJ2aWNlL2lpaWYtY29udGVudC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9tb2RlbHMvc2VhcmNoLXJlc3VsdCc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdpbmctZGlyZWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY2Vzc0tleXNTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpc1NlYXJjaGFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBoYXNIaXRzID0gZmFsc2U7XG4gIHByaXZhdGUgZGlzYWJsZWRLZXlzOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaW52ZXJ0ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGVTZXJ2aWNlOiBNb2RlU2VydmljZSxcbiAgICBwcml2YXRlIGlpaWZNYW5pZmVzdFNlcnZpY2U6IElpaWZNYW5pZmVzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmQ29udGVudFNlYXJjaFNlcnZpY2U6IElpaWZDb250ZW50U2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlOiBDb250ZW50U2VhcmNoRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRlbnRzRGlhbG9nU2VydmljZTogQ29udGVudHNEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWltZURvbUhlbHBlcjogTWltZURvbUhlbHBlcixcbiAgICBwcml2YXRlIGNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZTogQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaWlpZk1hbmlmZXN0U2VydmljZS5jdXJyZW50TWFuaWZlc3RcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChtYW5pZmVzdDogTWFuaWZlc3QpID0+IHtcbiAgICAgICAgdGhpcy5pc1NlYXJjaGFibGUgPSB0aGlzLmlzTWFuaWZlc3RTZWFyY2hhYmxlKG1hbmlmZXN0KTtcbiAgICAgICAgdGhpcy5pbnZlcnQgPSBtYW5pZmVzdC52aWV3aW5nRGlyZWN0aW9uID09PSBWaWV3aW5nRGlyZWN0aW9uLlJUTDtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uub25DaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmhhc0hpdHMgPSByZXN1bHQuaGl0cy5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVLZXlFdmVudHMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBhY2Nlc3NLZXlzID0gbmV3IEFjY2Vzc0tleXMoZXZlbnQpO1xuICAgIGlmICghdGhpcy5pc0tleURpc2FibGVkKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICBpZiAoYWNjZXNzS2V5cy5pc0Fycm93TGVmdEtleXMoKSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNab29tZWRJbigpKSB7XG4gICAgICAgICAgdGhpcy5pbnZlcnRcbiAgICAgICAgICAgID8gdGhpcy5nb1RvTmV4dENhbnZhc0dyb3VwKClcbiAgICAgICAgICAgIDogdGhpcy5nb1RvUHJldmlvdXNDYW52YXNHcm91cCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNBcnJvd1JpZ2h0S2V5cygpKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1pvb21lZEluKCkpIHtcbiAgICAgICAgICB0aGlzLmludmVydFxuICAgICAgICAgICAgPyB0aGlzLmdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKClcbiAgICAgICAgICAgIDogdGhpcy5nb1RvTmV4dENhbnZhc0dyb3VwKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWNjZXNzS2V5cy5pc0ZpcnN0Q2FudmFzR3JvdXBLZXlzKCkpIHtcbiAgICAgICAgdGhpcy5nb1RvRmlyc3RDYW52YXNHcm91cCgpO1xuICAgICAgfSBlbHNlIGlmIChhY2Nlc3NLZXlzLmlzTGFzdENhbnZhc0dyb3VwS2V5cygpKSB7XG4gICAgICAgIHRoaXMuZ29Ub0xhc3RDYW52YXNHcm91cCgpO1xuICAgICAgfSBlbHNlIGlmIChhY2Nlc3NLZXlzLmlzTmV4dEhpdEtleXMoKSAmJiB0aGlzLmhhc0hpdHMpIHtcbiAgICAgICAgdGhpcy5nb1RvTmV4dEhpdCgpO1xuICAgICAgfSBlbHNlIGlmIChhY2Nlc3NLZXlzLmlzUHJldmlvdXNIaXRLZXlzKCkgJiYgdGhpcy5oYXNIaXRzKSB7XG4gICAgICAgIHRoaXMuZ29Ub1ByZXZpb3VzSGl0KCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNGdWxsc2NyZWVuS2V5cygpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChhY2Nlc3NLZXlzLmlzU2VhcmNoRGlhbG9nS2V5cygpICYmIHRoaXMuaXNTZWFyY2hhYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VhcmNoRGlhbG9nKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNDb250ZW50c0RpYWxvZ0tleXMoKSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUNvbnRlbnRzRGlhbG9nKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNSZXNldFNlYXJjaEtleXMoKSkge1xuICAgICAgICB0aGlzLnJlc2V0U2VhcmNoKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNQYWdlRG93bktleXMoKSkge1xuICAgICAgICB0aGlzLmdvVG9OZXh0Q2FudmFzR3JvdXAoKTtcbiAgICAgIH0gZWxzZSBpZiAoYWNjZXNzS2V5cy5pc1BhZ2VVcEtleXMoKSkge1xuICAgICAgICB0aGlzLmdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNab29tSW5LZXlzKCkpIHtcbiAgICAgICAgdGhpcy56b29tSW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoYWNjZXNzS2V5cy5pc1pvb21PdXRLZXlzKCkpIHtcbiAgICAgICAgdGhpcy56b29tT3V0KCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNab29tSG9tZUtleXMoKSkge1xuICAgICAgICB0aGlzLnpvb21Ib21lKCk7XG4gICAgICB9IGVsc2UgaWYgKGFjY2Vzc0tleXMuaXNSb3RhdGVLZXlzKCkpIHtcbiAgICAgICAgdGhpcy5yb3RhdGVDbG9ja1dpc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdvVG9OZXh0Q2FudmFzR3JvdXAoKSB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9OZXh0Q2FudmFzR3JvdXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoKSB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKCk7XG4gIH1cblxuICBwcml2YXRlIGdvVG9GaXJzdENhbnZhc0dyb3VwKCkge1xuICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzR3JvdXAoMCwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBnb1RvTGFzdENhbnZhc0dyb3VwKCkge1xuICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzR3JvdXAoXG4gICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubnVtYmVyT2ZDYW52YXNHcm91cHMgLSAxLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByb3RhdGVDbG9ja1dpc2UoKSB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLnJvdGF0ZSgpO1xuICAgIHRoaXMubWltZURvbUhlbHBlci5zZXRGb2N1c09uVmlld2VyKCk7XG4gIH1cblxuICBwcml2YXRlIGdvVG9OZXh0SGl0KCkge1xuICAgIHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdvVG9OZXh0Q2FudmFzR3JvdXBIaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ29Ub1ByZXZpb3VzSGl0KCkge1xuICAgIHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdvVG9QcmV2aW91c0NhbnZhc0dyb3VwSGl0KCk7XG4gIH1cblxuICBwcml2YXRlIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLkRBU0hCT0FSRCkge1xuICAgICAgdGhpcy5tb2RlU2VydmljZS50b2dnbGVNb2RlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld2VyU2VydmljZS56b29tSW4oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFKSB7XG4gICAgICB0aGlzLm1vZGVTZXJ2aWNlLnRvZ2dsZU1vZGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCkge1xuICAgICAgdGhpcy52aWV3ZXJTZXJ2aWNlLnpvb21PdXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHpvb21Ib21lKCkge1xuICAgIGlmICh0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRUQpIHtcbiAgICAgIHRoaXMudmlld2VyU2VydmljZS5ob21lKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVTZWFyY2hEaWFsb2coKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0UgfHxcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRFxuICAgICkge1xuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID0gVmlld2VyTW9kZS5EQVNIQk9BUkQ7XG4gICAgICB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY29udGVudFNlYXJjaERpYWxvZ1NlcnZpY2UuaXNPcGVuKCkpIHtcbiAgICAgICAgdGhpcy5jb250ZW50U2VhcmNoRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50U2VhcmNoRGlhbG9nU2VydmljZS5vcGVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2UuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlQ29udGVudHNEaWFsb2coKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0UgfHxcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRFxuICAgICkge1xuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID0gVmlld2VyTW9kZS5EQVNIQk9BUkQ7XG4gICAgICB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5pc09wZW4oKSkge1xuICAgICAgICB0aGlzLmNvbnRlbnRzRGlhbG9nU2VydmljZS5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50c0RpYWxvZ1NlcnZpY2Uub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRlbnRTZWFyY2hEaWFsb2dTZXJ2aWNlLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgdGhpcy5taW1lRG9tSGVscGVyLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgICB0aGlzLm1pbWVEb21IZWxwZXIuc2V0Rm9jdXNPblZpZXdlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFNlYXJjaCgpIHtcbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIGlzTWFuaWZlc3RTZWFyY2hhYmxlKG1hbmlmZXN0OiBNYW5pZmVzdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtYW5pZmVzdC5zZXJ2aWNlID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1pvb21lZEluKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRUQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURpc2FibGVkS2V5cygpIHtcbiAgICB0aGlzLnJlc2V0RGlzYWJsZWRLZXlzKCk7XG4gICAgaWYgKHRoaXMuY29udGVudHNEaWFsb2dTZXJ2aWNlLmlzT3BlbigpKSB7XG4gICAgICB0aGlzLmRpc2FibGVLZXlzRm9yQ29udGVudERpYWxvZygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50U2VhcmNoRGlhbG9nU2VydmljZS5pc09wZW4oKSkge1xuICAgICAgdGhpcy5kaWFibGVLZXlzRm9yQ29udGVudFNlYXJjaERpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGlzYWJsZUtleXNGb3JDb250ZW50RGlhbG9nKCkge1xuICAgIHRoaXMuZGlzYWJsZWRLZXlzID0gdGhpcy5kaXNhYmxlZEtleXNcbiAgICAgIC5jb25jYXQoQWNjZXNzS2V5cy5BUlJPV0xFRlQpXG4gICAgICAuY29uY2F0KEFjY2Vzc0tleXMuQVJST1dSSUdIVCk7XG4gIH1cblxuICBwcml2YXRlIGRpYWJsZUtleXNGb3JDb250ZW50U2VhcmNoRGlhbG9nKCkge1xuICAgIHRoaXMuZGlzYWJsZWRLZXlzID0gdGhpcy5kaXNhYmxlZEtleXNcbiAgICAgIC5jb25jYXQoQWNjZXNzS2V5cy5BUlJPV0xFRlQpXG4gICAgICAuY29uY2F0KEFjY2Vzc0tleXMuQVJST1dSSUdIVClcbiAgICAgIC5jb25jYXQoQWNjZXNzS2V5cy5maXJzdENhbnZhc0dyb3VwQ29kZXMpXG4gICAgICAuY29uY2F0KEFjY2Vzc0tleXMubGFzdENhbnZhc0dyb3VwQ29kZXMpXG4gICAgICAuY29uY2F0KEFjY2Vzc0tleXMuem9vbUluQ29kZXMpXG4gICAgICAuY29uY2F0KEFjY2Vzc0tleXMuem9vbU91dENvZGVzKVxuICAgICAgLmNvbmNhdChBY2Nlc3NLZXlzLnpvb21Ib21lQ29kZXMpXG4gICAgICAuY29uY2F0KEFjY2Vzc0tleXMubmV4dEhpdClcbiAgICAgIC5jb25jYXQoQWNjZXNzS2V5cy5wcmV2aW91c0hpdClcbiAgICAgIC5jb25jYXQoQWNjZXNzS2V5cy50b2dnbGVTZWFyY2hEaWFsb2dDb2RlcylcbiAgICAgIC5jb25jYXQoQWNjZXNzS2V5cy50b2dnbGVDb250ZW50c0RpYWxvZ0NvZGVzKVxuICAgICAgLmNvbmNhdChBY2Nlc3NLZXlzLnRvZ2dsZUZ1bGxzY3JlZW5Db2Rlcyk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RGlzYWJsZWRLZXlzKCkge1xuICAgIHRoaXMuZGlzYWJsZWRLZXlzID0gW107XG4gIH1cblxuICBwcml2YXRlIGlzS2V5RGlzYWJsZWQoa2V5Q29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZEtleXMoKTtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZEtleXMuaW5kZXhPZihrZXlDb2RlKSA+IC0xO1xuICB9XG59XG4iXX0=