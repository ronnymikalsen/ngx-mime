import { Side } from '../models/side';
import { Direction } from '../models/direction';
import { ViewerOptions } from '../models/viewer-options';
var SwipeUtils = /** @class */ (function () {
    function SwipeUtils() {
    }
    // Added threshold to prevent sensitive direction-calculation when zoomed in
    SwipeUtils.getSwipeDirection = function (start, end, useThreshold) {
        var deltaX = Math.abs(start.x - end.x);
        var deltaY = Math.abs(start.y - end.y);
        deltaX = useThreshold
            ? deltaX - ViewerOptions.pan.swipeDirectionThreshold
            : deltaX;
        if (start.x > end.x && deltaX >= deltaY) {
            return Direction.LEFT;
        }
        else if (start.x < end.x && deltaX >= deltaY) {
            return Direction.RIGHT;
        }
    };
    SwipeUtils.getSideIfPanningPastEndOfCanvasGroup = function (canvasGroupRect, vpBounds) {
        if (this.isPanningOutsideLeft(canvasGroupRect, vpBounds)) {
            return Side.LEFT;
        }
        else if (this.isPanningOutsideRight(canvasGroupRect, vpBounds)) {
            return Side.RIGHT;
        }
    };
    SwipeUtils.isPanningOutsideCanvasGroup = function (canvasGroupRect, vpBounds) {
        return (this.isPanningOutsideLeft(canvasGroupRect, vpBounds) ||
            this.isPanningOutsideRight(canvasGroupRect, vpBounds));
    };
    SwipeUtils.isPanningOutsideLeft = function (canvasGroupRect, vpBounds) {
        return vpBounds.x < canvasGroupRect.x;
    };
    SwipeUtils.isPanningOutsideRight = function (canvasGroupRect, vpBounds) {
        return (vpBounds.x + vpBounds.width > canvasGroupRect.x + canvasGroupRect.width);
    };
    /**
     *
     * @param direction Current computed direction, expressed as an
     * angle counterclockwise relative to the positive X axis (-pi to pi, in radians).
     * Only valid if speed > 0.
     */
    SwipeUtils.isDirectionInRightSemicircle = function (direction) {
        return direction > -Math.PI / 2 && direction < Math.PI / 2;
    };
    /**
     * @param direction @see isDirectionInRightSemicircle
     */
    SwipeUtils.isDirectionInLeftSemicircle = function (direction) {
        return !this.isDirectionInRightSemicircle(direction) || direction === 0; // fix for speed = 0
    };
    return SwipeUtils;
}());
export { SwipeUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGUtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS92aWV3ZXItc2VydmljZS9zd2lwZS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RDtJQUFBO0lBbUVBLENBQUM7SUFsRUMsNEVBQTRFO0lBQ3JFLDRCQUFpQixHQUF4QixVQUNFLEtBQVksRUFDWixHQUFVLEVBQ1YsWUFBc0I7UUFFdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxZQUFZO1lBQ25CLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUI7WUFDcEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVYLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDdkMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUM5QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRU0sK0NBQW9DLEdBQTNDLFVBQ0UsZUFBcUIsRUFDckIsUUFBYztRQUVkLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsRUFBRTtZQUN4RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7YUFBTSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDaEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVNLHNDQUEyQixHQUFsQyxVQUNFLGVBQXFCLEVBQ3JCLFFBQWM7UUFFZCxPQUFPLENBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUM7WUFDcEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFTSwrQkFBb0IsR0FBM0IsVUFBNEIsZUFBcUIsRUFBRSxRQUFjO1FBQy9ELE9BQU8sUUFBUSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxnQ0FBcUIsR0FBNUIsVUFBNkIsZUFBcUIsRUFBRSxRQUFjO1FBQ2hFLE9BQU8sQ0FDTCxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUN4RSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksdUNBQTRCLEdBQW5DLFVBQW9DLFNBQWlCO1FBQ25ELE9BQU8sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7T0FFRztJQUNJLHNDQUEyQixHQUFsQyxVQUFtQyxTQUFpQjtRQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7SUFDL0YsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3QgfSBmcm9tICcuLi9tb2RlbHMvcmVjdCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL21vZGVscy9wb2ludCc7XG5pbXBvcnQgeyBTaWRlIH0gZnJvbSAnLi4vbW9kZWxzL3NpZGUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBWaWV3ZXJPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1vcHRpb25zJztcbmV4cG9ydCBjbGFzcyBTd2lwZVV0aWxzIHtcbiAgLy8gQWRkZWQgdGhyZXNob2xkIHRvIHByZXZlbnQgc2Vuc2l0aXZlIGRpcmVjdGlvbi1jYWxjdWxhdGlvbiB3aGVuIHpvb21lZCBpblxuICBzdGF0aWMgZ2V0U3dpcGVEaXJlY3Rpb24oXG4gICAgc3RhcnQ6IFBvaW50LFxuICAgIGVuZDogUG9pbnQsXG4gICAgdXNlVGhyZXNob2xkPzogYm9vbGVhblxuICApOiBEaXJlY3Rpb24ge1xuICAgIGxldCBkZWx0YVggPSBNYXRoLmFicyhzdGFydC54IC0gZW5kLngpO1xuICAgIGNvbnN0IGRlbHRhWSA9IE1hdGguYWJzKHN0YXJ0LnkgLSBlbmQueSk7XG4gICAgZGVsdGFYID0gdXNlVGhyZXNob2xkXG4gICAgICA/IGRlbHRhWCAtIFZpZXdlck9wdGlvbnMucGFuLnN3aXBlRGlyZWN0aW9uVGhyZXNob2xkXG4gICAgICA6IGRlbHRhWDtcblxuICAgIGlmIChzdGFydC54ID4gZW5kLnggJiYgZGVsdGFYID49IGRlbHRhWSkge1xuICAgICAgcmV0dXJuIERpcmVjdGlvbi5MRUZUO1xuICAgIH0gZWxzZSBpZiAoc3RhcnQueCA8IGVuZC54ICYmIGRlbHRhWCA+PSBkZWx0YVkpIHtcbiAgICAgIHJldHVybiBEaXJlY3Rpb24uUklHSFQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldFNpZGVJZlBhbm5pbmdQYXN0RW5kT2ZDYW52YXNHcm91cChcbiAgICBjYW52YXNHcm91cFJlY3Q6IFJlY3QsXG4gICAgdnBCb3VuZHM6IFJlY3RcbiAgKTogU2lkZSB7XG4gICAgaWYgKHRoaXMuaXNQYW5uaW5nT3V0c2lkZUxlZnQoY2FudmFzR3JvdXBSZWN0LCB2cEJvdW5kcykpIHtcbiAgICAgIHJldHVybiBTaWRlLkxFRlQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGFubmluZ091dHNpZGVSaWdodChjYW52YXNHcm91cFJlY3QsIHZwQm91bmRzKSkge1xuICAgICAgcmV0dXJuIFNpZGUuUklHSFQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGlzUGFubmluZ091dHNpZGVDYW52YXNHcm91cChcbiAgICBjYW52YXNHcm91cFJlY3Q6IFJlY3QsXG4gICAgdnBCb3VuZHM6IFJlY3RcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNQYW5uaW5nT3V0c2lkZUxlZnQoY2FudmFzR3JvdXBSZWN0LCB2cEJvdW5kcykgfHxcbiAgICAgIHRoaXMuaXNQYW5uaW5nT3V0c2lkZVJpZ2h0KGNhbnZhc0dyb3VwUmVjdCwgdnBCb3VuZHMpXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBpc1Bhbm5pbmdPdXRzaWRlTGVmdChjYW52YXNHcm91cFJlY3Q6IFJlY3QsIHZwQm91bmRzOiBSZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZwQm91bmRzLnggPCBjYW52YXNHcm91cFJlY3QueDtcbiAgfVxuXG4gIHN0YXRpYyBpc1Bhbm5pbmdPdXRzaWRlUmlnaHQoY2FudmFzR3JvdXBSZWN0OiBSZWN0LCB2cEJvdW5kczogUmVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB2cEJvdW5kcy54ICsgdnBCb3VuZHMud2lkdGggPiBjYW52YXNHcm91cFJlY3QueCArIGNhbnZhc0dyb3VwUmVjdC53aWR0aFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBDdXJyZW50IGNvbXB1dGVkIGRpcmVjdGlvbiwgZXhwcmVzc2VkIGFzIGFuXG4gICAqIGFuZ2xlIGNvdW50ZXJjbG9ja3dpc2UgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aXZlIFggYXhpcyAoLXBpIHRvIHBpLCBpbiByYWRpYW5zKS5cbiAgICogT25seSB2YWxpZCBpZiBzcGVlZCA+IDAuXG4gICAqL1xuICBzdGF0aWMgaXNEaXJlY3Rpb25JblJpZ2h0U2VtaWNpcmNsZShkaXJlY3Rpb246IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkaXJlY3Rpb24gPiAtTWF0aC5QSSAvIDIgJiYgZGlyZWN0aW9uIDwgTWF0aC5QSSAvIDI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGRpcmVjdGlvbiBAc2VlIGlzRGlyZWN0aW9uSW5SaWdodFNlbWljaXJjbGVcbiAgICovXG4gIHN0YXRpYyBpc0RpcmVjdGlvbkluTGVmdFNlbWljaXJjbGUoZGlyZWN0aW9uOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNEaXJlY3Rpb25JblJpZ2h0U2VtaWNpcmNsZShkaXJlY3Rpb24pIHx8IGRpcmVjdGlvbiA9PT0gMDsgLy8gZml4IGZvciBzcGVlZCA9IDBcbiAgfVxufVxuIl19