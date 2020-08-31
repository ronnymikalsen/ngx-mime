import { __decorate } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';
import { tap, distinctUntilChanged, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
let StyleService = class StyleService {
    constructor(zone) {
        this.zone = zone;
        this.colorSubject = new ReplaySubject();
    }
    get onChange() {
        return this.colorSubject.asObservable().pipe(filter(c => c !== null), distinctUntilChanged());
    }
    init() {
        this.zone.runOutsideAngular(() => {
            interval(1000)
                .pipe(tap(() => {
                const previousRgbColor = this.currentRgbColor;
                const currentRgbColor = this.getComputedBackgroundColor(1);
                if (previousRgbColor !== currentRgbColor) {
                    this.currentRgbColor = currentRgbColor;
                    this.colorSubject.next(currentRgbColor);
                }
            }))
                .subscribe();
        });
    }
    convertToRgba(rgbColor, opacity) {
        return rgbColor.replace(/rgb/i, 'rgba').replace(/\)/i, `,${opacity})`);
    }
    getComputedBackgroundColor(opacity) {
        const matAppBackground = document.getElementsByClassName('mat-app-background');
        const matSidenavContainer = document.getElementsByTagName('mat-sidenav-container');
        if (matAppBackground.length > 0) {
            return this.getComputedStyle(matAppBackground[0], 'background-color');
        }
        else if (matSidenavContainer.length > 0) {
            return this.getComputedStyle(matSidenavContainer[0], 'background-color');
        }
        else {
            return null;
        }
    }
    getComputedStyle(el, property) {
        return window.getComputedStyle(el, null).getPropertyValue(property);
    }
};
StyleService.ctorParameters = () => [
    { type: NgZone }
];
StyleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StyleService_Factory() { return new StyleService(i0.ɵɵinject(i0.NgZone)); }, token: StyleService, providedIn: "root" });
StyleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StyleService);
export { StyleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3N0eWxlLXNlcnZpY2Uvc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFhLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLOUUsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUl2QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUZ4QixpQkFBWSxHQUEwQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFFcEMsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDMUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUN2QixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDO2lCQUNYLElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNQLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDOUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUN6QztZQUNILENBQUMsQ0FBQyxDQUNIO2lCQUNBLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLGFBQWEsQ0FBQyxRQUFnQixFQUFFLE9BQWU7UUFDcEQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sMEJBQTBCLENBQUMsT0FBZTtRQUNoRCxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FDdEQsb0JBQW9CLENBQ3JCLENBQUM7UUFDRixNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FDdkQsdUJBQXVCLENBQ3hCLENBQUM7UUFFRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN2RTthQUFNLElBQUksbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEVBQU8sRUFBRSxRQUFnQjtRQUNoRCxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztDQUNGLENBQUE7O1lBbEQyQixNQUFNOzs7QUFKckIsWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQXNEeEI7U0F0RFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIFJlcGxheVN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZVNlcnZpY2Uge1xuICBwcml2YXRlIGN1cnJlbnRSZ2JDb2xvcjogc3RyaW5nO1xuICBwcml2YXRlIGNvbG9yU3ViamVjdDogUmVwbGF5U3ViamVjdDxzdHJpbmc+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBnZXQgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb2xvclN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbHRlcihjID0+IGMgIT09IG51bGwpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpbnRlcnZhbCgxMDAwKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNSZ2JDb2xvciA9IHRoaXMuY3VycmVudFJnYkNvbG9yO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFJnYkNvbG9yID0gdGhpcy5nZXRDb21wdXRlZEJhY2tncm91bmRDb2xvcigxKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1JnYkNvbG9yICE9PSBjdXJyZW50UmdiQ29sb3IpIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmdiQ29sb3IgPSBjdXJyZW50UmdiQ29sb3I7XG4gICAgICAgICAgICAgIHRoaXMuY29sb3JTdWJqZWN0Lm5leHQoY3VycmVudFJnYkNvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb252ZXJ0VG9SZ2JhKHJnYkNvbG9yOiBzdHJpbmcsIG9wYWNpdHk6IG51bWJlcikge1xuICAgIHJldHVybiByZ2JDb2xvci5yZXBsYWNlKC9yZ2IvaSwgJ3JnYmEnKS5yZXBsYWNlKC9cXCkvaSwgYCwke29wYWNpdHl9KWApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wdXRlZEJhY2tncm91bmRDb2xvcihvcGFjaXR5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdEFwcEJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ21hdC1hcHAtYmFja2dyb3VuZCdcbiAgICApO1xuICAgIGNvbnN0IG1hdFNpZGVuYXZDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdtYXQtc2lkZW5hdi1jb250YWluZXInXG4gICAgKTtcblxuICAgIGlmIChtYXRBcHBCYWNrZ3JvdW5kLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmdldENvbXB1dGVkU3R5bGUobWF0QXBwQmFja2dyb3VuZFswXSwgJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICB9IGVsc2UgaWYgKG1hdFNpZGVuYXZDb250YWluZXIubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcHV0ZWRTdHlsZShtYXRTaWRlbmF2Q29udGFpbmVyWzBdLCAnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXB1dGVkU3R5bGUoZWw6IGFueSwgcHJvcGVydHk6IHN0cmluZykge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSk7XG4gIH1cbn1cbiJdfQ==