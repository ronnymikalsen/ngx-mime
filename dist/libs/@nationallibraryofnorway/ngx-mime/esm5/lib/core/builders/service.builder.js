import { Service } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
import { SizesBuilder } from './sizes.builder';
import { TilesBuilder } from './tiles.builder';
var ServiceBuilder = /** @class */ (function () {
    function ServiceBuilder(service) {
        this.service = service;
    }
    ServiceBuilder.prototype.build = function () {
        if (this.service) {
            return new Service({
                id: BuilderUtils.extractId(this.service),
                context: BuilderUtils.extractContext(this.service),
                protocol: this.service.protocol,
                width: this.service.width,
                height: this.service.height,
                sizes: new SizesBuilder(this.service.sizes).build(),
                tiles: new TilesBuilder(this.service.tiles).build(),
                profile: this.service.profile,
                physicalScale: this.service.physicalScale,
                physicalUnits: this.service.physicalUnits,
                service: new ServiceBuilder(this.service.service).build()
            });
        }
        return null;
    };
    return ServiceBuilder;
}());
export { ServiceBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvYnVpbGRlcnMvc2VydmljZS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQztJQUNFLHdCQUFvQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztJQUFHLENBQUM7SUFFcEMsOEJBQUssR0FBTDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksT0FBTyxDQUFDO2dCQUNqQixFQUFFLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxPQUFPLEVBQUUsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2dCQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dCQUMzQixLQUFLLEVBQUUsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ25ELEtBQUssRUFBRSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDbkQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDN0IsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDekMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtnQkFDekMsT0FBTyxFQUFFLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFO2FBQzFELENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBCdWlsZGVyVXRpbHMgfSBmcm9tICcuL2J1aWxkZXItdXRpbHMnO1xuaW1wb3J0IHsgU2l6ZXNCdWlsZGVyIH0gZnJvbSAnLi9zaXplcy5idWlsZGVyJztcbmltcG9ydCB7IFRpbGVzQnVpbGRlciB9IGZyb20gJy4vdGlsZXMuYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogYW55KSB7fVxuXG4gIGJ1aWxkKCk6IFNlcnZpY2Uge1xuICAgIGlmICh0aGlzLnNlcnZpY2UpIHtcbiAgICAgIHJldHVybiBuZXcgU2VydmljZSh7XG4gICAgICAgIGlkOiBCdWlsZGVyVXRpbHMuZXh0cmFjdElkKHRoaXMuc2VydmljZSksXG4gICAgICAgIGNvbnRleHQ6IEJ1aWxkZXJVdGlscy5leHRyYWN0Q29udGV4dCh0aGlzLnNlcnZpY2UpLFxuICAgICAgICBwcm90b2NvbDogdGhpcy5zZXJ2aWNlLnByb3RvY29sLFxuICAgICAgICB3aWR0aDogdGhpcy5zZXJ2aWNlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc2VydmljZS5oZWlnaHQsXG4gICAgICAgIHNpemVzOiBuZXcgU2l6ZXNCdWlsZGVyKHRoaXMuc2VydmljZS5zaXplcykuYnVpbGQoKSxcbiAgICAgICAgdGlsZXM6IG5ldyBUaWxlc0J1aWxkZXIodGhpcy5zZXJ2aWNlLnRpbGVzKS5idWlsZCgpLFxuICAgICAgICBwcm9maWxlOiB0aGlzLnNlcnZpY2UucHJvZmlsZSxcbiAgICAgICAgcGh5c2ljYWxTY2FsZTogdGhpcy5zZXJ2aWNlLnBoeXNpY2FsU2NhbGUsXG4gICAgICAgIHBoeXNpY2FsVW5pdHM6IHRoaXMuc2VydmljZS5waHlzaWNhbFVuaXRzLFxuICAgICAgICBzZXJ2aWNlOiBuZXcgU2VydmljZUJ1aWxkZXIodGhpcy5zZXJ2aWNlLnNlcnZpY2UpLmJ1aWxkKClcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19