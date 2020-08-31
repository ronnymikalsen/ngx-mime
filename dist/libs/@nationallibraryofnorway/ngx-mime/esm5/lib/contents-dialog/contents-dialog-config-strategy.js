import { Dimensions } from './../core/models/dimensions';
var MobileContentsDialogConfigStrategy = /** @class */ (function () {
    function MobileContentsDialogConfigStrategy() {
    }
    MobileContentsDialogConfigStrategy.prototype.getConfig = function (elementRef) {
        return {
            hasBackdrop: false,
            disableClose: false,
            width: '100%',
            height: '100%',
            panelClass: 'contents-panel'
        };
    };
    return MobileContentsDialogConfigStrategy;
}());
export { MobileContentsDialogConfigStrategy };
var DesktopContentsDialogConfigStrategy = /** @class */ (function () {
    function DesktopContentsDialogConfigStrategy(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
    }
    DesktopContentsDialogConfigStrategy.prototype.getConfig = function (el) {
        var dimensions = this.getPosition(el);
        return {
            hasBackdrop: false,
            disableClose: false,
            width: DesktopContentsDialogConfigStrategy.dialogWidth + "px",
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            panelClass: 'contents-panel'
        };
    };
    DesktopContentsDialogConfigStrategy.prototype.getPosition = function (el) {
        var dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new Dimensions({
            top: dimensions.top + 64,
            left: dimensions.right -
                DesktopContentsDialogConfigStrategy.dialogWidth -
                DesktopContentsDialogConfigStrategy.paddingRight
        });
    };
    DesktopContentsDialogConfigStrategy.dialogWidth = 350;
    DesktopContentsDialogConfigStrategy.paddingRight = 20;
    return DesktopContentsDialogConfigStrategy;
}());
export { DesktopContentsDialogConfigStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50cy1kaWFsb2cvY29udGVudHMtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNekQ7SUFBQTtJQVdBLENBQUM7SUFUUSxzREFBUyxHQUFoQixVQUFpQixVQUFzQjtRQUNyQyxPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFDSCx5Q0FBQztBQUFELENBQUMsQUFYRCxJQVdDOztBQUVEO0lBTUUsNkNBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVNLHVEQUFTLEdBQWhCLFVBQWlCLEVBQWM7UUFDN0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QyxPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsS0FBSyxFQUFLLG1DQUFtQyxDQUFDLFdBQVcsT0FBSTtZQUM3RCxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSTtnQkFDMUIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSTthQUM3QjtZQUNELFVBQVUsRUFBRSxnQkFBZ0I7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFTyx5REFBVyxHQUFuQixVQUFvQixFQUFjO1FBQ2hDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNwQixHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFDRixVQUFVLENBQUMsS0FBSztnQkFDaEIsbUNBQW1DLENBQUMsV0FBVztnQkFDL0MsbUNBQW1DLENBQUMsWUFBWTtTQUNuRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBL0JzQiwrQ0FBVyxHQUFHLEdBQUcsQ0FBQztJQUNsQixnREFBWSxHQUFHLEVBQUUsQ0FBQztJQStCM0MsMENBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW1lRG9tSGVscGVyIH0gZnJvbSAnLi8uLi9jb3JlL21pbWUtZG9tLWhlbHBlcic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi8uLi9jb3JlL21vZGVscy9kaW1lbnNpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBDb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5IHtcbiAgZ2V0Q29uZmlnKGVsZW1lbnRSZWY/OiBFbGVtZW50UmVmKTogTWF0RGlhbG9nQ29uZmlnO1xufVxuXG5leHBvcnQgY2xhc3MgTW9iaWxlQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneVxuICBpbXBsZW1lbnRzIENvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3kge1xuICBwdWJsaWMgZ2V0Q29uZmlnKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpOiBNYXREaWFsb2dDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXG4gICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcGFuZWxDbGFzczogJ2NvbnRlbnRzLXBhbmVsJ1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlc2t0b3BDb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5XG4gIGltcGxlbWVudHMgQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGlhbG9nV2lkdGggPSAzNTA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcGFkZGluZ1JpZ2h0ID0gMjA7XG4gIHByaXZhdGUgbWltZURvbUhlbHBlcjogTWltZURvbUhlbHBlcjtcblxuICBjb25zdHJ1Y3RvcihtaW1lRG9tSGVscGVyOiBNaW1lRG9tSGVscGVyKSB7XG4gICAgdGhpcy5taW1lRG9tSGVscGVyID0gbWltZURvbUhlbHBlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWcoZWw6IEVsZW1lbnRSZWYpOiBNYXREaWFsb2dDb25maWcge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLmdldFBvc2l0aW9uKGVsKTtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlLFxuICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZSxcbiAgICAgIHdpZHRoOiBgJHtEZXNrdG9wQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneS5kaWFsb2dXaWR0aH1weGAsXG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IGRpbWVuc2lvbnMudG9wICsgJ3B4JyxcbiAgICAgICAgbGVmdDogZGltZW5zaW9ucy5sZWZ0ICsgJ3B4J1xuICAgICAgfSxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjb250ZW50cy1wYW5lbCdcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3NpdGlvbihlbDogRWxlbWVudFJlZik6IERpbWVuc2lvbnMge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLm1pbWVEb21IZWxwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKTtcbiAgICByZXR1cm4gbmV3IERpbWVuc2lvbnMoe1xuICAgICAgdG9wOiBkaW1lbnNpb25zLnRvcCArIDY0LFxuICAgICAgbGVmdDpcbiAgICAgICAgZGltZW5zaW9ucy5yaWdodCAtXG4gICAgICAgIERlc2t0b3BDb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5LmRpYWxvZ1dpZHRoIC1cbiAgICAgICAgRGVza3RvcENvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3kucGFkZGluZ1JpZ2h0XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==