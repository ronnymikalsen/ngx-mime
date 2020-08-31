import { __decorate } from "tslib";
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CanvasGroupDialogService } from '../../../canvas-group-dialog/canvas-group-dialog.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { AccessKeys } from '../../../core/models/AccessKeys';
import { ViewingDirection } from '../../../core/models/viewing-direction';
import { CanvasService } from './../../../core/canvas-service/canvas-service';
import { MimeViewerIntl } from './../../../core/intl/viewer-intl';
import { ViewerService } from './../../../core/viewer-service/viewer.service';
let CanvasGroupNavigatorComponent = class CanvasGroupNavigatorComponent {
    constructor(intl, changeDetectorRef, viewerService, canvasService, pageDialogService, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.pageDialogService = pageDialogService;
        this.iiifManifestService = iiifManifestService;
        this.invert = false;
        this.currentSliderCanvasGroupIndex = -1;
        this.destroyed = new Subject();
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe((manifest) => {
            this.invert = manifest.viewingDirection === ViewingDirection.LTR;
            this.changeDetectorRef.detectChanges();
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((currentCanvasGroupIndex) => {
            if (this.currentSliderCanvasGroupIndex !== -1 &&
                this.currentSliderCanvasGroupIndex === currentCanvasGroupIndex) {
                this.currentSliderCanvasGroupIndex = -1;
            }
            else if (this.currentSliderCanvasGroupIndex === -1) {
                this.currentCanvasGroupIndex = currentCanvasGroupIndex;
                this.canvasGroupLabel = this.canvasService.getCanvasGroupLabel(this.currentCanvasGroupIndex);
            }
            this.isFirstCanvasGroup = this.isOnFirstCanvasGroup(currentCanvasGroupIndex);
            this.isLastCanvasGroup = this.isOnLastCanvasGroup(currentCanvasGroupIndex);
            this.changeDetectorRef.detectChanges();
        });
        this.canvasService.onNumberOfCanvasGroupsChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((numberOfCanvasGroups) => {
            this.numberOfCanvasGroups = numberOfCanvasGroups;
            this.numberOfCanvases = this.canvasService.numberOfCanvases;
            this.isFirstCanvasGroup = this.isOnFirstCanvasGroup(this.currentCanvasGroupIndex);
            this.isLastCanvasGroup = this.isOnLastCanvasGroup(this.currentCanvasGroupIndex);
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    goToPreviousCanvasGroup() {
        this.viewerService.goToPreviousCanvasGroup();
    }
    goToNextCanvasGroup() {
        this.viewerService.goToNextCanvasGroup();
    }
    onSliderChange(change) {
        this.currentSliderCanvasGroupIndex = change.value;
        this.currentCanvasGroupIndex = change.value;
        this.canvasGroupLabel = this.canvasService.getCanvasGroupLabel(this.currentCanvasGroupIndex);
        this.viewerService.goToCanvasGroup(change.value, false);
        this.changeDetectorRef.detectChanges();
    }
    onSliderHotKey(event) {
        const accessKeys = new AccessKeys(event);
        if (accessKeys.isSliderKeys()) {
            event.stopPropagation();
        }
    }
    openCanvasGroupDialog() {
        this.pageDialogService.toggle();
    }
    isOnFirstCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === 0;
    }
    isOnLastCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === this.numberOfCanvasGroups - 1;
    }
};
CanvasGroupNavigatorComponent.ctorParameters = () => [
    { type: MimeViewerIntl },
    { type: ChangeDetectorRef },
    { type: ViewerService },
    { type: CanvasService },
    { type: CanvasGroupDialogService },
    { type: IiifManifestService }
];
__decorate([
    Input()
], CanvasGroupNavigatorComponent.prototype, "searchResult", void 0);
CanvasGroupNavigatorComponent = __decorate([
    Component({
        selector: 'mime-page-navigator',
        template: "<mat-toolbar>\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\n    <div fxFlex>\n      <mat-slider\n        id=\"navigationSlider\"\n        class=\"navigation-slider\"\n        [invert]=\"!invert\"\n        [max]=\"numberOfCanvasGroups - 1\"\n        [value]=\"currentCanvasGroupIndex\"\n        [attr.aria-label]=\"intl.currentPageLabel\"\n        (input)=\"onSliderChange($event)\"\n        (keyup)=\"onSliderHotKey($event)\"\n        fxFlex\n      ></mat-slider>\n    </div>\n    <button\n      mat-button\n      id=\"goToCanvasGroupButton\"\n      class=\"canvasGroups\"\n      (click)=\"openCanvasGroupDialog()\"\n    >\n      <div fxLayout=\"row\" fxLayoutGap=\"1px\">\n        <span id=\"currentCanvasGroupLabel\">{{ canvasGroupLabel }}</span\n        ><span>/</span\n        ><span id=\"numOfCanvasGroups\">{{ numberOfCanvases }}</span>\n      </div>\n    </button>\n    <div class=\"navigation-buttons\">\n      <ng-container *ngIf=\"invert\">\n        <button\n          id=\"footerNavigateBeforeButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousPageLabel\"\n          [matTooltip]=\"intl.previousPageLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstCanvasGroup\"\n          (click)=\"goToPreviousCanvasGroup()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          id=\"footerNavigateNextButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextPageLabel\"\n          [matTooltip]=\"intl.nextPageLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastCanvasGroup\"\n          (click)=\"goToNextCanvasGroup()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      </ng-container>\n      <ng-container *ngIf=\"!invert\">\n        <button\n          id=\"footerNavigateNextButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.nextPageLabel\"\n          [matTooltip]=\"intl.nextPageLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isLastCanvasGroup\"\n          (click)=\"goToNextCanvasGroup()\"\n        >\n          <mat-icon>navigate_before</mat-icon>\n        </button>\n        <button\n          id=\"footerNavigateBeforeButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.previousPageLabel\"\n          [matTooltip]=\"intl.previousPageLabel\"\n          matTooltipPosition=\"above\"\n          [disabled]=\"isFirstCanvasGroup\"\n          (click)=\"goToPreviousCanvasGroup()\"\n        >\n          <mat-icon>navigate_next</mat-icon>\n        </button>\n      </ng-container>\n    </div>\n  </div>\n</mat-toolbar>\n",
        styles: [".canvasGroups{font-size:13px;text-align:center;cursor:pointer}.navigation-slider{width:100%}"]
    })
], CanvasGroupNavigatorComponent);
export { CanvasGroupNavigatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvdmlld2VyL3ZpZXdlci1mb290ZXIvY2FudmFzLWdyb3VwLW5hdmlnYXRvci9jYW52YXMtZ3JvdXAtbmF2aWdhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFPOUUsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFZeEMsWUFDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsaUJBQTJDLEVBQzNDLG1CQUF3QztRQUx6QyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIs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NkIsQ0E0R3pDO1NBNUdZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2xpZGVyQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhbnZhc0dyb3VwRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NhbnZhcy1ncm91cC1kaWFsb2cvY2FudmFzLWdyb3VwLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjZXNzS2V5cyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL0FjY2Vzc0tleXMnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvdmlld2luZy1kaXJlY3Rpb24nO1xuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vY29yZS9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lVmlld2VySW50bCB9IGZyb20gJy4vLi4vLi4vLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4vLi4vLi4vLi4vY29yZS9tb2RlbHMvc2VhcmNoLXJlc3VsdCc7XG5pbXBvcnQgeyBWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3ZpZXdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS1wYWdlLW5hdmlnYXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW52YXMtZ3JvdXAtbmF2aWdhdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FudmFzLWdyb3VwLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbnZhc0dyb3VwTmF2aWdhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG4gIHB1YmxpYyBudW1iZXJPZkNhbnZhc2VzOiBudW1iZXI7XG4gIHB1YmxpYyBjYW52YXNHcm91cExhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBudW1iZXJPZkNhbnZhc0dyb3VwczogbnVtYmVyO1xuICBwdWJsaWMgY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGlzRmlyc3RDYW52YXNHcm91cDogYm9vbGVhbjtcbiAgcHVibGljIGlzTGFzdENhbnZhc0dyb3VwOiBib29sZWFuO1xuICBpbnZlcnQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjdXJyZW50U2xpZGVyQ2FudmFzR3JvdXBJbmRleCA9IC0xO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSxcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlRGlhbG9nU2VydmljZTogQ2FudmFzR3JvdXBEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1hbmlmZXN0OiBNYW5pZmVzdCkgPT4ge1xuICAgICAgICB0aGlzLmludmVydCA9IG1hbmlmZXN0LnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jYW52YXNTZXJ2aWNlLm9uQ2FudmFzR3JvdXBJbmRleENoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlckNhbnZhc0dyb3VwSW5kZXggIT09IC0xICYmXG4gICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVyQ2FudmFzR3JvdXBJbmRleCA9PT0gY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVyQ2FudmFzR3JvdXBJbmRleCA9IC0xO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFNsaWRlckNhbnZhc0dyb3VwSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IGN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICAgICAgICAgIHRoaXMuY2FudmFzR3JvdXBMYWJlbCA9IHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNHcm91cExhYmVsKFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZpcnN0Q2FudmFzR3JvdXAgPSB0aGlzLmlzT25GaXJzdENhbnZhc0dyb3VwKFxuICAgICAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaXNMYXN0Q2FudmFzR3JvdXAgPSB0aGlzLmlzT25MYXN0Q2FudmFzR3JvdXAoXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuY2FudmFzU2VydmljZS5vbk51bWJlck9mQ2FudmFzR3JvdXBzQ2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobnVtYmVyT2ZDYW52YXNHcm91cHM6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLm51bWJlck9mQ2FudmFzR3JvdXBzID0gbnVtYmVyT2ZDYW52YXNHcm91cHM7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZDYW52YXNlcyA9IHRoaXMuY2FudmFzU2VydmljZS5udW1iZXJPZkNhbnZhc2VzO1xuICAgICAgICB0aGlzLmlzRmlyc3RDYW52YXNHcm91cCA9IHRoaXMuaXNPbkZpcnN0Q2FudmFzR3JvdXAoXG4gICAgICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmlzTGFzdENhbnZhc0dyb3VwID0gdGhpcy5pc09uTGFzdENhbnZhc0dyb3VwKFxuICAgICAgICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKCk7XG4gIH1cblxuICBnb1RvTmV4dENhbnZhc0dyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvTmV4dENhbnZhc0dyb3VwKCk7XG4gIH1cblxuICBvblNsaWRlckNoYW5nZShjaGFuZ2U6IE1hdFNsaWRlckNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFNsaWRlckNhbnZhc0dyb3VwSW5kZXggPSBjaGFuZ2UudmFsdWU7XG4gICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IGNoYW5nZS52YWx1ZTtcbiAgICB0aGlzLmNhbnZhc0dyb3VwTGFiZWwgPSB0aGlzLmNhbnZhc1NlcnZpY2UuZ2V0Q2FudmFzR3JvdXBMYWJlbChcbiAgICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICApO1xuICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvQ2FudmFzR3JvdXAoY2hhbmdlLnZhbHVlLCBmYWxzZSk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBvblNsaWRlckhvdEtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGFjY2Vzc0tleXMgPSBuZXcgQWNjZXNzS2V5cyhldmVudCk7XG4gICAgaWYgKGFjY2Vzc0tleXMuaXNTbGlkZXJLZXlzKCkpIHtcbiAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvcGVuQ2FudmFzR3JvdXBEaWFsb2coKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlRGlhbG9nU2VydmljZS50b2dnbGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNPbkZpcnN0Q2FudmFzR3JvdXAoY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9PT0gMDtcbiAgfVxuXG4gIHByaXZhdGUgaXNPbkxhc3RDYW52YXNHcm91cChjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID09PSB0aGlzLm51bWJlck9mQ2FudmFzR3JvdXBzIC0gMTtcbiAgfVxufVxuIl19