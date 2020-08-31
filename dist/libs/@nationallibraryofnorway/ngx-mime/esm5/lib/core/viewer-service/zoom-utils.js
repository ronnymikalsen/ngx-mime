var ZoomUtils = /** @class */ (function () {
    function ZoomUtils() {
    }
    /**
     *
     * @param Point in OSD-viewport-coordinates
     * @param Rect canvasGroupBounds
     */
    ZoomUtils.constrainPositionToCanvasGroup = function (point, canvasGroupBounds) {
        if (point.x < canvasGroupBounds.x) {
            point.x = canvasGroupBounds.x;
        }
        else if (point.x > canvasGroupBounds.x + canvasGroupBounds.width) {
            point.x = canvasGroupBounds.x + canvasGroupBounds.width;
        }
        return point;
    };
    ZoomUtils.constraintZoomFactor = function (zoomFactor, currentZoom, maxZoom) {
        var target = currentZoom * zoomFactor;
        return target > maxZoom ? (maxZoom / target) * zoomFactor : zoomFactor;
    };
    return ZoomUtils;
}());
export { ZoomUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3pvb20tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFBQTtJQTBCQSxDQUFDO0lBekJDOzs7O09BSUc7SUFDSSx3Q0FBOEIsR0FBckMsVUFDRSxLQUFZLEVBQ1osaUJBQXVCO1FBRXZCLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUU7WUFDakMsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDL0I7YUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUNsRSxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7U0FDekQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSw4QkFBb0IsR0FBM0IsVUFDRSxVQUFrQixFQUNsQixXQUFtQixFQUNuQixPQUFlO1FBRWYsSUFBTSxNQUFNLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUN4QyxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ3pFLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3JlY3QnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9tb2RlbHMvcG9pbnQnO1xuXG5leHBvcnQgY2xhc3MgWm9vbVV0aWxzIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBQb2ludCBpbiBPU0Qtdmlld3BvcnQtY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtIFJlY3QgY2FudmFzR3JvdXBCb3VuZHNcbiAgICovXG4gIHN0YXRpYyBjb25zdHJhaW5Qb3NpdGlvblRvQ2FudmFzR3JvdXAoXG4gICAgcG9pbnQ6IFBvaW50LFxuICAgIGNhbnZhc0dyb3VwQm91bmRzOiBSZWN0XG4gICk6IFBvaW50IHtcbiAgICBpZiAocG9pbnQueCA8IGNhbnZhc0dyb3VwQm91bmRzLngpIHtcbiAgICAgIHBvaW50LnggPSBjYW52YXNHcm91cEJvdW5kcy54O1xuICAgIH0gZWxzZSBpZiAocG9pbnQueCA+IGNhbnZhc0dyb3VwQm91bmRzLnggKyBjYW52YXNHcm91cEJvdW5kcy53aWR0aCkge1xuICAgICAgcG9pbnQueCA9IGNhbnZhc0dyb3VwQm91bmRzLnggKyBjYW52YXNHcm91cEJvdW5kcy53aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cmFpbnRab29tRmFjdG9yKFxuICAgIHpvb21GYWN0b3I6IG51bWJlcixcbiAgICBjdXJyZW50Wm9vbTogbnVtYmVyLFxuICAgIG1heFpvb206IG51bWJlclxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHRhcmdldCA9IGN1cnJlbnRab29tICogem9vbUZhY3RvcjtcbiAgICByZXR1cm4gdGFyZ2V0ID4gbWF4Wm9vbSA/IChtYXhab29tIC8gdGFyZ2V0KSAqIHpvb21GYWN0b3IgOiB6b29tRmFjdG9yO1xuICB9XG59XG4iXX0=