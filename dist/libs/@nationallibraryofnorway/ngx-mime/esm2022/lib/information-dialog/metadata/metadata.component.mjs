import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { Subscription } from 'rxjs';
import { IiifManifestService } from './../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from './../../core/intl';
import * as i0 from "@angular/core";
import * as i1 from "./../../core/intl";
import * as i2 from "./../../core/iiif-manifest-service/iiif-manifest-service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.9", ngImport: i0, type: MetadataComponent, deps: [{ token: i1.MimeViewerIntl }, { token: i0.ChangeDetectorRef }, { token: i2.IiifManifestService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.9", type: MetadataComponent, selector: "mime-metadata", ngImport: i0, template: "@if (manifest) {\n  <div class=\"ngx-mime-metadata-container\">\n    @for (metadata of manifest.metadata; track metadata.label) {\n      <div class=\"metadata\">\n        <div class=\"title\">{{ metadata.label }}</div>\n        <span class=\"content\" [innerHTML]=\"metadata.value\"></span>\n      </div>\n    }\n    @if (manifest.attribution) {\n      <div class=\"title\">{{ intl.attributionLabel }}</div>\n      <span\n        class=\"content attribution\"\n        [innerHTML]=\"manifest.attribution\"\n      ></span>\n    }\n    @if (manifest.license) {\n      <div class=\"title\">{{ intl.licenseLabel }}</div>\n      <span class=\"content license\"\n        ><a [href]=\"manifest.license\" target=\"_blank\">{{\n          manifest.license\n        }}</a></span\n      >\n    }\n    @if (manifest.logo) {\n      <img aria-hidden=\"true\" class=\"content logo\" [src]=\"manifest.logo\" />\n    }\n  </div>\n}\n", styles: [".title{font-size:14px!important;font-weight:400;margin-bottom:4px}.content{display:block;font-size:12px;word-break:break-all;margin-bottom:8px}.logo{max-width:300px;max-height:64px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.9", ngImport: i0, type: MetadataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mime-metadata', changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (manifest) {\n  <div class=\"ngx-mime-metadata-container\">\n    @for (metadata of manifest.metadata; track metadata.label) {\n      <div class=\"metadata\">\n        <div class=\"title\">{{ metadata.label }}</div>\n        <span class=\"content\" [innerHTML]=\"metadata.value\"></span>\n      </div>\n    }\n    @if (manifest.attribution) {\n      <div class=\"title\">{{ intl.attributionLabel }}</div>\n      <span\n        class=\"content attribution\"\n        [innerHTML]=\"manifest.attribution\"\n      ></span>\n    }\n    @if (manifest.license) {\n      <div class=\"title\">{{ intl.licenseLabel }}</div>\n      <span class=\"content license\"\n        ><a [href]=\"manifest.license\" target=\"_blank\">{{\n          manifest.license\n        }}</a></span\n      >\n    }\n    @if (manifest.logo) {\n      <img aria-hidden=\"true\" class=\"content logo\" [src]=\"manifest.logo\" />\n    }\n  </div>\n}\n", styles: [".title{font-size:14px!important;font-weight:400;margin-bottom:4px}.content{display:block;font-size:12px;word-break:break-all;margin-bottom:8px}.logo{max-width:300px;max-height:64px}\n"] }]
        }], ctorParameters: () => [{ type: i1.MimeViewerIntl }, { type: i0.ChangeDetectorRef }, { type: i2.IiifManifestService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2luZm9ybWF0aW9uLWRpYWxvZy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvaW5mb3JtYXRpb24tZGlhbG9nL21ldGFkYXRhL21ldGFkYXRhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVNuRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQ1MsSUFBb0IsRUFDbkIsaUJBQW9DLEVBQ3BDLG1CQUF3QztRQUZ6QyxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFOM0MsYUFBUSxHQUFvQixJQUFJLENBQUM7UUFDaEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXhDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUNoRCxDQUFDLFFBQXlCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzhHQXZCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixxRENsQjlCLHE1QkE0QkE7OzJGRFZhLGlCQUFpQjtrQkFON0IsU0FBUzsrQkFDRSxlQUFlLG1CQUdSLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJaWlmTWFuaWZlc3RTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb3JlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS9paWlmLW1hbmlmZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuLy4uLy4uL2NvcmUvaW50bCc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbHMvbWFuaWZlc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLW1ldGFkYXRhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21ldGFkYXRhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWV0YWRhdGEuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgbWFuaWZlc3Q6IE1hbmlmZXN0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW50bDogTWltZVZpZXdlckludGwsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpaWlmTWFuaWZlc3RTZXJ2aWNlOiBJaWlmTWFuaWZlc3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5paWlmTWFuaWZlc3RTZXJ2aWNlLmN1cnJlbnRNYW5pZmVzdC5zdWJzY3JpYmUoXG4gICAgICAgIChtYW5pZmVzdDogTWFuaWZlc3QgfCBudWxsKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIkBpZiAobWFuaWZlc3QpIHtcbiAgPGRpdiBjbGFzcz1cIm5neC1taW1lLW1ldGFkYXRhLWNvbnRhaW5lclwiPlxuICAgIEBmb3IgKG1ldGFkYXRhIG9mIG1hbmlmZXN0Lm1ldGFkYXRhOyB0cmFjayBtZXRhZGF0YS5sYWJlbCkge1xuICAgICAgPGRpdiBjbGFzcz1cIm1ldGFkYXRhXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPnt7IG1ldGFkYXRhLmxhYmVsIH19PC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiIFtpbm5lckhUTUxdPVwibWV0YWRhdGEudmFsdWVcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICB9XG4gICAgQGlmIChtYW5pZmVzdC5hdHRyaWJ1dGlvbikge1xuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgaW50bC5hdHRyaWJ1dGlvbkxhYmVsIH19PC9kaXY+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cImNvbnRlbnQgYXR0cmlidXRpb25cIlxuICAgICAgICBbaW5uZXJIVE1MXT1cIm1hbmlmZXN0LmF0dHJpYnV0aW9uXCJcbiAgICAgID48L3NwYW4+XG4gICAgfVxuICAgIEBpZiAobWFuaWZlc3QubGljZW5zZSkge1xuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+e3sgaW50bC5saWNlbnNlTGFiZWwgfX08L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudCBsaWNlbnNlXCJcbiAgICAgICAgPjxhIFtocmVmXT1cIm1hbmlmZXN0LmxpY2Vuc2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj57e1xuICAgICAgICAgIG1hbmlmZXN0LmxpY2Vuc2VcbiAgICAgICAgfX08L2E+PC9zcGFuXG4gICAgICA+XG4gICAgfVxuICAgIEBpZiAobWFuaWZlc3QubG9nbykge1xuICAgICAgPGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImNvbnRlbnQgbG9nb1wiIFtzcmNdPVwibWFuaWZlc3QubG9nb1wiIC8+XG4gICAgfVxuICA8L2Rpdj5cbn1cbiJdfQ==