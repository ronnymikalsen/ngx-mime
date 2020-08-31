import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { DesktopHelpDialogConfigStrategy, MobileHelpDialogConfigStrategy } from './help-dialog-config-strategy';
var HelpDialogConfigStrategyFactory = /** @class */ (function () {
    function HelpDialogConfigStrategyFactory(mediaObserver, mimeDomHelper) {
        this.mediaObserver = mediaObserver;
        this.mimeDomHelper = mimeDomHelper;
    }
    HelpDialogConfigStrategyFactory.prototype.create = function () {
        return this.mediaObserver.isActive('lt-md')
            ? new MobileHelpDialogConfigStrategy()
            : new DesktopHelpDialogConfigStrategy(this.mimeDomHelper);
    };
    HelpDialogConfigStrategyFactory.ctorParameters = function () { return [
        { type: MediaObserver },
        { type: MimeDomHelper }
    ]; };
    HelpDialogConfigStrategyFactory = __decorate([
        Injectable()
    ], HelpDialogConfigStrategyFactory);
    return HelpDialogConfigStrategyFactory;
}());
export { HelpDialogConfigStrategyFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvaGVscC1kaWFsb2cvaGVscC1kaWFsb2ctY29uZmlnLXN0cmF0ZWd5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsK0JBQStCLEVBRS9CLDhCQUE4QixFQUMvQixNQUFNLCtCQUErQixDQUFDO0FBR3ZDO0lBQ0UseUNBQ1UsYUFBNEIsRUFDNUIsYUFBNEI7UUFENUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQztJQUVHLGdEQUFNLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUMzQyxDQUFDLENBQUMsSUFBSSw4QkFBOEIsRUFBRTtZQUN0QyxDQUFDLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Z0JBUndCLGFBQWE7Z0JBQ2IsYUFBYTs7SUFIM0IsK0JBQStCO1FBRDNDLFVBQVUsRUFBRTtPQUNBLCtCQUErQixDQVczQztJQUFELHNDQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1pbWVEb21IZWxwZXIgfSBmcm9tICcuLi9jb3JlL21pbWUtZG9tLWhlbHBlcic7XG5pbXBvcnQge1xuICBEZXNrdG9wSGVscERpYWxvZ0NvbmZpZ1N0cmF0ZWd5LFxuICBIZWxwRGlhbG9nQ29uZmlnU3RyYXRlZ3ksXG4gIE1vYmlsZUhlbHBEaWFsb2dDb25maWdTdHJhdGVneVxufSBmcm9tICcuL2hlbHAtZGlhbG9nLWNvbmZpZy1zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIZWxwRGlhbG9nQ29uZmlnU3RyYXRlZ3lGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZWRpYU9ic2VydmVyOiBNZWRpYU9ic2VydmVyLFxuICAgIHByaXZhdGUgbWltZURvbUhlbHBlcjogTWltZURvbUhlbHBlclxuICApIHt9XG5cbiAgcHVibGljIGNyZWF0ZSgpOiBIZWxwRGlhbG9nQ29uZmlnU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLm1lZGlhT2JzZXJ2ZXIuaXNBY3RpdmUoJ2x0LW1kJylcbiAgICA/IG5ldyBNb2JpbGVIZWxwRGlhbG9nQ29uZmlnU3RyYXRlZ3koKVxuICAgIDogbmV3IERlc2t0b3BIZWxwRGlhbG9nQ29uZmlnU3RyYXRlZ3kodGhpcy5taW1lRG9tSGVscGVyKTtcbiAgfVxufVxuIl19