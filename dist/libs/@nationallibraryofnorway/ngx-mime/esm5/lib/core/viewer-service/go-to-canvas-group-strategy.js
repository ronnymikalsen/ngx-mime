import { Direction } from '../models/direction';
import { Options } from '../models/options';
import { ViewerMode } from '../models/viewer-mode';
import { ViewerOptions } from '../models/viewer-options';
import { ViewingDirection } from '../models/viewing-direction';
import { CalculateNextCanvasGroupFactory } from './calculate-next-canvas-group-factory';
var DefaultGoToCanvasGroupStrategy = /** @class */ (function () {
    function DefaultGoToCanvasGroupStrategy(viewer, zoomStrategy, canvasService, modeService, config, viewingDirection) {
        this.viewer = viewer;
        this.zoomStrategy = zoomStrategy;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.config = config;
        this.viewingDirection = viewingDirection;
    }
    DefaultGoToCanvasGroupStrategy.prototype.goToCanvasGroup = function (canvasGroup) {
        var _this = this;
        var oldCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
        this.canvasService.currentCanvasGroupIndex = this.canvasService.constrainToRange(canvasGroup.canvasGroupIndex);
        var newCanvasGroup = this.canvasService.getCanvasGroupRect(this.canvasService.currentCanvasGroupIndex);
        if (this.modeService.mode === ViewerMode.PAGE_ZOOMED &&
            this.config.preserveZoomOnCanvasGroupChange) {
            var x = void 0;
            if (oldCanvasGroupIndex > canvasGroup.canvasGroupIndex) {
                if (this.config.startOnTopOnCanvasGroupChange) {
                    var canvasGroupIndexes = this.canvasService.getCanvasesPerCanvasGroup(canvasGroup.canvasGroupIndex);
                    var previousCanvasIndex = canvasGroupIndexes[canvasGroupIndexes.length - 1];
                    var previousCanvasRect = this.canvasService.getCanvasRect(previousCanvasIndex);
                    x =
                        this.viewingDirection === ViewingDirection.LTR
                            ? this.leftX(previousCanvasRect)
                            : this.rightX(newCanvasGroup);
                }
                else {
                    x =
                        this.viewingDirection === ViewingDirection.LTR
                            ? this.rightX(newCanvasGroup)
                            : this.leftX(newCanvasGroup);
                }
            }
            else {
                x =
                    this.viewingDirection === ViewingDirection.LTR
                        ? this.leftX(newCanvasGroup)
                        : this.rightX(newCanvasGroup);
            }
            var y = this.config.startOnTopOnCanvasGroupChange
                ? newCanvasGroup.y +
                    this.getViewportBounds().height / 2 -
                    new Options().collectionTileMargin
                : this.getViewportCenter().y;
            this.panTo(x, y, canvasGroup.immediately);
        }
        else if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            var oldCanvasGroupCenter = this.canvasService.getCanvasGroupRect(oldCanvasGroupIndex);
            this.panToCenter(oldCanvasGroupCenter, canvasGroup.immediately);
            this.zoomStrategy.goToHomeZoom();
            setTimeout(function () {
                _this.panToCenter(newCanvasGroup, canvasGroup.immediately);
                _this.modeService.mode = ViewerMode.PAGE;
            }, ViewerOptions.transitions.OSDAnimationTime);
        }
        else {
            this.panToCenter(newCanvasGroup, canvasGroup.immediately);
        }
    };
    DefaultGoToCanvasGroupStrategy.prototype.goToPreviousCanvasGroup = function (currentCanvasIndex) {
        if (this.canvasService.currentCanvasGroupIndex > 0) {
            var viewportCenter = this.getViewportCenter();
            var currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(viewportCenter);
            var calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(null);
            var newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
                direction: Direction.PREVIOUS,
                currentCanvasGroupIndex: currentCanvasGroupIndex,
                currentCanvasGroupCenter: currentCanvasIndex,
                viewingDirection: this.viewingDirection
            });
            this.goToCanvasGroup({
                canvasGroupIndex: newCanvasGroupIndex,
                immediately: false
            });
        }
    };
    DefaultGoToCanvasGroupStrategy.prototype.goToNextCanvasGroup = function (currentCanvasIndex) {
        if (this.canvasService.currentCanvasGroupIndex <
            this.canvasService.numberOfCanvasGroups) {
            var viewportCenter = this.getViewportCenter();
            var currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(viewportCenter);
            var calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(null);
            var newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
                direction: Direction.NEXT,
                currentCanvasGroupIndex: currentCanvasGroupIndex,
                currentCanvasGroupCenter: currentCanvasIndex,
                viewingDirection: this.viewingDirection
            });
            this.goToCanvasGroup({
                canvasGroupIndex: newCanvasGroupIndex,
                immediately: false
            });
        }
    };
    DefaultGoToCanvasGroupStrategy.prototype.centerCurrentCanvas = function () {
        var currentCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
        var currentCanvasGroupCenter = this.canvasService.getCanvasGroupRect(currentCanvasGroupIndex);
        this.panToCenter(currentCanvasGroupCenter, false);
    };
    DefaultGoToCanvasGroupStrategy.prototype.leftX = function (canvas) {
        return canvas.x + this.getViewportBounds().width / 2;
    };
    DefaultGoToCanvasGroupStrategy.prototype.rightX = function (canvas) {
        return canvas.x + canvas.width - this.getViewportBounds().width / 2;
    };
    DefaultGoToCanvasGroupStrategy.prototype.panToCenter = function (canvasGroup, immediately) {
        this.panTo(canvasGroup.centerX, canvasGroup.centerY, immediately);
    };
    DefaultGoToCanvasGroupStrategy.prototype.panTo = function (x, y, immediately) {
        this.viewer.viewport.panTo({
            x: x,
            y: y
        }, immediately);
    };
    DefaultGoToCanvasGroupStrategy.prototype.getViewportCenter = function () {
        return this.viewer.viewport.getCenter(true);
    };
    DefaultGoToCanvasGroupStrategy.prototype.getViewportBounds = function () {
        return this.viewer.viewport.getBounds(true);
    };
    return DefaultGoToCanvasGroupStrategy;
}());
export { DefaultGoToCanvasGroupStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdmlld2VyLXNlcnZpY2UvZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWdCeEY7SUFDRSx3Q0FDVSxNQUFXLEVBQ1gsWUFBc0IsRUFDdEIsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsZ0JBQWtDO1FBTGxDLFdBQU0sR0FBTixNQUFNLENBQUs7UUFDWCxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSix3REFBZSxHQUFmLFVBQWdCLFdBQXdCO1FBQXhDLGlCQTZEQztRQTVEQyxJQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUM5RSxXQUFXLENBQUMsZ0JB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RUFBRSxXQUFvQjtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ3hCO1lBQ0UsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNMLEVBQ0QsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBRU8sMERBQWlCLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLDBEQUFpQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDSCxxQ0FBQztBQUFELENBQUMsQUFuS0QsSUFtS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi4vY2FudmFzLXNlcnZpY2UvY2FudmFzLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckNvbmZpZyB9IGZyb20gJy4uL21pbWUtdmlld2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBNb2RlU2VydmljZSB9IGZyb20gJy4uL21vZGUtc2VydmljZS9tb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL29wdGlvbnMnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvcG9pbnQnO1xuaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IFZpZXdlck1vZGUgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLW1vZGUnO1xuaW1wb3J0IHsgVmlld2VyT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy92aWV3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdpbmctZGlyZWN0aW9uJztcbmltcG9ydCB7IENhbGN1bGF0ZU5leHRDYW52YXNHcm91cEZhY3RvcnkgfSBmcm9tICcuL2NhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1mYWN0b3J5JztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi96b29tLXN0cmF0ZWd5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNHcm91cCB7XG4gIGNhbnZhc0dyb3VwSW5kZXg6IG51bWJlcjtcbiAgZGlyZWN0aW9uPzogRGlyZWN0aW9uO1xuICBpbW1lZGlhdGVseT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kge1xuICBnb1RvQ2FudmFzR3JvdXAoY2FudmFzR3JvdXA6IENhbnZhc0dyb3VwKTogdm9pZDtcbiAgZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoY3VycmVudENhbnZhc0luZGV4OiBudW1iZXIpOiB2b2lkO1xuICBnb1RvTmV4dENhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgY2VudGVyQ3VycmVudENhbnZhcygpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5IGltcGxlbWVudHMgR29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdlcjogYW55LFxuICAgIHByaXZhdGUgem9vbVN0cmF0ZWd5OiBTdHJhdGVneSxcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RlU2VydmljZTogTW9kZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IE1pbWVWaWV3ZXJDb25maWcsXG4gICAgcHJpdmF0ZSB2aWV3aW5nRGlyZWN0aW9uOiBWaWV3aW5nRGlyZWN0aW9uXG4gICkge31cblxuICBnb1RvQ2FudmFzR3JvdXAoY2FudmFzR3JvdXA6IENhbnZhc0dyb3VwKSB7XG4gICAgY29uc3Qgb2xkQ2FudmFzR3JvdXBJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcbiAgICB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuY29uc3RyYWluVG9SYW5nZShcbiAgICAgIGNhbnZhc0dyb3VwLmNhbnZhc0dyb3VwSW5kZXhcbiAgICApO1xuICAgIGNvbnN0IG5ld0NhbnZhc0dyb3VwID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwUmVjdChcbiAgICAgIHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0VfWk9PTUVEICYmXG4gICAgICB0aGlzLmNvbmZpZy5wcmVzZXJ2ZVpvb21PbkNhbnZhc0dyb3VwQ2hhbmdlXG4gICAgKSB7XG4gICAgICBsZXQgeDogbnVtYmVyO1xuXG4gICAgICBpZiAob2xkQ2FudmFzR3JvdXBJbmRleCA+IGNhbnZhc0dyb3VwLmNhbnZhc0dyb3VwSW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXJ0T25Ub3BPbkNhbnZhc0dyb3VwQ2hhbmdlKSB7XG4gICAgICAgICAgY29uc3QgY2FudmFzR3JvdXBJbmRleGVzID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc2VzUGVyQ2FudmFzR3JvdXAoXG4gICAgICAgICAgICBjYW52YXNHcm91cC5jYW52YXNHcm91cEluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0NhbnZhc0luZGV4ID1cbiAgICAgICAgICAgIGNhbnZhc0dyb3VwSW5kZXhlc1tjYW52YXNHcm91cEluZGV4ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNDYW52YXNSZWN0ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc1JlY3QoXG4gICAgICAgICAgICBwcmV2aW91c0NhbnZhc0luZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB4ID1cbiAgICAgICAgICAgIHRoaXMudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICAgICAgPyB0aGlzLmxlZnRYKHByZXZpb3VzQ2FudmFzUmVjdClcbiAgICAgICAgICAgICAgOiB0aGlzLnJpZ2h0WChuZXdDYW52YXNHcm91cCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9XG4gICAgICAgICAgICB0aGlzLnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSXG4gICAgICAgICAgICAgID8gdGhpcy5yaWdodFgobmV3Q2FudmFzR3JvdXApXG4gICAgICAgICAgICAgIDogdGhpcy5sZWZ0WChuZXdDYW52YXNHcm91cCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPVxuICAgICAgICAgIHRoaXMudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICAgID8gdGhpcy5sZWZ0WChuZXdDYW52YXNHcm91cClcbiAgICAgICAgICAgIDogdGhpcy5yaWdodFgobmV3Q2FudmFzR3JvdXApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB5ID0gdGhpcy5jb25maWcuc3RhcnRPblRvcE9uQ2FudmFzR3JvdXBDaGFuZ2VcbiAgICAgICAgPyBuZXdDYW52YXNHcm91cC55ICtcbiAgICAgICAgICB0aGlzLmdldFZpZXdwb3J0Qm91bmRzKCkuaGVpZ2h0IC8gMiAtXG4gICAgICAgICAgbmV3IE9wdGlvbnMoKS5jb2xsZWN0aW9uVGlsZU1hcmdpblxuICAgICAgICA6IHRoaXMuZ2V0Vmlld3BvcnRDZW50ZXIoKS55O1xuXG4gICAgICB0aGlzLnBhblRvKHgsIHksIGNhbnZhc0dyb3VwLmltbWVkaWF0ZWx5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCkge1xuICAgICAgY29uc3Qgb2xkQ2FudmFzR3JvdXBDZW50ZXIgPSB0aGlzLmNhbnZhc1NlcnZpY2UuZ2V0Q2FudmFzR3JvdXBSZWN0KFxuICAgICAgICBvbGRDYW52YXNHcm91cEluZGV4XG4gICAgICApO1xuICAgICAgdGhpcy5wYW5Ub0NlbnRlcihvbGRDYW52YXNHcm91cENlbnRlciwgY2FudmFzR3JvdXAuaW1tZWRpYXRlbHkpO1xuICAgICAgdGhpcy56b29tU3RyYXRlZ3kuZ29Ub0hvbWVab29tKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYW5Ub0NlbnRlcihuZXdDYW52YXNHcm91cCwgY2FudmFzR3JvdXAuaW1tZWRpYXRlbHkpO1xuICAgICAgICB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPSBWaWV3ZXJNb2RlLlBBR0U7XG4gICAgICB9LCBWaWV3ZXJPcHRpb25zLnRyYW5zaXRpb25zLk9TREFuaW1hdGlvblRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhblRvQ2VudGVyKG5ld0NhbnZhc0dyb3VwLCBjYW52YXNHcm91cC5pbW1lZGlhdGVseSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0Q2VudGVyID0gdGhpcy5nZXRWaWV3cG9ydENlbnRlcigpO1xuICAgICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuZmluZENsb3Nlc3RDYW52YXNHcm91cEluZGV4KFxuICAgICAgICB2aWV3cG9ydENlbnRlclxuICAgICAgKTtcblxuICAgICAgY29uc3QgY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kgPSBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBGYWN0b3J5LmNyZWF0ZShcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld0NhbnZhc0dyb3VwSW5kZXggPSBjYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneS5jYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXAoXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3Rpb246IERpcmVjdGlvbi5QUkVWSU9VUyxcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogY3VycmVudENhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyOiBjdXJyZW50Q2FudmFzSW5kZXgsXG4gICAgICAgICAgdmlld2luZ0RpcmVjdGlvbjogdGhpcy52aWV3aW5nRGlyZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLmdvVG9DYW52YXNHcm91cCh7XG4gICAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IG5ld0NhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdvVG9OZXh0Q2FudmFzR3JvdXAoY3VycmVudENhbnZhc0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPFxuICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm51bWJlck9mQ2FudmFzR3JvdXBzXG4gICAgKSB7XG4gICAgICBjb25zdCB2aWV3cG9ydENlbnRlciA9IHRoaXMuZ2V0Vmlld3BvcnRDZW50ZXIoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDbG9zZXN0Q2FudmFzR3JvdXBJbmRleChcbiAgICAgICAgdmlld3BvcnRDZW50ZXJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5ID0gQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwRmFjdG9yeS5jcmVhdGUoXG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdDYW52YXNHcm91cEluZGV4ID0gY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kuY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwKFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBEaXJlY3Rpb24uTkVYVCxcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogY3VycmVudENhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyOiBjdXJyZW50Q2FudmFzSW5kZXgsXG4gICAgICAgICAgdmlld2luZ0RpcmVjdGlvbjogdGhpcy52aWV3aW5nRGlyZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLmdvVG9DYW52YXNHcm91cCh7XG4gICAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IG5ld0NhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNlbnRlckN1cnJlbnRDYW52YXMoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXg7XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwUmVjdChcbiAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgKTtcbiAgICB0aGlzLnBhblRvQ2VudGVyKGN1cnJlbnRDYW52YXNHcm91cENlbnRlciwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBsZWZ0WChjYW52YXM6IFJlY3QpOiBudW1iZXIge1xuICAgIHJldHVybiBjYW52YXMueCArIHRoaXMuZ2V0Vmlld3BvcnRCb3VuZHMoKS53aWR0aCAvIDI7XG4gIH1cblxuICBwcml2YXRlIHJpZ2h0WChjYW52YXM6IFJlY3QpOiBudW1iZXIge1xuICAgIHJldHVybiBjYW52YXMueCArIGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0Vmlld3BvcnRCb3VuZHMoKS53aWR0aCAvIDI7XG4gIH1cblxuICBwcml2YXRlIHBhblRvQ2VudGVyKGNhbnZhc0dyb3VwOiBSZWN0LCBpbW1lZGlhdGVseTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucGFuVG8oY2FudmFzR3JvdXAuY2VudGVyWCwgY2FudmFzR3JvdXAuY2VudGVyWSwgaW1tZWRpYXRlbHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYW5Ubyh4OiBudW1iZXIsIHk6IG51bWJlciwgaW1tZWRpYXRlbHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlci52aWV3cG9ydC5wYW5UbyhcbiAgICAgIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSxcbiAgICAgIGltbWVkaWF0ZWx5XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Vmlld3BvcnRDZW50ZXIoKTogUG9pbnQge1xuICAgIHJldHVybiB0aGlzLnZpZXdlci52aWV3cG9ydC5nZXRDZW50ZXIodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZpZXdwb3J0Qm91bmRzKCk6IFJlY3Qge1xuICAgIHJldHVybiB0aGlzLnZpZXdlci52aWV3cG9ydC5nZXRCb3VuZHModHJ1ZSk7XG4gIH1cbn1cbiJdfQ==