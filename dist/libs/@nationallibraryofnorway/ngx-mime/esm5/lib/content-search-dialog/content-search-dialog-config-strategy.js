import { Dimensions } from './../core/models/dimensions';
var MobileContentSearchDialogConfigStrategy = /** @class */ (function () {
    function MobileContentSearchDialogConfigStrategy() {
    }
    MobileContentSearchDialogConfigStrategy.prototype.getConfig = function (elementRef) {
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: '100%',
            height: '100%',
            panelClass: 'content-search-panel'
        };
    };
    return MobileContentSearchDialogConfigStrategy;
}());
export { MobileContentSearchDialogConfigStrategy };
var DesktopContentSearchDialogConfigStrategy = /** @class */ (function () {
    function DesktopContentSearchDialogConfigStrategy(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
    }
    DesktopContentSearchDialogConfigStrategy.prototype.getConfig = function (el) {
        var dimensions = this.getPosition(el);
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: DesktopContentSearchDialogConfigStrategy.dialogWidth + "px",
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            panelClass: 'content-search-panel'
        };
    };
    DesktopContentSearchDialogConfigStrategy.prototype.getPosition = function (el) {
        var dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new Dimensions({
            top: dimensions.top + 64,
            left: dimensions.right -
                DesktopContentSearchDialogConfigStrategy.dialogWidth -
                DesktopContentSearchDialogConfigStrategy.paddingRight
        });
    };
    DesktopContentSearchDialogConfigStrategy.dialogWidth = 350;
    DesktopContentSearchDialogConfigStrategy.paddingRight = 20;
    return DesktopContentSearchDialogConfigStrategy;
}());
export { DesktopContentSearchDialogConfigStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50LXNlYXJjaC1kaWFsb2cvY29udGVudC1zZWFyY2gtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNekQ7SUFBQTtJQVlBLENBQUM7SUFWUSwyREFBUyxHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFDSCw4Q0FBQztBQUFELENBQUMsQUFaRCxJQVlDOztBQUVEO0lBTUUsa0RBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVNLDREQUFTLEdBQWhCLFVBQWlCLEVBQWM7UUFDN0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFLLHdDQUF3QyxDQUFDLFdBQVcsT0FBSTtZQUNsRSxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSTtnQkFDMUIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSTthQUM3QjtZQUNELFVBQVUsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFTyw4REFBVyxHQUFuQixVQUFvQixFQUFjO1FBQ2hDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNwQixHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFDRixVQUFVLENBQUMsS0FBSztnQkFDaEIsd0NBQXdDLENBQUMsV0FBVztnQkFDcEQsd0NBQXdDLENBQUMsWUFBWTtTQUN4RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBaENzQixvREFBVyxHQUFHLEdBQUcsQ0FBQztJQUNsQixxREFBWSxHQUFHLEVBQUUsQ0FBQztJQWdDM0MsK0NBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQW5DWSx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW1lRG9tSGVscGVyIH0gZnJvbSAnLi8uLi9jb3JlL21pbWUtZG9tLWhlbHBlcic7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi8uLi9jb3JlL21vZGVscy9kaW1lbnNpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2VhcmNoRGlhbG9nQ29uZmlnU3RyYXRlZ3kge1xuICBnZXRDb25maWcoZWxlbWVudFJlZj86IEVsZW1lbnRSZWYpOiBNYXREaWFsb2dDb25maWc7XG59XG5cbmV4cG9ydCBjbGFzcyBNb2JpbGVDb250ZW50U2VhcmNoRGlhbG9nQ29uZmlnU3RyYXRlZ3lcbiAgaW1wbGVtZW50cyBDb250ZW50U2VhcmNoRGlhbG9nQ29uZmlnU3RyYXRlZ3kge1xuICBwdWJsaWMgZ2V0Q29uZmlnKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpOiBNYXREaWFsb2dDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjb250ZW50LXNlYXJjaC1wYW5lbCdcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXNrdG9wQ29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5XG4gIGltcGxlbWVudHMgQ29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBkaWFsb2dXaWR0aCA9IDM1MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBwYWRkaW5nUmlnaHQgPSAyMDtcbiAgcHJpdmF0ZSBtaW1lRG9tSGVscGVyOiBNaW1lRG9tSGVscGVyO1xuXG4gIGNvbnN0cnVjdG9yKG1pbWVEb21IZWxwZXI6IE1pbWVEb21IZWxwZXIpIHtcbiAgICB0aGlzLm1pbWVEb21IZWxwZXIgPSBtaW1lRG9tSGVscGVyO1xuICB9XG5cbiAgcHVibGljIGdldENvbmZpZyhlbDogRWxlbWVudFJlZik6IE1hdERpYWxvZ0NvbmZpZyB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuZ2V0UG9zaXRpb24oZWwpO1xuICAgIHJldHVybiB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBgJHtEZXNrdG9wQ29udGVudFNlYXJjaERpYWxvZ0NvbmZpZ1N0cmF0ZWd5LmRpYWxvZ1dpZHRofXB4YCxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogZGltZW5zaW9ucy50b3AgKyAncHgnLFxuICAgICAgICBsZWZ0OiBkaW1lbnNpb25zLmxlZnQgKyAncHgnXG4gICAgICB9LFxuICAgICAgcGFuZWxDbGFzczogJ2NvbnRlbnQtc2VhcmNoLXBhbmVsJ1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBvc2l0aW9uKGVsOiBFbGVtZW50UmVmKTogRGltZW5zaW9ucyB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMubWltZURvbUhlbHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpO1xuICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh7XG4gICAgICB0b3A6IGRpbWVuc2lvbnMudG9wICsgNjQsXG4gICAgICBsZWZ0OlxuICAgICAgICBkaW1lbnNpb25zLnJpZ2h0IC1cbiAgICAgICAgRGVza3RvcENvbnRlbnRTZWFyY2hEaWFsb2dDb25maWdTdHJhdGVneS5kaWFsb2dXaWR0aCAtXG4gICAgICAgIERlc2t0b3BDb250ZW50U2VhcmNoRGlhbG9nQ29uZmlnU3RyYXRlZ3kucGFkZGluZ1JpZ2h0XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==