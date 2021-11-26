import * as d3 from 'd3';
import * as OpenSeadragon from 'openseadragon';
import { Subscription } from 'rxjs';
import { Rect } from '../models/rect';
import { ViewerOptions } from '../models/viewer-options';
export class CanvasGroupMask {
    constructor(viewer, styleService) {
        this.styleService = styleService;
        this.canvasGroupRect = new Rect();
        this.disableResize = false;
        this.animationHandler = () => {
            this.resize();
        };
        this.resizeHandler = () => {
            this.setCenter();
            this.resize();
        };
        this.canvasGroupPinchHandler = () => {
            this.disableResize = false;
        };
        this.canvasGroupDragHandler = (e) => {
            if ((e.delta.x || e.delta.y) && e.speed > 0 && e.direction !== 0) {
                this.disableResize = true;
            }
        };
        this.canvasGroupDragEndHandler = () => {
            this.disableResize = false;
            this.resize();
        };
        this.viewer = viewer;
    }
    initialize(pageBounds, visible) {
        this.unsubscribe();
        this.subscriptions = new Subscription();
        this.subscriptions.add(this.styleService.onChange.subscribe((c) => {
            this.backgroundColor = c;
            if (this.leftMask) {
                this.leftMask.style('fill', this.backgroundColor);
            }
            if (this.rightMask) {
                this.rightMask.style('fill', this.backgroundColor);
            }
        }));
        this.canvasGroupRect = pageBounds;
        this.addCanvasGroupMask();
        this.setCenter();
        this.resize();
        if (visible) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    destroy() {
        this.unsubscribe();
    }
    changeCanvasGroup(pageBounds) {
        this.canvasGroupRect = pageBounds;
        this.resize();
    }
    show() {
        this.addHandlers();
        if (!this.leftMask || !this.rightMask) {
            return;
        }
        this.setCenter();
        this.resize();
        this.leftMask.attr('height', '100%');
        this.rightMask.attr('height', '100%');
    }
    hide() {
        this.removeHandlers();
        if (!this.leftMask || !this.rightMask) {
            return;
        }
        this.leftMask.attr('height', '0');
        this.rightMask.attr('height', '0');
    }
    addHandlers() {
        this.viewer.addHandler('animation', this.animationHandler);
        this.viewer.addHandler('resize', this.resizeHandler);
        this.viewer.addHandler('canvas-pinch', this.canvasGroupPinchHandler);
        this.viewer.addHandler('canvas-drag', this.canvasGroupDragHandler);
        this.viewer.addHandler('canvas-drag-end', this.canvasGroupDragEndHandler);
    }
    removeHandlers() {
        this.viewer.removeHandler('animation', this.animationHandler);
        this.viewer.removeHandler('resize', this.resizeHandler);
        this.viewer.removeHandler('canvas-pinch', this.canvasGroupPinchHandler);
        this.viewer.removeHandler('canvas-drag', this.canvasGroupDragHandler);
        this.viewer.removeHandler('canvas-drag-end', this.canvasGroupDragEndHandler);
    }
    addCanvasGroupMask() {
        const overlays = d3.select(this.viewer.svgOverlay().node().parentNode);
        const mask = overlays.append('g').attr('id', 'page-mask');
        this.leftMask = mask
            .append('rect')
            .attr('id', 'mime-left-page-mask')
            .attr('height', '100%')
            .attr('y', 0)
            .style('fill', this.backgroundColor);
        this.rightMask = mask
            .append('rect')
            .attr('id', 'mime-right-page-mask')
            .attr('height', '100%')
            .attr('y', 0)
            .style('fill', this.backgroundColor);
    }
    setCenter() {
        this.center = new OpenSeadragon.Point(this.viewer.viewport._containerInnerSize.x / 2, this.viewer.viewport._containerInnerSize.y / 2);
    }
    resize() {
        if (this.disableResize || !this.leftMask || !this.rightMask) {
            return;
        }
        const leftMaskRect = this.getLeftMaskRect();
        const rightMaskRect = this.getRightMaskRect();
        this.leftMask.attr('width', leftMaskRect.width).attr('x', leftMaskRect.x);
        this.rightMask
            .attr('width', rightMaskRect.width)
            .attr('x', Math.round(rightMaskRect.x));
    }
    getLeftMaskRect() {
        const imgBounds = new OpenSeadragon.Rect(this.canvasGroupRect.x, this.canvasGroupRect.y, this.canvasGroupRect.width, this.canvasGroupRect.height);
        const topLeft = this.viewer.viewport.viewportToViewerElementCoordinates(imgBounds.getTopLeft());
        let width = topLeft.x - ViewerOptions.overlays.canvasGroupMarginInPageView;
        if (width < 0) {
            width = 0;
        }
        return new Rect({
            x: 0,
            width: width,
        });
    }
    getRightMaskRect() {
        const imgBounds = new OpenSeadragon.Rect(this.canvasGroupRect.x, this.canvasGroupRect.y, this.canvasGroupRect.width, this.canvasGroupRect.height);
        const topRight = this.viewer.viewport.viewportToViewerElementCoordinates(imgBounds.getTopRight());
        let width = this.viewer.viewport._containerInnerSize.x - topRight.x;
        const x = this.viewer.viewport._containerInnerSize.x -
            width +
            ViewerOptions.overlays.canvasGroupMarginInPageView;
        if (width < 0) {
            width = 0;
        }
        return new Rect({
            x: x,
            width: width,
        });
    }
    unsubscribe() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLW1hc2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvY29yZS92aWV3ZXItc2VydmljZS9jYW52YXMtZ3JvdXAtbWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssRUFBRSxNQUFNLElBQUksQ0FBQztBQUN6QixPQUFPLEtBQUssYUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHekQsTUFBTSxPQUFPLGVBQWU7SUFhMUIsWUFBWSxNQUFXLEVBQVUsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFYM0Qsb0JBQWUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBSzdCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBd0ZkLHFCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRU0sa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFTSw0QkFBdUIsR0FBRyxHQUFHLEVBQUU7WUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRU0sMkJBQXNCLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFD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QUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQ3RFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FDeEIsQ0FBQztRQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxHQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDMUMsS0FBSztZQUNMLGFBQWEsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUM7UUFFckQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLElBQUksQ0FBQztZQUNkLENBQUMsRUFBRSxDQUFDO1lBQ0osS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAqIGFzIE9wZW5TZWFkcmFnb24gZnJvbSAnb3BlbnNlYWRyYWdvbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vbW9kZWxzL3BvaW50JztcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLi9tb2RlbHMvcmVjdCc7XG5pbXBvcnQgeyBWaWV3ZXJPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1vcHRpb25zJztcbmltcG9ydCB7IFN0eWxlU2VydmljZSB9IGZyb20gJy4uL3N0eWxlLXNlcnZpY2Uvc3R5bGUuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXNHcm91cE1hc2sge1xuICB2aWV3ZXI6IGFueTtcbiAgY2FudmFzR3JvdXBSZWN0ID0gbmV3IFJlY3QoKTtcblxuICBsZWZ0TWFzazogYW55O1xuICByaWdodE1hc2s6IGFueTtcblxuICBkaXNhYmxlUmVzaXplID0gZmFsc2U7XG4gIGNlbnRlciE6IFBvaW50O1xuXG4gIGJhY2tncm91bmRDb2xvciE6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zITogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHZpZXdlcjogYW55LCBwcml2YXRlIHN0eWxlU2VydmljZTogU3R5bGVTZXJ2aWNlKSB7XG4gICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZShwYWdlQm91bmRzOiBSZWN0LCB2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnN0eWxlU2VydmljZS5vbkNoYW5nZS5zdWJzY3JpYmUoKGMpID0+IHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBjO1xuICAgICAgICBpZiAodGhpcy5sZWZ0TWFzaykge1xuICAgICAgICAgIHRoaXMubGVmdE1hc2suc3R5bGUoJ2ZpbGwnLCB0aGlzLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRNYXNrKSB7XG4gICAgICAgICAgdGhpcy5yaWdodE1hc2suc3R5bGUoJ2ZpbGwnLCB0aGlzLmJhY2tncm91bmRDb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuY2FudmFzR3JvdXBSZWN0ID0gcGFnZUJvdW5kcztcblxuICAgIHRoaXMuYWRkQ2FudmFzR3JvdXBNYXNrKCk7XG5cbiAgICB0aGlzLnNldENlbnRlcigpO1xuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VDYW52YXNHcm91cChwYWdlQm91bmRzOiBSZWN0KSB7XG4gICAgdGhpcy5jYW52YXNHcm91cFJlY3QgPSBwYWdlQm91bmRzO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEhhbmRsZXJzKCk7XG4gICAgaWYgKCF0aGlzLmxlZnRNYXNrIHx8ICF0aGlzLnJpZ2h0TWFzaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldENlbnRlcigpO1xuICAgIHRoaXMucmVzaXplKCk7XG4gICAgdGhpcy5sZWZ0TWFzay5hdHRyKCdoZWlnaHQnLCAnMTAwJScpO1xuICAgIHRoaXMucmlnaHRNYXNrLmF0dHIoJ2hlaWdodCcsICcxMDAlJyk7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUhhbmRsZXJzKCk7XG4gICAgaWYgKCF0aGlzLmxlZnRNYXNrIHx8ICF0aGlzLnJpZ2h0TWFzaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxlZnRNYXNrLmF0dHIoJ2hlaWdodCcsICcwJyk7XG4gICAgdGhpcy5yaWdodE1hc2suYXR0cignaGVpZ2h0JywgJzAnKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkSGFuZGxlcnMoKSB7XG4gICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignYW5pbWF0aW9uJywgdGhpcy5hbmltYXRpb25IYW5kbGVyKTtcbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ2NhbnZhcy1waW5jaCcsIHRoaXMuY2FudmFzR3JvdXBQaW5jaEhhbmRsZXIpO1xuICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ2NhbnZhcy1kcmFnJywgdGhpcy5jYW52YXNHcm91cERyYWdIYW5kbGVyKTtcbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdjYW52YXMtZHJhZy1lbmQnLCB0aGlzLmNhbnZhc0dyb3VwRHJhZ0VuZEhhbmRsZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVIYW5kbGVycygpIHtcbiAgICB0aGlzLnZpZXdlci5yZW1vdmVIYW5kbGVyKCdhbmltYXRpb24nLCB0aGlzLmFuaW1hdGlvbkhhbmRsZXIpO1xuICAgIHRoaXMudmlld2VyLnJlbW92ZUhhbmRsZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlcik7XG4gICAgdGhpcy52aWV3ZXIucmVtb3ZlSGFuZGxlcignY2FudmFzLXBpbmNoJywgdGhpcy5jYW52YXNHcm91cFBpbmNoSGFuZGxlcik7XG4gICAgdGhpcy52aWV3ZXIucmVtb3ZlSGFuZGxlcignY2FudmFzLWRyYWcnLCB0aGlzLmNhbnZhc0dyb3VwRHJhZ0hhbmRsZXIpO1xuICAgIHRoaXMudmlld2VyLnJlbW92ZUhhbmRsZXIoXG4gICAgICAnY2FudmFzLWRyYWctZW5kJyxcbiAgICAgIHRoaXMuY2FudmFzR3JvdXBEcmFnRW5kSGFuZGxlclxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGlvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfTtcblxuICBwcml2YXRlIHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRDZW50ZXIoKTtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9O1xuXG4gIHByaXZhdGUgY2FudmFzR3JvdXBQaW5jaEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNhYmxlUmVzaXplID0gZmFsc2U7XG4gIH07XG5cbiAgcHJpdmF0ZSBjYW52YXNHcm91cERyYWdIYW5kbGVyID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICgoZS5kZWx0YS54IHx8IGUuZGVsdGEueSkgJiYgZS5zcGVlZCA+IDAgJiYgZS5kaXJlY3Rpb24gIT09IDApIHtcbiAgICAgIHRoaXMuZGlzYWJsZVJlc2l6ZSA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgY2FudmFzR3JvdXBEcmFnRW5kSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmRpc2FibGVSZXNpemUgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9O1xuXG4gIHByaXZhdGUgYWRkQ2FudmFzR3JvdXBNYXNrKCkge1xuICAgIGNvbnN0IG92ZXJsYXlzID0gZDMuc2VsZWN0KHRoaXMudmlld2VyLnN2Z092ZXJsYXkoKS5ub2RlKCkucGFyZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtYXNrID0gb3ZlcmxheXMuYXBwZW5kKCdnJykuYXR0cignaWQnLCAncGFnZS1tYXNrJyk7XG5cbiAgICB0aGlzLmxlZnRNYXNrID0gbWFza1xuICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignaWQnLCAnbWltZS1sZWZ0LXBhZ2UtbWFzaycpXG4gICAgICAuYXR0cignaGVpZ2h0JywgJzEwMCUnKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuXG4gICAgdGhpcy5yaWdodE1hc2sgPSBtYXNrXG4gICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCdpZCcsICdtaW1lLXJpZ2h0LXBhZ2UtbWFzaycpXG4gICAgICAuYXR0cignaGVpZ2h0JywgJzEwMCUnKVxuICAgICAgLmF0dHIoJ3knLCAwKVxuICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDZW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jZW50ZXIgPSBuZXcgT3BlblNlYWRyYWdvbi5Qb2ludChcbiAgICAgIHRoaXMudmlld2VyLnZpZXdwb3J0Ll9jb250YWluZXJJbm5lclNpemUueCAvIDIsXG4gICAgICB0aGlzLnZpZXdlci52aWV3cG9ydC5fY29udGFpbmVySW5uZXJTaXplLnkgLyAyXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVSZXNpemUgfHwgIXRoaXMubGVmdE1hc2sgfHwgIXRoaXMucmlnaHRNYXNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdE1hc2tSZWN0ID0gdGhpcy5nZXRMZWZ0TWFza1JlY3QoKTtcbiAgICBjb25zdCByaWdodE1hc2tSZWN0ID0gdGhpcy5nZXRSaWdodE1hc2tSZWN0KCk7XG4gICAgdGhpcy5sZWZ0TWFzay5hdHRyKCd3aWR0aCcsIGxlZnRNYXNrUmVjdC53aWR0aCkuYXR0cigneCcsIGxlZnRNYXNrUmVjdC54KTtcbiAgICB0aGlzLnJpZ2h0TWFza1xuICAgICAgLmF0dHIoJ3dpZHRoJywgcmlnaHRNYXNrUmVjdC53aWR0aClcbiAgICAgIC5hdHRyKCd4JywgTWF0aC5yb3VuZChyaWdodE1hc2tSZWN0LngpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGVmdE1hc2tSZWN0KCk6IFJlY3Qge1xuICAgIGNvbnN0IGltZ0JvdW5kcyA9IG5ldyBPcGVuU2VhZHJhZ29uLlJlY3QoXG4gICAgICB0aGlzLmNhbnZhc0dyb3VwUmVjdC54LFxuICAgICAgdGhpcy5jYW52YXNHcm91cFJlY3QueSxcbiAgICAgIHRoaXMuY2FudmFzR3JvdXBSZWN0LndpZHRoLFxuICAgICAgdGhpcy5jYW52YXNHcm91cFJlY3QuaGVpZ2h0XG4gICAgKTtcbiAgICBjb25zdCB0b3BMZWZ0ID0gdGhpcy52aWV3ZXIudmlld3BvcnQudmlld3BvcnRUb1ZpZXdlckVsZW1lbnRDb29yZGluYXRlcyhcbiAgICAgIGltZ0JvdW5kcy5nZXRUb3BMZWZ0KClcbiAgICApO1xuICAgIGxldCB3aWR0aCA9IHRvcExlZnQueCAtIFZpZXdlck9wdGlvbnMub3ZlcmxheXMuY2FudmFzR3JvdXBNYXJnaW5JblBhZ2VWaWV3O1xuXG4gICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgd2lkdGggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVjdCh7XG4gICAgICB4OiAwLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSaWdodE1hc2tSZWN0KCk6IFJlY3Qge1xuICAgIGNvbnN0IGltZ0JvdW5kcyA9IG5ldyBPcGVuU2VhZHJhZ29uLlJlY3QoXG4gICAgICB0aGlzLmNhbnZhc0dyb3VwUmVjdC54LFxuICAgICAgdGhpcy5jYW52YXNHcm91cFJlY3QueSxcbiAgICAgIHRoaXMuY2FudmFzR3JvdXBSZWN0LndpZHRoLFxuICAgICAgdGhpcy5jYW52YXNHcm91cFJlY3QuaGVpZ2h0XG4gICAgKTtcbiAgICBjb25zdCB0b3BSaWdodCA9IHRoaXMudmlld2VyLnZpZXdwb3J0LnZpZXdwb3J0VG9WaWV3ZXJFbGVtZW50Q29vcmRpbmF0ZXMoXG4gICAgICBpbWdCb3VuZHMuZ2V0VG9wUmlnaHQoKVxuICAgICk7XG4gICAgbGV0IHdpZHRoID0gdGhpcy52aWV3ZXIudmlld3BvcnQuX2NvbnRhaW5lcklubmVyU2l6ZS54IC0gdG9wUmlnaHQueDtcbiAgICBjb25zdCB4ID1cbiAgICAgIHRoaXMudmlld2VyLnZpZXdwb3J0Ll9jb250YWluZXJJbm5lclNpemUueCAtXG4gICAgICB3aWR0aCArXG4gICAgICBWaWV3ZXJPcHRpb25zLm92ZXJsYXlzLmNhbnZhc0dyb3VwTWFyZ2luSW5QYWdlVmlldztcblxuICAgIGlmICh3aWR0aCA8IDApIHtcbiAgICAgIHdpZHRoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlY3Qoe1xuICAgICAgeDogeCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=