import { Rect } from './../models/rect';
import { CanvasGroups } from './../models/canvas-groups';
var OneCanvasPerCanvasGroupStrategy = /** @class */ (function () {
    function OneCanvasPerCanvasGroupStrategy() {
        this.addAll = function (canvasRects) {
            var canvasGroups = new CanvasGroups();
            canvasGroups.addRange(canvasRects);
            canvasGroups.canvasRects = canvasRects;
            for (var i = 0; i < canvasRects.length; i++) {
                canvasGroups.canvasesPerCanvasGroup.push([i]);
            }
            return canvasGroups;
        };
    }
    return OneCanvasPerCanvasGroupStrategy;
}());
export { OneCanvasPerCanvasGroupStrategy };
var TwoCanvasPerCanvasGroupStrategy = /** @class */ (function () {
    function TwoCanvasPerCanvasGroupStrategy() {
        this.addAll = function (canvasRects) {
            var canvasGroups = new CanvasGroups();
            // Single first page
            canvasGroups.add(canvasRects[0]);
            canvasGroups.canvasRects = canvasRects;
            canvasGroups.canvasesPerCanvasGroup.push([0]);
            for (var i = 1; i < canvasRects.length; i = i + 2) {
                if (i + 1 < canvasRects.length) {
                    // Paired pages
                    var thisRect = canvasRects[i];
                    var nextRect = canvasRects[i + 1];
                    var groupedRect = new Rect({
                        x: Math.min(thisRect.x, nextRect.x),
                        y: Math.min(thisRect.y, nextRect.y),
                        height: Math.max(thisRect.height, nextRect.height),
                        width: thisRect.width + nextRect.width
                    });
                    canvasGroups.add(groupedRect);
                    canvasGroups.canvasesPerCanvasGroup.push([i, i + 1]);
                }
                else {
                    // Single last page, if applicable
                    canvasGroups.add(canvasRects[i]);
                    canvasGroups.canvasesPerCanvasGroup.push([i]);
                }
            }
            return canvasGroups;
        };
    }
    return TwoCanvasPerCanvasGroupStrategy;
}());
export { TwoCanvasPerCanvasGroupStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvY2FudmFzLXNlcnZpY2UvY2FudmFzLWdyb3VwLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQ7SUFBQTtRQUVFLFdBQU0sR0FBRyxVQUFDLFdBQW1CO1lBQzNCLElBQU0sWUFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDeEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxZQUFZLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsWUFBWSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0M7WUFDRCxPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDLENBQUM7SUFDSixDQUFDO0lBQUQsc0NBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQzs7QUFFRDtJQUFBO1FBRUUsV0FBTSxHQUFHLFVBQUMsV0FBbUI7WUFDM0IsSUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUN4QyxvQkFBb0I7WUFDcEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxZQUFZLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUN2QyxZQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0JBQzlCLGVBQWU7b0JBQ2YsSUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQzt3QkFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUs7cUJBQ3ZDLENBQUMsQ0FBQztvQkFDSCxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM5QixZQUFZLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxrQ0FBa0M7b0JBQ2xDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMvQzthQUNGO1lBQ0QsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFELHNDQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3QgfSBmcm9tICcuLy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IENhbnZhc0dyb3VwcyB9IGZyb20gJy4vLi4vbW9kZWxzL2NhbnZhcy1ncm91cHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0Q2FudmFzR3JvdXBTdHJhdGVneSB7XG4gIGFkZEFsbChjYW52YXNSZWN0czogUmVjdFtdKTogQ2FudmFzR3JvdXBzO1xufVxuXG5leHBvcnQgY2xhc3MgT25lQ2FudmFzUGVyQ2FudmFzR3JvdXBTdHJhdGVneVxuICBpbXBsZW1lbnRzIEFic3RyYWN0Q2FudmFzR3JvdXBTdHJhdGVneSB7XG4gIGFkZEFsbCA9IChjYW52YXNSZWN0czogUmVjdFtdKSA9PiB7XG4gICAgY29uc3QgY2FudmFzR3JvdXBzID0gbmV3IENhbnZhc0dyb3VwcygpO1xuICAgIGNhbnZhc0dyb3Vwcy5hZGRSYW5nZShjYW52YXNSZWN0cyk7XG4gICAgY2FudmFzR3JvdXBzLmNhbnZhc1JlY3RzID0gY2FudmFzUmVjdHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNSZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXAucHVzaChbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2FudmFzR3JvdXBzO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgVHdvQ2FudmFzUGVyQ2FudmFzR3JvdXBTdHJhdGVneVxuICBpbXBsZW1lbnRzIEFic3RyYWN0Q2FudmFzR3JvdXBTdHJhdGVneSB7XG4gIGFkZEFsbCA9IChjYW52YXNSZWN0czogUmVjdFtdKSA9PiB7XG4gICAgY29uc3QgY2FudmFzR3JvdXBzID0gbmV3IENhbnZhc0dyb3VwcygpO1xuICAgIC8vIFNpbmdsZSBmaXJzdCBwYWdlXG4gICAgY2FudmFzR3JvdXBzLmFkZChjYW52YXNSZWN0c1swXSk7XG4gICAgY2FudmFzR3JvdXBzLmNhbnZhc1JlY3RzID0gY2FudmFzUmVjdHM7XG4gICAgY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXAucHVzaChbMF0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYW52YXNSZWN0cy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgaWYgKGkgKyAxIDwgY2FudmFzUmVjdHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFBhaXJlZCBwYWdlc1xuICAgICAgICBjb25zdCB0aGlzUmVjdCA9IGNhbnZhc1JlY3RzW2ldO1xuICAgICAgICBjb25zdCBuZXh0UmVjdCA9IGNhbnZhc1JlY3RzW2kgKyAxXTtcbiAgICAgICAgY29uc3QgZ3JvdXBlZFJlY3QgPSBuZXcgUmVjdCh7XG4gICAgICAgICAgeDogTWF0aC5taW4odGhpc1JlY3QueCwgbmV4dFJlY3QueCksXG4gICAgICAgICAgeTogTWF0aC5taW4odGhpc1JlY3QueSwgbmV4dFJlY3QueSksXG4gICAgICAgICAgaGVpZ2h0OiBNYXRoLm1heCh0aGlzUmVjdC5oZWlnaHQsIG5leHRSZWN0LmhlaWdodCksXG4gICAgICAgICAgd2lkdGg6IHRoaXNSZWN0LndpZHRoICsgbmV4dFJlY3Qud2lkdGhcbiAgICAgICAgfSk7XG4gICAgICAgIGNhbnZhc0dyb3Vwcy5hZGQoZ3JvdXBlZFJlY3QpO1xuICAgICAgICBjYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cC5wdXNoKFtpLCBpICsgMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2luZ2xlIGxhc3QgcGFnZSwgaWYgYXBwbGljYWJsZVxuICAgICAgICBjYW52YXNHcm91cHMuYWRkKGNhbnZhc1JlY3RzW2ldKTtcbiAgICAgICAgY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXAucHVzaChbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FudmFzR3JvdXBzO1xuICB9O1xufVxuIl19