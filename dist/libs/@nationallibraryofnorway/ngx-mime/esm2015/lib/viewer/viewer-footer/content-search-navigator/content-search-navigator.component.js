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
let ContentSearchNavigatorComponent = class ContentSearchNavigatorComponent {
    constructor(intl, changeDetectorRef, canvasService, iiifContentSearchService, contentSearchNavigationService, iiifManifestService) {
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
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe((manifest) => {
            this.invert = manifest.viewingDirection === ViewingDirection.LTR;
            this.changeDetectorRef.detectChanges();
        });
        this.intl.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => this.changeDetectorRef.markForCheck());
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(canvasGroupIndex => {
            this.contentSearchNavigationService.update(canvasGroupIndex);
            this.currentIndex = this.contentSearchNavigationService.getCurrentIndex();
            this.isHitOnActiveCanvasGroup = this.contentSearchNavigationService.getHitOnActiveCanvasGroup();
            this.isFirstCanvasGroupHit = this.contentSearchNavigationService.getFirstHitCanvasGroup();
            this.isLastCanvasGroupHit = this.contentSearchNavigationService.getLastHitCanvasGroup();
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    clear() {
        this.iiifContentSearchService.destroy();
    }
    goToPreviousCanvasGroupHit() {
        this.contentSearchNavigationService.goToPreviousCanvasGroupHit();
    }
    goToNextCanvasGroupHit() {
        this.contentSearchNavigationService.goToNextCanvasGroupHit();
    }
};
ContentSearchNavigatorComponent.ctorParameters = () => [
    { type: MimeViewerIntl },
    { type: ChangeDetectorRef },
    { type: CanvasService },
    { type: IiifContentSearchService },
    { type: ContentSearchNavigationService },
    { type: IiifManifestService }
];
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
export { ContentSearchNavigatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sOEZBQThGLENBQUM7QUFROUksSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFTMUMsWUFDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsd0JBQWtELEVBQ2xELDhCQUE4RCxFQUM5RCxtQkFBd0M7UUFMekMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw2QkFB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U3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IElpaWZDb250ZW50U2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaWlpZi1jb250ZW50LXNlYXJjaC1zZXJ2aWNlL2lpaWYtY29udGVudC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvc2VhcmNoLXJlc3VsdCc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvdmlld2luZy1kaXJlY3Rpb24nO1xuaW1wb3J0IHsgQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uYXZpZ2F0aW9uL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRpb24tc2VydmljZS9jb250ZW50LXNlYXJjaC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLWNvbnRlbnQtc2VhcmNoLW5hdmlnYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFNlYXJjaE5hdmlnYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG4gIHB1YmxpYyBpc0hpdE9uQWN0aXZlQ2FudmFzR3JvdXAgPSBmYWxzZTtcbiAgcHVibGljIGlzRmlyc3RDYW52YXNHcm91cEhpdCA9IGZhbHNlO1xuICBwdWJsaWMgaXNMYXN0Q2FudmFzR3JvdXBIaXQgPSBmYWxzZTtcbiAgcHVibGljIGN1cnJlbnRJbmRleCA9IDA7XG4gIGludmVydCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcbiAgICBwcml2YXRlIGlpaWZDb250ZW50U2VhcmNoU2VydmljZTogSWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlOiBDb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmTWFuaWZlc3RTZXJ2aWNlOiBJaWlmTWFuaWZlc3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIHRoaXMuaW52ZXJ0ID0gbWFuaWZlc3Qudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFI7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmludGwuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG5cbiAgICB0aGlzLmNhbnZhc1NlcnZpY2Uub25DYW52YXNHcm91cEluZGV4Q2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZShjYW52YXNHcm91cEluZGV4ID0+IHtcbiAgICAgICAgdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UudXBkYXRlKGNhbnZhc0dyb3VwSW5kZXgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdldEN1cnJlbnRJbmRleCgpO1xuICAgICAgICB0aGlzLmlzSGl0T25BY3RpdmVDYW52YXNHcm91cCA9IHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdldEhpdE9uQWN0aXZlQ2FudmFzR3JvdXAoKTtcbiAgICAgICAgdGhpcy5pc0ZpcnN0Q2FudmFzR3JvdXBIaXQgPSB0aGlzLmNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZS5nZXRGaXJzdEhpdENhbnZhc0dyb3VwKCk7XG4gICAgICAgIHRoaXMuaXNMYXN0Q2FudmFzR3JvdXBIaXQgPSB0aGlzLmNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZS5nZXRMYXN0SGl0Q2FudmFzR3JvdXAoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2UuZGVzdHJveSgpO1xuICB9XG5cbiAgZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXBIaXQoKSB7XG4gICAgdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UuZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXBIaXQoKTtcbiAgfVxuXG4gIGdvVG9OZXh0Q2FudmFzR3JvdXBIaXQoKSB7XG4gICAgdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UuZ29Ub05leHRDYW52YXNHcm91cEhpdCgpO1xuICB9XG59XG4iXX0=