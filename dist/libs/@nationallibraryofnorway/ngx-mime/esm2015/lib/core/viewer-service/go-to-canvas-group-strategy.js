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
            const calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(ViewerMode.NAVIGATOR);
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
            const calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(ViewerMode.NAVIGATOR);
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
    panToCenter(canvasGroup, immediately = false) {
        this.panTo(canvasGroup.centerX, canvasGroup.centerY, immediately);
    }
    panTo(x, y, immediately = false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2NvcmUvdmlld2VyLXNlcnZpY2UvZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQWdCeEYsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxZQUNVLE1BQVcsRUFDWCxZQUFzQixFQUN0QixhQUE0QixFQUM1QixXQUF3QixFQUN4QixNQUF3QixFQUN4QixnQkFBa0M7UUFMbEMsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQztJQUVKLGVBQWUsQ0FBQyxXQUF3QjtRQUN0QyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUM5RSxXQUFXLENBQUMsZ0JBQWdCLENBQzdCLENBQUM7UUFDRixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUMzQyxDQUFDO1FBQ0YsSUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLCtCQUErQixFQUMzQztZQUNBLElBQUksQ0FBUyxDQUFDO1lBRWQsSUFBSSxtQkFBbUIsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3RELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRTtvQkFDN0MsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUNyRSxXQUFXLENBQUMsZ0JBQWdCLENBQzdCLENBQUM7b0JBQ0YsTUFBTSxtQkFBbUIsR0FDdkIsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUN6RCxtQkFBbUIsQ0FDcEIsQ0FBQztvQkFDRixDQUFDO3dCQUNDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHOzRCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs0QkFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLENBQUM7d0JBQ0MsSUFBSSxDQUFDLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEdBQUc7NEJBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzs0QkFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7aUJBQU07Z0JBQ0wsQ0FBQztvQkFDQyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsR0FBRzt3QkFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO3dCQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQTZCO2dCQUNqRCxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUNuQyxJQUFJLE9BQU8sRUFBRSxDQUFDLG9CQUFvQjtnQkFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQzNELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDaEUsbUJBQW1CLENBQ3BCLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQzFDLENBQUMsRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxrQkFBMEI7UUFDdkQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixHQUFHLENBQUMsRUFBRTtZQUNsRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNoRCxNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQzVFLGNBQWMsQ0FDZixDQUFDO1lBRUYsTUFBTSxnQ0FBZ0MsR0FBRywrQkFBK0IsQ0FBQyxNQUFNLENBQzdFLFVBQVUsQ0FBQyxTQUFTLENBQ3JCLENBQUM7WUFDRixNQUFNLG1CQUFtQixHQUFHLGdDQUFnQyxDQUFDLHdCQUF3QixDQUNuRjtnQkFDRSxTQUFTLEVBQUUsU0FBUyxDQUFDLFFBQVE7Z0JBQzdCLHVCQUF1QixFQUFFLHVCQUF1QjtnQkFDaEQsd0JBQXdCLEVBQUUsa0JBQWtCO2dCQUM1QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQ3hDLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ25CLGdCQUFnQixFQUFFLG1CQUFtQjtnQkFDckMsV0FBVyxFQUFFLEtBQUs7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0sbUJBQW1CLENBQUMsa0JBQTBCO1FBQ25ELElBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUI7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFDdkM7WUFDQSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNoRCxNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQzVFLGNBQWMsQ0FDZixDQUFDO1lBRUYsTUFBTSxnQ0FBZ0MsR0FBRywrQkFBK0IsQ0FBQyxNQUFNLENBQzdFLFVBQVUsQ0FBQyxTQUFTLENBQ3JCLENBQUM7WUFDRixNQUFNLG1CQUFtQixHQUFHLGdDQUFnQyxDQUFDLHdCQUF3QixDQUNuRjtnQkFDRSxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUk7Z0JBQ3pCLHVCQUF1QixFQUFFLHVCQUF1QjtnQkFDaEQsd0JBQXdCLEVBQUUsa0JBQWtCO2dCQUM1QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQ3hDLENBQ0YsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ25CLGdCQUFnQixFQUFFLG1CQUFtQjtnQkFDckMsV0FBVyxFQUFFLEtBQUs7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0sbUJBQW1CO1FBQ3hCLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztRQUMzRSxNQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3BFLHVCQUF1QixDQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sS0FBSyxDQUFDLE1BQVk7UUFDeEIsT0FBTyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxNQUFZO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLFdBQVcsQ0FBQyxXQUFpQixFQUFFLFdBQVcsR0FBRyxLQUFLO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxXQUFXLEdBQUcsS0FBSztRQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ3hCO1lBQ0UsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztTQUNMLEVBQ0QsV0FBVyxDQUNaLENBQUM7SUFDSixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gJy4uL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJDb25maWcgfSBmcm9tICcuLi9taW1lLXZpZXdlci1jb25maWcnO1xuaW1wb3J0IHsgTW9kZVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlLXNlcnZpY2UvbW9kZS5zZXJ2aWNlJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy9vcHRpb25zJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vbW9kZWxzL3BvaW50JztcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLi9tb2RlbHMvcmVjdCc7XG5pbXBvcnQgeyBWaWV3ZXJNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1tb2RlJztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5pbXBvcnQgeyBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBGYWN0b3J5IH0gZnJvbSAnLi9jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vem9vbS1zdHJhdGVneSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FudmFzR3JvdXAge1xuICBjYW52YXNHcm91cEluZGV4OiBudW1iZXI7XG4gIGRpcmVjdGlvbj86IERpcmVjdGlvbjtcbiAgaW1tZWRpYXRlbHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5IHtcbiAgZ29Ub0NhbnZhc0dyb3VwKGNhbnZhc0dyb3VwOiBDYW52YXNHcm91cCk6IHZvaWQ7XG4gIGdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKGN1cnJlbnRDYW52YXNJbmRleDogbnVtYmVyKTogdm9pZDtcbiAgZ29Ub05leHRDYW52YXNHcm91cChjdXJyZW50Q2FudmFzSW5kZXg6IG51bWJlcik6IHZvaWQ7XG4gIGNlbnRlckN1cnJlbnRDYW52YXMoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRHb1RvQ2FudmFzR3JvdXBTdHJhdGVneSBpbXBsZW1lbnRzIEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3ZXI6IGFueSxcbiAgICBwcml2YXRlIHpvb21TdHJhdGVneTogU3RyYXRlZ3ksXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kZVNlcnZpY2U6IE1vZGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBNaW1lVmlld2VyQ29uZmlnLFxuICAgIHByaXZhdGUgdmlld2luZ0RpcmVjdGlvbjogVmlld2luZ0RpcmVjdGlvblxuICApIHt9XG5cbiAgZ29Ub0NhbnZhc0dyb3VwKGNhbnZhc0dyb3VwOiBDYW52YXNHcm91cCkge1xuICAgIGNvbnN0IG9sZENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXg7XG4gICAgdGhpcy5jYW52YXNTZXJ2aWNlLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmNvbnN0cmFpblRvUmFuZ2UoXG4gICAgICBjYW52YXNHcm91cC5jYW52YXNHcm91cEluZGV4XG4gICAgKTtcbiAgICBjb25zdCBuZXdDYW52YXNHcm91cCA9IHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNHcm91cFJlY3QoXG4gICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCAmJlxuICAgICAgdGhpcy5jb25maWcucHJlc2VydmVab29tT25DYW52YXNHcm91cENoYW5nZVxuICAgICkge1xuICAgICAgbGV0IHg6IG51bWJlcjtcblxuICAgICAgaWYgKG9sZENhbnZhc0dyb3VwSW5kZXggPiBjYW52YXNHcm91cC5jYW52YXNHcm91cEluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5zdGFydE9uVG9wT25DYW52YXNHcm91cENoYW5nZSkge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc0dyb3VwSW5kZXhlcyA9IHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNlc1BlckNhbnZhc0dyb3VwKFxuICAgICAgICAgICAgY2FudmFzR3JvdXAuY2FudmFzR3JvdXBJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNDYW52YXNJbmRleCA9XG4gICAgICAgICAgICBjYW52YXNHcm91cEluZGV4ZXNbY2FudmFzR3JvdXBJbmRleGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2FudmFzUmVjdCA9IHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNSZWN0KFxuICAgICAgICAgICAgcHJldmlvdXNDYW52YXNJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgICAgeCA9XG4gICAgICAgICAgICB0aGlzLnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSXG4gICAgICAgICAgICAgID8gdGhpcy5sZWZ0WChwcmV2aW91c0NhbnZhc1JlY3QpXG4gICAgICAgICAgICAgIDogdGhpcy5yaWdodFgobmV3Q2FudmFzR3JvdXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHggPVxuICAgICAgICAgICAgdGhpcy52aWV3aW5nRGlyZWN0aW9uID09PSBWaWV3aW5nRGlyZWN0aW9uLkxUUlxuICAgICAgICAgICAgICA/IHRoaXMucmlnaHRYKG5ld0NhbnZhc0dyb3VwKVxuICAgICAgICAgICAgICA6IHRoaXMubGVmdFgobmV3Q2FudmFzR3JvdXApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB4ID1cbiAgICAgICAgICB0aGlzLnZpZXdpbmdEaXJlY3Rpb24gPT09IFZpZXdpbmdEaXJlY3Rpb24uTFRSXG4gICAgICAgICAgICA/IHRoaXMubGVmdFgobmV3Q2FudmFzR3JvdXApXG4gICAgICAgICAgICA6IHRoaXMucmlnaHRYKG5ld0NhbnZhc0dyb3VwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeSA9IHRoaXMuY29uZmlnLnN0YXJ0T25Ub3BPbkNhbnZhc0dyb3VwQ2hhbmdlXG4gICAgICAgID8gbmV3Q2FudmFzR3JvdXAueSArXG4gICAgICAgICAgdGhpcy5nZXRWaWV3cG9ydEJvdW5kcygpLmhlaWdodCAvIDIgLVxuICAgICAgICAgIG5ldyBPcHRpb25zKCkuY29sbGVjdGlvblRpbGVNYXJnaW5cbiAgICAgICAgOiB0aGlzLmdldFZpZXdwb3J0Q2VudGVyKCkueTtcblxuICAgICAgdGhpcy5wYW5Ubyh4LCB5LCBjYW52YXNHcm91cC5pbW1lZGlhdGVseSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRUQpIHtcbiAgICAgIGNvbnN0IG9sZENhbnZhc0dyb3VwQ2VudGVyID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwUmVjdChcbiAgICAgICAgb2xkQ2FudmFzR3JvdXBJbmRleFxuICAgICAgKTtcbiAgICAgIHRoaXMucGFuVG9DZW50ZXIob2xkQ2FudmFzR3JvdXBDZW50ZXIsIGNhbnZhc0dyb3VwLmltbWVkaWF0ZWx5KTtcbiAgICAgIHRoaXMuem9vbVN0cmF0ZWd5LmdvVG9Ib21lWm9vbSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGFuVG9DZW50ZXIobmV3Q2FudmFzR3JvdXAsIGNhbnZhc0dyb3VwLmltbWVkaWF0ZWx5KTtcbiAgICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID0gVmlld2VyTW9kZS5QQUdFO1xuICAgICAgfSwgVmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy5PU0RBbmltYXRpb25UaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5Ub0NlbnRlcihuZXdDYW52YXNHcm91cCwgY2FudmFzR3JvdXAuaW1tZWRpYXRlbHkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnb1RvUHJldmlvdXNDYW52YXNHcm91cChjdXJyZW50Q2FudmFzSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXggPiAwKSB7XG4gICAgICBjb25zdCB2aWV3cG9ydENlbnRlciA9IHRoaXMuZ2V0Vmlld3BvcnRDZW50ZXIoKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDbG9zZXN0Q2FudmFzR3JvdXBJbmRleChcbiAgICAgICAgdmlld3BvcnRDZW50ZXJcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5ID0gQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwRmFjdG9yeS5jcmVhdGUoXG4gICAgICAgIFZpZXdlck1vZGUuTkFWSUdBVE9SXG4gICAgICApO1xuICAgICAgY29uc3QgbmV3Q2FudmFzR3JvdXBJbmRleCA9IGNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5LmNhbGN1bGF0ZU5leHRDYW52YXNHcm91cChcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGlvbjogRGlyZWN0aW9uLlBSRVZJT1VTLFxuICAgICAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCxcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBDZW50ZXI6IGN1cnJlbnRDYW52YXNJbmRleCxcbiAgICAgICAgICB2aWV3aW5nRGlyZWN0aW9uOiB0aGlzLnZpZXdpbmdEaXJlY3Rpb25cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRoaXMuZ29Ub0NhbnZhc0dyb3VwKHtcbiAgICAgICAgY2FudmFzR3JvdXBJbmRleDogbmV3Q2FudmFzR3JvdXBJbmRleCxcbiAgICAgICAgaW1tZWRpYXRlbHk6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ29Ub05leHRDYW52YXNHcm91cChjdXJyZW50Q2FudmFzSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCA8XG4gICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubnVtYmVyT2ZDYW52YXNHcm91cHNcbiAgICApIHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0Q2VudGVyID0gdGhpcy5nZXRWaWV3cG9ydENlbnRlcigpO1xuICAgICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuZmluZENsb3Nlc3RDYW52YXNHcm91cEluZGV4KFxuICAgICAgICB2aWV3cG9ydENlbnRlclxuICAgICAgKTtcblxuICAgICAgY29uc3QgY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kgPSBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBGYWN0b3J5LmNyZWF0ZShcbiAgICAgICAgVmlld2VyTW9kZS5OQVZJR0FUT1JcbiAgICAgICk7XG4gICAgICBjb25zdCBuZXdDYW52YXNHcm91cEluZGV4ID0gY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kuY2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwKFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBEaXJlY3Rpb24uTkVYVCxcbiAgICAgICAgICBjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogY3VycmVudENhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyOiBjdXJyZW50Q2FudmFzSW5kZXgsXG4gICAgICAgICAgdmlld2luZ0RpcmVjdGlvbjogdGhpcy52aWV3aW5nRGlyZWN0aW9uXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLmdvVG9DYW52YXNHcm91cCh7XG4gICAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IG5ld0NhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNlbnRlckN1cnJlbnRDYW52YXMoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXggPSB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXg7XG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwQ2VudGVyID0gdGhpcy5jYW52YXNTZXJ2aWNlLmdldENhbnZhc0dyb3VwUmVjdChcbiAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgKTtcbiAgICB0aGlzLnBhblRvQ2VudGVyKGN1cnJlbnRDYW52YXNHcm91cENlbnRlciwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBsZWZ0WChjYW52YXM6IFJlY3QpOiBudW1iZXIge1xuICAgIHJldHVybiBjYW52YXMueCArIHRoaXMuZ2V0Vmlld3BvcnRCb3VuZHMoKS53aWR0aCAvIDI7XG4gIH1cblxuICBwcml2YXRlIHJpZ2h0WChjYW52YXM6IFJlY3QpOiBudW1iZXIge1xuICAgIHJldHVybiBjYW52YXMueCArIGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0Vmlld3BvcnRCb3VuZHMoKS53aWR0aCAvIDI7XG4gIH1cblxuICBwcml2YXRlIHBhblRvQ2VudGVyKGNhbnZhc0dyb3VwOiBSZWN0LCBpbW1lZGlhdGVseSA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5wYW5UbyhjYW52YXNHcm91cC5jZW50ZXJYLCBjYW52YXNHcm91cC5jZW50ZXJZLCBpbW1lZGlhdGVseSk7XG4gIH1cblxuICBwcml2YXRlIHBhblRvKHg6IG51bWJlciwgeTogbnVtYmVyLCBpbW1lZGlhdGVseSA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXIudmlld3BvcnQucGFuVG8oXG4gICAgICB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0sXG4gICAgICBpbW1lZGlhdGVseVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFZpZXdwb3J0Q2VudGVyKCk6IFBvaW50IHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXIudmlld3BvcnQuZ2V0Q2VudGVyKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWaWV3cG9ydEJvdW5kcygpOiBSZWN0IHtcbiAgICByZXR1cm4gdGhpcy52aWV3ZXIudmlld3BvcnQuZ2V0Qm91bmRzKHRydWUpO1xuICB9XG59XG4iXX0=