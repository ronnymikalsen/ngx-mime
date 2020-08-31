import { __decorate } from "tslib";
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { SpinnerState, SpinnerService } from '../../core/spinner-service/spinner.service';
var ViewerSpinnerComponent = /** @class */ (function () {
    function ViewerSpinnerComponent(spinnerService, changeDetectorRef) {
        this.spinnerService = spinnerService;
        this.changeDetectorRef = changeDetectorRef;
        this.visible = false;
    }
    ViewerSpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerSub = this.spinnerService.spinnerState.subscribe(function (state) {
            _this.visible = state.show;
            _this.changeDetectorRef.detectChanges();
        });
    };
    ViewerSpinnerComponent.prototype.ngOnDestroy = function () {
        this.spinnerSub.unsubscribe();
    };
    ViewerSpinnerComponent.ctorParameters = function () { return [
        { type: SpinnerService },
        { type: ChangeDetectorRef }
    ]; };
    ViewerSpinnerComponent = __decorate([
        Component({
            selector: 'mime-spinner',
            template: "<div class=\"mime-spinner\" [class.mime-spinner--active]=\"visible\">\n  <mat-spinner></mat-spinner>\n</div>\n",
            styles: [".mime-spinner{display:none;position:absolute;left:50%;top:45%;transform:translate(-50%,0);z-index:9999}.mime-spinner--active{display:block}"]
        })
    ], ViewerSpinnerComponent);
    return ViewerSpinnerComponent;
}());
export { ViewerSpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci92aWV3ZXItc3Bpbm5lci92aWV3ZXItc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGNBQWMsRUFDZixNQUFNLDRDQUE0QyxDQUFDO0FBT3BEO0lBSUUsZ0NBQ1UsY0FBOEIsRUFDOUIsaUJBQW9DO1FBRHBDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTHZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFNcEIsQ0FBQztJQUVKLHlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUMxRCxVQUFDLEtBQW1CO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBZnlCLGNBQWM7Z0JBQ1gsaUJBQWlCOztJQU5uQyxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsMEhBQThDOztTQUUvQyxDQUFDO09BQ1csc0JBQXNCLENBcUJsQztJQUFELDZCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBTcGlubmVyU3RhdGUsXG4gIFNwaW5uZXJTZXJ2aWNlXG59IGZyb20gJy4uLy4uL2NvcmUvc3Bpbm5lci1zZXJ2aWNlL3NwaW5uZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pbWUtc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHVibGljIHZpc2libGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzcGlubmVyU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcGlubmVyU2VydmljZTogU3Bpbm5lclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Bpbm5lclN1YiA9IHRoaXMuc3Bpbm5lclNlcnZpY2Uuc3Bpbm5lclN0YXRlLnN1YnNjcmliZShcbiAgICAgIChzdGF0ZTogU3Bpbm5lclN0YXRlKSA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHN0YXRlLnNob3c7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnNwaW5uZXJTdWIudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19