import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, BehaviorSubject, throwError } from 'rxjs';
import { distinctUntilChanged, finalize } from 'rxjs/operators';
import { SearchResultBuilder } from './../builders/search-result.builder';
import { SearchResult } from './../models/search-result';
var IiifContentSearchService = /** @class */ (function () {
    function IiifContentSearchService(http) {
        this.http = http;
        this._currentSearchResult = new BehaviorSubject(new SearchResult({}));
        this._searching = new BehaviorSubject(false);
        this._currentQ = new Subject();
        this._selected = new BehaviorSubject(null);
    }
    IiifContentSearchService.prototype.destroy = function () {
        this._currentSearchResult.next(new SearchResult({}));
        this._selected.next(null);
    };
    Object.defineProperty(IiifContentSearchService.prototype, "onQChange", {
        get: function () {
            return this._currentQ.asObservable().pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IiifContentSearchService.prototype, "onChange", {
        get: function () {
            return this._currentSearchResult.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IiifContentSearchService.prototype, "isSearching", {
        get: function () {
            return this._searching.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IiifContentSearchService.prototype, "onSelected", {
        get: function () {
            return this._selected.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    IiifContentSearchService.prototype.search = function (manifest, q) {
        var _this = this;
        this._currentQ.next(q);
        this._selected.next(null);
        if (q.length === 0) {
            this._currentSearchResult.next(new SearchResult());
            return;
        }
        if (!manifest.service || manifest.service === null) {
            return;
        }
        this._searching.next(true);
        this.http
            .get(manifest.service.id + "?q=" + q)
            .pipe(finalize(function () { return _this._searching.next(false); }))
            .subscribe(function (res) {
            return _this._currentSearchResult.next(_this.extractData(q, manifest, res));
        }, function (err) { return _this.handleError; });
    };
    IiifContentSearchService.prototype.selected = function (hit) {
        this._selected.next(hit);
    };
    IiifContentSearchService.prototype.extractData = function (q, manifest, iiifSearchResult) {
        return new SearchResultBuilder(q, manifest, iiifSearchResult).build();
    };
    IiifContentSearchService.prototype.handleError = function (err) {
        var errMsg;
        if (err.error instanceof Error) {
            errMsg = err.error.message;
        }
        else {
            errMsg = err.error;
        }
        return throwError(errMsg);
    };
    IiifContentSearchService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    IiifContentSearchService = __decorate([
        Injectable()
    ], IiifContentSearchService);
    return IiifContentSearchService;
}());
export { IiifContentSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvaWlpZi1jb250ZW50LXNlYXJjaC1zZXJ2aWNlL2lpaWYtY29udGVudC1zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckUsT0FBTyxFQUFjLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLekQ7SUFRRSxrQ0FBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVAxQix5QkFBb0IsR0FBMEIsSUFBSSxlQUFlLENBRXpFLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDZCxlQUFVLEdBQXFCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ25FLGNBQVMsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNuRCxjQUFTLEdBQWlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBRTVCLENBQUM7SUFFeEMsMENBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJ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ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBJaWlmU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi8uLi9tb2RlbHMvaWlpZi1zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdEJ1aWxkZXIgfSBmcm9tICcuLy4uL2J1aWxkZXJzL3NlYXJjaC1yZXN1bHQuYnVpbGRlcic7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLy4uL21vZGVscy9zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IEhpdCB9IGZyb20gJy4vLi4vbW9kZWxzL2hpdCc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4vLi4vbW9kZWxzL21hbmlmZXN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElpaWZDb250ZW50U2VhcmNoU2VydmljZSB7XG4gIHByb3RlY3RlZCBfY3VycmVudFNlYXJjaFJlc3VsdDogU3ViamVjdDxTZWFyY2hSZXN1bHQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcbiAgICBTZWFyY2hSZXN1bHRcbiAgPihuZXcgU2VhcmNoUmVzdWx0KHt9KSk7XG4gIHByb3RlY3RlZCBfc2VhcmNoaW5nOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHByb3RlY3RlZCBfY3VycmVudFE6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJvdGVjdGVkIF9zZWxlY3RlZDogU3ViamVjdDxIaXQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIaXQ+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX2N1cnJlbnRTZWFyY2hSZXN1bHQubmV4dChuZXcgU2VhcmNoUmVzdWx0KHt9KSk7XG4gICAgdGhpcy5fc2VsZWN0ZWQubmV4dChudWxsKTtcbiAgfVxuXG4gIGdldCBvblFDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFEuYXNPYnNlcnZhYmxlKCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgfVxuXG4gIGdldCBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50U2VhcmNoUmVzdWx0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGlzU2VhcmNoaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hpbmcuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgb25TZWxlY3RlZCgpOiBPYnNlcnZhYmxlPEhpdD4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2gobWFuaWZlc3Q6IE1hbmlmZXN0LCBxOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50US5uZXh0KHEpO1xuICAgIHRoaXMuX3NlbGVjdGVkLm5leHQobnVsbCk7XG4gICAgaWYgKHEubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9jdXJyZW50U2VhcmNoUmVzdWx0Lm5leHQobmV3IFNlYXJjaFJlc3VsdCgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFtYW5pZmVzdC5zZXJ2aWNlIHx8IG1hbmlmZXN0LnNlcnZpY2UgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VhcmNoaW5nLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke21hbmlmZXN0LnNlcnZpY2UuaWR9P3E9JHtxfWApXG4gICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiB0aGlzLl9zZWFyY2hpbmcubmV4dChmYWxzZSkpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogSWlpZlNlYXJjaFJlc3VsdCkgPT5cbiAgICAgICAgICB0aGlzLl9jdXJyZW50U2VhcmNoUmVzdWx0Lm5leHQodGhpcy5leHRyYWN0RGF0YShxLCBtYW5pZmVzdCwgcmVzKSksXG4gICAgICAgIChlcnI6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLmhhbmRsZUVycm9yXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkKGhpdDogSGl0KSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQubmV4dChoaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0RGF0YShcbiAgICBxOiBzdHJpbmcsXG4gICAgbWFuaWZlc3Q6IE1hbmlmZXN0LFxuICAgIGlpaWZTZWFyY2hSZXN1bHQ6IElpaWZTZWFyY2hSZXN1bHRcbiAgKTogU2VhcmNoUmVzdWx0IHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFJlc3VsdEJ1aWxkZXIocSwgbWFuaWZlc3QsIGlpaWZTZWFyY2hSZXN1bHQpLmJ1aWxkKCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycjogSHR0cEVycm9yUmVzcG9uc2UgfCBhbnkpIHtcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XG4gICAgaWYgKGVyci5lcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBlcnJNc2cgPSBlcnIuZXJyb3IubWVzc2FnZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnID0gZXJyLmVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJNc2cpO1xuICB9XG59XG4iXX0=