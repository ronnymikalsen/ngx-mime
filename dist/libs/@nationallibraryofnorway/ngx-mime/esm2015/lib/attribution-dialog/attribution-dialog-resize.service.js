import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MimeDomHelper } from './../core/mime-dom-helper';
import { Dimensions } from './../core/models/dimensions';
let AttributionDialogResizeService = class AttributionDialogResizeService {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
        this.resizeSubject = new ReplaySubject();
        this.dimensions = new Dimensions();
    }
    set el(el) {
        this._el = el;
    }
    get el() {
        return this._el;
    }
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    markForCheck() {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        if (this.dimensions.bottom !== dimensions.bottom ||
            this.dimensions.height !== dimensions.height ||
            this.dimensions.left !== dimensions.left ||
            this.dimensions.right !== dimensions.right ||
            this.dimensions.top !== dimensions.top ||
            this.dimensions.width !== dimensions.width) {
            this.dimensions = dimensions;
            this.resizeSubject.next(Object.assign({}, this.dimensions));
        }
    }
};
AttributionDialogResizeService.ctorParameters = () => [
    { type: MimeDomHelper }
];
AttributionDialogResizeService = __decorate([
    Injectable()
], AttributionDialogResizeService);
export { AttributionDialogResizeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24tZGlhbG9nLXJlc2l6ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2F0dHJpYnV0aW9uLWRpYWxvZy9hdHRyaWJ1dGlvbi1kaWFsb2ctcmVzaXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3pELElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBS3pDLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSHhDLGtCQUFhLEdBQThCLElBQUksYUFBYSxFQUFFLENBQUM7UUFDL0QsZUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFFYSxDQUFDO0lBRXBELElBQUksRUFBRSxDQUFDLEVBQWM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxZQUFZO1FBQ1YsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTTtZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTTtZQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSTtZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsS0FBSztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxVQUFVLENBQUMsR0FBRztZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUMsS0FBSyxFQUMxQztZQUNBLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxtQkFBTSxJQUFJLENBQUMsVUFBVSxFQUFHLENBQUM7U0FDakQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE1Qm9DLGFBQWE7O0FBTHJDLDhCQUE4QjtJQUQxQyxVQUFVLEVBQUU7R0FDQSw4QkFBOEIsQ0FpQzFDO1NBakNZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWltZURvbUhlbHBlciB9IGZyb20gJy4vLi4vY29yZS9taW1lLWRvbS1oZWxwZXInO1xuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4vLi4vY29yZS9tb2RlbHMvZGltZW5zaW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbkRpYWxvZ1Jlc2l6ZVNlcnZpY2Uge1xuICBwcml2YXRlIF9lbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSByZXNpemVTdWJqZWN0OiBSZXBsYXlTdWJqZWN0PERpbWVuc2lvbnM+ID0gbmV3IFJlcGxheVN1YmplY3QoKTtcbiAgcHJpdmF0ZSBkaW1lbnNpb25zID0gbmV3IERpbWVuc2lvbnMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1pbWVEb21IZWxwZXI6IE1pbWVEb21IZWxwZXIpIHt9XG5cbiAgc2V0IGVsKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fZWwgPSBlbDtcbiAgfVxuXG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWw7XG4gIH1cblxuICBnZXQgb25SZXNpemUoKTogT2JzZXJ2YWJsZTxEaW1lbnNpb25zPiB7XG4gICAgcmV0dXJuIHRoaXMucmVzaXplU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpIHtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5taW1lRG9tSGVscGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLmVsKTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmRpbWVuc2lvbnMuYm90dG9tICE9PSBkaW1lbnNpb25zLmJvdHRvbSB8fFxuICAgICAgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAhPT0gZGltZW5zaW9ucy5oZWlnaHQgfHxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy5sZWZ0ICE9PSBkaW1lbnNpb25zLmxlZnQgfHxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy5yaWdodCAhPT0gZGltZW5zaW9ucy5yaWdodCB8fFxuICAgICAgdGhpcy5kaW1lbnNpb25zLnRvcCAhPT0gZGltZW5zaW9ucy50b3AgfHxcbiAgICAgIHRoaXMuZGltZW5zaW9ucy53aWR0aCAhPT0gZGltZW5zaW9ucy53aWR0aFxuICAgICkge1xuICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICAgIHRoaXMucmVzaXplU3ViamVjdC5uZXh0KHsgLi4udGhpcy5kaW1lbnNpb25zIH0pO1xuICAgIH1cbiAgfVxufVxuIl19