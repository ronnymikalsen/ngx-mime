import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanvasService } from '../../canvas-service/canvas-service';
import { IiifContentSearchService } from '../../iiif-content-search-service/iiif-content-search.service';
var ContentSearchNavigationService = /** @class */ (function () {
    function ContentSearchNavigationService(canvasService, iiifContentSearchService) {
        var _this = this;
        this.canvasService = canvasService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.currentIndex = 0;
        this.isHitOnActiveCanvasGroup = false;
        this._isFirstHitOnCanvasGroup = false;
        this._isLastHitOnCanvasGroup = false;
        this.canvasesPerCanvasGroup = [-1];
        this.iiifContentSearchService.onChange.subscribe(function (result) {
            _this.searchResult = result;
        });
    }
    ContentSearchNavigationService.prototype.update = function (canvasGroupIndex) {
        this.canvasesPerCanvasGroup = this.canvasService.getCanvasesPerCanvasGroup(canvasGroupIndex);
        this.currentIndex = this.findCurrentHitIndex(this.canvasesPerCanvasGroup);
        this.isHitOnActiveCanvasGroup = this.findHitOnActiveCanvasGroup();
        this._isFirstHitOnCanvasGroup = this.isFirstHitOnCanvasGroup();
        this._isLastHitOnCanvasGroup = this.findLastHitOnCanvasGroup();
    };
    ContentSearchNavigationService.prototype.getCurrentIndex = function () {
        return this.currentIndex;
    };
    ContentSearchNavigationService.prototype.getHitOnActiveCanvasGroup = function () {
        return this.isHitOnActiveCanvasGroup;
    };
    ContentSearchNavigationService.prototype.getFirstHitCanvasGroup = function () {
        return this._isFirstHitOnCanvasGroup;
    };
    ContentSearchNavigationService.prototype.getLastHitCanvasGroup = function () {
        return this._isLastHitOnCanvasGroup;
    };
    ContentSearchNavigationService.prototype.goToNextCanvasGroupHit = function () {
        if (!this._isLastHitOnCanvasGroup) {
            var nextHit = void 0;
            if (this.currentIndex === -1) {
                nextHit = this.searchResult.get(0);
            }
            else {
                var current = this.searchResult.get(this.currentIndex);
                var canvasGroup = this.canvasService.findCanvasGroupByCanvasIndex(current.index);
                var canvasesPerCanvasGroup = this.canvasService.getCanvasesPerCanvasGroup(canvasGroup);
                var lastCanvasGroupIndex_1 = this.getLastCanvasGroupIndex(canvasesPerCanvasGroup);
                nextHit = this.searchResult.hits.find(function (h) { return h.index > lastCanvasGroupIndex_1; });
            }
            if (nextHit) {
                this.goToCanvasIndex(nextHit);
            }
        }
    };
    ContentSearchNavigationService.prototype.goToPreviousCanvasGroupHit = function () {
        var previousIndex = this.isHitOnActiveCanvasGroup
            ? this.currentIndex - 1
            : this.currentIndex;
        var previousHit = this.findFirstHitOnCanvasGroup(previousIndex);
        this.goToCanvasIndex(previousHit);
    };
    ContentSearchNavigationService.prototype.goToCanvasIndex = function (hit) {
        this.currentIndex = this.findCurrentHitIndex([hit.index]);
        this.iiifContentSearchService.selected(hit);
    };
    ContentSearchNavigationService.prototype.findLastHitOnCanvasGroup = function () {
        var lastCanvasIndex = this.searchResult.get(this.searchResult.size() - 1)
            .index;
        var currentHit = this.searchResult.get(this.currentIndex);
        return currentHit.index === lastCanvasIndex;
    };
    ContentSearchNavigationService.prototype.findFirstHitOnCanvasGroup = function (previousIndex) {
        var previousHit = this.searchResult.get(previousIndex);
        var canvasGroupIndex = this.canvasService.findCanvasGroupByCanvasIndex(previousHit.index);
        var canvasesPerCanvasGroup = this.canvasService.getCanvasesPerCanvasGroup(canvasGroupIndex);
        var leftCanvas = canvasesPerCanvasGroup[0];
        var leftCanvasHit = this.searchResult.hits.find(function (h) { return h.index === leftCanvas; });
        if (leftCanvasHit) {
            previousHit = leftCanvasHit;
        }
        else if (canvasesPerCanvasGroup.length === 2) {
            var rightCanvas_1 = canvasesPerCanvasGroup[1];
            previousHit = this.searchResult.hits.find(function (h) { return h.index === rightCanvas_1; });
        }
        return previousHit;
    };
    ContentSearchNavigationService.prototype.findHitOnActiveCanvasGroup = function () {
        return (this.canvasesPerCanvasGroup.indexOf(this.searchResult.get(this.currentIndex).index) >= 0);
    };
    ContentSearchNavigationService.prototype.findCurrentHitIndex = function (canvasGroupIndexes) {
        var _loop_1 = function (i) {
            var hit = this_1.searchResult.get(i);
            if (canvasGroupIndexes.indexOf(hit.index) >= 0) {
                return { value: i };
            }
            if (hit.index >= canvasGroupIndexes[canvasGroupIndexes.length - 1]) {
                if (i === 0) {
                    return { value: -1 };
                }
                else {
                    var phit_1 = this_1.searchResult.get(i - 1);
                    return { value: this_1.searchResult.hits.findIndex(function (sr) { return sr.index === phit_1.index; }) };
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.searchResult.size(); i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return this.searchResult.size() - 1;
    };
    ContentSearchNavigationService.prototype.isFirstHitOnCanvasGroup = function () {
        return this.currentIndex <= 0;
    };
    ContentSearchNavigationService.prototype.getLastCanvasGroupIndex = function (canvasesPerCanvasGroup) {
        return canvasesPerCanvasGroup.length === 1
            ? canvasesPerCanvasGroup[0]
            : canvasesPerCanvasGroup[1];
    };
    ContentSearchNavigationService.ctorParameters = function () { return [
        { type: CanvasService },
        { type: IiifContentSearchService }
    ]; };
    ContentSearchNavigationService = __decorate([
        Injectable()
    ], ContentSearchNavigationService);
    return ContentSearchNavigationService;
}());
export { ContentSearchNavigationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtbmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbmF2aWdhdGlvbi9jb250ZW50LXNlYXJjaC1uYXZpZ2F0aW9uLXNlcnZpY2UvY29udGVudC1zZWFyY2gtbmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUt6RztJQVFFLHdDQUNVLGFBQTRCLEVBQzVCLHdCQUFrRDtRQUY1RCxpQkFPQztRQU5TLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFUcEQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsNkJBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLDZCQUF3QixHQUFHLEtBQUssQ0FBQztRQUNqQyw0QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBT3BDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBb0I7WUFDcEUsS0FBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQU0sR0FBTixVQUFPLGdCQUF3QjtRQUM3QixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FDeEUsZ0JBQWdCLENBQ2pCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxt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QUM7WUFDM0IsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7O2dCQXpJd0IsYUFBYTtnQkFDRix3QkFBd0I7O0lBVmpELDhCQUE4QjtRQUQxQyxVQUFVLEVBQUU7T0FDQSw4QkFBOEIsQ0FtSjFDO0lBQUQscUNBQUM7Q0FBQSxBQW5KRCxJQW1KQztTQW5KWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZSc7XG5pbXBvcnQgeyBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi8uLi9paWlmLWNvbnRlbnQtc2VhcmNoLXNlcnZpY2UvaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVscy9zZWFyY2gtcmVzdWx0JztcbmltcG9ydCB7IEhpdCB9IGZyb20gJy4uLy4uL21vZGVscy9oaXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGVudFNlYXJjaE5hdmlnYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjdXJyZW50SW5kZXggPSAwO1xuICBwcml2YXRlIGlzSGl0T25BY3RpdmVDYW52YXNHcm91cCA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0ZpcnN0SGl0T25DYW52YXNHcm91cCA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0xhc3RIaXRPbkNhbnZhc0dyb3VwID0gZmFsc2U7XG4gIHByaXZhdGUgY2FudmFzZXNQZXJDYW52YXNHcm91cCA9IFstMV07XG4gIHByaXZhdGUgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlOiBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uub25DaGFuZ2Uuc3Vic2NyaWJlKChyZXN1bHQ6IFNlYXJjaFJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzR3JvdXBJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5jYW52YXNlc1BlckNhbnZhc0dyb3VwID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc2VzUGVyQ2FudmFzR3JvdXAoXG4gICAgICBjYW52YXNHcm91cEluZGV4XG4gICAgKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IHRoaXMuZmluZEN1cnJlbnRIaXRJbmRleCh0aGlzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXApO1xuICAgIHRoaXMuaXNIaXRPbkFjdGl2ZUNhbnZhc0dyb3VwID0gdGhpcy5maW5kSGl0T25BY3RpdmVDYW52YXNHcm91cCgpO1xuICAgIHRoaXMuX2lzRmlyc3RIaXRPbkNhbnZhc0dyb3VwID0gdGhpcy5pc0ZpcnN0SGl0T25DYW52YXNHcm91cCgpO1xuICAgIHRoaXMuX2lzTGFzdEhpdE9uQ2FudmFzR3JvdXAgPSB0aGlzLmZpbmRMYXN0SGl0T25DYW52YXNHcm91cCgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4O1xuICB9XG5cbiAgZ2V0SGl0T25BY3RpdmVDYW52YXNHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0hpdE9uQWN0aXZlQ2FudmFzR3JvdXA7XG4gIH1cblxuICBnZXRGaXJzdEhpdENhbnZhc0dyb3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0ZpcnN0SGl0T25DYW52YXNHcm91cDtcbiAgfVxuXG4gIGdldExhc3RIaXRDYW52YXNHcm91cCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNMYXN0SGl0T25DYW52YXNHcm91cDtcbiAgfVxuXG4gIGdvVG9OZXh0Q2FudmFzR3JvdXBIaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0xhc3RIaXRPbkNhbnZhc0dyb3VwKSB7XG4gICAgICBsZXQgbmV4dEhpdDogSGl0O1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICBuZXh0SGl0ID0gdGhpcy5zZWFyY2hSZXN1bHQuZ2V0KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuc2VhcmNoUmVzdWx0LmdldCh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgICAgIGNvbnN0IGNhbnZhc0dyb3VwID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDYW52YXNHcm91cEJ5Q2FudmFzSW5kZXgoXG4gICAgICAgICAgY3VycmVudC5pbmRleFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjYW52YXNlc1BlckNhbnZhc0dyb3VwID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc2VzUGVyQ2FudmFzR3JvdXAoXG4gICAgICAgICAgY2FudmFzR3JvdXBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbGFzdENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmdldExhc3RDYW52YXNHcm91cEluZGV4KFxuICAgICAgICAgIGNhbnZhc2VzUGVyQ2FudmFzR3JvdXBcbiAgICAgICAgKTtcbiAgICAgICAgbmV4dEhpdCA9IHRoaXMuc2VhcmNoUmVzdWx0LmhpdHMuZmluZChcbiAgICAgICAgICBoID0+IGguaW5kZXggPiBsYXN0Q2FudmFzR3JvdXBJbmRleFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRIaXQpIHtcbiAgICAgICAgdGhpcy5nb1RvQ2FudmFzSW5kZXgobmV4dEhpdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXBIaXQoKSB7XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuaXNIaXRPbkFjdGl2ZUNhbnZhc0dyb3VwXG4gICAgICA/IHRoaXMuY3VycmVudEluZGV4IC0gMVxuICAgICAgOiB0aGlzLmN1cnJlbnRJbmRleDtcbiAgICBjb25zdCBwcmV2aW91c0hpdCA9IHRoaXMuZmluZEZpcnN0SGl0T25DYW52YXNHcm91cChwcmV2aW91c0luZGV4KTtcbiAgICB0aGlzLmdvVG9DYW52YXNJbmRleChwcmV2aW91c0hpdCk7XG4gIH1cblxuICBwcml2YXRlIGdvVG9DYW52YXNJbmRleChoaXQ6IEhpdCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudEluZGV4ID0gdGhpcy5maW5kQ3VycmVudEhpdEluZGV4KFtoaXQuaW5kZXhdKTtcbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5zZWxlY3RlZChoaXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTGFzdEhpdE9uQ2FudmFzR3JvdXAoKSB7XG4gICAgY29uc3QgbGFzdENhbnZhc0luZGV4ID0gdGhpcy5zZWFyY2hSZXN1bHQuZ2V0KHRoaXMuc2VhcmNoUmVzdWx0LnNpemUoKSAtIDEpXG4gICAgICAuaW5kZXg7XG4gICAgY29uc3QgY3VycmVudEhpdCA9IHRoaXMuc2VhcmNoUmVzdWx0LmdldCh0aGlzLmN1cnJlbnRJbmRleCk7XG4gICAgcmV0dXJuIGN1cnJlbnRIaXQuaW5kZXggPT09IGxhc3RDYW52YXNJbmRleDtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEZpcnN0SGl0T25DYW52YXNHcm91cChwcmV2aW91c0luZGV4OiBudW1iZXIpOiBIaXQge1xuICAgIGxldCBwcmV2aW91c0hpdCA9IHRoaXMuc2VhcmNoUmVzdWx0LmdldChwcmV2aW91c0luZGV4KTtcbiAgICBjb25zdCBjYW52YXNHcm91cEluZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDYW52YXNHcm91cEJ5Q2FudmFzSW5kZXgoXG4gICAgICBwcmV2aW91c0hpdC5pbmRleFxuICAgICk7XG4gICAgY29uc3QgY2FudmFzZXNQZXJDYW52YXNHcm91cCA9IHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNlc1BlckNhbnZhc0dyb3VwKFxuICAgICAgY2FudmFzR3JvdXBJbmRleFxuICAgICk7XG4gICAgY29uc3QgbGVmdENhbnZhcyA9IGNhbnZhc2VzUGVyQ2FudmFzR3JvdXBbMF07XG4gICAgY29uc3QgbGVmdENhbnZhc0hpdCA9IHRoaXMuc2VhcmNoUmVzdWx0LmhpdHMuZmluZChcbiAgICAgIGggPT4gaC5pbmRleCA9PT0gbGVmdENhbnZhc1xuICAgICk7XG4gICAgaWYgKGxlZnRDYW52YXNIaXQpIHtcbiAgICAgIHByZXZpb3VzSGl0ID0gbGVmdENhbnZhc0hpdDtcbiAgICB9IGVsc2UgaWYgKGNhbnZhc2VzUGVyQ2FudmFzR3JvdXAubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCByaWdodENhbnZhcyA9IGNhbnZhc2VzUGVyQ2FudmFzR3JvdXBbMV07XG4gICAgICBwcmV2aW91c0hpdCA9IHRoaXMuc2VhcmNoUmVzdWx0LmhpdHMuZmluZChoID0+IGguaW5kZXggPT09IHJpZ2h0Q2FudmFzKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXZpb3VzSGl0O1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kSGl0T25BY3RpdmVDYW52YXNHcm91cCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5jYW52YXNlc1BlckNhbnZhc0dyb3VwLmluZGV4T2YoXG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0LmdldCh0aGlzLmN1cnJlbnRJbmRleCkuaW5kZXhcbiAgICAgICkgPj0gMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRDdXJyZW50SGl0SW5kZXgoY2FudmFzR3JvdXBJbmRleGVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlYXJjaFJlc3VsdC5zaXplKCk7IGkrKykge1xuICAgICAgY29uc3QgaGl0ID0gdGhpcy5zZWFyY2hSZXN1bHQuZ2V0KGkpO1xuICAgICAgaWYgKGNhbnZhc0dyb3VwSW5kZXhlcy5pbmRleE9mKGhpdC5pbmRleCkgPj0gMCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICAgIGlmIChoaXQuaW5kZXggPj0gY2FudmFzR3JvdXBJbmRleGVzW2NhbnZhc0dyb3VwSW5kZXhlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwaGl0ID0gdGhpcy5zZWFyY2hSZXN1bHQuZ2V0KGkgLSAxKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hSZXN1bHQuaGl0cy5maW5kSW5kZXgoXG4gICAgICAgICAgICBzciA9PiBzci5pbmRleCA9PT0gcGhpdC5pbmRleFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoUmVzdWx0LnNpemUoKSAtIDE7XG4gIH1cblxuICBwcml2YXRlIGlzRmlyc3RIaXRPbkNhbnZhc0dyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbmRleCA8PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXN0Q2FudmFzR3JvdXBJbmRleChjYW52YXNlc1BlckNhbnZhc0dyb3VwOiBudW1iZXJbXSkge1xuICAgIHJldHVybiBjYW52YXNlc1BlckNhbnZhc0dyb3VwLmxlbmd0aCA9PT0gMVxuICAgICAgPyBjYW52YXNlc1BlckNhbnZhc0dyb3VwWzBdXG4gICAgICA6IGNhbnZhc2VzUGVyQ2FudmFzR3JvdXBbMV07XG4gIH1cbn1cbiJdfQ==