import { Size } from '../models/manifest';
var SizesBuilder = /** @class */ (function () {
    function SizesBuilder(sizes) {
        this.sizes = sizes;
    }
    SizesBuilder.prototype.build = function () {
        var sizes = [];
        if (this.sizes) {
            for (var i = 0; i < this.sizes.length; i++) {
                var size = this.sizes[i];
                sizes.push(new Size(size.width, size.height));
            }
        }
        return sizes;
    };
    return SizesBuilder;
}());
export { SizesBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZXMuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL3NpemVzLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFDO0lBQ0Usc0JBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQUVwQyw0QkFBSyxHQUFMO1FBQ0UsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFiRCxJQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5cbmV4cG9ydCBjbGFzcyBTaXplc0J1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpemVzOiBhbnlbXSkge31cblxuICBidWlsZCgpOiBTaXplW10ge1xuICAgIGNvbnN0IHNpemVzOiBTaXplW10gPSBbXTtcbiAgICBpZiAodGhpcy5zaXplcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnNpemVzW2ldO1xuICAgICAgICBzaXplcy5wdXNoKG5ldyBTaXplKHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaXplcztcbiAgfVxufVxuIl19