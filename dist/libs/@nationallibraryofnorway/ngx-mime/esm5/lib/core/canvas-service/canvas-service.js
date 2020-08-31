import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CanvasGroups } from './../models/canvas-groups';
import { CanvasGroupStrategyFactory } from './canvas-groups-strategy.factory';
var CanvasService = /** @class */ (function () {
    function CanvasService() {
        this._currentNumberOfCanvasGroups = new BehaviorSubject(0);
        this._currentCanvasGroupIndex = new BehaviorSubject(0);
        this.canvasGroups = new CanvasGroups();
        this._numberOfCanvases = 0;
    }
    CanvasService.prototype.addAll = function (canvasRects, layout) {
        this.numberOfCanvases = canvasRects.length;
        var canvasGroupStrategy = CanvasGroupStrategyFactory.create(layout);
        this.canvasGroups = canvasGroupStrategy.addAll(canvasRects);
        this._currentNumberOfCanvasGroups.next(this.canvasGroups.length());
    };
    CanvasService.prototype.reset = function () {
        this.numberOfCanvases = 0;
        this._currentCanvasGroupIndex.next(0);
        this.canvasGroups = new CanvasGroups();
    };
    Object.defineProperty(CanvasService.prototype, "onCanvasGroupIndexChange", {
        get: function () {
            return this._currentCanvasGroupIndex
                .asObservable()
                .pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "onNumberOfCanvasGroupsChange", {
        get: function () {
            return this._currentNumberOfCanvasGroups
                .asObservable()
                .pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "currentCanvasGroupIndex", {
        get: function () {
            return this._currentCanvasGroupIndex.value;
        },
        set: function (currentCanvasGroupIndex) {
            if (!this.isWithinBounds(currentCanvasGroupIndex)) {
                return;
            }
            this._currentCanvasGroupIndex.next(currentCanvasGroupIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "numberOfCanvases", {
        get: function () {
            return this._numberOfCanvases;
        },
        set: function (numberOfCanvases) {
            this._numberOfCanvases = numberOfCanvases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "numberOfCanvasGroups", {
        get: function () {
            return this.canvasGroups.length();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CanvasService.prototype, "currentCanvasIndex", {
        get: function () {
            return this.canvasGroups.canvasesPerCanvasGroup[this.currentCanvasGroupIndex][0];
        },
        enumerable: true,
        configurable: true
    });
    CanvasService.prototype.isWithinBounds = function (canvasGroupIndex) {
        return (canvasGroupIndex > -1 && canvasGroupIndex <= this.numberOfCanvasGroups - 1);
    };
    CanvasService.prototype.isCurrentCanvasGroupValid = function () {
        return this.isWithinBounds(this.currentCanvasGroupIndex);
    };
    // Returns -1 if next canvas index is out of bounds
    CanvasService.prototype.getNextCanvasGroupIndex = function () {
        if (!this.isWithinBounds(this.currentCanvasGroupIndex + 1)) {
            return -1;
        }
        this.currentCanvasGroupIndex++;
        return this.currentCanvasGroupIndex;
    };
    // Returns -1 if previous canvas index is out of bounds
    CanvasService.prototype.getPrevCanvasGroupIndex = function () {
        if (!this.isWithinBounds(this.currentCanvasGroupIndex - 1)) {
            return -1;
        }
        this.currentCanvasGroupIndex--;
        return this.currentCanvasGroupIndex;
    };
    CanvasService.prototype.constrainToRange = function (canvasGroupsIndex) {
        if (canvasGroupsIndex < 0) {
            return 0;
        }
        else if (canvasGroupsIndex >= this.numberOfCanvasGroups - 1) {
            return this.numberOfCanvasGroups - 1;
        }
        else {
            return canvasGroupsIndex;
        }
    };
    CanvasService.prototype.findClosestCanvasGroupIndex = function (point) {
        return this.canvasGroups.findClosestIndex(point);
    };
    CanvasService.prototype.findCanvasGroupByCanvasIndex = function (canvasIndex) {
        return this.canvasGroups.canvasesPerCanvasGroup.findIndex(function (canvasForCanvasGroup) {
            return canvasForCanvasGroup.indexOf(canvasIndex) >= 0;
        });
    };
    CanvasService.prototype.findCanvasByCanvasIndex = function (canvasIndex) {
        return this.canvasGroups.canvasesPerCanvasGroup.length === 0
            ? -1
            : this.canvasGroups.canvasesPerCanvasGroup[canvasIndex][0];
    };
    CanvasService.prototype.getCanvasGroupLabel = function (canvasGroupIndex) {
        if (!this.canvasGroups.canvasGroupRects ||
            this.canvasGroups.canvasesPerCanvasGroup.length === 0) {
            return '1';
        }
        var canvasGroup = this.canvasGroups.canvasesPerCanvasGroup[canvasGroupIndex];
        var canvasGroupLabel = '' + (canvasGroup[0] + 1);
        if (canvasGroup.length > 1) {
            canvasGroupLabel =
                canvasGroupLabel + '-' + (canvasGroup[canvasGroup.length - 1] + 1);
        }
        return canvasGroupLabel;
    };
    CanvasService.prototype.getCanvasesPerCanvasGroup = function (canvasIndex) {
        return !this.canvasGroups.canvasGroupRects
            ? [0]
            : this.canvasGroups.canvasesPerCanvasGroup[canvasIndex];
    };
    CanvasService.prototype.getCanvasRect = function (canvasIndex) {
        return this.canvasGroups.canvasRects[canvasIndex];
    };
    CanvasService.prototype.getCurrentCanvasGroupRect = function () {
        return this.getCanvasGroupRect(this.currentCanvasGroupIndex);
    };
    CanvasService.prototype.getCanvasGroupRect = function (canvasGroupIndex) {
        return this.canvasGroups.get(canvasGroupIndex);
    };
    CanvasService.prototype.getMaxHeight = function () {
        return this.canvasGroups.getMaxHeight();
    };
    CanvasService.prototype.getMaxWidth = function () {
        return this.canvasGroups.getMaxWidth();
    };
    CanvasService = __decorate([
        Injectable()
    ], CanvasService);
    return CanvasService;
}());
export { CanvasService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUc5RTtJQVdFO1FBVlUsaUNBQTRCLEdBRWxDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLDZCQUF3QixHQUU5QixJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQixpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRWhCLDhCQUFNLEdBQU4sVUFBTyxXQUFtQixFQUFFLE1BQW9CO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQU0sbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxD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ZCxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUVELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztJQUVELGlEQUF5QixHQUF6QixVQUEwQixXQUFtQjtRQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7WUFDeEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxXQUFtQjtRQUMvQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpREFBeUIsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLGdCQUF3QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQXhLVSxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWEsQ0F5S3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXpLRCxJQXlLQztTQXpLWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2FudmFzR3JvdXBzIH0gZnJvbSAnLi8uLi9tb2RlbHMvY2FudmFzLWdyb3Vwcyc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXQgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLWxheW91dCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vLi4vbW9kZWxzL3BvaW50JztcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IENhbnZhc0dyb3VwU3RyYXRlZ3lGYWN0b3J5IH0gZnJvbSAnLi9jYW52YXMtZ3JvdXBzLXN0cmF0ZWd5LmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FudmFzU2VydmljZSB7XG4gIHByb3RlY3RlZCBfY3VycmVudE51bWJlck9mQ2FudmFzR3JvdXBzOiBCZWhhdmlvclN1YmplY3Q8XG4gICAgbnVtYmVyXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRDYW52YXNHcm91cEluZGV4OiBCZWhhdmlvclN1YmplY3Q8XG4gICAgbnVtYmVyXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuXG4gIHByb3RlY3RlZCBjYW52YXNHcm91cHM6IENhbnZhc0dyb3VwcyA9IG5ldyBDYW52YXNHcm91cHMoKTtcbiAgcHJvdGVjdGVkIF9udW1iZXJPZkNhbnZhc2VzID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkQWxsKGNhbnZhc1JlY3RzOiBSZWN0W10sIGxheW91dDogVmlld2VyTGF5b3V0KSB7XG4gICAgdGhpcy5udW1iZXJPZkNhbnZhc2VzID0gY2FudmFzUmVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IGNhbnZhc0dyb3VwU3RyYXRlZ3kgPSBDYW52YXNHcm91cFN0cmF0ZWd5RmFjdG9yeS5jcmVhdGUobGF5b3V0KTtcbiAgICB0aGlzLmNhbnZhc0dyb3VwcyA9IGNhbnZhc0dyb3VwU3RyYXRlZ3kuYWRkQWxsKGNhbnZhc1JlY3RzKTtcbiAgICB0aGlzLl9jdXJyZW50TnVtYmVyT2ZDYW52YXNHcm91cHMubmV4dCh0aGlzLmNhbnZhc0dyb3Vwcy5sZW5ndGgoKSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm51bWJlck9mQ2FudmFzZXMgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4Lm5leHQoMCk7XG4gICAgdGhpcy5jYW52YXNHcm91cHMgPSBuZXcgQ2FudmFzR3JvdXBzKCk7XG4gIH1cblxuICBnZXQgb25DYW52YXNHcm91cEluZGV4Q2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgZ2V0IG9uTnVtYmVyT2ZDYW52YXNHcm91cHNDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE51bWJlck9mQ2FudmFzR3JvdXBzXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4KGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNXaXRoaW5Cb3VuZHMoY3VycmVudENhbnZhc0dyb3VwSW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4Lm5leHQoY3VycmVudENhbnZhc0dyb3VwSW5kZXgpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4LnZhbHVlO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mQ2FudmFzZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZDYW52YXNlcztcbiAgfVxuXG4gIHNldCBudW1iZXJPZkNhbnZhc2VzKG51bWJlck9mQ2FudmFzZXM6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mQ2FudmFzZXMgPSBudW1iZXJPZkNhbnZhc2VzO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mQ2FudmFzR3JvdXBzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmxlbmd0aCgpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDYW52YXNJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc0dyb3Vwcy5jYW52YXNlc1BlckNhbnZhc0dyb3VwW1xuICAgICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgIF1bMF07XG4gIH1cblxuICBpc1dpdGhpbkJvdW5kcyhjYW52YXNHcm91cEluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgY2FudmFzR3JvdXBJbmRleCA+IC0xICYmIGNhbnZhc0dyb3VwSW5kZXggPD0gdGhpcy5udW1iZXJPZkNhbnZhc0dyb3VwcyAtIDFcbiAgICApO1xuICB9XG5cbiAgaXNDdXJyZW50Q2FudmFzR3JvdXBWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1dpdGhpbkJvdW5kcyh0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4KTtcbiAgfVxuXG4gIC8vIFJldHVybnMgLTEgaWYgbmV4dCBjYW52YXMgaW5kZXggaXMgb3V0IG9mIGJvdW5kc1xuICBnZXROZXh0Q2FudmFzR3JvdXBJbmRleCgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc1dpdGhpbkJvdW5kcyh0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ICsgMSkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCsrO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICB9XG5cbiAgLy8gUmV0dXJucyAtMSBpZiBwcmV2aW91cyBjYW52YXMgaW5kZXggaXMgb3V0IG9mIGJvdW5kc1xuICBnZXRQcmV2Q2FudmFzR3JvdXBJbmRleCgpOiBudW1iZXIge1xuICAgIGlmICghdGhpcy5pc1dpdGhpbkJvdW5kcyh0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4IC0gMSkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleC0tO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICB9XG5cbiAgY29uc3RyYWluVG9SYW5nZShjYW52YXNHcm91cHNJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoY2FudmFzR3JvdXBzSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKGNhbnZhc0dyb3Vwc0luZGV4ID49IHRoaXMubnVtYmVyT2ZDYW52YXNHcm91cHMgLSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkNhbnZhc0dyb3VwcyAtIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYW52YXNHcm91cHNJbmRleDtcbiAgICB9XG4gIH1cblxuICBmaW5kQ2xvc2VzdENhbnZhc0dyb3VwSW5kZXgocG9pbnQ6IFBvaW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXNHcm91cHMuZmluZENsb3Nlc3RJbmRleChwb2ludCk7XG4gIH1cblxuICBmaW5kQ2FudmFzR3JvdXBCeUNhbnZhc0luZGV4KGNhbnZhc0luZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc0dyb3Vwcy5jYW52YXNlc1BlckNhbnZhc0dyb3VwLmZpbmRJbmRleChmdW5jdGlvbihcbiAgICAgIGNhbnZhc0ZvckNhbnZhc0dyb3VwOiBudW1iZXJbXVxuICAgICkge1xuICAgICAgcmV0dXJuIGNhbnZhc0ZvckNhbnZhc0dyb3VwLmluZGV4T2YoY2FudmFzSW5kZXgpID49IDA7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kQ2FudmFzQnlDYW52YXNJbmRleChjYW52YXNJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cC5sZW5ndGggPT09IDBcbiAgICAgID8gLTFcbiAgICAgIDogdGhpcy5jYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cFtjYW52YXNJbmRleF1bMF07XG4gIH1cblxuICBnZXRDYW52YXNHcm91cExhYmVsKGNhbnZhc0dyb3VwSW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc0dyb3VwUmVjdHMgfHxcbiAgICAgIHRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXAubGVuZ3RoID09PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gJzEnO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhc0dyb3VwID0gdGhpcy5jYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cFtcbiAgICAgIGNhbnZhc0dyb3VwSW5kZXhcbiAgICBdO1xuICAgIGxldCBjYW52YXNHcm91cExhYmVsID0gJycgKyAoY2FudmFzR3JvdXBbMF0gKyAxKTtcblxuICAgIGlmIChjYW52YXNHcm91cC5sZW5ndGggPiAxKSB7XG4gICAgICBjYW52YXNHcm91cExhYmVsID1cbiAgICAgICAgY2FudmFzR3JvdXBMYWJlbCArICctJyArIChjYW52YXNHcm91cFtjYW52YXNHcm91cC5sZW5ndGggLSAxXSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBjYW52YXNHcm91cExhYmVsO1xuICB9XG5cbiAgZ2V0Q2FudmFzZXNQZXJDYW52YXNHcm91cChjYW52YXNJbmRleDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiAhdGhpcy5jYW52YXNHcm91cHMuY2FudmFzR3JvdXBSZWN0c1xuICAgICAgPyBbMF1cbiAgICAgIDogdGhpcy5jYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cFtjYW52YXNJbmRleF07XG4gIH1cblxuICBnZXRDYW52YXNSZWN0KGNhbnZhc0luZGV4OiBudW1iZXIpOiBSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXNHcm91cHMuY2FudmFzUmVjdHNbY2FudmFzSW5kZXhdO1xuICB9XG5cbiAgZ2V0Q3VycmVudENhbnZhc0dyb3VwUmVjdCgpOiBSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYW52YXNHcm91cFJlY3QodGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCk7XG4gIH1cblxuICBnZXRDYW52YXNHcm91cFJlY3QoY2FudmFzR3JvdXBJbmRleDogbnVtYmVyKTogUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmdldChjYW52YXNHcm91cEluZGV4KTtcbiAgfVxuXG4gIGdldE1heEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc0dyb3Vwcy5nZXRNYXhIZWlnaHQoKTtcbiAgfVxuXG4gIGdldE1heFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmdldE1heFdpZHRoKCk7XG4gIH1cbn1cbiJdfQ==