import { Direction } from '../models/direction';
var NavigatorCalculateNextCanvasGroupStrategy = /** @class */ (function () {
    function NavigatorCalculateNextCanvasGroupStrategy() {
    }
    NavigatorCalculateNextCanvasGroupStrategy.prototype.calculateNextCanvasGroup = function (criteria) {
        var direction = criteria.direction;
        var currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        var nextCanvasGroup = 1;
        nextCanvasGroup =
            direction === Direction.NEXT ? nextCanvasGroup : nextCanvasGroup * -1;
        nextCanvasGroup = currentCanvasGroupIndex + nextCanvasGroup;
        return nextCanvasGroup;
    };
    return NavigatorCalculateNextCanvasGroupStrategy;
}());
export { NavigatorCalculateNextCanvasGroupStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLWNhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL25hdmlnYXRvci1jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTWhEO0lBQUE7SUFZQSxDQUFDO0lBVkMsNEVBQXdCLEdBQXhCLFVBQXlCLFFBQWlDO1FBQ3hELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBTSx1QkFBdUIsR0FBRyxRQUFRLENBQUMsdUJBQXVCLENBQUM7UUFFakUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLGVBQWU7WUFDYixTQUFTLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsZUFBZSxHQUFHLHVCQUF1QixHQUFHLGVBQWUsQ0FBQztRQUM1RCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsZ0RBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9kaXJlY3Rpb24nO1xuaW1wb3J0IHtcbiAgQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3ksXG4gIE5leHRDYW52YXNHcm91cENyaXRlcmlhXG59IGZyb20gJy4vY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvckNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5XG4gIGltcGxlbWVudHMgQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kge1xuICBjYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXAoY3JpdGVyaWE6IE5leHRDYW52YXNHcm91cENyaXRlcmlhKTogbnVtYmVyIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBjcml0ZXJpYS5kaXJlY3Rpb247XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSBjcml0ZXJpYS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcblxuICAgIGxldCBuZXh0Q2FudmFzR3JvdXAgPSAxO1xuICAgIG5leHRDYW52YXNHcm91cCA9XG4gICAgICBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUID8gbmV4dENhbnZhc0dyb3VwIDogbmV4dENhbnZhc0dyb3VwICogLTE7XG4gICAgbmV4dENhbnZhc0dyb3VwID0gY3VycmVudENhbnZhc0dyb3VwSW5kZXggKyBuZXh0Q2FudmFzR3JvdXA7XG4gICAgcmV0dXJuIG5leHRDYW52YXNHcm91cDtcbiAgfVxufVxuIl19