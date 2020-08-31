import { __values } from "tslib";
import { Rect } from './../models/rect';
import { SearchResult } from './../models/search-result';
import { Hit } from './../models/hit';
var SearchResultBuilder = /** @class */ (function () {
    function SearchResultBuilder(q, manifest, iiifSearchResult) {
        this.q = q;
        this.manifest = manifest;
        this.iiifSearchResult = iiifSearchResult;
    }
    SearchResultBuilder.prototype.build = function () {
        var _this = this;
        var searchResult = new SearchResult();
        searchResult.q = this.q;
        var hits = [];
        if (this.iiifSearchResult && this.iiifSearchResult.hits) {
            this.iiifSearchResult.hits.forEach(function (hit, index) {
                var e_1, _a;
                var id = index;
                var canvasIndex = -1;
                var label = null;
                var rects = [];
                if (_this.manifest.sequences && _this.manifest.sequences[0].canvases) {
                    var resources = _this.findResources(hit);
                    try {
                        for (var resources_1 = __values(resources), resources_1_1 = resources_1.next(); !resources_1_1.done; resources_1_1 = resources_1.next()) {
                            var resource = resources_1_1.value;
                            canvasIndex = _this.findSequenceIndex(resource);
                            label = _this.findLabel(canvasIndex);
                            var on = resource.on;
                            var coords = on.substring(on.indexOf('=') + 1).split(',');
                            var rect = new Rect({
                                x: parseInt(coords[0], 10),
                                y: parseInt(coords[1], 10),
                                width: parseInt(coords[2], 10),
                                height: parseInt(coords[3], 10)
                            });
                            rects.push(rect);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (resources_1_1 && !resources_1_1.done && (_a = resources_1.return)) _a.call(resources_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                searchResult.add(new Hit({
                    id: id,
                    index: canvasIndex,
                    label: label,
                    match: hit.match,
                    before: hit.before,
                    after: hit.after,
                    rects: rects
                }));
            });
            return searchResult;
        }
    };
    SearchResultBuilder.prototype.findResources = function (hit) {
        var e_2, _a;
        var resources = [];
        var _loop_1 = function (annotation) {
            var res = this_1.iiifSearchResult.resources.find(function (r) { return r['@id'] === annotation; });
            resources.push(res);
        };
        var this_1 = this;
        try {
            for (var _b = __values(hit.annotations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var annotation = _c.value;
                _loop_1(annotation);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return resources;
    };
    SearchResultBuilder.prototype.findSequenceIndex = function (resource) {
        var firstSequence = this.manifest.sequences[0];
        var on = resource.on;
        var id = on.substring(0, on.indexOf('#'));
        return firstSequence.canvases.findIndex(function (c) { return c.id === id; });
    };
    SearchResultBuilder.prototype.findLabel = function (index) {
        if (index === -1) {
            return null;
        }
        else {
            return this.manifest.sequences[0].canvases[index].label;
        }
    };
    return SearchResultBuilder;
}());
export { SearchResultBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL2NvcmUvYnVpbGRlcnMvc2VhcmNoLXJlc3VsdC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0QztJQUNFLDZCQUNVLENBQVMsRUFDVCxRQUFrQixFQUNsQixnQkFBa0M7UUFGbEMsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBRUcsbUNBQUssR0FBWjtRQUFBLGlCQXlDQztRQXhDQyxJQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFNLElBQUksR0FBVSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRTtZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVksRUFBRSxLQUFhOztnQkFDN0QsSUFBTSxFQUFFLEdBQVcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFT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QUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVPLHVDQUFTLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQTNFRCxJQTJFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3QgfSBmcm9tICcuLy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi8uLi9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHtcbiAgSWlpZlNlYXJjaFJlc3VsdCxcbiAgSGl0IGFzIElpaWZIaXQsXG4gIFJlc291cmNlIGFzIElpaWZSZXNvdXJjZVxufSBmcm9tICcuLy4uL21vZGVscy9paWlmLXNlYXJjaC1yZXN1bHQnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi8uLi9tb2RlbHMvc2VhcmNoLXJlc3VsdCc7XG5pbXBvcnQgeyBIaXQgfSBmcm9tICcuLy4uL21vZGVscy9oaXQnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcTogc3RyaW5nLFxuICAgIHByaXZhdGUgbWFuaWZlc3Q6IE1hbmlmZXN0LFxuICAgIHByaXZhdGUgaWlpZlNlYXJjaFJlc3VsdDogSWlpZlNlYXJjaFJlc3VsdFxuICApIHt9XG5cbiAgcHVibGljIGJ1aWxkKCk6IFNlYXJjaFJlc3VsdCB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gbmV3IFNlYXJjaFJlc3VsdCgpO1xuICAgIHNlYXJjaFJlc3VsdC5xID0gdGhpcy5xO1xuICAgIGNvbnN0IGhpdHM6IEhpdFtdID0gW107XG4gICAgaWYgKHRoaXMuaWlpZlNlYXJjaFJlc3VsdCAmJiB0aGlzLmlpaWZTZWFyY2hSZXN1bHQuaGl0cykge1xuICAgICAgdGhpcy5paWlmU2VhcmNoUmVzdWx0LmhpdHMuZm9yRWFjaCgoaGl0OiBJaWlmSGl0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkOiBudW1iZXIgPSBpbmRleDtcbiAgICAgICAgbGV0IGNhbnZhc0luZGV4ID0gLTE7XG4gICAgICAgIGxldCBsYWJlbCA9IG51bGw7XG4gICAgICAgIGNvbnN0IHJlY3RzOiBSZWN0W10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMubWFuaWZlc3Quc2VxdWVuY2VzICYmIHRoaXMubWFuaWZlc3Quc2VxdWVuY2VzWzBdLmNhbnZhc2VzKSB7XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gdGhpcy5maW5kUmVzb3VyY2VzKGhpdCk7XG4gICAgICAgICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIGNhbnZhc0luZGV4ID0gdGhpcy5maW5kU2VxdWVuY2VJbmRleChyZXNvdXJjZSk7XG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMuZmluZExhYmVsKGNhbnZhc0luZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IG9uID0gcmVzb3VyY2Uub247XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBvbi5zdWJzdHJpbmcob24uaW5kZXhPZignPScpICsgMSkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgUmVjdCh7XG4gICAgICAgICAgICAgIHg6IHBhcnNlSW50KGNvb3Jkc1swXSwgMTApLFxuICAgICAgICAgICAgICB5OiBwYXJzZUludChjb29yZHNbMV0sIDEwKSxcbiAgICAgICAgICAgICAgd2lkdGg6IHBhcnNlSW50KGNvb3Jkc1syXSwgMTApLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHBhcnNlSW50KGNvb3Jkc1szXSwgMTApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlY3RzLnB1c2gocmVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoUmVzdWx0LmFkZChcbiAgICAgICAgICBuZXcgSGl0KHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGluZGV4OiBjYW52YXNJbmRleCxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIG1hdGNoOiBoaXQubWF0Y2gsXG4gICAgICAgICAgICBiZWZvcmU6IGhpdC5iZWZvcmUsXG4gICAgICAgICAgICBhZnRlcjogaGl0LmFmdGVyLFxuICAgICAgICAgICAgcmVjdHM6IHJlY3RzXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlYXJjaFJlc3VsdDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRSZXNvdXJjZXMoaGl0OiBJaWlmSGl0KTogSWlpZlJlc291cmNlW10ge1xuICAgIGNvbnN0IHJlc291cmNlczogSWlpZlJlc291cmNlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb24gb2YgaGl0LmFubm90YXRpb25zKSB7XG4gICAgICBjb25zdCByZXMgPSB0aGlzLmlpaWZTZWFyY2hSZXN1bHQucmVzb3VyY2VzLmZpbmQoXG4gICAgICAgIChyOiBJaWlmUmVzb3VyY2UpID0+IHJbJ0BpZCddID09PSBhbm5vdGF0aW9uXG4gICAgICApO1xuICAgICAgcmVzb3VyY2VzLnB1c2gocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlcztcbiAgfVxuXG4gIHByaXZhdGUgZmluZFNlcXVlbmNlSW5kZXgocmVzb3VyY2U6IElpaWZSZXNvdXJjZSk6IG51bWJlciB7XG4gICAgY29uc3QgZmlyc3RTZXF1ZW5jZSA9IHRoaXMubWFuaWZlc3Quc2VxdWVuY2VzWzBdO1xuICAgIGNvbnN0IG9uID0gcmVzb3VyY2Uub247XG4gICAgY29uc3QgaWQgPSBvbi5zdWJzdHJpbmcoMCwgb24uaW5kZXhPZignIycpKTtcbiAgICByZXR1cm4gZmlyc3RTZXF1ZW5jZS5jYW52YXNlcy5maW5kSW5kZXgoYyA9PiBjLmlkID09PSBpZCk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRMYWJlbChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubWFuaWZlc3Quc2VxdWVuY2VzWzBdLmNhbnZhc2VzW2luZGV4XS5sYWJlbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==