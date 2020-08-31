// OpenSeadragon SVG Overlay plugin 0.0.4
export function createSvgOverlay() {
    if (!OpenSeadragon) {
        console.error('[openseadragon-svg-overlay] requires OpenSeadragon');
        return;
    }
    var svgNS = 'http://www.w3.org/2000/svg';
    // ----------
    var Overlay = /** @class */ (function () {
        function Overlay(viewer) {
            var self = this;
            this._viewer = viewer;
            this._containerWidth = 0;
            this._containerHeight = 0;
            this._svg = document.createElementNS(svgNS, 'svg');
            this._svg.style.position = 'absolute';
            this._svg.style.left = 0;
            this._svg.style.top = 0;
            this._svg.style.width = '100%';
            this._svg.style.height = '100%';
            this._viewer.canvas.appendChild(this._svg);
            this._node = document.createElementNS(svgNS, 'g');
            this._svg.appendChild(this._node);
            this._viewer.addHandler('animation', function () {
                self.resize();
            });
            this._viewer.addHandler('open', function () {
                self.resize();
            });
            this._viewer.addHandler('rotate', function (evt) {
                self.resize();
            });
            this._viewer.addHandler('resize', function () {
                self.resize();
            });
            this.resize();
        }
        Overlay.prototype.node = function () {
            return this._node;
        };
        // ----------
        Overlay.prototype.resize = function () {
            if (this._containerWidth !== this._viewer.container.clientWidth) {
                this._containerWidth = this._viewer.container.clientWidth;
                this._svg.setAttribute('width', this._containerWidth);
            }
            if (this._containerHeight !== this._viewer.container.clientHeight) {
                this._containerHeight = this._viewer.container.clientHeight;
                this._svg.setAttribute('height', this._containerHeight);
            }
            var p = this._viewer.viewport.pixelFromPoint(new OpenSeadragon.Point(0, 0), true);
            var zoom = this._viewer.viewport.getZoom(true);
            var rotation = this._viewer.viewport.getRotation();
            // TODO: Expose an accessor for _containerInnerSize in the OSD API so we don't have to use the private variable.
            var scale = this._viewer.viewport._containerInnerSize.x * zoom;
            this._node.setAttribute('transform', 'translate(' +
                p.x +
                ',' +
                p.y +
                ') scale(' +
                scale +
                ') rotate(' +
                rotation +
                ')');
        };
        // ----------
        Overlay.prototype.onClick = function (node, handler) {
            // TODO: Fast click for mobile browsers
            new OpenSeadragon.MouseTracker({
                element: node,
                clickHandler: handler
            }).setTracking(true);
        };
        return Overlay;
    }());
    // ----------
    // ----------
    OpenSeadragon.Viewer.prototype.svgOverlay = function () {
        if (this._svgOverlayInfo) {
            return this._svgOverlayInfo;
        }
        this._svgOverlayInfo = new Overlay(this);
        return this._svgOverlayInfo;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLW92ZXJsYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9leHQvc3ZnLW92ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEseUNBQXlDO0FBRXpDLE1BQU0sVUFBVSxnQkFBZ0I7SUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDcEUsT0FBTztLQUNSO0lBRUQsSUFBTSxLQUFLLEdBQUcsNEJBQTRCLENBQUM7SUFFM0MsYUFBYTtJQUNiO1FBU0UsaUJBQVksTUFBVztZQUNyQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7WUFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUUxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxD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QyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUE1RkQsSUE0RkM7SUFFRCxhQUFhO0lBRWIsYUFBYTtJQUNiLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRztRQUMxQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgT3BlblNlYWRyYWdvbjogYW55O1xuXG4vLyBPcGVuU2VhZHJhZ29uIFNWRyBPdmVybGF5IHBsdWdpbiAwLjAuNFxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnT3ZlcmxheSgpIHtcbiAgaWYgKCFPcGVuU2VhZHJhZ29uKSB7XG4gICAgY29uc29sZS5lcnJvcignW29wZW5zZWFkcmFnb24tc3ZnLW92ZXJsYXldIHJlcXVpcmVzIE9wZW5TZWFkcmFnb24nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbiAgLy8gLS0tLS0tLS0tLVxuICBjbGFzcyBPdmVybGF5IHtcbiAgICAvLyAtLS0tLS0tLS0tXG5cbiAgICBfdmlld2VyOiBhbnk7XG4gICAgX2NvbnRhaW5lcldpZHRoOiBhbnk7XG4gICAgX2NvbnRhaW5lckhlaWdodDogYW55O1xuICAgIF9zdmc6IGFueTtcbiAgICBfbm9kZTogYW55O1xuXG4gICAgY29uc3RydWN0b3Iodmlld2VyOiBhbnkpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLl92aWV3ZXIgPSB2aWV3ZXI7XG4gICAgICB0aGlzLl9jb250YWluZXJXaWR0aCA9IDA7XG4gICAgICB0aGlzLl9jb250YWluZXJIZWlnaHQgPSAwO1xuXG4gICAgICB0aGlzLl9zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsICdzdmcnKTtcbiAgICAgIHRoaXMuX3N2Zy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLl9zdmcuc3R5bGUubGVmdCA9IDA7XG4gICAgICB0aGlzLl9zdmcuc3R5bGUudG9wID0gMDtcbiAgICAgIHRoaXMuX3N2Zy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHRoaXMuX3N2Zy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICB0aGlzLl92aWV3ZXIuY2FudmFzLmFwcGVuZENoaWxkKHRoaXMuX3N2Zyk7XG5cbiAgICAgIHRoaXMuX25vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsICdnJyk7XG4gICAgICB0aGlzLl9zdmcuYXBwZW5kQ2hpbGQodGhpcy5fbm9kZSk7XG5cbiAgICAgIHRoaXMuX3ZpZXdlci5hZGRIYW5kbGVyKCdhbmltYXRpb24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5yZXNpemUoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl92aWV3ZXIuYWRkSGFuZGxlcignb3BlbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnJlc2l6ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3ZpZXdlci5hZGRIYW5kbGVyKCdyb3RhdGUnLCBmdW5jdGlvbihldnQ6IGFueSkge1xuICAgICAgICBzZWxmLnJlc2l6ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3ZpZXdlci5hZGRIYW5kbGVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5yZXNpemUoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cbiAgICBub2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIHJlc2l6ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXJXaWR0aCAhPT0gdGhpcy5fdmlld2VyLmNvbnRhaW5lci5jbGllbnRXaWR0aCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXJXaWR0aCA9IHRoaXMuX3ZpZXdlci5jb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuX3N2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5fY29udGFpbmVyV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29udGFpbmVySGVpZ2h0ICE9PSB0aGlzLl92aWV3ZXIuY29udGFpbmVyLmNsaWVudEhlaWdodCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXJIZWlnaHQgPSB0aGlzLl92aWV3ZXIuY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5fc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5fY29udGFpbmVySGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcCA9IHRoaXMuX3ZpZXdlci52aWV3cG9ydC5waXhlbEZyb21Qb2ludChcbiAgICAgICAgbmV3IE9wZW5TZWFkcmFnb24uUG9pbnQoMCwgMCksXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBjb25zdCB6b29tID0gdGhpcy5fdmlld2VyLnZpZXdwb3J0LmdldFpvb20odHJ1ZSk7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IHRoaXMuX3ZpZXdlci52aWV3cG9ydC5nZXRSb3RhdGlvbigpO1xuICAgICAgLy8gVE9ETzogRXhwb3NlIGFuIGFjY2Vzc29yIGZvciBfY29udGFpbmVySW5uZXJTaXplIGluIHRoZSBPU0QgQVBJIHNvIHdlIGRvbid0IGhhdmUgdG8gdXNlIHRoZSBwcml2YXRlIHZhcmlhYmxlLlxuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLl92aWV3ZXIudmlld3BvcnQuX2NvbnRhaW5lcklubmVyU2l6ZS54ICogem9vbTtcbiAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICBwLnggK1xuICAgICAgICAgICcsJyArXG4gICAgICAgICAgcC55ICtcbiAgICAgICAgICAnKSBzY2FsZSgnICtcbiAgICAgICAgICBzY2FsZSArXG4gICAgICAgICAgJykgcm90YXRlKCcgK1xuICAgICAgICAgIHJvdGF0aW9uICtcbiAgICAgICAgICAnKSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIG9uQ2xpY2sobm9kZTogYW55LCBoYW5kbGVyOiBhbnkpIHtcbiAgICAgIC8vIFRPRE86IEZhc3QgY2xpY2sgZm9yIG1vYmlsZSBicm93c2Vyc1xuXG4gICAgICBuZXcgT3BlblNlYWRyYWdvbi5Nb3VzZVRyYWNrZXIoe1xuICAgICAgICBlbGVtZW50OiBub2RlLFxuICAgICAgICBjbGlja0hhbmRsZXI6IGhhbmRsZXJcbiAgICAgIH0pLnNldFRyYWNraW5nKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS1cblxuICAvLyAtLS0tLS0tLS0tXG4gIE9wZW5TZWFkcmFnb24uVmlld2VyLnByb3RvdHlwZS5zdmdPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3N2Z092ZXJsYXlJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3ZnT3ZlcmxheUluZm87XG4gICAgfVxuXG4gICAgdGhpcy5fc3ZnT3ZlcmxheUluZm8gPSBuZXcgT3ZlcmxheSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5fc3ZnT3ZlcmxheUluZm87XG4gIH07XG59XG4iXX0=