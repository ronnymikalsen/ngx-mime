var StaticImageTileSourceStrategy = /** @class */ (function () {
    function StaticImageTileSourceStrategy() {
    }
    StaticImageTileSourceStrategy.prototype.getTileSource = function (resource) {
        return {
            type: 'image',
            url: resource['@id']
        };
    };
    return StaticImageTileSourceStrategy;
}());
export { StaticImageTileSourceStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLWltYWdlLXRpbGUtc291cmNlLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvdmlld2VyLXNlcnZpY2Uvc3RhdGljLWltYWdlLXRpbGUtc291cmNlLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0lBQUE7SUFPQSxDQUFDO0lBTlEscURBQWEsR0FBcEIsVUFBcUIsUUFBaUI7UUFDcEMsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFDSCxvQ0FBQztBQUFELENBQUMsQUFQRCxJQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBUaWxlU291cmNlU3RyYXRlZ3kgfSBmcm9tICcuL3RpbGUtc291cmNlLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIFN0YXRpY0ltYWdlVGlsZVNvdXJjZVN0cmF0ZWd5IGltcGxlbWVudHMgVGlsZVNvdXJjZVN0cmF0ZWd5IHtcbiAgcHVibGljIGdldFRpbGVTb3VyY2UocmVzb3VyY2U6IFNlcnZpY2UpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiByZXNvdXJjZVsnQGlkJ11cbiAgICB9O1xuICB9XG59XG4iXX0=