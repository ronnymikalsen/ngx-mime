export class IiifTileSourceStrategy {
    getTileSource(resource) {
        let tileSource;
        if (resource?.service?.service) {
            tileSource = resource.service;
            tileSource.tileOverlap = 0.1; // Workaround for https://github.com/openseadragon/openseadragon/issues/1722
        }
        else {
            tileSource = resource.service['@id'];
            if (!tileSource) {
                tileSource = resource['@id'];
            }
            tileSource =
                tileSource && tileSource.startsWith('//')
                    ? `${location.protocol}${tileSource}`
                    : tileSource;
            tileSource =
                tileSource && !tileSource.endsWith('/info.json')
                    ? `${tileSource}/info.json`
                    : tileSource;
        }
        return tileSource;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWlpZi10aWxlLXNvdXJjZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL3ZpZXdlci1zZXJ2aWNlL2lpaWYtdGlsZS1zb3VyY2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLHNCQUFzQjtJQUMxQixhQUFhLENBQUMsUUFBa0I7UUFDckMsSUFBSSxVQUFlLENBQUM7UUFDcEIsSUFBSSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtZQUM5QixVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUM5QixVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLDRFQUE0RTtTQUMzRzthQUFNO1lBQ0wsVUFBVSxHQUFTLFFBQVEsQ0FBQyxPQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixVQUFVLEdBQVMsUUFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsVUFBVTtnQkFDUixVQUFVLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxFQUFFO29CQUNyQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQ2pCLFVBQVU7Z0JBQ1IsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7b0JBQzlDLENBQUMsQ0FBQyxHQUFHLFVBQVUsWUFBWTtvQkFDM0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUNsQjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IFRpbGVTb3VyY2VTdHJhdGVneSB9IGZyb20gJy4vdGlsZS1zb3VyY2Utc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgSWlpZlRpbGVTb3VyY2VTdHJhdGVneSBpbXBsZW1lbnRzIFRpbGVTb3VyY2VTdHJhdGVneSB7XG4gIHB1YmxpYyBnZXRUaWxlU291cmNlKHJlc291cmNlOiBSZXNvdXJjZSk6IGFueSB7XG4gICAgbGV0IHRpbGVTb3VyY2U6IGFueTtcbiAgICBpZiAocmVzb3VyY2U/LnNlcnZpY2U/LnNlcnZpY2UpIHtcbiAgICAgIHRpbGVTb3VyY2UgPSByZXNvdXJjZS5zZXJ2aWNlO1xuICAgICAgdGlsZVNvdXJjZS50aWxlT3ZlcmxhcCA9IDAuMTsgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5zZWFkcmFnb24vb3BlbnNlYWRyYWdvbi9pc3N1ZXMvMTcyMlxuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlU291cmNlID0gKDxhbnk+cmVzb3VyY2Uuc2VydmljZSlbJ0BpZCddO1xuICAgICAgaWYgKCF0aWxlU291cmNlKSB7XG4gICAgICAgIHRpbGVTb3VyY2UgPSAoPGFueT5yZXNvdXJjZSlbJ0BpZCddO1xuICAgICAgfVxuXG4gICAgICB0aWxlU291cmNlID1cbiAgICAgICAgdGlsZVNvdXJjZSAmJiB0aWxlU291cmNlLnN0YXJ0c1dpdGgoJy8vJylcbiAgICAgICAgICA/IGAke2xvY2F0aW9uLnByb3RvY29sfSR7dGlsZVNvdXJjZX1gXG4gICAgICAgICAgOiB0aWxlU291cmNlO1xuICAgICAgdGlsZVNvdXJjZSA9XG4gICAgICAgIHRpbGVTb3VyY2UgJiYgIXRpbGVTb3VyY2UuZW5kc1dpdGgoJy9pbmZvLmpzb24nKVxuICAgICAgICAgID8gYCR7dGlsZVNvdXJjZX0vaW5mby5qc29uYFxuICAgICAgICAgIDogdGlsZVNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbGVTb3VyY2U7XG4gIH1cbn1cbiJdfQ==