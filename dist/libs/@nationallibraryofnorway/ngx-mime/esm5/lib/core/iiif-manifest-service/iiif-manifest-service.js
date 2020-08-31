import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged, finalize } from 'rxjs/operators';
import { ManifestBuilder } from '../builders/manifest.builder';
import { SpinnerService } from '../spinner-service/spinner.service';
import { MimeViewerIntl } from '../intl/viewer-intl';
var IiifManifestService = /** @class */ (function () {
    function IiifManifestService(intl, http, spinnerService) {
        this.intl = intl;
        this.http = http;
        this.spinnerService = spinnerService;
        this._currentManifest = new BehaviorSubject(null);
        this._errorMessage = new BehaviorSubject(null);
    }
    Object.defineProperty(IiifManifestService.prototype, "currentManifest", {
        get: function () {
            return this._currentManifest.asObservable().pipe(filter(function (m) { return m !== null; }), distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IiifManifestService.prototype, "errorMessage", {
        get: function () {
            return this._errorMessage.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    IiifManifestService.prototype.load = function (manifestUri) {
        var _this = this;
        if (manifestUri === null) {
            this._errorMessage.next(this.intl.manifestUriMissingLabel);
        }
        else {
            this.spinnerService.show();
            this.http
                .get(manifestUri)
                .pipe(finalize(function () { return _this.spinnerService.hide(); }))
                .subscribe(function (response) {
                var manifest = _this.extractData(response);
                if (_this.isManifestValid(manifest)) {
                    _this._currentManifest.next(manifest);
                }
                else {
                    _this._errorMessage.next(_this.intl.manifestNotValidLabel);
                }
            }, function (err) {
                _this._errorMessage.next(_this.handleError(err));
            });
        }
    };
    IiifManifestService.prototype.destroy = function () {
        this.resetCurrentManifest();
        this.resetErrorMessage();
    };
    IiifManifestService.prototype.resetCurrentManifest = function () {
        this._currentManifest.next(null);
    };
    IiifManifestService.prototype.resetErrorMessage = function () {
        this._errorMessage.next(null);
    };
    IiifManifestService.prototype.extractData = function (response) {
        return new ManifestBuilder(response).build();
    };
    IiifManifestService.prototype.isManifestValid = function (manifest) {
        return manifest && manifest.tileSource && manifest.tileSource.length > 0;
    };
    IiifManifestService.prototype.handleError = function (err) {
        var errMsg;
        if (err.error instanceof Object) {
            errMsg = err.message;
        }
        else {
            errMsg = err.error;
        }
        return errMsg;
    };
    IiifManifestService.ctorParameters = function () { return [
        { type: MimeViewerIntl },
        { type: HttpClient },
        { type: SpinnerService }
    ]; };
    IiifManifestService = __decorate([
        Injectable()
    ], IiifManifestService);
    return IiifManifestService;
}());
export { IiifManifestService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlpZi1tYW5pZmVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckUsT0FBTyxFQUF1QixlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdyRDtJQU1FLDZCQUNTLElBQW9CLEVBQ25CLElBQWdCLEVBQ2hCLGNBQThCO1FBRi9CLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUjlCLHFCQUFnQixHQUFzQixJQUFJLGVBQWUsQ0FDakUsSUFBSSxDQUNMLENBQUM7UUFDUSxrQkFBYSxHQUFvQixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQU1sRSxDQUFDO0lBRUosc0JBQUksZ0RBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzlDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLEVBQ3ZCLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsa0NBQUksR0FBSixVQUFLLFdBQW1CO1FBQXhCLGlCQXNCQztRQXJCQyxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJO2lCQUNOLEdBQUcsQ0FBQyxXQUFXLENBQUM7aUJBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUMsQ0FBQztpQkFDaEQsU0FBUyxDQUNSLFVBQUMsUUFBa0I7Z0JBQ2pCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDbEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUMxRDtZQUNILENBQUMsRUFDRCxVQUFDLEdBQXNCO2dCQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUNGLENBQUM7U0FDTDtJQUNILENBQUM7SUFFRCxxQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGtEQUFvQixHQUE1QjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLCtDQUFpQixHQUF6QjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyx5Q0FBVyxHQUFuQixVQUFvQixRQUFrQjtRQUNwQyxPQUFPLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTyw2Q0FBZSxHQUF2QixVQUF3QixRQUFrQjtRQUN4QyxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU8seUNBQVcsR0FBbkIsVUFBb0IsR0FBc0I7UUFDeEMsSUFBSSxNQUFjLENBQUM7UUFDbkIsSUFBSSxHQUFHLENBQUMsS0FBSyxZQUFZLE1BQU0sRUFBRTtZQUMvQixNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUN0QjthQUFNO1lBQ0wsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDcEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFyRWMsY0FBYztnQkFDYixVQUFVO2dCQUNBLGNBQWM7O0lBVDdCLG1CQUFtQjtRQUQvQixVQUFVLEVBQUU7T0FDQSxtQkFBbUIsQ0E2RS9CO0lBQUQsMEJBQUM7Q0FBQSxBQTdFRCxJQTZFQztTQTdFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IE1hbmlmZXN0QnVpbGRlciB9IGZyb20gJy4uL2J1aWxkZXJzL21hbmlmZXN0LmJ1aWxkZXInO1xuaW1wb3J0IHsgU3Bpbm5lclNlcnZpY2UgfSBmcm9tICcuLi9zcGlubmVyLXNlcnZpY2Uvc3Bpbm5lci5zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vaW50bC92aWV3ZXItaW50bCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJaWlmTWFuaWZlc3RTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIF9jdXJyZW50TWFuaWZlc3Q6IFN1YmplY3Q8TWFuaWZlc3Q+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNYW5pZmVzdD4oXG4gICAgbnVsbFxuICApO1xuICBwcm90ZWN0ZWQgX2Vycm9yTWVzc2FnZTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW50bDogTWltZVZpZXdlckludGwsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgc3Bpbm5lclNlcnZpY2U6IFNwaW5uZXJTZXJ2aWNlXG4gICkge31cblxuICBnZXQgY3VycmVudE1hbmlmZXN0KCk6IE9ic2VydmFibGU8TWFuaWZlc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE1hbmlmZXN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIobSA9PiBtICE9PSBudWxsKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9lcnJvck1lc3NhZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBsb2FkKG1hbmlmZXN0VXJpOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobWFuaWZlc3RVcmkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yTWVzc2FnZS5uZXh0KHRoaXMuaW50bC5tYW5pZmVzdFVyaU1pc3NpbmdMYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Bpbm5lclNlcnZpY2Uuc2hvdygpO1xuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5nZXQobWFuaWZlc3RVcmkpXG4gICAgICAgIC5waXBlKGZpbmFsaXplKCgpID0+IHRoaXMuc3Bpbm5lclNlcnZpY2UuaGlkZSgpKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdCA9IHRoaXMuZXh0cmFjdERhdGEocmVzcG9uc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYW5pZmVzdFZhbGlkKG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50TWFuaWZlc3QubmV4dChtYW5pZmVzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2UubmV4dCh0aGlzLmludGwubWFuaWZlc3ROb3RWYWxpZExhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2UubmV4dCh0aGlzLmhhbmRsZUVycm9yKGVycikpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMucmVzZXRDdXJyZW50TWFuaWZlc3QoKTtcbiAgICB0aGlzLnJlc2V0RXJyb3JNZXNzYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0Q3VycmVudE1hbmlmZXN0KCkge1xuICAgIHRoaXMuX2N1cnJlbnRNYW5pZmVzdC5uZXh0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEVycm9yTWVzc2FnZSgpIHtcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2UubmV4dChudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIG5ldyBNYW5pZmVzdEJ1aWxkZXIocmVzcG9uc2UpLmJ1aWxkKCk7XG4gIH1cblxuICBwcml2YXRlIGlzTWFuaWZlc3RWYWxpZChtYW5pZmVzdDogTWFuaWZlc3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWFuaWZlc3QgJiYgbWFuaWZlc3QudGlsZVNvdXJjZSAmJiBtYW5pZmVzdC50aWxlU291cmNlLmxlbmd0aCA+IDA7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycjogSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xuICAgIGxldCBlcnJNc2c6IHN0cmluZztcbiAgICBpZiAoZXJyLmVycm9yIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICBlcnJNc2cgPSBlcnIubWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnID0gZXJyLmVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gZXJyTXNnO1xuICB9XG59XG4iXX0=