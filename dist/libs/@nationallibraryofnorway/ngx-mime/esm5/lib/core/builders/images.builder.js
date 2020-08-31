import { Images } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
import { ResourceBuilder } from './resource.builder';
var ImagesBuilder = /** @class */ (function () {
    function ImagesBuilder(images) {
        this.images = images;
    }
    ImagesBuilder.prototype.build = function () {
        var images = [];
        if (this.images) {
            for (var i = 0; i < this.images.length; i++) {
                var image = this.images[i];
                images.push(new Images({
                    id: BuilderUtils.extractId(image),
                    type: BuilderUtils.extracType(image),
                    motivation: image.motivation,
                    resource: new ResourceBuilder(image.resource).build(),
                    on: image.on
                }));
            }
        }
        return images;
    };
    return ImagesBuilder;
}());
export { ImagesBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9idWlsZGVycy9pbWFnZXMuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRDtJQUNFLHVCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUFHLENBQUM7SUFFckMsNkJBQUssR0FBTDtRQUNFLElBQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQ1QsSUFBSSxNQUFNLENBQUM7b0JBQ1QsRUFBRSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO29CQUNqQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtvQkFDNUIsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQ3JELEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtpQkFDYixDQUFDLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VzIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IEJ1aWxkZXJVdGlscyB9IGZyb20gJy4vYnVpbGRlci11dGlscyc7XG5pbXBvcnQgeyBSZXNvdXJjZUJ1aWxkZXIgfSBmcm9tICcuL3Jlc291cmNlLmJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VzQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VzOiBhbnlbXSkge31cblxuICBidWlsZCgpOiBJbWFnZXNbXSB7XG4gICAgY29uc3QgaW1hZ2VzOiBJbWFnZXNbXSA9IFtdO1xuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuaW1hZ2VzW2ldO1xuICAgICAgICBpbWFnZXMucHVzaChcbiAgICAgICAgICBuZXcgSW1hZ2VzKHtcbiAgICAgICAgICAgIGlkOiBCdWlsZGVyVXRpbHMuZXh0cmFjdElkKGltYWdlKSxcbiAgICAgICAgICAgIHR5cGU6IEJ1aWxkZXJVdGlscy5leHRyYWNUeXBlKGltYWdlKSxcbiAgICAgICAgICAgIG1vdGl2YXRpb246IGltYWdlLm1vdGl2YXRpb24sXG4gICAgICAgICAgICByZXNvdXJjZTogbmV3IFJlc291cmNlQnVpbGRlcihpbWFnZS5yZXNvdXJjZSkuYnVpbGQoKSxcbiAgICAgICAgICAgIG9uOiBpbWFnZS5vblxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWFnZXM7XG4gIH1cbn1cbiJdfQ==