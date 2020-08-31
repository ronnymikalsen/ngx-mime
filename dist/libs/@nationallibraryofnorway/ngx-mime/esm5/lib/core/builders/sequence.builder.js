import { Sequence } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
import { CanvasBuilder } from './canvas.builder';
var SequenceBuilder = /** @class */ (function () {
    function SequenceBuilder(sequences) {
        this.sequences = sequences;
    }
    SequenceBuilder.prototype.build = function () {
        var sequences = [];
        if (this.sequences) {
            for (var i = 0; i < this.sequences.length; i++) {
                var seq = this.sequences[i];
                sequences.push(new Sequence({
                    id: BuilderUtils.extractId(seq),
                    type: BuilderUtils.extracType(seq),
                    label: seq.label,
                    viewingHint: seq.viewingHint,
                    canvases: new CanvasBuilder(seq.canvases).build()
                }));
            }
        }
        return sequences;
    };
    return SequenceBuilder;
}());
export { SequenceBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVuY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL3NlcXVlbmNlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFDRSx5QkFBb0IsU0FBZ0I7UUFBaEIsY0FBUyxHQUFULFNBQVMsQ0FBTztJQUFHLENBQUM7SUFFeEMsK0JBQUssR0FBTDtRQUNFLElBQU0sU0FBUyxHQUFlLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixTQUFTLENBQUMsSUFBSSxDQUNaLElBQUksUUFBUSxDQUFDO29CQUNYLEVBQUUsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztvQkFDL0IsSUFBSSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUNsQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2hCLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVztvQkFDNUIsUUFBUSxFQUFFLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7aUJBQ2xELENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZW5jZSB9IGZyb20gJy4uL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBCdWlsZGVyVXRpbHMgfSBmcm9tICcuL2J1aWxkZXItdXRpbHMnO1xuaW1wb3J0IHsgQ2FudmFzQnVpbGRlciB9IGZyb20gJy4vY2FudmFzLmJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgU2VxdWVuY2VCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXF1ZW5jZXM6IGFueVtdKSB7fVxuXG4gIGJ1aWxkKCk6IFNlcXVlbmNlW10ge1xuICAgIGNvbnN0IHNlcXVlbmNlczogU2VxdWVuY2VbXSA9IFtdO1xuICAgIGlmICh0aGlzLnNlcXVlbmNlcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzZXEgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgc2VxdWVuY2VzLnB1c2goXG4gICAgICAgICAgbmV3IFNlcXVlbmNlKHtcbiAgICAgICAgICAgIGlkOiBCdWlsZGVyVXRpbHMuZXh0cmFjdElkKHNlcSksXG4gICAgICAgICAgICB0eXBlOiBCdWlsZGVyVXRpbHMuZXh0cmFjVHlwZShzZXEpLFxuICAgICAgICAgICAgbGFiZWw6IHNlcS5sYWJlbCxcbiAgICAgICAgICAgIHZpZXdpbmdIaW50OiBzZXEudmlld2luZ0hpbnQsXG4gICAgICAgICAgICBjYW52YXNlczogbmV3IENhbnZhc0J1aWxkZXIoc2VxLmNhbnZhc2VzKS5idWlsZCgpXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlcXVlbmNlcztcbiAgfVxufVxuIl19