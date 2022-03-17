import { ViewingDirection } from '../../../models/viewing-direction';
export class BuilderUtils {
    static extractId(value) {
        return value['id'];
    }
    static extracType(value) {
        return value['type'];
    }
    static extractContext(value) {
        return value['@context'];
    }
    static extractViewingDirection(value) {
        if (value['viewingDirection'] === 'right-to-left') {
            return ViewingDirection.RTL;
        }
        else {
            return ViewingDirection.LTR;
        }
    }
    static extractViewingHint(value) {
        if (Array.isArray(value)) {
            return value[0];
        }
        return undefined;
    }
    static findCanvasIndex(canvases, sequences) {
        let index = -1;
        if (canvases[0]) {
            index = sequences[0].canvases.findIndex((canvas) => canvas.id === canvases[0].id);
        }
        return index;
    }
    static extractLogo(provider) {
        let logo;
        if (Array.isArray(provider)) {
            logo = this.extractId(provider[0].logo[0]);
        }
        return logo;
    }
    static extractLanguageValue(data, preferredLanguage) {
        if (!data) {
            return '';
        }
        const key = preferredLanguage && data[preferredLanguage]
            ? preferredLanguage
            : this.extractDefaultLanguage(data);
        return data[key][0];
    }
    static extractDefaultLanguage(data) {
        return Object.keys(data)[0];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL2J1aWxkZXJzL2lpaWYvdjMvYnVpbGRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVU7UUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBVTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBVTtRQUN2QyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLGVBQWUsRUFBRTtZQUNqRCxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztTQUM3QjthQUFNO1lBQ0wsT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQVU7UUFDbEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBZSxFQUFFLFNBQWdCO1FBQ3RELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZixLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2pELENBQUM7U0FDSDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBMkI7UUFDNUMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUN6QixJQUE4QixFQUM5QixpQkFBMEI7UUFFMUIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxNQUFNLEdBQUcsR0FDUCxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDMUMsQ0FBQyxDQUFDLGlCQUFpQjtZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsSUFBOEI7UUFDMUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhcyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3ZpZXdpbmctZGlyZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEJ1aWxkZXJVdGlscyB7XG4gIHN0YXRpYyBleHRyYWN0SWQodmFsdWU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlWydpZCddO1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY1R5cGUodmFsdWU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlWyd0eXBlJ107XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdENvbnRleHQodmFsdWU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHZhbHVlWydAY29udGV4dCddO1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RWaWV3aW5nRGlyZWN0aW9uKHZhbHVlOiBhbnkpOiBWaWV3aW5nRGlyZWN0aW9uIHtcbiAgICBpZiAodmFsdWVbJ3ZpZXdpbmdEaXJlY3Rpb24nXSA9PT0gJ3JpZ2h0LXRvLWxlZnQnKSB7XG4gICAgICByZXR1cm4gVmlld2luZ0RpcmVjdGlvbi5SVEw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBWaWV3aW5nRGlyZWN0aW9uLkxUUjtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdFZpZXdpbmdIaW50KHZhbHVlOiBhbnkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZpbmRDYW52YXNJbmRleChjYW52YXNlczogYW55W10sIHNlcXVlbmNlczogYW55W10pOiBudW1iZXIge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGlmIChjYW52YXNlc1swXSkge1xuICAgICAgaW5kZXggPSBzZXF1ZW5jZXNbMF0uY2FudmFzZXMuZmluZEluZGV4KFxuICAgICAgICAoY2FudmFzOiBDYW52YXMpID0+IGNhbnZhcy5pZCA9PT0gY2FudmFzZXNbMF0uaWRcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0TG9nbyhwcm92aWRlcjogYW55W10gfCB1bmRlZmluZWQpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGxldCBsb2dvO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3ZpZGVyKSkge1xuICAgICAgbG9nbyA9IHRoaXMuZXh0cmFjdElkKHByb3ZpZGVyWzBdLmxvZ29bMF0pO1xuICAgIH1cbiAgICByZXR1cm4gbG9nbztcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0TGFuZ3VhZ2VWYWx1ZShcbiAgICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4sXG4gICAgcHJlZmVycmVkTGFuZ3VhZ2U/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3Qga2V5ID1cbiAgICAgIHByZWZlcnJlZExhbmd1YWdlICYmIGRhdGFbcHJlZmVycmVkTGFuZ3VhZ2VdXG4gICAgICAgID8gcHJlZmVycmVkTGFuZ3VhZ2VcbiAgICAgICAgOiB0aGlzLmV4dHJhY3REZWZhdWx0TGFuZ3VhZ2UoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGFba2V5XVswXTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0RGVmYXVsdExhbmd1YWdlKGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHN0cmluZyB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuICB9XG59XG4iXX0=