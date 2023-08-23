import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { Subscription } from 'rxjs';
import { IiifManifestService } from './../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from './../../core/intl';
import * as i0 from "@angular/core";
import * as i1 from "./../../core/intl";
import * as i2 from "./../../core/iiif-manifest-service/iiif-manifest-service";
import * as i3 from "@angular/common";
export class MetadataComponent {
    constructor(intl, changeDetectorRef, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.manifest = null;
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.subscriptions.add(this.iiifManifestService.currentManifest.subscribe((manifest) => {
            this.manifest = manifest;
            this.changeDetectorRef.markForCheck();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
MetadataComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MetadataComponent, deps: [{ token: i1.MimeViewerIntl }, { token: i0.ChangeDetectorRef }, { token: i2.IiifManifestService }], target: i0.ɵɵFactoryTarget.Component });
MetadataComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MetadataComponent, selector: "mime-metadata", ngImport: i0, template: "<div *ngIf=\"manifest\" class=\"ngx-mime-metadata-container\">\n  <div *ngFor=\"let metadata of manifest.metadata\" class=\"metadata\">\n    <div class=\"title\">{{ metadata.label }}</div>\n    <span class=\"content\" [innerHTML]=\"metadata.value\"></span>\n  </div>\n  <div *ngIf=\"manifest.attribution\">\n    <div class=\"title\">{{ intl.attributionLabel }}</div>\n    <span class=\"content attribution\" [innerHTML]=\"manifest.attribution\"></span>\n  </div>\n  <div *ngIf=\"manifest.license\">\n    <div class=\"title\">{{ intl.licenseLabel }}</div>\n    <span class=\"content license\"\n      ><a [href]=\"manifest.license\" target=\"_blank\">{{\n        manifest.license\n      }}</a></span\n    >\n  </div>\n  <div *ngIf=\"manifest.logo\" aria-hidden=\"true\">\n    <span><img class=\"content logo\" [src]=\"manifest.logo\" /></span>\n  </div>\n</div>\n", styles: [".title{font-size:14px!important;font-weight:400;margin-bottom:4px}.content{display:block;font-size:12px;word-break:break-all;margin-bottom:8px}.logo{max-width:300px;max-height:64px}\n"], dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MetadataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mime-metadata', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngIf=\"manifest\" class=\"ngx-mime-metadata-container\">\n  <div *ngFor=\"let metadata of manifest.metadata\" class=\"metadata\">\n    <div class=\"title\">{{ metadata.label }}</div>\n    <span class=\"content\" [innerHTML]=\"metadata.value\"></span>\n  </div>\n  <div *ngIf=\"manifest.attribution\">\n    <div class=\"title\">{{ intl.attributionLabel }}</div>\n    <span class=\"content attribution\" [innerHTML]=\"manifest.attribution\"></span>\n  </div>\n  <div *ngIf=\"manifest.license\">\n    <div class=\"title\">{{ intl.licenseLabel }}</div>\n    <span class=\"content license\"\n      ><a [href]=\"manifest.license\" target=\"_blank\">{{\n        manifest.license\n      }}</a></span\n    >\n  </div>\n  <div *ngIf=\"manifest.logo\" aria-hidden=\"true\">\n    <span><img class=\"content logo\" [src]=\"manifest.logo\" /></span>\n  </div>\n</div>\n", styles: [".title{font-size:14px!important;font-weight:400;margin-bottom:4px}.content{display:block;font-size:12px;word-break:break-all;margin-bottom:8px}.logo{max-width:300px;max-height:64px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MimeViewerIntl }, { type: i0.ChangeDetectorRef }, { type: i2.IiifManifestService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2luZm9ybWF0aW9uLWRpYWxvZy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvaW5mb3JtYXRpb24tZGlhbG9nL21ldGFkYXRhL21ldGFkYXRhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFTbkQsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUNTLElBQW9CLEVBQ25CLGlCQUFvQyxFQUNwQyxtQkFBd0M7UUFGekMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTjNDLGFBQVEsR0FBb0IsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU14QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDaEQsQ0FBQyxRQUF5QixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7OEdBdkJVLGlCQUFpQjtrR0FBakIsaUJBQWlCLHFEQ2xCOUIsKzFCQXFCQTsyRkRIYSxpQkFBaUI7a0JBTjdCLFNBQVM7K0JBQ0UsZUFBZSxtQkFHUix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSWlpZk1hbmlmZXN0U2VydmljZSB9IGZyb20gJy4vLi4vLi4vY29yZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi8uLi8uLi9jb3JlL2ludGwnO1xuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS1tZXRhZGF0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZXRhZGF0YS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21ldGFkYXRhLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIG1hbmlmZXN0OiBNYW5pZmVzdCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgaWlpZk1hbmlmZXN0U2VydmljZTogSWlpZk1hbmlmZXN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuaWlpZk1hbmlmZXN0U2VydmljZS5jdXJyZW50TWFuaWZlc3Quc3Vic2NyaWJlKFxuICAgICAgICAobWFuaWZlc3Q6IE1hbmlmZXN0IHwgbnVsbCkgPT4ge1xuICAgICAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwibWFuaWZlc3RcIiBjbGFzcz1cIm5neC1taW1lLW1ldGFkYXRhLWNvbnRhaW5lclwiPlxuICA8ZGl2ICpuZ0Zvcj1cImxldCBtZXRhZGF0YSBvZiBtYW5pZmVzdC5tZXRhZGF0YVwiIGNsYXNzPVwibWV0YWRhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBtZXRhZGF0YS5sYWJlbCB9fTwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiIFtpbm5lckhUTUxdPVwibWV0YWRhdGEudmFsdWVcIj48L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwibWFuaWZlc3QuYXR0cmlidXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBpbnRsLmF0dHJpYnV0aW9uTGFiZWwgfX08L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQgYXR0cmlidXRpb25cIiBbaW5uZXJIVE1MXT1cIm1hbmlmZXN0LmF0dHJpYnV0aW9uXCI+PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm1hbmlmZXN0LmxpY2Vuc2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBpbnRsLmxpY2Vuc2VMYWJlbCB9fTwvZGl2PlxuICAgIDxzcGFuIGNsYXNzPVwiY29udGVudCBsaWNlbnNlXCJcbiAgICAgID48YSBbaHJlZl09XCJtYW5pZmVzdC5saWNlbnNlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3tcbiAgICAgICAgbWFuaWZlc3QubGljZW5zZVxuICAgICAgfX08L2E+PC9zcGFuXG4gICAgPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIm1hbmlmZXN0LmxvZ29cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICA8c3Bhbj48aW1nIGNsYXNzPVwiY29udGVudCBsb2dvXCIgW3NyY109XCJtYW5pZmVzdC5sb2dvXCIgLz48L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=