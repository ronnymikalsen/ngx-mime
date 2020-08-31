import { __decorate } from "tslib";
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
var CanvasGroupDialogComponent = /** @class */ (function () {
    function CanvasGroupDialogComponent(dialogRef, fb, viewerService, canvasService, intl, changeDetectorRef) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.destroyed = new Subject();
        this.numberOfCanvases = this.canvasService.numberOfCanvases;
        this.createForm();
    }
    CanvasGroupDialogComponent.prototype.createForm = function () {
        this.canvasGroupControl = new FormControl('', [
            Validators.required,
            Validators.min(1),
            Validators.max(this.numberOfCanvases)
        ]);
        this.canvasGroupForm = this.fb.group({
            canvasGroupControl: this.canvasGroupControl
        });
    };
    CanvasGroupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.intl.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(function () { return _this.changeDetectorRef.markForCheck(); });
    };
    CanvasGroupDialogComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    CanvasGroupDialogComponent.prototype.onSubmit = function () {
        if (this.canvasGroupForm.valid) {
            var pageNumber = this.canvasGroupForm.get('canvasGroupControl').value - 1;
            this.viewerService.goToCanvasGroup(this.canvasService.findCanvasGroupByCanvasIndex(pageNumber), false);
            this.dialogRef.close();
        }
    };
    CanvasGroupDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: FormBuilder },
        { type: ViewerService },
        { type: CanvasService },
        { type: MimeViewerIntl },
        { type: ChangeDetectorRef }
    ]; };
    CanvasGroupDialogComponent = __decorate([
        Component({
            template: "<div fxLayout=\"column\">\n  <h1 class=\"canvas-group-dialog-title\">{{ intl.goToPageLabel }}</h1>\n  <form\n    [formGroup]=\"canvasGroupForm\"\n    (ngSubmit)=\"onSubmit()\"\n    novalidate\n    autocomplete=\"off\"\n  >\n    <mat-form-field [floatLabel]=\"'always'\">\n      <input\n        id=\"goToCanvasGroupInput\"\n        type=\"number\"\n        matInput\n        min=\"1\"\n        [placeholder]=\"intl.enterPageNumber\"\n        formControlName=\"canvasGroupControl\"\n      />\n      <mat-error\n        id=\"canvasGroupDoesNotExistsError\"\n        *ngIf=\"canvasGroupControl.errors?.max\"\n        >{{ intl.pageDoesNotExists }}</mat-error\n      >\n    </mat-form-field>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button id=\"cancelButton\" type=\"button\" mat-button matDialogClose>\n        CANCEL\n      </button>\n      <button\n        id=\"goToCanvasGroupSubmitButton\"\n        type=\"submit\"\n        mat-button\n        [disabled]=\"canvasGroupForm.pristine || canvasGroupForm.invalid\"\n      >\n        OK\n      </button>\n    </div>\n  </form>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".canvas-group-dialog-title{margin:0 0 20px;display:block}"]
        })
    ], CanvasGroupDialogComponent);
    return CanvasGroupDialogComponent;
}());
export { CanvasGroupDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY2FudmFzLWdyb3VwLWRpYWxvZy9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU8xRDtJQU1FLG9DQUNVLFNBQW1ELEVBQ25ELEVBQWUsRUFDZixhQUE0QixFQUM1QixhQUE0QixFQUM3QixJQUFvQixFQUNuQixpQkFBb0M7UUFMcEMsY0FBUyxHQUFULFNBQVMsQ0FBMEM7UUFDbkQsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSdEMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBVS9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsVUFBVSxDQUFDLFFBQVE7WUFDbkIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNuQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1NBQzVDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtZQUM5QixJQUFNLFVBQVUsR0FDZCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLEVBQzNELEtBQUssQ0FDTixDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQTNDb0IsWUFBWTtnQkFDbkIsV0FBVztnQkFDQSxhQUFhO2dCQUNiLGFBQWE7Z0JBQ3ZCLGNBQWM7Z0JBQ0EsaUJBQWlCOztJQVpuQywwQkFBMEI7UUFMdEMsU0FBUyxDQUFDO1lBQ1QsNGxDQUFtRDtZQUVuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQW1EdEM7SUFBRCxpQ0FBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1CdWlsZGVyLFxuICBWYWxpZGF0b3JzXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFZpZXdlclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3ZpZXdlci5zZXJ2aWNlJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FudmFzLWdyb3VwLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNHcm91cERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgbnVtYmVyT2ZDYW52YXNlczogbnVtYmVyO1xuICBjYW52YXNHcm91cEZvcm06IEZvcm1Hcm91cDtcbiAgY2FudmFzR3JvdXBDb250cm9sOiBGb3JtQ29udHJvbDtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2FudmFzR3JvdXBEaWFsb2dDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgdmlld2VyU2VydmljZTogVmlld2VyU2VydmljZSxcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMubnVtYmVyT2ZDYW52YXNlcyA9IHRoaXMuY2FudmFzU2VydmljZS5udW1iZXJPZkNhbnZhc2VzO1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG5cbiAgY3JlYXRlRm9ybSgpIHtcbiAgICB0aGlzLmNhbnZhc0dyb3VwQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgIFZhbGlkYXRvcnMubWluKDEpLFxuICAgICAgVmFsaWRhdG9ycy5tYXgodGhpcy5udW1iZXJPZkNhbnZhc2VzKVxuICAgIF0pO1xuICAgIHRoaXMuY2FudmFzR3JvdXBGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBjYW52YXNHcm91cENvbnRyb2w6IHRoaXMuY2FudmFzR3JvdXBDb250cm9sXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmludGwuY2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc0dyb3VwRm9ybS52YWxpZCkge1xuICAgICAgY29uc3QgcGFnZU51bWJlciA9XG4gICAgICAgIHRoaXMuY2FudmFzR3JvdXBGb3JtLmdldCgnY2FudmFzR3JvdXBDb250cm9sJykudmFsdWUgLSAxO1xuICAgICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9DYW52YXNHcm91cChcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDYW52YXNHcm91cEJ5Q2FudmFzSW5kZXgocGFnZU51bWJlciksXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==