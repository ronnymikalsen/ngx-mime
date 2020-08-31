var TileSourceBuilder = /** @class */ (function () {
    function TileSourceBuilder(sequences) {
        this.sequences = sequences;
    }
    TileSourceBuilder.prototype.build = function () {
        var tilesources = [];
        if (this.sequences && this.sequences.length > 0) {
            var canvases = this.sequences[0].canvases;
            for (var i = 0; i < canvases.length; i++) {
                var canvas = canvases[i];
                if (canvas) {
                    tilesources.push(canvas.images[0].resource);
                }
            }
        }
        return tilesources;
    };
    return TileSourceBuilder;
}());
export { TileSourceBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1zb3VyY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL3RpbGUtc291cmNlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFDRSwyQkFBb0IsU0FBcUI7UUFBckIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUFHLENBQUM7SUFFN0MsaUNBQUssR0FBTDtRQUNFLElBQU0sV0FBVyxHQUFjLEVBQUUsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksTUFBTSxFQUFFO29CQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7YUFDRjtTQUNGO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbmNlLCBTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcblxuZXhwb3J0IGNsYXNzIFRpbGVTb3VyY2VCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXF1ZW5jZXM6IFNlcXVlbmNlW10pIHt9XG5cbiAgYnVpbGQoKTogU2VydmljZVtdIHtcbiAgICBjb25zdCB0aWxlc291cmNlczogU2VydmljZVtdID0gW107XG4gICAgaWYgKHRoaXMuc2VxdWVuY2VzICYmIHRoaXMuc2VxdWVuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNhbnZhc2VzID0gdGhpcy5zZXF1ZW5jZXNbMF0uY2FudmFzZXM7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc2VzW2ldO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgdGlsZXNvdXJjZXMucHVzaChjYW52YXMuaW1hZ2VzWzBdLnJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXNvdXJjZXM7XG4gIH1cbn1cbiJdfQ==