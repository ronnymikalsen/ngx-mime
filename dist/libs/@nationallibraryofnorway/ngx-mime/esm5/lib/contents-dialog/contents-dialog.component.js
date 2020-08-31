import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
var ContentsDialogComponent = /** @class */ (function () {
    function ContentsDialogComponent(intl, mediaObserver, dialogRef, el, mimeDomHelper, changeDetectorRef, iiifManifestService, mimeResizeService) {
        var _this = this;
        this.intl = intl;
        this.mediaObserver = mediaObserver;
        this.dialogRef = dialogRef;
        this.el = el;
        this.mimeDomHelper = mimeDomHelper;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.tabHeight = {};
        this.showToc = false;
        this.selectedIndex = 0;
        this.mimeHeight = 0;
        this.destroyed = new Subject();
        mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (dimensions) {
            _this.mimeHeight = dimensions.height;
            _this.resizeTabHeight();
        });
    }
    ContentsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.manifest = manifest;
            _this.showToc = _this.manifest && _this.manifest.structures.length > 0;
            _this.changeDetectorRef.detectChanges();
        });
        this.resizeTabHeight();
    };
    ContentsDialogComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    ContentsDialogComponent.prototype.onResize = function (event) {
        this.resizeTabHeight();
    };
    ContentsDialogComponent.prototype.onCanvasChanged = function () {
        if (this.mediaObserver.isActive('lt-md')) {
            this.dialogRef.close();
        }
    };
    ContentsDialogComponent.prototype.resizeTabHeight = function () {
        var dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        var height = this.mimeHeight;
        if (this.mediaObserver.isActive('lt-md')) {
            height -= 104;
            this.tabHeight = {
                maxHeight: window.innerHeight - 128 + 'px'
            };
        }
        else {
            height -= 278;
            this.tabHeight = {
                maxHeight: height + 'px'
            };
        }
    };
    ContentsDialogComponent.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: MediaObserver },
        { type: MatDialogRef },
        { type: ElementRef },
        { type: MimeDomHelper },
        { type: ChangeDetectorRef },
        { type: IiifManifestService },
        { type: MimeResizeService }
    ]; };
    __decorate([
        HostListener('window:resize', ['$event'])
    ], ContentsDialogComponent.prototype, "onResize", null);
    ContentsDialogComponent = __decorate([
        Component({
            selector: 'mime-contents',
            template: "<div class=\"contents-container\">\n  <ng-container [ngSwitch]=\"mediaObserver.isActive('lt-md')\">\n    <ng-container *ngSwitchCase=\"true\">\n      <mat-toolbar color=\"primary\" data-test-id=\"mobile-toolbar\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <button\n            mat-icon-button\n            [aria-label]=\"intl.closeLabel\"\n            [matTooltip]=\"intl.closeLabel\"\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n          <h1 mat-dialog-title>{{ intl.contentsLabel }}</h1>\n        </div>\n      </mat-toolbar>\n    </ng-container>\n    <ng-container *ngSwitchDefault>\n      <mat-toolbar data-test-id=\"desktop-toolbar\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex>\n          <h1 mat-dialog-title>{{ intl.contentsLabel }}</h1>\n          <button\n            mat-icon-button\n            [aria-label]=\"intl.closeLabel\"\n            [matTooltip]=\"intl.closeLabel\"\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      </mat-toolbar>\n    </ng-container>\n  </ng-container>\n  <div mat-dialog-content>\n    <mat-tab-group [(selectedIndex)]=\"selectedIndex\">\n      <mat-tab [label]=\"intl.metadataLabel\">\n        <div class=\"tab-container\" [ngStyle]=\"tabHeight\">\n          <mime-metadata></mime-metadata>\n        </div>\n      </mat-tab>\n      <mat-tab *ngIf=\"showToc\" [label]=\"intl.tocLabel\">\n        <div class=\"tab-container\" [ngStyle]=\"tabHeight\">\n          <mime-toc (canvasChanged)=\"onCanvasChanged()\"></mime-toc>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".label{text-decoration:underline}::ng-deep .contents-panel{max-width:none!important}::ng-deep .contents-panel>.mat-dialog-container{padding:0!important;overflow:initial}::ng-deep .contents-container>div>div>.mat-toolbar{padding:0!important}.tab-container{overflow:auto;padding:8px 16px}.mat-dialog-content{max-height:none}"]
        })
    ], ContentsDialogComponent);
    return ContentsDialogComponent;
}());
export { ContentsDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50cy1kaWFsb2cvY29udGVudHMtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUNULE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFVcEY7SUFRRSxpQ0FDUyxJQUFvQixFQUNwQixhQUE0QixFQUMzQixTQUFnRCxFQUNoRCxFQUFjLEVBQ2QsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLG1CQUF3QyxFQUNoRCxpQkFBb0M7UUFSdEMsaUJBZ0JDO1FBZlEsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBdUM7UUFDaEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FB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LDhCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0F0RVksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYU9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLi9jb3JlL2ludGwvdmlld2VyLWludGwnO1xuaW1wb3J0IHsgTWltZURvbUhlbHBlciB9IGZyb20gJy4uL2NvcmUvbWltZS1kb20taGVscGVyJztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9taW1lLXJlc2l6ZS1zZXJ2aWNlL21pbWUtcmVzaXplLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4uL2NvcmUvbW9kZWxzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS1jb250ZW50cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50cy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50cy1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudHNEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBtYW5pZmVzdDogTWFuaWZlc3Q7XG4gIHB1YmxpYyB0YWJIZWlnaHQgPSB7fTtcbiAgcHVibGljIHNob3dUb2MgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkSW5kZXggPSAwO1xuICBwcml2YXRlIG1pbWVIZWlnaHQgPSAwO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHB1YmxpYyBtZWRpYU9ic2VydmVyOiBNZWRpYU9ic2VydmVyLFxuICAgIHByaXZhdGUgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29udGVudHNEaWFsb2dDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBtaW1lRG9tSGVscGVyOiBNaW1lRG9tSGVscGVyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZSxcbiAgICBtaW1lUmVzaXplU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2VcbiAgKSB7XG4gICAgbWltZVJlc2l6ZVNlcnZpY2Uub25SZXNpemVcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChkaW1lbnNpb25zOiBEaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIHRoaXMubWltZUhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJlc2l6ZVRhYkhlaWdodCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICAgICAgdGhpcy5zaG93VG9jID0gdGhpcy5tYW5pZmVzdCAmJiB0aGlzLm1hbmlmZXN0LnN0cnVjdHVyZXMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMucmVzaXplVGFiSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvblJlc2l6ZShldmVudDogYW55KSB7XG4gICAgdGhpcy5yZXNpemVUYWJIZWlnaHQoKTtcbiAgfVxuXG4gIG9uQ2FudmFzQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5tZWRpYU9ic2VydmVyLmlzQWN0aXZlKCdsdC1tZCcpKSB7XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplVGFiSGVpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLm1pbWVEb21IZWxwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRoaXMuZWwpO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1pbWVIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5tZWRpYU9ic2VydmVyLmlzQWN0aXZlKCdsdC1tZCcpKSB7XG4gICAgICBoZWlnaHQgLT0gMTA0O1xuICAgICAgdGhpcy50YWJIZWlnaHQgPSB7XG4gICAgICAgIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTI4ICsgJ3B4J1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVpZ2h0IC09IDI3ODtcbiAgICAgIHRoaXMudGFiSGVpZ2h0ID0ge1xuICAgICAgICBtYXhIZWlnaHQ6IGhlaWdodCArICdweCdcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iXX0=