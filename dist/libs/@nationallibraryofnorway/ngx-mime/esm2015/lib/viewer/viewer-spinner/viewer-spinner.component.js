import { __decorate } from "tslib";
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { SpinnerState, SpinnerService } from '../../core/spinner-service/spinner.service';
let ViewerSpinnerComponent = class ViewerSpinnerComponent {
    constructor(spinnerService, changeDetectorRef) {
        this.spinnerService = spinnerService;
        this.changeDetectorRef = changeDetectorRef;
        this.visible = false;
    }
    ngOnInit() {
        this.spinnerSub = this.spinnerService.spinnerState.subscribe((state) => {
            this.visible = state.show;
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.spinnerSub.unsubscribe();
    }
};
ViewerSpinnerComponent.ctorParameters = () => [
    { type: SpinnerService },
    { type: ChangeDetectorRef }
];
ViewerSpinnerComponent = __decorate([
    Component({
        selector: 'mime-spinner',
        template: "<div class=\"mime-spinner\" [class.mime-spinner--active]=\"visible\">\n  <mat-spinner></mat-spinner>\n</div>\n",
        styles: [".mime-spinner{display:none;position:absolute;left:50%;top:45%;transform:translate(-50%,0);z-index:9999}.mime-spinner--active{display:block}"]
    })
], ViewerSpinnerComponent);
export { ViewerSpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLXNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci92aWV3ZXItc3Bpbm5lci92aWV3ZXItc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGNBQWMsRUFDZixNQUFNLDRDQUE0QyxDQUFDO0FBT3BELElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBSWpDLFlBQ1UsY0FBOEIsRUFDOUIsaUJBQW9DO1FBRHBDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTHZDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFNcEIsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDMUQsQ0FBQyxLQUFtQixFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTs7WUFoQjJCLGNBQWM7WUFDWCxpQkFBaUI7O0FBTm5DLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QiwwSEFBOEM7O0tBRS9DLENBQUM7R0FDVyxzQkFBc0IsQ0FxQmxDO1NBckJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgU3Bpbm5lclN0YXRlLFxuICBTcGlubmVyU2VydmljZVxufSBmcm9tICcuLi8uLi9jb3JlL3NwaW5uZXItc2VydmljZS9zcGlubmVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlld2VyLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXItc3Bpbm5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlclNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHB1YmxpYyB2aXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgc3Bpbm5lclN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IFNwaW5uZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNwaW5uZXJTdWIgPSB0aGlzLnNwaW5uZXJTZXJ2aWNlLnNwaW5uZXJTdGF0ZS5zdWJzY3JpYmUoXG4gICAgICAoc3RhdGU6IFNwaW5uZXJTdGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBzdGF0ZS5zaG93O1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zcGlubmVyU3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==