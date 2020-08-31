import { OnePageCalculatePagePositionStrategy } from './one-page-calculate-page-position-strategy';
import { TwoPageCalculateCanvasGroupPositionStrategy } from './two-page-calculate-page-position-strategy';
import { ViewerLayout } from '../models/viewer-layout';
var CalculateCanvasGroupPositionFactory = /** @class */ (function () {
    function CalculateCanvasGroupPositionFactory() {
    }
    CalculateCanvasGroupPositionFactory.create = function (viewerLayout, paged) {
        if (viewerLayout === ViewerLayout.ONE_PAGE || !paged) {
            return new OnePageCalculatePagePositionStrategy();
        }
        else if (viewerLayout === ViewerLayout.TWO_PAGE) {
            return new TwoPageCalculateCanvasGroupPositionStrategy();
        }
    };
    return CalculateCanvasGroupPositionFactory;
}());
export { CalculateCanvasGroupPositionFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLWNhbnZhcy1ncm91cC1wb3NpdGlvbi1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvY2FudmFzLWdyb3VwLXBvc2l0aW9uL2NhbGN1bGF0ZS1jYW52YXMtZ3JvdXAtcG9zaXRpb24tZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQ7SUFBQTtJQVdBLENBQUM7SUFWZSwwQ0FBTSxHQUFwQixVQUNFLFlBQTBCLEVBQzFCLEtBQWM7UUFFZCxJQUFJLFlBQVksS0FBSyxZQUFZLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BELE9BQU8sSUFBSSxvQ0FBb0MsRUFBRSxDQUFDO1NBQ25EO2FBQU0sSUFBSSxZQUFZLEtBQUssWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUNqRCxPQUFPLElBQUksMkNBQTJDLEVBQUUsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFDSCwwQ0FBQztBQUFELENBQUMsQUFYRCxJQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9jYWxjdWxhdGUtY2FudmFzLWdyb3VwLXBvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7IE9uZVBhZ2VDYWxjdWxhdGVQYWdlUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4vb25lLXBhZ2UtY2FsY3VsYXRlLXBhZ2UtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgVHdvUGFnZUNhbGN1bGF0ZUNhbnZhc0dyb3VwUG9zaXRpb25TdHJhdGVneSB9IGZyb20gJy4vdHdvLXBhZ2UtY2FsY3VsYXRlLXBhZ2UtcG9zaXRpb24tc3RyYXRlZ3knO1xuaW1wb3J0IHsgVmlld2VyTGF5b3V0IH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1sYXlvdXQnO1xuXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvbkZhY3Rvcnkge1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZShcbiAgICB2aWV3ZXJMYXlvdXQ6IFZpZXdlckxheW91dCxcbiAgICBwYWdlZDogYm9vbGVhblxuICApOiBDYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGlmICh2aWV3ZXJMYXlvdXQgPT09IFZpZXdlckxheW91dC5PTkVfUEFHRSB8fCAhcGFnZWQpIHtcbiAgICAgIHJldHVybiBuZXcgT25lUGFnZUNhbGN1bGF0ZVBhZ2VQb3NpdGlvblN0cmF0ZWd5KCk7XG4gICAgfSBlbHNlIGlmICh2aWV3ZXJMYXlvdXQgPT09IFZpZXdlckxheW91dC5UV09fUEFHRSkge1xuICAgICAgcmV0dXJuIG5ldyBUd29QYWdlQ2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvblN0cmF0ZWd5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=