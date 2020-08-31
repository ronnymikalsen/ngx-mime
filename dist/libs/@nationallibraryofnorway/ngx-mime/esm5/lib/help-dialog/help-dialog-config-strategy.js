import { Dimensions } from '../core/models/dimensions';
var MobileHelpDialogConfigStrategy = /** @class */ (function () {
    function MobileHelpDialogConfigStrategy() {
    }
    MobileHelpDialogConfigStrategy.prototype.getConfig = function (elementRef) {
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: '100%',
            height: '100%',
            panelClass: 'help-panel'
        };
    };
    return MobileHelpDialogConfigStrategy;
}());
export { MobileHelpDialogConfigStrategy };
var DesktopHelpDialogConfigStrategy = /** @class */ (function () {
    function DesktopHelpDialogConfigStrategy(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
    }
    DesktopHelpDialogConfigStrategy.prototype.getConfig = function (el) {
        var dimensions = this.getPosition(el);
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: DesktopHelpDialogConfigStrategy.dialogWidth + "px",
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            panelClass: 'help-panel'
        };
    };
    DesktopHelpDialogConfigStrategy.prototype.getPosition = function (el) {
        var dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new Dimensions({
            top: dimensions.top + 64,
            left: dimensions.right -
                DesktopHelpDialogConfigStrategy.dialogWidth -
                DesktopHelpDialogConfigStrategy.paddingRight
        });
    };
    DesktopHelpDialogConfigStrategy.dialogWidth = 350;
    DesktopHelpDialogConfigStrategy.paddingRight = 20;
    return DesktopHelpDialogConfigStrategy;
}());
export { DesktopHelpDialogConfigStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2hlbHAtZGlhbG9nL2hlbHAtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFRdkQ7SUFBQTtJQVlBLENBQUM7SUFWUSxrREFBUyxHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxZQUFZO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBQ0gscUNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQzs7QUFFRDtJQU1FLHlDQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxtREFBUyxHQUFoQixVQUFpQixFQUFjO1FBQzdCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLEtBQUssRUFBSywrQkFBK0IsQ0FBQyxXQUFXLE9BQUk7WUFDekQsUUFBUSxFQUFFO2dCQUNSLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUk7Z0JBQzFCLElBQUksRUFBRSxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUk7YUFDN0I7WUFDRCxVQUFVLEVBQUUsWUFBWTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVPLHFEQUFXLEdBQW5CLFVBQW9CLEVBQWM7UUFDaEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksVUFBVSxDQUFDO1lBQ3BCLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUNGLFVBQVUsQ0FBQyxLQUFLO2dCQUNoQiwrQkFBK0IsQ0FBQyxXQUFXO2dCQUMzQywrQkFBK0IsQ0FBQyxZQUFZO1NBQy9DLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoQ3NCLDJDQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLDRDQUFZLEdBQUcsRUFBRSxDQUFDO0lBZ0MzQyxzQ0FBQztDQUFBLEFBbkNELElBbUNDO1NBbkNZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ0NvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vY29yZS9tb2RlbHMvZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBNaW1lRG9tSGVscGVyIH0gZnJvbSAnLi4vY29yZS9taW1lLWRvbS1oZWxwZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5IHtcbiAgZ2V0Q29uZmlnKGVsZW1lbnRSZWY/OiBFbGVtZW50UmVmKTogTWF0RGlhbG9nQ29uZmlnO1xufVxuXG5leHBvcnQgY2xhc3MgTW9iaWxlSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5XG4gIGltcGxlbWVudHMgSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5IHtcbiAgcHVibGljIGdldENvbmZpZyhlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogTWF0RGlhbG9nQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZSxcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwYW5lbENsYXNzOiAnaGVscC1wYW5lbCdcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXNrdG9wSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5XG4gIGltcGxlbWVudHMgSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBkaWFsb2dXaWR0aCA9IDM1MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBwYWRkaW5nUmlnaHQgPSAyMDtcbiAgcHJpdmF0ZSBtaW1lRG9tSGVscGVyOiBNaW1lRG9tSGVscGVyO1xuXG4gIGNvbnN0cnVjdG9yKG1pbWVEb21IZWxwZXI6IE1pbWVEb21IZWxwZXIpIHtcbiAgICB0aGlzLm1pbWVEb21IZWxwZXIgPSBtaW1lRG9tSGVscGVyO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZyhlbDogRWxlbWVudFJlZik6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuZ2V0UG9zaXRpb24oZWwpO1xuICAgIHJldHVybiB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBgJHtEZXNrdG9wSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5LmRpYWxvZ1dpZHRofXB4YCxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogZGltZW5zaW9ucy50b3AgKyAncHgnLFxuICAgICAgICBsZWZ0OiBkaW1lbnNpb25zLmxlZnQgKyAncHgnXG4gICAgICB9LFxuICAgICAgcGFuZWxDbGFzczogJ2hlbHAtcGFuZWwnXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9zaXRpb24oZWw6IEVsZW1lbnRSZWYpOiBEaW1lbnNpb25zIHtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5taW1lRG9tSGVscGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdChlbCk7XG4gICAgcmV0dXJuIG5ldyBEaW1lbnNpb25zKHtcbiAgICAgIHRvcDogZGltZW5zaW9ucy50b3AgKyA2NCxcbiAgICAgIGxlZnQ6XG4gICAgICAgIGRpbWVuc2lvbnMucmlnaHQgLVxuICAgICAgICBEZXNrdG9wSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5LmRpYWxvZ1dpZHRoIC1cbiAgICAgICAgRGVza3RvcEhlbHBEaWFsb2dDb25maWdTdHJhdGVneS5wYWRkaW5nUmlnaHRcbiAgICB9KTtcbiAgfVxufVxuIl19