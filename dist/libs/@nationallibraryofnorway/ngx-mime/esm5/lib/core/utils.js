var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.numbersAreClose = function (thing, realThing, epsilon) {
        return Math.abs(thing - realThing) <= epsilon;
    };
    Utils.shortenDecimals = function (zoom, precision) {
        var short = Number(zoom).toPrecision(precision);
        return Number(short);
    };
    return Utils;
}());
export { Utils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBWUEsQ0FBQztJQVhRLHFCQUFlLEdBQXRCLFVBQ0UsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLE9BQWU7UUFFZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBQ00scUJBQWUsR0FBdEIsVUFBdUIsSUFBUyxFQUFFLFNBQWlCO1FBQ2pELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHN0YXRpYyBudW1iZXJzQXJlQ2xvc2UoXG4gICAgdGhpbmc6IG51bWJlcixcbiAgICByZWFsVGhpbmc6IG51bWJlcixcbiAgICBlcHNpbG9uOiBudW1iZXJcbiAgKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaW5nIC0gcmVhbFRoaW5nKSA8PSBlcHNpbG9uO1xuICB9XG4gIHN0YXRpYyBzaG9ydGVuRGVjaW1hbHMoem9vbTogYW55LCBwcmVjaXNpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2hvcnQgPSBOdW1iZXIoem9vbSkudG9QcmVjaXNpb24ocHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTnVtYmVyKHNob3J0KTtcbiAgfVxufVxuIl19