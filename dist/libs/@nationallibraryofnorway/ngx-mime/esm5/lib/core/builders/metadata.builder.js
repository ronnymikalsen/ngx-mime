import { Metadata } from '../models/manifest';
var MetadataBuilder = /** @class */ (function () {
    function MetadataBuilder(metadatas) {
        this.metadatas = metadatas;
    }
    MetadataBuilder.prototype.build = function () {
        var metadatas = [];
        if (this.metadatas) {
            for (var i = 0; i < this.metadatas.length; i++) {
                var data = this.metadatas[i];
                metadatas.push(new Metadata(data.label, data.value));
            }
        }
        return metadatas;
    };
    return MetadataBuilder;
}());
export { MetadataBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL21ldGFkYXRhLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBQ0UseUJBQW9CLFNBQWM7UUFBZCxjQUFTLEdBQVQsU0FBUyxDQUFLO0lBQUcsQ0FBQztJQUV0QywrQkFBSyxHQUFMO1FBQ0UsSUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0RDtTQUNGO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YUJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1ldGFkYXRhczogYW55KSB7fVxuXG4gIGJ1aWxkKCk6IE1ldGFkYXRhW10ge1xuICAgIGNvbnN0IG1ldGFkYXRhczogTWV0YWRhdGFbXSA9IFtdO1xuICAgIGlmICh0aGlzLm1ldGFkYXRhcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1ldGFkYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5tZXRhZGF0YXNbaV07XG4gICAgICAgIG1ldGFkYXRhcy5wdXNoKG5ldyBNZXRhZGF0YShkYXRhLmxhYmVsLCBkYXRhLnZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXRhZGF0YXM7XG4gIH1cbn1cbiJdfQ==