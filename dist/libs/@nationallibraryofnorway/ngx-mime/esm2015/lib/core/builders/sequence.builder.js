import { Sequence } from '../models/manifest';
import { BuilderUtils } from './builder-utils';
import { CanvasBuilder } from './canvas.builder';
export class SequenceBuilder {
    constructor(sequences) {
        this.sequences = sequences;
    }
    build() {
        const sequences = [];
        if (this.sequences) {
            for (let i = 0; i < this.sequences.length; i++) {
                const seq = this.sequences[i];
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVuY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2J1aWxkZXJzL3NlcXVlbmNlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsU0FBZ0I7UUFBaEIsY0FBUyxHQUFULFNBQVMsQ0FBTztJQUFHLENBQUM7SUFFeEMsS0FBSztRQUNILE1BQU0sU0FBUyxHQUFlLEVBQUUsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM5QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixTQUFTLENBQUMsSUFBSSxDQUNaLElBQUksUUFBUSxDQUFDO29CQUNYLEVBQUUsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztvQkFDL0IsSUFBSSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO29CQUNsQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7b0JBQ2hCLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVztvQkFDNUIsUUFBUSxFQUFFLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7aUJBQ2xELENBQUMsQ0FDSCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbmNlIH0gZnJvbSAnLi4vbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IEJ1aWxkZXJVdGlscyB9IGZyb20gJy4vYnVpbGRlci11dGlscyc7XG5pbXBvcnQgeyBDYW52YXNCdWlsZGVyIH0gZnJvbSAnLi9jYW52YXMuYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBTZXF1ZW5jZUJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcXVlbmNlczogYW55W10pIHt9XG5cbiAgYnVpbGQoKTogU2VxdWVuY2VbXSB7XG4gICAgY29uc3Qgc2VxdWVuY2VzOiBTZXF1ZW5jZVtdID0gW107XG4gICAgaWYgKHRoaXMuc2VxdWVuY2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNlcSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICBzZXF1ZW5jZXMucHVzaChcbiAgICAgICAgICBuZXcgU2VxdWVuY2Uoe1xuICAgICAgICAgICAgaWQ6IEJ1aWxkZXJVdGlscy5leHRyYWN0SWQoc2VxKSxcbiAgICAgICAgICAgIHR5cGU6IEJ1aWxkZXJVdGlscy5leHRyYWNUeXBlKHNlcSksXG4gICAgICAgICAgICBsYWJlbDogc2VxLmxhYmVsLFxuICAgICAgICAgICAgdmlld2luZ0hpbnQ6IHNlcS52aWV3aW5nSGludCxcbiAgICAgICAgICAgIGNhbnZhc2VzOiBuZXcgQ2FudmFzQnVpbGRlcihzZXEuY2FudmFzZXMpLmJ1aWxkKClcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VxdWVuY2VzO1xuICB9XG59XG4iXX0=