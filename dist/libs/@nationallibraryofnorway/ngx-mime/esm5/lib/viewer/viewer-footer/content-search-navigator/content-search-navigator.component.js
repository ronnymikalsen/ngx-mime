import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CanvasService } from '../../../core/canvas-service/canvas-service';
import { IiifContentSearchService } from '../../../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../../../core/intl/viewer-intl';
import { ViewingDirection } from '../../../core/models/viewing-direction';
import { ContentSearchNavigationService } from '../../../core/navigation/content-search-navigation-service/content-search-navigation.service';
var ContentSearchNavigatorComponent = /** @class */ (function () {
    function ContentSearchNavigatorComponent(intl, changeDetectorRef, canvasService, iiifContentSearchService, contentSearchNavigationService, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.canvasService = canvasService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.contentSearchNavigationService = contentSearchNavigationService;
        this.iiifManifestService = iiifManifestService;
        this.isHitOnActiveCanvasGroup = false;
        this.isFirstCanvasGroupHit = false;
        this.isLastCanvasGroupHit = false;
        this.currentIndex = 0;
        this.invert = false;
        this.destroyed = new Subject();
    }
    ContentSearchNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.invert = manifest.viewingDirection === ViewingDirection.LTR;
            _this.changeDetectorRef.detectChanges();
        });
        this.intl.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () { return _this.changeDetectorRef.markForCheck(); });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (canvasGroupIndex) {
            _this.contentSearchNavigationService.update(canvasGroupIndex);
            _this.currentIndex = _this.contentSearchNavigationService.getCurrentIndex();
            _this.isHitOnActiveCanvasGroup = _this.contentSearchNavigationService.getHitOnActiveCanvasGroup();
            _this.isFirstCanvasGroupHit = _this.contentSearchNavigationService.getFirstHitCanvasGroup();
            _this.isLastCanvasGroupHit = _this.contentSearchNavigationService.getLastHitCanvasGroup();
            _this.changeDetectorRef.detectChanges();
        });
    };
    ContentSearchNavigatorComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    ContentSearchNavigatorComponent.prototype.clear = function () {
        this.iiifContentSearchService.destroy();
    };
    ContentSearchNavigatorComponent.prototype.goToPreviousCanvasGroupHit = function () {
        this.contentSearchNavigationService.goToPreviousCanvasGroupHit();
    };
    ContentSearchNavigatorComponent.prototype.goToNextCanvasGroupHit = function () {
        this.contentSearchNavigationService.goToNextCanvasGroupHit();
    };
    ContentSearchNavigatorComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: ChangeDetectorRef },
        { type: CanvasService },
        { type: IiifContentSearchService },
        { type: ContentSearchNavigationService },
        { type: IiifManifestService }
    ]; };
    __decorate([
        Input()
    ], ContentSearchNavigatorComponent.prototype, "searchResult", void 0);
    ContentSearchNavigatorComponent = __decorate([
        Component({
            selector: 'mime-content-search-navigator',
            template: "<mat-toolbar id=\"content-search-navigator-toolbar\" color=\"primary\">\n  <div\n    *ngIf=\"searchResult\"\n    fxLayout=\"row\"\n    fxFlex\n    fxLayoutAlign=\"space-between center\"\n  >\n    <div>\n      <button\n        id=\"footerNavigateCloseHitsButton\"\n        mat-icon-button\n        [attr.aria-label]=\"intl.closeLabel\"\n        [matTooltip]=\"intl.closeLabel\"\n        matTooltipPosition=\"above\"\n        (click)=\"clear()\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </div>\n    <div\n      fxFlex\n      class=\"current-hit-label\"\n      [ngClass]=\"{ 'not-on-page': !isHitOnActiveCanvasGroup }\"\n      fxFlex\n      [innerHTML]=\"intl.currentHitLabel(currentIndex + 1, searchResult.size())\"\n    ></div>\n    <div class=\"navigation-buttons\">\n      <ng-container *ngIf=\"invert\">\n        <button\n          id=\"footerNavigatePreviousHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousHitLabel\"\n          [matTooltip]=\"intl.previousHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstCanvasGroupHit\"\n          (click)=\"goToPreviousCanvasGroupHit()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          id=\"footerNavigateNextHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextHitLabel\"\n          [matTooltip]=\"intl.nextHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastCanvasGroupHit\"\n          (click)=\"goToNextCanvasGroupHit()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"!invert\">\n        <button\n          id=\"footerNavigateNextHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextHitLabel\"\n          [matTooltip]=\"intl.nextHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastCanvasGroupHit\"\n          (click)=\"goToNextCanvasGroupHit()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          id=\"footerNavigatePreviousHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousHitLabel\"\n          [matTooltip]=\"intl.previousHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstCanvasGroupHit\"\n          (click)=\"goToPreviousCanvasGroupHit()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      </ng-container>\n    </div>\n  </div>\n</mat-toolbar>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".current-hit-label{font-size:13px;text-align:center}.not-on-page{opacity:.6}"]
        })
    ], ContentSearchNavigatorComponent);
    return ContentSearchNavigatorComponent;
}());
export { ContentSearchNavigatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEZBQThGLENBQUM7QUFROUk7SUFTRSx5Q0FDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsd0JBQWtELEVBQ2xELDhCQUE4RCxFQUM5RCxtQkFBd0M7UUFMekMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELG1D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bXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvY2FudmFzLXNlcnZpY2UvY2FudmFzLXNlcnZpY2UnO1xuaW1wb3J0IHsgSWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9paWlmLWNvbnRlbnQtc2VhcmNoLXNlcnZpY2UvaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2ludGwvdmlld2VyLWludGwnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IFZpZXdpbmdEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQgeyBDb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL25hdmlnYXRpb24vY29udGVudC1zZWFyY2gtbmF2aWdhdGlvbi1zZXJ2aWNlL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pbWUtY29udGVudC1zZWFyY2gtbmF2aWdhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U2VhcmNoTmF2aWdhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzZWFyY2hSZXN1bHQ6IFNlYXJjaFJlc3VsdDtcbiAgcHVibGljIGlzSGl0T25BY3RpdmVDYW52YXNHcm91cCA9IGZhbHNlO1xuICBwdWJsaWMgaXNGaXJzdENhbnZhc0dyb3VwSGl0ID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xhc3RDYW52YXNHcm91cEhpdCA9IGZhbHNlO1xuICBwdWJsaWMgY3VycmVudEluZGV4ID0gMDtcbiAgaW52ZXJ0ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW50bDogTWltZVZpZXdlckludGwsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlOiBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2U6IENvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGlpaWZNYW5pZmVzdFNlcnZpY2U6IElpaWZNYW5pZmVzdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWlpZk1hbmlmZXN0U2VydmljZS5jdXJyZW50TWFuaWZlc3RcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChtYW5pZmVzdDogTWFuaWZlc3QpID0+IHtcbiAgICAgICAgdGhpcy5pbnZlcnQgPSBtYW5pZmVzdC52aWV3aW5nRGlyZWN0aW9uID09PSBWaWV3aW5nRGlyZWN0aW9uLkxUUjtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaW50bC5jaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcblxuICAgIHRoaXMuY2FudmFzU2VydmljZS5vbkNhbnZhc0dyb3VwSW5kZXhDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKGNhbnZhc0dyb3VwSW5kZXggPT4ge1xuICAgICAgICB0aGlzLmNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZS51cGRhdGUoY2FudmFzR3JvdXBJbmRleCk7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UuZ2V0Q3VycmVudEluZGV4KCk7XG4gICAgICAgIHRoaXMuaXNIaXRPbkFjdGl2ZUNhbnZhc0dyb3VwID0gdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UuZ2V0SGl0T25BY3RpdmVDYW52YXNHcm91cCgpO1xuICAgICAgICB0aGlzLmlzRmlyc3RDYW52YXNHcm91cEhpdCA9IHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdldEZpcnN0SGl0Q2FudmFzR3JvdXAoKTtcbiAgICAgICAgdGhpcy5pc0xhc3RDYW52YXNHcm91cEhpdCA9IHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdldExhc3RIaXRDYW52YXNHcm91cCgpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5kZXN0cm95KCk7XG4gIH1cblxuICBnb1RvUHJldmlvdXNDYW52YXNHcm91cEhpdCgpIHtcbiAgICB0aGlzLmNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZS5nb1RvUHJldmlvdXNDYW52YXNHcm91cEhpdCgpO1xuICB9XG5cbiAgZ29Ub05leHRDYW52YXNHcm91cEhpdCgpIHtcbiAgICB0aGlzLmNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZS5nb1RvTmV4dENhbnZhc0dyb3VwSGl0KCk7XG4gIH1cbn1cbiJdfQ==