import { Resource } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
import { ServiceBuilder } from './service.builder';
var ResourceBuilder = /** @class */ (function () {
    function ResourceBuilder(resource) {
        this.resource = resource;
    }
    ResourceBuilder.prototype.build = function () {
        if (this.resource) {
            return new Resource({
                id: BuilderUtils.extractId(this.resource),
                type: BuilderUtils.extracType(this.resource),
                format: this.resource.format,
                service: new ServiceBuilder(this.resource.service).build(),
                height: this.resource.height,
                width: this.resource.width
            });
        }
        return null;
    };
    return ResourceBuilder;
}());
export { ResourceBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL3Jlc291cmNlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQ7SUFDRSx5QkFBb0IsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRXJDLCtCQUFLLEdBQUw7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxJQUFJLFFBQVEsQ0FBQztnQkFDbEIsRUFBRSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekMsSUFBSSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDNUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDNUIsT0FBTyxFQUFFLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO2dCQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgQnVpbGRlclV0aWxzIH0gZnJvbSAnLi9idWlsZGVyLXV0aWxzJztcbmltcG9ydCB7IFNlcnZpY2VCdWlsZGVyIH0gZnJvbSAnLi9zZXJ2aWNlLmJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvdXJjZTogYW55KSB7fVxuXG4gIGJ1aWxkKCk6IFJlc291cmNlIHtcbiAgICBpZiAodGhpcy5yZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIG5ldyBSZXNvdXJjZSh7XG4gICAgICAgIGlkOiBCdWlsZGVyVXRpbHMuZXh0cmFjdElkKHRoaXMucmVzb3VyY2UpLFxuICAgICAgICB0eXBlOiBCdWlsZGVyVXRpbHMuZXh0cmFjVHlwZSh0aGlzLnJlc291cmNlKSxcbiAgICAgICAgZm9ybWF0OiB0aGlzLnJlc291cmNlLmZvcm1hdCxcbiAgICAgICAgc2VydmljZTogbmV3IFNlcnZpY2VCdWlsZGVyKHRoaXMucmVzb3VyY2Uuc2VydmljZSkuYnVpbGQoKSxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnJlc291cmNlLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IHRoaXMucmVzb3VyY2Uud2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19