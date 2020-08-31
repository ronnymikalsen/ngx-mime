import { Canvas } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
import { ImagesBuilder } from './images.builder';
var CanvasBuilder = /** @class */ (function () {
    function CanvasBuilder(canvases) {
        this.canvases = canvases;
    }
    CanvasBuilder.prototype.build = function () {
        var canvases = [];
        if (this.canvases) {
            for (var i = 0; i < this.canvases.length; i++) {
                var canvas = this.canvases[i];
                canvases.push(new Canvas({
                    id: BuilderUtils.extractId(canvas),
                    type: BuilderUtils.extracType(canvas),
                    label: canvas.label,
                    thumbnail: canvas.thumbnail,
                    height: canvas.height,
                    width: canvas.width,
                    images: new ImagesBuilder(canvas.images).build()
                }));
            }
        }
        return canvases;
    };
    return CanvasBuilder;
}());
export { CanvasBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9idWlsZGVycy9jYW52YXMuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUNFLHVCQUFvQixRQUFlO1FBQWYsYUFBUSxHQUFSLFFBQVEsQ0FBTztJQUFHLENBQUM7SUFFdkMsNkJBQUssR0FBTDtRQUNFLElBQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxRQUFRLENBQUMsSUFBSSxDQUNYLElBQUksTUFBTSxDQUFDO29CQUNULEVBQUUsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztvQkFDbEMsSUFBSSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO29CQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztvQkFDM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO29CQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLE1BQU0sRUFBRSxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFO2lCQUNqRCxDQUFDLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IEJ1aWxkZXJVdGlscyB9IGZyb20gJy4vYnVpbGRlci11dGlscyc7XG5pbXBvcnQgeyBJbWFnZXNCdWlsZGVyIH0gZnJvbSAnLi9pbWFnZXMuYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXNCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYW52YXNlczogYW55W10pIHt9XG5cbiAgYnVpbGQoKTogQ2FudmFzW10ge1xuICAgIGNvbnN0IGNhbnZhc2VzOiBDYW52YXNbXSA9IFtdO1xuICAgIGlmICh0aGlzLmNhbnZhc2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNlc1tpXTtcbiAgICAgICAgY2FudmFzZXMucHVzaChcbiAgICAgICAgICBuZXcgQ2FudmFzKHtcbiAgICAgICAgICAgIGlkOiBCdWlsZGVyVXRpbHMuZXh0cmFjdElkKGNhbnZhcyksXG4gICAgICAgICAgICB0eXBlOiBCdWlsZGVyVXRpbHMuZXh0cmFjVHlwZShjYW52YXMpLFxuICAgICAgICAgICAgbGFiZWw6IGNhbnZhcy5sYWJlbCxcbiAgICAgICAgICAgIHRodW1ibmFpbDogY2FudmFzLnRodW1ibmFpbCxcbiAgICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICBpbWFnZXM6IG5ldyBJbWFnZXNCdWlsZGVyKGNhbnZhcy5pbWFnZXMpLmJ1aWxkKClcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FudmFzZXM7XG4gIH1cbn1cbiJdfQ==