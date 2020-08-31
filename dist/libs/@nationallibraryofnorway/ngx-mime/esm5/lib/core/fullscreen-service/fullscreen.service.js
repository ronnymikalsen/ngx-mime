import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
var FullscreenService = /** @class */ (function () {
    function FullscreenService() {
        this.changeSubject = new ReplaySubject();
        this.onchange();
    }
    Object.defineProperty(FullscreenService.prototype, "onChange", {
        get: function () {
            return this.changeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    FullscreenService.prototype.isEnabled = function () {
        var d = document;
        return (d.fullscreenEnabled ||
            d.webkitFullscreenEnabled ||
            d.mozFullScreenEnabled ||
            d.msFullscreenEnabled);
    };
    FullscreenService.prototype.isFullscreen = function () {
        var d = document;
        return (d.fullscreenElement ||
            d.webkitFullscreenElement ||
            d.mozFullScreenElement ||
            d.msFullscreenElement);
    };
    FullscreenService.prototype.toggle = function (el) {
        this.isFullscreen() ? this.closeFullscreen(el) : this.openFullscreen(el);
    };
    FullscreenService.prototype.onchange = function () {
        var _this = this;
        var d = document;
        var func = function () {
            _this.changeSubject.next(true);
        };
        if (d.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', func);
        }
        else if (d.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', func);
        }
        else if (d.mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', func);
        }
        else if (d.msFullscreenEnabled) {
            document.addEventListener('msfullscreenchange', func);
        }
    };
    FullscreenService.prototype.openFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    };
    FullscreenService.prototype.closeFullscreen = function (elem) {
        var d = document;
        if (d.exitFullscreen) {
            d.exitFullscreen();
        }
        else if (d.mozCancelFullScreen) {
            d.mozCancelFullScreen();
        }
        else if (d.webkitExitFullscreen) {
            d.webkitExitFullscreen();
        }
        else if (d.msExitFullscreen) {
            d.msExitFullscreen();
        }
    };
    FullscreenService = __decorate([
        Injectable()
    ], FullscreenService);
    return FullscreenService;
}());
export { FullscreenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvZnVsbHNjcmVlbi1zZXJ2aWNlL2Z1bGxzY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2pEO0lBR0U7UUFGUSxrQkFBYSxHQUEyQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBR2xFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsc0JBQUksdUNBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVNLHFDQUFTLEdBQWhCO1FBQ0UsSUFBTSxDQUFDLEdBQVEsUUFBUSxDQUFDO1FBQ3hCLE9BQU8sQ0FDTCxDQUFDLENBQUMsaUJBQWlCO1lBQ25CLENBQUMsQ0FBQyx1QkFBdUI7WUFDekIsQ0FBQyxDQUFDLG9CQUFvQjtZQUN0QixDQUFDLENBQUMsbUJBQW1CLENBQ3RCLENBQUM7SUFDSixDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFDRSxJQUFNLENBQUMsR0FBUSxRQUFRLENBQUM7UUFDeEIsT0FBTyxDQUNMLENBQUMsQ0FBQyxpQkFBaUI7WUFDbkIsQ0FBQyxDQUFDLHVCQUF1QjtZQUN6QixDQUFDLENBQUMsb0JBQW9CO1lBQ3RCLENBQUMsQ0FBQyxtQkFBbUIsQ0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFTSxrQ0FBTSxHQUFiLFVBQWMsRUFBZTtRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFBQSxpQkFnQkM7UUFmQyxJQUFNLENBQUMsR0FBUSxRQUFRLENBQUM7UUFFeEIsSUFBTSxJQUFJLEdBQUc7WUFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUN2QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckQ7YUFBTSxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNwQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0Q7YUFBTSxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTtZQUNqQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEQ7YUFBTSxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsRUFBRTtZQUNoQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRU8sMENBQWMsR0FBdEIsVUFBdUIsSUFBUztRQUM5QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjthQUFNLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7YUFBTSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUNuQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFTywyQ0FBZSxHQUF2QixVQUF3QixJQUFTO1FBQy9CLElBQU0sQ0FBQyxHQUFRLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxDQUFDLENBQUMsbUJBQW1CLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDekI7YUFBTSxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRTtZQUNqQyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUMxQjthQUFNLElBQUksQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQTVFVSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCLENBNkU3QjtJQUFELHdCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E3RVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlblNlcnZpY2Uge1xuICBwcml2YXRlIGNoYW5nZVN1YmplY3Q6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25jaGFuZ2UoKTtcbiAgfVxuXG4gIGdldCBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBkOiBhbnkgPSBkb2N1bWVudDtcbiAgICByZXR1cm4gKFxuICAgICAgZC5mdWxsc2NyZWVuRW5hYmxlZCB8fFxuICAgICAgZC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCB8fFxuICAgICAgZC5tb3pGdWxsU2NyZWVuRW5hYmxlZCB8fFxuICAgICAgZC5tc0Z1bGxzY3JlZW5FbmFibGVkXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Z1bGxzY3JlZW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZDogYW55ID0gZG9jdW1lbnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIGQuZnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcbiAgICAgIGQubXNGdWxsc2NyZWVuRWxlbWVudFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMuaXNGdWxsc2NyZWVuKCkgPyB0aGlzLmNsb3NlRnVsbHNjcmVlbihlbCkgOiB0aGlzLm9wZW5GdWxsc2NyZWVuKGVsKTtcbiAgfVxuXG4gIHB1YmxpYyBvbmNoYW5nZSgpIHtcbiAgICBjb25zdCBkOiBhbnkgPSBkb2N1bWVudDtcblxuICAgIGNvbnN0IGZ1bmMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZVN1YmplY3QubmV4dCh0cnVlKTtcbiAgICB9O1xuXG4gICAgaWYgKGQuZnVsbHNjcmVlbkVuYWJsZWQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jKTtcbiAgICB9IGVsc2UgaWYgKGQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jKTtcbiAgICB9IGVsc2UgaWYgKGQubW96RnVsbFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCBmdW5jKTtcbiAgICB9IGVsc2UgaWYgKGQubXNGdWxsc2NyZWVuRW5hYmxlZCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbXNmdWxsc2NyZWVuY2hhbmdlJywgZnVuYyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRnVsbHNjcmVlbihlbGVtOiBhbnkpIHtcbiAgICBpZiAoZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZWxlbS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgZWxlbS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgZWxlbS53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICBlbGVtLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlRnVsbHNjcmVlbihlbGVtOiBhbnkpIHtcbiAgICBjb25zdCBkID0gPGFueT5kb2N1bWVudDtcbiAgICBpZiAoZC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgZC5leGl0RnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSBpZiAoZC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICBkLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKGQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgZC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG59XG4iXX0=