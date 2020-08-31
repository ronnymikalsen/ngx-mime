import { Direction } from '../models/direction';
import { ViewingDirection } from '../models/viewing-direction';
var DashboardModeCalculateNextCanvasGroupStrategy = /** @class */ (function () {
    function DashboardModeCalculateNextCanvasGroupStrategy() {
    }
    DashboardModeCalculateNextCanvasGroupStrategy.prototype.calculateNextCanvasGroup = function (criteria) {
        var speed = criteria.speed;
        var direction = criteria.direction;
        var currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        var currentCanvasGroupCenter = criteria.currentCanvasGroupCenter;
        var nextCanvasGroup;
        var canvasGroupDelta = this.calculateNumberOfCanvasGroupsToGo(speed);
        if (canvasGroupDelta === 0) {
            nextCanvasGroup = currentCanvasGroupCenter;
        }
        else {
            canvasGroupDelta =
                direction === Direction.LEFT ? canvasGroupDelta : canvasGroupDelta * -1;
            nextCanvasGroup =
                criteria.viewingDirection === ViewingDirection.LTR
                    ? currentCanvasGroupIndex + canvasGroupDelta
                    : currentCanvasGroupIndex - canvasGroupDelta;
        }
        return nextCanvasGroup;
    };
    DashboardModeCalculateNextCanvasGroupStrategy.prototype.calculateNumberOfCanvasGroupsToGo = function (speed) {
        if (speed < 500) {
            return 0;
        }
        else if (speed >= 500 && speed < 1500) {
            return 1;
        }
        else if (speed >= 1500 && speed < 2500) {
            return 3;
        }
        else if (speed >= 2500 && speed < 3500) {
            return 5;
        }
        else {
            return 10;
        }
    };
    return DashboardModeCalculateNextCanvasGroupStrategy;
}());
export { DashboardModeCalculateNextCanvasGroupStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLW1vZGUtY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdmlld2VyLXNlcnZpY2UvZGFzaGJvYXJkLW1vZGUtY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU0vRDtJQUFBO0lBcUNBLENBQUM7SUFuQ0MsZ0ZBQXdCLEdBQXhCLFVBQXlCLFFBQWlDO1FBQ3hELElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFNLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztRQUNqRSxJQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztRQUVuRSxJQUFJLGVBQXVCLENBQUM7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsSUFBSSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDMUIsZUFBZSxHQUFHLHdCQUF3QixDQUFDO1NBQzVDO2FBQU07WUFDTCxnQkFBZ0I7Z0JBQ2QsU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRSxlQUFlO2dCQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO29CQUNoRCxDQUFDLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCO29CQUM1QyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCLENBQUM7U0FDbEQ7UUFFRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRU8seUZBQWlDLEdBQXpDLFVBQTBDLEtBQWE7UUFDckQsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7YUFBTSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtZQUN4QyxPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUU7WUFDeEMsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFDSCxvREFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvZGlyZWN0aW9uJztcbmltcG9ydCB7IFZpZXdpbmdEaXJlY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvdmlld2luZy1kaXJlY3Rpb24nO1xuaW1wb3J0IHtcbiAgQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3ksXG4gIE5leHRDYW52YXNHcm91cENyaXRlcmlhXG59IGZyb20gJy4vY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneVxuICBpbXBsZW1lbnRzIENhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IHtcbiAgY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwKGNyaXRlcmlhOiBOZXh0Q2FudmFzR3JvdXBDcml0ZXJpYSk6IG51bWJlciB7XG4gICAgY29uc3Qgc3BlZWQgPSBjcml0ZXJpYS5zcGVlZDtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBjcml0ZXJpYS5kaXJlY3Rpb247XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSBjcml0ZXJpYS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcbiAgICBjb25zdCBjdXJyZW50Q2FudmFzR3JvdXBDZW50ZXIgPSBjcml0ZXJpYS5jdXJyZW50Q2FudmFzR3JvdXBDZW50ZXI7XG5cbiAgICBsZXQgbmV4dENhbnZhc0dyb3VwOiBudW1iZXI7XG4gICAgbGV0IGNhbnZhc0dyb3VwRGVsdGEgPSB0aGlzLmNhbGN1bGF0ZU51bWJlck9mQ2FudmFzR3JvdXBzVG9HbyhzcGVlZCk7XG4gICAgaWYgKGNhbnZhc0dyb3VwRGVsdGEgPT09IDApIHtcbiAgICAgIG5leHRDYW52YXNHcm91cCA9IGN1cnJlbnRDYW52YXNHcm91cENlbnRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FudmFzR3JvdXBEZWx0YSA9XG4gICAgICAgIGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQgPyBjYW52YXNHcm91cERlbHRhIDogY2FudmFzR3JvdXBEZWx0YSAqIC0xO1xuICAgICAgbmV4dENhbnZhc0dyb3VwID1cbiAgICAgICAgY3JpdGVyaWEudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICA/IGN1cnJlbnRDYW52YXNHcm91cEluZGV4ICsgY2FudmFzR3JvdXBEZWx0YVxuICAgICAgICAgIDogY3VycmVudENhbnZhc0dyb3VwSW5kZXggLSBjYW52YXNHcm91cERlbHRhO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0Q2FudmFzR3JvdXA7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU51bWJlck9mQ2FudmFzR3JvdXBzVG9HbyhzcGVlZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoc3BlZWQgPCA1MDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoc3BlZWQgPj0gNTAwICYmIHNwZWVkIDwgMTUwMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChzcGVlZCA+PSAxNTAwICYmIHNwZWVkIDwgMjUwMCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfSBlbHNlIGlmIChzcGVlZCA+PSAyNTAwICYmIHNwZWVkIDwgMzUwMCkge1xuICAgICAgcmV0dXJuIDU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==