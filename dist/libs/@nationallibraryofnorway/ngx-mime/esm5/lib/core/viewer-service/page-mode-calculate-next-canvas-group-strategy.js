import { Direction } from '../models/direction';
import { ViewingDirection } from '../models/viewing-direction';
var PageModeCalculateNextCanvasGroupStrategy = /** @class */ (function () {
    function PageModeCalculateNextCanvasGroupStrategy() {
    }
    PageModeCalculateNextCanvasGroupStrategy.prototype.calculateNextCanvasGroup = function (criteria) {
        var isNewCanvasGroupInCenter = criteria.currentCanvasGroupIndex !== criteria.currentCanvasGroupCenter;
        var speed = criteria.speed;
        var direction = criteria.direction;
        var nextCanvasGroup = criteria.currentCanvasGroupIndex;
        if (speed >= 200) {
            var diff = direction === Direction.LEFT ? 1 : -1;
            nextCanvasGroup =
                criteria.viewingDirection === ViewingDirection.LTR
                    ? criteria.currentCanvasGroupIndex + diff
                    : criteria.currentCanvasGroupIndex - diff;
        }
        else if (isNewCanvasGroupInCenter) {
            nextCanvasGroup = criteria.currentCanvasGroupCenter;
        }
        return nextCanvasGroup;
    };
    return PageModeCalculateNextCanvasGroupStrategy;
}());
export { PageModeCalculateNextCanvasGroupStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tb2RlLWNhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3BhZ2UtbW9kZS1jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTS9EO0lBQUE7SUFvQkEsQ0FBQztJQWxCQywyRUFBd0IsR0FBeEIsVUFBeUIsUUFBaUM7UUFDeEQsSUFBTSx3QkFBd0IsR0FDNUIsUUFBUSxDQUFDLHVCQUF1QixLQUFLLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztRQUN6RSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzdCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFFckMsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZELElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNoQixJQUFNLElBQUksR0FBRyxTQUFTLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxlQUFlO2dCQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO29CQUNoRCxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixHQUFHLElBQUk7b0JBQ3pDLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQy9DO2FBQU0sSUFBSSx3QkFBd0IsRUFBRTtZQUNuQyxlQUFlLEdBQUcsUUFBUSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUNILCtDQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQge1xuICBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSxcbiAgTmV4dENhbnZhc0dyb3VwQ3JpdGVyaWFcbn0gZnJvbSAnLi9jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgUGFnZU1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneVxuICBpbXBsZW1lbnRzIENhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IHtcbiAgY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwKGNyaXRlcmlhOiBOZXh0Q2FudmFzR3JvdXBDcml0ZXJpYSk6IG51bWJlciB7XG4gICAgY29uc3QgaXNOZXdDYW52YXNHcm91cEluQ2VudGVyID1cbiAgICAgIGNyaXRlcmlhLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ICE9PSBjcml0ZXJpYS5jdXJyZW50Q2FudmFzR3JvdXBDZW50ZXI7XG4gICAgY29uc3Qgc3BlZWQgPSBjcml0ZXJpYS5zcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBjcml0ZXJpYS5kaXJlY3Rpb247XG5cbiAgICBsZXQgbmV4dENhbnZhc0dyb3VwID0gY3JpdGVyaWEuY3VycmVudENhbnZhc0dyb3VwSW5kZXg7XG4gICAgaWYgKHNwZWVkID49IDIwMCkge1xuICAgICAgY29uc3QgZGlmZiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQgPyAxIDogLTE7XG4gICAgICBuZXh0Q2FudmFzR3JvdXAgPVxuICAgICAgICBjcml0ZXJpYS52aWV3aW5nRGlyZWN0aW9uID09PSBWaWV3aW5nRGlyZWN0aW9uLkxUUlxuICAgICAgICAgID8gY3JpdGVyaWEuY3VycmVudENhbnZhc0dyb3VwSW5kZXggKyBkaWZmXG4gICAgICAgICAgOiBjcml0ZXJpYS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCAtIGRpZmY7XG4gICAgfSBlbHNlIGlmIChpc05ld0NhbnZhc0dyb3VwSW5DZW50ZXIpIHtcbiAgICAgIG5leHRDYW52YXNHcm91cCA9IGNyaXRlcmlhLmN1cnJlbnRDYW52YXNHcm91cENlbnRlcjtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRDYW52YXNHcm91cDtcbiAgfVxufVxuIl19