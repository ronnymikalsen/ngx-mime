import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MimeViewerConfig } from '../mime-viewer-config';
import { ViewerLayout } from '../models/viewer-layout';
var ViewerLayoutService = /** @class */ (function () {
    function ViewerLayoutService(mediaObserver) {
        this.mediaObserver = mediaObserver;
        this.mimeConfig = new MimeViewerConfig();
        this.subject = new BehaviorSubject(this.mimeConfig.initViewerLayout);
    }
    ViewerLayoutService.prototype.init = function (isPagedManifest) {
        if (this.mimeConfig.initViewerLayout === ViewerLayout.TWO_PAGE &&
            isPagedManifest &&
            !this.isMobile()) {
            this._layout = ViewerLayout.TWO_PAGE;
            this.change();
        }
        else {
            this._layout = ViewerLayout.ONE_PAGE;
            this.change();
        }
    };
    Object.defineProperty(ViewerLayoutService.prototype, "onChange", {
        get: function () {
            return this.subject.asObservable().pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerLayoutService.prototype, "layout", {
        get: function () {
            return this._layout;
        },
        enumerable: true,
        configurable: true
    });
    ViewerLayoutService.prototype.setLayout = function (viewerLayout) {
        this._layout = viewerLayout;
        this.change();
    };
    ViewerLayoutService.prototype.toggle = function () {
        if (this._layout === ViewerLayout.TWO_PAGE) {
            this.setLayout(ViewerLayout.ONE_PAGE);
        }
        else if (this._layout === ViewerLayout.ONE_PAGE) {
            this.setLayout(ViewerLayout.TWO_PAGE);
        }
    };
    ViewerLayoutService.prototype.change = function () {
        this.subject.next(this._layout);
    };
    ViewerLayoutService.prototype.isMobile = function () {
        return this.mediaObserver.isActive('lt-md');
    };
    ViewerLayoutService.ctorParameters = function () { return [
        { type: MediaObserver }
    ]; };
    ViewerLayoutService = __decorate([
        Injectable()
    ], ViewerLayoutService);
    return ViewerLayoutService;
}());
export { ViewerLayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWxheW91dC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdmlld2VyLWxheW91dC1zZXJ2aWNlL3ZpZXdlci1sYXlvdXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHdkQ7SUFNRSw2QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMeEMsZUFBVSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVwQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUVsRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDZSxDQUFDO0lBRXBELGtDQUFJLEdBQUosVUFBSyxlQUF5QjtRQUM1QixJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEtBQUssWUFBWSxDQUFDLFFBQVE7WUFDMUQsZUFBZTtZQUNmLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNoQjtZQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELHNCQUFJLHlDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUNsRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCx1Q0FBUyxHQUFULFVBQVUsWUFBMEI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFTyxvQ0FBTSxHQUFkO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyxzQ0FBUSxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBM0NrQyxhQUFhOztJQU5yQyxtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1CLENBa0QvQjtJQUFELDBCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FsRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNaW1lVmlld2VyQ29uZmlnIH0gZnJvbSAnLi4vbWltZS12aWV3ZXItY29uZmlnJztcbmltcG9ydCB7IFZpZXdlckxheW91dCB9IGZyb20gJy4uL21vZGVscy92aWV3ZXItbGF5b3V0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdlckxheW91dFNlcnZpY2Uge1xuICBwcml2YXRlIG1pbWVDb25maWcgPSBuZXcgTWltZVZpZXdlckNvbmZpZygpO1xuICBwcml2YXRlIF9sYXlvdXQ6IFZpZXdlckxheW91dDtcbiAgcHJpdmF0ZSBzdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8Vmlld2VyTGF5b3V0PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgVmlld2VyTGF5b3V0XG4gID4odGhpcy5taW1lQ29uZmlnLmluaXRWaWV3ZXJMYXlvdXQpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhT2JzZXJ2ZXI6IE1lZGlhT2JzZXJ2ZXIpIHt9XG5cbiAgaW5pdChpc1BhZ2VkTWFuaWZlc3Q/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5taW1lQ29uZmlnLmluaXRWaWV3ZXJMYXlvdXQgPT09IFZpZXdlckxheW91dC5UV09fUEFHRSAmJlxuICAgICAgaXNQYWdlZE1hbmlmZXN0ICYmXG4gICAgICAhdGhpcy5pc01vYmlsZSgpXG4gICAgKSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBWaWV3ZXJMYXlvdXQuVFdPX1BBR0U7XG4gICAgICB0aGlzLmNoYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBWaWV3ZXJMYXlvdXQuT05FX1BBR0U7XG4gICAgICB0aGlzLmNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPFZpZXdlckxheW91dD4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogVmlld2VyTGF5b3V0IHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xuICB9XG5cbiAgc2V0TGF5b3V0KHZpZXdlckxheW91dDogVmlld2VyTGF5b3V0KSB7XG4gICAgdGhpcy5fbGF5b3V0ID0gdmlld2VyTGF5b3V0O1xuICAgIHRoaXMuY2hhbmdlKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2xheW91dCA9PT0gVmlld2VyTGF5b3V0LlRXT19QQUdFKSB7XG4gICAgICB0aGlzLnNldExheW91dChWaWV3ZXJMYXlvdXQuT05FX1BBR0UpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbGF5b3V0ID09PSBWaWV3ZXJMYXlvdXQuT05FX1BBR0UpIHtcbiAgICAgIHRoaXMuc2V0TGF5b3V0KFZpZXdlckxheW91dC5UV09fUEFHRSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2UoKSB7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy5fbGF5b3V0KTtcbiAgfVxuXG4gIHByaXZhdGUgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFPYnNlcnZlci5pc0FjdGl2ZSgnbHQtbWQnKTtcbiAgfVxufVxuIl19