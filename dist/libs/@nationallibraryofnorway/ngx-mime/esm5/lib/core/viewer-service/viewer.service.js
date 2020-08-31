import { __decorate, __values } from "tslib";
import { Injectable, NgZone } from '@angular/core';
import * as d3 from 'd3';
import { BehaviorSubject, interval, Subject } from 'rxjs';
import { distinctUntilChanged, sample, takeUntil } from 'rxjs/operators';
import { ModeService } from '../../core/mode-service/mode.service';
import { CalculateCanvasGroupPositionFactory } from '../canvas-group-position/calculate-canvas-group-position-factory';
import { CanvasService } from '../canvas-service/canvas-service';
import { ClickService } from '../click-service/click.service';
import { createSvgOverlay } from '../ext/svg-overlay';
import { IiifContentSearchService } from '../iiif-content-search-service/iiif-content-search.service';
import { ManifestUtils } from '../iiif-manifest-service/iiif-manifest-utils';
import { Options } from '../models/options';
import { PinchStatus } from '../models/pinchStatus';
import { Side } from '../models/side';
import { ViewerLayout } from '../models/viewer-layout';
import { ViewerMode } from '../models/viewer-mode';
import { ViewerOptions } from '../models/viewer-options';
import { StyleService } from '../style-service/style.service';
import { ViewerLayoutService } from '../viewer-layout-service/viewer-layout-service';
import { CalculateNextCanvasGroupFactory } from './calculate-next-canvas-group-factory';
import { CanvasGroupMask } from './canvas-group-mask';
import { DefaultGoToCanvasGroupStrategy } from './go-to-canvas-group-strategy';
import { SwipeDragEndCounter } from './swipe-drag-end-counter';
import { SwipeUtils } from './swipe-utils';
import { TileSourceStrategyFactory } from './tile-source-strategy-factory';
import { DefaultZoomStrategy } from './zoom-strategy';
var ViewerService = /** @class */ (function () {
    function ViewerService(zone, clickService, canvasService, modeService, viewerLayoutService, iiifContentSearchService, styleService) {
        var _this = this;
        this.zone = zone;
        this.clickService = clickService;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.viewerLayoutService = viewerLayoutService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.styleService = styleService;
        this.subscriptions = [];
        this.destroyed = new Subject();
        this.isCanvasPressed = new BehaviorSubject(false);
        this.currentCenter = new Subject();
        this.currentCanvasIndex = new BehaviorSubject(0);
        this.currentHit = new BehaviorSubject(null);
        this.osdIsReady = new BehaviorSubject(false);
        this.swipeDragEndCounter = new SwipeDragEndCounter();
        this.pinchStatus = new PinchStatus();
        this.rotation = 0;
        /**
         * Scroll-handler
         */
        this.scrollHandler = function (event) {
            var zoomFactor = Math.pow(ViewerOptions.zoom.zoomFactor, event.scroll);
            // Scrolling up
            if (event.scroll > 0) {
                _this.zoomInGesture(event.position, zoomFactor);
                // Scrolling down
            }
            else if (event.scroll < 0) {
                _this.zoomOutGesture(event.position, zoomFactor);
            }
        };
        /**
         * Pinch-handler
         */
        this.pinchHandler = function (event) {
            _this.pinchStatus.active = true;
            var zoomFactor = event.distance / event.lastDistance;
            // Pinch Out
            if (event.distance >
                event.lastDistance + ViewerOptions.zoom.pinchZoomThreshold) {
                _this.zoomInPinchGesture(event, zoomFactor);
                // Pinch In
            }
            else if (event.distance + ViewerOptions.zoom.pinchZoomThreshold <
                event.lastDistance) {
                _this.zoomOutPinchGesture(event, zoomFactor);
            }
        };
        /**
         * Single-click-handler
         * Single-click toggles between page/dashboard-mode if a page is hit
         */
        this.singleClickHandler = function (event) {
            var target = event.originalEvent.target;
            var tileIndex = _this.getOverlayIndexFromClickEvent(target);
            var requestedCanvasGroupIndex = _this.canvasService.findCanvasGroupByCanvasIndex(tileIndex);
            if (requestedCanvasGroupIndex) {
                _this.canvasService.currentCanvasGroupIndex = requestedCanvasGroupIndex;
            }
            _this.modeService.toggleMode();
        };
        /**
         * Double-click-handler
         * Double-click dashboard-mode should go to page-mode
         * Double-click page-mode should
         *    a) Zoom in if page is fitted vertically, or
         *    b) Fit vertically if page is already zoomed in
         */
        this.dblClickHandler = function (event) {
            var target = event.originalEvent.target;
            // Page is fitted vertically, so dbl-click zooms in
            if (_this.modeService.mode === ViewerMode.PAGE) {
                _this.modeService.mode = ViewerMode.PAGE_ZOOMED;
                _this.zoomStrategy.zoomIn(ViewerOptions.zoom.dblClickZoomFactor, event.position);
            }
            else {
                _this.modeService.mode = ViewerMode.PAGE;
                var canvasIndex = _this.getOverlayIndexFromClickEvent(target);
                var requestedCanvasGroupIndex = _this.canvasService.findCanvasGroupByCanvasIndex(canvasIndex);
                if (requestedCanvasGroupIndex >= 0) {
                    _this.canvasService.currentCanvasGroupIndex = requestedCanvasGroupIndex;
                }
            }
        };
        this.dragHandler = function (e) {
            _this.viewer.panHorizontal = true;
            if (_this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
                var dragEndPosision = e.position;
                var canvasGroupRect = _this.canvasService.getCurrentCanvasGroupRect();
                var vpBounds = _this.getViewportBounds();
                var pannedPastCanvasGroup = SwipeUtils.getSideIfPanningPastEndOfCanvasGroup(canvasGroupRect, vpBounds);
                var direction = e.direction;
                if ((pannedPastCanvasGroup === Side.LEFT &&
                    SwipeUtils.isDirectionInRightSemicircle(direction)) ||
                    (pannedPastCanvasGroup === Side.RIGHT &&
                        SwipeUtils.isDirectionInLeftSemicircle(direction))) {
                    _this.viewer.panHorizontal = false;
                }
            }
        };
    }
    Object.defineProperty(ViewerService.prototype, "onCenterChange", {
        get: function () {
            return this.currentCenter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerService.prototype, "onCanvasGroupIndexChange", {
        get: function () {
            return this.currentCanvasIndex.asObservable().pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerService.prototype, "onHitChange", {
        get: function () {
            return this.currentHit.asObservable().pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerService.prototype, "onOsdReadyChange", {
        get: function () {
            return this.osdIsReady.asObservable().pipe(distinctUntilChanged());
        },
        enumerable: true,
        configurable: true
    });
    ViewerService.prototype.getViewer = function () {
        return this.viewer;
    };
    ViewerService.prototype.getTilesources = function () {
        return this.tileSources;
    };
    ViewerService.prototype.getOverlays = function () {
        return this.overlays;
    };
    ViewerService.prototype.getZoom = function () {
        return this.zoomStrategy.getZoom();
    };
    ViewerService.prototype.getMinZoom = function () {
        return this.zoomStrategy.getMinZoom();
    };
    ViewerService.prototype.getMaxZoom = function () {
        return this.zoomStrategy.getMaxZoom();
    };
    ViewerService.prototype.home = function () {
        if (!this.osdIsReady.getValue()) {
            return;
        }
        this.zoomStrategy.setMinZoom(this.modeService.mode);
        this.goToCanvasGroupStrategy.centerCurrentCanvas();
        this.zoomStrategy.goToHomeZoom();
    };
    ViewerService.prototype.goToPreviousCanvasGroup = function () {
        this.goToCanvasGroupStrategy.goToPreviousCanvasGroup(this.currentCanvasIndex.getValue());
    };
    ViewerService.prototype.goToNextCanvasGroup = function () {
        this.goToCanvasGroupStrategy.goToNextCanvasGroup(this.currentCanvasIndex.getValue());
    };
    ViewerService.prototype.goToCanvasGroup = function (canvasGroupIndex, immediately) {
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: canvasGroupIndex,
            immediately: immediately
        });
    };
    ViewerService.prototype.goToCanvas = function (canvasIndex, immediately) {
        var canvasGroupIndex = this.canvasService.findCanvasGroupByCanvasIndex(canvasIndex);
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: canvasGroupIndex,
            immediately: immediately
        });
    };
    ViewerService.prototype.highlight = function (searchResult) {
        var e_1, _a, e_2, _b;
        this.clearHightlight();
        if (this.viewer) {
            if (searchResult.q) {
                this.currentSearch = searchResult;
            }
            try {
                for (var _c = __values(searchResult.hits), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var hit = _d.value;
                    try {
                        for (var _e = (e_2 = void 0, __values(hit.rects)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var rect = _f.value;
                            var canvasRect = this.canvasService.getCanvasRect(hit.index);
                            if (canvasRect) {
                                var x = canvasRect.x + rect.x;
                                var y = canvasRect.y + rect.y;
                                var width = rect.width;
                                var height = rect.height;
                                var currentOverlay = this.svgNode
                                    .append('rect')
                                    .attr('mimeHitIndex', hit.id)
                                    .attr('x', x)
                                    .attr('y', y)
                                    .attr('width', width)
                                    .attr('height', height)
                                    .attr('class', 'hit');
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    ViewerService.prototype.highlightCurrentHit = function (hit) {
        this.svgNode.selectAll("g > rect.selected").attr('class', 'hit');
        this.svgNode
            .selectAll("g > rect[mimeHitIndex='" + hit.id + "']")
            .attr('class', 'hit selected');
    };
    ViewerService.prototype.clearHightlight = function () {
        if (this.svgNode) {
            this.svgNode.selectAll('.hit').remove();
            this.currentSearch = null;
        }
    };
    ViewerService.prototype.setUpViewer = function (manifest, config) {
        var _this = this;
        this.config = config;
        if (manifest && manifest.tileSource) {
            this.tileSources = manifest.tileSource;
            this.zone.runOutsideAngular(function () {
                _this.manifest = manifest;
                _this.isManifestPaged = ManifestUtils.isManifestPaged(_this.manifest);
                _this.viewer = new OpenSeadragon.Viewer(Object.assign({}, _this.getOptions()));
                createSvgOverlay();
                _this.zoomStrategy = new DefaultZoomStrategy(_this.viewer, _this.canvasService, _this.modeService, _this.viewerLayoutService);
                _this.goToCanvasGroupStrategy = new DefaultGoToCanvasGroupStrategy(_this.viewer, _this.zoomStrategy, _this.canvasService, _this.modeService, _this.config, _this.manifest.viewingDirection);
                /*
                  This disables keyboard navigation in openseadragon.
                  We use s for opening search dialog and OSD use the same key for panning.
                  Issue: https://github.com/openseadragon/openseadragon/issues/794
                 */
                _this.defaultKeyDownHandler = _this.viewer.innerTracker.keyDownHandler;
                _this.disableKeyDownHandler();
                _this.viewer.innerTracker.keyHandler = null;
                _this.canvasService.reset();
                _this.canvasGroupMask = new CanvasGroupMask(_this.viewer, _this.styleService);
            });
            this.addToWindow();
            this.setupOverlays();
            this.createOverlays();
            this.addEvents();
            this.addSubscriptions();
        }
    };
    ViewerService.prototype.addSubscriptions = function () {
        var _this = this;
        this.modeService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (mode) {
            _this.modeChanged(mode);
        });
        this.zone.runOutsideAngular(function () {
            _this.onCenterChange
                .pipe(takeUntil(_this.destroyed), sample(interval(500)))
                .subscribe(function (center) {
                _this.calculateCurrentCanvasGroup(center);
                if (center && center !== null) {
                    _this.osdIsReady.next(true);
                }
            });
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (canvasGroupIndex) {
            _this.swipeDragEndCounter.reset();
            if (canvasGroupIndex !== -1) {
                _this.canvasGroupMask.changeCanvasGroup(_this.canvasService.getCanvasGroupRect(canvasGroupIndex));
                if (_this.modeService.mode === ViewerMode.PAGE) {
                    _this.zoomStrategy.goToHomeZoom();
                }
            }
        });
        this.onOsdReadyChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (state) {
            if (state) {
                _this.initialCanvasGroupLoaded();
                _this.currentCenter.next(_this.viewer.viewport.getCenter(true));
            }
        });
        this.viewerLayoutService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (state) {
            _this.layoutPages();
        });
        this.iiifContentSearchService.onSelected
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (hit) {
            if (hit) {
                _this.highlightCurrentHit(hit);
                _this.goToCanvas(hit.index, false);
            }
        });
    };
    ViewerService.prototype.layoutPages = function () {
        if (this.osdIsReady.getValue()) {
            var currentCanvasIndex = this.canvasService.currentCanvasIndex;
            this.destroy(true);
            this.setUpViewer(this.manifest, this.config);
            this.goToCanvasGroupStrategy.goToCanvasGroup({
                canvasGroupIndex: this.canvasService.findCanvasGroupByCanvasIndex(currentCanvasIndex),
                immediately: false
            });
            // Recreate highlights if there is an active search going on
            if (this.currentSearch) {
                this.highlight(this.currentSearch);
            }
        }
    };
    ViewerService.prototype.addToWindow = function () {
        window.openSeadragonViewer = this.viewer;
    };
    ViewerService.prototype.setupOverlays = function () {
        this.svgOverlay = this.viewer.svgOverlay();
        this.svgNode = d3.select(this.svgOverlay.node());
    };
    ViewerService.prototype.disableKeyDownHandler = function () {
        this.viewer.innerTracker.keyDownHandler = null;
    };
    ViewerService.prototype.resetKeyDownHandler = function () {
        this.viewer.innerTracker.keyDownHandler = this.defaultKeyDownHandler;
    };
    /**
     *
     * @param layoutSwitch true if switching between layouts
     * to keep current search-state and rotation
     */
    ViewerService.prototype.destroy = function (layoutSwitch) {
        this.osdIsReady.next(false);
        this.currentCenter.next(null);
        if (this.viewer != null && this.viewer.isOpen()) {
            if (this.viewer.container != null) {
                d3.select(this.viewer.container.parentNode).style('opacity', '0');
            }
            this.viewer.destroy();
        }
        this.destroyed.next();
        this.overlays = null;
        this.canvasService.reset();
        if (this.canvasGroupMask) {
            this.canvasGroupMask.destroy();
        }
        // Keep search-state and rotation only if layout-switch
        if (!layoutSwitch) {
            this.currentSearch = null;
            this.iiifContentSearchService.destroy();
            this.rotation = 0;
        }
    };
    ViewerService.prototype.addEvents = function () {
        var _this = this;
        this.clickService.reset();
        this.clickService.addSingleClickHandler(this.singleClickHandler);
        this.clickService.addDoubleClickHandler(this.dblClickHandler);
        this.viewer.addHandler('animation-finish', function () {
            _this.currentCenter.next(_this.viewer.viewport.getCenter(true));
        });
        this.viewer.addHandler('canvas-click', this.clickService.click);
        this.viewer.addHandler('canvas-double-click', function (e) { return (e.preventDefaultAction = true); });
        this.viewer.addHandler('canvas-press', function (e) {
            _this.pinchStatus.active = false;
            _this.dragStartPosition = e.position;
            _this.isCanvasPressed.next(true);
        });
        this.viewer.addHandler('canvas-release', function () {
            return _this.isCanvasPressed.next(false);
        });
        this.viewer.addHandler('canvas-scroll', this.scrollHandler);
        this.viewer.addHandler('canvas-pinch', this.pinchHandler);
        this.viewer.addHandler('canvas-drag', function (e) { return _this.dragHandler(e); });
        this.viewer.addHandler('canvas-drag-end', function (e) {
            return _this.swipeToCanvasGroup(e);
        });
        this.viewer.addHandler('animation', function (e) {
            _this.currentCenter.next(_this.viewer.viewport.getCenter(true));
        });
    };
    ViewerService.prototype.zoomIn = function (zoomFactor, position) {
        this.zoomStrategy.zoomIn(zoomFactor, position);
    };
    ViewerService.prototype.zoomOut = function (zoomFactor, position) {
        this.zoomStrategy.zoomOut(zoomFactor, position);
    };
    ViewerService.prototype.rotate = function () {
        this.rotation = (this.rotation + 90) % 360;
        this.layoutPages();
    };
    /**
     * Callback for mode-change
     * @param mode ViewerMode
     */
    ViewerService.prototype.modeChanged = function (mode) {
        if (mode.currentValue === ViewerMode.DASHBOARD) {
            this.viewer.panVertical = false;
            this.toggleToDashboard();
            this.disableKeyDownHandler();
        }
        else if (mode.currentValue === ViewerMode.PAGE) {
            this.viewer.panVertical = false;
            this.toggleToPage();
            this.disableKeyDownHandler();
        }
        else if (mode.currentValue === ViewerMode.PAGE_ZOOMED) {
            this.viewer.panVertical = true;
            this.resetKeyDownHandler();
        }
    };
    /**
     * Switches to DASHBOARD-mode, repositions canvas group and removes max-width on viewer
     */
    ViewerService.prototype.toggleToDashboard = function () {
        if (!this.canvasService.isCurrentCanvasGroupValid()) {
            return;
        }
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: this.canvasService.currentCanvasGroupIndex,
            immediately: false
        });
        this.canvasGroupMask.hide();
        this.zoomStrategy.setMinZoom(ViewerMode.DASHBOARD);
        this.zoomStrategy.goToHomeZoom();
    };
    /**
     * Switches to PAGE-mode, centers current canvas group and repositions other canvas groups
     */
    ViewerService.prototype.toggleToPage = function () {
        if (!this.canvasService.isCurrentCanvasGroupValid()) {
            return;
        }
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: this.canvasService.currentCanvasGroupIndex,
            immediately: false
        });
        this.canvasGroupMask.show();
        this.zoomStrategy.setMinZoom(ViewerMode.PAGE);
        this.zoomStrategy.goToHomeZoom();
    };
    /**
     *
     * @param point to zoom to. If not set, the viewer will zoom to center
     */
    ViewerService.prototype.zoomInGesture = function (position, zoomFactor) {
        if (this.modeService.mode === ViewerMode.DASHBOARD) {
            this.modeService.mode = ViewerMode.PAGE;
        }
        else {
            if (position) {
                this.zoomStrategy.zoomIn(zoomFactor, position);
            }
            else {
                this.zoomStrategy.zoomIn();
            }
        }
    };
    ViewerService.prototype.zoomOutGesture = function (position, zoomFactor) {
        if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            this.zoomStrategy.zoomOut(zoomFactor, position);
        }
        else if (this.modeService.mode === ViewerMode.PAGE) {
            this.modeService.mode = ViewerMode.DASHBOARD;
        }
    };
    /**
     * Process zoom in pinch gesture (pinch out)
     *
     * Toggle to page mode and Zoom in
     *
     * @param event from pinch gesture
     */
    ViewerService.prototype.zoomInPinchGesture = function (event, zoomFactor) {
        if (this.modeService.mode === ViewerMode.DASHBOARD) {
            this.modeService.mode = ViewerMode.PAGE;
        }
        else {
            this.zoomIn(zoomFactor, this.dragStartPosition || event.center);
        }
    };
    /**
     * Process zoom out pinch gesture (pinch in)
     *
     * Zoom out and toggle to dashboard when all zoomed out.
     * Stop between zooming out and toggling to dashboard.
     *
     * @param event from pinch gesture
     */
    ViewerService.prototype.zoomOutPinchGesture = function (event, zoomFactor) {
        var gestureId = event.gesturePoints[0].id;
        if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            this.pinchStatus.shouldStop = true;
            this.zoomStrategy.zoomOut(zoomFactor, event.center);
        }
        else if (this.modeService.mode === ViewerMode.PAGE) {
            if (!this.pinchStatus.shouldStop ||
                gestureId === this.pinchStatus.previousGestureId + 2) {
                this.pinchStatus.shouldStop = false;
                this.modeService.toggleMode();
            }
            this.pinchStatus.previousGestureId = gestureId;
        }
    };
    /**
     * Checks if hit element is a <rect>-element
     * @param target
     */
    ViewerService.prototype.isCanvasGroupHit = function (target) {
        return target instanceof SVGRectElement;
    };
    /**
     * Iterates tilesources and adds them to viewer
     * Creates svg clickable overlays for each tile
     */
    ViewerService.prototype.createOverlays = function () {
        var _this = this;
        this.overlays = [];
        var canvasRects = [];
        var calculateCanvasGroupPositionStrategy = CalculateCanvasGroupPositionFactory.create(this.viewerLayoutService.layout, this.isManifestPaged);
        var isTwoPageView = this.viewerLayoutService.layout === ViewerLayout.TWO_PAGE;
        var group = this.svgNode.append('g').attr('class', 'page-group');
        this.tileSources.forEach(function (tile, i) {
            var position = calculateCanvasGroupPositionStrategy.calculateCanvasGroupPosition({
                canvasGroupIndex: i,
                canvasSource: tile,
                previousCanvasGroupPosition: canvasRects[i - 1],
                viewingDirection: _this.manifest.viewingDirection
            }, _this.rotation);
            canvasRects.push(position);
            var tileSourceStrategy = TileSourceStrategyFactory.create(tile);
            var tileSource = tileSourceStrategy.getTileSource(tile);
            _this.zone.runOutsideAngular(function () {
                var rotated = _this.rotation === 90 || _this.rotation === 270;
                var bounds;
                /* Because image scaling is performed before rotation,
                 * we must invert width & height and translate position so that tile rotation ends up correct
                 */
                if (rotated) {
                    bounds = new OpenSeadragon.Rect(position.x + (position.width - position.height) / 2, position.y - (position.width - position.height) / 2, position.height, position.width);
                }
                else {
                    bounds = new OpenSeadragon.Rect(position.x, position.y, position.width, position.height);
                }
                _this.viewer.addTiledImage({
                    index: i,
                    tileSource: tileSource,
                    fitBounds: bounds,
                    degrees: _this.rotation
                });
            });
            if (isTwoPageView && i % 2 !== 0) {
                group = _this.svgNode.append('g').attr('class', 'page-group');
            }
            var currentOverlay = group
                .append('rect')
                .attr('x', position.x)
                .attr('y', position.y)
                .attr('width', position.width)
                .attr('height', position.height)
                .attr('class', 'tile');
            // Make custom borders if current layout is two-paged
            if (isTwoPageView) {
                if (i % 2 === 0 && i !== 0) {
                    var noLeftStrokeStyle = Number(position.width * 2 + position.height) +
                        ', ' +
                        position.width * 2;
                    currentOverlay.style('stroke-dasharray', noLeftStrokeStyle);
                }
                else if (i % 2 !== 0 && i !== 0) {
                    var noRightStrokeStyle = position.width +
                        ', ' +
                        position.height +
                        ', ' +
                        Number(position.width * 2 + position.height);
                    currentOverlay.style('stroke-dasharray', noRightStrokeStyle);
                }
            }
            var currentOverlayNode = currentOverlay.node();
            _this.overlays[i] = currentOverlayNode;
        });
        var layout = this.viewerLayoutService.layout === ViewerLayout.ONE_PAGE ||
            !this.isManifestPaged
            ? ViewerLayout.ONE_PAGE
            : ViewerLayout.TWO_PAGE;
        this.canvasService.addAll(canvasRects, layout);
    };
    /**
     * Sets viewer size and opacity once the first canvas group has fully loaded
     */
    ViewerService.prototype.initialCanvasGroupLoaded = function () {
        this.home();
        this.canvasGroupMask.initialise(this.canvasService.getCurrentCanvasGroupRect(), this.modeService.mode !== ViewerMode.DASHBOARD);
        d3.select(this.viewer.container.parentNode)
            .transition()
            .duration(ViewerOptions.transitions.OSDAnimationTime)
            .style('opacity', '1');
    };
    /**
     * Returns overlay-index for click-event if hit
     * @param target hit <rect>
     */
    ViewerService.prototype.getOverlayIndexFromClickEvent = function (target) {
        if (this.isCanvasGroupHit(target)) {
            var requestedCanvasGroup = this.overlays.indexOf(target);
            if (requestedCanvasGroup >= 0) {
                return requestedCanvasGroup;
            }
        }
        return -1;
    };
    ViewerService.prototype.getOptions = function () {
        var options = new Options();
        options.ajaxWithCredentials = this.config.withCredentials;
        options.loadTilesWithAjax = this.config.loadTilesWithAjax;
        options.crossOriginPolicy = this.config.crossOriginPolicy;
        options.ajaxHeaders = this.config.ajaxHeaders;
        return options;
    };
    ViewerService.prototype.calculateCurrentCanvasGroup = function (center) {
        if (center) {
            var currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(center);
            this.currentCanvasIndex.next(currentCanvasGroupIndex);
        }
    };
    ViewerService.prototype.swipeToCanvasGroup = function (e) {
        // Don't swipe on pinch actions
        if (this.pinchStatus.active) {
            return;
        }
        var speed = e.speed;
        var dragEndPosision = e.position;
        var isCanvasGroupZoomed = this.modeService.mode === ViewerMode.PAGE_ZOOMED;
        var canvasGroupRect = this.canvasService.getCurrentCanvasGroupRect();
        var viewportBounds = this.getViewportBounds();
        var direction = SwipeUtils.getSwipeDirection(this.dragStartPosition, dragEndPosision, isCanvasGroupZoomed);
        var currentCanvasGroupIndex = this.canvasService
            .currentCanvasGroupIndex;
        var calculateNextCanvasGroupStrategy = CalculateNextCanvasGroupFactory.create(this.modeService.mode);
        var pannedPastSide, canvasGroupEndHitCountReached;
        if (this.modeService.mode === ViewerMode.PAGE_ZOOMED) {
            pannedPastSide = SwipeUtils.getSideIfPanningPastEndOfCanvasGroup(canvasGroupRect, viewportBounds);
            this.swipeDragEndCounter.addHit(pannedPastSide, direction);
            canvasGroupEndHitCountReached = this.swipeDragEndCounter.hitCountReached();
        }
        var newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
            currentCanvasGroupCenter: this.currentCanvasIndex.getValue(),
            speed: speed,
            direction: direction,
            currentCanvasGroupIndex: currentCanvasGroupIndex,
            canvasGroupEndHitCountReached: canvasGroupEndHitCountReached,
            viewingDirection: this.manifest.viewingDirection
        });
        if (this.modeService.mode === ViewerMode.DASHBOARD ||
            this.modeService.mode === ViewerMode.PAGE ||
            (canvasGroupEndHitCountReached && direction)) {
            this.goToCanvasGroupStrategy.goToCanvasGroup({
                canvasGroupIndex: newCanvasGroupIndex,
                immediately: false,
                direction: direction
            });
        }
    };
    ViewerService.prototype.getViewportBounds = function () {
        return this.viewer.viewport.getBounds();
    };
    ViewerService.ctorParameters = function () { return [
        { type: NgZone },
        { type: ClickService },
        { type: CanvasService },
        { type: ModeService },
        { type: ViewerLayoutService },
        { type: IiifContentSearchService },
        { type: StyleService }
    ]; };
    ViewerService = __decorate([
        Injectable()
    ], ViewerService);
    return ViewerService;
}());
export { ViewerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS92aWV3ZXItc2VydmljZS92aWV3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZixRQUFRLEVBRVIsT0FBTyxFQUVSLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFLN0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBS3JGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsOEJBQThCLEVBRS9CLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWdCLE1BQU0saUJBQWlCLENBQUM7QUFJcEU7SUFpQ0UsdUJBQ1UsSUFBWSxFQUNaLFlBQTBCLEVBQzFCLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4Qyx3QkFBa0QsRUFDbEQsWUFBMEI7UUFQcEMsaUJBUUk7UUFQTSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBaEM1QixrQkFBYSxHQUF3QixFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTFDLG9CQUFlLEdBQXFCLElBQUksZUFBZSxDQUM1RCxLQUFLLENBQ04sQ0FBQztRQUVNLGtCQUFhLEdBQW1CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUMsdUJBQWtCLEdBQTRCLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLGVBQVUsR0FBeUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSx3QkFBbUIsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFFaEQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBVWpDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFxWnBCOztXQUVHO1FBQ0gsa0JBQWEsR0FBRyxVQUFDLEtBQVU7WUFDekIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekUsZUFBZTtZQUNmLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDL0MsaUJBQWlCO2FBQ2xCO2lCQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQztRQUVGOztXQUVHO1FBQ0gsaUJBQVksR0FBRyxVQUFDLEtBQVU7WUFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN2RCxZQUFZO1lBQ1osSUFDRSxLQUFLLENBQUMsUUFBUTtnQkFDZCxLQUFLLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQzFEO2dCQUNBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzNDLFdBQVc7YUFDWjtpQkFBTSxJQUNMLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0I7Z0JBQ3RELEtBQUssQ0FBQyxZQUFZLEVBQ2xCO2dCQUNBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDN0M7UUFDSCxDQUFDLENBQUM7UUFrRUY7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQUcsVUFBQyxLQUFVO1lBQzlCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQzFDLElBQU0sU0FBUyxHQUFHLEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxJQUFNLHlCQUF5QixHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQy9FLFNBQVMsQ0FDVixDQUFDO1lBQ0YsSUFBSSx5QkFBeUIsRUFBRTtnQkFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyx5QkFBeUIsQ0FBQzthQUN4RTtZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDO1FBRUY7Ozs7OztXQU1HO1FBQ0gsb0JBQWUsR0FBRyxVQUFDLEtBQVU7WUFDM0IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7WUFDMUMsbURBQW1EO1lBQ25ELElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDN0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3RCLGFBQWEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQ3JDLEtBQUssQ0FBQyxRQUFRLENBQ2YsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLElBQU0sV0FBVyxHQUFXLEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkUsSUFBTSx5QkFBeUIsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUMvRSxXQUFXLENBQ1osQ0FBQztnQkFDRixJQUFJLHlCQUF5QixJQUFJLENBQUMsRUFBRTtvQkFDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsR0FBRyx5QkFBeUIsQ0FBQztpQkFDeEU7YUFDRjtRQUNILENBQUMsQ0FBQztRQW9LTSxnQkFBVyxHQUFHLFVBQUMsQ0FBTTtZQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDakMsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFO2dCQUNwRCxJQUFNLGVBQWUsR0FBVSxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUMxQyxJQUFNLGVBQWUsR0FBUyxLQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQzdFLElBQU0sUUFBUSxHQUFTLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUNoRCxJQUFNLHFCQUFxQixHQUFTLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FDakYsZUFBZSxFQUNmLFFBQVEsQ0FDVCxDQUFDO2dCQUNGLElBQU0sU0FBUyxHQUFXLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RDLElBQ0UsQ0FBQyxxQkFBcUIsS0FBSyxJQUFJLENBQUMsSUFBSTtvQkFDbEMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNyRCxDQUFDLHFCQUFxQixLQUFLLElBQUksQ0FBQyxLQUFLO3dCQUNuQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDcEQ7b0JBQ0EsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUNuQzthQUNGO1FBQ0gsQ0FBQyxDQUFDO0lBaHRCQyxDQUFDO0lBRUosc0JBQUkseUNBQWM7YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBd0I7YUFBNUI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQVc7YUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQWdCO2FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7SUFFTSxpQ0FBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBTyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLDRCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLCtDQUF1QixHQUE5QjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVNLDJDQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVNLHVDQUFlLEdBQXRCLFVBQXVCLGdCQUF3QixFQUFFLFdBQW9CO1FBQ25FLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7WUFDM0MsZ0JBQWdCLEVBQUUsZ0JBQWdCO1lBQ2xDLFdBQVcsRUFBRSxXQUFXO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixXQUFtQixFQUFFLFdBQW9CO1FBQ3pELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FDdEUsV0FBVyxDQUNaLENBQUM7UUFDRixJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDO1lBQzNDLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyxXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsWUFBMEI7O1FBQ3pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLFlBQVksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2FBQ25DOztnQkFDRCxLQUFrQixJQUFBLEtBQUEsU0FBQSxZQUFZLENBQUMsSUFBSSxDQUFBLGdCQUFBLDRCQUFFO29CQUFoQyxJQUFNLEdBQUcsV0FBQTs7d0JBQ1osS0FBbUIsSUFBQSxvQkFBQSxTQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUEsQ0FBQSxnQkFBQSw0QkFBRTs0QkFBekIsSUFBTSxJQUFJLFdBQUE7NEJBQ2IsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUMvRCxJQUFJLFVBQVUsRUFBRTtnQ0FDZCxJQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ2hDLElBQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQ0FDaEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQ0FDekIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQ0FDM0IsSUFBTSxjQUFjLEdBQW1CLElBQUksQ0FBQyxPQUFPO3FDQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDO3FDQUNkLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztxQ0FDNUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7cUNBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7cUNBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7cUNBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO3FDQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDOzZCQUN6Qjt5QkFDRjs7Ozs7Ozs7O2lCQUNGOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7SUFFTywyQ0FBbUIsR0FBM0IsVUFBNEIsR0FBUTtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU87YUFDVCxTQUFTLENBQUMsNEJBQTBCLEdBQUcsQ0FBQyxFQUFFLE9BQUksQ0FBQzthQUMvQyxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksUUFBa0IsRUFBRSxNQUF3QjtRQUF4RCxpQkErQ0M7UUE5Q0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BFLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FDckMsQ0FBQztnQkFDRixnQkFBZ0IsRUFBRSxDQUFDO2dCQUNuQixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksbUJBQW1CLENBQ3pDLEtBQUksQ0FBQyxNQUFNLEVBQ1gsS0FBSSxDQUFDLGFBQWEsRUFDbEIsS0FBSSxDQUFDLFdBQVcsRUFDaEIsS0FBSSxDQUFDLG1CQUFtQixDQUN6QixDQUFDO2dCQUNGLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLDhCQUE4QixDQUMvRCxLQUFJLENBQUMsTUFBTSxFQUNYLEtBQUksQ0FBQyxZQUFZLEVBQ2pCLEtBQUksQ0FBQyxhQUFhLEVBQ2xCLEtBQUksQ0FBQyxXQUFXLEVBQ2hCLEtBQUksQ0FBQyxNQUFNLEVBQ1gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDL0IsQ0FBQztnQkFFRjs7OzttQkFJRztnQkFDSCxLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO2dCQUNyRSxLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDM0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FDeEMsS0FBSSxDQUFDLE1BQU0sRUFDWCxLQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQUEsaUJBdURDO1FBdERDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUTthQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxJQUFpQjtZQUMzQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQixLQUFJLENBQUMsY0FBYztpQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUN0RCxTQUFTLENBQUMsVUFBQyxNQUFhO2dCQUN2QixLQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7b0JBQzdCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QjthQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxnQkFBd0I7WUFDbEMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pDLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQ3BDLEtBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FDeEQsQ0FBQztnQkFDRixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUU7b0JBQzdDLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ2xDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0IsU0FBUyxDQUFDLFVBQUMsS0FBYztZQUN4QixJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRO2FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1lBQzdCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVO2FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLEdBQVE7WUFDbEIsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDbkM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxtQ0FBVyxHQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5QixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7Z0JBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQy9ELGtCQUFrQixDQUNuQjtnQkFDRCxXQUFXLEVBQUUsS0FBSzthQUNuQixDQUFDLENBQUM7WUFFSCw0REFBNEQ7WUFDNUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNwQztTQUNGO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDUSxNQUFPLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCw2Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCwyQ0FBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0JBQU8sR0FBUCxVQUFRLFlBQXNCO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMvQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtnQkFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztRQUNELHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQUEsaUJBK0JDO1FBOUJDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUNwQixxQkFBcUIsRUFDckIsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FDNUMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxVQUFDLENBQU07WUFDNUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkMsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBaEMsQ0FBZ0MsQ0FDakMsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxDQUFNLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxDQUFNO1lBQy9DLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUExQixDQUEwQixDQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBTTtZQUN6QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sVUFBbUIsRUFBRSxRQUFnQjtRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxVQUFtQixFQUFFLFFBQWdCO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILG1DQUFXLEdBQVgsVUFBWSxJQUFpQjtRQUMzQixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0sseUNBQWlCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsRUFBRTtZQUNuRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDO1lBQzNDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCO1lBQzVELFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFO1lBQ25ELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7WUFDM0MsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUI7WUFDNUQsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBcUNEOzs7T0FHRztJQUNILHFDQUFhLEdBQWIsVUFBYyxRQUFlLEVBQUUsVUFBbUI7UUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDekM7YUFBTTtZQUNMLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNoRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzVCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLFFBQWUsRUFBRSxVQUFtQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsMENBQWtCLEdBQWxCLFVBQW1CLEtBQVUsRUFBRSxVQUFrQjtRQUMvQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztTQUN6QzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsMkNBQW1CLEdBQW5CLFVBQW9CLEtBQVUsRUFBRSxVQUFrQjtRQUNoRCxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckQ7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDcEQsSUFDRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVTtnQkFDNUIsU0FBUyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUNwRDtnQkFDQSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDL0I7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUE4Q0Q7OztPQUdHO0lBQ0gsd0NBQWdCLEdBQWhCLFVBQWlCLE1BQW1CO1FBQ2xDLE9BQU8sTUFBTSxZQUFZLGNBQWMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0NBQWMsR0FBZDtRQUFBLGlCQXFHQztRQXBHQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFNLFdBQVcsR0FBVyxFQUFFLENBQUM7UUFDL0IsSUFBTSxvQ0FBb0MsR0FBRyxtQ0FBbUMsQ0FBQyxNQUFNLENBQ3JGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQy9CLElBQUksQ0FBQyxlQUFlLENBQ3JCLENBQUM7UUFFRixJQUFNLGFBQWEsR0FDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQzVELElBQUksS0FBSyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQixJQUFNLFFBQVEsR0FBRyxvQ0FBb0MsQ0FBQyw0QkFBNEIsQ0FDaEY7Z0JBQ0UsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDbkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLDJCQUEyQixFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQyxnQkFBZ0IsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQjthQUNqRCxFQUNELEtBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztZQUVGLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0IsSUFBTSxrQkFBa0IsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsSUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTFELEtBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQzFCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxJQUFJLEtBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxDQUFDO2dCQUU5RCxJQUFJLE1BQU0sQ0FBQztnQkFFWDs7bUJBRUc7Z0JBQ0gsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FDN0IsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDbkQsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDbkQsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLENBQUMsS0FBSyxDQUNmLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FDN0IsUUFBUSxDQUFDLENBQUMsRUFDVixRQUFRLENBQUMsQ0FBQyxFQUNWLFFBQVEsQ0FBQyxLQUFLLEVBQ2QsUUFBUSxDQUFDLE1BQU0sQ0FDaEIsQ0FBQztpQkFDSDtnQkFFRCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztvQkFDeEIsS0FBSyxFQUFFLENBQUM7b0JBQ1IsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLFNBQVMsRUFBRSxNQUFNO29CQUNqQixPQUFPLEVBQUUsS0FBSSxDQUFDLFFBQVE7aUJBQ3ZCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxhQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQzlEO1lBRUQsSUFBTSxjQUFjLEdBQUcsS0FBSztpQkFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFekIscURBQXFEO1lBQ3JELElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFCLElBQU0saUJBQWlCLEdBQ3JCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUM1QyxJQUFJO3dCQUNKLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixjQUFjLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLENBQUM7aUJBQzdEO3FCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakMsSUFBTSxrQkFBa0IsR0FDdEIsUUFBUSxDQUFDLEtBQUs7d0JBQ2QsSUFBSTt3QkFDSixRQUFRLENBQUMsTUFBTTt3QkFDZixJQUFJO3dCQUNKLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQy9DLGNBQWMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztpQkFDOUQ7YUFDRjtZQUVELElBQU0sa0JBQWtCLEdBQW1CLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxNQUFNLEdBQ1YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsUUFBUTtZQUN6RCxDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUTtZQUN2QixDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZ0RBQXdCLEdBQWhDO1FBQ0UsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsRUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLFNBQVMsQ0FDL0MsQ0FBQztRQUNGLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO2FBQ3hDLFVBQVUsRUFBRTthQUNaLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO2FBQ3BELEtBQUssQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFEQUE2QixHQUE3QixVQUE4QixNQUFXO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pDLElBQU0sb0JBQW9CLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkUsSUFBSSxvQkFBb0IsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sb0JBQW9CLENBQUM7YUFDN0I7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRU8sa0NBQVUsR0FBbEI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUMxRCxPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRCxPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRCxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzlDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxtREFBMkIsR0FBbkMsVUFBb0MsTUFBYTtRQUMvQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FDNUUsTUFBTSxDQUNQLENBQUM7WUFDRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBd0JPLDBDQUFrQixHQUExQixVQUEyQixDQUFNO1FBQy9CLCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUVELElBQU0sS0FBSyxHQUFXLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUVuQyxJQUFNLG1CQUFtQixHQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBRW5ELElBQU0sZUFBZSxHQUFTLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUUsQ0FBQztRQUM3RSxJQUFNLGNBQWMsR0FBUyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV0RCxJQUFNLFNBQVMsR0FBYyxVQUFVLENBQUMsaUJBQWlCLENBQ3ZELElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsZUFBZSxFQUNmLG1CQUFtQixDQUNwQixDQUFDO1FBRUYsSUFBTSx1QkFBdUIsR0FBVyxJQUFJLENBQUMsYUFBYTthQUN2RCx1QkFBdUIsQ0FBQztRQUMzQixJQUFNLGdDQUFnQyxHQUFHLCtCQUErQixDQUFDLE1BQU0sQ0FDN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RCLENBQUM7UUFFRixJQUFJLGNBQW9CLEVBQUUsNkJBQXNDLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3BELGNBQWMsR0FBRyxVQUFVLENBQUMsb0NBQW9DLENBQzlELGVBQWUsRUFDZixjQUFjLENBQ2YsQ0FBQztZQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzNELDZCQUE2QixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RTtRQUVELElBQU0sbUJBQW1CLEdBQUcsZ0NBQWdDLENBQUMsd0JBQXdCLENBQ25GO1lBQ0Usd0JBQXdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtZQUM1RCxLQUFLLEVBQUUsS0FBSztZQUNaLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLHVCQUF1QixFQUFFLHVCQUF1QjtZQUNoRCw2QkFBNkIsRUFBRSw2QkFBNkI7WUFDNUQsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0I7U0FDakQsQ0FDRixDQUFDO1FBQ0YsSUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsU0FBUztZQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSTtZQUN6QyxDQUFDLDZCQUE2QixJQUFJLFNBQVMsQ0FBQyxFQUM1QztZQUNBLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7Z0JBQzNDLGdCQUFnQixFQUFFLG1CQUFtQjtnQkFDckMsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLHlDQUFpQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Z0JBdnhCZSxNQUFNO2dCQUNFLFlBQVk7Z0JBQ1gsYUFBYTtnQkFDZixXQUFXO2dCQUNILG1CQUFtQjtnQkFDZCx3QkFBd0I7Z0JBQ3BDLFlBQVk7O0lBeEN6QixhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWEsQ0EwekJ6QjtJQUFELG9CQUFDO0NBQUEsQUExekJELElBMHpCQztTQTF6QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0IHtcbiAgQmVoYXZpb3JTdWJqZWN0LFxuICBpbnRlcnZhbCxcbiAgT2JzZXJ2YWJsZSxcbiAgU3ViamVjdCxcbiAgU3Vic2NyaXB0aW9uXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHNhbXBsZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlL21vZGUtc2VydmljZS9tb2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FsY3VsYXRlQ2FudmFzR3JvdXBQb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuLi9jYW52YXMtZ3JvdXAtcG9zaXRpb24vY2FsY3VsYXRlLWNhbnZhcy1ncm91cC1wb3NpdGlvbi1mYWN0b3J5JztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZSc7XG5pbXBvcnQgeyBDbGlja1NlcnZpY2UgfSBmcm9tICcuLi9jbGljay1zZXJ2aWNlL2NsaWNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgY3JlYXRlU3ZnT3ZlcmxheSB9IGZyb20gJy4uL2V4dC9zdmctb3ZlcmxheSc7XG5pbXBvcnQgeyBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9paWlmLWNvbnRlbnQtc2VhcmNoLXNlcnZpY2UvaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IE1hbmlmZXN0VXRpbHMgfSBmcm9tICcuLi9paWlmLW1hbmlmZXN0LXNlcnZpY2UvaWlpZi1tYW5pZmVzdC11dGlscyc7XG5pbXBvcnQgeyBNaW1lVmlld2VyQ29uZmlnIH0gZnJvbSAnLi4vbWltZS12aWV3ZXItY29uZmlnJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uL21vZGVscy9kaXJlY3Rpb24nO1xuaW1wb3J0IHsgTWFuaWZlc3QsIFNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgTW9kZUNoYW5nZXMgfSBmcm9tICcuLi9tb2RlbHMvbW9kZUNoYW5nZXMnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy9vcHRpb25zJztcbmltcG9ydCB7IFBpbmNoU3RhdHVzIH0gZnJvbSAnLi4vbW9kZWxzL3BpbmNoU3RhdHVzJztcbmltcG9ydCB7IFNpZGUgfSBmcm9tICcuLi9tb2RlbHMvc2lkZSc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXQgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLWxheW91dCc7XG5pbXBvcnQgeyBWaWV3ZXJNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1tb2RlJztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vc3R5bGUtc2VydmljZS9zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdlckxheW91dFNlcnZpY2UgfSBmcm9tICcuLi92aWV3ZXItbGF5b3V0LXNlcnZpY2Uvdmlld2VyLWxheW91dC1zZXJ2aWNlJztcbmltcG9ydCB7IEhpdCB9IGZyb20gJy4vLi4vbW9kZWxzL2hpdCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vLi4vbW9kZWxzL3BvaW50JztcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4vLi4vbW9kZWxzL3NlYXJjaC1yZXN1bHQnO1xuaW1wb3J0IHsgQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwRmFjdG9yeSB9IGZyb20gJy4vY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLWZhY3RvcnknO1xuaW1wb3J0IHsgQ2FudmFzR3JvdXBNYXNrIH0gZnJvbSAnLi9jYW52YXMtZ3JvdXAtbWFzayc7XG5pbXBvcnQge1xuICBEZWZhdWx0R29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3ksXG4gIEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5XG59IGZyb20gJy4vZ28tdG8tY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcbmltcG9ydCB7IFN3aXBlRHJhZ0VuZENvdW50ZXIgfSBmcm9tICcuL3N3aXBlLWRyYWctZW5kLWNvdW50ZXInO1xuaW1wb3J0IHsgU3dpcGVVdGlscyB9IGZyb20gJy4vc3dpcGUtdXRpbHMnO1xuaW1wb3J0IHsgVGlsZVNvdXJjZVN0cmF0ZWd5RmFjdG9yeSB9IGZyb20gJy4vdGlsZS1zb3VyY2Utc3RyYXRlZ3ktZmFjdG9yeSc7XG5pbXBvcnQgeyBEZWZhdWx0Wm9vbVN0cmF0ZWd5LCBab29tU3RyYXRlZ3kgfSBmcm9tICcuL3pvb20tc3RyYXRlZ3knO1xuXG5kZWNsYXJlIGNvbnN0IE9wZW5TZWFkcmFnb246IGFueTtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3ZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSB2aWV3ZXI6IGFueTtcbiAgcHJpdmF0ZSBzdmdPdmVybGF5OiBhbnk7XG4gIHByaXZhdGUgc3ZnTm9kZTogYW55O1xuICBwcml2YXRlIGNvbmZpZzogTWltZVZpZXdlckNvbmZpZztcblxuICBwcml2YXRlIG92ZXJsYXlzOiBBcnJheTxTVkdSZWN0RWxlbWVudD47XG4gIHByaXZhdGUgdGlsZVNvdXJjZXM6IEFycmF5PFNlcnZpY2U+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IEFycmF5PFN1YnNjcmlwdGlvbj4gPSBbXTtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBpc0NhbnZhc1ByZXNzZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcHJpdmF0ZSBjdXJyZW50Q2VudGVyOiBTdWJqZWN0PFBvaW50PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgY3VycmVudENhbnZhc0luZGV4OiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XG4gIHByaXZhdGUgY3VycmVudEhpdDogQmVoYXZpb3JTdWJqZWN0PEhpdD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcml2YXRlIG9zZElzUmVhZHk6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBwcml2YXRlIHN3aXBlRHJhZ0VuZENvdW50ZXIgPSBuZXcgU3dpcGVEcmFnRW5kQ291bnRlcigpO1xuICBwcml2YXRlIGNhbnZhc0dyb3VwTWFzazogQ2FudmFzR3JvdXBNYXNrO1xuICBwcml2YXRlIHBpbmNoU3RhdHVzID0gbmV3IFBpbmNoU3RhdHVzKCk7XG4gIHByaXZhdGUgZHJhZ1N0YXJ0UG9zaXRpb246IGFueTtcbiAgcHJpdmF0ZSBtYW5pZmVzdDogTWFuaWZlc3Q7XG4gIHByaXZhdGUgaXNNYW5pZmVzdFBhZ2VkOiBib29sZWFuO1xuICBwcml2YXRlIGRlZmF1bHRLZXlEb3duSGFuZGxlcjogYW55O1xuXG4gIHB1YmxpYyBjdXJyZW50U2VhcmNoOiBTZWFyY2hSZXN1bHQ7XG4gIHByaXZhdGUgem9vbVN0cmF0ZWd5OiBab29tU3RyYXRlZ3k7XG4gIHByaXZhdGUgZ29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3k6IEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5O1xuXG4gIHB1YmxpYyByb3RhdGlvbiA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjbGlja1NlcnZpY2U6IENsaWNrU2VydmljZSxcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RlU2VydmljZTogTW9kZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB2aWV3ZXJMYXlvdXRTZXJ2aWNlOiBWaWV3ZXJMYXlvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlOiBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdHlsZVNlcnZpY2U6IFN0eWxlU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IG9uQ2VudGVyQ2hhbmdlKCk6IE9ic2VydmFibGU8UG9pbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2VudGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IG9uQ2FudmFzR3JvdXBJbmRleENoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRDYW52YXNJbmRleC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgZ2V0IG9uSGl0Q2hhbmdlKCk6IE9ic2VydmFibGU8SGl0PiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEhpdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgZ2V0IG9uT3NkUmVhZHlDaGFuZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMub3NkSXNSZWFkeS5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgcHVibGljIGdldFZpZXdlcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZpZXdlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUaWxlc291cmNlcygpOiBTZXJ2aWNlW10ge1xuICAgIHJldHVybiB0aGlzLnRpbGVTb3VyY2VzO1xuICB9XG5cbiAgcHVibGljIGdldE92ZXJsYXlzKCk6IFNWR1JlY3RFbGVtZW50W10ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlzO1xuICB9XG5cbiAgcHVibGljIGdldFpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RyYXRlZ3kuZ2V0Wm9vbSgpO1xuICB9XG5cbiAgcHVibGljIGdldE1pblpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RyYXRlZ3kuZ2V0TWluWm9vbSgpO1xuICB9XG5cbiAgcHVibGljIGdldE1heFpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy56b29tU3RyYXRlZ3kuZ2V0TWF4Wm9vbSgpO1xuICB9XG5cbiAgcHVibGljIGhvbWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9zZElzUmVhZHkuZ2V0VmFsdWUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnpvb21TdHJhdGVneS5zZXRNaW5ab29tKHRoaXMubW9kZVNlcnZpY2UubW9kZSk7XG5cbiAgICB0aGlzLmdvVG9DYW52YXNHcm91cFN0cmF0ZWd5LmNlbnRlckN1cnJlbnRDYW52YXMoKTtcblxuICAgIHRoaXMuem9vbVN0cmF0ZWd5LmdvVG9Ib21lWm9vbSgpO1xuICB9XG5cbiAgcHVibGljIGdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMuZ29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kuZ29Ub1ByZXZpb3VzQ2FudmFzR3JvdXAoXG4gICAgICB0aGlzLmN1cnJlbnRDYW52YXNJbmRleC5nZXRWYWx1ZSgpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvTmV4dENhbnZhc0dyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMuZ29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kuZ29Ub05leHRDYW52YXNHcm91cChcbiAgICAgIHRoaXMuY3VycmVudENhbnZhc0luZGV4LmdldFZhbHVlKClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdvVG9DYW52YXNHcm91cChjYW52YXNHcm91cEluZGV4OiBudW1iZXIsIGltbWVkaWF0ZWx5OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5nb1RvQ2FudmFzR3JvdXBTdHJhdGVneS5nb1RvQ2FudmFzR3JvdXAoe1xuICAgICAgY2FudmFzR3JvdXBJbmRleDogY2FudmFzR3JvdXBJbmRleCxcbiAgICAgIGltbWVkaWF0ZWx5OiBpbW1lZGlhdGVseVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdvVG9DYW52YXMoY2FudmFzSW5kZXg6IG51bWJlciwgaW1tZWRpYXRlbHk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjYW52YXNHcm91cEluZGV4ID0gdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDYW52YXNHcm91cEJ5Q2FudmFzSW5kZXgoXG4gICAgICBjYW52YXNJbmRleFxuICAgICk7XG4gICAgdGhpcy5nb1RvQ2FudmFzR3JvdXBTdHJhdGVneS5nb1RvQ2FudmFzR3JvdXAoe1xuICAgICAgY2FudmFzR3JvdXBJbmRleDogY2FudmFzR3JvdXBJbmRleCxcbiAgICAgIGltbWVkaWF0ZWx5OiBpbW1lZGlhdGVseVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodChzZWFyY2hSZXN1bHQ6IFNlYXJjaFJlc3VsdCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJIaWdodGxpZ2h0KCk7XG4gICAgaWYgKHRoaXMudmlld2VyKSB7XG4gICAgICBpZiAoc2VhcmNoUmVzdWx0LnEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2VhcmNoID0gc2VhcmNoUmVzdWx0O1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBoaXQgb2Ygc2VhcmNoUmVzdWx0LmhpdHMpIHtcbiAgICAgICAgZm9yIChjb25zdCByZWN0IG9mIGhpdC5yZWN0cykge1xuICAgICAgICAgIGNvbnN0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhc1NlcnZpY2UuZ2V0Q2FudmFzUmVjdChoaXQuaW5kZXgpO1xuICAgICAgICAgIGlmIChjYW52YXNSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gY2FudmFzUmVjdC54ICsgcmVjdC54O1xuICAgICAgICAgICAgY29uc3QgeSA9IGNhbnZhc1JlY3QueSArIHJlY3QueTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE92ZXJsYXk6IFNWR1JlY3RFbGVtZW50ID0gdGhpcy5zdmdOb2RlXG4gICAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgICAuYXR0cignbWltZUhpdEluZGV4JywgaGl0LmlkKVxuICAgICAgICAgICAgICAuYXR0cigneCcsIHgpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgeSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdoaXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodEN1cnJlbnRIaXQoaGl0OiBIaXQpIHtcbiAgICB0aGlzLnN2Z05vZGUuc2VsZWN0QWxsKGBnID4gcmVjdC5zZWxlY3RlZGApLmF0dHIoJ2NsYXNzJywgJ2hpdCcpO1xuICAgIHRoaXMuc3ZnTm9kZVxuICAgICAgLnNlbGVjdEFsbChgZyA+IHJlY3RbbWltZUhpdEluZGV4PScke2hpdC5pZH0nXWApXG4gICAgICAuYXR0cignY2xhc3MnLCAnaGl0IHNlbGVjdGVkJyk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJIaWdodGxpZ2h0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN2Z05vZGUpIHtcbiAgICAgIHRoaXMuc3ZnTm9kZS5zZWxlY3RBbGwoJy5oaXQnKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY3VycmVudFNlYXJjaCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc2V0VXBWaWV3ZXIobWFuaWZlc3Q6IE1hbmlmZXN0LCBjb25maWc6IE1pbWVWaWV3ZXJDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICBpZiAobWFuaWZlc3QgJiYgbWFuaWZlc3QudGlsZVNvdXJjZSkge1xuICAgICAgdGhpcy50aWxlU291cmNlcyA9IG1hbmlmZXN0LnRpbGVTb3VyY2U7XG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLm1hbmlmZXN0ID0gbWFuaWZlc3Q7XG4gICAgICAgIHRoaXMuaXNNYW5pZmVzdFBhZ2VkID0gTWFuaWZlc3RVdGlscy5pc01hbmlmZXN0UGFnZWQodGhpcy5tYW5pZmVzdCk7XG4gICAgICAgIHRoaXMudmlld2VyID0gbmV3IE9wZW5TZWFkcmFnb24uVmlld2VyKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0T3B0aW9ucygpKVxuICAgICAgICApO1xuICAgICAgICBjcmVhdGVTdmdPdmVybGF5KCk7XG4gICAgICAgIHRoaXMuem9vbVN0cmF0ZWd5ID0gbmV3IERlZmF1bHRab29tU3RyYXRlZ3koXG4gICAgICAgICAgdGhpcy52aWV3ZXIsXG4gICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLFxuICAgICAgICAgIHRoaXMubW9kZVNlcnZpY2UsXG4gICAgICAgICAgdGhpcy52aWV3ZXJMYXlvdXRTZXJ2aWNlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kgPSBuZXcgRGVmYXVsdEdvVG9DYW52YXNHcm91cFN0cmF0ZWd5KFxuICAgICAgICAgIHRoaXMudmlld2VyLFxuICAgICAgICAgIHRoaXMuem9vbVN0cmF0ZWd5LFxuICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZSxcbiAgICAgICAgICB0aGlzLm1vZGVTZXJ2aWNlLFxuICAgICAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgICAgIHRoaXMubWFuaWZlc3Qudmlld2luZ0RpcmVjdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgVGhpcyBkaXNhYmxlcyBrZXlib2FyZCBuYXZpZ2F0aW9uIGluIG9wZW5zZWFkcmFnb24uXG4gICAgICAgICAgV2UgdXNlIHMgZm9yIG9wZW5pbmcgc2VhcmNoIGRpYWxvZyBhbmQgT1NEIHVzZSB0aGUgc2FtZSBrZXkgZm9yIHBhbm5pbmcuXG4gICAgICAgICAgSXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuc2VhZHJhZ29uL29wZW5zZWFkcmFnb24vaXNzdWVzLzc5NFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZWZhdWx0S2V5RG93bkhhbmRsZXIgPSB0aGlzLnZpZXdlci5pbm5lclRyYWNrZXIua2V5RG93bkhhbmRsZXI7XG4gICAgICAgIHRoaXMuZGlzYWJsZUtleURvd25IYW5kbGVyKCk7XG4gICAgICAgIHRoaXMudmlld2VyLmlubmVyVHJhY2tlci5rZXlIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzR3JvdXBNYXNrID0gbmV3IENhbnZhc0dyb3VwTWFzayhcbiAgICAgICAgICB0aGlzLnZpZXdlcixcbiAgICAgICAgICB0aGlzLnN0eWxlU2VydmljZVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYWRkVG9XaW5kb3coKTtcbiAgICAgIHRoaXMuc2V0dXBPdmVybGF5cygpO1xuICAgICAgdGhpcy5jcmVhdGVPdmVybGF5cygpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICAgIHRoaXMuYWRkU3Vic2NyaXB0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnNjcmlwdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlU2VydmljZS5vbkNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1vZGU6IE1vZGVDaGFuZ2VzKSA9PiB7XG4gICAgICAgIHRoaXMubW9kZUNoYW5nZWQobW9kZSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLm9uQ2VudGVyQ2hhbmdlXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCksIHNhbXBsZShpbnRlcnZhbCg1MDApKSlcbiAgICAgICAgLnN1YnNjcmliZSgoY2VudGVyOiBQb2ludCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudENhbnZhc0dyb3VwKGNlbnRlcik7XG4gICAgICAgICAgaWYgKGNlbnRlciAmJiBjZW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub3NkSXNSZWFkeS5uZXh0KHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbnZhc1NlcnZpY2Uub25DYW52YXNHcm91cEluZGV4Q2hhbmdlXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoY2FudmFzR3JvdXBJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHRoaXMuc3dpcGVEcmFnRW5kQ291bnRlci5yZXNldCgpO1xuICAgICAgICBpZiAoY2FudmFzR3JvdXBJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmNhbnZhc0dyb3VwTWFzay5jaGFuZ2VDYW52YXNHcm91cChcbiAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5nZXRDYW52YXNHcm91cFJlY3QoY2FudmFzR3JvdXBJbmRleClcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICh0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRSkge1xuICAgICAgICAgICAgdGhpcy56b29tU3RyYXRlZ3kuZ29Ub0hvbWVab29tKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMub25Pc2RSZWFkeUNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbENhbnZhc0dyb3VwTG9hZGVkKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Q2VudGVyLm5leHQodGhpcy52aWV3ZXIudmlld3BvcnQuZ2V0Q2VudGVyKHRydWUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnZpZXdlckxheW91dFNlcnZpY2Uub25DaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZTogVmlld2VyTGF5b3V0KSA9PiB7XG4gICAgICAgIHRoaXMubGF5b3V0UGFnZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uub25TZWxlY3RlZFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGhpdDogSGl0KSA9PiB7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodEN1cnJlbnRIaXQoaGl0KTtcbiAgICAgICAgICB0aGlzLmdvVG9DYW52YXMoaGl0LmluZGV4LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsYXlvdXRQYWdlcygpIHtcbiAgICBpZiAodGhpcy5vc2RJc1JlYWR5LmdldFZhbHVlKCkpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDYW52YXNJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzSW5kZXg7XG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICB0aGlzLnNldFVwVmlld2VyKHRoaXMubWFuaWZlc3QsIHRoaXMuY29uZmlnKTtcbiAgICAgIHRoaXMuZ29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kuZ29Ub0NhbnZhc0dyb3VwKHtcbiAgICAgICAgY2FudmFzR3JvdXBJbmRleDogdGhpcy5jYW52YXNTZXJ2aWNlLmZpbmRDYW52YXNHcm91cEJ5Q2FudmFzSW5kZXgoXG4gICAgICAgICAgY3VycmVudENhbnZhc0luZGV4XG4gICAgICAgICksXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlY3JlYXRlIGhpZ2hsaWdodHMgaWYgdGhlcmUgaXMgYW4gYWN0aXZlIHNlYXJjaCBnb2luZyBvblxuICAgICAgaWYgKHRoaXMuY3VycmVudFNlYXJjaCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCh0aGlzLmN1cnJlbnRTZWFyY2gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFRvV2luZG93KCkge1xuICAgICg8YW55PndpbmRvdykub3BlblNlYWRyYWdvblZpZXdlciA9IHRoaXMudmlld2VyO1xuICB9XG5cbiAgc2V0dXBPdmVybGF5cygpOiB2b2lkIHtcbiAgICB0aGlzLnN2Z092ZXJsYXkgPSB0aGlzLnZpZXdlci5zdmdPdmVybGF5KCk7XG4gICAgdGhpcy5zdmdOb2RlID0gZDMuc2VsZWN0KHRoaXMuc3ZnT3ZlcmxheS5ub2RlKCkpO1xuICB9XG5cbiAgZGlzYWJsZUtleURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMudmlld2VyLmlubmVyVHJhY2tlci5rZXlEb3duSGFuZGxlciA9IG51bGw7XG4gIH1cblxuICByZXNldEtleURvd25IYW5kbGVyKCkge1xuICAgIHRoaXMudmlld2VyLmlubmVyVHJhY2tlci5rZXlEb3duSGFuZGxlciA9IHRoaXMuZGVmYXVsdEtleURvd25IYW5kbGVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBsYXlvdXRTd2l0Y2ggdHJ1ZSBpZiBzd2l0Y2hpbmcgYmV0d2VlbiBsYXlvdXRzXG4gICAqIHRvIGtlZXAgY3VycmVudCBzZWFyY2gtc3RhdGUgYW5kIHJvdGF0aW9uXG4gICAqL1xuICBkZXN0cm95KGxheW91dFN3aXRjaD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9zZElzUmVhZHkubmV4dChmYWxzZSk7XG4gICAgdGhpcy5jdXJyZW50Q2VudGVyLm5leHQobnVsbCk7XG4gICAgaWYgKHRoaXMudmlld2VyICE9IG51bGwgJiYgdGhpcy52aWV3ZXIuaXNPcGVuKCkpIHtcbiAgICAgIGlmICh0aGlzLnZpZXdlci5jb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcy52aWV3ZXIuY29udGFpbmVyLnBhcmVudE5vZGUpLnN0eWxlKCdvcGFjaXR5JywgJzAnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlld2VyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMub3ZlcmxheXMgPSBudWxsO1xuICAgIHRoaXMuY2FudmFzU2VydmljZS5yZXNldCgpO1xuICAgIGlmICh0aGlzLmNhbnZhc0dyb3VwTWFzaykge1xuICAgICAgdGhpcy5jYW52YXNHcm91cE1hc2suZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyBLZWVwIHNlYXJjaC1zdGF0ZSBhbmQgcm90YXRpb24gb25seSBpZiBsYXlvdXQtc3dpdGNoXG4gICAgaWYgKCFsYXlvdXRTd2l0Y2gpIHtcbiAgICAgIHRoaXMuY3VycmVudFNlYXJjaCA9IG51bGw7XG4gICAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICB9XG4gIH1cblxuICBhZGRFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja1NlcnZpY2UucmVzZXQoKTtcbiAgICB0aGlzLmNsaWNrU2VydmljZS5hZGRTaW5nbGVDbGlja0hhbmRsZXIodGhpcy5zaW5nbGVDbGlja0hhbmRsZXIpO1xuICAgIHRoaXMuY2xpY2tTZXJ2aWNlLmFkZERvdWJsZUNsaWNrSGFuZGxlcih0aGlzLmRibENsaWNrSGFuZGxlcik7XG4gICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignYW5pbWF0aW9uLWZpbmlzaCcsICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudENlbnRlci5uZXh0KHRoaXMudmlld2VyLnZpZXdwb3J0LmdldENlbnRlcih0cnVlKSk7XG4gICAgfSk7XG4gICAgdGhpcy52aWV3ZXIuYWRkSGFuZGxlcignY2FudmFzLWNsaWNrJywgdGhpcy5jbGlja1NlcnZpY2UuY2xpY2spO1xuICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoXG4gICAgICAnY2FudmFzLWRvdWJsZS1jbGljaycsXG4gICAgICAoZTogYW55KSA9PiAoZS5wcmV2ZW50RGVmYXVsdEFjdGlvbiA9IHRydWUpXG4gICAgKTtcbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdjYW52YXMtcHJlc3MnLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnBpbmNoU3RhdHVzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiA9IGUucG9zaXRpb247XG4gICAgICB0aGlzLmlzQ2FudmFzUHJlc3NlZC5uZXh0KHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ2NhbnZhcy1yZWxlYXNlJywgKCkgPT5cbiAgICAgIHRoaXMuaXNDYW52YXNQcmVzc2VkLm5leHQoZmFsc2UpXG4gICAgKTtcbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdjYW52YXMtc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdjYW52YXMtcGluY2gnLCB0aGlzLnBpbmNoSGFuZGxlcik7XG5cbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdjYW52YXMtZHJhZycsIChlOiBhbnkpID0+IHRoaXMuZHJhZ0hhbmRsZXIoZSkpO1xuICAgIHRoaXMudmlld2VyLmFkZEhhbmRsZXIoJ2NhbnZhcy1kcmFnLWVuZCcsIChlOiBhbnkpID0+XG4gICAgICB0aGlzLnN3aXBlVG9DYW52YXNHcm91cChlKVxuICAgICk7XG5cbiAgICB0aGlzLnZpZXdlci5hZGRIYW5kbGVyKCdhbmltYXRpb24nLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRDZW50ZXIubmV4dCh0aGlzLnZpZXdlci52aWV3cG9ydC5nZXRDZW50ZXIodHJ1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgem9vbUluKHpvb21GYWN0b3I/OiBudW1iZXIsIHBvc2l0aW9uPzogUG9pbnQpOiB2b2lkIHtcbiAgICB0aGlzLnpvb21TdHJhdGVneS56b29tSW4oem9vbUZhY3RvciwgcG9zaXRpb24pO1xuICB9XG5cbiAgem9vbU91dCh6b29tRmFjdG9yPzogbnVtYmVyLCBwb3NpdGlvbj86IFBvaW50KTogdm9pZCB7XG4gICAgdGhpcy56b29tU3RyYXRlZ3kuem9vbU91dCh6b29tRmFjdG9yLCBwb3NpdGlvbik7XG4gIH1cblxuICByb3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5yb3RhdGlvbiA9ICh0aGlzLnJvdGF0aW9uICsgOTApICUgMzYwO1xuICAgIHRoaXMubGF5b3V0UGFnZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmb3IgbW9kZS1jaGFuZ2VcbiAgICogQHBhcmFtIG1vZGUgVmlld2VyTW9kZVxuICAgKi9cbiAgbW9kZUNoYW5nZWQobW9kZTogTW9kZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAobW9kZS5jdXJyZW50VmFsdWUgPT09IFZpZXdlck1vZGUuREFTSEJPQVJEKSB7XG4gICAgICB0aGlzLnZpZXdlci5wYW5WZXJ0aWNhbCA9IGZhbHNlO1xuICAgICAgdGhpcy50b2dnbGVUb0Rhc2hib2FyZCgpO1xuICAgICAgdGhpcy5kaXNhYmxlS2V5RG93bkhhbmRsZXIoKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUuY3VycmVudFZhbHVlID09PSBWaWV3ZXJNb2RlLlBBR0UpIHtcbiAgICAgIHRoaXMudmlld2VyLnBhblZlcnRpY2FsID0gZmFsc2U7XG4gICAgICB0aGlzLnRvZ2dsZVRvUGFnZSgpO1xuICAgICAgdGhpcy5kaXNhYmxlS2V5RG93bkhhbmRsZXIoKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUuY3VycmVudFZhbHVlID09PSBWaWV3ZXJNb2RlLlBBR0VfWk9PTUVEKSB7XG4gICAgICB0aGlzLnZpZXdlci5wYW5WZXJ0aWNhbCA9IHRydWU7XG4gICAgICB0aGlzLnJlc2V0S2V5RG93bkhhbmRsZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3dpdGNoZXMgdG8gREFTSEJPQVJELW1vZGUsIHJlcG9zaXRpb25zIGNhbnZhcyBncm91cCBhbmQgcmVtb3ZlcyBtYXgtd2lkdGggb24gdmlld2VyXG4gICAqL1xuICBwcml2YXRlIHRvZ2dsZVRvRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jYW52YXNTZXJ2aWNlLmlzQ3VycmVudENhbnZhc0dyb3VwVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdvVG9DYW52YXNHcm91cFN0cmF0ZWd5LmdvVG9DYW52YXNHcm91cCh7XG4gICAgICBjYW52YXNHcm91cEluZGV4OiB0aGlzLmNhbnZhc1NlcnZpY2UuY3VycmVudENhbnZhc0dyb3VwSW5kZXgsXG4gICAgICBpbW1lZGlhdGVseTogZmFsc2VcbiAgICB9KTtcblxuICAgIHRoaXMuY2FudmFzR3JvdXBNYXNrLmhpZGUoKTtcblxuICAgIHRoaXMuem9vbVN0cmF0ZWd5LnNldE1pblpvb20oVmlld2VyTW9kZS5EQVNIQk9BUkQpO1xuICAgIHRoaXMuem9vbVN0cmF0ZWd5LmdvVG9Ib21lWm9vbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN3aXRjaGVzIHRvIFBBR0UtbW9kZSwgY2VudGVycyBjdXJyZW50IGNhbnZhcyBncm91cCBhbmQgcmVwb3NpdGlvbnMgb3RoZXIgY2FudmFzIGdyb3Vwc1xuICAgKi9cbiAgcHJpdmF0ZSB0b2dnbGVUb1BhZ2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNhbnZhc1NlcnZpY2UuaXNDdXJyZW50Q2FudmFzR3JvdXBWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ29Ub0NhbnZhc0dyb3VwU3RyYXRlZ3kuZ29Ub0NhbnZhc0dyb3VwKHtcbiAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IHRoaXMuY2FudmFzU2VydmljZS5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCxcbiAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jYW52YXNHcm91cE1hc2suc2hvdygpO1xuXG4gICAgdGhpcy56b29tU3RyYXRlZ3kuc2V0TWluWm9vbShWaWV3ZXJNb2RlLlBBR0UpO1xuICAgIHRoaXMuem9vbVN0cmF0ZWd5LmdvVG9Ib21lWm9vbSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbC1oYW5kbGVyXG4gICAqL1xuICBzY3JvbGxIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCB6b29tRmFjdG9yID0gTWF0aC5wb3coVmlld2VyT3B0aW9ucy56b29tLnpvb21GYWN0b3IsIGV2ZW50LnNjcm9sbCk7XG4gICAgLy8gU2Nyb2xsaW5nIHVwXG4gICAgaWYgKGV2ZW50LnNjcm9sbCA+IDApIHtcbiAgICAgIHRoaXMuem9vbUluR2VzdHVyZShldmVudC5wb3NpdGlvbiwgem9vbUZhY3Rvcik7XG4gICAgICAvLyBTY3JvbGxpbmcgZG93blxuICAgIH0gZWxzZSBpZiAoZXZlbnQuc2Nyb2xsIDwgMCkge1xuICAgICAgdGhpcy56b29tT3V0R2VzdHVyZShldmVudC5wb3NpdGlvbiwgem9vbUZhY3Rvcik7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBQaW5jaC1oYW5kbGVyXG4gICAqL1xuICBwaW5jaEhhbmRsZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMucGluY2hTdGF0dXMuYWN0aXZlID0gdHJ1ZTtcbiAgICBjb25zdCB6b29tRmFjdG9yID0gZXZlbnQuZGlzdGFuY2UgLyBldmVudC5sYXN0RGlzdGFuY2U7XG4gICAgLy8gUGluY2ggT3V0XG4gICAgaWYgKFxuICAgICAgZXZlbnQuZGlzdGFuY2UgPlxuICAgICAgZXZlbnQubGFzdERpc3RhbmNlICsgVmlld2VyT3B0aW9ucy56b29tLnBpbmNoWm9vbVRocmVzaG9sZFxuICAgICkge1xuICAgICAgdGhpcy56b29tSW5QaW5jaEdlc3R1cmUoZXZlbnQsIHpvb21GYWN0b3IpO1xuICAgICAgLy8gUGluY2ggSW5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZXZlbnQuZGlzdGFuY2UgKyBWaWV3ZXJPcHRpb25zLnpvb20ucGluY2hab29tVGhyZXNob2xkIDxcbiAgICAgIGV2ZW50Lmxhc3REaXN0YW5jZVxuICAgICkge1xuICAgICAgdGhpcy56b29tT3V0UGluY2hHZXN0dXJlKGV2ZW50LCB6b29tRmFjdG9yKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwb2ludCB0byB6b29tIHRvLiBJZiBub3Qgc2V0LCB0aGUgdmlld2VyIHdpbGwgem9vbSB0byBjZW50ZXJcbiAgICovXG4gIHpvb21Jbkdlc3R1cmUocG9zaXRpb246IFBvaW50LCB6b29tRmFjdG9yPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5EQVNIQk9BUkQpIHtcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9IFZpZXdlck1vZGUuUEFHRTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuem9vbVN0cmF0ZWd5Lnpvb21Jbih6b29tRmFjdG9yLCBwb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnpvb21TdHJhdGVneS56b29tSW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB6b29tT3V0R2VzdHVyZShwb3NpdGlvbjogUG9pbnQsIHpvb21GYWN0b3I/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0VfWk9PTUVEKSB7XG4gICAgICB0aGlzLnpvb21TdHJhdGVneS56b29tT3V0KHpvb21GYWN0b3IsIHBvc2l0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFKSB7XG4gICAgICB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPSBWaWV3ZXJNb2RlLkRBU0hCT0FSRDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB6b29tIGluIHBpbmNoIGdlc3R1cmUgKHBpbmNoIG91dClcbiAgICpcbiAgICogVG9nZ2xlIHRvIHBhZ2UgbW9kZSBhbmQgWm9vbSBpblxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgZnJvbSBwaW5jaCBnZXN0dXJlXG4gICAqL1xuICB6b29tSW5QaW5jaEdlc3R1cmUoZXZlbnQ6IGFueSwgem9vbUZhY3RvcjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5EQVNIQk9BUkQpIHtcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9IFZpZXdlck1vZGUuUEFHRTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy56b29tSW4oem9vbUZhY3RvciwgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbiB8fCBldmVudC5jZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHpvb20gb3V0IHBpbmNoIGdlc3R1cmUgKHBpbmNoIGluKVxuICAgKlxuICAgKiBab29tIG91dCBhbmQgdG9nZ2xlIHRvIGRhc2hib2FyZCB3aGVuIGFsbCB6b29tZWQgb3V0LlxuICAgKiBTdG9wIGJldHdlZW4gem9vbWluZyBvdXQgYW5kIHRvZ2dsaW5nIHRvIGRhc2hib2FyZC5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IGZyb20gcGluY2ggZ2VzdHVyZVxuICAgKi9cbiAgem9vbU91dFBpbmNoR2VzdHVyZShldmVudDogYW55LCB6b29tRmFjdG9yOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBnZXN0dXJlSWQgPSBldmVudC5nZXN0dXJlUG9pbnRzWzBdLmlkO1xuICAgIGlmICh0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRUQpIHtcbiAgICAgIHRoaXMucGluY2hTdGF0dXMuc2hvdWxkU3RvcCA9IHRydWU7XG4gICAgICB0aGlzLnpvb21TdHJhdGVneS56b29tT3V0KHpvb21GYWN0b3IsIGV2ZW50LmNlbnRlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRSkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy5waW5jaFN0YXR1cy5zaG91bGRTdG9wIHx8XG4gICAgICAgIGdlc3R1cmVJZCA9PT0gdGhpcy5waW5jaFN0YXR1cy5wcmV2aW91c0dlc3R1cmVJZCArIDJcbiAgICAgICkge1xuICAgICAgICB0aGlzLnBpbmNoU3RhdHVzLnNob3VsZFN0b3AgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RlU2VydmljZS50b2dnbGVNb2RlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBpbmNoU3RhdHVzLnByZXZpb3VzR2VzdHVyZUlkID0gZ2VzdHVyZUlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5nbGUtY2xpY2staGFuZGxlclxuICAgKiBTaW5nbGUtY2xpY2sgdG9nZ2xlcyBiZXR3ZWVuIHBhZ2UvZGFzaGJvYXJkLW1vZGUgaWYgYSBwYWdlIGlzIGhpdFxuICAgKi9cbiAgc2luZ2xlQ2xpY2tIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB0aWxlSW5kZXggPSB0aGlzLmdldE92ZXJsYXlJbmRleEZyb21DbGlja0V2ZW50KHRhcmdldCk7XG4gICAgY29uc3QgcmVxdWVzdGVkQ2FudmFzR3JvdXBJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5maW5kQ2FudmFzR3JvdXBCeUNhbnZhc0luZGV4KFxuICAgICAgdGlsZUluZGV4XG4gICAgKTtcbiAgICBpZiAocmVxdWVzdGVkQ2FudmFzR3JvdXBJbmRleCkge1xuICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gcmVxdWVzdGVkQ2FudmFzR3JvdXBJbmRleDtcbiAgICB9XG4gICAgdGhpcy5tb2RlU2VydmljZS50b2dnbGVNb2RlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERvdWJsZS1jbGljay1oYW5kbGVyXG4gICAqIERvdWJsZS1jbGljayBkYXNoYm9hcmQtbW9kZSBzaG91bGQgZ28gdG8gcGFnZS1tb2RlXG4gICAqIERvdWJsZS1jbGljayBwYWdlLW1vZGUgc2hvdWxkXG4gICAqICAgIGEpIFpvb20gaW4gaWYgcGFnZSBpcyBmaXR0ZWQgdmVydGljYWxseSwgb3JcbiAgICogICAgYikgRml0IHZlcnRpY2FsbHkgaWYgcGFnZSBpcyBhbHJlYWR5IHpvb21lZCBpblxuICAgKi9cbiAgZGJsQ2xpY2tIYW5kbGVyID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldDtcbiAgICAvLyBQYWdlIGlzIGZpdHRlZCB2ZXJ0aWNhbGx5LCBzbyBkYmwtY2xpY2sgem9vbXMgaW5cbiAgICBpZiAodGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0UpIHtcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSA9IFZpZXdlck1vZGUuUEFHRV9aT09NRUQ7XG4gICAgICB0aGlzLnpvb21TdHJhdGVneS56b29tSW4oXG4gICAgICAgIFZpZXdlck9wdGlvbnMuem9vbS5kYmxDbGlja1pvb21GYWN0b3IsXG4gICAgICAgIGV2ZW50LnBvc2l0aW9uXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPSBWaWV3ZXJNb2RlLlBBR0U7XG4gICAgICBjb25zdCBjYW52YXNJbmRleDogbnVtYmVyID0gdGhpcy5nZXRPdmVybGF5SW5kZXhGcm9tQ2xpY2tFdmVudCh0YXJnZXQpO1xuICAgICAgY29uc3QgcmVxdWVzdGVkQ2FudmFzR3JvdXBJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5maW5kQ2FudmFzR3JvdXBCeUNhbnZhc0luZGV4KFxuICAgICAgICBjYW52YXNJbmRleFxuICAgICAgKTtcbiAgICAgIGlmIChyZXF1ZXN0ZWRDYW52YXNHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmN1cnJlbnRDYW52YXNHcm91cEluZGV4ID0gcmVxdWVzdGVkQ2FudmFzR3JvdXBJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBoaXQgZWxlbWVudCBpcyBhIDxyZWN0Pi1lbGVtZW50XG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICovXG4gIGlzQ2FudmFzR3JvdXBIaXQodGFyZ2V0OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTVkdSZWN0RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aWxlc291cmNlcyBhbmQgYWRkcyB0aGVtIHRvIHZpZXdlclxuICAgKiBDcmVhdGVzIHN2ZyBjbGlja2FibGUgb3ZlcmxheXMgZm9yIGVhY2ggdGlsZVxuICAgKi9cbiAgY3JlYXRlT3ZlcmxheXMoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5cyA9IFtdO1xuICAgIGNvbnN0IGNhbnZhc1JlY3RzOiBSZWN0W10gPSBbXTtcbiAgICBjb25zdCBjYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uU3RyYXRlZ3kgPSBDYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uRmFjdG9yeS5jcmVhdGUoXG4gICAgICB0aGlzLnZpZXdlckxheW91dFNlcnZpY2UubGF5b3V0LFxuICAgICAgdGhpcy5pc01hbmlmZXN0UGFnZWRcbiAgICApO1xuXG4gICAgY29uc3QgaXNUd29QYWdlVmlldzogYm9vbGVhbiA9XG4gICAgICB0aGlzLnZpZXdlckxheW91dFNlcnZpY2UubGF5b3V0ID09PSBWaWV3ZXJMYXlvdXQuVFdPX1BBR0U7XG4gICAgbGV0IGdyb3VwOiBhbnkgPSB0aGlzLnN2Z05vZGUuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncGFnZS1ncm91cCcpO1xuXG4gICAgdGhpcy50aWxlU291cmNlcy5mb3JFYWNoKCh0aWxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGNhbGN1bGF0ZUNhbnZhc0dyb3VwUG9zaXRpb25TdHJhdGVneS5jYWxjdWxhdGVDYW52YXNHcm91cFBvc2l0aW9uKFxuICAgICAgICB7XG4gICAgICAgICAgY2FudmFzR3JvdXBJbmRleDogaSxcbiAgICAgICAgICBjYW52YXNTb3VyY2U6IHRpbGUsXG4gICAgICAgICAgcHJldmlvdXNDYW52YXNHcm91cFBvc2l0aW9uOiBjYW52YXNSZWN0c1tpIC0gMV0sXG4gICAgICAgICAgdmlld2luZ0RpcmVjdGlvbjogdGhpcy5tYW5pZmVzdC52aWV3aW5nRGlyZWN0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucm90YXRpb25cbiAgICAgICk7XG5cbiAgICAgIGNhbnZhc1JlY3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICBjb25zdCB0aWxlU291cmNlU3RyYXRlZ3kgPSBUaWxlU291cmNlU3RyYXRlZ3lGYWN0b3J5LmNyZWF0ZSh0aWxlKTtcbiAgICAgIGNvbnN0IHRpbGVTb3VyY2UgPSB0aWxlU291cmNlU3RyYXRlZ3kuZ2V0VGlsZVNvdXJjZSh0aWxlKTtcblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgY29uc3Qgcm90YXRlZCA9IHRoaXMucm90YXRpb24gPT09IDkwIHx8IHRoaXMucm90YXRpb24gPT09IDI3MDtcblxuICAgICAgICBsZXQgYm91bmRzO1xuXG4gICAgICAgIC8qIEJlY2F1c2UgaW1hZ2Ugc2NhbGluZyBpcyBwZXJmb3JtZWQgYmVmb3JlIHJvdGF0aW9uLFxuICAgICAgICAgKiB3ZSBtdXN0IGludmVydCB3aWR0aCAmIGhlaWdodCBhbmQgdHJhbnNsYXRlIHBvc2l0aW9uIHNvIHRoYXQgdGlsZSByb3RhdGlvbiBlbmRzIHVwIGNvcnJlY3RcbiAgICAgICAgICovXG4gICAgICAgIGlmIChyb3RhdGVkKSB7XG4gICAgICAgICAgYm91bmRzID0gbmV3IE9wZW5TZWFkcmFnb24uUmVjdChcbiAgICAgICAgICAgIHBvc2l0aW9uLnggKyAocG9zaXRpb24ud2lkdGggLSBwb3NpdGlvbi5oZWlnaHQpIC8gMixcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgLSAocG9zaXRpb24ud2lkdGggLSBwb3NpdGlvbi5oZWlnaHQpIC8gMixcbiAgICAgICAgICAgIHBvc2l0aW9uLmhlaWdodCxcbiAgICAgICAgICAgIHBvc2l0aW9uLndpZHRoXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib3VuZHMgPSBuZXcgT3BlblNlYWRyYWdvbi5SZWN0KFxuICAgICAgICAgICAgcG9zaXRpb24ueCxcbiAgICAgICAgICAgIHBvc2l0aW9uLnksXG4gICAgICAgICAgICBwb3NpdGlvbi53aWR0aCxcbiAgICAgICAgICAgIHBvc2l0aW9uLmhlaWdodFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdlci5hZGRUaWxlZEltYWdlKHtcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICB0aWxlU291cmNlOiB0aWxlU291cmNlLFxuICAgICAgICAgIGZpdEJvdW5kczogYm91bmRzLFxuICAgICAgICAgIGRlZ3JlZXM6IHRoaXMucm90YXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzVHdvUGFnZVZpZXcgJiYgaSAlIDIgIT09IDApIHtcbiAgICAgICAgZ3JvdXAgPSB0aGlzLnN2Z05vZGUuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAncGFnZS1ncm91cCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50T3ZlcmxheSA9IGdyb3VwXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHBvc2l0aW9uLngpXG4gICAgICAgIC5hdHRyKCd5JywgcG9zaXRpb24ueSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgcG9zaXRpb24ud2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBwb3NpdGlvbi5oZWlnaHQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd0aWxlJyk7XG5cbiAgICAgIC8vIE1ha2UgY3VzdG9tIGJvcmRlcnMgaWYgY3VycmVudCBsYXlvdXQgaXMgdHdvLXBhZ2VkXG4gICAgICBpZiAoaXNUd29QYWdlVmlldykge1xuICAgICAgICBpZiAoaSAlIDIgPT09IDAgJiYgaSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IG5vTGVmdFN0cm9rZVN0eWxlID1cbiAgICAgICAgICAgIE51bWJlcihwb3NpdGlvbi53aWR0aCAqIDIgKyBwb3NpdGlvbi5oZWlnaHQpICtcbiAgICAgICAgICAgICcsICcgK1xuICAgICAgICAgICAgcG9zaXRpb24ud2lkdGggKiAyO1xuICAgICAgICAgIGN1cnJlbnRPdmVybGF5LnN0eWxlKCdzdHJva2UtZGFzaGFycmF5Jywgbm9MZWZ0U3Ryb2tlU3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgJSAyICE9PSAwICYmIGkgIT09IDApIHtcbiAgICAgICAgICBjb25zdCBub1JpZ2h0U3Ryb2tlU3R5bGUgPVxuICAgICAgICAgICAgcG9zaXRpb24ud2lkdGggK1xuICAgICAgICAgICAgJywgJyArXG4gICAgICAgICAgICBwb3NpdGlvbi5oZWlnaHQgK1xuICAgICAgICAgICAgJywgJyArXG4gICAgICAgICAgICBOdW1iZXIocG9zaXRpb24ud2lkdGggKiAyICsgcG9zaXRpb24uaGVpZ2h0KTtcbiAgICAgICAgICBjdXJyZW50T3ZlcmxheS5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIG5vUmlnaHRTdHJva2VTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VycmVudE92ZXJsYXlOb2RlOiBTVkdSZWN0RWxlbWVudCA9IGN1cnJlbnRPdmVybGF5Lm5vZGUoKTtcbiAgICAgIHRoaXMub3ZlcmxheXNbaV0gPSBjdXJyZW50T3ZlcmxheU5vZGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsYXlvdXQgPVxuICAgICAgdGhpcy52aWV3ZXJMYXlvdXRTZXJ2aWNlLmxheW91dCA9PT0gVmlld2VyTGF5b3V0Lk9ORV9QQUdFIHx8XG4gICAgICAhdGhpcy5pc01hbmlmZXN0UGFnZWRcbiAgICAgICAgPyBWaWV3ZXJMYXlvdXQuT05FX1BBR0VcbiAgICAgICAgOiBWaWV3ZXJMYXlvdXQuVFdPX1BBR0U7XG4gICAgdGhpcy5jYW52YXNTZXJ2aWNlLmFkZEFsbChjYW52YXNSZWN0cywgbGF5b3V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHZpZXdlciBzaXplIGFuZCBvcGFjaXR5IG9uY2UgdGhlIGZpcnN0IGNhbnZhcyBncm91cCBoYXMgZnVsbHkgbG9hZGVkXG4gICAqL1xuICBwcml2YXRlIGluaXRpYWxDYW52YXNHcm91cExvYWRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmhvbWUoKTtcbiAgICB0aGlzLmNhbnZhc0dyb3VwTWFzay5pbml0aWFsaXNlKFxuICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmdldEN1cnJlbnRDYW52YXNHcm91cFJlY3QoKSxcbiAgICAgIHRoaXMubW9kZVNlcnZpY2UubW9kZSAhPT0gVmlld2VyTW9kZS5EQVNIQk9BUkRcbiAgICApO1xuICAgIGQzLnNlbGVjdCh0aGlzLnZpZXdlci5jb250YWluZXIucGFyZW50Tm9kZSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihWaWV3ZXJPcHRpb25zLnRyYW5zaXRpb25zLk9TREFuaW1hdGlvblRpbWUpXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCAnMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb3ZlcmxheS1pbmRleCBmb3IgY2xpY2stZXZlbnQgaWYgaGl0XG4gICAqIEBwYXJhbSB0YXJnZXQgaGl0IDxyZWN0PlxuICAgKi9cbiAgZ2V0T3ZlcmxheUluZGV4RnJvbUNsaWNrRXZlbnQodGFyZ2V0OiBhbnkpIHtcbiAgICBpZiAodGhpcy5pc0NhbnZhc0dyb3VwSGl0KHRhcmdldCkpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3RlZENhbnZhc0dyb3VwOiBudW1iZXIgPSB0aGlzLm92ZXJsYXlzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgIGlmIChyZXF1ZXN0ZWRDYW52YXNHcm91cCA+PSAwKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0ZWRDYW52YXNHcm91cDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25zKCk6IE9wdGlvbnMge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgIG9wdGlvbnMuYWpheFdpdGhDcmVkZW50aWFscyA9IHRoaXMuY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICBvcHRpb25zLmxvYWRUaWxlc1dpdGhBamF4ID0gdGhpcy5jb25maWcubG9hZFRpbGVzV2l0aEFqYXg7XG4gICAgb3B0aW9ucy5jcm9zc09yaWdpblBvbGljeSA9IHRoaXMuY29uZmlnLmNyb3NzT3JpZ2luUG9saWN5O1xuICAgIG9wdGlvbnMuYWpheEhlYWRlcnMgPSB0aGlzLmNvbmZpZy5hamF4SGVhZGVycztcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudENhbnZhc0dyb3VwKGNlbnRlcjogUG9pbnQpIHtcbiAgICBpZiAoY2VudGVyKSB7XG4gICAgICBjb25zdCBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IHRoaXMuY2FudmFzU2VydmljZS5maW5kQ2xvc2VzdENhbnZhc0dyb3VwSW5kZXgoXG4gICAgICAgIGNlbnRlclxuICAgICAgKTtcbiAgICAgIHRoaXMuY3VycmVudENhbnZhc0luZGV4Lm5leHQoY3VycmVudENhbnZhc0dyb3VwSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZHJhZ0hhbmRsZXIgPSAoZTogYW55KSA9PiB7XG4gICAgdGhpcy52aWV3ZXIucGFuSG9yaXpvbnRhbCA9IHRydWU7XG4gICAgaWYgKHRoaXMubW9kZVNlcnZpY2UubW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCkge1xuICAgICAgY29uc3QgZHJhZ0VuZFBvc2lzaW9uOiBQb2ludCA9IGUucG9zaXRpb247XG4gICAgICBjb25zdCBjYW52YXNHcm91cFJlY3Q6IFJlY3QgPSB0aGlzLmNhbnZhc1NlcnZpY2UuZ2V0Q3VycmVudENhbnZhc0dyb3VwUmVjdCgpO1xuICAgICAgY29uc3QgdnBCb3VuZHM6IFJlY3QgPSB0aGlzLmdldFZpZXdwb3J0Qm91bmRzKCk7XG4gICAgICBjb25zdCBwYW5uZWRQYXN0Q2FudmFzR3JvdXA6IFNpZGUgPSBTd2lwZVV0aWxzLmdldFNpZGVJZlBhbm5pbmdQYXN0RW5kT2ZDYW52YXNHcm91cChcbiAgICAgICAgY2FudmFzR3JvdXBSZWN0LFxuICAgICAgICB2cEJvdW5kc1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbjogbnVtYmVyID0gZS5kaXJlY3Rpb247XG4gICAgICBpZiAoXG4gICAgICAgIChwYW5uZWRQYXN0Q2FudmFzR3JvdXAgPT09IFNpZGUuTEVGVCAmJlxuICAgICAgICAgIFN3aXBlVXRpbHMuaXNEaXJlY3Rpb25JblJpZ2h0U2VtaWNpcmNsZShkaXJlY3Rpb24pKSB8fFxuICAgICAgICAocGFubmVkUGFzdENhbnZhc0dyb3VwID09PSBTaWRlLlJJR0hUICYmXG4gICAgICAgICAgU3dpcGVVdGlscy5pc0RpcmVjdGlvbkluTGVmdFNlbWljaXJjbGUoZGlyZWN0aW9uKSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLnZpZXdlci5wYW5Ib3Jpem9udGFsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc3dpcGVUb0NhbnZhc0dyb3VwKGU6IGFueSkge1xuICAgIC8vIERvbid0IHN3aXBlIG9uIHBpbmNoIGFjdGlvbnNcbiAgICBpZiAodGhpcy5waW5jaFN0YXR1cy5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVlZDogbnVtYmVyID0gZS5zcGVlZDtcbiAgICBjb25zdCBkcmFnRW5kUG9zaXNpb24gPSBlLnBvc2l0aW9uO1xuXG4gICAgY29uc3QgaXNDYW52YXNHcm91cFpvb21lZCA9XG4gICAgICB0aGlzLm1vZGVTZXJ2aWNlLm1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRUQ7XG5cbiAgICBjb25zdCBjYW52YXNHcm91cFJlY3Q6IFJlY3QgPSB0aGlzLmNhbnZhc1NlcnZpY2UuZ2V0Q3VycmVudENhbnZhc0dyb3VwUmVjdCgpO1xuICAgIGNvbnN0IHZpZXdwb3J0Qm91bmRzOiBSZWN0ID0gdGhpcy5nZXRWaWV3cG9ydEJvdW5kcygpO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBTd2lwZVV0aWxzLmdldFN3aXBlRGlyZWN0aW9uKFxuICAgICAgdGhpcy5kcmFnU3RhcnRQb3NpdGlvbixcbiAgICAgIGRyYWdFbmRQb3Npc2lvbixcbiAgICAgIGlzQ2FudmFzR3JvdXBab29tZWRcbiAgICApO1xuXG4gICAgY29uc3QgY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IG51bWJlciA9IHRoaXMuY2FudmFzU2VydmljZVxuICAgICAgLmN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICAgIGNvbnN0IGNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5ID0gQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwRmFjdG9yeS5jcmVhdGUoXG4gICAgICB0aGlzLm1vZGVTZXJ2aWNlLm1vZGVcbiAgICApO1xuXG4gICAgbGV0IHBhbm5lZFBhc3RTaWRlOiBTaWRlLCBjYW52YXNHcm91cEVuZEhpdENvdW50UmVhY2hlZDogYm9vbGVhbjtcbiAgICBpZiAodGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0VfWk9PTUVEKSB7XG4gICAgICBwYW5uZWRQYXN0U2lkZSA9IFN3aXBlVXRpbHMuZ2V0U2lkZUlmUGFubmluZ1Bhc3RFbmRPZkNhbnZhc0dyb3VwKFxuICAgICAgICBjYW52YXNHcm91cFJlY3QsXG4gICAgICAgIHZpZXdwb3J0Qm91bmRzXG4gICAgICApO1xuICAgICAgdGhpcy5zd2lwZURyYWdFbmRDb3VudGVyLmFkZEhpdChwYW5uZWRQYXN0U2lkZSwgZGlyZWN0aW9uKTtcbiAgICAgIGNhbnZhc0dyb3VwRW5kSGl0Q291bnRSZWFjaGVkID0gdGhpcy5zd2lwZURyYWdFbmRDb3VudGVyLmhpdENvdW50UmVhY2hlZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0NhbnZhc0dyb3VwSW5kZXggPSBjYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneS5jYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXAoXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRDYW52YXNHcm91cENlbnRlcjogdGhpcy5jdXJyZW50Q2FudmFzSW5kZXguZ2V0VmFsdWUoKSxcbiAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IGN1cnJlbnRDYW52YXNHcm91cEluZGV4LFxuICAgICAgICBjYW52YXNHcm91cEVuZEhpdENvdW50UmVhY2hlZDogY2FudmFzR3JvdXBFbmRIaXRDb3VudFJlYWNoZWQsXG4gICAgICAgIHZpZXdpbmdEaXJlY3Rpb246IHRoaXMubWFuaWZlc3Qudmlld2luZ0RpcmVjdGlvblxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLkRBU0hCT0FSRCB8fFxuICAgICAgdGhpcy5tb2RlU2VydmljZS5tb2RlID09PSBWaWV3ZXJNb2RlLlBBR0UgfHxcbiAgICAgIChjYW52YXNHcm91cEVuZEhpdENvdW50UmVhY2hlZCAmJiBkaXJlY3Rpb24pXG4gICAgKSB7XG4gICAgICB0aGlzLmdvVG9DYW52YXNHcm91cFN0cmF0ZWd5LmdvVG9DYW52YXNHcm91cCh7XG4gICAgICAgIGNhbnZhc0dyb3VwSW5kZXg6IG5ld0NhbnZhc0dyb3VwSW5kZXgsXG4gICAgICAgIGltbWVkaWF0ZWx5OiBmYWxzZSxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Vmlld3BvcnRCb3VuZHMoKTogUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMudmlld2VyLnZpZXdwb3J0LmdldEJvdW5kcygpO1xuICB9XG59XG4iXX0=