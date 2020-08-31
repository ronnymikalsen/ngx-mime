import { ViewerOptions } from '../models/viewer-options';
import { ViewingDirection } from '../models/viewing-direction';
import { canvasRectFromCriteria } from './calculate-canvas-group-position-utils';
var TwoPageCalculateCanvasGroupPositionStrategy = /** @class */ (function () {
    function TwoPageCalculateCanvasGroupPositionStrategy() {
    }
    TwoPageCalculateCanvasGroupPositionStrategy.prototype.calculateCanvasGroupPosition = function (criteria, rotation) {
        if (rotation === void 0) { rotation = 0; }
        var x;
        if (!criteria.canvasGroupIndex) {
            // First page
            x = 0;
        }
        else if (criteria.canvasGroupIndex % 2) {
            // Even page numbers
            x =
                criteria.viewingDirection === ViewingDirection.LTR
                    ? this.calculateEvenLtrX(criteria)
                    : this.calculateEvenRtlX(criteria);
        }
        else {
            // Odd page numbers
            x =
                criteria.viewingDirection === ViewingDirection.LTR
                    ? this.calculateOddLtrX(criteria)
                    : this.calculateOddRtlX(criteria);
        }
        return canvasRectFromCriteria(rotation, criteria, x);
    };
    TwoPageCalculateCanvasGroupPositionStrategy.prototype.calculateEvenLtrX = function (criteria) {
        return (criteria.previousCanvasGroupPosition.x +
            criteria.previousCanvasGroupPosition.width +
            ViewerOptions.overlays.canvasGroupMarginInDashboardView);
    };
    TwoPageCalculateCanvasGroupPositionStrategy.prototype.calculateOddLtrX = function (criteria) {
        return (criteria.previousCanvasGroupPosition.x +
            criteria.previousCanvasGroupPosition.width);
    };
    TwoPageCalculateCanvasGroupPositionStrategy.prototype.calculateEvenRtlX = function (criteria) {
        return (criteria.previousCanvasGroupPosition.x -
            criteria.canvasSource.width -
            ViewerOptions.overlays.canvasGroupMarginInDashboardView);
    };
    TwoPageCalculateCanvasGroupPositionStrategy.prototype.calculateOddRtlX = function (criteria) {
        return criteria.previousCanvasGroupPosition.x - criteria.canvasSource.width;
    };
    return TwoPageCalculateCanvasGroupPositionStrategy;
}());
export { TwoPageCalculateCanvasGroupPositionStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLXBhZ2UtY2FsY3VsYXRlLXBhZ2UtcG9zaXRpb24tc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9jYW52YXMtZ3JvdXAtcG9zaXRpb24vdHdvLXBhZ2UtY2FsY3VsYXRlLXBhZ2UtcG9zaXRpb24tc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWpGO0lBQUE7SUFzREEsQ0FBQztJQXBEQyxrRkFBNEIsR0FBNUIsVUFDRSxRQUFxQyxFQUNyQyxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBRXBCLElBQUksQ0FBUyxDQUFDO1FBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixhQUFhO1lBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU0sSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLG9CQUFvQjtZQUNwQixDQUFDO2dCQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO29CQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsbUJBQW1CO1lBQ25CLENBQUM7Z0JBQ0MsUUFBUSxDQUFDLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEdBQUc7b0JBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO29CQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyx1RUFBaUIsR0FBekIsVUFBMEIsUUFBcUM7UUFDN0QsT0FBTyxDQUNMLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ3RDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLO1lBQzFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRU8sc0VBQWdCLEdBQXhCLFVBQXlCLFFBQXFDO1FBQzVELE9BQU8sQ0FDTCxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN0QyxRQUFRLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUMzQyxDQUFDO0lBQ0osQ0FBQztJQUVPLHVFQUFpQixHQUF6QixVQUEwQixRQUFxQztRQUM3RCxPQUFPLENBQ0wsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDdEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQzNCLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRU8sc0VBQWdCLEdBQXhCLFVBQXlCLFFBQXFDO1FBQzVELE9BQU8sUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUM5RSxDQUFDO0lBQ0gsa0RBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQge1xuICBDYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uU3RyYXRlZ3ksXG4gIENhbnZhc0dyb3VwUG9zaXRpb25Dcml0ZXJpYVxufSBmcm9tICcuL2NhbGN1bGF0ZS1jYW52YXMtZ3JvdXAtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgY2FudmFzUmVjdEZyb21Dcml0ZXJpYSB9IGZyb20gJy4vY2FsY3VsYXRlLWNhbnZhcy1ncm91cC1wb3NpdGlvbi11dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBUd29QYWdlQ2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvblN0cmF0ZWd5XG4gIGltcGxlbWVudHMgQ2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgY2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvbihcbiAgICBjcml0ZXJpYTogQ2FudmFzR3JvdXBQb3NpdGlvbkNyaXRlcmlhLFxuICAgIHJvdGF0aW9uOiBudW1iZXIgPSAwXG4gICk6IFJlY3Qge1xuICAgIGxldCB4OiBudW1iZXI7XG5cbiAgICBpZiAoIWNyaXRlcmlhLmNhbnZhc0dyb3VwSW5kZXgpIHtcbiAgICAgIC8vIEZpcnN0IHBhZ2VcbiAgICAgIHggPSAwO1xuICAgIH0gZWxzZSBpZiAoY3JpdGVyaWEuY2FudmFzR3JvdXBJbmRleCAlIDIpIHtcbiAgICAgIC8vIEV2ZW4gcGFnZSBudW1iZXJzXG4gICAgICB4ID1cbiAgICAgICAgY3JpdGVyaWEudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICA/IHRoaXMuY2FsY3VsYXRlRXZlbkx0clgoY3JpdGVyaWEpXG4gICAgICAgICAgOiB0aGlzLmNhbGN1bGF0ZUV2ZW5SdGxYKGNyaXRlcmlhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2RkIHBhZ2UgbnVtYmVyc1xuICAgICAgeCA9XG4gICAgICAgIGNyaXRlcmlhLnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSXG4gICAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZU9kZEx0clgoY3JpdGVyaWEpXG4gICAgICAgICAgOiB0aGlzLmNhbGN1bGF0ZU9kZFJ0bFgoY3JpdGVyaWEpO1xuICAgIH1cblxuICAgIHJldHVybiBjYW52YXNSZWN0RnJvbUNyaXRlcmlhKHJvdGF0aW9uLCBjcml0ZXJpYSwgeCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUV2ZW5MdHJYKGNyaXRlcmlhOiBDYW52YXNHcm91cFBvc2l0aW9uQ3JpdGVyaWEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY3JpdGVyaWEucHJldmlvdXNDYW52YXNHcm91cFBvc2l0aW9uLnggK1xuICAgICAgY3JpdGVyaWEucHJldmlvdXNDYW52YXNHcm91cFBvc2l0aW9uLndpZHRoICtcbiAgICAgIFZpZXdlck9wdGlvbnMub3ZlcmxheXMuY2FudmFzR3JvdXBNYXJnaW5JbkRhc2hib2FyZFZpZXdcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVPZGRMdHJYKGNyaXRlcmlhOiBDYW52YXNHcm91cFBvc2l0aW9uQ3JpdGVyaWEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgY3JpdGVyaWEucHJldmlvdXNDYW52YXNHcm91cFBvc2l0aW9uLnggK1xuICAgICAgY3JpdGVyaWEucHJldmlvdXNDYW52YXNHcm91cFBvc2l0aW9uLndpZHRoXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlRXZlblJ0bFgoY3JpdGVyaWE6IENhbnZhc0dyb3VwUG9zaXRpb25Dcml0ZXJpYSkge1xuICAgIHJldHVybiAoXG4gICAgICBjcml0ZXJpYS5wcmV2aW91c0NhbnZhc0dyb3VwUG9zaXRpb24ueCAtXG4gICAgICBjcml0ZXJpYS5jYW52YXNTb3VyY2Uud2lkdGggLVxuICAgICAgVmlld2VyT3B0aW9ucy5vdmVybGF5cy5jYW52YXNHcm91cE1hcmdpbkluRGFzaGJvYXJkVmlld1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU9kZFJ0bFgoY3JpdGVyaWE6IENhbnZhc0dyb3VwUG9zaXRpb25Dcml0ZXJpYSkge1xuICAgIHJldHVybiBjcml0ZXJpYS5wcmV2aW91c0NhbnZhc0dyb3VwUG9zaXRpb24ueCAtIGNyaXRlcmlhLmNhbnZhc1NvdXJjZS53aWR0aDtcbiAgfVxufVxuIl19