import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { DesktopContentsDialogConfigStrategy, MobileContentsDialogConfigStrategy } from './contents-dialog-config-strategy';
var ContentsDialogConfigStrategyFactory = /** @class */ (function () {
    function ContentsDialogConfigStrategyFactory(mediaObserver, mimeDomHelper) {
        this.mediaObserver = mediaObserver;
        this.mimeDomHelper = mimeDomHelper;
    }
    ContentsDialogConfigStrategyFactory.prototype.create = function () {
        return this.mediaObserver.isActive('lt-md')
            ? new MobileContentsDialogConfigStrategy()
            : new DesktopContentsDialogConfigStrategy(this.mimeDomHelper);
    };
    ContentsDialogConfigStrategyFactory.ctorParameters = function () { return [
        { type: MediaObserver },
        { type: MimeDomHelper }
    ]; };
    ContentsDialogConfigStrategyFactory = __decorate([
        Injectable()
    ], ContentsDialogConfigStrategyFactory);
    return ContentsDialogConfigStrategyFactory;
}());
export { ContentsDialogConfigStrategyFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudHMtZGlhbG9nLWNvbmZpZy1zdHJhdGVneS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvbnRlbnRzLWRpYWxvZy9jb250ZW50cy1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBRUwsbUNBQW1DLEVBQ25DLGtDQUFrQyxFQUNuQyxNQUFNLG1DQUFtQyxDQUFDO0FBRzNDO0lBQ0UsNkNBQ1UsYUFBNEIsRUFDNUIsYUFBNEI7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQztJQUVHLG9EQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxrQ0FBa0MsRUFBRTtZQUMxQyxDQUFDLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBUndCLGFBQWE7Z0JBQ2IsYUFBYTs7SUFIM0IsbUNBQW1DO1FBRC9DLFVBQVUsRUFBRTtPQUNBLG1DQUFtQyxDQVcvQztJQUFELDBDQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1pbWVEb21IZWxwZXIgfSBmcm9tICcuLi9jb3JlL21pbWUtZG9tLWhlbHBlcic7XG5pbXBvcnQge1xuICBDb250ZW50c0RpYWxvZ0NvbmZpZ1N0cmF0ZWd5LFxuICBEZXNrdG9wQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneSxcbiAgTW9iaWxlQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneVxufSBmcm9tICcuL2NvbnRlbnRzLWRpYWxvZy1jb25maWctc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGVudHNEaWFsb2dDb25maWdTdHJhdGVneUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lZGlhT2JzZXJ2ZXI6IE1lZGlhT2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBtaW1lRG9tSGVscGVyOiBNaW1lRG9tSGVscGVyXG4gICkge31cblxuICBwdWJsaWMgY3JlYXRlKCk6IENvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLm1lZGlhT2JzZXJ2ZXIuaXNBY3RpdmUoJ2x0LW1kJylcbiAgICAgID8gbmV3IE1vYmlsZUNvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3koKVxuICAgICAgOiBuZXcgRGVza3RvcENvbnRlbnRzRGlhbG9nQ29uZmlnU3RyYXRlZ3kodGhpcy5taW1lRG9tSGVscGVyKTtcbiAgfVxufVxuIl19