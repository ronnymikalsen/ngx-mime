import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CanvasService } from '../../core/canvas-service/canvas-service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../../core/intl/viewer-intl';
import { ViewerService } from '../../core/viewer-service/viewer.service';
var TocComponent = /** @class */ (function () {
    function TocComponent(intl, changeDetectorRef, iiifManifestService, viewerService, canvasService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.canvasChanged = new EventEmitter();
        this.destroyed = new Subject();
    }
    TocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.manifest = manifest;
            _this.currentCanvasGroupIndex = _this.canvasService.currentCanvasGroupIndex;
            _this.changeDetectorRef.detectChanges();
        });
        this.viewerService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (canvasGroupIndex) {
            _this.currentCanvasGroupIndex = canvasGroupIndex;
            _this.changeDetectorRef.detectChanges();
        });
    };
    TocComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    TocComponent.prototype.goToCanvas = function (event, canvasIndex) {
        event.preventDefault();
        this.viewerService.goToCanvas(canvasIndex, false);
        this.canvasChanged.emit(canvasIndex);
    };
    TocComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: ChangeDetectorRef },
        { type: IiifManifestService },
        { type: ViewerService },
        { type: CanvasService }
    ]; };
    __decorate([
        Output()
    ], TocComponent.prototype, "canvasChanged", void 0);
    TocComponent = __decorate([
        Component({
            selector: 'mime-toc',
            template: "<div id=\"toc-container\" class=\"toc-container\">\n  <div *ngFor=\"let structure of manifest?.structures\">\n    <a\n      href=\"\"\n      class=\"toc-link\"\n      [class.currentCanvasGroup]=\"\n        currentCanvasGroupIndex === structure.canvasIndex\n      \"\n      (click)=\"goToCanvas($event, structure.canvasIndex)\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"space-between center\"\n    >\n      <span class=\"label\">{{ structure.label }}</span>\n      <span class=\"canvasGroupIndex\">{{ structure.canvasIndex + 1 }}</span>\n    </a>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".toc-link{text-decoration:none;font-size:14px!important;font-weight:400;margin-bottom:8px}.currentCanvasGroup{font-weight:700}"]
        })
    ], TocComponent);
    return TocComponent;
}());
export { TocComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRzLWRpYWxvZy90YWJsZS1vZi1jb250ZW50cy90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFRekU7SUFPRSxzQkFDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLGFBQTRCLEVBQzVCLGFBQTRCO1FBSjdCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVZ0QyxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR2pELGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQVE5QyxDQUFDO0lBRUosK0JBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWU7YUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsUUFBa0I7WUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7WUFDMUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0I7YUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsZ0JBQXdCO1lBQ2xDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxnQkFBZ0IsQ0FBQztZQUNoRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLEtBQVksRUFBRSxXQUFtQjtRQUMxQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQWpDYyxjQUFjO2dCQUNBLGlCQUFpQjtnQkFDZixtQkFBbUI7Z0JBQ3pCLGFBQWE7Z0JBQ2IsYUFBYTs7SUFWdEM7UUFEQyxNQUFNLEVBQUU7dURBQ2dEO0lBRjlDLFlBQVk7UUFOeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsc2tCQUFpRDtZQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLFlBQVksQ0EwQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLi8uLi9jb3JlL2ludGwvdmlld2VyLWludGwnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS92aWV3ZXItc2VydmljZS92aWV3ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pbWUtdG9jJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLW9mLWNvbnRlbnRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVG9jQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KClcbiAgY2FudmFzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBtYW5pZmVzdDogTWFuaWZlc3Q7XG4gIHB1YmxpYyBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMudmlld2VyU2VydmljZS5vbkNhbnZhc0dyb3VwSW5kZXhDaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChjYW52YXNHcm91cEluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IGNhbnZhc0dyb3VwSW5kZXg7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdvVG9DYW52YXMoZXZlbnQ6IEV2ZW50LCBjYW52YXNJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2UuZ29Ub0NhbnZhcyhjYW52YXNJbmRleCwgZmFsc2UpO1xuICAgIHRoaXMuY2FudmFzQ2hhbmdlZC5lbWl0KGNhbnZhc0luZGV4KTtcbiAgfVxufVxuIl19