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
var CanvasGroupNavigatorComponent = /** @class */ (function () {
    function CanvasGroupNavigatorComponent(intl, changeDetectorRef, viewerService, canvasService, pageDialogService, iiifManifestService) {
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
    CanvasGroupNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.invert = manifest.viewingDirection === ViewingDirection.LTR;
            _this.changeDetectorRef.detectChanges();
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (currentCanvasGroupIndex) {
            if (_this.currentSliderCanvasGroupIndex !== -1 &&
                _this.currentSliderCanvasGroupIndex === currentCanvasGroupIndex) {
                _this.currentSliderCanvasGroupIndex = -1;
            }
            else if (_this.currentSliderCanvasGroupIndex === -1) {
                _this.currentCanvasGroupIndex = currentCanvasGroupIndex;
                _this.canvasGroupLabel = _this.canvasService.getCanvasGroupLabel(_this.currentCanvasGroupIndex);
            }
            _this.isFirstCanvasGroup = _this.isOnFirstCanvasGroup(currentCanvasGroupIndex);
            _this.isLastCanvasGroup = _this.isOnLastCanvasGroup(currentCanvasGroupIndex);
            _this.changeDetectorRef.detectChanges();
        });
        this.canvasService.onNumberOfCanvasGroupsChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (numberOfCanvasGroups) {
            _this.numberOfCanvasGroups = numberOfCanvasGroups;
            _this.numberOfCanvases = _this.canvasService.numberOfCanvases;
            _this.isFirstCanvasGroup = _this.isOnFirstCanvasGroup(_this.currentCanvasGroupIndex);
            _this.isLastCanvasGroup = _this.isOnLastCanvasGroup(_this.currentCanvasGroupIndex);
            _this.changeDetectorRef.detectChanges();
        });
    };
    CanvasGroupNavigatorComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    CanvasGroupNavigatorComponent.prototype.goToPreviousCanvasGroup = function () {
        this.viewerService.goToPreviousCanvasGroup();
    };
    CanvasGroupNavigatorComponent.prototype.goToNextCanvasGroup = function () {
        this.viewerService.goToNextCanvasGroup();
    };
    CanvasGroupNavigatorComponent.prototype.onSliderChange = function (change) {
        this.currentSliderCanvasGroupIndex = change.value;
        this.currentCanvasGroupIndex = change.value;
        this.canvasGroupLabel = this.canvasService.getCanvasGroupLabel(this.currentCanvasGroupIndex);
        this.viewerService.goToCanvasGroup(change.value, false);
        this.changeDetectorRef.detectChanges();
    };
    CanvasGroupNavigatorComponent.prototype.onSliderHotKey = function (event) {
        var accessKeys = new AccessKeys(event);
        if (accessKeys.isSliderKeys()) {
            event.stopPropagation();
        }
    };
    CanvasGroupNavigatorComponent.prototype.openCanvasGroupDialog = function () {
        this.pageDialogService.toggle();
    };
    CanvasGroupNavigatorComponent.prototype.isOnFirstCanvasGroup = function (currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === 0;
    };
    CanvasGroupNavigatorComponent.prototype.isOnLastCanvasGroup = function (currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === this.numberOfCanvasGroups - 1;
    };
    CanvasGroupNavigatorComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: ChangeDetectorRef },
        { type: ViewerService },
        { type: CanvasService },
        { type: CanvasGroupDialogService },
        { type: IiifManifestService }
    ]; };
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
    return CanvasGroupNavigatorComponent;
}());
export { CanvasGroupNavigatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLW5hdmlnYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvdmlld2VyL3ZpZXdlci1mb290ZXIvY2FudmFzLWdyb3VwLW5hdmlnYXRvci9jYW52YXMtZ3JvdXAtbmF2aWdhdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFPOUU7SUFZRSx1Q0FDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsaUJBQTJDLEVBQzNDLG1CQUF3QztRQUx6QyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFB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QTZCLENBNEd6QztJQUFELG9DQUFDO0NBQUEsQUE1R0QsSUE0R0M7U0E1R1ksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbGlkZXJDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FudmFzR3JvdXBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY2FudmFzLWdyb3VwLWRpYWxvZy9jYW52YXMtZ3JvdXAtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWlpZk1hbmlmZXN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBBY2Nlc3NLZXlzIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvQWNjZXNzS2V5cyc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IFZpZXdpbmdEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi8uLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi8uLi8uLi8uLi9jb3JlL2ludGwvdmlld2VyLWludGwnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi8uLi8uLi8uLi9jb3JlL21vZGVscy9zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IFZpZXdlclNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL2NvcmUvdmlld2VyLXNlcnZpY2Uvdmlld2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLXBhZ2UtbmF2aWdhdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbnZhcy1ncm91cC1uYXZpZ2F0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYW52YXMtZ3JvdXAtbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FudmFzR3JvdXBOYXZpZ2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBzZWFyY2hSZXN1bHQ6IFNlYXJjaFJlc3VsdDtcbiAgcHVibGljIG51bWJlck9mQ2FudmFzZXM6IG51bWJlcjtcbiAgcHVibGljIGNhbnZhc0dyb3VwTGFiZWw6IHN0cmluZztcbiAgcHVibGljIG51bWJlck9mQ2FudmFzR3JvdXBzOiBudW1iZXI7XG4gIHB1YmxpYyBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgaXNGaXJzdENhbnZhc0dyb3VwOiBib29sZWFuO1xuICBwdWJsaWMgaXNMYXN0Q2FudmFzR3JvdXA6IGJvb2xlYW47XG4gIGludmVydCA9IGZhbHNlO1xuICBwcml2YXRlIGN1cnJlbnRTbGlkZXJDYW52YXNHcm91cEluZGV4ID0gLTE7XG4gIHByaXZhdGUgZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW50bDogTWltZVZpZXdlckludGwsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB2aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2VEaWFsb2dTZXJ2aWNlOiBDYW52YXNHcm91cERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmTWFuaWZlc3RTZXJ2aWNlOiBJaWlmTWFuaWZlc3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIHRoaXMuaW52ZXJ0ID0gbWFuaWZlc3Qudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFI7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNhbnZhc1NlcnZpY2Uub25DYW52YXNHcm91cEluZGV4Q2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVyQ2FudmFzR3JvdXBJbmRleCAhPT0gLTEgJiZcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZXJDYW52YXNHcm91cEluZGV4ID09PSBjdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZXJDYW52YXNHcm91cEluZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U2xpZGVyQ2FudmFzR3JvdXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gY3VycmVudENhbnZhc0dyb3VwSW5kZXg7XG4gICAgICAgICAgdGhpcy5jYW52YXNHcm91cExhYmVsID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwTGFiZWwoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRmlyc3RDYW52YXNHcm91cCA9IHRoaXMuaXNPbkZpcnN0Q2FudmFzR3JvdXAoXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pc0xhc3RDYW52YXNHcm91cCA9IHRoaXMuaXNPbkxhc3RDYW52YXNHcm91cChcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5jYW52YXNTZXJ2aWNlLm9uTnVtYmVyT2ZDYW52YXNHcm91cHNDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChudW1iZXJPZkNhbnZhc0dyb3VwczogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZDYW52YXNHcm91cHMgPSBudW1iZXJPZkNhbnZhc0dyb3VwcztcbiAgICAgICAgdGhpcy5udW1iZXJPZkNhbnZhc2VzID0gdGhpcy5jYW52YXNTZXJ2aWNlLm51bWJlck9mQ2FudmFzZXM7XG4gICAgICAgIHRoaXMuaXNGaXJzdENhbnZhc0dyb3VwID0gdGhpcy5pc09uRmlyc3RDYW52YXNHcm91cChcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaXNMYXN0Q2FudmFzR3JvdXAgPSB0aGlzLmlzT25MYXN0Q2FudmFzR3JvdXAoXG4gICAgICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBnb1RvUHJldmlvdXNDYW52YXNHcm91cCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2UuZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoKTtcbiAgfVxuXG4gIGdvVG9OZXh0Q2FudmFzR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9OZXh0Q2FudmFzR3JvdXAoKTtcbiAgfVxuXG4gIG9uU2xpZGVyQ2hhbmdlKGNoYW5nZTogTWF0U2xpZGVyQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50U2xpZGVyQ2FudmFzR3JvdXBJbmRleCA9IGNoYW5nZS52YWx1ZTtcbiAgICB0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gY2hhbmdlLnZhbHVlO1xuICAgIHRoaXMuY2FudmFzR3JvdXBMYWJlbCA9IHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNHcm91cExhYmVsKFxuICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICk7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9DYW52YXNHcm91cChjaGFuZ2UudmFsdWUsIGZhbHNlKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG9uU2xpZGVySG90S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgYWNjZXNzS2V5cyA9IG5ldyBBY2Nlc3NLZXlzKGV2ZW50KTtcbiAgICBpZiAoYWNjZXNzS2V5cy5pc1NsaWRlcktleXMoKSkge1xuICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5DYW52YXNHcm91cERpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VEaWFsb2dTZXJ2aWNlLnRvZ2dsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09uRmlyc3RDYW52YXNHcm91cChjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBpc09uTGFzdENhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudENhbnZhc0dyb3VwSW5kZXggPT09IHRoaXMubnVtYmVyT2ZDYW52YXNHcm91cHMgLSAxO1xuICB9XG59XG4iXX0=