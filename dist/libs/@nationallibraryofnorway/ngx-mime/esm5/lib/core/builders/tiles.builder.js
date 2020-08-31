import { Tile } from '../models/manifest';
var TilesBuilder = /** @class */ (function () {
    function TilesBuilder(tiles) {
        this.tiles = tiles;
    }
    TilesBuilder.prototype.build = function () {
        var tiles = [];
        if (this.tiles) {
            for (var i = 0; i < this.tiles.length; i++) {
                var tile = this.tiles[i];
                tiles.push(new Tile({
                    width: tile.width,
                    scaleFactors: tile.scaleFactors
                }));
            }
        }
        return tiles;
    };
    return TilesBuilder;
}());
export { TilesBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL3RpbGVzLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFDO0lBQ0Usc0JBQW9CLEtBQVk7UUFBWixVQUFLLEdBQUwsS0FBSyxDQUFPO0lBQUcsQ0FBQztJQUVwQyw0QkFBSyxHQUFMO1FBQ0UsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSyxDQUFDLElBQUksQ0FDUixJQUFJLElBQUksQ0FBQztvQkFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDaEMsQ0FBQyxDQUNILENBQUM7YUFDSDtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5cbmV4cG9ydCBjbGFzcyBUaWxlc0J1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbGVzOiBhbnlbXSkge31cblxuICBidWlsZCgpOiBUaWxlW10ge1xuICAgIGNvbnN0IHRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBpZiAodGhpcy50aWxlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLnRpbGVzW2ldO1xuICAgICAgICB0aWxlcy5wdXNoKFxuICAgICAgICAgIG5ldyBUaWxlKHtcbiAgICAgICAgICAgIHdpZHRoOiB0aWxlLndpZHRoLFxuICAgICAgICAgICAgc2NhbGVGYWN0b3JzOiB0aWxlLnNjYWxlRmFjdG9yc1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aWxlcztcbiAgfVxufVxuIl19