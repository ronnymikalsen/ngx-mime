import { __decorate } from "tslib";
import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MimeViewerIntl } from './../../core/intl/viewer-intl';
import { IiifManifestService } from './../../core/iiif-manifest-service/iiif-manifest-service';
let MetadataComponent = class MetadataComponent {
    constructor(intl, changeDetectorRef, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.destroyed = new Subject();
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
};
MetadataComponent.ctorParameters = () => [
    { type: MimeViewerIntl },
    { type: ChangeDetectorRef },
    { type: IiifManifestService }
];
MetadataComponent = __decorate([
    Component({
        selector: 'mime-metadata',
        template: "<div id=\"metadata-container\" class=\"metadata-container\">\n  <div *ngFor=\"let metadata of manifest?.metadata\" class=\"metadata\">\n    <div class=\"title\">{{ metadata.label }}</div>\n    <span class=\"content\" [innerHTML]=\"metadata.value\"></span>\n  </div>\n  <div *ngIf=\"manifest?.attribution\">\n    <div class=\"title\">{{ intl.attributionLabel }}</div>\n    <span\n      id=\"metadata-attribution\"\n      class=\"content attribution\"\n      [innerHTML]=\"manifest?.attribution\"\n    ></span>\n  </div>\n  <div *ngIf=\"manifest?.license\">\n    <div class=\"title\">{{ intl.licenseLabel }}</div>\n    <span id=\"metadata-license\" class=\"content license\"\n      ><a [href]=\"manifest?.license\" target=\"_blank\">{{\n        manifest?.license\n      }}</a></span\n    >\n  </div>\n  <div *ngIf=\"manifest?.logo\">\n    <span id=\"metadata-logo\"\n      ><img class=\"content logo\" [src]=\"manifest?.logo\"\n    /></span>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".title{font-size:14px!important;font-weight:400;margin-bottom:4px}.content{display:block;font-size:12px;word-break:break-all;margin-bottom:8px}.logo{max-width:300px;max-height:64px}"]
    })
], MetadataComponent);
export { MetadataComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRzLWRpYWxvZy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFTL0YsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFJNUIsWUFDUyxJQUFvQixFQUNuQixpQkFBb0MsRUFDcEMsbUJBQXdDO1FBRnpDLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUwxQyxjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUFNOUMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZTthQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7O1lBbEJnQixjQUFjO1lBQ0EsaUJBQWlCO1lBQ2YsbUJBQW1COztBQVB2QyxpQkFBaUI7SUFON0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsMjhCQUF3QztRQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLGlCQUFpQixDQXVCN0I7U0F2QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLy4uLy4uL2NvcmUvaW50bC92aWV3ZXItaW50bCc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS1tZXRhZGF0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21ldGFkYXRhLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgbWFuaWZlc3Q6IE1hbmlmZXN0O1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1hbmlmZXN0OiBNYW5pZmVzdCkgPT4ge1xuICAgICAgICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=