import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerSubject = new Subject();
        this.spinnerState = this.spinnerSubject.asObservable();
    }
    SpinnerService.prototype.show = function () {
        this.spinnerSubject.next({ show: true });
    };
    SpinnerService.prototype.hide = function () {
        this.spinnerSubject.next({ show: false });
    };
    SpinnerService = __decorate([
        Injectable()
    ], SpinnerService);
    return SpinnerService;
}());
export { SpinnerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvc3Bpbm5lci1zZXJ2aWNlL3NwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVEvQjtJQUlFO1FBSFEsbUJBQWMsR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQztRQUM5QyxpQkFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFMUMsQ0FBQztJQUVoQiw2QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQWUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsNkJBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFlLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVpVLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYyxDQWExQjtJQUFELHFCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwaW5uZXJTdGF0ZSB7XG4gIHNob3c6IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcGlubmVyU2VydmljZSB7XG4gIHByaXZhdGUgc3Bpbm5lclN1YmplY3QgPSBuZXcgU3ViamVjdDxTcGlubmVyU3RhdGU+KCk7XG4gIHB1YmxpYyBzcGlubmVyU3RhdGUgPSB0aGlzLnNwaW5uZXJTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzaG93KCkge1xuICAgIHRoaXMuc3Bpbm5lclN1YmplY3QubmV4dCg8U3Bpbm5lclN0YXRlPnsgc2hvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zcGlubmVyU3ViamVjdC5uZXh0KDxTcGlubmVyU3RhdGU+eyBzaG93OiBmYWxzZSB9KTtcbiAgfVxufVxuIl19