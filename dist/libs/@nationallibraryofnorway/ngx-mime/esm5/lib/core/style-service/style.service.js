import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { tap, distinctUntilChanged, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
var StyleService = /** @class */ (function () {
    function StyleService(zone) {
        this.zone = zone;
        this.colorSubject = new ReplaySubject();
    }
    Object.defineProperty(StyleService.prototype, "onChange", {
        get: function () {
            return this.colorSubject.asObservable().pipe(filter(function (c) { return c !== null; }), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    StyleService.prototype.init = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            interval(1000)
                .pipe(tap(function () {
                var previousRgbColor = _this.currentRgbColor;
                var currentRgbColor = _this.getComputedBackgroundColor(1);
                if (previousRgbColor !== currentRgbColor) {
                    _this.currentRgbColor = currentRgbColor;
                    _this.colorSubject.next(currentRgbColor);
                }
            }))
                .subscribe();
        });
    };
    StyleService.prototype.convertToRgba = function (rgbColor, opacity) {
        return rgbColor.replace(/rgb/i, 'rgba').replace(/\)/i, "," + opacity + ")");
    };
    StyleService.prototype.getComputedBackgroundColor = function (opacity) {
        var matAppBackground = document.getElementsByClassName('mat-app-background');
        var matSidenavContainer = document.getElementsByTagName('mat-sidenav-container');
        if (matAppBackground.length > 0) {
            return this.getComputedStyle(matAppBackground[0], 'background-color');
        }
        else if (matSidenavContainer.length > 0) {
            return this.getComputedStyle(matSidenavContainer[0], 'background-color');
        }
        else {
            return null;
        }
    };
    StyleService.prototype.getComputedStyle = function (el, property) {
        return window.getComputedStyle(el, null).getPropertyValue(property);
    };
    StyleService.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    StyleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(i0.ɵɵinject(i0.NgZone)); }, token: StyleService, providedIn: "root" });
    StyleService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], StyleService);
    return StyleService;
}());
export { StyleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3N0eWxlLXNlcnZpY2Uvc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFhLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLOUU7SUFJRSxzQkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFGeEIsaUJBQVksR0FBMEIsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUUvQixDQUFDO0lBRXBDLHNCQUFJLGtDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQyxFQUN2QixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCwyQkFBSSxHQUFKO1FBQUEsaUJBZUM7UUFkQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUM7aUJBQ1gsSUFBSSxDQUNILEdBQUcsQ0FBQztnQkFDRixJQUFNLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQU0sZUFBZSxHQUFHLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxnQkFBZ0IsS0FBSyxlQUFlLEVBQUU7b0JBQ3hDLEtBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN2QyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDekM7WUFDSCxDQUFDLENBQUMsQ0FDSDtpQkFDQSxTQUFTLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQixFQUFFLE9BQWU7UUFDcEQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQUksT0FBTyxNQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8saURBQTBCLEdBQWxDLFVBQW1DLE9BQWU7UUFDaEQsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQ3RELG9CQUFvQixDQUNyQixDQUFDO1FBQ0YsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQ3ZELHVCQUF1QixDQUN4QixDQUFDO1FBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7U0FDdkU7YUFBTSxJQUFJLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFTyx1Q0FBZ0IsR0FBeEIsVUFBeUIsRUFBTyxFQUFFLFFBQWdCO1FBQ2hELE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFqRHlCLE1BQU07OztJQUpyQixZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxZQUFZLENBc0R4Qjt1QkE3REQ7Q0E2REMsQUF0REQsSUFzREM7U0F0RFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVNlcnZpY2Uge1xuICBwcml2YXRlIGN1cnJlbnRSZ2JDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGNvbG9yU3ViamVjdDogUmVwbGF5U3ViamVjdDxzdHJpbmc+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBnZXQgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb2xvclN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihjID0+IGMgIT09IG51bGwpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpbnRlcnZhbCgxMDAwKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNSZ2JDb2xvciA9IHRoaXMuY3VycmVudFJnYkNvbG9yO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFJnYkNvbG9yID0gdGhpcy5nZXRDb21wdXRlZEJhY2tncm91bmRDb2xvcigxKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1JnYkNvbG9yICE9PSBjdXJyZW50UmdiQ29sb3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmdiQ29sb3IgPSBjdXJyZW50UmdiQ29sb3I7XG4gICAgICAgICAgICAgIHRoaXMuY29sb3JTdWJqZWN0Lm5leHQoY3VycmVudFJnYkNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0VG9SZ2JhKHJnYkNvbG9yOiBzdHJpbmcsIG9wYWNpdHk6IG51bWJlcikge1xuICAgIHJldHVybiByZ2JDb2xvci5yZXBsYWNlKC9yZ2IvaSwgJ3JnYmEnKS5yZXBsYWNlKC9cXCkvaSwgYCwke29wYWNpdHl9KWApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wdXRlZEJhY2tncm91bmRDb2xvcihvcGFjaXR5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdEFwcEJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ21hdC1hcHAtYmFja2dyb3VuZCdcbiAgICApO1xuICAgIGNvbnN0IG1hdFNpZGVuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdtYXQtc2lkZW5hdi1jb250YWluZXInXG4gICAgKTtcblxuICAgIGlmIChtYXRBcHBCYWNrZ3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbXB1dGVkU3R5bGUobWF0QXBwQmFja2dyb3VuZFswXSwgJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICB9IGVsc2UgaWYgKG1hdFNpZGVuYXZDb250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZShtYXRTaWRlbmF2Q29udGFpbmVyWzBdLCAnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXB1dGVkU3R5bGUoZWw6IGFueSwgcHJvcGVydHk6IHN0cmluZykge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XG4gIH1cbn1cbiJdfQ==