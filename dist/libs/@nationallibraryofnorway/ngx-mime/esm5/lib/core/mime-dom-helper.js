import { __assign, __decorate } from "tslib";
import { FullscreenService } from './fullscreen-service/fullscreen.service';
import { Dimensions } from './models/dimensions';
import { Injectable } from '@angular/core';
var MimeDomHelper = /** @class */ (function () {
    function MimeDomHelper(fullscreen) {
        this.fullscreen = fullscreen;
    }
    MimeDomHelper.prototype.getBoundingClientRect = function (el) {
        try {
            if (this.isDocumentInFullScreenMode() &&
                el.nativeElement.nodeName === 'MIME-VIEWER') {
                return this.createFullscreenDimensions(el);
            }
            else {
                return this.createDimensions(el);
            }
        }
        catch (e) {
            return new Dimensions();
        }
    };
    MimeDomHelper.prototype.isDocumentInFullScreenMode = function () {
        return this.fullscreen.isFullscreen();
    };
    MimeDomHelper.prototype.toggleFullscreen = function () {
        var el = document.getElementById('mimeViewer');
        if (this.fullscreen.isEnabled()) {
            this.fullscreen.toggle(el);
        }
    };
    MimeDomHelper.prototype.setFocusOnViewer = function () {
        var el = document.getElementById('mimeViewer');
        if (el) {
            el.focus();
        }
    };
    MimeDomHelper.prototype.createFullscreenDimensions = function (el) {
        var dimensions = el.nativeElement.getBoundingClientRect();
        var width = this.getFullscreenWidth();
        var height = this.getFullscreenHeight();
        return new Dimensions(__assign(__assign({}, dimensions), { top: 0, bottom: height, width: width, height: height, left: 0, right: width }));
    };
    MimeDomHelper.prototype.createDimensions = function (el) {
        var dimensions = el.nativeElement.getBoundingClientRect();
        return new Dimensions({
            top: dimensions.top,
            bottom: dimensions.bottom,
            width: dimensions.width,
            height: dimensions.height,
            left: dimensions.left,
            right: dimensions.right
        });
    };
    MimeDomHelper.prototype.getFullscreenWidth = function () {
        return (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth);
    };
    MimeDomHelper.prototype.getFullscreenHeight = function () {
        return (window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight);
    };
    MimeDomHelper.ctorParameters = function () { return [
        { type: FullscreenService }
    ]; };
    MimeDomHelper = __decorate([
        Injectable()
    ], MimeDomHelper);
    return MimeDomHelper;
}());
export { MimeDomHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZS1kb20taGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbWltZS1kb20taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RDtJQUNFLHVCQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUFHLENBQUM7SUFFOUMsNkNBQXFCLEdBQTVCLFVBQTZCLEVBQWM7UUFDekMsSUFBSTtZQUNGLElBQ0UsSUFBSSxDQUFDLDBCQUEwQixFQUFFO2dCQUNqQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQzNDO2dCQUNBLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTSxrREFBMEIsR0FBakM7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtRQUNFLElBQU0sRUFBRSxHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtRQUNFLElBQU0sRUFBRSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlELElBQUksRUFBRSxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBRU8sa0RBQTBCLEdBQWxDLFVBQW1DLEVBQWM7UUFDL0MsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzVELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxVQUFVLHVCQUNoQixVQUFVLEtBQ2IsR0FBRyxFQUFFLENBQUMsRUFDTixNQUFNLEVBQUUsTUFBTSxFQUNkLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQUUsQ0FBQyxFQUNQLEtBQUssRUFBRSxLQUFLLElBQ1osQ0FBQztJQUNMLENBQUM7SUFFTyx3Q0FBZ0IsR0FBeEIsVUFBeUIsRUFBYztRQUNyQyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDNUQsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNwQixHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUc7WUFDbkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1lBQ3pCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztZQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDekIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMENBQWtCLEdBQTFCO1FBQ0UsT0FBTyxDQUNMLE1BQU0sQ0FBQyxVQUFVO1lBQ2pCLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVztZQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFTywyQ0FBbUIsR0FBM0I7UUFDRSxPQUFPLENBQ0wsTUFBTSxDQUFDLFdBQVc7WUFDbEIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZO1lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUMzQixDQUFDO0lBQ0osQ0FBQzs7Z0JBNUUrQixpQkFBaUI7O0lBRHRDLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYSxDQThFekI7SUFBRCxvQkFBQztDQUFBLEFBOUVELElBOEVDO1NBOUVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdWxsc2NyZWVuU2VydmljZSB9IGZyb20gJy4vZnVsbHNjcmVlbi1zZXJ2aWNlL2Z1bGxzY3JlZW4uc2VydmljZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi9tb2RlbHMvZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaW1lRG9tSGVscGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmdWxsc2NyZWVuOiBGdWxsc2NyZWVuU2VydmljZSkge31cblxuICBwdWJsaWMgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsOiBFbGVtZW50UmVmKTogRGltZW5zaW9ucyB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pc0RvY3VtZW50SW5GdWxsU2NyZWVuTW9kZSgpICYmXG4gICAgICAgIGVsLm5hdGl2ZUVsZW1lbnQubm9kZU5hbWUgPT09ICdNSU1FLVZJRVdFUidcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVGdWxsc2NyZWVuRGltZW5zaW9ucyhlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEaW1lbnNpb25zKGVsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbmV3IERpbWVuc2lvbnMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEb2N1bWVudEluRnVsbFNjcmVlbk1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbi5pc0Z1bGxzY3JlZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVGdWxsc2NyZWVuKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gPGFueT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWltZVZpZXdlcicpO1xuICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4uaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuZnVsbHNjcmVlbi50b2dnbGUoZWwpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRGb2N1c09uVmlld2VyKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW1lVmlld2VyJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRnVsbHNjcmVlbkRpbWVuc2lvbnMoZWw6IEVsZW1lbnRSZWYpOiBEaW1lbnNpb25zIHtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0RnVsbHNjcmVlbldpZHRoKCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRGdWxsc2NyZWVuSGVpZ2h0KCk7XG4gICAgcmV0dXJuIG5ldyBEaW1lbnNpb25zKHtcbiAgICAgIC4uLmRpbWVuc2lvbnMsXG4gICAgICB0b3A6IDAsXG4gICAgICBib3R0b206IGhlaWdodCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiB3aWR0aFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEaW1lbnNpb25zKGVsOiBFbGVtZW50UmVmKTogRGltZW5zaW9ucyB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IGVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIG5ldyBEaW1lbnNpb25zKHtcbiAgICAgIHRvcDogZGltZW5zaW9ucy50b3AsXG4gICAgICBib3R0b206IGRpbWVuc2lvbnMuYm90dG9tLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbnMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGRpbWVuc2lvbnMuaGVpZ2h0LFxuICAgICAgbGVmdDogZGltZW5zaW9ucy5sZWZ0LFxuICAgICAgcmlnaHQ6IGRpbWVuc2lvbnMucmlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RnVsbHNjcmVlbldpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHxcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGdWxsc2NyZWVuSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fFxuICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcbiAgICApO1xuICB9XG59XG4iXX0=