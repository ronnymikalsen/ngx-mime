import { Structure } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
var StructureBuilder = /** @class */ (function () {
    function StructureBuilder(structures, sequences) {
        this.structures = structures;
        this.sequences = sequences;
    }
    StructureBuilder.prototype.build = function () {
        var structures = [];
        if (this.structures) {
            for (var i = 0; i < this.structures.length; i++) {
                var structure = this.structures[i];
                structures.push(new Structure({
                    id: BuilderUtils.extractId(structure),
                    type: BuilderUtils.extracType(structure),
                    label: structure.label,
                    canvases: structure.canvases,
                    canvasIndex: BuilderUtils.findCanvasIndex(structure.canvases, this.sequences)
                }));
            }
        }
        return structures;
    };
    return StructureBuilder;
}());
export { StructureBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9idWlsZGVycy9zdHJ1Y3R1cmUuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBQ0UsMEJBQW9CLFVBQWlCLEVBQVUsU0FBcUI7UUFBaEQsZUFBVSxHQUFWLFVBQVUsQ0FBTztRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVk7SUFBRyxDQUFDO0lBRXhFLGdDQUFLLEdBQUw7UUFDRSxJQUFNLFVBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQy9DLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLFVBQVUsQ0FBQyxJQUFJLENBQ2IsSUFBSSxTQUFTLENBQUM7b0JBQ1osRUFBRSxFQUFFLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO29CQUNyQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7b0JBQ3hDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSztvQkFDdEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO29CQUM1QixXQUFXLEVBQUUsWUFBWSxDQUFDLGVBQWUsQ0FDdkMsU0FBUyxDQUFDLFFBQVEsRUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FDZjtpQkFDRixDQUFDLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlLCBTZXF1ZW5jZSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBCdWlsZGVyVXRpbHMgfSBmcm9tICcuL2J1aWxkZXItdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlczogYW55W10sIHByaXZhdGUgc2VxdWVuY2VzOiBTZXF1ZW5jZVtdKSB7fVxuXG4gIGJ1aWxkKCk6IFN0cnVjdHVyZVtdIHtcbiAgICBjb25zdCBzdHJ1Y3R1cmVzOiBTdHJ1Y3R1cmVbXSA9IFtdO1xuICAgIGlmICh0aGlzLnN0cnVjdHVyZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdHJ1Y3R1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9IHRoaXMuc3RydWN0dXJlc1tpXTtcbiAgICAgICAgc3RydWN0dXJlcy5wdXNoKFxuICAgICAgICAgIG5ldyBTdHJ1Y3R1cmUoe1xuICAgICAgICAgICAgaWQ6IEJ1aWxkZXJVdGlscy5leHRyYWN0SWQoc3RydWN0dXJlKSxcbiAgICAgICAgICAgIHR5cGU6IEJ1aWxkZXJVdGlscy5leHRyYWNUeXBlKHN0cnVjdHVyZSksXG4gICAgICAgICAgICBsYWJlbDogc3RydWN0dXJlLmxhYmVsLFxuICAgICAgICAgICAgY2FudmFzZXM6IHN0cnVjdHVyZS5jYW52YXNlcyxcbiAgICAgICAgICAgIGNhbnZhc0luZGV4OiBCdWlsZGVyVXRpbHMuZmluZENhbnZhc0luZGV4KFxuICAgICAgICAgICAgICBzdHJ1Y3R1cmUuY2FudmFzZXMsXG4gICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cnVjdHVyZXM7XG4gIH1cbn1cbiJdfQ==