var IiifTileSourceStrategy = /** @class */ (function () {
    function IiifTileSourceStrategy() {
    }
    IiifTileSourceStrategy.prototype.getTileSource = function (resource) {
        var tileSource;
        if (resource.service.service) {
            tileSource = resource.service;
        }
        else {
            tileSource = resource.service['@id'];
            tileSource = tileSource.startsWith('//')
                ? "" + location.protocol + tileSource
                : tileSource;
            tileSource = !tileSource.endsWith('/info.json')
                ? tileSource + "/info.json"
                : tileSource;
        }
        return tileSource;
    };
    return IiifTileSourceStrategy;
}());
export { IiifTileSourceStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlpZi10aWxlLXNvdXJjZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL2lpaWYtdGlsZS1zb3VyY2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFBQTtJQWdCQSxDQUFDO0lBZlEsOENBQWEsR0FBcEIsVUFBcUIsUUFBaUI7UUFDcEMsSUFBSSxVQUFlLENBQUM7UUFDcEIsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUM1QixVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztTQUMvQjthQUFNO1lBQ0wsVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUN0QyxDQUFDLENBQUMsS0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVk7Z0JBQ3JDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDZixVQUFVLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztnQkFDN0MsQ0FBQyxDQUFJLFVBQVUsZUFBWTtnQkFDM0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUNoQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IFRpbGVTb3VyY2VTdHJhdGVneSB9IGZyb20gJy4vdGlsZS1zb3VyY2Utc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgSWlpZlRpbGVTb3VyY2VTdHJhdGVneSBpbXBsZW1lbnRzIFRpbGVTb3VyY2VTdHJhdGVneSB7XG4gIHB1YmxpYyBnZXRUaWxlU291cmNlKHJlc291cmNlOiBTZXJ2aWNlKTogYW55IHtcbiAgICBsZXQgdGlsZVNvdXJjZTogYW55O1xuICAgIGlmIChyZXNvdXJjZS5zZXJ2aWNlLnNlcnZpY2UpIHtcbiAgICAgIHRpbGVTb3VyY2UgPSByZXNvdXJjZS5zZXJ2aWNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlU291cmNlID0gcmVzb3VyY2Uuc2VydmljZVsnQGlkJ107XG4gICAgICB0aWxlU291cmNlID0gdGlsZVNvdXJjZS5zdGFydHNXaXRoKCcvLycpXG4gICAgICAgID8gYCR7bG9jYXRpb24ucHJvdG9jb2x9JHt0aWxlU291cmNlfWBcbiAgICAgICAgOiB0aWxlU291cmNlO1xuICAgICAgdGlsZVNvdXJjZSA9ICF0aWxlU291cmNlLmVuZHNXaXRoKCcvaW5mby5qc29uJylcbiAgICAgICAgPyBgJHt0aWxlU291cmNlfS9pbmZvLmpzb25gXG4gICAgICAgIDogdGlsZVNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVTb3VyY2U7XG4gIH1cbn1cbiJdfQ==