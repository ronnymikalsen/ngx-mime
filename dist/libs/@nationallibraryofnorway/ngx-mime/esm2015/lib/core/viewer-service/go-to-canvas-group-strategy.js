import { Direction } from '../models/direction';
import { Options } from '../models/options';
import { ViewerMode } from '../models/viewer-mode';
import { ViewerOptions } from '../models/viewer-options';
import { ViewingDirection } from '../models/viewing-direction';
import { CalculateNextCanvasGroupFactory } from './calculate-next-canvas-group-factory';
export class DefaultGoToCanvasGroupStrategy {
    constructor(viewer, zoomStrategy, canvasService, modeService, config, viewingDirection) {
        this.viewer = viewer;
        this.zoomStrategy = zoomStrategy;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.config = config;
        this.viewingDirection = viewingDirection;
    }
    goToCanvasGroup(canvasGroup) {
        const oldCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
        this.canvasService.currentCanvasGroupIndex = this.canvasService.constrainToRange(canvasGroup.canvasGroupIndex);
        const newCanvasGroup = this.canvasService.getCanvasGroupRect(this.canvasService.currentCanvasGroupIndex);
        if (this.modeService.mode === ViewerMode.PAGE_ZOOMED &&
            this.config.preserveZoomOnCanvasGroupChange) {
            let x;
            if (oldCanvasGroupIndex > canvasGroup.canvasGroupIndex) {
                if (this.config.startOnTopOnCanvasGroupChange) {
                    const canvasGroupIndexes = this.canvasService.getCanvasesPerCanvasGroup(canvasGroup.canvasGroupIndex);
                    const previousCanvasIndex = canvasGroupIndexes[canvasGroupIndexes.length - 1];
                    const previousCanvasRect = this.canvasService.getCanvasRect(previousCanvasIndex);
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
            const y = this.config.startOnTopOnCanvasGroupChange
                ? newCanvasGroup.y +
                    this.getViewportBounds().height / 2 -
                    new Options().collectionTileMargin
                : this.getViewportCenter().y;
            this.panTo(x, y, canvasGroup.immediately);
        }
        else if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            const oldCanvasGroupCenter = this.canvasService.getCanvasGroupRect(oldCanvasGroupIndex);
            this.panToCenter(oldCanvasGroupCenter, canvasGroup.immediately);
            this.zoomStrategy.goToHomeZoom();
            setTimeout(() => {
                this.panToCenter(newCanvasGroup, canvasGroup.immediately);
                this.modeService.mode = ViewerMode.PAGE;
            }, ViewerOptions.transitions.OSDAnimationTime);
        }
        else {
            this.panToCenter(newCanvasGroup, canvasGroup.immediately);
        }
    }
    goToPreviousCanvasGroup(currentCanvasIndex) {
        if (this.canvasService.currentCanvasGroupIndex > 0) {
            const viewportCenter = this.getViewportCenter();
            const currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(viewportCenter);
            const calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(null);
            const newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
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
    }
    goToNextCanvasGroup(currentCanvasIndex) {
        if (this.canvasService.currentCanvasGroupIndex <
            this.canvasService.numberOfCanvasGroups) {
            const viewportCenter = this.getViewportCenter();
            const currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(viewportCenter);
            const calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(null);
            const newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
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
    }
    centerCurrentCanvas() {
        const currentCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
        const currentCanvasGroupCenter = this.canvasService.getCanvasGroupRect(currentCanvasGroupIndex);
        this.panToCenter(currentCanvasGroupCenter, false);
    }
    leftX(canvas) {
        return canvas.x + this.getViewportBounds().width / 2;
    }
    rightX(canvas) {
        return canvas.x + canvas.width - this.getViewportBounds().width / 2;
    }
    panToCenter(canvasGroup, immediately) {
        this.panTo(canvasGroup.centerX, canvasGroup.centerY, immediately);
    }
    panTo(x, y, immediately) {
        this.viewer.viewport.panTo({
            x: x,
            y: y
        }, immediately);
    }
    getViewportCenter() {
        return this.viewer.viewport.getCenter(true);
    }
    getViewportBounds() {
        return this.viewer.viewport.getBounds(true);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdmlld2VyLXNlcnZpY2UvZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWdCeEYsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxZQUNVLE1BQVcsRUFDWCxZQUFzQixFQUN0QixhQUE0QixFQUM1QixXQUF3QixFQUN4QixNQUF3QixFQUN4QixnQkFBa0M7UUFMbEMsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUVKLGVBQWUsQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUM5RSxXQUFXLENBQUMsZ0JBQWdC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QUFDLEtBQUssQ0FDeEI7WUFDRSxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsRUFDRCxXQUFXLENBQ1osQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi4vY2FudmFzLXNlcnZpY2UvY2FudmFzLXNlcnZpY2UnO1xuaW1wb3J0IHsgTWltZVZpZXdlckNvbmZpZyB9IGZyb20gJy4uL21pbWUtdmlld2VyLWNvbmZpZyc7XG5pbXBvcnQgeyBNb2RlU2VydmljZSB9IGZyb20gJy4uL21vZGUtc2VydmljZS9tb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL29wdGlvbnMnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvcG9pbnQnO1xuaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IFZpZXdlck1vZGUgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLW1vZGUnO1xuaW1wb3J0IHsgVmlld2VyT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy92aWV3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdpbmctZGlyZWN0aW9uJztcbmltcG9ydCB7IENhbGN1bGF0ZU5leHRDYW52YXNHcm91cEZhY3RvcnkgfSBmcm9tICcuL2NhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1mYWN0b3J5JztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi96b29tLXN0cmF0ZWd5JztcblxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNHcm91cCB7XG4gIGNhbnZhc0dyb3VwSW5kZXg6IG51bWJlcjtcbiAgZGlyZWN0aW9uPzogRGlyZWN0aW9uO1xuICBpbW1lZGlhdGVseT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kge1xuICBnb1RvQ2FudmFzR3JvdXAoY2FudmFzR3JvdXA6IENhbnZhc0dyb3VwKTogdm9pZDtcbiAgZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoY3VycmVudENhbnZhc0luZGV4OiBudW1iZXIpOiB2b2lkO1xuICBnb1RvTmV4dENhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgY2VudGVyQ3VycmVudENhbnZhcygpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5IGltcGxlbWVudHMgR29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdlcjogYW55LFxuICAgIHByaXZhdGUgem9vbVN0cmF0ZWd5OiBTdHJhdGVneSxcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RlU2VydmljZTogTW9kZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IE1pbWVWaWV3ZXJDb25maWcsXG4gICAgcHJpdmF0ZSB2aWV3aW5nRGlyZWN0aW9uOiBWaWV3aW5nRGlyZWN0aW9uXG4gICkge31cblxuICBnb1RvQ2FudmFzR3JvdXAoY2FudmFzR3JvdXA6IENhbnZhc0dyb3VwKSB7XG4gICAgY29uc3Qgb2xkQ2FudmFzR3JvdXBJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcbiAgICB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuY29uc3RyYWluVG9SYW5nZShcbiAgICAgIGNhbnZhc0dyb3VwLmNhbnZhc0dyb3VwSW5kZXhcbiAgICApO1xuICAgIGNvbnN0IG5ld0NhbnZhc0dyb3VwID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwUmVjdChcbiAgICAgIHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0VfWk9PTUVEICYmXG4gICAgICB0aGlzLmNvbmZpZy5wcmVzZXJ2ZVpvb21PbkNhbnZhc0dyb3VwQ2hhbmdlXG4gICAgKSB7XG4gICAgICBsZXQgeDogbnVtYmVyO1xuXG4gICAgICBpZiAob2xkQ2FudmFzR3JvdXBJbmRleCA+IGNhbnZhc0dyb3VwLmNhbnZhc0dyb3VwSW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnN0YXJ0T25Ub3BPbkNhbnZhc0dyb3VwQ2hhbmdlKSB7XG4gICAgICAgICAgY29uc3QgY2FudmFzR3JvdXBJbmRleGVzID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc2VzUGVyQ2FudmFzR3JvdXAoXG4gICAgICAgICAgICBjYW52YXNHcm91cC5jYW52YXNHcm91cEluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0NhbnZhc0luZGV4ID1cbiAgICAgICAgICAgIGNhbnZhc0dyb3VwSW5kZXhlc1tjYW52YXNHcm91cEluZGV4ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNDYW52YXNSZWN0ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc1JlY3QoXG4gICAgICAgICAgICBwcmV2aW91c0NhbnZhc0luZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB4ID1cbiAgICAgICAgICAgIHRoaXMudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICAgICAgPyB0aGlzLmxlZnRYKHByZXZpb3VzQ2FudmFzUmVjdClcbiAgICAgICAgICAgICAgOiB0aGlzLnJpZ2h0WChuZXdDYW52YXNHcm91cCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeCA9XG4gICAgICAgICAgICB0aGlzLnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSXG4gICAgICAgICAgICAgID8gdGhpcy5yaWdodFgobmV3Q2FudmFzR3JvdXApXG4gICAgICAgICAgICAgIDogdGhpcy5sZWZ0WChuZXdDYW52YXNHcm91cCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPVxuICAgICAgICAgIHRoaXMudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFJcbiAgICAgICAgICAgID8gdGhpcy5sZWZ0WChuZXdDYW52YXNHcm91cClcbiAgICAgICAgICAgIDogdGhpcy5yaWdodFgobmV3Q2FudmFzR3JvdXApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB5ID0gdGhpcy5jb25maWcuc3RhcnRPblRvcE9uQ2FudmFzR3JvdXBDaGFuZ2VcbiAgICAgICAgPyBuZXdDYW52YXNHcm91cC55ICtcbiAgICAgICAgICB0aGlzLmdldFZpZXdwb3J0Qm91bmRzKCkuaGVpZ2h0IC8gMiAtXG4gICAgICAgICAgbmV3IE9wdGlvbnMoKS5jb2xsZWN0aW9uVGlsZU1hcmdpblxuICAgICAgICA6IHRoaXMuZ2V0Vmlld3BvcnRDZW50ZXIoKS55O1xuXG4gICAgICB0aGlzLnBhblRvKHgsIHksIGNhbnZhc0dyb3VwLmltbWVkaWF0ZWx5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCkge1xuICAgICAgY29uc3Qgb2xkQ2FudmFzR3JvdXBDZW50ZXIgPSB0aGlzLmNhbnZhc1NlcnZpY2UuZ2V0Q2FudmFzR3JvdXBSZWN0KFxuICAgICAgICBvbGRDYW52YXNHcm91cEluZGV4XG4gICAgICApO1xuICAgICAgdGhpcy5wYW5Ub0NlbnRlcihvbGRDYW52YXNHcm91cENlbnRlciwgY2FudmFzR3JvdXAuaW1tZWRpYXRlbHkpO1xuICAgICAgdGhpcy56b29tU3RyYXRlZ3kuZ29Ub0hvbWVab29tKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYW5Ub0NlbnRlcihuZXdDYW52YXNHcm91cCwgY2FudmFzR3JvdXAuaW1tZWRpYXRlbHkpO1xuICAgICAgICB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPSBWaWV3ZXJNb2RlLlBBR0U7XG4gICAgICB9LCBWaWV3ZXJPcHRpb25zLnRyYW5zaXRpb25zLk9TREFuaW1hdGlvblRpbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhblRvQ2VudGVyKG5ld0NhbnZhc0dyb3VwLCBjYW52YXNHcm91cC5pbW1lZGlhdGVseSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA+IDApIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0Q2VudGVyID0gdGhpcy5nZXRWaWV3cG9ydENlbnRlcigpO1xuICAgICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuZmluZENsb3Nlc3RDYW52YXNHcm91cEluZGV4KFxuICAgICAgICB2aWV3cG9ydENlbnRlclxuICAgICAgKTtcblxuICAgICAgY29uc3QgY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kgPSBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBGYWN0b3J5LmNyZWF0ZShcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld0NhbnZhc0dyb3VwSW5kZXggPSBjYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneS5jYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXAoXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3Rpb246IERpcmVjdGlvbi5QUkVWSU9VUyxcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogY3VycmVudENhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyOiBjdXJyZW50Q2FudmFzSW5kZXgsXG4gICAgICAgICAgdmlld2luZ0RpcmVjdGlvbjogdGhpcy52aWV3aW5nRGlyZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLmdvVG9DYW52YXNHcm91cCh7XG4gICAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IG5ld0NhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdvVG9OZXh0Q2FudmFzR3JvdXAoY3VycmVudENhbnZhc0luZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPFxuICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm51bWJlck9mQ2FudmFzR3JvdXBzXG4gICAgKSB7XG4gICAgICBjb25zdCB2aWV3cG9ydENlbnRlciA9IHRoaXMuZ2V0Vmlld3BvcnRDZW50ZXIoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDbG9zZXN0Q2FudmFzR3JvdXBJbmRleChcbiAgICAgICAgdmlld3BvcnRDZW50ZXJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5ID0gQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwRmFjdG9yeS5jcmVhdGUoXG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdDYW52YXNHcm91cEluZGV4ID0gY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kuY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwKFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBEaXJlY3Rpb24uTkVYVCxcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogY3VycmVudENhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyOiBjdXJyZW50Q2FudmFzSW5kZXgsXG4gICAgICAgICAgdmlld2luZ0RpcmVjdGlvbjogdGhpcy52aWV3aW5nRGlyZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLmdvVG9DYW52YXNHcm91cCh7XG4gICAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IG5ld0NhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNlbnRlckN1cnJlbnRDYW52YXMoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXg7XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwUmVjdChcbiAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgKTtcbiAgICB0aGlzLnBhblRvQ2VudGVyKGN1cnJlbnRDYW52YXNHcm91cENlbnRlciwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBsZWZ0WChjYW52YXM6IFJlY3QpOiBudW1iZXIge1xuICAgIHJldHVybiBjYW52YXMueCArIHRoaXMuZ2V0Vmlld3BvcnRCb3VuZHMoKS53aWR0aCAvIDI7XG4gIH1cblxuICBwcml2YXRlIHJpZ2h0WChjYW52YXM6IFJlY3QpOiBudW1iZXIge1xuICAgIHJldHVybiBjYW52YXMueCArIGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0Vmlld3BvcnRCb3VuZHMoKS53aWR0aCAvIDI7XG4gIH1cblxuICBwcml2YXRlIHBhblRvQ2VudGVyKGNhbnZhc0dyb3VwOiBSZWN0LCBpbW1lZGlhdGVseTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucGFuVG8oY2FudmFzR3JvdXAuY2VudGVyWCwgY2FudmFzR3JvdXAuY2VudGVyWSwgaW1tZWRpYXRlbHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBwYW5Ubyh4OiBudW1iZXIsIHk6IG51bWJlciwgaW1tZWRpYXRlbHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlci52aWV3cG9ydC5wYW5UbyhcbiAgICAgIHtcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSxcbiAgICAgIGltbWVkaWF0ZWx5XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Vmlld3BvcnRDZW50ZXIoKTogUG9pbnQge1xuICAgIHJldHVybiB0aGlzLnZpZXdlci52aWV3cG9ydC5nZXRDZW50ZXIodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFZpZXdwb3J0Qm91bmRzKCk6IFJlY3Qge1xuICAgIHJldHVybiB0aGlzLnZpZXdlci52aWV3cG9ydC5nZXRCb3VuZHModHJ1ZSk7XG4gIH1cbn1cbiJdfQ==