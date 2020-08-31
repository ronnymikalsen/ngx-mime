export class ZoomUtils {
    /**
     *
     * @param Point in OSD-viewport-coordinates
     * @param Rect canvasGroupBounds
     */
    static constrainPositionToCanvasGroup(point, canvasGroupBounds) {
        if (point.x < canvasGroupBounds.x) {
            point.x = canvasGroupBounds.x;
        }
        else if (point.x > canvasGroupBounds.x + canvasGroupBounds.width) {
            point.x = canvasGroupBounds.x + canvasGroupBounds.width;
        }
        return point;
    }
    static constraintZoomFactor(zoomFactor, currentZoom, maxZoom) {
        const target = currentZoom * zoomFactor;
        return target > maxZoom ? (maxZoom / target) * zoomFactor : zoomFactor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3pvb20tdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLFNBQVM7SUFDcEI7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyw4QkFBOEIsQ0FDbkMsS0FBWSxFQUNaLGlCQUF1QjtRQUV2QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLEtBQUssQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1NBQy9CO2FBQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDbEUsS0FBSyxDQUFDLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUN6QixVQUFrQixFQUNsQixXQUFtQixFQUNuQixPQUFlO1FBRWYsTUFBTSxNQUFNLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUN4QyxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ3pFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3QgfSBmcm9tICcuLi9tb2RlbHMvcmVjdCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL21vZGVscy9wb2ludCc7XG5cbmV4cG9ydCBjbGFzcyBab29tVXRpbHMge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIFBvaW50IGluIE9TRC12aWV3cG9ydC1jb29yZGluYXRlc1xuICAgKiBAcGFyYW0gUmVjdCBjYW52YXNHcm91cEJvdW5kc1xuICAgKi9cbiAgc3RhdGljIGNvbnN0cmFpblBvc2l0aW9uVG9DYW52YXNHcm91cChcbiAgICBwb2ludDogUG9pbnQsXG4gICAgY2FudmFzR3JvdXBCb3VuZHM6IFJlY3RcbiAgKTogUG9pbnQge1xuICAgIGlmIChwb2ludC54IDwgY2FudmFzR3JvdXBCb3VuZHMueCkge1xuICAgICAgcG9pbnQueCA9IGNhbnZhc0dyb3VwQm91bmRzLng7XG4gICAgfSBlbHNlIGlmIChwb2ludC54ID4gY2FudmFzR3JvdXBCb3VuZHMueCArIGNhbnZhc0dyb3VwQm91bmRzLndpZHRoKSB7XG4gICAgICBwb2ludC54ID0gY2FudmFzR3JvdXBCb3VuZHMueCArIGNhbnZhc0dyb3VwQm91bmRzLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnQ7XG4gIH1cblxuICBzdGF0aWMgY29uc3RyYWludFpvb21GYWN0b3IoXG4gICAgem9vbUZhY3RvcjogbnVtYmVyLFxuICAgIGN1cnJlbnRab29tOiBudW1iZXIsXG4gICAgbWF4Wm9vbTogbnVtYmVyXG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgdGFyZ2V0ID0gY3VycmVudFpvb20gKiB6b29tRmFjdG9yO1xuICAgIHJldHVybiB0YXJnZXQgPiBtYXhab29tID8gKG1heFpvb20gLyB0YXJnZXQpICogem9vbUZhY3RvciA6IHpvb21GYWN0b3I7XG4gIH1cbn1cbiJdfQ==