import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, } from '@angular/core';
import { Subscription } from 'rxjs';
import { CanvasService } from '../../../core/canvas-service/canvas-service';
import { IiifContentSearchService } from '../../../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../../../core/intl';
import { SearchResult } from '../../../core/models/search-result';
import { ViewingDirection } from '../../../core/models/viewing-direction';
import { ContentSearchNavigationService } from '../../../core/navigation/content-search-navigation-service/content-search-navigation.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/intl";
import * as i2 from "../../../core/canvas-service/canvas-service";
import * as i3 from "../../../core/iiif-content-search-service/iiif-content-search.service";
import * as i4 from "../../../core/navigation/content-search-navigation-service/content-search-navigation.service";
import * as i5 from "../../../core/iiif-manifest-service/iiif-manifest-service";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/toolbar";
import * as i8 from "@angular/material/button";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/tooltip";
export class ContentSearchNavigatorComponent {
    constructor(intl, changeDetectorRef, canvasService, iiifContentSearchService, contentSearchNavigationService, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.canvasService = canvasService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.contentSearchNavigationService = contentSearchNavigationService;
        this.iiifManifestService = iiifManifestService;
        this.isHitOnActiveCanvasGroup = false;
        this.isFirstHit = false;
        this.isLastHit = false;
        this.currentHit = 0;
        this.invert = false;
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.contentSearchNavigationService.initialize();
        this.subscriptions.add(this.contentSearchNavigationService.currentHitCounter.subscribe((n) => {
            this.currentHit = n;
            this.updateHitStatus();
            this.changeDetectorRef.detectChanges();
        }));
        this.subscriptions.add(this.iiifManifestService.currentManifest.subscribe((manifest) => {
            if (manifest) {
                this.invert = manifest.viewingDirection !== ViewingDirection.LTR;
                this.changeDetectorRef.detectChanges();
            }
        }));
        this.subscriptions.add(this.intl.changes.subscribe(() => this.changeDetectorRef.markForCheck()));
        this.subscriptions.add(this.canvasService.onCanvasGroupIndexChange.subscribe((canvasGroupIndex) => {
            this.contentSearchNavigationService.update(canvasGroupIndex);
            this.isHitOnActiveCanvasGroup =
                this.contentSearchNavigationService.getHitOnActiveCanvasGroup();
            this.changeDetectorRef.detectChanges();
        }));
    }
    ngOnChanges(changes) {
        this.updateHitStatus();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.contentSearchNavigationService.destroy();
    }
    clear() {
        this.iiifContentSearchService.destroy();
    }
    goToNextHit() {
        this.contentSearchNavigationService.goToNextHit();
    }
    goToPreviousHit() {
        this.contentSearchNavigationService.goToPreviousHit();
    }
    updateHitStatus() {
        this.isFirstHit = this.currentHit <= 0;
        this.isLastHit = this.currentHit === this.searchResult.size() - 1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.9", ngImport: i0, type: ContentSearchNavigatorComponent, deps: [{ token: i1.MimeViewerIntl }, { token: i0.ChangeDetectorRef }, { token: i2.CanvasService }, { token: i3.IiifContentSearchService }, { token: i4.ContentSearchNavigationService }, { token: i5.IiifManifestService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.9", type: ContentSearchNavigatorComponent, selector: "mime-content-search-navigator", inputs: { searchResult: "searchResult" }, usesOnChanges: true, ngImport: i0, template: "@if (searchResult) {\n  <mat-toolbar class=\"content-search-navigator-toolbar min-w-[275px]\">\n    <button\n      data-testid=\"footerNavigateCloseHitsButton\"\n      mat-icon-button\n      [attr.aria-label]=\"intl.closeLabel\"\n      [matTooltip]=\"intl.closeLabel\"\n      matTooltipPosition=\"above\"\n      (click)=\"clear()\"\n    >\n      <mat-icon>close</mat-icon>\n    </button>\n    <div\n      class=\"current-hit-label grow\"\n      [ngClass]=\"{ 'not-on-page': !isHitOnActiveCanvasGroup }\"\n      [innerHTML]=\"intl.currentHitLabel(currentHit + 1, searchResult.size())\"\n    ></div>\n    <div class=\"navigation-buttons\">\n      @if (invert) {\n        <button\n          data-testid=\"footerNavigateNextHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextHitLabel\"\n          [matTooltip]=\"intl.nextHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastHit\"\n          (click)=\"goToNextHit()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          data-testid=\"footerNavigatePreviousHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousHitLabel\"\n          [matTooltip]=\"intl.previousHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstHit\"\n          (click)=\"goToPreviousHit()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      } @else {\n        <button\n          data-testid=\"footerNavigatePreviousHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousHitLabel\"\n          [matTooltip]=\"intl.previousHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstHit\"\n          (click)=\"goToPreviousHit()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          data-testid=\"footerNavigateNextHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextHitLabel\"\n          [matTooltip]=\"intl.nextHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastHit\"\n          (click)=\"goToNextHit()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      }\n    </div>\n  </mat-toolbar>\n}\n", styles: [".current-hit-label{font-size:13px;text-align:center}.not-on-page{opacity:.7}\n"], dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i7.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i8.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i9.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i10.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.9", ngImport: i0, type: ContentSearchNavigatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mime-content-search-navigator', changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (searchResult) {\n  <mat-toolbar class=\"content-search-navigator-toolbar min-w-[275px]\">\n    <button\n      data-testid=\"footerNavigateCloseHitsButton\"\n      mat-icon-button\n      [attr.aria-label]=\"intl.closeLabel\"\n      [matTooltip]=\"intl.closeLabel\"\n      matTooltipPosition=\"above\"\n      (click)=\"clear()\"\n    >\n      <mat-icon>close</mat-icon>\n    </button>\n    <div\n      class=\"current-hit-label grow\"\n      [ngClass]=\"{ 'not-on-page': !isHitOnActiveCanvasGroup }\"\n      [innerHTML]=\"intl.currentHitLabel(currentHit + 1, searchResult.size())\"\n    ></div>\n    <div class=\"navigation-buttons\">\n      @if (invert) {\n        <button\n          data-testid=\"footerNavigateNextHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextHitLabel\"\n          [matTooltip]=\"intl.nextHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastHit\"\n          (click)=\"goToNextHit()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          data-testid=\"footerNavigatePreviousHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousHitLabel\"\n          [matTooltip]=\"intl.previousHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstHit\"\n          (click)=\"goToPreviousHit()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      } @else {\n        <button\n          data-testid=\"footerNavigatePreviousHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousHitLabel\"\n          [matTooltip]=\"intl.previousHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstHit\"\n          (click)=\"goToPreviousHit()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          data-testid=\"footerNavigateNextHitButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextHitLabel\"\n          [matTooltip]=\"intl.nextHitLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastHit\"\n          (click)=\"goToNextHit()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      }\n    </div>\n  </mat-toolbar>\n}\n", styles: [".current-hit-label{font-size:13px;text-align:center}.not-on-page{opacity:.7}\n"] }]
        }], ctorParameters: () => [{ type: i1.MimeViewerIntl }, { type: i0.ChangeDetectorRef }, { type: i2.CanvasService }, { type: i3.IiifContentSearchService }, { type: i4.ContentSearchNavigationService }, { type: i5.IiifManifestService }], propDecorators: { searchResult: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEdBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDakgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQzs7Ozs7Ozs7Ozs7O0FBUTlJLE1BQU0sT0FBTywrQkFBK0I7SUFXMUMsWUFDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsd0JBQWtELEVB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QUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEUsQ0FBQzs4R0FoRlUsK0JBQStCO2tHQUEvQiwrQkFBK0Isb0lDMUI1Qyw0dkVBb0VBOzsyRkQxQ2EsK0JBQStCO2tCQU4zQyxTQUFTOytCQUNFLCtCQUErQixtQkFHeEIsdUJBQXVCLENBQUMsTUFBTTtxUUFLdEMsWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IElpaWZDb250ZW50U2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaWlpZi1jb250ZW50LXNlYXJjaC1zZXJ2aWNlL2lpaWYtY29udGVudC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnRsJztcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvc2VhcmNoLXJlc3VsdCc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvdmlld2luZy1kaXJlY3Rpb24nO1xuaW1wb3J0IHsgQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9uYXZpZ2F0aW9uL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRpb24tc2VydmljZS9jb250ZW50LXNlYXJjaC1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLWNvbnRlbnQtc2VhcmNoLW5hdmlnYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTZWFyY2hOYXZpZ2F0b3JDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzXG57XG4gIEBJbnB1dCgpIHNlYXJjaFJlc3VsdCE6IFNlYXJjaFJlc3VsdDtcbiAgaXNIaXRPbkFjdGl2ZUNhbnZhc0dyb3VwID0gZmFsc2U7XG4gIGlzRmlyc3RIaXQgPSBmYWxzZTtcbiAgaXNMYXN0SGl0ID0gZmFsc2U7XG4gIGN1cnJlbnRIaXQgPSAwO1xuICBpbnZlcnQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmQ29udGVudFNlYXJjaFNlcnZpY2U6IElpaWZDb250ZW50U2VhcmNoU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZTogQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UuY3VycmVudEhpdENvdW50ZXIuc3Vic2NyaWJlKChuKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudEhpdCA9IG47XG4gICAgICAgIHRoaXMudXBkYXRlSGl0U3RhdHVzKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdC5zdWJzY3JpYmUoXG4gICAgICAgIChtYW5pZmVzdDogTWFuaWZlc3QgfCBudWxsKSA9PiB7XG4gICAgICAgICAgaWYgKG1hbmlmZXN0KSB7XG4gICAgICAgICAgICB0aGlzLmludmVydCA9IG1hbmlmZXN0LnZpZXdpbmdEaXJlY3Rpb24gIT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgKSxcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuaW50bC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKSxcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuY2FudmFzU2VydmljZS5vbkNhbnZhc0dyb3VwSW5kZXhDaGFuZ2Uuc3Vic2NyaWJlKFxuICAgICAgICAoY2FudmFzR3JvdXBJbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLnVwZGF0ZShjYW52YXNHcm91cEluZGV4KTtcbiAgICAgICAgICB0aGlzLmlzSGl0T25BY3RpdmVDYW52YXNHcm91cCA9XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTZWFyY2hOYXZpZ2F0aW9uU2VydmljZS5nZXRIaXRPbkFjdGl2ZUNhbnZhc0dyb3VwKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0sXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy51cGRhdGVIaXRTdGF0dXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGdvVG9OZXh0SGl0KCkge1xuICAgIHRoaXMuY29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlLmdvVG9OZXh0SGl0KCk7XG4gIH1cblxuICBnb1RvUHJldmlvdXNIaXQoKSB7XG4gICAgdGhpcy5jb250ZW50U2VhcmNoTmF2aWdhdGlvblNlcnZpY2UuZ29Ub1ByZXZpb3VzSGl0KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhpdFN0YXR1cygpIHtcbiAgICB0aGlzLmlzRmlyc3RIaXQgPSB0aGlzLmN1cnJlbnRIaXQgPD0gMDtcbiAgICB0aGlzLmlzTGFzdEhpdCA9IHRoaXMuY3VycmVudEhpdCA9PT0gdGhpcy5zZWFyY2hSZXN1bHQuc2l6ZSgpIC0gMTtcbiAgfVxufVxuIiwiQGlmIChzZWFyY2hSZXN1bHQpIHtcbiAgPG1hdC10b29sYmFyIGNsYXNzPVwiY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLXRvb2xiYXIgbWluLXctWzI3NXB4XVwiPlxuICAgIDxidXR0b25cbiAgICAgIGRhdGEtdGVzdGlkPVwiZm9vdGVyTmF2aWdhdGVDbG9zZUhpdHNCdXR0b25cIlxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImludGwuY2xvc2VMYWJlbFwiXG4gICAgICBbbWF0VG9vbHRpcF09XCJpbnRsLmNsb3NlTGFiZWxcIlxuICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIlxuICAgICAgKGNsaWNrKT1cImNsZWFyKClcIlxuICAgID5cbiAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjdXJyZW50LWhpdC1sYWJlbCBncm93XCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ25vdC1vbi1wYWdlJzogIWlzSGl0T25BY3RpdmVDYW52YXNHcm91cCB9XCJcbiAgICAgIFtpbm5lckhUTUxdPVwiaW50bC5jdXJyZW50SGl0TGFiZWwoY3VycmVudEhpdCArIDEsIHNlYXJjaFJlc3VsdC5zaXplKCkpXCJcbiAgICA+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tYnV0dG9uc1wiPlxuICAgICAgQGlmIChpbnZlcnQpIHtcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZm9vdGVyTmF2aWdhdGVOZXh0SGl0QnV0dG9uXCJcbiAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImludGwubmV4dEhpdExhYmVsXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcF09XCJpbnRsLm5leHRIaXRMYWJlbFwiXG4gICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0xhc3RIaXRcIlxuICAgICAgICAgIChjbGljayk9XCJnb1RvTmV4dEhpdCgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtYXQtaWNvbj5uYXZpZ2F0ZV9iZWZvcmU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZm9vdGVyTmF2aWdhdGVQcmV2aW91c0hpdEJ1dHRvblwiXG4gICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpbnRsLnByZXZpb3VzSGl0TGFiZWxcIlxuICAgICAgICAgIFttYXRUb29sdGlwXT1cImludGwucHJldmlvdXNIaXRMYWJlbFwiXG4gICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYWJvdmVcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0ZpcnN0SGl0XCJcbiAgICAgICAgICAoY2xpY2spPVwiZ29Ub1ByZXZpb3VzSGl0KClcIlxuICAgICAgICA+XG4gICAgICAgICAgPG1hdC1pY29uPm5hdmlnYXRlX25leHQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmb290ZXJOYXZpZ2F0ZVByZXZpb3VzSGl0QnV0dG9uXCJcbiAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImludGwucHJldmlvdXNIaXRMYWJlbFwiXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiaW50bC5wcmV2aW91c0hpdExhYmVsXCJcbiAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJhYm92ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImlzRmlyc3RIaXRcIlxuICAgICAgICAgIChjbGljayk9XCJnb1RvUHJldmlvdXNIaXQoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWljb24+bmF2aWdhdGVfYmVmb3JlPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvb3Rlck5hdmlnYXRlTmV4dEhpdEJ1dHRvblwiXG4gICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpbnRsLm5leHRIaXRMYWJlbFwiXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiaW50bC5uZXh0SGl0TGFiZWxcIlxuICAgICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImFib3ZlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNMYXN0SGl0XCJcbiAgICAgICAgICAoY2xpY2spPVwiZ29Ub05leHRIaXQoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWljb24+bmF2aWdhdGVfbmV4dDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L21hdC10b29sYmFyPlxufVxuIl19