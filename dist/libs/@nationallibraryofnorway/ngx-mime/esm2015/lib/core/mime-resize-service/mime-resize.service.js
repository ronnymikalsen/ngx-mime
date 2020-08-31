import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MimeDomHelper } from '../mime-dom-helper';
import { Dimensions } from '../models/dimensions';
let MimeResizeService = class MimeResizeService {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
        this.resizeSubject = new ReplaySubject();
        this.dimensions = new Dimensions();
    }
    set el(el) {
        this._el = el;
    }
    get el() {
        return this._el;
    }
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    markForCheck() {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        if (this.dimensions.bottom !== dimensions.bottom ||
            this.dimensions.height !== dimensions.height ||
            this.dimensions.left !== dimensions.left ||
            this.dimensions.right !== dimensions.right ||
            this.dimensions.top !== dimensions.top ||
            this.dimensions.width !== dimensions.width) {
            this.dimensions = dimensions;
            this.resizeSubject.next(Object.assign({}, this.dimensions));
        }
    }
};
MimeResizeService.ctorParameters = () => [
    { type: MimeDomHelper }
];
MimeResizeService = __decorate([
    Injectable()
], MimeResizeService);
export { MimeResizeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZS1yZXNpemUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFLNUIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFIeEMsa0JBQWEsR0FBOEIsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUMvRCxlQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUVhLENBQUM7SUFFcEQsSUFBSSxFQUFFLENBQUMsRUFBYztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELFlBQVk7UUFDVixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRSxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxNQUFNO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxNQUFNO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxLQUFLO1lBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQyxHQUFHO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxLQUFLLEVBQzFDO1lBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLG1CQUFNLElBQUksQ0FBQyxVQUFVLEVBQUcsQ0FBQztTQUNqRDtJQUNILENBQUM7Q0FDRixDQUFBOztZQTdCb0MsYUFBYTs7QUFMckMsaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTtHQUNBLGlCQUFpQixDQWtDN0I7U0FsQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNaW1lRG9tSGVscGVyIH0gZnJvbSAnLi4vbWltZS1kb20taGVscGVyJztcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi9tb2RlbHMvZGltZW5zaW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaW1lUmVzaXplU2VydmljZSB7XG4gIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHJlc2l6ZVN1YmplY3Q6IFJlcGxheVN1YmplY3Q8RGltZW5zaW9ucz4gPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xuICBwcml2YXRlIGRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucygpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWltZURvbUhlbHBlcjogTWltZURvbUhlbHBlcikge31cblxuICBzZXQgZWwoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9lbCA9IGVsO1xuICB9XG5cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiB0aGlzLl9lbDtcbiAgfVxuXG4gIGdldCBvblJlc2l6ZSgpOiBPYnNlcnZhYmxlPERpbWVuc2lvbnM+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNpemVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLm1pbWVEb21IZWxwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRoaXMuZWwpO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5kaW1lbnNpb25zLmJvdHRvbSAhPT0gZGltZW5zaW9ucy5ib3R0b20gfHxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgIT09IGRpbWVuc2lvbnMuaGVpZ2h0IHx8XG4gICAgICB0aGlzLmRpbWVuc2lvbnMubGVmdCAhPT0gZGltZW5zaW9ucy5sZWZ0IHx8XG4gICAgICB0aGlzLmRpbWVuc2lvbnMucmlnaHQgIT09IGRpbWVuc2lvbnMucmlnaHQgfHxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy50b3AgIT09IGRpbWVuc2lvbnMudG9wIHx8XG4gICAgICB0aGlzLmRpbWVuc2lvbnMud2lkdGggIT09IGRpbWVuc2lvbnMud2lkdGhcbiAgICApIHtcbiAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICB0aGlzLnJlc2l6ZVN1YmplY3QubmV4dCh7IC4uLnRoaXMuZGltZW5zaW9ucyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==