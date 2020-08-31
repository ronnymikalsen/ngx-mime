import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ModeChanges } from '../models/modeChanges';
import { ViewerMode } from '../models/viewer-mode';
var ModeService = /** @class */ (function () {
    function ModeService() {
        this.toggleModeSubject = new ReplaySubject();
        this.modeChanges = new ModeChanges();
    }
    Object.defineProperty(ModeService.prototype, "onChange", {
        get: function () {
            return this.toggleModeSubject.asObservable().pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModeService.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (mode) {
            this._mode = mode;
            this.change();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModeService.prototype, "initialMode", {
        get: function () {
            return this._initialMode;
        },
        set: function (mode) {
            this._initialMode = mode;
            this.mode = mode;
        },
        enumerable: true,
        configurable: true
    });
    ModeService.prototype.toggleMode = function () {
        if (this.mode === ViewerMode.DASHBOARD) {
            this.mode = ViewerMode.PAGE;
        }
        else if (this.mode === ViewerMode.PAGE ||
            this.mode === ViewerMode.PAGE_ZOOMED) {
            this.mode = ViewerMode.DASHBOARD;
        }
    };
    ModeService.prototype.change = function () {
        this.modeChanges.previousValue = this.modeChanges.currentValue;
        this.modeChanges.currentValue = this._mode;
        this.toggleModeSubject.next(__assign({}, this.modeChanges));
    };
    ModeService = __decorate([
        Injectable()
    ], ModeService);
    return ModeService;
}());
export { ModeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbW9kZS1zZXJ2aWNlL21vZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHbkQ7SUFNRTtRQUhRLHNCQUFpQixHQUErQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3BFLGdCQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUV6QixDQUFDO0lBRWhCLHNCQUFJLGlDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQUk7YUFLUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBUEQsVUFBUyxJQUFnQjtZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxvQ0FBVzthQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7YUFQRCxVQUFnQixJQUFnQjtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQU1ELGdDQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDN0I7YUFBTSxJQUNMLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUk7WUFDN0IsSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVyxFQUNwQztZQUNBLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTyw0QkFBTSxHQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxjQUN0QixJQUFJLENBQUMsV0FBVyxFQUNuQixDQUFDO0lBQ0wsQ0FBQztJQS9DVSxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVcsQ0FnRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWhEWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNb2RlQ2hhbmdlcyB9IGZyb20gJy4uL21vZGVscy9tb2RlQ2hhbmdlcyc7XG5pbXBvcnQgeyBWaWV3ZXJNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1tb2RlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vZGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfaW5pdGlhbE1vZGU6IFZpZXdlck1vZGU7XG4gIHByaXZhdGUgX21vZGU6IFZpZXdlck1vZGU7XG4gIHByaXZhdGUgdG9nZ2xlTW9kZVN1YmplY3Q6IFJlcGxheVN1YmplY3Q8TW9kZUNoYW5nZXM+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcbiAgcHJpdmF0ZSBtb2RlQ2hhbmdlcyA9IG5ldyBNb2RlQ2hhbmdlcygpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXQgb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxNb2RlQ2hhbmdlcz4ge1xuICAgIHJldHVybiB0aGlzLnRvZ2dsZU1vZGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gIH1cblxuICBzZXQgbW9kZShtb2RlOiBWaWV3ZXJNb2RlKSB7XG4gICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgdGhpcy5jaGFuZ2UoKTtcbiAgfVxuXG4gIGdldCBtb2RlKCk6IFZpZXdlck1vZGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgc2V0IGluaXRpYWxNb2RlKG1vZGU6IFZpZXdlck1vZGUpIHtcbiAgICB0aGlzLl9pbml0aWFsTW9kZSA9IG1vZGU7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgfVxuXG4gIGdldCBpbml0aWFsTW9kZSgpOiBWaWV3ZXJNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5faW5pdGlhbE1vZGU7XG4gIH1cblxuICB0b2dnbGVNb2RlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09IFZpZXdlck1vZGUuREFTSEJPQVJEKSB7XG4gICAgICB0aGlzLm1vZGUgPSBWaWV3ZXJNb2RlLlBBR0U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFIHx8XG4gICAgICB0aGlzLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRURcbiAgICApIHtcbiAgICAgIHRoaXMubW9kZSA9IFZpZXdlck1vZGUuREFTSEJPQVJEO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlKCkge1xuICAgIHRoaXMubW9kZUNoYW5nZXMucHJldmlvdXNWYWx1ZSA9IHRoaXMubW9kZUNoYW5nZXMuY3VycmVudFZhbHVlO1xuICAgIHRoaXMubW9kZUNoYW5nZXMuY3VycmVudFZhbHVlID0gdGhpcy5fbW9kZTtcbiAgICB0aGlzLnRvZ2dsZU1vZGVTdWJqZWN0Lm5leHQoe1xuICAgICAgLi4udGhpcy5tb2RlQ2hhbmdlc1xuICAgIH0pO1xuICB9XG59XG4iXX0=