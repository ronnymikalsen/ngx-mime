import { ViewerLayout } from '../models/viewer-layout';
import { OneCanvasPerCanvasGroupStrategy, TwoCanvasPerCanvasGroupStrategy } from './canvas-group.strategy';
var CanvasGroupStrategyFactory = /** @class */ (function () {
    function CanvasGroupStrategyFactory() {
    }
    CanvasGroupStrategyFactory.create = function (layout) {
        if (layout === ViewerLayout.ONE_PAGE) {
            return new OneCanvasPerCanvasGroupStrategy();
        }
        else if (layout === ViewerLayout.TWO_PAGE) {
            return new TwoCanvasPerCanvasGroupStrategy();
        }
        return null;
    };
    return CanvasGroupStrategyFactory;
}());
export { CanvasGroupStrategyFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3Vwcy1zdHJhdGVneS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvY2FudmFzLXNlcnZpY2UvY2FudmFzLWdyb3Vwcy1zdHJhdGVneS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLCtCQUErQixFQUNoQyxNQUFNLHlCQUF5QixDQUFDO0FBRWpDO0lBQUE7SUFVQSxDQUFDO0lBVGUsaUNBQU0sR0FBcEIsVUFBcUIsTUFBb0I7UUFDdkMsSUFBSSxNQUFNLEtBQUssWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxPQUFPLElBQUksK0JBQStCLEVBQUUsQ0FBQztTQUM5QzthQUFNLElBQUksTUFBTSxLQUFLLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDM0MsT0FBTyxJQUFJLCtCQUErQixFQUFFLENBQUM7U0FDOUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUFWRCxJQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld2VyTGF5b3V0IH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1sYXlvdXQnO1xuaW1wb3J0IHtcbiAgT25lQ2FudmFzUGVyQ2FudmFzR3JvdXBTdHJhdGVneSxcbiAgVHdvQ2FudmFzUGVyQ2FudmFzR3JvdXBTdHJhdGVneVxufSBmcm9tICcuL2NhbnZhcy1ncm91cC5zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXNHcm91cFN0cmF0ZWd5RmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGxheW91dDogVmlld2VyTGF5b3V0KSB7XG4gICAgaWYgKGxheW91dCA9PT0gVmlld2VyTGF5b3V0Lk9ORV9QQUdFKSB7XG4gICAgICByZXR1cm4gbmV3IE9uZUNhbnZhc1BlckNhbnZhc0dyb3VwU3RyYXRlZ3koKTtcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gVmlld2VyTGF5b3V0LlRXT19QQUdFKSB7XG4gICAgICByZXR1cm4gbmV3IFR3b0NhbnZhc1BlckNhbnZhc0dyb3VwU3RyYXRlZ3koKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19