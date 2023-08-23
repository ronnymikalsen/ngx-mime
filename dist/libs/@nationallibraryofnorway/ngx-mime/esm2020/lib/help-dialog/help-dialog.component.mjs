import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MimeViewerIntl } from '../core/intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/intl";
import * as i2 from "../core/mime-resize-service/mime-resize.service";
import * as i3 from "@angular/cdk/layout";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/toolbar";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/dialog";
export class HelpDialogComponent {
    constructor(intl, cdr, mimeResizeService, breakpointObserver) {
        this.intl = intl;
        this.cdr = cdr;
        this.mimeResizeService = mimeResizeService;
        this.breakpointObserver = breakpointObserver;
        this.tabHeight = {};
        this.isHandsetOrTabletInPortrait = false;
        this.mimeHeight = 0;
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.subscriptions.add(this.breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
            .subscribe((value) => (this.isHandsetOrTabletInPortrait = value.matches)));
        this.subscriptions.add(this.mimeResizeService.onResize.subscribe((dimensions) => {
            this.mimeHeight = dimensions.height;
            this.resizeTabHeight();
        }));
        this.resizeTabHeight();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    resizeTabHeight() {
        let height = this.mimeHeight;
        if (this.isHandsetOrTabletInPortrait) {
            this.tabHeight = {
                maxHeight: window.innerHeight - 128 + 'px',
            };
        }
        else {
            height -= 272;
            this.tabHeight = {
                maxHeight: height + 'px',
            };
        }
        this.cdr.detectChanges();
    }
}
HelpDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HelpDialogComponent, deps: [{ token: i1.MimeViewerIntl }, { token: i0.ChangeDetectorRef }, { token: i2.MimeResizeService }, { token: i3.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Component });
HelpDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: HelpDialogComponent, selector: "mime-help", ngImport: i0, template: "<div class=\"help-container\">\n  <ng-container [ngSwitch]=\"isHandsetOrTabletInPortrait\">\n    <mat-toolbar *ngSwitchCase=\"true\" color=\"primary\">\n      <button\n        mat-icon-button\n        [aria-label]=\"intl.helpCloseAriaLabel\"\n        [matTooltip]=\"intl.closeLabel\"\n        [matDialogClose]=\"true\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n      <h1 mat-dialog-title>{{ intl.help.helpLabel }}</h1>\n    </mat-toolbar>\n    <mat-toolbar *ngSwitchDefault class=\"justify-between\">\n      <h1 class=\"heading-desktop\" mat-dialog-title>{{\n        intl.help.helpLabel\n      }}</h1>\n      <button\n        mat-icon-button\n        [aria-label]=\"intl.helpCloseAriaLabel\"\n        [matTooltip]=\"intl.closeLabel\"\n        [matDialogClose]=\"true\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-toolbar>\n  </ng-container>\n  <mat-dialog-content [ngStyle]=\"tabHeight\" class=\"help-content\" tabindex=\"0\">\n    <p [innerHTML]=\"intl.help.line1\"></p>\n    <p [innerHTML]=\"intl.help.line2\"></p>\n    <p [innerHTML]=\"intl.help.line3\"></p>\n    <p [innerHTML]=\"intl.help.line4\"></p>\n    <p [innerHTML]=\"intl.help.line5\"></p>\n    <p [innerHTML]=\"intl.help.line6\"></p>\n    <p [innerHTML]=\"intl.help.line12\"></p>\n    <p [innerHTML]=\"intl.help.line7\"></p>\n    <p [innerHTML]=\"intl.help.line8\"></p>\n    <p [innerHTML]=\"intl.help.line9\"></p>\n    <p [innerHTML]=\"intl.help.line10\"></p>\n    <p [innerHTML]=\"intl.help.line11\"></p>\n  </mat-dialog-content>\n</div>\n", styles: [".mat-mdc-dialog-title{color:inherit;padding:0 2px 16px}.help-container{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.help-content{padding:16px;overflow:auto}::ng-deep .help-panel>.mat-mdc-dialog-container{padding:0!important;overflow:initial}\n"], dependencies: [{ kind: "directive", type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i5.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "component", type: i6.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i7.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i8.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i9.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i9.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i9.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: HelpDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mime-help', template: "<div class=\"help-container\">\n  <ng-container [ngSwitch]=\"isHandsetOrTabletInPortrait\">\n    <mat-toolbar *ngSwitchCase=\"true\" color=\"primary\">\n      <button\n        mat-icon-button\n        [aria-label]=\"intl.helpCloseAriaLabel\"\n        [matTooltip]=\"intl.closeLabel\"\n        [matDialogClose]=\"true\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n      <h1 mat-dialog-title>{{ intl.help.helpLabel }}</h1>\n    </mat-toolbar>\n    <mat-toolbar *ngSwitchDefault class=\"justify-between\">\n      <h1 class=\"heading-desktop\" mat-dialog-title>{{\n        intl.help.helpLabel\n      }}</h1>\n      <button\n        mat-icon-button\n        [aria-label]=\"intl.helpCloseAriaLabel\"\n        [matTooltip]=\"intl.closeLabel\"\n        [matDialogClose]=\"true\"\n      >\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-toolbar>\n  </ng-container>\n  <mat-dialog-content [ngStyle]=\"tabHeight\" class=\"help-content\" tabindex=\"0\">\n    <p [innerHTML]=\"intl.help.line1\"></p>\n    <p [innerHTML]=\"intl.help.line2\"></p>\n    <p [innerHTML]=\"intl.help.line3\"></p>\n    <p [innerHTML]=\"intl.help.line4\"></p>\n    <p [innerHTML]=\"intl.help.line5\"></p>\n    <p [innerHTML]=\"intl.help.line6\"></p>\n    <p [innerHTML]=\"intl.help.line12\"></p>\n    <p [innerHTML]=\"intl.help.line7\"></p>\n    <p [innerHTML]=\"intl.help.line8\"></p>\n    <p [innerHTML]=\"intl.help.line9\"></p>\n    <p [innerHTML]=\"intl.help.line10\"></p>\n    <p [innerHTML]=\"intl.help.line11\"></p>\n  </mat-dialog-content>\n</div>\n", styles: [".mat-mdc-dialog-title{color:inherit;padding:0 2px 16px}.help-container{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.help-content{padding:16px;overflow:auto}::ng-deep .help-panel>.mat-mdc-dialog-container{padding:0!important;overflow:initial}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MimeViewerIntl }, { type: i0.ChangeDetectorRef }, { type: i2.MimeResizeService }, { type: i3.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9oZWxwLWRpYWxvZy9oZWxwLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsa0JBQWtCLEVBRWxCLFdBQVcsR0FDWixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7Ozs7Ozs7Ozs7QUFRcEYsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixZQUNTLElBQW9CLEVBQ25CLEdBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxrQkFBc0M7UUFIdkMsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVHpDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDdEIsZ0NBQTJCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFPeEMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLGtCQUFrQjthQUNwQixPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMxRCxTQUFTLENBQ1IsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FDekIsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUNyRCxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFzQixFQUFFLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUc7Z0JBQ2YsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUk7YUFDM0MsQ0FBQztTQUNIO2FBQU07WUFDTCxNQUFNLElBQUksR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixTQUFTLEVBQUUsTUFBTSxHQUFHLElBQUk7YUFDekIsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnSEFuRFUsbUJBQW1CO29HQUFuQixtQkFBbUIsaURDaEJoQyxvaERBMENBOzJGRDFCYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJyZWFrcG9pbnRPYnNlcnZlcixcbiAgQnJlYWtwb2ludFN0YXRlLFxuICBCcmVha3BvaW50cyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNaW1lVmlld2VySW50bCB9IGZyb20gJy4uL2NvcmUvaW50bCc7XG5pbXBvcnQgeyBNaW1lUmVzaXplU2VydmljZSB9IGZyb20gJy4uL2NvcmUvbWltZS1yZXNpemUtc2VydmljZS9taW1lLXJlc2l6ZS5zZXJ2aWNlJztcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi9jb3JlL21vZGVscy9kaW1lbnNpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWltZS1oZWxwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlbHAtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVscC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVscERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHRhYkhlaWdodCA9IHt9O1xuICBpc0hhbmRzZXRPclRhYmxldEluUG9ydHJhaXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtaW1lSGVpZ2h0ID0gMDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpbnRsOiBNaW1lVmlld2VySW50bCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBtaW1lUmVzaXplU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBicmVha3BvaW50T2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuYnJlYWtwb2ludE9ic2VydmVyXG4gICAgICAgIC5vYnNlcnZlKFtCcmVha3BvaW50cy5IYW5kc2V0LCBCcmVha3BvaW50cy5UYWJsZXRQb3J0cmFpdF0pXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKHZhbHVlOiBCcmVha3BvaW50U3RhdGUpID0+XG4gICAgICAgICAgICAodGhpcy5pc0hhbmRzZXRPclRhYmxldEluUG9ydHJhaXQgPSB2YWx1ZS5tYXRjaGVzKVxuICAgICAgICApXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLm1pbWVSZXNpemVTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgoZGltZW5zaW9uczogRGltZW5zaW9ucykgPT4ge1xuICAgICAgICB0aGlzLm1pbWVIZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgdGhpcy5yZXNpemVUYWJIZWlnaHQoKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVzaXplVGFiSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplVGFiSGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1pbWVIZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5pc0hhbmRzZXRPclRhYmxldEluUG9ydHJhaXQpIHtcbiAgICAgIHRoaXMudGFiSGVpZ2h0ID0ge1xuICAgICAgICBtYXhIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAtIDEyOCArICdweCcsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWlnaHQgLT0gMjcyO1xuICAgICAgdGhpcy50YWJIZWlnaHQgPSB7XG4gICAgICAgIG1heEhlaWdodDogaGVpZ2h0ICsgJ3B4JyxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImhlbHAtY29udGFpbmVyXCI+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImlzSGFuZHNldE9yVGFibGV0SW5Qb3J0cmFpdFwiPlxuICAgIDxtYXQtdG9vbGJhciAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgW2FyaWEtbGFiZWxdPVwiaW50bC5oZWxwQ2xvc2VBcmlhTGFiZWxcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCJpbnRsLmNsb3NlTGFiZWxcIlxuICAgICAgICBbbWF0RGlhbG9nQ2xvc2VdPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPnt7IGludGwuaGVscC5oZWxwTGFiZWwgfX08L2gxPlxuICAgIDwvbWF0LXRvb2xiYXI+XG4gICAgPG1hdC10b29sYmFyICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxoMSBjbGFzcz1cImhlYWRpbmctZGVza3RvcFwiIG1hdC1kaWFsb2ctdGl0bGU+e3tcbiAgICAgICAgaW50bC5oZWxwLmhlbHBMYWJlbFxuICAgICAgfX08L2gxPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgW2FyaWEtbGFiZWxdPVwiaW50bC5oZWxwQ2xvc2VBcmlhTGFiZWxcIlxuICAgICAgICBbbWF0VG9vbHRpcF09XCJpbnRsLmNsb3NlTGFiZWxcIlxuICAgICAgICBbbWF0RGlhbG9nQ2xvc2VdPVwidHJ1ZVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC10b29sYmFyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG1hdC1kaWFsb2ctY29udGVudCBbbmdTdHlsZV09XCJ0YWJIZWlnaHRcIiBjbGFzcz1cImhlbHAtY29udGVudFwiIHRhYmluZGV4PVwiMFwiPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmUxXCI+PC9wPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmUyXCI+PC9wPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmUzXCI+PC9wPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmU0XCI+PC9wPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmU1XCI+PC9wPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmU2XCI+PC9wPlxuICAgIDxwIFtpbm5lckhUTUxdPVwiaW50bC5oZWxwLmxpbmUxMlwiPjwvcD5cbiAgICA8cCBbaW5uZXJIVE1MXT1cImludGwuaGVscC5saW5lN1wiPjwvcD5cbiAgICA8cCBbaW5uZXJIVE1MXT1cImludGwuaGVscC5saW5lOFwiPjwvcD5cbiAgICA8cCBbaW5uZXJIVE1MXT1cImludGwuaGVscC5saW5lOVwiPjwvcD5cbiAgICA8cCBbaW5uZXJIVE1MXT1cImludGwuaGVscC5saW5lMTBcIj48L3A+XG4gICAgPHAgW2lubmVySFRNTF09XCJpbnRsLmhlbHAubGluZTExXCI+PC9wPlxuICA8L21hdC1kaWFsb2ctY29udGVudD5cbjwvZGl2PlxuIl19