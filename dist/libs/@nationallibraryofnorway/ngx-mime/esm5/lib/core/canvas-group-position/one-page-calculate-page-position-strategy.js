import { ViewerOptions } from '../models/viewer-options';
import { ViewingDirection } from '../models/viewing-direction';
import { canvasRectFromCriteria } from './calculate-canvas-group-position-utils';
var OnePageCalculatePagePositionStrategy = /** @class */ (function () {
    function OnePageCalculatePagePositionStrategy() {
    }
    OnePageCalculatePagePositionStrategy.prototype.calculateCanvasGroupPosition = function (criteria, rotation) {
        if (rotation === void 0) { rotation = 0; }
        var x;
        if (!criteria.canvasGroupIndex) {
            if (rotation === 90 || rotation === 270) {
                x = (criteria.canvasSource.height / 2) * -1;
            }
            else {
                x = (criteria.canvasSource.width / 2) * -1;
            }
        }
        else {
            x =
                criteria.viewingDirection === ViewingDirection.LTR
                    ? this.calculateLtrX(criteria)
                    : this.calculateRtlX(criteria);
        }
        return canvasRectFromCriteria(rotation, criteria, x);
    };
    OnePageCalculatePagePositionStrategy.prototype.calculateLtrX = function (criteria) {
        return (criteria.previousCanvasGroupPosition.x +
            criteria.previousCanvasGroupPosition.width +
            ViewerOptions.overlays.canvasGroupMarginInDashboardView);
    };
    OnePageCalculatePagePositionStrategy.prototype.calculateRtlX = function (criteria) {
        return (criteria.previousCanvasGroupPosition.x -
            criteria.previousCanvasGroupPosition.width -
            ViewerOptions.overlays.canvasGroupMarginInDashboardView);
    };
    return OnePageCalculatePagePositionStrategy;
}());
export { OnePageCalculatePagePositionStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXBhZ2UtY2FsY3VsYXRlLXBhZ2UtcG9zaXRpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jYW52YXMtZ3JvdXAtcG9zaXRpb24vb25lLXBhZ2UtY2FsY3VsYXRlLXBhZ2UtcG9zaXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpGO0lBQUE7SUFxQ0EsQ0FBQztJQW5DQywyRUFBNEIsR0FBNUIsVUFDRSxRQUFxQyxFQUNyQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBRXBCLElBQUksQ0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixJQUFJLFFBQVEsS0FBSyxFQUFFLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtnQkFDdkMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0M7aUJBQU07Z0JBQ0wsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFNO1lBQ0wsQ0FBQztnQkFDQyxRQUFRLENBQUMsZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsR0FBRztvQkFDaEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO29CQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sc0JBQXNCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8sNERBQWEsR0FBckIsVUFBc0IsUUFBcUM7UUFDekQsT0FBTyxDQUNMLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLO1lBQzFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRU8sNERBQWEsR0FBckIsVUFBc0IsUUFBcUM7UUFDekQsT0FBTyxDQUNMLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLO1lBQzFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBQ0gsMkNBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQge1xuICBDYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uU3RyYXRlZ3ksXG4gIENhbnZhc0dyb3VwUG9zaXRpb25Dcml0ZXJpYVxufSBmcm9tICcuL2NhbGN1bGF0ZS1jYW52YXMtZ3JvdXAtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgY2FudmFzUmVjdEZyb21Dcml0ZXJpYSB9IGZyb20gJy4vY2FsY3VsYXRlLWNhbnZhcy1ncm91cC1wb3NpdGlvbi11dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBPbmVQYWdlQ2FsY3VsYXRlUGFnZVBvc2l0aW9uU3RyYXRlZ3lcbiAgaW1wbGVtZW50cyBDYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uU3RyYXRlZ3kge1xuICBjYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uKFxuICAgIGNyaXRlcmlhOiBDYW52YXNHcm91cFBvc2l0aW9uQ3JpdGVyaWEsXG4gICAgcm90YXRpb246IG51bWJlciA9IDBcbiAgKTogUmVjdCB7XG4gICAgbGV0IHg6IG51bWJlcjtcbiAgICBpZiAoIWNyaXRlcmlhLmNhbnZhc0dyb3VwSW5kZXgpIHtcbiAgICAgIGlmIChyb3RhdGlvbiA9PT0gOTAgfHwgcm90YXRpb24gPT09IDI3MCkge1xuICAgICAgICB4ID0gKGNyaXRlcmlhLmNhbnZhc1NvdXJjZS5oZWlnaHQgLyAyKSAqIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeCA9IChjcml0ZXJpYS5jYW52YXNTb3VyY2Uud2lkdGggLyAyKSAqIC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB4ID1cbiAgICAgICAgY3JpdGVyaWEudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICA/IHRoaXMuY2FsY3VsYXRlTHRyWChjcml0ZXJpYSlcbiAgICAgICAgICA6IHRoaXMuY2FsY3VsYXRlUnRsWChjcml0ZXJpYSk7XG4gICAgfVxuICAgIHJldHVybiBjYW52YXNSZWN0RnJvbUNyaXRlcmlhKHJvdGF0aW9uLCBjcml0ZXJpYSwgeCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUx0clgoY3JpdGVyaWE6IENhbnZhc0dyb3VwUG9zaXRpb25Dcml0ZXJpYSkge1xuICAgIHJldHVybiAoXG4gICAgICBjcml0ZXJpYS5wcmV2aW91c0NhbnZhc0dyb3VwUG9zaXRpb24ueCArXG4gICAgICBjcml0ZXJpYS5wcmV2aW91c0NhbnZhc0dyb3VwUG9zaXRpb24ud2lkdGggK1xuICAgICAgVmlld2VyT3B0aW9ucy5vdmVybGF5cy5jYW52YXNHcm91cE1hcmdpbkluRGFzaGJvYXJkVmlld1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVJ0bFgoY3JpdGVyaWE6IENhbnZhc0dyb3VwUG9zaXRpb25Dcml0ZXJpYSkge1xuICAgIHJldHVybiAoXG4gICAgICBjcml0ZXJpYS5wcmV2aW91c0NhbnZhc0dyb3VwUG9zaXRpb24ueCAtXG4gICAgICBjcml0ZXJpYS5wcmV2aW91c0NhbnZhc0dyb3VwUG9zaXRpb24ud2lkdGggLVxuICAgICAgVmlld2VyT3B0aW9ucy5vdmVybGF5cy5jYW52YXNHcm91cE1hcmdpbkluRGFzaGJvYXJkVmlld1xuICAgICk7XG4gIH1cbn1cbiJdfQ==