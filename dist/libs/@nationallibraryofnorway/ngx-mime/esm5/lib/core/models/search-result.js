import { __assign } from "tslib";
import { Hit } from './hit';
var SearchResult = /** @class */ (function () {
    function SearchResult(fields) {
        this.q = '';
        this.hits = [];
        if (fields) {
            this.q = fields.q || this.q;
            this.hits = fields.hits || this.hits;
        }
    }
    SearchResult.prototype.add = function (hit) {
        this.hits.push(hit);
    };
    SearchResult.prototype.get = function (index) {
        return new Hit(__assign({}, this.hits[index]));
    };
    SearchResult.prototype.size = function () {
        return this.hits.length;
    };
    SearchResult.prototype.last = function () {
        return this.get(this.size() - 1);
    };
    return SearchResult;
}());
export { SearchResult };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL21vZGVscy9zZWFyY2gtcmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBRTVCO0lBSUUsc0JBQVksTUFBcUM7UUFIMUMsTUFBQyxHQUFHLEVBQUUsQ0FBQztRQUNQLFNBQUksR0FBVSxFQUFFLENBQUM7UUFHdEIsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztTQUN0QztJQUNILENBQUM7SUFFTSwwQkFBRyxHQUFWLFVBQVcsR0FBUTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sMEJBQUcsR0FBVixVQUFXLEtBQWE7UUFDdEIsT0FBTyxJQUFJLEdBQUcsY0FDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDJCQUFJLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFTSwyQkFBSSxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGl0IH0gZnJvbSAnLi9oaXQnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0IHtcbiAgcHVibGljIHEgPSAnJztcbiAgcHVibGljIGhpdHM6IEhpdFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoZmllbGRzPzogeyBxPzogc3RyaW5nOyBoaXRzPzogSGl0W10gfSkge1xuICAgIGlmIChmaWVsZHMpIHtcbiAgICAgIHRoaXMucSA9IGZpZWxkcy5xIHx8IHRoaXMucTtcbiAgICAgIHRoaXMuaGl0cyA9IGZpZWxkcy5oaXRzIHx8IHRoaXMuaGl0cztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkKGhpdDogSGl0KTogdm9pZCB7XG4gICAgdGhpcy5oaXRzLnB1c2goaGl0KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IEhpdCB7XG4gICAgcmV0dXJuIG5ldyBIaXQoe1xuICAgICAgLi4udGhpcy5oaXRzW2luZGV4XVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBsYXN0KCk6IEhpdCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuc2l6ZSgpIC0gMSk7XG4gIH1cbn1cbiJdfQ==