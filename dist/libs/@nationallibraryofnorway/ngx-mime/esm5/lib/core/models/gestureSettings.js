import { __extends } from "tslib";
var GestureSettings = /** @class */ (function () {
    function GestureSettings() {
        this.scrollToZoom = false;
        this.clickToZoom = false;
        this.dblClickToZoom = false;
        this.pinchToZoom = false;
        this.flickEnabled = false;
        this.flickMinSpeed = 120;
        this.flickMomentum = 0.25;
        this.pinchRotate = false;
    }
    return GestureSettings;
}());
export { GestureSettings };
var GestureSettingsMouse = /** @class */ (function (_super) {
    __extends(GestureSettingsMouse, _super);
    function GestureSettingsMouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GestureSettingsMouse;
}(GestureSettings));
export { GestureSettingsMouse };
var GestureSettingsTouch = /** @class */ (function (_super) {
    __extends(GestureSettingsTouch, _super);
    function GestureSettingsTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GestureSettingsTouch;
}(GestureSettings));
export { GestureSettingsTouch };
var GestureSettingsPen = /** @class */ (function (_super) {
    __extends(GestureSettingsPen, _super);
    function GestureSettingsPen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GestureSettingsPen;
}(GestureSettings));
export { GestureSettingsPen };
var GestureSettingsUnknown = /** @class */ (function (_super) {
    __extends(GestureSettingsUnknown, _super);
    function GestureSettingsUnknown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GestureSettingsUnknown;
}(GestureSettings));
export { GestureSettingsUnknown };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZVNldHRpbmdzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbW9kZWxzL2dlc3R1cmVTZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUVEO0lBQTBDLHdDQUFlO0lBQXpEOztJQUEyRCxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBQTVELENBQTBDLGVBQWUsR0FBRzs7QUFFNUQ7SUFBMEMsd0NBQWU7SUFBekQ7O0lBQTJELENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFBNUQsQ0FBMEMsZUFBZSxHQUFHOztBQUU1RDtJQUF3QyxzQ0FBZTtJQUF2RDs7SUFBeUQsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQUExRCxDQUF3QyxlQUFlLEdBQUc7O0FBRTFEO0lBQTRDLDBDQUFlO0lBQTNEOztJQUE2RCxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQUFDLEFBQTlELENBQTRDLGVBQWUsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHZXN0dXJlU2V0dGluZ3Mge1xuICBzY3JvbGxUb1pvb20gPSBmYWxzZTtcbiAgY2xpY2tUb1pvb20gPSBmYWxzZTtcbiAgZGJsQ2xpY2tUb1pvb20gPSBmYWxzZTtcbiAgcGluY2hUb1pvb20gPSBmYWxzZTtcbiAgZmxpY2tFbmFibGVkID0gZmFsc2U7XG4gIGZsaWNrTWluU3BlZWQgPSAxMjA7XG4gIGZsaWNrTW9tZW50dW0gPSAwLjI1O1xuICBwaW5jaFJvdGF0ZSA9IGZhbHNlO1xufVxuXG5leHBvcnQgY2xhc3MgR2VzdHVyZVNldHRpbmdzTW91c2UgZXh0ZW5kcyBHZXN0dXJlU2V0dGluZ3Mge31cblxuZXhwb3J0IGNsYXNzIEdlc3R1cmVTZXR0aW5nc1RvdWNoIGV4dGVuZHMgR2VzdHVyZVNldHRpbmdzIHt9XG5cbmV4cG9ydCBjbGFzcyBHZXN0dXJlU2V0dGluZ3NQZW4gZXh0ZW5kcyBHZXN0dXJlU2V0dGluZ3Mge31cblxuZXhwb3J0IGNsYXNzIEdlc3R1cmVTZXR0aW5nc1Vua25vd24gZXh0ZW5kcyBHZXN0dXJlU2V0dGluZ3Mge31cbiJdfQ==