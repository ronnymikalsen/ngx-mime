(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/ngx-mime/src/index.ts":
/*!************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/index.ts ***!
  \************************************************************/
/*! exports provided: MimeViewerIntl, MimeViewerIntlNoNb, MimeViewerIntlLt, MimeViewerConfig, MimeManifest, MimeViewerMode, MimeModule, MimeViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeViewerIntl", function() { return _lib_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_0__["MimeViewerIntl"]; });

/* harmony import */ var _lib_core_intl_viewer_intl_no_nb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core/intl/viewer-intl.no_nb */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.no_nb.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeViewerIntlNoNb", function() { return _lib_core_intl_viewer_intl_no_nb__WEBPACK_IMPORTED_MODULE_1__["MimeViewerIntlNoNb"]; });

/* harmony import */ var _lib_core_intl_viewer_intl_lt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/core/intl/viewer-intl.lt */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.lt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeViewerIntlLt", function() { return _lib_core_intl_viewer_intl_lt__WEBPACK_IMPORTED_MODULE_2__["MimeViewerIntlLt"]; });

/* harmony import */ var _lib_core_mime_viewer_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/core/mime-viewer-config */ "../../libs/ngx-mime/src/lib/core/mime-viewer-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeViewerConfig", function() { return _lib_core_mime_viewer_config__WEBPACK_IMPORTED_MODULE_3__["MimeViewerConfig"]; });

/* harmony import */ var _lib_core_models_manifest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/core/models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeManifest", function() { return _lib_core_models_manifest__WEBPACK_IMPORTED_MODULE_4__["Manifest"]; });

/* harmony import */ var _lib_core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/core/models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeViewerMode", function() { return _lib_core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_5__["ViewerMode"]; });

/* harmony import */ var _lib_ngx_mime_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ngx-mime.module */ "../../libs/ngx-mime/src/lib/ngx-mime.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeModule", function() { return _lib_ngx_mime_module__WEBPACK_IMPORTED_MODULE_6__["MimeModule"]; });

/* harmony import */ var _lib_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/viewer/viewer.component */ "../../libs/ngx-mime/src/lib/viewer/viewer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MimeViewerComponent", function() { return _lib_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_7__["ViewerComponent"]; });











/***/ }),

/***/ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog-resize.service.ts":
/*!***************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog-resize.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AttributionDialogResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionDialogResizeService", function() { return AttributionDialogResizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _core_models_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../core/models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");






class AttributionDialogResizeService {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.dimensions = new _core_models_dimensions__WEBPACK_IMPORTED_MODULE_3__["Dimensions"]();
    }
    set el(el) {
        this._el = el;
    }
    get el() {
        return this._el;
    }
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    markForCheck() {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        if (this.dimensions.bottom !== dimensions.bottom ||
            this.dimensions.height !== dimensions.height ||
            this.dimensions.left !== dimensions.left ||
            this.dimensions.right !== dimensions.right ||
            this.dimensions.top !== dimensions.top ||
            this.dimensions.width !== dimensions.width) {
            this.dimensions = dimensions;
            this.resizeSubject.next(Object.assign({}, this.dimensions));
        }
    }
}
AttributionDialogResizeService.ɵfac = function AttributionDialogResizeService_Factory(t) { return new (t || AttributionDialogResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"])); };
AttributionDialogResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttributionDialogResizeService, factory: AttributionDialogResizeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionDialogResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.component.ts":
/*!**********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AttributionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionDialogComponent", function() { return AttributionDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/access-keys-handler-service/access-keys.service */ "../../libs/ngx-mime/src/lib/core/access-keys-handler-service/access-keys.service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_style_service_style_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/style-service/style.service */ "../../libs/ngx-mime/src/lib/core/style-service/style.service.ts");
/* harmony import */ var _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attribution-dialog-resize.service */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog-resize.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");




















const _c0 = ["container"];
class AttributionDialogComponent {
    constructor(intl, renderer, el, changeDetectorRef, iiifManifestService, attributionDialogResizeService, styleService, accessKeysHandlerService) {
        this.intl = intl;
        this.renderer = renderer;
        this.el = el;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.attributionDialogResizeService = attributionDialogResizeService;
        this.styleService = styleService;
        this.accessKeysHandlerService = accessKeysHandlerService;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        attributionDialogResizeService.el = el;
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.styleService.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed)).subscribe(c => {
            const backgroundRgbaColor = this.styleService.convertToRgba(c, 0.3);
            this.renderer.setStyle(this.container.nativeElement, 'background-color', backgroundRgbaColor);
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    handleKeys(event) {
        this.accessKeysHandlerService.handleKeyEvents(event);
    }
    onResize(event) {
        this.attributionDialogResizeService.markForCheck();
    }
    ngAfterViewChecked() {
        this.attributionDialogResizeService.markForCheck();
    }
}
AttributionDialogComponent.ɵfac = function AttributionDialogComponent_Factory(t) { return new (t || AttributionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_5__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_7__["AttributionDialogResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_style_service_style_service__WEBPACK_IMPORTED_MODULE_6__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_3__["AccessKeysService"])); };
AttributionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttributionDialogComponent, selectors: [["ng-component"]], viewQuery: function AttributionDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostBindings: function AttributionDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AttributionDialogComponent_keyup_HostBindingHandler($event) { return ctx.handleKeys($event); })("resize", function AttributionDialogComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 5, consts: [["id", "attribution-container", 1, "attribution-container"], ["container", ""], [1, "attribution-toolbar"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", ""], ["mat-dialog-title", ""], ["mat-icon-button", "", 3, "aria-label", "matTooltip", "matDialogClose"], ["mat-dialog-content", "", 3, "innerHTML"]], template: function AttributionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.intl.attributionLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx.intl.attributonCloseAriaLabel)("matTooltip", ctx.intl.closeLabel)("matDialogClose", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.manifest == null ? null : ctx.manifest.attribution, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogContent"]], styles: [".attribution-toolbar[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: transparent;\n  min-height: 20px !important;\n  padding: 8px;\n}\n\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin: 0px;\n}\n\n  .attribution-panel {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n}\n\n  .attribution-panel > .mat-dialog-container {\n  background: transparent !important;\n  font-size: 11px;\n  padding: 0px;\n}\n\n  .attribution-toolbar > .mat-toolbar-layout > .mat-toolbar-row {\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9hdHRyaWJ1dGlvbi1kaWFsb2cvYXR0cmlidXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJsaWJzL25neC1taW1lL3NyYy9saWIvYXR0cmlidXRpb24tZGlhbG9nL2F0dHJpYnV0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdHRyaWJ1dGlvbi10b29sYmFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuOjpuZy1kZWVwIC5hdHRyaWJ1dGlvbi1wYW5lbCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAuYXR0cmlidXRpb24tcGFuZWwgPiAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuOjpuZy1kZWVwIC5hdHRyaWJ1dGlvbi10b29sYmFyID4gLm1hdC10b29sYmFyLWxheW91dCA+IC5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './attribution-dialog.component.html',
                styleUrls: ['./attribution-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_5__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"] }, { type: _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_7__["AttributionDialogResizeService"] }, { type: _core_style_service_style_service__WEBPACK_IMPORTED_MODULE_6__["StyleService"] }, { type: _core_access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_3__["AccessKeysService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true }]
        }], handleKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.module.ts":
/*!*******************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AttributionDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionDialogModule", function() { return AttributionDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "../../libs/ngx-mime/src/lib/shared/shared.module.ts");
/* harmony import */ var _attribution_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attribution-dialog.component */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.component.ts");
/* harmony import */ var _attribution_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribution-dialog.service */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.service.ts");
/* harmony import */ var _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribution-dialog-resize.service */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog-resize.service.ts");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");







class AttributionDialogModule {
}
AttributionDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AttributionDialogModule });
AttributionDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AttributionDialogModule_Factory(t) { return new (t || AttributionDialogModule)(); }, providers: [
        _attribution_dialog_service__WEBPACK_IMPORTED_MODULE_3__["AttributionDialogService"],
        _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_4__["AttributionDialogResizeService"],
        _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_5__["MimeDomHelper"]
    ], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AttributionDialogModule, { declarations: [_attribution_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AttributionDialogComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [_attribution_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AttributionDialogComponent"]],
                providers: [
                    _attribution_dialog_service__WEBPACK_IMPORTED_MODULE_3__["AttributionDialogService"],
                    _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_4__["AttributionDialogResizeService"],
                    _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_5__["MimeDomHelper"]
                ],
                entryComponents: [_attribution_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AttributionDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.service.ts":
/*!********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: AttributionDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributionDialogService", function() { return AttributionDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _attribution_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attribution-dialog.component */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.component.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attribution-dialog-resize.service */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog-resize.service.ts");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _core_models_dimensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");














class AttributionDialogService {
    constructor(dialog, mimeResizeService, attributionDialogResizeService, mimeDomHelper) {
        this.dialog = dialog;
        this.mimeResizeService = mimeResizeService;
        this.attributionDialogResizeService = attributionDialogResizeService;
        this.mimeDomHelper = mimeDomHelper;
        this.isAttributionDialogOpen = false;
        this.attributionDialogHeight = 0;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((dimensions) => {
            if (this.isAttributionDialogOpen) {
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
            }
        });
        this.attributionDialogResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((dimensions) => {
            if (this.isAttributionDialogOpen) {
                this.attributionDialogHeight = dimensions.height;
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
            }
        });
    }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    set el(el) {
        this._el = el;
    }
    open(timeout) {
        if (!this.isAttributionDialogOpen) {
            /**
             * Sleeping for material animations to finish
             * fix: https://github.com/angular/material2/issues/7438
             */
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(() => {
                const config = this.getDialogConfig();
                this.dialogRef = this.dialog.open(_attribution_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AttributionDialogComponent"], config);
                this.dialogRef.afterClosed().subscribe((result) => {
                    this.isAttributionDialogOpen = false;
                    this.mimeDomHelper.setFocusOnViewer();
                });
                this.isAttributionDialogOpen = true;
                this.closeDialogAfter(timeout);
            });
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isAttributionDialogOpen = false;
        }
    }
    toggle() {
        this.isAttributionDialogOpen ? this.close() : this.open();
    }
    closeDialogAfter(seconds) {
        if (seconds > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(seconds * 1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(() => {
                this.close();
            });
        }
    }
    getDialogConfig() {
        const dimensions = this.getPosition(this._el);
        return {
            hasBackdrop: false,
            width: '180px',
            panelClass: 'attribution-panel',
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            autoFocus: true,
            restoreFocus: false
        };
    }
    getPosition(el) {
        const padding = 20;
        const dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new _core_models_dimensions__WEBPACK_IMPORTED_MODULE_8__["Dimensions"]({
            top: dimensions.top + dimensions.height - this.attributionDialogHeight - 68,
            left: dimensions.left + padding
        });
    }
}
AttributionDialogService.ɵfac = function AttributionDialogService_Factory(t) { return new (t || AttributionDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_5__["MimeResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_6__["AttributionDialogResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_7__["MimeDomHelper"])); };
AttributionDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttributionDialogService, factory: AttributionDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributionDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_5__["MimeResizeService"] }, { type: _attribution_dialog_resize_service__WEBPACK_IMPORTED_MODULE_6__["AttributionDialogResizeService"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_7__["MimeDomHelper"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.component.ts":
/*!************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CanvasGroupDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroupDialogComponent", function() { return CanvasGroupDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");



















function CanvasGroupDialogComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.intl.pageDoesNotExists);
} }
class CanvasGroupDialogComponent {
    constructor(dialogRef, fb, viewerService, canvasService, intl, changeDetectorRef) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.numberOfCanvases = this.canvasService.numberOfCanvases;
        this.createForm();
    }
    createForm() {
        this.canvasGroupControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(this.numberOfCanvases)
        ]);
        this.canvasGroupForm = this.fb.group({
            canvasGroupControl: this.canvasGroupControl
        });
    }
    ngOnInit() {
        this.intl.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe(() => this.changeDetectorRef.markForCheck());
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    onSubmit() {
        if (this.canvasGroupForm.valid) {
            const pageNumber = this.canvasGroupForm.get('canvasGroupControl').value - 1;
            this.viewerService.goToCanvasGroup(this.canvasService.findCanvasGroupByCanvasIndex(pageNumber), false);
            this.dialogRef.close();
        }
    }
}
CanvasGroupDialogComponent.ɵfac = function CanvasGroupDialogComponent_Factory(t) { return new (t || CanvasGroupDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_5__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_7__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
CanvasGroupDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasGroupDialogComponent, selectors: [["ng-component"]], decls: 12, vars: 6, consts: [["fxLayout", "column"], [1, "canvas-group-dialog-title"], ["novalidate", "", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [3, "floatLabel"], ["id", "goToCanvasGroupInput", "type", "number", "matInput", "", "min", "1", "formControlName", "canvasGroupControl", 3, "placeholder"], ["id", "canvasGroupDoesNotExistsError", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["id", "cancelButton", "type", "button", "mat-button", "", "matDialogClose", ""], ["id", "goToCanvasGroupSubmitButton", "type", "submit", "mat-button", "", 3, "disabled"], ["id", "canvasGroupDoesNotExistsError"]], template: function CanvasGroupDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CanvasGroupDialogComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CanvasGroupDialogComponent_mat_error_6_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " OK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.intl.goToPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.canvasGroupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("floatLabel", "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.intl.enterPageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canvasGroupControl.errors == null ? null : ctx.canvasGroupControl.errors.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.canvasGroupForm.pristine || ctx.canvasGroupForm.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: [".canvas-group-dialog-title[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9jYW52YXMtZ3JvdXAtZGlhbG9nL2NhbnZhcy1ncm91cC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJsaWJzL25neC1taW1lL3NyYy9saWIvY2FudmFzLWdyb3VwLWRpYWxvZy9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcy1ncm91cC1kaWFsb2ctdGl0bGUge1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasGroupDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './canvas-group-dialog.component.html',
                styleUrls: ['./canvas-group-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_5__["ViewerService"] }, { type: _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"] }, { type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_7__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.module.ts":
/*!*********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CanvasGroupDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroupDialogModule", function() { return CanvasGroupDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "../../libs/ngx-mime/src/lib/shared/shared.module.ts");
/* harmony import */ var _canvas_group_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-group-dialog.component */ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.component.ts");
/* harmony import */ var _canvas_group_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas-group-dialog.service */ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.service.ts");





class CanvasGroupDialogModule {
}
CanvasGroupDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CanvasGroupDialogModule });
CanvasGroupDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CanvasGroupDialogModule_Factory(t) { return new (t || CanvasGroupDialogModule)(); }, providers: [_canvas_group_dialog_service__WEBPACK_IMPORTED_MODULE_3__["CanvasGroupDialogService"]], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CanvasGroupDialogModule, { declarations: [_canvas_group_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CanvasGroupDialogComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasGroupDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [_canvas_group_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CanvasGroupDialogComponent"]],
                providers: [_canvas_group_dialog_service__WEBPACK_IMPORTED_MODULE_3__["CanvasGroupDialogService"]],
                entryComponents: [_canvas_group_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CanvasGroupDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.service.ts":
/*!**********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CanvasGroupDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroupDialogService", function() { return CanvasGroupDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _canvas_group_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas-group-dialog.component */ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.component.ts");






class CanvasGroupDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.isCanvasGroupDialogOpen = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initialize() { }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    open(timeout) {
        if (!this.isCanvasGroupDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(_canvas_group_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CanvasGroupDialogComponent"], config);
            this.dialogRef.afterClosed().subscribe(result => {
                this.isCanvasGroupDialogOpen = false;
            });
            this.isCanvasGroupDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isCanvasGroupDialogOpen = false;
        }
    }
    toggle() {
        this.isCanvasGroupDialogOpen ? this.close() : this.open();
    }
    getDialogConfig() {
        return {
            hasBackdrop: false,
            disableClose: true,
            panelClass: 'canvas-group-panel'
        };
    }
}
CanvasGroupDialogService.ɵfac = function CanvasGroupDialogService_Factory(t) { return new (t || CanvasGroupDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
CanvasGroupDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanvasGroupDialogService, factory: CanvasGroupDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasGroupDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy-factory.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy-factory.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ContentSearchDialogConfigStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchDialogConfigStrategyFactory", function() { return ContentSearchDialogConfigStrategyFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _content_search_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-search-dialog-config-strategy */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy.ts");







class ContentSearchDialogConfigStrategyFactory {
    constructor(mediaObserver, mimeDomHelper) {
        this.mediaObserver = mediaObserver;
        this.mimeDomHelper = mimeDomHelper;
    }
    create() {
        return this.mediaObserver.isActive('lt-md')
            ? new _content_search_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__["MobileContentSearchDialogConfigStrategy"]()
            : new _content_search_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__["DesktopContentSearchDialogConfigStrategy"](this.mimeDomHelper);
    }
}
ContentSearchDialogConfigStrategyFactory.ɵfac = function ContentSearchDialogConfigStrategyFactory_Factory(t) { return new (t || ContentSearchDialogConfigStrategyFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"])); };
ContentSearchDialogConfigStrategyFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentSearchDialogConfigStrategyFactory, factory: ContentSearchDialogConfigStrategyFactory.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSearchDialogConfigStrategyFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: MobileContentSearchDialogConfigStrategy, DesktopContentSearchDialogConfigStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileContentSearchDialogConfigStrategy", function() { return MobileContentSearchDialogConfigStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopContentSearchDialogConfigStrategy", function() { return DesktopContentSearchDialogConfigStrategy; });
/* harmony import */ var _core_models_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");

class MobileContentSearchDialogConfigStrategy {
    getConfig(elementRef) {
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: '100%',
            height: '100%',
            panelClass: 'content-search-panel'
        };
    }
}
class DesktopContentSearchDialogConfigStrategy {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
    }
    getConfig(el) {
        const dimensions = this.getPosition(el);
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: `${DesktopContentSearchDialogConfigStrategy.dialogWidth}px`,
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            panelClass: 'content-search-panel'
        };
    }
    getPosition(el) {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new _core_models_dimensions__WEBPACK_IMPORTED_MODULE_0__["Dimensions"]({
            top: dimensions.top + 64,
            left: dimensions.right -
                DesktopContentSearchDialogConfigStrategy.dialogWidth -
                DesktopContentSearchDialogConfigStrategy.paddingRight
        });
    }
}
DesktopContentSearchDialogConfigStrategy.dialogWidth = 350;
DesktopContentSearchDialogConfigStrategy.paddingRight = 20;


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.component.ts":
/*!****************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ContentSearchDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchDialogComponent", function() { return ContentSearchDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../core/iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/fesm2015/divider.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/fesm2015/progress-bar.js");






























const _c0 = ["contentSearchResult"];
const _c1 = ["query"];
const _c2 = ["hitButton"];
function ContentSearchDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx_r0.intl.closeLabel)("matTooltip", ctx_r0.intl.closeLabel)("matDialogClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.intl.searchLabel);
} }
function ContentSearchDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.intl.searchLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx_r1.intl.closeLabel)("matTooltip", ctx_r1.intl.closeLabel)("matDialogClose", true);
} }
function ContentSearchDialogComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchDialogComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r4.intl.clearSearchLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.intl.clearSearchLabel);
} }
function ContentSearchDialogComponent_div_16_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r12.intl.resultsFoundLabel(ctx_r12.numberOfHits, ctx_r12.currentSearch), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ContentSearchDialogComponent_div_16_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r13.intl.noResultsFoundLabel(ctx_r13.currentSearch), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ContentSearchDialogComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentSearchDialogComponent_div_16_div_2_div_1_Template, 1, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentSearchDialogComponent_div_16_div_2_div_2_Template, 1, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.numberOfHits > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.numberOfHits === 0);
} }
function ContentSearchDialogComponent_div_16_ng_container_3_mat_divider_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function ContentSearchDialogComponent_div_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchDialogComponent_div_16_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const hit_r14 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.goToHit(hit_r14); })("keyup.enter", function ContentSearchDialogComponent_div_16_ng_container_3_Template_button_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const hit_r14 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.goToHit(hit_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContentSearchDialogComponent_div_16_ng_container_3_mat_divider_11_Template, 1, 0, "mat-divider", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const hit_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r11.currentHit && hit_r14.id === ctx_r11.currentHit.id ? "primary" : null)("ngClass", "hit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hit_r14.before, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hit_r14.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hit_r14.after, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hit_r14.index + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r15);
} }
function ContentSearchDialogComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentSearchDialogComponent_div_16_div_2_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentSearchDialogComponent_div_16_ng_container_3_Template, 12, 7, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.numberOfHits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.currentSearch && ctx_r6.currentSearch.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.hits);
} }
function ContentSearchDialogComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContentSearchDialogComponent {
    constructor(dialogRef, intl, mediaObserver, mimeResizeService, iiifManifestService, iiifContentSearchService, el, mimeDomHelper) {
        this.dialogRef = dialogRef;
        this.intl = intl;
        this.mediaObserver = mediaObserver;
        this.mimeResizeService = mimeResizeService;
        this.iiifManifestService = iiifManifestService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.el = el;
        this.mimeDomHelper = mimeDomHelper;
        this.hits = [];
        this.currentSearch = '';
        this.numberOfHits = 0;
        this.isSearching = false;
        this.tabHeight = {};
        this.mimeHeight = 0;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((dimensions) => {
            this.mimeHeight = dimensions.height;
            this.resizeTabHeight();
        });
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
        });
        this.iiifContentSearchService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((sr) => {
            this.hits = sr.hits;
            this.currentSearch = sr.q ? sr.q : '';
            this.q = sr.q;
            this.numberOfHits = sr.size();
            if (this.resultContainer !== null && this.numberOfHits > 0) {
                this.resultContainer.nativeElement.focus();
            }
            else if (this.q.length === 0 || this.numberOfHits === 0) {
                this.qEl.nativeElement.focus();
            }
        });
        this.iiifContentSearchService.isSearching
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((s) => {
            this.isSearching = s;
        });
        this.iiifContentSearchService.onSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((hit) => {
            if (hit === null) {
                this.currentHit = hit;
            }
            else {
                if (!this.currentHit || this.currentHit.id !== hit.id) {
                    this.currentHit = hit;
                    this.scrollCurrentHitIntoView();
                }
            }
        });
        this.resizeTabHeight();
    }
    ngAfterViewInit() {
        this.scrollCurrentHitIntoView();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    onResize(event) {
        this.resizeTabHeight();
    }
    onSubmit(event) {
        event.preventDefault();
        this.search();
    }
    clear() {
        this.q = '';
        this.search();
    }
    goToHit(hit) {
        this.currentHit = hit;
        this.iiifContentSearchService.selected(hit);
        if (this.mediaObserver.isActive('lt-md')) {
            this.dialogRef.close();
        }
    }
    search() {
        this.currentSearch = this.q;
        this.iiifContentSearchService.search(this.manifest, this.q);
    }
    resizeTabHeight() {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        let height = this.mimeHeight;
        if (this.mediaObserver.isActive('lt-md')) {
            this.tabHeight = {
                maxHeight: window.innerHeight - 128 + 'px'
            };
        }
        else {
            height -= 272;
            this.tabHeight = {
                maxHeight: height + 'px'
            };
        }
    }
    scrollCurrentHitIntoView() {
        this.iiifContentSearchService.onSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(s => s !== null))
            .subscribe((hit) => {
            const selected = this.findSelected(hit);
            if (selected) {
                selected.nativeElement.focus();
            }
        });
    }
    findSelected(selectedHit) {
        if (this.hitList) {
            const selectedList = this.hitList.filter((item, index) => index === selectedHit.id);
            return selectedList.length > 0 ? selectedList[0] : null;
        }
        else {
            return null;
        }
    }
}
ContentSearchDialogComponent.ɵfac = function ContentSearchDialogComponent_Factory(t) { return new (t || ContentSearchDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_7__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_9__["MimeResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_6__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_5__["IiifContentSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_8__["MimeDomHelper"])); };
ContentSearchDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentSearchDialogComponent, selectors: [["mime-search"]], viewQuery: function ContentSearchDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resultContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.qEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hitList = _t);
    } }, hostBindings: function ContentSearchDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ContentSearchDialogComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 9, consts: [[1, "content-search-container"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "content-search-form"], [3, "ngSubmit"], ["searchForm", "ngForm"], [1, "content-search-box"], ["id", "content-search-form-submit", "type", "submit", "matPrefix", "", "mat-icon-button", "", 3, "matTooltip"], [1, "icon"], ["cdkFocusInitial", "", "matInput", "", "name", "q", "autocomplete", "off", "aria-labelledby", "content-search-form-submit", 1, "content-search-input", 3, "ngModel", "ngModelChange"], ["query", ""], ["id", "clearSearchButton", "type", "button", "matSuffix", "", "mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], [1, "content-search-result-container", 3, "ngStyle"], ["contentSearchResult", ""], ["class", "content-search-result", "fxLayout", "column", 4, "ngIf"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["id", "close-content-search-dialog-button", "mat-icon-button", "", 3, "aria-label", "matTooltip", "matDialogClose"], [1, "heading"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", ""], [1, "heading", "heading-desktop"], ["id", "clearSearchButton", "type", "button", "matSuffix", "", "mat-icon-button", "", 3, "matTooltip", "click"], ["fxLayout", "column", 1, "content-search-result"], ["type", "hidden", "id", "numberOfHits", 3, "value"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], ["mat-button", "", 3, "color", "ngClass", "click", "keyup.enter"], ["hitButton", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start"], ["fxFlex", "", 1, "summary"], ["fxFlex", "40px", 1, "canvasGroup"], ["mode", "indeterminate"]], template: function ContentSearchDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentSearchDialogComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentSearchDialogComponent_div_3_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContentSearchDialogComponent_Template_form_ngSubmit_5_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContentSearchDialogComponent_Template_input_ngModelChange_11_listener($event) { return ctx.q = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContentSearchDialogComponent_button_13_Template, 3, 2, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContentSearchDialogComponent_div_16_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContentSearchDialogComponent_div_17_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mediaObserver.isActive("lt-md"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.intl.searchLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.intl.searchLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.tabHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSearching);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatPrefix"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultStyleDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_17__["DefaultClassDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDivider"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBar"]], styles: [".heading[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\n.heading-desktop[_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n.label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.content-search-form[_ngcontent-%COMP%] {\n  padding: 0px 16px;\n}\n\n.content-search-box[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content-search-input[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.content-search-result-container[_ngcontent-%COMP%] {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  overflow: auto;\n  margin-bottom: 8px;\n}\n\n.content-search-result[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n\n.content-search-result[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  line-height: initial;\n  white-space: initial;\n  word-wrap: initial;\n  max-width: none;\n  padding: 8px 8px;\n  text-align: left;\n  font-size: 14px;\n}\n\n  .content-search-container .current-content-search {\n  font-weight: 700;\n}\n\nem[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.canvasGroupLabel[_ngcontent-%COMP%] {\n  text-align: right;\n  opacity: 0.54;\n}\n\n  .content-search-panel {\n  max-width: none !important;\n}\n\n  .content-search-panel > .mat-dialog-container {\n  padding: 0px !important;\n  overflow: initial;\n}\n\n  .content-search-container > div > div > .mat-toolbar {\n  padding: 0px 0px !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 22px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb250ZW50LXNlYXJjaC1kaWFsb2cvY29udGVudC1zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJsaWJzL25neC1taW1lL3NyYy9saWIvY29udGVudC1zZWFyY2gtZGlhbG9nL2NvbnRlbnQtc2VhcmNoLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uaGVhZGluZy1kZXNrdG9wIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ubGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNvbnRlbnQtc2VhcmNoLWZvcm0ge1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuLmNvbnRlbnQtc2VhcmNoLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1zZWFyY2gtaW5wdXQge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250ZW50LXNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvbnRlbnQtc2VhcmNoLXJlc3VsdCB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuXG4uY29udGVudC1zZWFyY2gtcmVzdWx0IC5tYXQtYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICB3b3JkLXdyYXA6IGluaXRpYWw7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnQtc2VhcmNoLWNvbnRhaW5lciAuY3VycmVudC1jb250ZW50LXNlYXJjaCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmVtIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhbnZhc0dyb3VwTGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgb3BhY2l0eTogMC41NDtcbn1cblxuOjpuZy1kZWVwIC5jb250ZW50LXNlYXJjaC1wYW5lbCB7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnQtc2VhcmNoLXBhbmVsID4gLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnQtc2VhcmNoLWNvbnRhaW5lciA+IGRpdiA+IGRpdiA+IC5tYXQtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSearchDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-search',
                templateUrl: './content-search-dialog.component.html',
                styleUrls: ['./content-search-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_7__["MimeViewerIntl"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_9__["MimeResizeService"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_6__["IiifManifestService"] }, { type: _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_5__["IiifContentSearchService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_8__["MimeDomHelper"] }]; }, { resultContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentSearchResult', { static: true }]
        }], qEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['query', { static: true }]
        }], hitList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['hitButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.module.ts":
/*!*************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ContentSearchDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchDialogModule", function() { return ContentSearchDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "../../libs/ngx-mime/src/lib/shared/shared.module.ts");
/* harmony import */ var _content_search_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-search-dialog.service */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.service.ts");
/* harmony import */ var _content_search_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-search-dialog-config-strategy-factory */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy-factory.ts");
/* harmony import */ var _content_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-search-dialog.component */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.component.ts");






class ContentSearchDialogModule {
}
ContentSearchDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentSearchDialogModule });
ContentSearchDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentSearchDialogModule_Factory(t) { return new (t || ContentSearchDialogModule)(); }, providers: [
        _content_search_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ContentSearchDialogService"],
        _content_search_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_3__["ContentSearchDialogConfigStrategyFactory"]
    ], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentSearchDialogModule, { declarations: [_content_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchDialogComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSearchDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [_content_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchDialogComponent"]],
                providers: [
                    _content_search_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ContentSearchDialogService"],
                    _content_search_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_3__["ContentSearchDialogConfigStrategyFactory"]
                ],
                entryComponents: [_content_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.service.ts":
/*!**************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ContentSearchDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchDialogService", function() { return ContentSearchDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _content_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-search-dialog.component */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.component.ts");
/* harmony import */ var _content_search_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-search-dialog-config-strategy-factory */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog-config-strategy-factory.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");











class ContentSearchDialogService {
    constructor(dialog, contentSearchDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.contentSearchDialogConfigStrategyFactory = contentSearchDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isContentSearchDialogOpen = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(rect => {
            if (this.isContentSearchDialogOpen) {
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
                this.dialogRef.updateSize(config.width, config.height);
            }
        });
    }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    set el(el) {
        this._el = el;
    }
    open() {
        if (!this.isContentSearchDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(_content_search_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ContentSearchDialogComponent"], config);
            this.dialogRef.afterClosed().subscribe(result => {
                this.isContentSearchDialogOpen = false;
            });
            this.isContentSearchDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        this.isContentSearchDialogOpen = false;
    }
    toggle() {
        this.isContentSearchDialogOpen ? this.close() : this.open();
    }
    isOpen() {
        return this.isContentSearchDialogOpen;
    }
    getDialogConfig() {
        return this.contentSearchDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    }
}
ContentSearchDialogService.ɵfac = function ContentSearchDialogService_Factory(t) { return new (t || ContentSearchDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_content_search_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogConfigStrategyFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"])); };
ContentSearchDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentSearchDialogService, factory: ContentSearchDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSearchDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _content_search_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogConfigStrategyFactory"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy-factory.ts":
/*!******************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy-factory.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ContentsDialogConfigStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsDialogConfigStrategyFactory", function() { return ContentsDialogConfigStrategyFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _contents_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents-dialog-config-strategy */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy.ts");







class ContentsDialogConfigStrategyFactory {
    constructor(mediaObserver, mimeDomHelper) {
        this.mediaObserver = mediaObserver;
        this.mimeDomHelper = mimeDomHelper;
    }
    create() {
        return this.mediaObserver.isActive('lt-md')
            ? new _contents_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__["MobileContentsDialogConfigStrategy"]()
            : new _contents_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__["DesktopContentsDialogConfigStrategy"](this.mimeDomHelper);
    }
}
ContentsDialogConfigStrategyFactory.ɵfac = function ContentsDialogConfigStrategyFactory_Factory(t) { return new (t || ContentsDialogConfigStrategyFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"])); };
ContentsDialogConfigStrategyFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentsDialogConfigStrategyFactory, factory: ContentsDialogConfigStrategyFactory.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentsDialogConfigStrategyFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy.ts":
/*!**********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MobileContentsDialogConfigStrategy, DesktopContentsDialogConfigStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileContentsDialogConfigStrategy", function() { return MobileContentsDialogConfigStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopContentsDialogConfigStrategy", function() { return DesktopContentsDialogConfigStrategy; });
/* harmony import */ var _core_models_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../core/models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");

class MobileContentsDialogConfigStrategy {
    getConfig(elementRef) {
        return {
            hasBackdrop: false,
            disableClose: false,
            width: '100%',
            height: '100%',
            panelClass: 'contents-panel'
        };
    }
}
class DesktopContentsDialogConfigStrategy {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
    }
    getConfig(el) {
        const dimensions = this.getPosition(el);
        return {
            hasBackdrop: false,
            disableClose: false,
            width: `${DesktopContentsDialogConfigStrategy.dialogWidth}px`,
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            panelClass: 'contents-panel'
        };
    }
    getPosition(el) {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new _core_models_dimensions__WEBPACK_IMPORTED_MODULE_0__["Dimensions"]({
            top: dimensions.top + 64,
            left: dimensions.right -
                DesktopContentsDialogConfigStrategy.dialogWidth -
                DesktopContentsDialogConfigStrategy.paddingRight
        });
    }
}
DesktopContentsDialogConfigStrategy.dialogWidth = 350;
DesktopContentsDialogConfigStrategy.paddingRight = 20;


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/contents-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ContentsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsDialogComponent", function() { return ContentsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metadata/metadata.component */ "../../libs/ngx-mime/src/lib/contents-dialog/metadata/metadata.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table-of-contents/table-of-contents.component */ "../../libs/ngx-mime/src/lib/contents-dialog/table-of-contents/table-of-contents.component.ts");


























function ContentsDialogComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx_r0.intl.closeLabel)("matTooltip", ctx_r0.intl.closeLabel)("matDialogClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.intl.contentsLabel);
} }
function ContentsDialogComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.intl.contentsLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx_r1.intl.closeLabel)("matTooltip", ctx_r1.intl.closeLabel)("matDialogClose", true);
} }
function ContentsDialogComponent_mat_tab_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mime-toc", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("canvasChanged", function ContentsDialogComponent_mat_tab_9_Template_mime_toc_canvasChanged_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onCanvasChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r2.intl.tocLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.tabHeight);
} }
class ContentsDialogComponent {
    constructor(intl, mediaObserver, dialogRef, el, mimeDomHelper, changeDetectorRef, iiifManifestService, mimeResizeService) {
        this.intl = intl;
        this.mediaObserver = mediaObserver;
        this.dialogRef = dialogRef;
        this.el = el;
        this.mimeDomHelper = mimeDomHelper;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.tabHeight = {};
        this.showToc = false;
        this.selectedIndex = 0;
        this.mimeHeight = 0;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((dimensions) => {
            this.mimeHeight = dimensions.height;
            this.resizeTabHeight();
        });
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
            this.showToc = this.manifest && this.manifest.structures.length > 0;
            this.changeDetectorRef.detectChanges();
        });
        this.resizeTabHeight();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    onResize(event) {
        this.resizeTabHeight();
    }
    onCanvasChanged() {
        if (this.mediaObserver.isActive('lt-md')) {
            this.dialogRef.close();
        }
    }
    resizeTabHeight() {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        let height = this.mimeHeight;
        if (this.mediaObserver.isActive('lt-md')) {
            height -= 104;
            this.tabHeight = {
                maxHeight: window.innerHeight - 128 + 'px'
            };
        }
        else {
            height -= 278;
            this.tabHeight = {
                maxHeight: height + 'px'
            };
        }
    }
}
ContentsDialogComponent.ɵfac = function ContentsDialogComponent_Factory(t) { return new (t || ContentsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_7__["MimeDomHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_5__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_8__["MimeResizeService"])); };
ContentsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentsDialogComponent, selectors: [["mime-contents"]], hostBindings: function ContentsDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ContentsDialogComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 6, consts: [[1, "contents-container"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["mat-dialog-content", ""], [3, "selectedIndex", "selectedIndexChange"], [3, "label"], [1, "tab-container", 3, "ngStyle"], [3, "label", 4, "ngIf"], ["color", "primary", "data-test-id", "mobile-toolbar"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-icon-button", "", 3, "aria-label", "matTooltip", "matDialogClose"], ["mat-dialog-title", ""], ["data-test-id", "desktop-toolbar"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", ""], [3, "canvasChanged"]], template: function ContentsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentsDialogComponent_ng_container_2_Template, 8, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContentsDialogComponent_ng_container_3_Template, 8, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ContentsDialogComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) { return ctx.selectedIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mime-metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContentsDialogComponent_mat_tab_9_Template, 3, 2, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mediaObserver.isActive("lt-md"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.intl.metadataLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.tabHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultStyleDirective"], _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_12__["MetadataComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_18__["TocComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n  .contents-panel {\n  max-width: none !important;\n}\n\n  .contents-panel > .mat-dialog-container {\n  padding: 0px !important;\n  overflow: initial;\n}\n\n  .contents-container > div > div > .mat-toolbar {\n  padding: 0px 0px !important;\n}\n\n.tab-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 8px 16px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb250ZW50cy1kaWFsb2cvY29udGVudHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL2NvbnRlbnRzLWRpYWxvZy9jb250ZW50cy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuOjpuZy1kZWVwIC5jb250ZW50cy1wYW5lbCB7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnRzLXBhbmVsID4gLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnRzLWNvbnRhaW5lciA+IGRpdiA+IGRpdiA+IC5tYXQtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnRhYi1jb250YWluZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBub25lO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-contents',
                templateUrl: './contents-dialog.component.html',
                styleUrls: ['./contents-dialog.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__["MimeViewerIntl"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_7__["MimeDomHelper"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_5__["IiifManifestService"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_8__["MimeResizeService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.module.ts":
/*!*************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/contents-dialog.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ContentsDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsDialogModule", function() { return ContentsDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "../../libs/ngx-mime/src/lib/shared/shared.module.ts");
/* harmony import */ var _contents_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents-dialog.service */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.service.ts");
/* harmony import */ var _contents_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents-dialog-config-strategy-factory */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy-factory.ts");
/* harmony import */ var _contents_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents-dialog.component */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.component.ts");
/* harmony import */ var _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata/metadata.component */ "../../libs/ngx-mime/src/lib/contents-dialog/metadata/metadata.component.ts");
/* harmony import */ var _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-of-contents/table-of-contents.component */ "../../libs/ngx-mime/src/lib/contents-dialog/table-of-contents/table-of-contents.component.ts");









class ContentsDialogModule {
}
ContentsDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentsDialogModule });
ContentsDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentsDialogModule_Factory(t) { return new (t || ContentsDialogModule)(); }, providers: [
        _contents_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ContentsDialogService"],
        _contents_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_4__["ContentsDialogConfigStrategyFactory"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["ShowOnDirtyErrorStateMatcher"] }
    ], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentsDialogModule, { declarations: [_contents_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogComponent"], _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_6__["MetadataComponent"], _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_7__["TocComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentsDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
                declarations: [_contents_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogComponent"], _metadata_metadata_component__WEBPACK_IMPORTED_MODULE_6__["MetadataComponent"], _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_7__["TocComponent"]],
                providers: [
                    _contents_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ContentsDialogService"],
                    _contents_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_4__["ContentsDialogConfigStrategyFactory"],
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["ErrorStateMatcher"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["ShowOnDirtyErrorStateMatcher"] }
                ],
                entryComponents: [_contents_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.service.ts":
/*!**************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/contents-dialog.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: ContentsDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsDialogService", function() { return ContentsDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _contents_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents-dialog.component */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.component.ts");
/* harmony import */ var _contents_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents-dialog-config-strategy-factory */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog-config-strategy-factory.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");











class ContentsDialogService {
    constructor(dialog, contentsDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.contentsDialogConfigStrategyFactory = contentsDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isContentsDialogOpen = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(rect => {
            if (this.isContentsDialogOpen) {
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
                this.dialogRef.updateSize(config.width, config.height);
            }
        });
    }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    set el(el) {
        this._el = el;
    }
    open(selectedIndex) {
        if (!this.isContentsDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(_contents_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ContentsDialogComponent"], config);
            if (selectedIndex) {
                this.dialogRef.componentInstance.selectedIndex = selectedIndex;
            }
            this.dialogRef.afterClosed().subscribe(result => {
                this.isContentsDialogOpen = false;
            });
            this.isContentsDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
            this.isContentsDialogOpen = false;
        }
        this.isContentsDialogOpen = false;
    }
    toggle() {
        this.isContentsDialogOpen ? this.close() : this.open();
    }
    isOpen() {
        return this.isContentsDialogOpen;
    }
    getSelectedIndex() {
        return this.dialogRef && this.dialogRef.componentInstance
            ? this.dialogRef.componentInstance.selectedIndex
            : 0;
    }
    getDialogConfig() {
        return this.contentsDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    }
}
ContentsDialogService.ɵfac = function ContentsDialogService_Factory(t) { return new (t || ContentsDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_contents_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogConfigStrategyFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"])); };
ContentsDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentsDialogService, factory: ContentsDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentsDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _contents_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogConfigStrategyFactory"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/metadata/metadata.component.ts":
/*!******************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/metadata/metadata.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataComponent", function() { return MetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function MetadataComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const metadata_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](metadata_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", metadata_r4.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MetadataComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.intl.attributionLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.manifest == null ? null : ctx_r1.manifest.attribution, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MetadataComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.intl.licenseLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.manifest == null ? null : ctx_r2.manifest.license, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.manifest == null ? null : ctx_r2.manifest.license);
} }
function MetadataComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.manifest == null ? null : ctx_r3.manifest.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MetadataComponent {
    constructor(intl, changeDetectorRef, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
MetadataComponent.ɵfac = function MetadataComponent_Factory(t) { return new (t || MetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_3__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"])); };
MetadataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetadataComponent, selectors: [["mime-metadata"]], decls: 5, vars: 4, consts: [["id", "metadata-container", 1, "metadata-container"], ["class", "metadata", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "metadata"], [1, "title"], [1, "content", 3, "innerHTML"], ["id", "metadata-attribution", 1, "content", "attribution", 3, "innerHTML"], ["id", "metadata-license", 1, "content", "license"], ["target", "_blank", 3, "href"], ["id", "metadata-logo"], [1, "content", "logo", 3, "src"]], template: function MetadataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MetadataComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MetadataComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MetadataComponent_div_3_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MetadataComponent_div_4_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.manifest == null ? null : ctx.manifest.metadata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manifest == null ? null : ctx.manifest.attribution);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manifest == null ? null : ctx.manifest.license);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manifest == null ? null : ctx.manifest.logo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-weight: 400;\n  margin-bottom: 4px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  word-break: break-all;\n  margin-bottom: 8px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb250ZW50cy1kaWFsb2cvbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL2NvbnRlbnRzLWRpYWxvZy9tZXRhZGF0YS9tZXRhZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5sb2dvIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogNjRweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetadataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-metadata',
                templateUrl: './metadata.component.html',
                styleUrls: ['./metadata.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_3__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/contents-dialog/table-of-contents/table-of-contents.component.ts":
/*!************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/contents-dialog/table-of-contents/table-of-contents.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: TocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocComponent", function() { return TocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");














function TocComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TocComponent_div_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const structure_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToCanvas($event, structure_r1.canvasIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const structure_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("currentCanvasGroup", ctx_r0.currentCanvasGroupIndex === structure_r1.canvasIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](structure_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](structure_r1.canvasIndex + 1);
} }
class TocComponent {
    constructor(intl, changeDetectorRef, iiifManifestService, viewerService, canvasService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.iiifManifestService = iiifManifestService;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.canvasChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
            this.currentCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
            this.changeDetectorRef.detectChanges();
        });
        this.viewerService.onCanvasGroupIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((canvasGroupIndex) => {
            this.currentCanvasGroupIndex = canvasGroupIndex;
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    goToCanvas(event, canvasIndex) {
        event.preventDefault();
        this.viewerService.goToCanvas(canvasIndex, false);
        this.canvasChanged.emit(canvasIndex);
    }
}
TocComponent.ɵfac = function TocComponent_Factory(t) { return new (t || TocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_5__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_6__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"])); };
TocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TocComponent, selectors: [["mime-toc"]], outputs: { canvasChanged: "canvasChanged" }, decls: 2, vars: 1, consts: [["id", "toc-container", 1, "toc-container"], [4, "ngFor", "ngForOf"], ["href", "", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "toc-link", 3, "click"], [1, "label"], [1, "canvasGroupIndex"]], template: function TocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TocComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.manifest == null ? null : ctx.manifest.structures);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"]], styles: [".toc-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px !important;\n  font-weight: 400;\n  margin-bottom: 8px;\n}\n\n.currentCanvasGroup[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb250ZW50cy1kaWFsb2cvdGFibGUtb2YtY29udGVudHMvdGFibGUtb2YtY29udGVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL2NvbnRlbnRzLWRpYWxvZy90YWJsZS1vZi1jb250ZW50cy90YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2MtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmN1cnJlbnRDYW52YXNHcm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TocComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-toc',
                templateUrl: './table-of-contents.component.html',
                styleUrls: ['./table-of-contents.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_5__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"] }, { type: _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_6__["ViewerService"] }, { type: _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"] }]; }, { canvasChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/access-keys-handler-service/access-keys.service.ts":
/*!***************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/access-keys-handler-service/access-keys.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AccessKeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessKeysService", function() { return AccessKeysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content-search-dialog/content-search-dialog.service */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.service.ts");
/* harmony import */ var _contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contents-dialog/contents-dialog.service */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.service.ts");
/* harmony import */ var _mode_service_mode_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mode-service/mode.service */ "../../libs/ngx-mime/src/lib/core/mode-service/mode.service.ts");
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony import */ var _iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _mime_dom_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/AccessKeys */ "../../libs/ngx-mime/src/lib/core/models/AccessKeys.ts");
/* harmony import */ var _navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../navigation/content-search-navigation-service/content-search-navigation.service */ "../../libs/ngx-mime/src/lib/core/navigation/content-search-navigation-service/content-search-navigation.service.ts");
/* harmony import */ var _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");

























class AccessKeysService {
    constructor(viewerService, canvasService, modeService, iiifManifestService, iiifContentSearchService, contentSearchDialogService, contentsDialogService, mimeDomHelper, contentSearchNavigationService) {
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.iiifManifestService = iiifManifestService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.contentSearchDialogService = contentSearchDialogService;
        this.contentsDialogService = contentsDialogService;
        this.mimeDomHelper = mimeDomHelper;
        this.contentSearchNavigationService = contentSearchNavigationService;
        this.isSearchable = false;
        this.hasHits = false;
        this.disabledKeys = [];
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.invert = false;
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.isSearchable = this.isManifestSearchable(manifest);
            this.invert = manifest.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_14__["ViewingDirection"].RTL;
        });
        this.iiifContentSearchService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((result) => {
            this.hasHits = result.hits.length > 0;
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    handleKeyEvents(event) {
        const accessKeys = new _models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"](event);
        if (!this.isKeyDisabled(event.keyCode)) {
            if (accessKeys.isArrowLeftKeys()) {
                if (!this.isZoomedIn()) {
                    this.invert
                        ? this.goToNextCanvasGroup()
                        : this.goToPreviousCanvasGroup();
                }
            }
            else if (accessKeys.isArrowRightKeys()) {
                if (!this.isZoomedIn()) {
                    this.invert
                        ? this.goToPreviousCanvasGroup()
                        : this.goToNextCanvasGroup();
                }
            }
            else if (accessKeys.isFirstCanvasGroupKeys()) {
                this.goToFirstCanvasGroup();
            }
            else if (accessKeys.isLastCanvasGroupKeys()) {
                this.goToLastCanvasGroup();
            }
            else if (accessKeys.isNextHitKeys() && this.hasHits) {
                this.goToNextHit();
            }
            else if (accessKeys.isPreviousHitKeys() && this.hasHits) {
                this.goToPreviousHit();
            }
            else if (accessKeys.isFullscreenKeys()) {
                this.toggleFullscreen();
            }
            else if (accessKeys.isSearchDialogKeys() && this.isSearchable) {
                this.toggleSearchDialog();
            }
            else if (accessKeys.isContentsDialogKeys()) {
                this.toggleContentsDialog();
            }
            else if (accessKeys.isResetSearchKeys()) {
                this.resetSearch();
            }
            else if (accessKeys.isPageDownKeys()) {
                this.goToNextCanvasGroup();
            }
            else if (accessKeys.isPageUpKeys()) {
                this.goToPreviousCanvasGroup();
            }
            else if (accessKeys.isZoomInKeys()) {
                this.zoomIn();
            }
            else if (accessKeys.isZoomOutKeys()) {
                this.zoomOut();
            }
            else if (accessKeys.isZoomHomeKeys()) {
                this.zoomHome();
            }
            else if (accessKeys.isRotateKeys()) {
                this.rotateClockWise();
            }
        }
    }
    goToNextCanvasGroup() {
        this.viewerService.goToNextCanvasGroup();
    }
    goToPreviousCanvasGroup() {
        this.viewerService.goToPreviousCanvasGroup();
    }
    goToFirstCanvasGroup() {
        this.viewerService.goToCanvasGroup(0, false);
    }
    goToLastCanvasGroup() {
        this.viewerService.goToCanvasGroup(this.canvasService.numberOfCanvasGroups - 1, false);
    }
    rotateClockWise() {
        this.viewerService.rotate();
        this.mimeDomHelper.setFocusOnViewer();
    }
    goToNextHit() {
        this.contentSearchNavigationService.goToNextCanvasGroupHit();
    }
    goToPreviousHit() {
        this.contentSearchNavigationService.goToPreviousCanvasGroupHit();
    }
    zoomIn() {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].DASHBOARD) {
            this.modeService.toggleMode();
        }
        else {
            this.viewerService.zoomIn();
        }
    }
    zoomOut() {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE) {
            this.modeService.toggleMode();
        }
        else if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE_ZOOMED) {
            this.viewerService.zoomOut();
        }
    }
    zoomHome() {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE_ZOOMED) {
            this.viewerService.home();
        }
    }
    toggleSearchDialog() {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE ||
            this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE_ZOOMED) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].DASHBOARD;
            this.contentSearchDialogService.open();
        }
        else {
            if (this.contentSearchDialogService.isOpen()) {
                this.contentSearchDialogService.close();
            }
            else {
                this.contentSearchDialogService.open();
            }
        }
        this.contentsDialogService.close();
    }
    toggleContentsDialog() {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE ||
            this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE_ZOOMED) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].DASHBOARD;
            this.contentsDialogService.open();
        }
        else {
            if (this.contentsDialogService.isOpen()) {
                this.contentsDialogService.close();
            }
            else {
                this.contentsDialogService.open();
            }
        }
        this.contentSearchDialogService.close();
    }
    toggleFullscreen() {
        this.mimeDomHelper.toggleFullscreen();
        this.mimeDomHelper.setFocusOnViewer();
    }
    resetSearch() {
        this.iiifContentSearchService.destroy();
    }
    isManifestSearchable(manifest) {
        return manifest.service ? true : false;
    }
    isZoomedIn() {
        return this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_8__["ViewerMode"].PAGE_ZOOMED;
    }
    updateDisabledKeys() {
        this.resetDisabledKeys();
        if (this.contentsDialogService.isOpen()) {
            this.disableKeysForContentDialog();
        }
        else if (this.contentSearchDialogService.isOpen()) {
            this.diableKeysForContentSearchDialog();
        }
    }
    disableKeysForContentDialog() {
        this.disabledKeys = this.disabledKeys
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].ARROWLEFT)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].ARROWRIGHT);
    }
    diableKeysForContentSearchDialog() {
        this.disabledKeys = this.disabledKeys
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].ARROWLEFT)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].ARROWRIGHT)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].firstCanvasGroupCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].lastCanvasGroupCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].zoomInCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].zoomOutCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].zoomHomeCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].nextHit)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].previousHit)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].toggleSearchDialogCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].toggleContentsDialogCodes)
            .concat(_models_AccessKeys__WEBPACK_IMPORTED_MODULE_11__["AccessKeys"].toggleFullscreenCodes);
    }
    resetDisabledKeys() {
        this.disabledKeys = [];
    }
    isKeyDisabled(keyCode) {
        this.updateDisabledKeys();
        return this.disabledKeys.indexOf(keyCode) > -1;
    }
}
AccessKeysService.ɵfac = function AccessKeysService_Factory(t) { return new (t || AccessKeysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_7__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_9__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_13__["IiifContentSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ContentsDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mime_dom_helper__WEBPACK_IMPORTED_MODULE_10__["MimeDomHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_12__["ContentSearchNavigationService"])); };
AccessKeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccessKeysService, factory: AccessKeysService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessKeysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_3__["ViewerService"] }, { type: _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_4__["CanvasService"] }, { type: _mode_service_mode_service__WEBPACK_IMPORTED_MODULE_7__["ModeService"] }, { type: _iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_9__["IiifManifestService"] }, { type: _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_13__["IiifContentSearchService"] }, { type: _content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogService"] }, { type: _contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ContentsDialogService"] }, { type: _mime_dom_helper__WEBPACK_IMPORTED_MODULE_10__["MimeDomHelper"] }, { type: _navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_12__["ContentSearchNavigationService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts":
/*!**************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/builder-utils.ts ***!
  \**************************************************************************************/
/*! exports provided: BuilderUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderUtils", function() { return BuilderUtils; });
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");

class BuilderUtils {
    static extractId(value) {
        return value['@id'];
    }
    static extracType(value) {
        return value['@type'];
    }
    static extractContext(value) {
        return value['@context'];
    }
    static extractViewingDirection(value) {
        if (value['viewingDirection'] === 'left-to-right') {
            return _models_viewing_direction__WEBPACK_IMPORTED_MODULE_0__["ViewingDirection"].LTR;
        }
        else if (value['viewingDirection'] === 'right-to-left') {
            return _models_viewing_direction__WEBPACK_IMPORTED_MODULE_0__["ViewingDirection"].RTL;
        }
    }
    static findCanvasIndex(canvases, sequences) {
        let index = -1;
        if (sequences[0] && sequences[0].canvases && canvases[0]) {
            index = sequences[0].canvases.findIndex((canvas) => canvas.id === canvases[0]);
        }
        return index;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/canvas.builder.ts":
/*!***************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/canvas.builder.ts ***!
  \***************************************************************************************/
/*! exports provided: CanvasBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasBuilder", function() { return CanvasBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");
/* harmony import */ var _images_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images.builder */ "../../libs/ngx-mime/src/lib/core/builders/images.builder.ts");



class CanvasBuilder {
    constructor(canvases) {
        this.canvases = canvases;
    }
    build() {
        const canvases = [];
        if (this.canvases) {
            for (let i = 0; i < this.canvases.length; i++) {
                const canvas = this.canvases[i];
                canvases.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Canvas"]({
                    id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(canvas),
                    type: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extracType(canvas),
                    label: canvas.label,
                    thumbnail: canvas.thumbnail,
                    height: canvas.height,
                    width: canvas.width,
                    images: new _images_builder__WEBPACK_IMPORTED_MODULE_2__["ImagesBuilder"](canvas.images).build()
                }));
            }
        }
        return canvases;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/images.builder.ts":
/*!***************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/images.builder.ts ***!
  \***************************************************************************************/
/*! exports provided: ImagesBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesBuilder", function() { return ImagesBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");
/* harmony import */ var _resource_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resource.builder */ "../../libs/ngx-mime/src/lib/core/builders/resource.builder.ts");



class ImagesBuilder {
    constructor(images) {
        this.images = images;
    }
    build() {
        const images = [];
        if (this.images) {
            for (let i = 0; i < this.images.length; i++) {
                const image = this.images[i];
                images.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Images"]({
                    id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(image),
                    type: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extracType(image),
                    motivation: image.motivation,
                    resource: new _resource_builder__WEBPACK_IMPORTED_MODULE_2__["ResourceBuilder"](image.resource).build(),
                    on: image.on
                }));
            }
        }
        return images;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/manifest.builder.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/manifest.builder.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManifestBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestBuilder", function() { return ManifestBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");
/* harmony import */ var _sequence_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sequence.builder */ "../../libs/ngx-mime/src/lib/core/builders/sequence.builder.ts");
/* harmony import */ var _service_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.builder */ "../../libs/ngx-mime/src/lib/core/builders/service.builder.ts");
/* harmony import */ var _metadata_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata.builder */ "../../libs/ngx-mime/src/lib/core/builders/metadata.builder.ts");
/* harmony import */ var _structure_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structure.builder */ "../../libs/ngx-mime/src/lib/core/builders/structure.builder.ts");
/* harmony import */ var _tile_source_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tile-source.builder */ "../../libs/ngx-mime/src/lib/core/builders/tile-source.builder.ts");







class ManifestBuilder {
    constructor(data) {
        this.data = data;
    }
    build() {
        const sequences = new _sequence_builder__WEBPACK_IMPORTED_MODULE_2__["SequenceBuilder"](this.data.sequences).build();
        return new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Manifest"]({
            context: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractContext(this.data),
            type: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extracType(this.data),
            id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(this.data),
            viewingDirection: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractViewingDirection(this.data),
            label: this.data.label,
            metadata: new _metadata_builder__WEBPACK_IMPORTED_MODULE_4__["MetadataBuilder"](this.data.metadata).build(),
            license: this.data.license,
            logo: this.data.logo,
            attribution: this.data.attribution,
            service: new _service_builder__WEBPACK_IMPORTED_MODULE_3__["ServiceBuilder"](this.data.service).build(),
            sequences: sequences,
            structures: new _structure_builder__WEBPACK_IMPORTED_MODULE_5__["StructureBuilder"](this.data.structures, sequences).build(),
            tileSource: new _tile_source_builder__WEBPACK_IMPORTED_MODULE_6__["TileSourceBuilder"](this.data.sequences).build(),
            viewingHint: this.data.viewingHint
        });
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/metadata.builder.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/metadata.builder.ts ***!
  \*****************************************************************************************/
/*! exports provided: MetadataBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataBuilder", function() { return MetadataBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");

class MetadataBuilder {
    constructor(metadatas) {
        this.metadatas = metadatas;
    }
    build() {
        const metadatas = [];
        if (this.metadatas) {
            for (let i = 0; i < this.metadatas.length; i++) {
                const data = this.metadatas[i];
                metadatas.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Metadata"](data.label, data.value));
            }
        }
        return metadatas;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/resource.builder.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/resource.builder.ts ***!
  \*****************************************************************************************/
/*! exports provided: ResourceBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceBuilder", function() { return ResourceBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");
/* harmony import */ var _service_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service.builder */ "../../libs/ngx-mime/src/lib/core/builders/service.builder.ts");



class ResourceBuilder {
    constructor(resource) {
        this.resource = resource;
    }
    build() {
        if (this.resource) {
            return new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Resource"]({
                id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(this.resource),
                type: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extracType(this.resource),
                format: this.resource.format,
                service: new _service_builder__WEBPACK_IMPORTED_MODULE_2__["ServiceBuilder"](this.resource.service).build(),
                height: this.resource.height,
                width: this.resource.width
            });
        }
        return null;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/search-result.builder.ts":
/*!**********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/search-result.builder.ts ***!
  \**********************************************************************************************/
/*! exports provided: SearchResultBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultBuilder", function() { return SearchResultBuilder; });
/* harmony import */ var _models_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/rect */ "../../libs/ngx-mime/src/lib/core/models/rect.ts");
/* harmony import */ var _models_search_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/search-result */ "../../libs/ngx-mime/src/lib/core/models/search-result.ts");
/* harmony import */ var _models_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../models/hit */ "../../libs/ngx-mime/src/lib/core/models/hit.ts");



class SearchResultBuilder {
    constructor(q, manifest, iiifSearchResult) {
        this.q = q;
        this.manifest = manifest;
        this.iiifSearchResult = iiifSearchResult;
    }
    build() {
        const searchResult = new _models_search_result__WEBPACK_IMPORTED_MODULE_1__["SearchResult"]();
        searchResult.q = this.q;
        const hits = [];
        if (this.iiifSearchResult && this.iiifSearchResult.hits) {
            this.iiifSearchResult.hits.forEach((hit, index) => {
                const id = index;
                let canvasIndex = -1;
                let label = null;
                const rects = [];
                if (this.manifest.sequences && this.manifest.sequences[0].canvases) {
                    const resources = this.findResources(hit);
                    for (const resource of resources) {
                        canvasIndex = this.findSequenceIndex(resource);
                        label = this.findLabel(canvasIndex);
                        const on = resource.on;
                        const coords = on.substring(on.indexOf('=') + 1).split(',');
                        const rect = new _models_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"]({
                            x: parseInt(coords[0], 10),
                            y: parseInt(coords[1], 10),
                            width: parseInt(coords[2], 10),
                            height: parseInt(coords[3], 10)
                        });
                        rects.push(rect);
                    }
                }
                searchResult.add(new _models_hit__WEBPACK_IMPORTED_MODULE_2__["Hit"]({
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
    }
    findResources(hit) {
        const resources = [];
        for (const annotation of hit.annotations) {
            const res = this.iiifSearchResult.resources.find((r) => r['@id'] === annotation);
            resources.push(res);
        }
        return resources;
    }
    findSequenceIndex(resource) {
        const firstSequence = this.manifest.sequences[0];
        const on = resource.on;
        const id = on.substring(0, on.indexOf('#'));
        return firstSequence.canvases.findIndex(c => c.id === id);
    }
    findLabel(index) {
        if (index === -1) {
            return null;
        }
        else {
            return this.manifest.sequences[0].canvases[index].label;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/sequence.builder.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/sequence.builder.ts ***!
  \*****************************************************************************************/
/*! exports provided: SequenceBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceBuilder", function() { return SequenceBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");
/* harmony import */ var _canvas_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas.builder */ "../../libs/ngx-mime/src/lib/core/builders/canvas.builder.ts");



class SequenceBuilder {
    constructor(sequences) {
        this.sequences = sequences;
    }
    build() {
        const sequences = [];
        if (this.sequences) {
            for (let i = 0; i < this.sequences.length; i++) {
                const seq = this.sequences[i];
                sequences.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Sequence"]({
                    id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(seq),
                    type: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extracType(seq),
                    label: seq.label,
                    viewingHint: seq.viewingHint,
                    canvases: new _canvas_builder__WEBPACK_IMPORTED_MODULE_2__["CanvasBuilder"](seq.canvases).build()
                }));
            }
        }
        return sequences;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/service.builder.ts":
/*!****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/service.builder.ts ***!
  \****************************************************************************************/
/*! exports provided: ServiceBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBuilder", function() { return ServiceBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");
/* harmony import */ var _sizes_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sizes.builder */ "../../libs/ngx-mime/src/lib/core/builders/sizes.builder.ts");
/* harmony import */ var _tiles_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiles.builder */ "../../libs/ngx-mime/src/lib/core/builders/tiles.builder.ts");




class ServiceBuilder {
    constructor(service) {
        this.service = service;
    }
    build() {
        if (this.service) {
            return new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Service"]({
                id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(this.service),
                context: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractContext(this.service),
                protocol: this.service.protocol,
                width: this.service.width,
                height: this.service.height,
                sizes: new _sizes_builder__WEBPACK_IMPORTED_MODULE_2__["SizesBuilder"](this.service.sizes).build(),
                tiles: new _tiles_builder__WEBPACK_IMPORTED_MODULE_3__["TilesBuilder"](this.service.tiles).build(),
                profile: this.service.profile,
                physicalScale: this.service.physicalScale,
                physicalUnits: this.service.physicalUnits,
                service: new ServiceBuilder(this.service.service).build()
            });
        }
        return null;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/sizes.builder.ts":
/*!**************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/sizes.builder.ts ***!
  \**************************************************************************************/
/*! exports provided: SizesBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizesBuilder", function() { return SizesBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");

class SizesBuilder {
    constructor(sizes) {
        this.sizes = sizes;
    }
    build() {
        const sizes = [];
        if (this.sizes) {
            for (let i = 0; i < this.sizes.length; i++) {
                const size = this.sizes[i];
                sizes.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Size"](size.width, size.height));
            }
        }
        return sizes;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/structure.builder.ts":
/*!******************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/structure.builder.ts ***!
  \******************************************************************************************/
/*! exports provided: StructureBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureBuilder", function() { return StructureBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");
/* harmony import */ var _builder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-utils */ "../../libs/ngx-mime/src/lib/core/builders/builder-utils.ts");


class StructureBuilder {
    constructor(structures, sequences) {
        this.structures = structures;
        this.sequences = sequences;
    }
    build() {
        const structures = [];
        if (this.structures) {
            for (let i = 0; i < this.structures.length; i++) {
                const structure = this.structures[i];
                structures.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Structure"]({
                    id: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extractId(structure),
                    type: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].extracType(structure),
                    label: structure.label,
                    canvases: structure.canvases,
                    canvasIndex: _builder_utils__WEBPACK_IMPORTED_MODULE_1__["BuilderUtils"].findCanvasIndex(structure.canvases, this.sequences)
                }));
            }
        }
        return structures;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/tile-source.builder.ts":
/*!********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/tile-source.builder.ts ***!
  \********************************************************************************************/
/*! exports provided: TileSourceBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileSourceBuilder", function() { return TileSourceBuilder; });
class TileSourceBuilder {
    constructor(sequences) {
        this.sequences = sequences;
    }
    build() {
        const tilesources = [];
        if (this.sequences && this.sequences.length > 0) {
            const canvases = this.sequences[0].canvases;
            for (let i = 0; i < canvases.length; i++) {
                const canvas = canvases[i];
                if (canvas) {
                    tilesources.push(canvas.images[0].resource);
                }
            }
        }
        return tilesources;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/builders/tiles.builder.ts":
/*!**************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/builders/tiles.builder.ts ***!
  \**************************************************************************************/
/*! exports provided: TilesBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesBuilder", function() { return TilesBuilder; });
/* harmony import */ var _models_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/manifest */ "../../libs/ngx-mime/src/lib/core/models/manifest.ts");

class TilesBuilder {
    constructor(tiles) {
        this.tiles = tiles;
    }
    build() {
        const tiles = [];
        if (this.tiles) {
            for (let i = 0; i < this.tiles.length; i++) {
                const tile = this.tiles[i];
                tiles.push(new _models_manifest__WEBPACK_IMPORTED_MODULE_0__["Tile"]({
                    width: tile.width,
                    scaleFactors: tile.scaleFactors
                }));
            }
        }
        return tiles;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-factory.ts":
/*!*****************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-factory.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CalculateCanvasGroupPositionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateCanvasGroupPositionFactory", function() { return CalculateCanvasGroupPositionFactory; });
/* harmony import */ var _one_page_calculate_page_position_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-page-calculate-page-position-strategy */ "../../libs/ngx-mime/src/lib/core/canvas-group-position/one-page-calculate-page-position-strategy.ts");
/* harmony import */ var _two_page_calculate_page_position_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two-page-calculate-page-position-strategy */ "../../libs/ngx-mime/src/lib/core/canvas-group-position/two-page-calculate-page-position-strategy.ts");
/* harmony import */ var _models_viewer_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");



class CalculateCanvasGroupPositionFactory {
    static create(viewerLayout, paged) {
        if (viewerLayout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_2__["ViewerLayout"].ONE_PAGE || !paged) {
            return new _one_page_calculate_page_position_strategy__WEBPACK_IMPORTED_MODULE_0__["OnePageCalculatePagePositionStrategy"]();
        }
        else if (viewerLayout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_2__["ViewerLayout"].TWO_PAGE) {
            return new _two_page_calculate_page_position_strategy__WEBPACK_IMPORTED_MODULE_1__["TwoPageCalculateCanvasGroupPositionStrategy"]();
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-utils.ts":
/*!***************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-utils.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: canvasRectFromCriteria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRectFromCriteria", function() { return canvasRectFromCriteria; });
/* harmony import */ var _models_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/rect */ "../../libs/ngx-mime/src/lib/core/models/rect.ts");

const canvasRectFromCriteria = (rotation, criteria, x) => {
    let rect = {};
    if (rotation === 90 || rotation === 270) {
        rect = {
            height: criteria.canvasSource.width,
            width: criteria.canvasSource.height,
            x: x,
            y: (criteria.canvasSource.width / 2) * -1
        };
    }
    else {
        rect = {
            height: criteria.canvasSource.height,
            width: criteria.canvasSource.width,
            x: x,
            y: (criteria.canvasSource.height / 2) * -1
        };
    }
    return new _models_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"](rect);
};


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-group-position/one-page-calculate-page-position-strategy.ts":
/*!*******************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-group-position/one-page-calculate-page-position-strategy.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: OnePageCalculatePagePositionStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnePageCalculatePagePositionStrategy", function() { return OnePageCalculatePagePositionStrategy; });
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");
/* harmony import */ var _calculate_canvas_group_position_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate-canvas-group-position-utils */ "../../libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-utils.ts");



class OnePageCalculatePagePositionStrategy {
    calculateCanvasGroupPosition(criteria, rotation = 0) {
        let x;
        if (!criteria.canvasGroupIndex) {
            if (rotation === 90 || rotation === 270) {
                x = (criteria.canvasSource.height / 2) * -1;
            }
            else {
                x = (criteria.canvasSource.width / 2) * -1;
            }
        }
        else {
            x =
                criteria.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__["ViewingDirection"].LTR
                    ? this.calculateLtrX(criteria)
                    : this.calculateRtlX(criteria);
        }
        return Object(_calculate_canvas_group_position_utils__WEBPACK_IMPORTED_MODULE_2__["canvasRectFromCriteria"])(rotation, criteria, x);
    }
    calculateLtrX(criteria) {
        return (criteria.previousCanvasGroupPosition.x +
            criteria.previousCanvasGroupPosition.width +
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_0__["ViewerOptions"].overlays.canvasGroupMarginInDashboardView);
    }
    calculateRtlX(criteria) {
        return (criteria.previousCanvasGroupPosition.x -
            criteria.previousCanvasGroupPosition.width -
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_0__["ViewerOptions"].overlays.canvasGroupMarginInDashboardView);
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-group-position/two-page-calculate-page-position-strategy.ts":
/*!*******************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-group-position/two-page-calculate-page-position-strategy.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: TwoPageCalculateCanvasGroupPositionStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoPageCalculateCanvasGroupPositionStrategy", function() { return TwoPageCalculateCanvasGroupPositionStrategy; });
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");
/* harmony import */ var _calculate_canvas_group_position_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate-canvas-group-position-utils */ "../../libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-utils.ts");



class TwoPageCalculateCanvasGroupPositionStrategy {
    calculateCanvasGroupPosition(criteria, rotation = 0) {
        let x;
        if (!criteria.canvasGroupIndex) {
            // First page
            x = 0;
        }
        else if (criteria.canvasGroupIndex % 2) {
            // Even page numbers
            x =
                criteria.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__["ViewingDirection"].LTR
                    ? this.calculateEvenLtrX(criteria)
                    : this.calculateEvenRtlX(criteria);
        }
        else {
            // Odd page numbers
            x =
                criteria.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__["ViewingDirection"].LTR
                    ? this.calculateOddLtrX(criteria)
                    : this.calculateOddRtlX(criteria);
        }
        return Object(_calculate_canvas_group_position_utils__WEBPACK_IMPORTED_MODULE_2__["canvasRectFromCriteria"])(rotation, criteria, x);
    }
    calculateEvenLtrX(criteria) {
        return (criteria.previousCanvasGroupPosition.x +
            criteria.previousCanvasGroupPosition.width +
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_0__["ViewerOptions"].overlays.canvasGroupMarginInDashboardView);
    }
    calculateOddLtrX(criteria) {
        return (criteria.previousCanvasGroupPosition.x +
            criteria.previousCanvasGroupPosition.width);
    }
    calculateEvenRtlX(criteria) {
        return (criteria.previousCanvasGroupPosition.x -
            criteria.canvasSource.width -
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_0__["ViewerOptions"].overlays.canvasGroupMarginInDashboardView);
    }
    calculateOddRtlX(criteria) {
        return criteria.previousCanvasGroupPosition.x - criteria.canvasSource.width;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-group.strategy.ts":
/*!****************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-service/canvas-group.strategy.ts ***!
  \****************************************************************************************************/
/*! exports provided: OneCanvasPerCanvasGroupStrategy, TwoCanvasPerCanvasGroupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneCanvasPerCanvasGroupStrategy", function() { return OneCanvasPerCanvasGroupStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoCanvasPerCanvasGroupStrategy", function() { return TwoCanvasPerCanvasGroupStrategy; });
/* harmony import */ var _models_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/rect */ "../../libs/ngx-mime/src/lib/core/models/rect.ts");
/* harmony import */ var _models_canvas_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/canvas-groups */ "../../libs/ngx-mime/src/lib/core/models/canvas-groups.ts");


class OneCanvasPerCanvasGroupStrategy {
    constructor() {
        this.addAll = (canvasRects) => {
            const canvasGroups = new _models_canvas_groups__WEBPACK_IMPORTED_MODULE_1__["CanvasGroups"]();
            canvasGroups.addRange(canvasRects);
            canvasGroups.canvasRects = canvasRects;
            for (let i = 0; i < canvasRects.length; i++) {
                canvasGroups.canvasesPerCanvasGroup.push([i]);
            }
            return canvasGroups;
        };
    }
}
class TwoCanvasPerCanvasGroupStrategy {
    constructor() {
        this.addAll = (canvasRects) => {
            const canvasGroups = new _models_canvas_groups__WEBPACK_IMPORTED_MODULE_1__["CanvasGroups"]();
            // Single first page
            canvasGroups.add(canvasRects[0]);
            canvasGroups.canvasRects = canvasRects;
            canvasGroups.canvasesPerCanvasGroup.push([0]);
            for (let i = 1; i < canvasRects.length; i = i + 2) {
                if (i + 1 < canvasRects.length) {
                    // Paired pages
                    const thisRect = canvasRects[i];
                    const nextRect = canvasRects[i + 1];
                    const groupedRect = new _models_rect__WEBPACK_IMPORTED_MODULE_0__["Rect"]({
                        x: Math.min(thisRect.x, nextRect.x),
                        y: Math.min(thisRect.y, nextRect.y),
                        height: Math.max(thisRect.height, nextRect.height),
                        width: thisRect.width + nextRect.width
                    });
                    canvasGroups.add(groupedRect);
                    canvasGroups.canvasesPerCanvasGroup.push([i, i + 1]);
                }
                else {
                    // Single last page, if applicable
                    canvasGroups.add(canvasRects[i]);
                    canvasGroups.canvasesPerCanvasGroup.push([i]);
                }
            }
            return canvasGroups;
        };
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-groups-strategy.factory.ts":
/*!*************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-service/canvas-groups-strategy.factory.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CanvasGroupStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroupStrategyFactory", function() { return CanvasGroupStrategyFactory; });
/* harmony import */ var _models_viewer_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");
/* harmony import */ var _canvas_group_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-group.strategy */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-group.strategy.ts");


class CanvasGroupStrategyFactory {
    static create(layout) {
        if (layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_0__["ViewerLayout"].ONE_PAGE) {
            return new _canvas_group_strategy__WEBPACK_IMPORTED_MODULE_1__["OneCanvasPerCanvasGroupStrategy"]();
        }
        else if (layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_0__["ViewerLayout"].TWO_PAGE) {
            return new _canvas_group_strategy__WEBPACK_IMPORTED_MODULE_1__["TwoCanvasPerCanvasGroupStrategy"]();
        }
        return null;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts":
/*!*********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts ***!
  \*********************************************************************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_canvas_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/canvas-groups */ "../../libs/ngx-mime/src/lib/core/models/canvas-groups.ts");
/* harmony import */ var _canvas_groups_strategy_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas-groups-strategy.factory */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-groups-strategy.factory.ts");






class CanvasService {
    constructor() {
        this._currentNumberOfCanvasGroups = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._currentCanvasGroupIndex = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.canvasGroups = new _models_canvas_groups__WEBPACK_IMPORTED_MODULE_3__["CanvasGroups"]();
        this._numberOfCanvases = 0;
    }
    addAll(canvasRects, layout) {
        this.numberOfCanvases = canvasRects.length;
        const canvasGroupStrategy = _canvas_groups_strategy_factory__WEBPACK_IMPORTED_MODULE_4__["CanvasGroupStrategyFactory"].create(layout);
        this.canvasGroups = canvasGroupStrategy.addAll(canvasRects);
        this._currentNumberOfCanvasGroups.next(this.canvasGroups.length());
    }
    reset() {
        this.numberOfCanvases = 0;
        this._currentCanvasGroupIndex.next(0);
        this.canvasGroups = new _models_canvas_groups__WEBPACK_IMPORTED_MODULE_3__["CanvasGroups"]();
    }
    get onCanvasGroupIndexChange() {
        return this._currentCanvasGroupIndex
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    get onNumberOfCanvasGroupsChange() {
        return this._currentNumberOfCanvasGroups
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    set currentCanvasGroupIndex(currentCanvasGroupIndex) {
        if (!this.isWithinBounds(currentCanvasGroupIndex)) {
            return;
        }
        this._currentCanvasGroupIndex.next(currentCanvasGroupIndex);
    }
    get currentCanvasGroupIndex() {
        return this._currentCanvasGroupIndex.value;
    }
    get numberOfCanvases() {
        return this._numberOfCanvases;
    }
    set numberOfCanvases(numberOfCanvases) {
        this._numberOfCanvases = numberOfCanvases;
    }
    get numberOfCanvasGroups() {
        return this.canvasGroups.length();
    }
    get currentCanvasIndex() {
        return this.canvasGroups.canvasesPerCanvasGroup[this.currentCanvasGroupIndex][0];
    }
    isWithinBounds(canvasGroupIndex) {
        return (canvasGroupIndex > -1 && canvasGroupIndex <= this.numberOfCanvasGroups - 1);
    }
    isCurrentCanvasGroupValid() {
        return this.isWithinBounds(this.currentCanvasGroupIndex);
    }
    // Returns -1 if next canvas index is out of bounds
    getNextCanvasGroupIndex() {
        if (!this.isWithinBounds(this.currentCanvasGroupIndex + 1)) {
            return -1;
        }
        this.currentCanvasGroupIndex++;
        return this.currentCanvasGroupIndex;
    }
    // Returns -1 if previous canvas index is out of bounds
    getPrevCanvasGroupIndex() {
        if (!this.isWithinBounds(this.currentCanvasGroupIndex - 1)) {
            return -1;
        }
        this.currentCanvasGroupIndex--;
        return this.currentCanvasGroupIndex;
    }
    constrainToRange(canvasGroupsIndex) {
        if (canvasGroupsIndex < 0) {
            return 0;
        }
        else if (canvasGroupsIndex >= this.numberOfCanvasGroups - 1) {
            return this.numberOfCanvasGroups - 1;
        }
        else {
            return canvasGroupsIndex;
        }
    }
    findClosestCanvasGroupIndex(point) {
        return this.canvasGroups.findClosestIndex(point);
    }
    findCanvasGroupByCanvasIndex(canvasIndex) {
        return this.canvasGroups.canvasesPerCanvasGroup.findIndex(function (canvasForCanvasGroup) {
            return canvasForCanvasGroup.indexOf(canvasIndex) >= 0;
        });
    }
    findCanvasByCanvasIndex(canvasIndex) {
        return this.canvasGroups.canvasesPerCanvasGroup.length === 0
            ? -1
            : this.canvasGroups.canvasesPerCanvasGroup[canvasIndex][0];
    }
    getCanvasGroupLabel(canvasGroupIndex) {
        if (!this.canvasGroups.canvasGroupRects ||
            this.canvasGroups.canvasesPerCanvasGroup.length === 0) {
            return '1';
        }
        const canvasGroup = this.canvasGroups.canvasesPerCanvasGroup[canvasGroupIndex];
        let canvasGroupLabel = '' + (canvasGroup[0] + 1);
        if (canvasGroup.length > 1) {
            canvasGroupLabel =
                canvasGroupLabel + '-' + (canvasGroup[canvasGroup.length - 1] + 1);
        }
        return canvasGroupLabel;
    }
    getCanvasesPerCanvasGroup(canvasIndex) {
        return !this.canvasGroups.canvasGroupRects
            ? [0]
            : this.canvasGroups.canvasesPerCanvasGroup[canvasIndex];
    }
    getCanvasRect(canvasIndex) {
        return this.canvasGroups.canvasRects[canvasIndex];
    }
    getCurrentCanvasGroupRect() {
        return this.getCanvasGroupRect(this.currentCanvasGroupIndex);
    }
    getCanvasGroupRect(canvasGroupIndex) {
        return this.canvasGroups.get(canvasGroupIndex);
    }
    getMaxHeight() {
        return this.canvasGroups.getMaxHeight();
    }
    getMaxWidth() {
        return this.canvasGroups.getMaxWidth();
    }
}
CanvasService.ɵfac = function CanvasService_Factory(t) { return new (t || CanvasService)(); };
CanvasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanvasService, factory: CanvasService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/click-service/click.service.ts":
/*!*******************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/click-service/click.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClickService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickService", function() { return ClickService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class ClickService {
    constructor() {
        this.clickCount = 0;
        this.click = (event) => {
            event.preventDefaultAction = true;
            if (event.quick) {
                this.clickCount++;
                if (this.clickCount === 1) {
                    this.dblClickTimeOut = setTimeout(() => {
                        this.clickCount = 0;
                        this.triggerSingleClick(event);
                    }, event.tracker.dblClickTimeThreshold);
                }
                else if (this.clickCount === 2) {
                    clearTimeout(this.dblClickTimeOut);
                    this.clickCount = 0;
                    this.triggerDoubleClick(event);
                }
            }
        };
        this.reset();
    }
    reset() {
        this.singleClickHandlers = [];
        this.doubleClickHandlers = [];
    }
    addSingleClickHandler(singleClickHandler) {
        this.singleClickHandlers.push(singleClickHandler);
    }
    addDoubleClickHandler(doubleClickHandler) {
        this.doubleClickHandlers.push(doubleClickHandler);
    }
    triggerSingleClick(event) {
        this.singleClickHandlers.forEach((handler) => {
            handler(event);
        });
    }
    triggerDoubleClick(event) {
        this.doubleClickHandlers.forEach((handler) => {
            handler(event);
        });
    }
}
ClickService.ɵfac = function ClickService_Factory(t) { return new (t || ClickService)(); };
ClickService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClickService, factory: ClickService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/core.module.ts":
/*!***************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/core.module.ts ***!
  \***************************************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner-service/spinner.service */ "../../libs/ngx-mime/src/lib/core/spinner-service/spinner.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _intl_viewer_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fullscreen-service/fullscreen.service */ "../../libs/ngx-mime/src/lib/core/fullscreen-service/fullscreen.service.ts");
/* harmony import */ var _viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _mode_service_mode_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mode-service/mode.service */ "../../libs/ngx-mime/src/lib/core/mode-service/mode.service.ts");
/* harmony import */ var _click_service_click_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./click-service/click.service */ "../../libs/ngx-mime/src/lib/core/click-service/click.service.ts");
/* harmony import */ var _viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewer-layout-service/viewer-layout-service */ "../../libs/ngx-mime/src/lib/core/viewer-layout-service/viewer-layout-service.ts");
/* harmony import */ var _access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./access-keys-handler-service/access-keys.service */ "../../libs/ngx-mime/src/lib/core/access-keys-handler-service/access-keys.service.ts");
/* harmony import */ var _navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/content-search-navigation-service/content-search-navigation.service */ "../../libs/ngx-mime/src/lib/core/navigation/content-search-navigation-service/content-search-navigation.service.ts");
/* harmony import */ var _style_service_style_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./style-service/style.service */ "../../libs/ngx-mime/src/lib/core/style-service/style.service.ts");
















class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        _intl_viewer_intl__WEBPACK_IMPORTED_MODULE_2__["MimeViewerIntl"],
        _iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_3__["IiifManifestService"],
        _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_4__["IiifContentSearchService"],
        _mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"],
        _fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_7__["FullscreenService"],
        _viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_8__["ViewerService"],
        _click_service_click_service__WEBPACK_IMPORTED_MODULE_10__["ClickService"],
        _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__["CanvasService"],
        _mode_service_mode_service__WEBPACK_IMPORTED_MODULE_9__["ModeService"],
        _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_0__["SpinnerService"],
        _access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_12__["AccessKeysService"],
        _viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_11__["ViewerLayoutService"],
        _navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_13__["ContentSearchNavigationService"],
        _style_service_style_service__WEBPACK_IMPORTED_MODULE_14__["StyleService"]
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [
                    _intl_viewer_intl__WEBPACK_IMPORTED_MODULE_2__["MimeViewerIntl"],
                    _iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_3__["IiifManifestService"],
                    _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_4__["IiifContentSearchService"],
                    _mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"],
                    _fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_7__["FullscreenService"],
                    _viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_8__["ViewerService"],
                    _click_service_click_service__WEBPACK_IMPORTED_MODULE_10__["ClickService"],
                    _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_5__["CanvasService"],
                    _mode_service_mode_service__WEBPACK_IMPORTED_MODULE_9__["ModeService"],
                    _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_0__["SpinnerService"],
                    _access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_12__["AccessKeysService"],
                    _viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_11__["ViewerLayoutService"],
                    _navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_13__["ContentSearchNavigationService"],
                    _style_service_style_service__WEBPACK_IMPORTED_MODULE_14__["StyleService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/ext/svg-overlay.ts":
/*!*******************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/ext/svg-overlay.ts ***!
  \*******************************************************************************/
/*! exports provided: createSvgOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgOverlay", function() { return createSvgOverlay; });
// OpenSeadragon SVG Overlay plugin 0.0.4
function createSvgOverlay() {
    if (!OpenSeadragon) {
        console.error('[openseadragon-svg-overlay] requires OpenSeadragon');
        return;
    }
    const svgNS = 'http://www.w3.org/2000/svg';
    // ----------
    class Overlay {
        constructor(viewer) {
            const self = this;
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
        node() {
            return this._node;
        }
        // ----------
        resize() {
            if (this._containerWidth !== this._viewer.container.clientWidth) {
                this._containerWidth = this._viewer.container.clientWidth;
                this._svg.setAttribute('width', this._containerWidth);
            }
            if (this._containerHeight !== this._viewer.container.clientHeight) {
                this._containerHeight = this._viewer.container.clientHeight;
                this._svg.setAttribute('height', this._containerHeight);
            }
            const p = this._viewer.viewport.pixelFromPoint(new OpenSeadragon.Point(0, 0), true);
            const zoom = this._viewer.viewport.getZoom(true);
            const rotation = this._viewer.viewport.getRotation();
            // TODO: Expose an accessor for _containerInnerSize in the OSD API so we don't have to use the private variable.
            const scale = this._viewer.viewport._containerInnerSize.x * zoom;
            this._node.setAttribute('transform', 'translate(' +
                p.x +
                ',' +
                p.y +
                ') scale(' +
                scale +
                ') rotate(' +
                rotation +
                ')');
        }
        // ----------
        onClick(node, handler) {
            // TODO: Fast click for mobile browsers
            new OpenSeadragon.MouseTracker({
                element: node,
                clickHandler: handler
            }).setTracking(true);
        }
    }
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


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/fullscreen-service/fullscreen.service.ts":
/*!*****************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/fullscreen-service/fullscreen.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FullscreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenService", function() { return FullscreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class FullscreenService {
    constructor() {
        this.changeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.onchange();
    }
    get onChange() {
        return this.changeSubject.asObservable();
    }
    isEnabled() {
        const d = document;
        return (d.fullscreenEnabled ||
            d.webkitFullscreenEnabled ||
            d.mozFullScreenEnabled ||
            d.msFullscreenEnabled);
    }
    isFullscreen() {
        const d = document;
        return (d.fullscreenElement ||
            d.webkitFullscreenElement ||
            d.mozFullScreenElement ||
            d.msFullscreenElement);
    }
    toggle(el) {
        this.isFullscreen() ? this.closeFullscreen(el) : this.openFullscreen(el);
    }
    onchange() {
        const d = document;
        const func = () => {
            this.changeSubject.next(true);
        };
        if (d.fullscreenEnabled) {
            document.addEventListener('fullscreenchange', func);
        }
        else if (d.webkitFullscreenEnabled) {
            document.addEventListener('webkitfullscreenchange', func);
        }
        else if (d.mozFullScreenEnabled) {
            document.addEventListener('mozfullscreenchange', func);
        }
        else if (d.msFullscreenEnabled) {
            document.addEventListener('msfullscreenchange', func);
        }
    }
    openFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }
    closeFullscreen(elem) {
        const d = document;
        if (d.exitFullscreen) {
            d.exitFullscreen();
        }
        else if (d.mozCancelFullScreen) {
            d.mozCancelFullScreen();
        }
        else if (d.webkitExitFullscreen) {
            d.webkitExitFullscreen();
        }
        else if (d.msExitFullscreen) {
            d.msExitFullscreen();
        }
    }
}
FullscreenService.ɵfac = function FullscreenService_Factory(t) { return new (t || FullscreenService)(); };
FullscreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FullscreenService, factory: FullscreenService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullscreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: IiifContentSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IiifContentSearchService", function() { return IiifContentSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _builders_search_result_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../builders/search-result.builder */ "../../libs/ngx-mime/src/lib/core/builders/search-result.builder.ts");
/* harmony import */ var _models_search_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/search-result */ "../../libs/ngx-mime/src/lib/core/models/search-result.ts");








class IiifContentSearchService {
    constructor(http) {
        this.http = http;
        this._currentSearchResult = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_search_result__WEBPACK_IMPORTED_MODULE_5__["SearchResult"]({}));
        this._searching = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this._currentQ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._selected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    destroy() {
        this._currentSearchResult.next(new _models_search_result__WEBPACK_IMPORTED_MODULE_5__["SearchResult"]({}));
        this._selected.next(null);
    }
    get onQChange() {
        return this._currentQ.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    get onChange() {
        return this._currentSearchResult.asObservable();
    }
    get isSearching() {
        return this._searching.asObservable();
    }
    get onSelected() {
        return this._selected.asObservable();
    }
    search(manifest, q) {
        this._currentQ.next(q);
        this._selected.next(null);
        if (q.length === 0) {
            this._currentSearchResult.next(new _models_search_result__WEBPACK_IMPORTED_MODULE_5__["SearchResult"]());
            return;
        }
        if (!manifest.service || manifest.service === null) {
            return;
        }
        this._searching.next(true);
        this.http
            .get(`${manifest.service.id}?q=${q}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this._searching.next(false)))
            .subscribe((res) => this._currentSearchResult.next(this.extractData(q, manifest, res)), (err) => this.handleError);
    }
    selected(hit) {
        this._selected.next(hit);
    }
    extractData(q, manifest, iiifSearchResult) {
        return new _builders_search_result_builder__WEBPACK_IMPORTED_MODULE_4__["SearchResultBuilder"](q, manifest, iiifSearchResult).build();
    }
    handleError(err) {
        let errMsg;
        if (err.error instanceof Error) {
            errMsg = err.error.message;
        }
        else {
            errMsg = err.error;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg);
    }
}
IiifContentSearchService.ɵfac = function IiifContentSearchService_Factory(t) { return new (t || IiifContentSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IiifContentSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IiifContentSearchService, factory: IiifContentSearchService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IiifContentSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts":
/*!***********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: IiifManifestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IiifManifestService", function() { return IiifManifestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _builders_manifest_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../builders/manifest.builder */ "../../libs/ngx-mime/src/lib/core/builders/manifest.builder.ts");
/* harmony import */ var _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../spinner-service/spinner.service */ "../../libs/ngx-mime/src/lib/core/spinner-service/spinner.service.ts");
/* harmony import */ var _intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");











class IiifManifestService {
    constructor(intl, http, spinnerService) {
        this.intl = intl;
        this.http = http;
        this.spinnerService = spinnerService;
        this._currentManifest = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    get currentManifest() {
        return this._currentManifest.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(m => m !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    get errorMessage() {
        return this._errorMessage.asObservable();
    }
    load(manifestUri) {
        if (manifestUri === null) {
            this._errorMessage.next(this.intl.manifestUriMissingLabel);
        }
        else {
            this.spinnerService.show();
            this.http
                .get(manifestUri)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.spinnerService.hide()))
                .subscribe((response) => {
                const manifest = this.extractData(response);
                if (this.isManifestValid(manifest)) {
                    this._currentManifest.next(manifest);
                }
                else {
                    this._errorMessage.next(this.intl.manifestNotValidLabel);
                }
            }, (err) => {
                this._errorMessage.next(this.handleError(err));
            });
        }
    }
    destroy() {
        this.resetCurrentManifest();
        this.resetErrorMessage();
    }
    resetCurrentManifest() {
        this._currentManifest.next(null);
    }
    resetErrorMessage() {
        this._errorMessage.next(null);
    }
    extractData(response) {
        return new _builders_manifest_builder__WEBPACK_IMPORTED_MODULE_4__["ManifestBuilder"](response).build();
    }
    isManifestValid(manifest) {
        return manifest && manifest.tileSource && manifest.tileSource.length > 0;
    }
    handleError(err) {
        let errMsg;
        if (err.error instanceof Object) {
            errMsg = err.message;
        }
        else {
            errMsg = err.error;
        }
        return errMsg;
    }
}
IiifManifestService.ɵfac = function IiifManifestService_Factory(t) { return new (t || IiifManifestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"])); };
IiifManifestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IiifManifestService, factory: IiifManifestService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IiifManifestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__["MimeViewerIntl"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-utils.ts":
/*!*********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-utils.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ManifestUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestUtils", function() { return ManifestUtils; });
class ManifestUtils {
    static isManifestPaged(manifest) {
        return (manifest &&
            (manifest.viewingHint === 'paged' ||
                (manifest.sequences && manifest.sequences[0].viewingHint === 'paged')));
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/intl/help-intl.lt.ts":
/*!*********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/intl/help-intl.lt.ts ***!
  \*********************************************************************************/
/*! exports provided: HelpIntlLt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIntlLt", function() { return HelpIntlLt; });
/* harmony import */ var _help_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-intl */ "../../libs/ngx-mime/src/lib/core/intl/help-intl.ts");

class HelpIntlLt extends _help_intl__WEBPACK_IMPORTED_MODULE_0__["HelpIntl"] {
    constructor() {
        super(...arguments);
        this.helpLabel = 'Pagalba';
        this.line1 = '<strong>RODYKLĖ KAIRĖN</strong> arba <strong>PAGE UP</strong>: Buvęs puslapis';
        this.line2 = '<strong>RODYKLĖ DEŠINĖN</strong> arba <strong>PAGE DOWN</strong>: Kitas puslapis';
        this.line3 = '<strong>HOME</strong>: Pirmas puslapis';
        this.line4 = '<strong>END</strong>: Paskutinis puslapis';
        this.line5 = '<strong>C</strong>: Turinio langas su daugiau informacijos apie objektą. (Uždaromas paspaudus <strong>ESC</strong>.)';
        this.line6 = '<strong>S</strong>: Paieška objekto viduje. (Uždaroma paspaudus <strong>ESC</strong>.)';
        this.line7 = '<strong>N</strong>: Kitas rezultatas';
        this.line8 = '<strong>P</strong>: Buvęs rezultatas';
        this.line9 = '<strong>F</strong>: Pilno ekrano režimas (Uždaroma paspaudus <strong>F</strong> arba <strong>ESC</strong>.)';
        this.line10 = '<strong>R</strong>: Pasukti 90 laipsnių';
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/intl/help-intl.no_nb.ts":
/*!************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/intl/help-intl.no_nb.ts ***!
  \************************************************************************************/
/*! exports provided: HelpIntlNoNb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIntlNoNb", function() { return HelpIntlNoNb; });
/* harmony import */ var _help_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-intl */ "../../libs/ngx-mime/src/lib/core/intl/help-intl.ts");

class HelpIntlNoNb extends _help_intl__WEBPACK_IMPORTED_MODULE_0__["HelpIntl"] {
    constructor() {
        super(...arguments);
        this.helpLabel = 'Hjelp';
        this.line1 = '<strong>PIL VENSTRE</strong> eller <strong>PAGE UP</strong>: Gå til forrige side';
        this.line2 = '<strong>PIL HØYRE</strong> eller <strong>PAGE DOWN</strong>: Gå til neste side';
        this.line3 = '<strong>HOME</strong>: Gå til første side';
        this.line4 = '<strong>END</strong>: Gå til siste side';
        this.line5 = '<strong>C</strong>: Slår innholdsfanen på, og viser mer informasjon/metadata om objektet. (Lukk med <strong>ESC</strong>-tasten.)';
        this.line6 = '<strong>S</strong>: Åpner søkefeltet for søk i objektet. (Lukk med <strong>ESC</strong>-tasten.)';
        this.line7 = '<strong>N</strong>: Går til neste treff i objektet';
        this.line8 = '<strong>P</strong>: Går til forrige treff i objektet';
        this.line9 = '<strong>F</strong>: Fullskjerm av og på (Lukk med <strong>F</strong> eller <strong>ESC</strong>-tasten.)';
        this.line10 = '<strong>R</strong>: Rotér 90°';
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/intl/help-intl.ts":
/*!******************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/intl/help-intl.ts ***!
  \******************************************************************************/
/*! exports provided: HelpIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIntl", function() { return HelpIntl; });
class HelpIntl {
    constructor() {
        this.helpLabel = 'Help';
        this.line1 = '<strong>ARROW LEFT</strong> or <strong>PAGE UP</strong>: Previous page';
        this.line2 = '<strong>ARROW RIGHT</strong> or <strong>PAGE DOWN</strong>: Next page';
        this.line3 = '<strong>HOME</strong>: Go to first page';
        this.line4 = '<strong>END</strong>: Go to last page';
        this.line5 = '<strong>C</strong>: Contents window with more information/metadata about the object. (Close with <strong>ESC</strong>.)';
        this.line6 = '<strong>S</strong>: Search inside the object. (Close with <strong>ESC</strong>.)';
        this.line7 = '<strong>N</strong>: Next result';
        this.line8 = '<strong>P</strong>: Previous result';
        this.line9 = '<strong>F</strong>: Fullscreen on/off (Close with <strong>F</strong> or <strong>ESC</strong>.)';
        this.line10 = '<strong>R</strong>: Rotate 90°';
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.lt.ts":
/*!***********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/intl/viewer-intl.lt.ts ***!
  \***********************************************************************************/
/*! exports provided: MimeViewerIntlLt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeViewerIntlLt", function() { return MimeViewerIntlLt; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _viewer_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _help_intl_lt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-intl.lt */ "../../libs/ngx-mime/src/lib/core/intl/help-intl.lt.ts");




class MimeViewerIntlLt extends _viewer_intl__WEBPACK_IMPORTED_MODULE_1__["MimeViewerIntl"] {
    constructor() {
        super(...arguments);
        this.help = new _help_intl_lt__WEBPACK_IMPORTED_MODULE_2__["HelpIntlLt"]();
        this.closeLabel = 'Uždaryti';
        this.attributionLabel = 'Teisių priskyrimas';
        this.attributonCloseAriaLabel = 'Uždaryti teisių priskyrimo langą';
        this.contentsLabel = 'Informacija apie objektą';
        this.twoPageViewLabel = 'Atvaizduoti po du puslapius';
        this.singlePageViewLabel = 'Atvaizduoti po vieną puslapį';
        this.metadataLabel = 'Metaduomenys';
        this.licenseLabel = 'Licencija';
        this.tocLabel = 'Turinys';
        this.fullScreenLabel = 'Pilno ekrano režimas';
        this.exitFullScreenLabel = 'Išeiti iš pilno ekrano režimo';
        this.zoomInLabel = 'Priartinti';
        this.zoomOutLabel = 'Atitolinti';
        this.previousPageLabel = 'Buvęs puslapis';
        this.nextPageLabel = 'Kitas puslapis';
        this.homeLabel = 'Grįžti į pradžią';
        this.rotateCwLabel = 'Pasukti 90°';
        this.searchLabel = 'Paieška';
        this.clearSearchLabel = 'Išvalyti';
        this.previousHitLabel = 'Buvęs rezultatas';
        this.nextHitLabel = 'Kitas rezultatas';
        this.goToPageLabel = 'Persikelti į puslapį';
        this.currentPageLabel = 'Dabartinis puslapis';
        this.enterPageNumber = 'Įveskite puslapio numerį';
        this.dropDisabled = 'Atleiskite, bet veiksmas negalimas';
        // ERRORS
        this.somethingHasGoneWrongLabel = 'Objekto atvaizduoti nepavyko...';
        this.manifestUriMissingLabel = 'Nerastas objektų sąrašo identifikatorius (ManifestUri)';
        this.manifestNotValidLabel = 'Netinkamas objektų sąrašas (Manifest)';
        this.pageDoesNotExists = 'Nepavyko rasti šio paslapio';
        this.noResultsFoundLabel = (q) => {
            return `Objekte nerasta atitikmenų <em class="current-search">${q}</em>`;
        };
        this.resultsFoundLabel = (numberOfHits, q) => {
            return `${numberOfHits} rezultata${numberOfHits === 1 ? 's' : 'i'} su <em class="current-search">${q}</em>`;
        };
        this.currentHitLabel = (currentHit, numberOfHits) => {
            return `${currentHit} iš ${numberOfHits} atitikmenų`;
        };
    }
}
MimeViewerIntlLt.ɵfac = function MimeViewerIntlLt_Factory(t) { return ɵMimeViewerIntlLt_BaseFactory(t || MimeViewerIntlLt); };
MimeViewerIntlLt.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MimeViewerIntlLt, factory: MimeViewerIntlLt.ɵfac });
const ɵMimeViewerIntlLt_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MimeViewerIntlLt);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MimeViewerIntlLt, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.no_nb.ts":
/*!**************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/intl/viewer-intl.no_nb.ts ***!
  \**************************************************************************************/
/*! exports provided: MimeViewerIntlNoNb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeViewerIntlNoNb", function() { return MimeViewerIntlNoNb; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _viewer_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _help_intl_no_nb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-intl.no_nb */ "../../libs/ngx-mime/src/lib/core/intl/help-intl.no_nb.ts");




class MimeViewerIntlNoNb extends _viewer_intl__WEBPACK_IMPORTED_MODULE_1__["MimeViewerIntl"] {
    constructor() {
        super(...arguments);
        this.help = new _help_intl_no_nb__WEBPACK_IMPORTED_MODULE_2__["HelpIntlNoNb"]();
        this.closeLabel = 'Lukk';
        this.attributionLabel = 'Tillatelse';
        this.attributonCloseAriaLabel = 'Steng tillatelse dialog';
        this.contentsLabel = 'Innhold';
        this.twoPageViewLabel = 'Tosidevisning';
        this.singlePageViewLabel = 'Enkeltsidevisning';
        this.metadataLabel = 'Metadata';
        this.licenseLabel = 'Lisens';
        this.tocLabel = 'Innholdsfortegnelse';
        this.fullScreenLabel = 'Fullskjerm';
        this.exitFullScreenLabel = 'Avslutt fullskjerm';
        this.zoomInLabel = 'Zoom inn';
        this.zoomOutLabel = 'Zoom ut';
        this.previousPageLabel = 'Forrige side';
        this.nextPageLabel = 'Neste side';
        this.homeLabel = 'Hjem';
        this.rotateCwLabel = 'Rotér 90°';
        this.searchLabel = 'Søk';
        this.clearSearchLabel = 'Tøm';
        this.previousHitLabel = 'Forrige treff';
        this.nextHitLabel = 'Neste treff';
        this.goToPageLabel = 'Gå til side';
        this.currentPageLabel = 'Nåværende side';
        this.enterPageNumber = 'Skriv inn sidenummer';
        this.dropDisabled = 'Beklager, men drag and drop er ikke aktivert';
        // ERRORS
        this.somethingHasGoneWrongLabel = 'Å nei! Noe har gått galt...';
        this.manifestUriMissingLabel = 'Lenke til manifest mangler';
        this.manifestNotValidLabel = 'Manifestet er ikke gyldig';
        this.pageDoesNotExists = 'Beklager, men den siden finnes ikke';
        this.noResultsFoundLabel = (q) => {
            return `Ingen treff funnet for <em class="current-search">${q}</em>`;
        };
        this.resultsFoundLabel = (numberOfHits, q) => {
            return `${numberOfHits} treff funnet for <em class="current-search">${q}</em>`;
        };
        this.currentHitLabel = (currentHit, numberOfHits) => {
            return `${currentHit} av ${numberOfHits} treff`;
        };
    }
}
MimeViewerIntlNoNb.ɵfac = function MimeViewerIntlNoNb_Factory(t) { return ɵMimeViewerIntlNoNb_BaseFactory(t || MimeViewerIntlNoNb); };
MimeViewerIntlNoNb.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MimeViewerIntlNoNb, factory: MimeViewerIntlNoNb.ɵfac });
const ɵMimeViewerIntlNoNb_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MimeViewerIntlNoNb);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MimeViewerIntlNoNb, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts":
/*!********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/intl/viewer-intl.ts ***!
  \********************************************************************************/
/*! exports provided: MimeViewerIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeViewerIntl", function() { return MimeViewerIntl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _help_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-intl */ "../../libs/ngx-mime/src/lib/core/intl/help-intl.ts");




class MimeViewerIntl {
    constructor() {
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.help = new _help_intl__WEBPACK_IMPORTED_MODULE_2__["HelpIntl"]();
        this.closeLabel = 'Close';
        this.attributionLabel = 'Attribution';
        this.attributonCloseAriaLabel = 'Close attribution dialog';
        this.contentsLabel = 'Contents';
        this.twoPageViewLabel = 'Two page display';
        this.singlePageViewLabel = 'Single page display';
        this.metadataLabel = 'Metadata';
        this.licenseLabel = 'License';
        this.tocLabel = 'Table of Contents';
        this.fullScreenLabel = 'Full screen';
        this.exitFullScreenLabel = 'Exit full screen';
        this.zoomInLabel = 'Zoom in';
        this.zoomOutLabel = 'Zoom out';
        this.previousPageLabel = 'Previous Page';
        this.nextPageLabel = 'Next Page';
        this.homeLabel = 'Go Home';
        this.rotateCwLabel = 'Rotate 90°';
        this.searchLabel = 'Search';
        this.clearSearchLabel = 'Clear';
        this.previousHitLabel = 'Previous Hit';
        this.nextHitLabel = 'Next Hit';
        this.goToPageLabel = 'Go to page';
        this.currentPageLabel = 'Current page';
        this.enterPageNumber = 'Enter page number';
        this.dropDisabled = 'Sorry, but drag and drop is disabled';
        // ERRORS
        this.somethingHasGoneWrongLabel = 'Oh dear, something has gone terribly wrong...';
        this.manifestUriMissingLabel = 'ManifestUri is missing';
        this.manifestNotValidLabel = 'Manifest is not valid';
        this.pageDoesNotExists = 'Sorry, that page does not exist';
        this.noResultsFoundLabel = (q) => {
            return `No results found for <em class="current-search">${q}</em>`;
        };
        this.resultsFoundLabel = (numberOfHits, q) => {
            return `${numberOfHits} results found for <em class="current-search">${q}</em>`;
        };
        this.currentHitLabel = (currentHit, numberOfHits) => {
            return `${currentHit} of ${numberOfHits} hits`;
        };
    }
}
MimeViewerIntl.ɵfac = function MimeViewerIntl_Factory(t) { return new (t || MimeViewerIntl)(); };
MimeViewerIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MimeViewerIntl, factory: MimeViewerIntl.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MimeViewerIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts":
/*!*******************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/mime-dom-helper.ts ***!
  \*******************************************************************************/
/*! exports provided: MimeDomHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeDomHelper", function() { return MimeDomHelper; });
/* harmony import */ var _fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreen-service/fullscreen.service */ "../../libs/ngx-mime/src/lib/core/fullscreen-service/fullscreen.service.ts");
/* harmony import */ var _models_dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");





class MimeDomHelper {
    constructor(fullscreen) {
        this.fullscreen = fullscreen;
    }
    getBoundingClientRect(el) {
        try {
            if (this.isDocumentInFullScreenMode() &&
                el.nativeElement.nodeName === 'MIME-VIEWER') {
                return this.createFullscreenDimensions(el);
            }
            else {
                return this.createDimensions(el);
            }
        }
        catch (e) {
            return new _models_dimensions__WEBPACK_IMPORTED_MODULE_1__["Dimensions"]();
        }
    }
    isDocumentInFullScreenMode() {
        return this.fullscreen.isFullscreen();
    }
    toggleFullscreen() {
        const el = document.getElementById('mimeViewer');
        if (this.fullscreen.isEnabled()) {
            this.fullscreen.toggle(el);
        }
    }
    setFocusOnViewer() {
        const el = document.getElementById('mimeViewer');
        if (el) {
            el.focus();
        }
    }
    createFullscreenDimensions(el) {
        const dimensions = el.nativeElement.getBoundingClientRect();
        const width = this.getFullscreenWidth();
        const height = this.getFullscreenHeight();
        return new _models_dimensions__WEBPACK_IMPORTED_MODULE_1__["Dimensions"](Object.assign(Object.assign({}, dimensions), { top: 0, bottom: height, width: width, height: height, left: 0, right: width }));
    }
    createDimensions(el) {
        const dimensions = el.nativeElement.getBoundingClientRect();
        return new _models_dimensions__WEBPACK_IMPORTED_MODULE_1__["Dimensions"]({
            top: dimensions.top,
            bottom: dimensions.bottom,
            width: dimensions.width,
            height: dimensions.height,
            left: dimensions.left,
            right: dimensions.right
        });
    }
    getFullscreenWidth() {
        return (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth);
    }
    getFullscreenHeight() {
        return (window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight);
    }
}
MimeDomHelper.ɵfac = function MimeDomHelper_Factory(t) { return new (t || MimeDomHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_0__["FullscreenService"])); };
MimeDomHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MimeDomHelper, factory: MimeDomHelper.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MimeDomHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_0__["FullscreenService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts":
/*!*******************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MimeResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeResizeService", function() { return MimeResizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _models_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");






class MimeResizeService {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.dimensions = new _models_dimensions__WEBPACK_IMPORTED_MODULE_3__["Dimensions"]();
    }
    set el(el) {
        this._el = el;
    }
    get el() {
        return this._el;
    }
    get onResize() {
        return this.resizeSubject.asObservable();
    }
    markForCheck() {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        if (this.dimensions.bottom !== dimensions.bottom ||
            this.dimensions.height !== dimensions.height ||
            this.dimensions.left !== dimensions.left ||
            this.dimensions.right !== dimensions.right ||
            this.dimensions.top !== dimensions.top ||
            this.dimensions.width !== dimensions.width) {
            this.dimensions = dimensions;
            this.resizeSubject.next(Object.assign({}, this.dimensions));
        }
    }
}
MimeResizeService.ɵfac = function MimeResizeService_Factory(t) { return new (t || MimeResizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"])); };
MimeResizeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MimeResizeService, factory: MimeResizeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MimeResizeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/mime-viewer-config.ts":
/*!**********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/mime-viewer-config.ts ***!
  \**********************************************************************************/
/*! exports provided: MimeViewerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeViewerConfig", function() { return MimeViewerConfig; });
/* harmony import */ var _models_viewer_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");


class MimeViewerConfig {
    constructor(fields) {
        this.attributionDialogEnabled = true;
        this.attributionDialogHideTimeout = -1;
        this.navigationControlEnabled = true;
        this.initViewerMode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_1__["ViewerMode"].PAGE;
        this.initViewerLayout = _models_viewer_layout__WEBPACK_IMPORTED_MODULE_0__["ViewerLayout"].TWO_PAGE;
        this.withCredentials = false;
        this.loadTilesWithAjax = false;
        this.crossOriginPolicy = false;
        this.ajaxHeaders = null;
        this.preserveZoomOnCanvasGroupChange = false;
        this.startOnTopOnCanvasGroupChange = false;
        this.isDropEnabled = false;
        if (fields) {
            this.attributionDialogEnabled =
                fields.attributionDialogEnabled !== undefined
                    ? fields.attributionDialogEnabled
                    : this.attributionDialogEnabled;
            this.attributionDialogHideTimeout =
                fields.attributionDialogHideTimeout ||
                    this.attributionDialogHideTimeout;
            this.navigationControlEnabled =
                fields.navigationControlEnabled !== undefined
                    ? fields.navigationControlEnabled
                    : this.navigationControlEnabled;
            this.initViewerMode =
                fields.initViewerMode !== undefined
                    ? fields.initViewerMode
                    : this.initViewerMode;
            this.initViewerLayout =
                fields.initViewerLayout !== undefined
                    ? fields.initViewerLayout
                    : this.initViewerLayout;
            this.withCredentials =
                fields.withCredentials !== undefined
                    ? fields.withCredentials
                    : this.withCredentials;
            this.loadTilesWithAjax =
                fields.loadTilesWithAjax !== undefined
                    ? fields.loadTilesWithAjax
                    : this.loadTilesWithAjax;
            this.crossOriginPolicy =
                fields.crossOriginPolicy !== undefined
                    ? fields.crossOriginPolicy
                    : this.crossOriginPolicy;
            this.ajaxHeaders =
                fields.ajaxHeaders !== undefined
                    ? fields.ajaxHeaders
                    : this.ajaxHeaders;
            this.preserveZoomOnCanvasGroupChange =
                fields.preserveZoomOnCanvasGroupChange !== undefined
                    ? fields.preserveZoomOnCanvasGroupChange
                    : this.preserveZoomOnCanvasGroupChange;
            this.startOnTopOnCanvasGroupChange =
                fields.startOnTopOnCanvasGroupChange !== undefined
                    ? fields.startOnTopOnCanvasGroupChange
                    : this.startOnTopOnCanvasGroupChange;
            this.isDropEnabled =
                fields.isDropEnabled !== undefined
                    ? fields.isDropEnabled
                    : this.isDropEnabled;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/mode-service/mode.service.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/mode-service/mode.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeService", function() { return ModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_modeChanges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/modeChanges */ "../../libs/ngx-mime/src/lib/core/models/modeChanges.ts");
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");






class ModeService {
    constructor() {
        this.toggleModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.modeChanges = new _models_modeChanges__WEBPACK_IMPORTED_MODULE_3__["ModeChanges"]();
    }
    get onChange() {
        return this.toggleModeSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    set mode(mode) {
        this._mode = mode;
        this.change();
    }
    get mode() {
        return this._mode;
    }
    set initialMode(mode) {
        this._initialMode = mode;
        this.mode = mode;
    }
    get initialMode() {
        return this._initialMode;
    }
    toggleMode() {
        if (this.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].DASHBOARD) {
            this.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE;
        }
        else if (this.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE ||
            this.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE_ZOOMED) {
            this.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].DASHBOARD;
        }
    }
    change() {
        this.modeChanges.previousValue = this.modeChanges.currentValue;
        this.modeChanges.currentValue = this._mode;
        this.toggleModeSubject.next(Object.assign({}, this.modeChanges));
    }
}
ModeService.ɵfac = function ModeService_Factory(t) { return new (t || ModeService)(); };
ModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModeService, factory: ModeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/AccessKeys.ts":
/*!*********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/AccessKeys.ts ***!
  \*********************************************************************************/
/*! exports provided: AccessKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessKeys", function() { return AccessKeys; });
class AccessKeys {
    constructor(event) {
        this.altKey = false;
        this.shiftKey = false;
        this.ctrlkey = false;
        this.keyCode = event.keyCode;
        this.altKey = event.altKey;
        this.shiftKey = event.shiftKey;
        this.ctrlkey = event.ctrlKey;
    }
    isArrowRightKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.ARROWRIGHT);
    }
    isArrowLeftKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.ARROWLEFT);
    }
    isPageUpKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.PAGEUP);
    }
    isPageDownKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.PAGEDOWN);
    }
    isFirstCanvasGroupKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.firstCanvasGroupCodes));
    }
    isLastCanvasGroupKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.lastCanvasGroupCodes));
    }
    isSliderKeys() {
        return (this.isArrowLeftKeys() ||
            this.isArrowRightKeys() ||
            this.isPageDownKeys() ||
            this.isPageUpKeys() ||
            this.isFirstCanvasGroupKeys() ||
            this.isLastCanvasGroupKeys());
    }
    isZoomInKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.zoomInCodes));
    }
    isZoomOutKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.zoomOutCodes));
    }
    isZoomHomeKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.zoomHomeCodes));
    }
    isNextHitKeys() {
        return !this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.nextHit);
    }
    isPreviousHitKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.previousHit));
    }
    isSearchDialogKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.toggleSearchDialogCodes));
    }
    isContentsDialogKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.toggleContentsDialogCodes));
    }
    isFullscreenKeys() {
        return (!this.isMultiKeys() &&
            this.arrayContainsKeys(AccessKeys.toggleFullscreenCodes));
    }
    isResetSearchKeys() {
        return (this.isShiftPressed() && this.arrayContainsKeys(AccessKeys.resetSearch));
    }
    isRotateKeys() {
        return (!this.isMultiKeys() && this.arrayContainsKeys(AccessKeys.rotateCwCodes));
    }
    isMultiKeys() {
        return this.altKey || this.shiftKey || this.ctrlkey;
    }
    arrayContainsKeys(keys) {
        return keys.indexOf(this.keyCode) > -1;
    }
    isShiftPressed() {
        return this.shiftKey;
    }
}
AccessKeys.PAGEDOWN = [34];
AccessKeys.PAGEUP = [33];
AccessKeys.ARROWRIGHT = [39];
AccessKeys.ARROWLEFT = [37];
AccessKeys.firstCanvasGroupCodes = [36]; // Home
AccessKeys.lastCanvasGroupCodes = [35]; // End
AccessKeys.zoomInCodes = [107, 187, 171]; // +, numpad and standard position, Firefox uses 171 for standard position
AccessKeys.zoomOutCodes = [109, 189, 173]; // -, numpad and standard position, Firefox uses 173 for standard position
AccessKeys.zoomHomeCodes = [96, 48]; // 0
AccessKeys.nextHit = [78]; // n
AccessKeys.previousHit = [80]; // p
AccessKeys.toggleSearchDialogCodes = [83]; // s
AccessKeys.toggleContentsDialogCodes = [67]; // C
AccessKeys.toggleFullscreenCodes = [70]; // f
AccessKeys.resetSearch = [83]; // s
AccessKeys.rotateCwCodes = [82]; // r


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/canvas-groups.ts":
/*!************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/canvas-groups.ts ***!
  \************************************************************************************/
/*! exports provided: CanvasGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroups", function() { return CanvasGroups; });
class CanvasGroups {
    constructor() {
        this.canvasGroupRects = [];
        this.canvasRects = [];
        this.canvasesPerCanvasGroup = [];
    }
    add(rect) {
        this.canvasGroupRects.push(rect);
    }
    addRange(rects) {
        this.canvasGroupRects = rects;
    }
    get(index) {
        return Object.assign({}, this.canvasGroupRects[index]);
    }
    findClosestIndex(point) {
        let i = 0;
        let lastDelta;
        if (point === null) {
            return -1;
        }
        this.canvasGroupRects.some(function (rect, index) {
            const delta = Math.abs(point.x - rect.centerX);
            if (delta >= lastDelta) {
                return true;
            }
            i = index;
            lastDelta = delta;
        });
        return i;
    }
    getMaxHeight() {
        return Math.max.apply(Math, this.canvasGroupRects.map(function (rect) {
            return rect.height;
        }));
    }
    getMaxWidth() {
        return Math.max.apply(Math, this.canvasGroupRects.map(function (rect) {
            return rect.width;
        }));
    }
    length() {
        return this.canvasGroupRects.length;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/content-dialog-state.ts":
/*!*******************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/content-dialog-state.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContentDialogState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDialogState", function() { return ContentDialogState; });
class ContentDialogState {
    constructor(fields) {
        this.isOpen = false;
        this.selectedIndex = 0;
        if (fields) {
            this.isOpen = fields.isOpen !== undefined ? fields.isOpen : this.isOpen;
            this.selectedIndex =
                fields.selectedIndex !== undefined
                    ? fields.selectedIndex
                    : this.selectedIndex;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/contents-search-dialog-state.ts":
/*!***************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/contents-search-dialog-state.ts ***!
  \***************************************************************************************************/
/*! exports provided: ContentsSearchDialogState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsSearchDialogState", function() { return ContentsSearchDialogState; });
class ContentsSearchDialogState {
    constructor(fields) {
        this.isOpen = false;
        if (fields) {
            this.isOpen = fields.isOpen !== undefined ? fields.isOpen : this.isOpen;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/controlAnchor.ts":
/*!************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/controlAnchor.ts ***!
  \************************************************************************************/
/*! exports provided: ControlAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlAnchor", function() { return ControlAnchor; });
var ControlAnchor;
(function (ControlAnchor) {
    ControlAnchor[ControlAnchor["NONE"] = 0] = "NONE";
    ControlAnchor[ControlAnchor["TOP_LEFT"] = 1] = "TOP_LEFT";
    ControlAnchor[ControlAnchor["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    ControlAnchor[ControlAnchor["BOTTOM_RIGHT"] = 3] = "BOTTOM_RIGHT";
    ControlAnchor[ControlAnchor["BOTTOM_LEFT"] = 4] = "BOTTOM_LEFT";
    ControlAnchor[ControlAnchor["ABSOLUTE"] = 5] = "ABSOLUTE";
})(ControlAnchor || (ControlAnchor = {}));


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts":
/*!*********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/dimensions.ts ***!
  \*********************************************************************************/
/*! exports provided: Dimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return Dimensions; });
class Dimensions {
    constructor(fields) {
        this.bottom = 0;
        this.height = 0;
        this.left = 0;
        this.right = 0;
        this.top = 0;
        this.width = 0;
        if (fields) {
            this.bottom = fields.bottom || this.bottom;
            this.height = fields.height || this.height;
            this.left = fields.left || this.left;
            this.right = fields.right || this.right;
            this.top = fields.top || this.top;
            this.width = fields.width || this.width;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/direction.ts":
/*!********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/direction.ts ***!
  \********************************************************************************/
/*! exports provided: Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
var Direction;
(function (Direction) {
    Direction[Direction["UNDEFINED"] = 0] = "UNDEFINED";
    Direction[Direction["LEFT"] = 1] = "LEFT";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["UP"] = 3] = "UP";
    Direction[Direction["DOWN"] = 4] = "DOWN";
    Direction[Direction["NEXT"] = 5] = "NEXT";
    Direction[Direction["PREVIOUS"] = 6] = "PREVIOUS";
})(Direction || (Direction = {}));


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/gestureSettings.ts":
/*!**************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/gestureSettings.ts ***!
  \**************************************************************************************/
/*! exports provided: GestureSettings, GestureSettingsMouse, GestureSettingsTouch, GestureSettingsPen, GestureSettingsUnknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureSettings", function() { return GestureSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureSettingsMouse", function() { return GestureSettingsMouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureSettingsTouch", function() { return GestureSettingsTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureSettingsPen", function() { return GestureSettingsPen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureSettingsUnknown", function() { return GestureSettingsUnknown; });
class GestureSettings {
    constructor() {
        this.scrollToZoom = false;
        this.clickToZoom = false;
        this.dblClickToZoom = false;
        this.pinchToZoom = false;
        this.flickEnabled = false;
        this.flickMinSpeed = 120;
        this.flickMomentum = 0.25;
        this.pinchRotate = false;
    }
}
class GestureSettingsMouse extends GestureSettings {
}
class GestureSettingsTouch extends GestureSettings {
}
class GestureSettingsPen extends GestureSettings {
}
class GestureSettingsUnknown extends GestureSettings {
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/help-dialog-state.ts":
/*!****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/help-dialog-state.ts ***!
  \****************************************************************************************/
/*! exports provided: HelpDialogState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDialogState", function() { return HelpDialogState; });
class HelpDialogState {
    constructor(fields) {
        this.isOpen = false;
        if (fields) {
            this.isOpen = fields.isOpen !== undefined ? fields.isOpen : this.isOpen;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/hit.ts":
/*!**************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/hit.ts ***!
  \**************************************************************************/
/*! exports provided: Hit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hit", function() { return Hit; });
class Hit {
    constructor(fields) {
        this.id = 0;
        this.index = 0;
        if (fields) {
            this.id = fields.id || this.id;
            this.index = fields.index || this.index;
            this.label = fields.label || this.label;
            this.match = fields.match || this.match;
            this.before = fields.before || this.before;
            this.after = fields.after || this.after;
            this.rects = fields.rects || this.rects;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/manifest.ts":
/*!*******************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/manifest.ts ***!
  \*******************************************************************************/
/*! exports provided: Manifest, Metadata, Sequence, Canvas, Images, Resource, Service, Size, Tile, Structure, TileSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manifest", function() { return Manifest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metadata", function() { return Metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sequence", function() { return Sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Structure", function() { return Structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileSource", function() { return TileSource; });
/* harmony import */ var _viewing_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");

class Manifest {
    constructor(fields) {
        this.viewingDirection = _viewing_direction__WEBPACK_IMPORTED_MODULE_0__["ViewingDirection"].LTR;
        this.structures = [];
        if (fields) {
            this.context = fields.context || this.context;
            this.type = fields.type || this.type;
            this.id = fields.id || this.id;
            this.viewingDirection = fields.viewingDirection || this.viewingDirection;
            this.label = fields.label || this.label;
            this.metadata = fields.metadata || this.metadata;
            this.license = fields.license || this.license;
            this.logo = fields.logo || this.logo;
            this.attribution = fields.attribution || this.attribution;
            this.service = fields.service || this.service;
            this.sequences = fields.sequences || this.sequences;
            this.structures = fields.structures || this.structures;
            this.tileSource = fields.tileSource || this.tileSource;
            this.viewingHint = fields.viewingHint || this.viewingHint;
        }
    }
}
class Metadata {
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }
}
class Sequence {
    constructor(fields) {
        if (fields) {
            this.id = fields.id || this.id;
            this.type = fields.type || this.type;
            this.label = fields.label || this.label;
            this.viewingHint = fields.viewingHint || this.viewingHint;
            this.canvases = fields.canvases || this.canvases;
        }
    }
}
class Canvas {
    constructor(fields) {
        if (fields) {
            this.id = fields.id || this.id;
            this.type = fields.type || this.type;
            this.label = fields.label || this.label;
            this.thumbnail = fields.thumbnail || this.thumbnail;
            this.height = fields.height || this.height;
            this.width = fields.width || this.width;
            this.images = fields.images || this.images;
        }
    }
}
class Images {
    constructor(fields) {
        if (fields) {
            this.id = fields.id || this.id;
            this.type = fields.type || this.type;
            this.motivation = fields.motivation || this.motivation;
            this.resource = fields.resource || this.resource;
            this.on = fields.on || this.on;
        }
    }
}
class Resource {
    constructor(fields) {
        if (fields) {
            this.id = fields.id || this.id;
            this.type = fields.type || this.type;
            this.format = fields.format || this.format;
            this.service = fields.service || this.service;
            this.height = fields.height || this.height;
            this.width = fields.width || this.width;
        }
    }
}
class Service {
    constructor(fields) {
        if (fields) {
            this.context = fields.context || this.context;
            this.id = fields.id || this.id;
            this.protocol = fields.protocol || this.protocol;
            this.width = fields.width || this.width;
            this.height = fields.height || this.height;
            this.sizes = fields.sizes || this.sizes;
            this.tiles = fields.tiles || this.tiles;
            this.profile = fields.profile || this.profile;
            this.physicalScale = fields.physicalScale || this.physicalScale;
            this.physicalUnits = fields.physicalUnits || this.physicalUnits;
            this.service = fields.service || this.service;
        }
    }
}
class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Tile {
    constructor(fields) {
        if (fields) {
            this.width = fields.width || this.width;
            this.scaleFactors = fields.scaleFactors || this.scaleFactors;
        }
    }
}
class Structure {
    constructor(fields) {
        if (fields) {
            this.id = fields.id || this.id;
            this.type = fields.type || this.type;
            this.label = fields.label || this.label;
            this.canvases = fields.canvases || this.canvases;
            this.canvasIndex = fields.canvasIndex;
        }
    }
}
class TileSource {
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/modeChanges.ts":
/*!**********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/modeChanges.ts ***!
  \**********************************************************************************/
/*! exports provided: ModeChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeChanges", function() { return ModeChanges; });
class ModeChanges {
    constructor(fields) {
        if (fields) {
            this.currentValue = fields.currentValue || this.currentValue;
            this.previousValue = fields.previousValue || this.previousValue;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/options.ts":
/*!******************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/options.ts ***!
  \******************************************************************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony import */ var _viewer_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _gestureSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestureSettings */ "../../libs/ngx-mime/src/lib/core/models/gestureSettings.ts");
/* harmony import */ var _controlAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlAnchor */ "../../libs/ngx-mime/src/lib/core/models/controlAnchor.ts");



class Options {
    constructor() {
        this.id = 'openseadragon';
        this.tileSources = [];
        this.tabIndex = 0;
        this.xmlPath = null;
        this.prefixUrl = 'https://openseadragon.github.io/openseadragon/images/';
        this.debugMode = false;
        this.debugGridColor = '#08f';
        this.blendTime = 0;
        this.alwaysBlend = false;
        this.autoHideControls = true;
        this.immediateRender = false;
        this.defaultZoomLevel = 0;
        this.opacity = 1;
        this.compositeOperation = null;
        this.placeholderFillStyle = null;
        this.degrees = 0;
        this.minZoomLevel = this.defaultZoomLevel;
        this.maxZoomLevel = null;
        this.homeFillsViewer = false;
        this.panHorizontal = true;
        this.panVertical = false;
        this.constrainDuringPan = false;
        this.wrapHorizontal = false;
        this.wrapVertical = false;
        this.minZoomImageRatio = 1;
        this.maxZoomPixelRatio = 1;
        this.smoothTileEdgesMinZoom = 1;
        this.iOSDevice = true;
        this.autoResize = true;
        this.preserveImageSizeOnResize = true;
        this.minScrollDeltaTime = 50;
        this.pixelsPerWheelLine = 40;
        this.visibilityRatio = 1;
        this.viewportMargins = {};
        this.imageLoaderLimit = 0;
        this.clickTimeThreshold = 300;
        this.clickDistThreshold = 5;
        this.dblClickTimeThreshold = 300;
        this.dblClickDistThreshold = 20;
        this.springStiffness = 6.5;
        this.animationTime = _viewer_options__WEBPACK_IMPORTED_MODULE_0__["ViewerOptions"].transitions.OSDAnimationTime / 1000;
        this.gestureSettingsMouse = new _gestureSettings__WEBPACK_IMPORTED_MODULE_1__["GestureSettingsMouse"]();
        this.gestureSettingsTouch = new _gestureSettings__WEBPACK_IMPORTED_MODULE_1__["GestureSettingsTouch"]();
        this.gestureSettingsPen = new _gestureSettings__WEBPACK_IMPORTED_MODULE_1__["GestureSettingsPen"]();
        this.gestureSettingsUnknown = new _gestureSettings__WEBPACK_IMPORTED_MODULE_1__["GestureSettingsUnknown"]();
        this.zoomPerClick = 2.0;
        this.zoomPerScroll = 1.2;
        this.zoomPerSecond = 1.0;
        this.showNavigator = false;
        this.navigatorPosition = 'TOP_RIGHT';
        this.navigatorSizeRatio = 0.2;
        this.navigatorMaintainSizeRatio = false;
        this.navigatorTop = null;
        this.navigatorLeft = null;
        this.navigatorHeight = null;
        this.navigatorWidth = null;
        this.navigatorAutoResize = true;
        this.navigatorAutoFade = true;
        this.navigatorRotate = true;
        this.controlsFadeDelay = 2000;
        this.controlsFadeLength = 1500;
        this.maxImageCacheCount = 200;
        this.timeout = 30000;
        this.useCanvas = true;
        this.minPixelRatio = 0.5;
        this.mouseNavEnabled = true;
        this.showNavigationControl = false;
        this.navigationControlAnchor = _controlAnchor__WEBPACK_IMPORTED_MODULE_2__["ControlAnchor"].TOP_LEFT;
        this.showZoomControl = true;
        this.showHomeControl = true;
        this.showFullPageControl = false;
        this.showRotationControl = false;
        this.showSequenceControl = false;
        this.sequenceControlAnchor = _controlAnchor__WEBPACK_IMPORTED_MODULE_2__["ControlAnchor"].TOP_LEFT;
        this.navPrevNextWrap = false;
        this.zoomInButton = null;
        this.zoomOutButton = null;
        this.homeButton = null;
        this.previousButton = null;
        this.nextButton = null;
        this.sequenceMode = true;
        this.initialPage = 0;
        this.preserveViewport = false;
        this.preserveOverlays = false;
        this.showReferenceStrip = false;
        this.referenceStripScroll = 'horizontal';
        this.referenceStripElement = null;
        this.referenceStripHeight = null;
        this.referenceStripWidth = null;
        this.referenceStripPosition = 'BOTTOM_LEFT';
        this.referenceStripSizeRatio = 0.2;
        this.collectionMode = false;
        this.collectionRows = 1;
        this.collectionColumns = 0;
        this.collectionLayout = 'horizontal';
        this.collectionTileSize = 800;
        this.collectionTileMargin = 80;
        this.crossOriginPolicy = false;
        this.ajaxWithCredentials = false;
        this.loadTilesWithAjax = false;
        this.ajaxHeaders = null;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/pinchStatus.ts":
/*!**********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/pinchStatus.ts ***!
  \**********************************************************************************/
/*! exports provided: PinchStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchStatus", function() { return PinchStatus; });
class PinchStatus {
    constructor() {
        this.active = false;
        this.previousGestureId = 0;
        this.shouldStop = false;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/rect.ts":
/*!***************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/rect.ts ***!
  \***************************************************************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
class Rect {
    constructor(fields) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.centerX = 0;
        this.centerY = 0;
        if (fields) {
            this.x = fields.x || this.x;
            this.y = fields.y || this.y;
            this.width = fields.width || this.width;
            this.height = fields.height || this.height;
            this.centerX = this.x + this.width / 2;
            this.centerY = this.y + this.height / 2;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/search-result.ts":
/*!************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/search-result.ts ***!
  \************************************************************************************/
/*! exports provided: SearchResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResult", function() { return SearchResult; });
/* harmony import */ var _hit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hit */ "../../libs/ngx-mime/src/lib/core/models/hit.ts");

class SearchResult {
    constructor(fields) {
        this.q = '';
        this.hits = [];
        if (fields) {
            this.q = fields.q || this.q;
            this.hits = fields.hits || this.hits;
        }
    }
    add(hit) {
        this.hits.push(hit);
    }
    get(index) {
        return new _hit__WEBPACK_IMPORTED_MODULE_0__["Hit"](Object.assign({}, this.hits[index]));
    }
    size() {
        return this.hits.length;
    }
    last() {
        return this.get(this.size() - 1);
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/side.ts":
/*!***************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/side.ts ***!
  \***************************************************************************/
/*! exports provided: Side */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Side", function() { return Side; });
var Side;
(function (Side) {
    Side[Side["LEFT"] = 0] = "LEFT";
    Side[Side["RIGHT"] = 1] = "RIGHT";
    Side[Side["TOP"] = 2] = "TOP";
    Side[Side["BOTTOM"] = 3] = "BOTTOM";
})(Side || (Side = {}));


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts":
/*!************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/viewer-layout.ts ***!
  \************************************************************************************/
/*! exports provided: ViewerLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerLayout", function() { return ViewerLayout; });
var ViewerLayout;
(function (ViewerLayout) {
    ViewerLayout[ViewerLayout["ONE_PAGE"] = 0] = "ONE_PAGE";
    ViewerLayout[ViewerLayout["TWO_PAGE"] = 1] = "TWO_PAGE";
})(ViewerLayout || (ViewerLayout = {}));


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts":
/*!**********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/viewer-mode.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewerMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerMode", function() { return ViewerMode; });
var ViewerMode;
(function (ViewerMode) {
    ViewerMode[ViewerMode["DASHBOARD"] = 0] = "DASHBOARD";
    ViewerMode[ViewerMode["PAGE"] = 1] = "PAGE";
    ViewerMode[ViewerMode["PAGE_ZOOMED"] = 2] = "PAGE_ZOOMED";
})(ViewerMode || (ViewerMode = {}));


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts":
/*!*************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/viewer-options.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerOptions", function() { return ViewerOptions; });
/****************************************************************
 * MIME-viewer options
 ****************************************************************/
const ViewerOptions = {
    zoom: {
        zoomFactor: 1.15,
        dblClickZoomFactor: 2.7,
        // How many pixels since lastDistance before it is considered a pinch
        pinchZoomThreshold: 3
    },
    pan: {
        // Sensitivity when determining swipe-direction.
        // Higher threshold means that swipe must be more focused in
        // x-direction before the gesture is recognized as "left" or "right"
        swipeDirectionThreshold: 70
    },
    // All transition times in milliseconds
    transitions: {
        toolbarsEaseInTime: 400,
        toolbarsEaseOutTime: 500,
        OSDAnimationTime: 600 // Animation-time for OSD-animations
    },
    overlays: {
        // Margin between canvas groups in Dashboard View in OpenSeadragon viewport-coordinates
        canvasGroupMarginInDashboardView: 300,
        // Margin between canvas groups in Page View in OpenSeadragon viewport-coordinates
        canvasGroupMarginInPageView: 20
    },
    padding: {
        // Padding in viewer container in pixels
        header: 80,
        footer: 80 // Placeholder below viewer for footer in Dashboard View
    },
    colors: {
        canvasGroupBackgroundColor: '#fafafa'
    }
};


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/viewerState.ts":
/*!**********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/viewerState.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerState", function() { return ViewerState; });
/* harmony import */ var _content_dialog_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-dialog-state */ "../../libs/ngx-mime/src/lib/core/models/content-dialog-state.ts");
/* harmony import */ var _contents_search_dialog_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents-search-dialog-state */ "../../libs/ngx-mime/src/lib/core/models/contents-search-dialog-state.ts");
/* harmony import */ var _help_dialog_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-dialog-state */ "../../libs/ngx-mime/src/lib/core/models/help-dialog-state.ts");



class ViewerState {
    constructor(fields) {
        this.contentDialogState = new _content_dialog_state__WEBPACK_IMPORTED_MODULE_0__["ContentDialogState"]();
        this.contentsSearchDialogState = new _contents_search_dialog_state__WEBPACK_IMPORTED_MODULE_1__["ContentsSearchDialogState"]();
        this.helpDialogState = new _help_dialog_state__WEBPACK_IMPORTED_MODULE_2__["HelpDialogState"]();
        if (fields) {
            this.contentDialogState = fields.contentDialogState
                ? fields.contentDialogState
                : this.contentDialogState;
            this.contentsSearchDialogState = fields.contentsSearchDialogState
                ? fields.contentsSearchDialogState
                : this.contentsSearchDialogState;
            this.helpDialogState = fields.helpDialogState
                ? fields.helpDialogState
                : this.helpDialogState;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts":
/*!****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/models/viewing-direction.ts ***!
  \****************************************************************************************/
/*! exports provided: ViewingDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewingDirection", function() { return ViewingDirection; });
var ViewingDirection;
(function (ViewingDirection) {
    ViewingDirection[ViewingDirection["LTR"] = 0] = "LTR";
    ViewingDirection[ViewingDirection["RTL"] = 1] = "RTL";
})(ViewingDirection || (ViewingDirection = {}));


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/navigation/content-search-navigation-service/content-search-navigation.service.ts":
/*!**********************************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/navigation/content-search-navigation-service/content-search-navigation.service.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ContentSearchNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchNavigationService", function() { return ContentSearchNavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");






class ContentSearchNavigationService {
    constructor(canvasService, iiifContentSearchService) {
        this.canvasService = canvasService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.currentIndex = 0;
        this.isHitOnActiveCanvasGroup = false;
        this._isFirstHitOnCanvasGroup = false;
        this._isLastHitOnCanvasGroup = false;
        this.canvasesPerCanvasGroup = [-1];
        this.iiifContentSearchService.onChange.subscribe((result) => {
            this.searchResult = result;
        });
    }
    update(canvasGroupIndex) {
        this.canvasesPerCanvasGroup = this.canvasService.getCanvasesPerCanvasGroup(canvasGroupIndex);
        this.currentIndex = this.findCurrentHitIndex(this.canvasesPerCanvasGroup);
        this.isHitOnActiveCanvasGroup = this.findHitOnActiveCanvasGroup();
        this._isFirstHitOnCanvasGroup = this.isFirstHitOnCanvasGroup();
        this._isLastHitOnCanvasGroup = this.findLastHitOnCanvasGroup();
    }
    getCurrentIndex() {
        return this.currentIndex;
    }
    getHitOnActiveCanvasGroup() {
        return this.isHitOnActiveCanvasGroup;
    }
    getFirstHitCanvasGroup() {
        return this._isFirstHitOnCanvasGroup;
    }
    getLastHitCanvasGroup() {
        return this._isLastHitOnCanvasGroup;
    }
    goToNextCanvasGroupHit() {
        if (!this._isLastHitOnCanvasGroup) {
            let nextHit;
            if (this.currentIndex === -1) {
                nextHit = this.searchResult.get(0);
            }
            else {
                const current = this.searchResult.get(this.currentIndex);
                const canvasGroup = this.canvasService.findCanvasGroupByCanvasIndex(current.index);
                const canvasesPerCanvasGroup = this.canvasService.getCanvasesPerCanvasGroup(canvasGroup);
                const lastCanvasGroupIndex = this.getLastCanvasGroupIndex(canvasesPerCanvasGroup);
                nextHit = this.searchResult.hits.find(h => h.index > lastCanvasGroupIndex);
            }
            if (nextHit) {
                this.goToCanvasIndex(nextHit);
            }
        }
    }
    goToPreviousCanvasGroupHit() {
        const previousIndex = this.isHitOnActiveCanvasGroup
            ? this.currentIndex - 1
            : this.currentIndex;
        const previousHit = this.findFirstHitOnCanvasGroup(previousIndex);
        this.goToCanvasIndex(previousHit);
    }
    goToCanvasIndex(hit) {
        this.currentIndex = this.findCurrentHitIndex([hit.index]);
        this.iiifContentSearchService.selected(hit);
    }
    findLastHitOnCanvasGroup() {
        const lastCanvasIndex = this.searchResult.get(this.searchResult.size() - 1)
            .index;
        const currentHit = this.searchResult.get(this.currentIndex);
        return currentHit.index === lastCanvasIndex;
    }
    findFirstHitOnCanvasGroup(previousIndex) {
        let previousHit = this.searchResult.get(previousIndex);
        const canvasGroupIndex = this.canvasService.findCanvasGroupByCanvasIndex(previousHit.index);
        const canvasesPerCanvasGroup = this.canvasService.getCanvasesPerCanvasGroup(canvasGroupIndex);
        const leftCanvas = canvasesPerCanvasGroup[0];
        const leftCanvasHit = this.searchResult.hits.find(h => h.index === leftCanvas);
        if (leftCanvasHit) {
            previousHit = leftCanvasHit;
        }
        else if (canvasesPerCanvasGroup.length === 2) {
            const rightCanvas = canvasesPerCanvasGroup[1];
            previousHit = this.searchResult.hits.find(h => h.index === rightCanvas);
        }
        return previousHit;
    }
    findHitOnActiveCanvasGroup() {
        return (this.canvasesPerCanvasGroup.indexOf(this.searchResult.get(this.currentIndex).index) >= 0);
    }
    findCurrentHitIndex(canvasGroupIndexes) {
        for (let i = 0; i < this.searchResult.size(); i++) {
            const hit = this.searchResult.get(i);
            if (canvasGroupIndexes.indexOf(hit.index) >= 0) {
                return i;
            }
            if (hit.index >= canvasGroupIndexes[canvasGroupIndexes.length - 1]) {
                if (i === 0) {
                    return -1;
                }
                else {
                    const phit = this.searchResult.get(i - 1);
                    return this.searchResult.hits.findIndex(sr => sr.index === phit.index);
                }
            }
        }
        return this.searchResult.size() - 1;
    }
    isFirstHitOnCanvasGroup() {
        return this.currentIndex <= 0;
    }
    getLastCanvasGroupIndex(canvasesPerCanvasGroup) {
        return canvasesPerCanvasGroup.length === 1
            ? canvasesPerCanvasGroup[0]
            : canvasesPerCanvasGroup[1];
    }
}
ContentSearchNavigationService.ɵfac = function ContentSearchNavigationService_Factory(t) { return new (t || ContentSearchNavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_2__["IiifContentSearchService"])); };
ContentSearchNavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContentSearchNavigationService, factory: ContentSearchNavigationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSearchNavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"] }, { type: _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_2__["IiifContentSearchService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/spinner-service/spinner.service.ts":
/*!***********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/spinner-service/spinner.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class SpinnerService {
    constructor() {
        this.spinnerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.spinnerState = this.spinnerSubject.asObservable();
    }
    show() {
        this.spinnerSubject.next({ show: true });
    }
    hide() {
        this.spinnerSubject.next({ show: false });
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/style-service/style.service.ts":
/*!*******************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/style-service/style.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: StyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleService", function() { return StyleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




class StyleService {
    constructor(zone) {
        this.zone = zone;
        this.colorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    get onChange() {
        return this.colorSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(c => c !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    init() {
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
                const previousRgbColor = this.currentRgbColor;
                const currentRgbColor = this.getComputedBackgroundColor(1);
                if (previousRgbColor !== currentRgbColor) {
                    this.currentRgbColor = currentRgbColor;
                    this.colorSubject.next(currentRgbColor);
                }
            }))
                .subscribe();
        });
    }
    convertToRgba(rgbColor, opacity) {
        return rgbColor.replace(/rgb/i, 'rgba').replace(/\)/i, `,${opacity})`);
    }
    getComputedBackgroundColor(opacity) {
        const matAppBackground = document.getElementsByClassName('mat-app-background');
        const matSidenavContainer = document.getElementsByTagName('mat-sidenav-container');
        if (matAppBackground.length > 0) {
            return this.getComputedStyle(matAppBackground[0], 'background-color');
        }
        else if (matSidenavContainer.length > 0) {
            return this.getComputedStyle(matSidenavContainer[0], 'background-color');
        }
        else {
            return null;
        }
    }
    getComputedStyle(el, property) {
        return window.getComputedStyle(el, null).getPropertyValue(property);
    }
}
StyleService.ɵfac = function StyleService_Factory(t) { return new (t || StyleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
StyleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StyleService, factory: StyleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/utils.ts":
/*!*********************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/utils.ts ***!
  \*********************************************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
class Utils {
    static numbersAreClose(thing, realThing, epsilon) {
        return Math.abs(thing - realThing) <= epsilon;
    }
    static shortenDecimals(zoom, precision) {
        const short = Number(zoom).toPrecision(precision);
        return Number(short);
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-layout-service/viewer-layout-service.ts":
/*!***********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-layout-service/viewer-layout-service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ViewerLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerLayoutService", function() { return ViewerLayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _mime_viewer_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mime-viewer-config */ "../../libs/ngx-mime/src/lib/core/mime-viewer-config.ts");
/* harmony import */ var _models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");








class ViewerLayoutService {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
        this.mimeConfig = new _mime_viewer_config__WEBPACK_IMPORTED_MODULE_4__["MimeViewerConfig"]();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.mimeConfig.initViewerLayout);
    }
    init(isPagedManifest) {
        if (this.mimeConfig.initViewerLayout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].TWO_PAGE &&
            isPagedManifest &&
            !this.isMobile()) {
            this._layout = _models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].TWO_PAGE;
            this.change();
        }
        else {
            this._layout = _models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].ONE_PAGE;
            this.change();
        }
    }
    get onChange() {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    get layout() {
        return this._layout;
    }
    setLayout(viewerLayout) {
        this._layout = viewerLayout;
        this.change();
    }
    toggle() {
        if (this._layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].TWO_PAGE) {
            this.setLayout(_models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].ONE_PAGE);
        }
        else if (this._layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].ONE_PAGE) {
            this.setLayout(_models_viewer_layout__WEBPACK_IMPORTED_MODULE_5__["ViewerLayout"].TWO_PAGE);
        }
    }
    change() {
        this.subject.next(this._layout);
    }
    isMobile() {
        return this.mediaObserver.isActive('lt-md');
    }
}
ViewerLayoutService.ɵfac = function ViewerLayoutService_Factory(t) { return new (t || ViewerLayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
ViewerLayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewerLayoutService, factory: ViewerLayoutService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerLayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/calculate-next-canvas-group-factory.ts":
/*!******************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/calculate-next-canvas-group-factory.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CalculateNextCanvasGroupFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateNextCanvasGroupFactory", function() { return CalculateNextCanvasGroupFactory; });
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony import */ var _navigator_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigator-calculate-next-canvas-group-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/navigator-calculate-next-canvas-group-strategy.ts");
/* harmony import */ var _dashboard_mode_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-mode-calculate-next-canvas-group-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/dashboard-mode-calculate-next-canvas-group-strategy.ts");
/* harmony import */ var _page_mode_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-mode-calculate-next-canvas-group-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/page-mode-calculate-next-canvas-group-strategy.ts");
/* harmony import */ var _page_zoomed_mode_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-zoomed-mode-calculate-next-canvas-group-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/page-zoomed-mode-calculate-next-canvas-group-strategy.ts");





class CalculateNextCanvasGroupFactory {
    static create(mode) {
        if (mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_0__["ViewerMode"].DASHBOARD) {
            return new _dashboard_mode_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_2__["DashboardModeCalculateNextCanvasGroupStrategy"]();
        }
        else if (mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_0__["ViewerMode"].PAGE) {
            return new _page_mode_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_3__["PageModeCalculateNextCanvasGroupStrategy"]();
        }
        else if (mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_0__["ViewerMode"].PAGE_ZOOMED) {
            return new _page_zoomed_mode_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_4__["PageZoomedModeCalculateNextCanvasGroupStrategy"]();
        }
        else {
            return new _navigator_calculate_next_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_1__["NavigatorCalculateNextCanvasGroupStrategy"]();
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/canvas-group-mask.ts":
/*!************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/canvas-group-mask.ts ***!
  \************************************************************************************************/
/*! exports provided: CanvasGroupMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroupMask", function() { return CanvasGroupMask; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openseadragon */ "../../node_modules/openseadragon/build/openseadragon/openseadragon.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openseadragon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _models_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/rect */ "../../libs/ngx-mime/src/lib/core/models/rect.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






class CanvasGroupMask {
    constructor(viewer, styleService) {
        this.styleService = styleService;
        this.disableResize = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
        styleService.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroyed)).subscribe(c => {
            this.backgroundColor = c;
            if (this.leftMask) {
                this.leftMask.style('fill', this.backgroundColor);
            }
            if (this.rightMask) {
                this.rightMask.style('fill', this.backgroundColor);
            }
        });
    }
    initialise(pageBounds, visible) {
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
        this.destroyed.next();
        this.destroyed.complete();
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
        const overlays = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.viewer.svgOverlay().node().parentNode);
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
        this.center = new openseadragon__WEBPACK_IMPORTED_MODULE_1__["Point"](this.viewer.viewport._containerInnerSize.x / 2, this.viewer.viewport._containerInnerSize.y / 2);
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
        const imgBounds = new openseadragon__WEBPACK_IMPORTED_MODULE_1__["Rect"](this.canvasGroupRect.x, this.canvasGroupRect.y, this.canvasGroupRect.width, this.canvasGroupRect.height);
        const topLeft = this.viewer.viewport.viewportToViewerElementCoordinates(imgBounds.getTopLeft());
        let width = topLeft.x - _models_viewer_options__WEBPACK_IMPORTED_MODULE_2__["ViewerOptions"].overlays.canvasGroupMarginInPageView;
        if (width < 0) {
            width = 0;
        }
        return new _models_rect__WEBPACK_IMPORTED_MODULE_3__["Rect"]({
            x: 0,
            width: width
        });
    }
    getRightMaskRect() {
        const imgBounds = new openseadragon__WEBPACK_IMPORTED_MODULE_1__["Rect"](this.canvasGroupRect.x, this.canvasGroupRect.y, this.canvasGroupRect.width, this.canvasGroupRect.height);
        const topRight = this.viewer.viewport.viewportToViewerElementCoordinates(imgBounds.getTopRight());
        let width = this.viewer.viewport._containerInnerSize.x - topRight.x;
        const x = this.viewer.viewport._containerInnerSize.x -
            width +
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_2__["ViewerOptions"].overlays.canvasGroupMarginInPageView;
        if (width < 0) {
            width = 0;
        }
        return new _models_rect__WEBPACK_IMPORTED_MODULE_3__["Rect"]({
            x: x,
            width: width
        });
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/dashboard-mode-calculate-next-canvas-group-strategy.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/dashboard-mode-calculate-next-canvas-group-strategy.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DashboardModeCalculateNextCanvasGroupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModeCalculateNextCanvasGroupStrategy", function() { return DashboardModeCalculateNextCanvasGroupStrategy; });
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");


class DashboardModeCalculateNextCanvasGroupStrategy {
    calculateNextCanvasGroup(criteria) {
        const speed = criteria.speed;
        const direction = criteria.direction;
        const currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        const currentCanvasGroupCenter = criteria.currentCanvasGroupCenter;
        let nextCanvasGroup;
        let canvasGroupDelta = this.calculateNumberOfCanvasGroupsToGo(speed);
        if (canvasGroupDelta === 0) {
            nextCanvasGroup = currentCanvasGroupCenter;
        }
        else {
            canvasGroupDelta =
                direction === _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT ? canvasGroupDelta : canvasGroupDelta * -1;
            nextCanvasGroup =
                criteria.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__["ViewingDirection"].LTR
                    ? currentCanvasGroupIndex + canvasGroupDelta
                    : currentCanvasGroupIndex - canvasGroupDelta;
        }
        return nextCanvasGroup;
    }
    calculateNumberOfCanvasGroupsToGo(speed) {
        if (speed < 500) {
            return 0;
        }
        else if (speed >= 500 && speed < 1500) {
            return 1;
        }
        else if (speed >= 1500 && speed < 2500) {
            return 3;
        }
        else if (speed >= 2500 && speed < 3500) {
            return 5;
        }
        else {
            return 10;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/go-to-canvas-group-strategy.ts":
/*!**********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/go-to-canvas-group-strategy.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DefaultGoToCanvasGroupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGoToCanvasGroupStrategy", function() { return DefaultGoToCanvasGroupStrategy; });
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");
/* harmony import */ var _models_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/options */ "../../libs/ngx-mime/src/lib/core/models/options.ts");
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");
/* harmony import */ var _calculate_next_canvas_group_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculate-next-canvas-group-factory */ "../../libs/ngx-mime/src/lib/core/viewer-service/calculate-next-canvas-group-factory.ts");






class DefaultGoToCanvasGroupStrategy {
    constructor(viewer, zoomStrategy, canvasService, modeService, config, viewingDirection) {
        this.viewer = viewer;
        this.zoomStrategy = zoomStrategy;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.config = config;
        this.viewingDirection = viewingDirection;
    }
    goToCanvasGroup(canvasGroup) {
        const oldCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
        this.canvasService.currentCanvasGroupIndex = this.canvasService.constrainToRange(canvasGroup.canvasGroupIndex);
        const newCanvasGroup = this.canvasService.getCanvasGroupRect(this.canvasService.currentCanvasGroupIndex);
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_2__["ViewerMode"].PAGE_ZOOMED &&
            this.config.preserveZoomOnCanvasGroupChange) {
            let x;
            if (oldCanvasGroupIndex > canvasGroup.canvasGroupIndex) {
                if (this.config.startOnTopOnCanvasGroupChange) {
                    const canvasGroupIndexes = this.canvasService.getCanvasesPerCanvasGroup(canvasGroup.canvasGroupIndex);
                    const previousCanvasIndex = canvasGroupIndexes[canvasGroupIndexes.length - 1];
                    const previousCanvasRect = this.canvasService.getCanvasRect(previousCanvasIndex);
                    x =
                        this.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_4__["ViewingDirection"].LTR
                            ? this.leftX(previousCanvasRect)
                            : this.rightX(newCanvasGroup);
                }
                else {
                    x =
                        this.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_4__["ViewingDirection"].LTR
                            ? this.rightX(newCanvasGroup)
                            : this.leftX(newCanvasGroup);
                }
            }
            else {
                x =
                    this.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_4__["ViewingDirection"].LTR
                        ? this.leftX(newCanvasGroup)
                        : this.rightX(newCanvasGroup);
            }
            const y = this.config.startOnTopOnCanvasGroupChange
                ? newCanvasGroup.y +
                    this.getViewportBounds().height / 2 -
                    new _models_options__WEBPACK_IMPORTED_MODULE_1__["Options"]().collectionTileMargin
                : this.getViewportCenter().y;
            this.panTo(x, y, canvasGroup.immediately);
        }
        else if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_2__["ViewerMode"].PAGE_ZOOMED) {
            const oldCanvasGroupCenter = this.canvasService.getCanvasGroupRect(oldCanvasGroupIndex);
            this.panToCenter(oldCanvasGroupCenter, canvasGroup.immediately);
            this.zoomStrategy.goToHomeZoom();
            setTimeout(() => {
                this.panToCenter(newCanvasGroup, canvasGroup.immediately);
                this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_2__["ViewerMode"].PAGE;
            }, _models_viewer_options__WEBPACK_IMPORTED_MODULE_3__["ViewerOptions"].transitions.OSDAnimationTime);
        }
        else {
            this.panToCenter(newCanvasGroup, canvasGroup.immediately);
        }
    }
    goToPreviousCanvasGroup(currentCanvasIndex) {
        if (this.canvasService.currentCanvasGroupIndex > 0) {
            const viewportCenter = this.getViewportCenter();
            const currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(viewportCenter);
            const calculateNextCanvasGroupStrategy = _calculate_next_canvas_group_factory__WEBPACK_IMPORTED_MODULE_5__["CalculateNextCanvasGroupFactory"].create(null);
            const newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
                direction: _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].PREVIOUS,
                currentCanvasGroupIndex: currentCanvasGroupIndex,
                currentCanvasGroupCenter: currentCanvasIndex,
                viewingDirection: this.viewingDirection
            });
            this.goToCanvasGroup({
                canvasGroupIndex: newCanvasGroupIndex,
                immediately: false
            });
        }
    }
    goToNextCanvasGroup(currentCanvasIndex) {
        if (this.canvasService.currentCanvasGroupIndex <
            this.canvasService.numberOfCanvasGroups) {
            const viewportCenter = this.getViewportCenter();
            const currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(viewportCenter);
            const calculateNextCanvasGroupStrategy = _calculate_next_canvas_group_factory__WEBPACK_IMPORTED_MODULE_5__["CalculateNextCanvasGroupFactory"].create(null);
            const newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
                direction: _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].NEXT,
                currentCanvasGroupIndex: currentCanvasGroupIndex,
                currentCanvasGroupCenter: currentCanvasIndex,
                viewingDirection: this.viewingDirection
            });
            this.goToCanvasGroup({
                canvasGroupIndex: newCanvasGroupIndex,
                immediately: false
            });
        }
    }
    centerCurrentCanvas() {
        const currentCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
        const currentCanvasGroupCenter = this.canvasService.getCanvasGroupRect(currentCanvasGroupIndex);
        this.panToCenter(currentCanvasGroupCenter, false);
    }
    leftX(canvas) {
        return canvas.x + this.getViewportBounds().width / 2;
    }
    rightX(canvas) {
        return canvas.x + canvas.width - this.getViewportBounds().width / 2;
    }
    panToCenter(canvasGroup, immediately) {
        this.panTo(canvasGroup.centerX, canvasGroup.centerY, immediately);
    }
    panTo(x, y, immediately) {
        this.viewer.viewport.panTo({
            x: x,
            y: y
        }, immediately);
    }
    getViewportCenter() {
        return this.viewer.viewport.getCenter(true);
    }
    getViewportBounds() {
        return this.viewer.viewport.getBounds(true);
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/iiif-tile-source-strategy.ts":
/*!********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/iiif-tile-source-strategy.ts ***!
  \********************************************************************************************************/
/*! exports provided: IiifTileSourceStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IiifTileSourceStrategy", function() { return IiifTileSourceStrategy; });
class IiifTileSourceStrategy {
    getTileSource(resource) {
        let tileSource;
        if (resource.service.service) {
            tileSource = resource.service;
        }
        else {
            tileSource = resource.service['@id'];
            tileSource = tileSource.startsWith('//')
                ? `${location.protocol}${tileSource}`
                : tileSource;
            tileSource = !tileSource.endsWith('/info.json')
                ? `${tileSource}/info.json`
                : tileSource;
        }
        return tileSource;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/navigator-calculate-next-canvas-group-strategy.ts":
/*!*****************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/navigator-calculate-next-canvas-group-strategy.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: NavigatorCalculateNextCanvasGroupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorCalculateNextCanvasGroupStrategy", function() { return NavigatorCalculateNextCanvasGroupStrategy; });
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");

class NavigatorCalculateNextCanvasGroupStrategy {
    calculateNextCanvasGroup(criteria) {
        const direction = criteria.direction;
        const currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        let nextCanvasGroup = 1;
        nextCanvasGroup =
            direction === _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].NEXT ? nextCanvasGroup : nextCanvasGroup * -1;
        nextCanvasGroup = currentCanvasGroupIndex + nextCanvasGroup;
        return nextCanvasGroup;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/page-mode-calculate-next-canvas-group-strategy.ts":
/*!*****************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/page-mode-calculate-next-canvas-group-strategy.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PageModeCalculateNextCanvasGroupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModeCalculateNextCanvasGroupStrategy", function() { return PageModeCalculateNextCanvasGroupStrategy; });
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");


class PageModeCalculateNextCanvasGroupStrategy {
    calculateNextCanvasGroup(criteria) {
        const isNewCanvasGroupInCenter = criteria.currentCanvasGroupIndex !== criteria.currentCanvasGroupCenter;
        const speed = criteria.speed;
        const direction = criteria.direction;
        let nextCanvasGroup = criteria.currentCanvasGroupIndex;
        if (speed >= 200) {
            const diff = direction === _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT ? 1 : -1;
            nextCanvasGroup =
                criteria.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__["ViewingDirection"].LTR
                    ? criteria.currentCanvasGroupIndex + diff
                    : criteria.currentCanvasGroupIndex - diff;
        }
        else if (isNewCanvasGroupInCenter) {
            nextCanvasGroup = criteria.currentCanvasGroupCenter;
        }
        return nextCanvasGroup;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/page-zoomed-mode-calculate-next-canvas-group-strategy.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/page-zoomed-mode-calculate-next-canvas-group-strategy.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PageZoomedModeCalculateNextCanvasGroupStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageZoomedModeCalculateNextCanvasGroupStrategy", function() { return PageZoomedModeCalculateNextCanvasGroupStrategy; });
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");
/* harmony import */ var _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");


class PageZoomedModeCalculateNextCanvasGroupStrategy {
    calculateNextCanvasGroup(criteria) {
        const direction = criteria.direction;
        const currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        const canvasGroupEndHitCountReached = criteria.canvasGroupEndHitCountReached;
        let nextCanvasGroup = canvasGroupEndHitCountReached ? 1 : 0;
        nextCanvasGroup =
            direction === _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT ? nextCanvasGroup : nextCanvasGroup * -1;
        nextCanvasGroup =
            criteria.viewingDirection === _models_viewing_direction__WEBPACK_IMPORTED_MODULE_1__["ViewingDirection"].LTR
                ? currentCanvasGroupIndex + nextCanvasGroup
                : currentCanvasGroupIndex - nextCanvasGroup;
        return nextCanvasGroup;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/static-image-tile-source-strategy.ts":
/*!****************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/static-image-tile-source-strategy.ts ***!
  \****************************************************************************************************************/
/*! exports provided: StaticImageTileSourceStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticImageTileSourceStrategy", function() { return StaticImageTileSourceStrategy; });
class StaticImageTileSourceStrategy {
    getTileSource(resource) {
        return {
            type: 'image',
            url: resource['@id']
        };
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/swipe-drag-end-counter.ts":
/*!*****************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/swipe-drag-end-counter.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SwipeDragEndCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeDragEndCounter", function() { return SwipeDragEndCounter; });
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");
/* harmony import */ var _models_side__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/side */ "../../libs/ngx-mime/src/lib/core/models/side.ts");


class SwipeDragEndCounter {
    constructor() {
        this.reset();
    }
    reset() {
        this.leftCount = 0;
        this.rightCount = 0;
    }
    /**
     * @param direction of swipe / pan
     * @param side hit by swipe
     */
    addHit(side, dir) {
        this.incrementSide(side);
        this.clearOppositeSideOfDragDirection(dir);
    }
    hitCountReached() {
        return this.leftCount >= 2 || this.rightCount >= 2;
    }
    incrementSide(side) {
        if (side === _models_side__WEBPACK_IMPORTED_MODULE_1__["Side"].LEFT) {
            this.leftCount++;
            this.rightCount = 0;
        }
        else if (side === _models_side__WEBPACK_IMPORTED_MODULE_1__["Side"].RIGHT) {
            this.rightCount++;
            this.leftCount = 0;
        }
    }
    /**
     * Clear opposite side if swiping in the other direction
     * @param Direction of swipe / pan
     */
    clearOppositeSideOfDragDirection(dir) {
        if (dir === _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].LEFT) {
            this.leftCount = 0;
        }
        else if (dir === _models_direction__WEBPACK_IMPORTED_MODULE_0__["Direction"].RIGHT) {
            this.rightCount = 0;
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/swipe-utils.ts":
/*!******************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/swipe-utils.ts ***!
  \******************************************************************************************/
/*! exports provided: SwipeUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeUtils", function() { return SwipeUtils; });
/* harmony import */ var _models_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/side */ "../../libs/ngx-mime/src/lib/core/models/side.ts");
/* harmony import */ var _models_direction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/direction */ "../../libs/ngx-mime/src/lib/core/models/direction.ts");
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");



class SwipeUtils {
    // Added threshold to prevent sensitive direction-calculation when zoomed in
    static getSwipeDirection(start, end, useThreshold) {
        let deltaX = Math.abs(start.x - end.x);
        const deltaY = Math.abs(start.y - end.y);
        deltaX = useThreshold
            ? deltaX - _models_viewer_options__WEBPACK_IMPORTED_MODULE_2__["ViewerOptions"].pan.swipeDirectionThreshold
            : deltaX;
        if (start.x > end.x && deltaX >= deltaY) {
            return _models_direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT;
        }
        else if (start.x < end.x && deltaX >= deltaY) {
            return _models_direction__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT;
        }
    }
    static getSideIfPanningPastEndOfCanvasGroup(canvasGroupRect, vpBounds) {
        if (this.isPanningOutsideLeft(canvasGroupRect, vpBounds)) {
            return _models_side__WEBPACK_IMPORTED_MODULE_0__["Side"].LEFT;
        }
        else if (this.isPanningOutsideRight(canvasGroupRect, vpBounds)) {
            return _models_side__WEBPACK_IMPORTED_MODULE_0__["Side"].RIGHT;
        }
    }
    static isPanningOutsideCanvasGroup(canvasGroupRect, vpBounds) {
        return (this.isPanningOutsideLeft(canvasGroupRect, vpBounds) ||
            this.isPanningOutsideRight(canvasGroupRect, vpBounds));
    }
    static isPanningOutsideLeft(canvasGroupRect, vpBounds) {
        return vpBounds.x < canvasGroupRect.x;
    }
    static isPanningOutsideRight(canvasGroupRect, vpBounds) {
        return (vpBounds.x + vpBounds.width > canvasGroupRect.x + canvasGroupRect.width);
    }
    /**
     *
     * @param direction Current computed direction, expressed as an
     * angle counterclockwise relative to the positive X axis (-pi to pi, in radians).
     * Only valid if speed > 0.
     */
    static isDirectionInRightSemicircle(direction) {
        return direction > -Math.PI / 2 && direction < Math.PI / 2;
    }
    /**
     * @param direction @see isDirectionInRightSemicircle
     */
    static isDirectionInLeftSemicircle(direction) {
        return !this.isDirectionInRightSemicircle(direction) || direction === 0; // fix for speed = 0
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/tile-source-strategy-factory.ts":
/*!***********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/tile-source-strategy-factory.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TileSourceStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileSourceStrategyFactory", function() { return TileSourceStrategyFactory; });
/* harmony import */ var _iiif_tile_source_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iiif-tile-source-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/iiif-tile-source-strategy.ts");
/* harmony import */ var _static_image_tile_source_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-image-tile-source-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/static-image-tile-source-strategy.ts");


class TileSourceStrategyFactory {
    static create(resource) {
        if (resource.service) {
            return new _iiif_tile_source_strategy__WEBPACK_IMPORTED_MODULE_0__["IiifTileSourceStrategy"]();
        }
        else {
            return new _static_image_tile_source_strategy__WEBPACK_IMPORTED_MODULE_1__["StaticImageTileSourceStrategy"]();
        }
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts":
/*!*********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/mode-service/mode.service */ "../../libs/ngx-mime/src/lib/core/mode-service/mode.service.ts");
/* harmony import */ var _canvas_group_position_calculate_canvas_group_position_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas-group-position/calculate-canvas-group-position-factory */ "../../libs/ngx-mime/src/lib/core/canvas-group-position/calculate-canvas-group-position-factory.ts");
/* harmony import */ var _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _click_service_click_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../click-service/click.service */ "../../libs/ngx-mime/src/lib/core/click-service/click.service.ts");
/* harmony import */ var _ext_svg_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ext/svg-overlay */ "../../libs/ngx-mime/src/lib/core/ext/svg-overlay.ts");
/* harmony import */ var _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _iiif_manifest_service_iiif_manifest_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../iiif-manifest-service/iiif-manifest-utils */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-utils.ts");
/* harmony import */ var _models_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/options */ "../../libs/ngx-mime/src/lib/core/models/options.ts");
/* harmony import */ var _models_pinchStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../models/pinchStatus */ "../../libs/ngx-mime/src/lib/core/models/pinchStatus.ts");
/* harmony import */ var _models_side__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../models/side */ "../../libs/ngx-mime/src/lib/core/models/side.ts");
/* harmony import */ var _models_viewer_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _style_service_style_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../style-service/style.service */ "../../libs/ngx-mime/src/lib/core/style-service/style.service.ts");
/* harmony import */ var _viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../viewer-layout-service/viewer-layout-service */ "../../libs/ngx-mime/src/lib/core/viewer-layout-service/viewer-layout-service.ts");
/* harmony import */ var _calculate_next_canvas_group_factory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./calculate-next-canvas-group-factory */ "../../libs/ngx-mime/src/lib/core/viewer-service/calculate-next-canvas-group-factory.ts");
/* harmony import */ var _canvas_group_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./canvas-group-mask */ "../../libs/ngx-mime/src/lib/core/viewer-service/canvas-group-mask.ts");
/* harmony import */ var _go_to_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./go-to-canvas-group-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/go-to-canvas-group-strategy.ts");
/* harmony import */ var _swipe_drag_end_counter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./swipe-drag-end-counter */ "../../libs/ngx-mime/src/lib/core/viewer-service/swipe-drag-end-counter.ts");
/* harmony import */ var _swipe_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./swipe-utils */ "../../libs/ngx-mime/src/lib/core/viewer-service/swipe-utils.ts");
/* harmony import */ var _tile_source_strategy_factory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tile-source-strategy-factory */ "../../libs/ngx-mime/src/lib/core/viewer-service/tile-source-strategy-factory.ts");
/* harmony import */ var _zoom_strategy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./zoom-strategy */ "../../libs/ngx-mime/src/lib/core/viewer-service/zoom-strategy.ts");

































class ViewerService {
    constructor(zone, clickService, canvasService, modeService, viewerLayoutService, iiifContentSearchService, styleService) {
        this.zone = zone;
        this.clickService = clickService;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.viewerLayoutService = viewerLayoutService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.styleService = styleService;
        this.subscriptions = [];
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isCanvasPressed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentCenter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentCanvasIndex = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.currentHit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.osdIsReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.swipeDragEndCounter = new _swipe_drag_end_counter__WEBPACK_IMPORTED_MODULE_22__["SwipeDragEndCounter"]();
        this.pinchStatus = new _models_pinchStatus__WEBPACK_IMPORTED_MODULE_12__["PinchStatus"]();
        this.rotation = 0;
        /**
         * Scroll-handler
         */
        this.scrollHandler = (event) => {
            const zoomFactor = Math.pow(_models_viewer_options__WEBPACK_IMPORTED_MODULE_16__["ViewerOptions"].zoom.zoomFactor, event.scroll);
            // Scrolling up
            if (event.scroll > 0) {
                this.zoomInGesture(event.position, zoomFactor);
                // Scrolling down
            }
            else if (event.scroll < 0) {
                this.zoomOutGesture(event.position, zoomFactor);
            }
        };
        /**
         * Pinch-handler
         */
        this.pinchHandler = (event) => {
            this.pinchStatus.active = true;
            const zoomFactor = event.distance / event.lastDistance;
            // Pinch Out
            if (event.distance >
                event.lastDistance + _models_viewer_options__WEBPACK_IMPORTED_MODULE_16__["ViewerOptions"].zoom.pinchZoomThreshold) {
                this.zoomInPinchGesture(event, zoomFactor);
                // Pinch In
            }
            else if (event.distance + _models_viewer_options__WEBPACK_IMPORTED_MODULE_16__["ViewerOptions"].zoom.pinchZoomThreshold <
                event.lastDistance) {
                this.zoomOutPinchGesture(event, zoomFactor);
            }
        };
        /**
         * Single-click-handler
         * Single-click toggles between page/dashboard-mode if a page is hit
         */
        this.singleClickHandler = (event) => {
            const target = event.originalEvent.target;
            const tileIndex = this.getOverlayIndexFromClickEvent(target);
            const requestedCanvasGroupIndex = this.canvasService.findCanvasGroupByCanvasIndex(tileIndex);
            if (requestedCanvasGroupIndex) {
                this.canvasService.currentCanvasGroupIndex = requestedCanvasGroupIndex;
            }
            this.modeService.toggleMode();
        };
        /**
         * Double-click-handler
         * Double-click dashboard-mode should go to page-mode
         * Double-click page-mode should
         *    a) Zoom in if page is fitted vertically, or
         *    b) Fit vertically if page is already zoomed in
         */
        this.dblClickHandler = (event) => {
            const target = event.originalEvent.target;
            // Page is fitted vertically, so dbl-click zooms in
            if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE) {
                this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED;
                this.zoomStrategy.zoomIn(_models_viewer_options__WEBPACK_IMPORTED_MODULE_16__["ViewerOptions"].zoom.dblClickZoomFactor, event.position);
            }
            else {
                this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE;
                const canvasIndex = this.getOverlayIndexFromClickEvent(target);
                const requestedCanvasGroupIndex = this.canvasService.findCanvasGroupByCanvasIndex(canvasIndex);
                if (requestedCanvasGroupIndex >= 0) {
                    this.canvasService.currentCanvasGroupIndex = requestedCanvasGroupIndex;
                }
            }
        };
        this.dragHandler = (e) => {
            this.viewer.panHorizontal = true;
            if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED) {
                const dragEndPosision = e.position;
                const canvasGroupRect = this.canvasService.getCurrentCanvasGroupRect();
                const vpBounds = this.getViewportBounds();
                const pannedPastCanvasGroup = _swipe_utils__WEBPACK_IMPORTED_MODULE_23__["SwipeUtils"].getSideIfPanningPastEndOfCanvasGroup(canvasGroupRect, vpBounds);
                const direction = e.direction;
                if ((pannedPastCanvasGroup === _models_side__WEBPACK_IMPORTED_MODULE_13__["Side"].LEFT &&
                    _swipe_utils__WEBPACK_IMPORTED_MODULE_23__["SwipeUtils"].isDirectionInRightSemicircle(direction)) ||
                    (pannedPastCanvasGroup === _models_side__WEBPACK_IMPORTED_MODULE_13__["Side"].RIGHT &&
                        _swipe_utils__WEBPACK_IMPORTED_MODULE_23__["SwipeUtils"].isDirectionInLeftSemicircle(direction))) {
                    this.viewer.panHorizontal = false;
                }
            }
        };
    }
    get onCenterChange() {
        return this.currentCenter.asObservable();
    }
    get onCanvasGroupIndexChange() {
        return this.currentCanvasIndex.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    get onHitChange() {
        return this.currentHit.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    get onOsdReadyChange() {
        return this.osdIsReady.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    getViewer() {
        return this.viewer;
    }
    getTilesources() {
        return this.tileSources;
    }
    getOverlays() {
        return this.overlays;
    }
    getZoom() {
        return this.zoomStrategy.getZoom();
    }
    getMinZoom() {
        return this.zoomStrategy.getMinZoom();
    }
    getMaxZoom() {
        return this.zoomStrategy.getMaxZoom();
    }
    home() {
        if (!this.osdIsReady.getValue()) {
            return;
        }
        this.zoomStrategy.setMinZoom(this.modeService.mode);
        this.goToCanvasGroupStrategy.centerCurrentCanvas();
        this.zoomStrategy.goToHomeZoom();
    }
    goToPreviousCanvasGroup() {
        this.goToCanvasGroupStrategy.goToPreviousCanvasGroup(this.currentCanvasIndex.getValue());
    }
    goToNextCanvasGroup() {
        this.goToCanvasGroupStrategy.goToNextCanvasGroup(this.currentCanvasIndex.getValue());
    }
    goToCanvasGroup(canvasGroupIndex, immediately) {
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: canvasGroupIndex,
            immediately: immediately
        });
    }
    goToCanvas(canvasIndex, immediately) {
        const canvasGroupIndex = this.canvasService.findCanvasGroupByCanvasIndex(canvasIndex);
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: canvasGroupIndex,
            immediately: immediately
        });
    }
    highlight(searchResult) {
        this.clearHightlight();
        if (this.viewer) {
            if (searchResult.q) {
                this.currentSearch = searchResult;
            }
            for (const hit of searchResult.hits) {
                for (const rect of hit.rects) {
                    const canvasRect = this.canvasService.getCanvasRect(hit.index);
                    if (canvasRect) {
                        const x = canvasRect.x + rect.x;
                        const y = canvasRect.y + rect.y;
                        const width = rect.width;
                        const height = rect.height;
                        const currentOverlay = this.svgNode
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
        }
    }
    highlightCurrentHit(hit) {
        this.svgNode.selectAll(`g > rect.selected`).attr('class', 'hit');
        this.svgNode
            .selectAll(`g > rect[mimeHitIndex='${hit.id}']`)
            .attr('class', 'hit selected');
    }
    clearHightlight() {
        if (this.svgNode) {
            this.svgNode.selectAll('.hit').remove();
            this.currentSearch = null;
        }
    }
    setUpViewer(manifest, config) {
        this.config = config;
        if (manifest && manifest.tileSource) {
            this.tileSources = manifest.tileSource;
            this.zone.runOutsideAngular(() => {
                this.manifest = manifest;
                this.isManifestPaged = _iiif_manifest_service_iiif_manifest_utils__WEBPACK_IMPORTED_MODULE_10__["ManifestUtils"].isManifestPaged(this.manifest);
                this.viewer = new OpenSeadragon.Viewer(Object.assign({}, this.getOptions()));
                Object(_ext_svg_overlay__WEBPACK_IMPORTED_MODULE_8__["createSvgOverlay"])();
                this.zoomStrategy = new _zoom_strategy__WEBPACK_IMPORTED_MODULE_25__["DefaultZoomStrategy"](this.viewer, this.canvasService, this.modeService, this.viewerLayoutService);
                this.goToCanvasGroupStrategy = new _go_to_canvas_group_strategy__WEBPACK_IMPORTED_MODULE_21__["DefaultGoToCanvasGroupStrategy"](this.viewer, this.zoomStrategy, this.canvasService, this.modeService, this.config, this.manifest.viewingDirection);
                /*
                  This disables keyboard navigation in openseadragon.
                  We use s for opening search dialog and OSD use the same key for panning.
                  Issue: https://github.com/openseadragon/openseadragon/issues/794
                 */
                this.defaultKeyDownHandler = this.viewer.innerTracker.keyDownHandler;
                this.disableKeyDownHandler();
                this.viewer.innerTracker.keyHandler = null;
                this.canvasService.reset();
                this.canvasGroupMask = new _canvas_group_mask__WEBPACK_IMPORTED_MODULE_20__["CanvasGroupMask"](this.viewer, this.styleService);
            });
            this.addToWindow();
            this.setupOverlays();
            this.createOverlays();
            this.addEvents();
            this.addSubscriptions();
        }
    }
    addSubscriptions() {
        this.modeService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((mode) => {
            this.modeChanged(mode);
        });
        this.zone.runOutsideAngular(() => {
            this.onCenterChange
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(500)))
                .subscribe((center) => {
                this.calculateCurrentCanvasGroup(center);
                if (center && center !== null) {
                    this.osdIsReady.next(true);
                }
            });
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((canvasGroupIndex) => {
            this.swipeDragEndCounter.reset();
            if (canvasGroupIndex !== -1) {
                this.canvasGroupMask.changeCanvasGroup(this.canvasService.getCanvasGroupRect(canvasGroupIndex));
                if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE) {
                    this.zoomStrategy.goToHomeZoom();
                }
            }
        });
        this.onOsdReadyChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((state) => {
            if (state) {
                this.initialCanvasGroupLoaded();
                this.currentCenter.next(this.viewer.viewport.getCenter(true));
            }
        });
        this.viewerLayoutService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((state) => {
            this.layoutPages();
        });
        this.iiifContentSearchService.onSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((hit) => {
            if (hit) {
                this.highlightCurrentHit(hit);
                this.goToCanvas(hit.index, false);
            }
        });
    }
    layoutPages() {
        if (this.osdIsReady.getValue()) {
            const currentCanvasIndex = this.canvasService.currentCanvasIndex;
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
    }
    addToWindow() {
        window.openSeadragonViewer = this.viewer;
    }
    setupOverlays() {
        this.svgOverlay = this.viewer.svgOverlay();
        this.svgNode = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.svgOverlay.node());
    }
    disableKeyDownHandler() {
        this.viewer.innerTracker.keyDownHandler = null;
    }
    resetKeyDownHandler() {
        this.viewer.innerTracker.keyDownHandler = this.defaultKeyDownHandler;
    }
    /**
     *
     * @param layoutSwitch true if switching between layouts
     * to keep current search-state and rotation
     */
    destroy(layoutSwitch) {
        this.osdIsReady.next(false);
        this.currentCenter.next(null);
        if (this.viewer != null && this.viewer.isOpen()) {
            if (this.viewer.container != null) {
                d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.viewer.container.parentNode).style('opacity', '0');
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
    }
    addEvents() {
        this.clickService.reset();
        this.clickService.addSingleClickHandler(this.singleClickHandler);
        this.clickService.addDoubleClickHandler(this.dblClickHandler);
        this.viewer.addHandler('animation-finish', () => {
            this.currentCenter.next(this.viewer.viewport.getCenter(true));
        });
        this.viewer.addHandler('canvas-click', this.clickService.click);
        this.viewer.addHandler('canvas-double-click', (e) => (e.preventDefaultAction = true));
        this.viewer.addHandler('canvas-press', (e) => {
            this.pinchStatus.active = false;
            this.dragStartPosition = e.position;
            this.isCanvasPressed.next(true);
        });
        this.viewer.addHandler('canvas-release', () => this.isCanvasPressed.next(false));
        this.viewer.addHandler('canvas-scroll', this.scrollHandler);
        this.viewer.addHandler('canvas-pinch', this.pinchHandler);
        this.viewer.addHandler('canvas-drag', (e) => this.dragHandler(e));
        this.viewer.addHandler('canvas-drag-end', (e) => this.swipeToCanvasGroup(e));
        this.viewer.addHandler('animation', (e) => {
            this.currentCenter.next(this.viewer.viewport.getCenter(true));
        });
    }
    zoomIn(zoomFactor, position) {
        this.zoomStrategy.zoomIn(zoomFactor, position);
    }
    zoomOut(zoomFactor, position) {
        this.zoomStrategy.zoomOut(zoomFactor, position);
    }
    rotate() {
        this.rotation = (this.rotation + 90) % 360;
        this.layoutPages();
    }
    /**
     * Callback for mode-change
     * @param mode ViewerMode
     */
    modeChanged(mode) {
        if (mode.currentValue === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD) {
            this.viewer.panVertical = false;
            this.toggleToDashboard();
            this.disableKeyDownHandler();
        }
        else if (mode.currentValue === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE) {
            this.viewer.panVertical = false;
            this.toggleToPage();
            this.disableKeyDownHandler();
        }
        else if (mode.currentValue === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED) {
            this.viewer.panVertical = true;
            this.resetKeyDownHandler();
        }
    }
    /**
     * Switches to DASHBOARD-mode, repositions canvas group and removes max-width on viewer
     */
    toggleToDashboard() {
        if (!this.canvasService.isCurrentCanvasGroupValid()) {
            return;
        }
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: this.canvasService.currentCanvasGroupIndex,
            immediately: false
        });
        this.canvasGroupMask.hide();
        this.zoomStrategy.setMinZoom(_models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD);
        this.zoomStrategy.goToHomeZoom();
    }
    /**
     * Switches to PAGE-mode, centers current canvas group and repositions other canvas groups
     */
    toggleToPage() {
        if (!this.canvasService.isCurrentCanvasGroupValid()) {
            return;
        }
        this.goToCanvasGroupStrategy.goToCanvasGroup({
            canvasGroupIndex: this.canvasService.currentCanvasGroupIndex,
            immediately: false
        });
        this.canvasGroupMask.show();
        this.zoomStrategy.setMinZoom(_models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE);
        this.zoomStrategy.goToHomeZoom();
    }
    /**
     *
     * @param point to zoom to. If not set, the viewer will zoom to center
     */
    zoomInGesture(position, zoomFactor) {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE;
        }
        else {
            if (position) {
                this.zoomStrategy.zoomIn(zoomFactor, position);
            }
            else {
                this.zoomStrategy.zoomIn();
            }
        }
    }
    zoomOutGesture(position, zoomFactor) {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED) {
            this.zoomStrategy.zoomOut(zoomFactor, position);
        }
        else if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD;
        }
    }
    /**
     * Process zoom in pinch gesture (pinch out)
     *
     * Toggle to page mode and Zoom in
     *
     * @param event from pinch gesture
     */
    zoomInPinchGesture(event, zoomFactor) {
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE;
        }
        else {
            this.zoomIn(zoomFactor, this.dragStartPosition || event.center);
        }
    }
    /**
     * Process zoom out pinch gesture (pinch in)
     *
     * Zoom out and toggle to dashboard when all zoomed out.
     * Stop between zooming out and toggling to dashboard.
     *
     * @param event from pinch gesture
     */
    zoomOutPinchGesture(event, zoomFactor) {
        const gestureId = event.gesturePoints[0].id;
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED) {
            this.pinchStatus.shouldStop = true;
            this.zoomStrategy.zoomOut(zoomFactor, event.center);
        }
        else if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE) {
            if (!this.pinchStatus.shouldStop ||
                gestureId === this.pinchStatus.previousGestureId + 2) {
                this.pinchStatus.shouldStop = false;
                this.modeService.toggleMode();
            }
            this.pinchStatus.previousGestureId = gestureId;
        }
    }
    /**
     * Checks if hit element is a <rect>-element
     * @param target
     */
    isCanvasGroupHit(target) {
        return target instanceof SVGRectElement;
    }
    /**
     * Iterates tilesources and adds them to viewer
     * Creates svg clickable overlays for each tile
     */
    createOverlays() {
        this.overlays = [];
        const canvasRects = [];
        const calculateCanvasGroupPositionStrategy = _canvas_group_position_calculate_canvas_group_position_factory__WEBPACK_IMPORTED_MODULE_5__["CalculateCanvasGroupPositionFactory"].create(this.viewerLayoutService.layout, this.isManifestPaged);
        const isTwoPageView = this.viewerLayoutService.layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_14__["ViewerLayout"].TWO_PAGE;
        let group = this.svgNode.append('g').attr('class', 'page-group');
        this.tileSources.forEach((tile, i) => {
            const position = calculateCanvasGroupPositionStrategy.calculateCanvasGroupPosition({
                canvasGroupIndex: i,
                canvasSource: tile,
                previousCanvasGroupPosition: canvasRects[i - 1],
                viewingDirection: this.manifest.viewingDirection
            }, this.rotation);
            canvasRects.push(position);
            const tileSourceStrategy = _tile_source_strategy_factory__WEBPACK_IMPORTED_MODULE_24__["TileSourceStrategyFactory"].create(tile);
            const tileSource = tileSourceStrategy.getTileSource(tile);
            this.zone.runOutsideAngular(() => {
                const rotated = this.rotation === 90 || this.rotation === 270;
                let bounds;
                /* Because image scaling is performed before rotation,
                 * we must invert width & height and translate position so that tile rotation ends up correct
                 */
                if (rotated) {
                    bounds = new OpenSeadragon.Rect(position.x + (position.width - position.height) / 2, position.y - (position.width - position.height) / 2, position.height, position.width);
                }
                else {
                    bounds = new OpenSeadragon.Rect(position.x, position.y, position.width, position.height);
                }
                this.viewer.addTiledImage({
                    index: i,
                    tileSource: tileSource,
                    fitBounds: bounds,
                    degrees: this.rotation
                });
            });
            if (isTwoPageView && i % 2 !== 0) {
                group = this.svgNode.append('g').attr('class', 'page-group');
            }
            const currentOverlay = group
                .append('rect')
                .attr('x', position.x)
                .attr('y', position.y)
                .attr('width', position.width)
                .attr('height', position.height)
                .attr('class', 'tile');
            // Make custom borders if current layout is two-paged
            if (isTwoPageView) {
                if (i % 2 === 0 && i !== 0) {
                    const noLeftStrokeStyle = Number(position.width * 2 + position.height) +
                        ', ' +
                        position.width * 2;
                    currentOverlay.style('stroke-dasharray', noLeftStrokeStyle);
                }
                else if (i % 2 !== 0 && i !== 0) {
                    const noRightStrokeStyle = position.width +
                        ', ' +
                        position.height +
                        ', ' +
                        Number(position.width * 2 + position.height);
                    currentOverlay.style('stroke-dasharray', noRightStrokeStyle);
                }
            }
            const currentOverlayNode = currentOverlay.node();
            this.overlays[i] = currentOverlayNode;
        });
        const layout = this.viewerLayoutService.layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_14__["ViewerLayout"].ONE_PAGE ||
            !this.isManifestPaged
            ? _models_viewer_layout__WEBPACK_IMPORTED_MODULE_14__["ViewerLayout"].ONE_PAGE
            : _models_viewer_layout__WEBPACK_IMPORTED_MODULE_14__["ViewerLayout"].TWO_PAGE;
        this.canvasService.addAll(canvasRects, layout);
    }
    /**
     * Sets viewer size and opacity once the first canvas group has fully loaded
     */
    initialCanvasGroupLoaded() {
        this.home();
        this.canvasGroupMask.initialise(this.canvasService.getCurrentCanvasGroupRect(), this.modeService.mode !== _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD);
        d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.viewer.container.parentNode)
            .transition()
            .duration(_models_viewer_options__WEBPACK_IMPORTED_MODULE_16__["ViewerOptions"].transitions.OSDAnimationTime)
            .style('opacity', '1');
    }
    /**
     * Returns overlay-index for click-event if hit
     * @param target hit <rect>
     */
    getOverlayIndexFromClickEvent(target) {
        if (this.isCanvasGroupHit(target)) {
            const requestedCanvasGroup = this.overlays.indexOf(target);
            if (requestedCanvasGroup >= 0) {
                return requestedCanvasGroup;
            }
        }
        return -1;
    }
    getOptions() {
        const options = new _models_options__WEBPACK_IMPORTED_MODULE_11__["Options"]();
        options.ajaxWithCredentials = this.config.withCredentials;
        options.loadTilesWithAjax = this.config.loadTilesWithAjax;
        options.crossOriginPolicy = this.config.crossOriginPolicy;
        options.ajaxHeaders = this.config.ajaxHeaders;
        return options;
    }
    calculateCurrentCanvasGroup(center) {
        if (center) {
            const currentCanvasGroupIndex = this.canvasService.findClosestCanvasGroupIndex(center);
            this.currentCanvasIndex.next(currentCanvasGroupIndex);
        }
    }
    swipeToCanvasGroup(e) {
        // Don't swipe on pinch actions
        if (this.pinchStatus.active) {
            return;
        }
        const speed = e.speed;
        const dragEndPosision = e.position;
        const isCanvasGroupZoomed = this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED;
        const canvasGroupRect = this.canvasService.getCurrentCanvasGroupRect();
        const viewportBounds = this.getViewportBounds();
        const direction = _swipe_utils__WEBPACK_IMPORTED_MODULE_23__["SwipeUtils"].getSwipeDirection(this.dragStartPosition, dragEndPosision, isCanvasGroupZoomed);
        const currentCanvasGroupIndex = this.canvasService
            .currentCanvasGroupIndex;
        const calculateNextCanvasGroupStrategy = _calculate_next_canvas_group_factory__WEBPACK_IMPORTED_MODULE_19__["CalculateNextCanvasGroupFactory"].create(this.modeService.mode);
        let pannedPastSide, canvasGroupEndHitCountReached;
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE_ZOOMED) {
            pannedPastSide = _swipe_utils__WEBPACK_IMPORTED_MODULE_23__["SwipeUtils"].getSideIfPanningPastEndOfCanvasGroup(canvasGroupRect, viewportBounds);
            this.swipeDragEndCounter.addHit(pannedPastSide, direction);
            canvasGroupEndHitCountReached = this.swipeDragEndCounter.hitCountReached();
        }
        const newCanvasGroupIndex = calculateNextCanvasGroupStrategy.calculateNextCanvasGroup({
            currentCanvasGroupCenter: this.currentCanvasIndex.getValue(),
            speed: speed,
            direction: direction,
            currentCanvasGroupIndex: currentCanvasGroupIndex,
            canvasGroupEndHitCountReached: canvasGroupEndHitCountReached,
            viewingDirection: this.manifest.viewingDirection
        });
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].DASHBOARD ||
            this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_15__["ViewerMode"].PAGE ||
            (canvasGroupEndHitCountReached && direction)) {
            this.goToCanvasGroupStrategy.goToCanvasGroup({
                canvasGroupIndex: newCanvasGroupIndex,
                immediately: false,
                direction: direction
            });
        }
    }
    getViewportBounds() {
        return this.viewer.viewport.getBounds();
    }
}
ViewerService.ɵfac = function ViewerService_Factory(t) { return new (t || ViewerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_click_service_click_service__WEBPACK_IMPORTED_MODULE_7__["ClickService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_4__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_18__["ViewerLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_9__["IiifContentSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_style_service_style_service__WEBPACK_IMPORTED_MODULE_17__["StyleService"])); };
ViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewerService, factory: ViewerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _click_service_click_service__WEBPACK_IMPORTED_MODULE_7__["ClickService"] }, { type: _canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"] }, { type: _core_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_4__["ModeService"] }, { type: _viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_18__["ViewerLayoutService"] }, { type: _iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_9__["IiifContentSearchService"] }, { type: _style_service_style_service__WEBPACK_IMPORTED_MODULE_17__["StyleService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/zoom-strategy.ts":
/*!********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/zoom-strategy.ts ***!
  \********************************************************************************************/
/*! exports provided: ZoomStrategy, DefaultZoomStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomStrategy", function() { return ZoomStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultZoomStrategy", function() { return DefaultZoomStrategy; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openseadragon */ "../../node_modules/openseadragon/build/openseadragon/openseadragon.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openseadragon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");
/* harmony import */ var _models_viewer_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");
/* harmony import */ var _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony import */ var _models_viewer_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "../../libs/ngx-mime/src/lib/core/utils.ts");
/* harmony import */ var _zoom_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom-utils */ "../../libs/ngx-mime/src/lib/core/viewer-service/zoom-utils.ts");








class ZoomStrategy {
    constructor(viewer, canvasService, modeService, viewerLayoutService) {
        this.viewer = viewer;
        this.canvasService = canvasService;
        this.modeService = modeService;
        this.viewerLayoutService = viewerLayoutService;
    }
    setMinZoom(mode) {
        this.viewer.viewport.minZoomLevel = this.getHomeZoomLevel(mode);
    }
    getMinZoom() {
        return _utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].shortenDecimals(this.viewer.viewport.getMinZoom(), 5);
    }
    getMaxZoom() {
        return _utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].shortenDecimals(this.viewer.viewport.getMaxZoom(), 5);
    }
    getZoom() {
        return _utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].shortenDecimals(this.viewer.viewport.getZoom(true), 5);
    }
    goToHomeZoom() {
        this.zoomTo(this.getHomeZoomLevel(this.modeService.mode));
        if (this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE_ZOOMED) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE;
        }
    }
    zoomTo(level, position) {
        this.viewer.viewport.zoomTo(level, position);
    }
    getHomeZoomLevel(mode) {
        if (!this.viewer || !this.canvasService) {
            return;
        }
        let canvasGroupHeight;
        let canvasGroupWidth;
        let viewportBounds;
        if (mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].DASHBOARD) {
            canvasGroupHeight = this.canvasService.getMaxHeight();
            canvasGroupWidth = this.canvasService.getMaxWidth();
            viewportBounds = this.getDashboardViewportBounds();
        }
        else {
            const currentCanvasGroupRect = this.canvasService.getCurrentCanvasGroupRect();
            canvasGroupHeight = currentCanvasGroupRect.height;
            canvasGroupWidth = currentCanvasGroupRect.width;
            viewportBounds = this.viewer.viewport.getBounds();
        }
        return this.getFittedZoomLevel(viewportBounds, canvasGroupHeight, canvasGroupWidth);
    }
    zoomIn(zoomFactor, position) {
        if (typeof zoomFactor === 'undefined') {
            zoomFactor = _models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].zoom.zoomFactor;
        }
        if (typeof position !== 'undefined') {
            position = this.viewer.viewport.pointFromPixel(position);
            position = _zoom_utils__WEBPACK_IMPORTED_MODULE_7__["ZoomUtils"].constrainPositionToCanvasGroup(position, this.canvasService.getCurrentCanvasGroupRect());
        }
        if (this.modeService.mode !== _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE_ZOOMED) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE_ZOOMED;
        }
        this.zoomBy(zoomFactor, position);
    }
    zoomOut(zoomFactor, position) {
        if (typeof zoomFactor === 'undefined') {
            zoomFactor = Math.pow(_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].zoom.zoomFactor, -1);
        }
        if (typeof position !== 'undefined') {
            position = this.viewer.viewport.pointFromPixel(position);
            position = _zoom_utils__WEBPACK_IMPORTED_MODULE_7__["ZoomUtils"].constrainPositionToCanvasGroup(position, this.canvasService.getCurrentCanvasGroupRect());
        }
        if (this.isViewportLargerThanCanvasGroup()) {
            this.modeService.mode = _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].PAGE;
        }
        else {
            this.zoomBy(zoomFactor, position);
        }
    }
    getDashboardViewportBounds() {
        if (!this.viewer) {
            return;
        }
        const homeZoomFactor = this.getHomeZoomFactor();
        const maxViewportDimensions = new _models_dimensions__WEBPACK_IMPORTED_MODULE_2__["Dimensions"](d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.viewer.container.parentNode.parentNode)
            .node()
            .getBoundingClientRect());
        const viewportHeight = maxViewportDimensions.height -
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].padding.header -
            _models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].padding.footer;
        const viewportWidth = maxViewportDimensions.width * homeZoomFactor;
        const viewportSizeInViewportCoordinates = this.viewer.viewport.deltaPointsFromPixels(new openseadragon__WEBPACK_IMPORTED_MODULE_1__["Point"](viewportWidth, viewportHeight));
        return new openseadragon__WEBPACK_IMPORTED_MODULE_1__["Rect"](0, 0, viewportSizeInViewportCoordinates.x, viewportSizeInViewportCoordinates.y);
    }
    getFittedZoomLevel(viewportBounds, canvasGroupHeight, canvasGroupWidth) {
        const currentZoom = this.viewer.viewport.getZoom();
        const resizeRatio = viewportBounds.height / canvasGroupHeight;
        if (resizeRatio * canvasGroupWidth <= viewportBounds.width) {
            return _utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].shortenDecimals(resizeRatio * currentZoom, 5);
        }
        else {
            // Canvas group at full height is wider than viewport.  Return fit by width instead.
            return _utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].shortenDecimals((viewportBounds.width / canvasGroupWidth) * currentZoom, 5);
        }
    }
    zoomBy(zoomFactor, position) {
        const currentZoom = this.viewer.viewport.getZoom(false);
        zoomFactor = _zoom_utils__WEBPACK_IMPORTED_MODULE_7__["ZoomUtils"].constraintZoomFactor(zoomFactor, currentZoom, this.getMaxZoom());
        this.viewer.viewport.zoomBy(zoomFactor, position);
    }
    isViewportLargerThanCanvasGroup() {
        const canvasGroupRec = this.canvasService.getCurrentCanvasGroupRect();
        const viewportBounds = this.viewer.viewport.getBounds();
        const pbWidth = Math.round(canvasGroupRec.width);
        const pbHeight = Math.round(canvasGroupRec.height);
        const vpWidth = Math.round(viewportBounds.width);
        const vpHeight = Math.round(viewportBounds.height);
        return vpHeight >= pbHeight || vpWidth >= pbWidth;
    }
    getHomeZoomFactor() {
        return this.modeService.mode === _models_viewer_mode__WEBPACK_IMPORTED_MODULE_4__["ViewerMode"].DASHBOARD
            ? this.getDashboardZoomHomeFactor()
            : 1;
    }
    getDashboardZoomHomeFactor() {
        return this.viewerLayoutService.layout === _models_viewer_layout__WEBPACK_IMPORTED_MODULE_3__["ViewerLayout"].ONE_PAGE
            ? 0.85
            : 0.66;
    }
}
class DefaultZoomStrategy extends ZoomStrategy {
    constructor(viewer, canvasService, modeService, viewerLayoutService) {
        super(viewer, canvasService, modeService, viewerLayoutService);
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/core/viewer-service/zoom-utils.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/core/viewer-service/zoom-utils.ts ***!
  \*****************************************************************************************/
/*! exports provided: ZoomUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomUtils", function() { return ZoomUtils; });
class ZoomUtils {
    /**
     *
     * @param Point in OSD-viewport-coordinates
     * @param Rect canvasGroupBounds
     */
    static constrainPositionToCanvasGroup(point, canvasGroupBounds) {
        if (point.x < canvasGroupBounds.x) {
            point.x = canvasGroupBounds.x;
        }
        else if (point.x > canvasGroupBounds.x + canvasGroupBounds.width) {
            point.x = canvasGroupBounds.x + canvasGroupBounds.width;
        }
        return point;
    }
    static constraintZoomFactor(zoomFactor, currentZoom, maxZoom) {
        const target = currentZoom * zoomFactor;
        return target > maxZoom ? (maxZoom / target) * zoomFactor : zoomFactor;
    }
}


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy-factory.ts":
/*!**********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy-factory.ts ***!
  \**********************************************************************************************************/
/*! exports provided: HelpDialogConfigStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDialogConfigStrategyFactory", function() { return HelpDialogConfigStrategyFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _help_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-dialog-config-strategy */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy.ts");







class HelpDialogConfigStrategyFactory {
    constructor(mediaObserver, mimeDomHelper) {
        this.mediaObserver = mediaObserver;
        this.mimeDomHelper = mimeDomHelper;
    }
    create() {
        return this.mediaObserver.isActive('lt-md')
            ? new _help_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__["MobileHelpDialogConfigStrategy"]()
            : new _help_dialog_config_strategy__WEBPACK_IMPORTED_MODULE_3__["DesktopHelpDialogConfigStrategy"](this.mimeDomHelper);
    }
}
HelpDialogConfigStrategyFactory.ɵfac = function HelpDialogConfigStrategyFactory_Factory(t) { return new (t || HelpDialogConfigStrategyFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"])); };
HelpDialogConfigStrategyFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelpDialogConfigStrategyFactory, factory: HelpDialogConfigStrategyFactory.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpDialogConfigStrategyFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_2__["MimeDomHelper"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy.ts":
/*!**************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy.ts ***!
  \**************************************************************************************************/
/*! exports provided: MobileHelpDialogConfigStrategy, DesktopHelpDialogConfigStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHelpDialogConfigStrategy", function() { return MobileHelpDialogConfigStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopHelpDialogConfigStrategy", function() { return DesktopHelpDialogConfigStrategy; });
/* harmony import */ var _core_models_dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/models/dimensions */ "../../libs/ngx-mime/src/lib/core/models/dimensions.ts");

class MobileHelpDialogConfigStrategy {
    getConfig(elementRef) {
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: '100%',
            height: '100%',
            panelClass: 'help-panel'
        };
    }
}
class DesktopHelpDialogConfigStrategy {
    constructor(mimeDomHelper) {
        this.mimeDomHelper = mimeDomHelper;
    }
    getConfig(el) {
        const dimensions = this.getPosition(el);
        return {
            hasBackdrop: false,
            disableClose: false,
            autoFocus: false,
            width: `${DesktopHelpDialogConfigStrategy.dialogWidth}px`,
            position: {
                top: dimensions.top + 'px',
                left: dimensions.left + 'px'
            },
            panelClass: 'help-panel'
        };
    }
    getPosition(el) {
        const dimensions = this.mimeDomHelper.getBoundingClientRect(el);
        return new _core_models_dimensions__WEBPACK_IMPORTED_MODULE_0__["Dimensions"]({
            top: dimensions.top + 64,
            left: dimensions.right -
                DesktopHelpDialogConfigStrategy.dialogWidth -
                DesktopHelpDialogConfigStrategy.paddingRight
        });
    }
}
DesktopHelpDialogConfigStrategy.dialogWidth = 350;
DesktopHelpDialogConfigStrategy.paddingRight = 20;


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/help-dialog/help-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HelpDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDialogComponent", function() { return HelpDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");

















function HelpDialogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDialogClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.intl.help.helpLabel);
} }
function HelpDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.intl.help.helpLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDialogClose", true);
} }
class HelpDialogComponent {
    constructor(mediaObserver, intl, mimeResizeService) {
        this.mediaObserver = mediaObserver;
        this.intl = intl;
        this.mimeResizeService = mimeResizeService;
        this.tabHeight = {};
        this.mimeHeight = 0;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((dimensions) => {
            this.mimeHeight = dimensions.height;
            this.resizeTabHeight();
        });
        this.resizeTabHeight();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    resizeTabHeight() {
        let height = this.mimeHeight;
        if (this.mediaObserver.isActive('lt-md')) {
            this.tabHeight = {
                maxHeight: window.innerHeight - 128 + 'px'
            };
        }
        else {
            height -= 272;
            this.tabHeight = {
                maxHeight: height + 'px'
            };
        }
    }
}
HelpDialogComponent.ɵfac = function HelpDialogComponent_Factory(t) { return new (t || HelpDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_4__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_5__["MimeResizeService"])); };
HelpDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpDialogComponent, selectors: [["mime-help"]], decls: 15, vars: 13, consts: [["id", "help-container", 1, "help-container"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "help-content", 3, "ngStyle"], [3, "innerHTML"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-icon-button", "", 3, "matDialogClose"], ["mat-dialog-title", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", ""], ["mat-dialog-title", "", 1, "heading-desktop"]], template: function HelpDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HelpDialogComponent_div_2_Template, 8, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HelpDialogComponent_div_3_Template, 8, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mediaObserver.isActive("lt-md"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.tabHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.intl.help.line10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"]], styles: [".help-container[_ngcontent-%COMP%] {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n  font-size: 14px;\n}\n\n.help-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  overflow: auto;\n}\n\n  .help-panel {\n  max-width: none !important;\n}\n\n  .help-panel > .mat-dialog-container {\n  padding: 0 !important;\n  overflow: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9oZWxwLWRpYWxvZy9oZWxwLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFpRDtFQUNqRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFFNUI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBRW5CIiwiZmlsZSI6ImxpYnMvbmd4LW1pbWUvc3JjL2xpYi9oZWxwLWRpYWxvZy9oZWxwLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlbHAtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOjpuZy1kZWVwIC5oZWxwLXBhbmVsIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuaGVscC1wYW5lbCA+IC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGluaXRpYWw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-help',
                templateUrl: './help-dialog.component.html',
                styleUrls: ['./help-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_4__["MimeViewerIntl"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_5__["MimeResizeService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.module.ts":
/*!*****************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/help-dialog/help-dialog.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: HelpDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDialogModule", function() { return HelpDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "../../libs/ngx-mime/src/lib/shared/shared.module.ts");
/* harmony import */ var _help_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help-dialog.component */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.component.ts");
/* harmony import */ var _help_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-dialog.service */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.service.ts");
/* harmony import */ var _help_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-dialog-config-strategy-factory */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy-factory.ts");






class HelpDialogModule {
}
HelpDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HelpDialogModule });
HelpDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HelpDialogModule_Factory(t) { return new (t || HelpDialogModule)(); }, providers: [
        _help_dialog_service__WEBPACK_IMPORTED_MODULE_3__["HelpDialogService"],
        _help_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_4__["HelpDialogConfigStrategyFactory"]
    ], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HelpDialogModule, { declarations: [_help_dialog_component__WEBPACK_IMPORTED_MODULE_2__["HelpDialogComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [_help_dialog_component__WEBPACK_IMPORTED_MODULE_2__["HelpDialogComponent"]],
                providers: [
                    _help_dialog_service__WEBPACK_IMPORTED_MODULE_3__["HelpDialogService"],
                    _help_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_4__["HelpDialogConfigStrategyFactory"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.service.ts":
/*!******************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/help-dialog/help-dialog.service.ts ***!
  \******************************************************************************************/
/*! exports provided: HelpDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDialogService", function() { return HelpDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _help_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help-dialog.component */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.component.ts");
/* harmony import */ var _help_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-dialog-config-strategy-factory */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog-config-strategy-factory.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");











class HelpDialogService {
    constructor(dialog, helpDialogConfigStrategyFactory, mimeResizeService) {
        this.dialog = dialog;
        this.helpDialogConfigStrategyFactory = helpDialogConfigStrategyFactory;
        this.mimeResizeService = mimeResizeService;
        this.isHelpDialogOpen = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    initialize() {
        this.mimeResizeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(() => {
            if (this.isHelpDialogOpen) {
                const config = this.getDialogConfig();
                this.dialogRef.updatePosition(config.position);
                this.dialogRef.updateSize(config.width, config.height);
            }
        });
    }
    destroy() {
        this.close();
        this.destroyed.next();
    }
    set el(el) {
        this._el = el;
    }
    open() {
        if (!this.isHelpDialogOpen) {
            const config = this.getDialogConfig();
            this.dialogRef = this.dialog.open(_help_dialog_component__WEBPACK_IMPORTED_MODULE_4__["HelpDialogComponent"], config);
            this.dialogRef.afterClosed().subscribe(() => {
                this.isHelpDialogOpen = false;
            });
            this.isHelpDialogOpen = true;
        }
    }
    close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
        this.isHelpDialogOpen = false;
    }
    toggle() {
        this.isHelpDialogOpen ? this.close() : this.open();
    }
    isOpen() {
        return this.isHelpDialogOpen;
    }
    getDialogConfig() {
        return this.helpDialogConfigStrategyFactory
            .create()
            .getConfig(this._el);
    }
}
HelpDialogService.ɵfac = function HelpDialogService_Factory(t) { return new (t || HelpDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_help_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__["HelpDialogConfigStrategyFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"])); };
HelpDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HelpDialogService, factory: HelpDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _help_dialog_config_strategy_factory__WEBPACK_IMPORTED_MODULE_5__["HelpDialogConfigStrategyFactory"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_6__["MimeResizeService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/ngx-mime.module.ts":
/*!**************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/ngx-mime.module.ts ***!
  \**************************************************************************/
/*! exports provided: MimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeModule", function() { return MimeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openseadragon */ "../../node_modules/openseadragon/build/openseadragon/openseadragon.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openseadragon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _attribution_dialog_attribution_dialog_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attribution-dialog/attribution-dialog.module */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.module.ts");
/* harmony import */ var _canvas_group_dialog_canvas_group_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas-group-dialog/canvas-group-dialog.module */ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.module.ts");
/* harmony import */ var _content_search_dialog_content_search_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-search-dialog/content-search-dialog.module */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.module.ts");
/* harmony import */ var _help_dialog_help_dialog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help-dialog/help-dialog.module */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.module.ts");
/* harmony import */ var _contents_dialog_contents_dialog_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contents-dialog/contents-dialog.module */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "../../libs/ngx-mime/src/lib/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "../../libs/ngx-mime/src/lib/shared/shared.module.ts");
/* harmony import */ var _viewer_osd_toolbar_osd_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewer/osd-toolbar/osd-toolbar.component */ "../../libs/ngx-mime/src/lib/viewer/osd-toolbar/osd-toolbar.component.ts");
/* harmony import */ var _viewer_viewer_footer_canvas_group_navigator_canvas_group_navigator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewer/viewer-footer/canvas-group-navigator/canvas-group-navigator.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/canvas-group-navigator/canvas-group-navigator.component.ts");
/* harmony import */ var _viewer_viewer_footer_content_search_navigator_content_search_navigator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewer/viewer-footer/content-search-navigator/content-search-navigator.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/content-search-navigator/content-search-navigator.component.ts");
/* harmony import */ var _viewer_viewer_footer_viewer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./viewer/viewer-footer/viewer-footer.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/viewer-footer.component.ts");
/* harmony import */ var _viewer_viewer_header_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./viewer/viewer-header/icon/icon.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-header/icon/icon.component.ts");
/* harmony import */ var _viewer_viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewer/viewer-header/viewer-header.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-header/viewer-header.component.ts");
/* harmony import */ var _viewer_viewer_spinner_viewer_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewer/viewer-spinner/viewer-spinner.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-spinner/viewer-spinner.component.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./viewer/viewer.component */ "../../libs/ngx-mime/src/lib/viewer/viewer.component.ts");



















class MimeModule {
}
MimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MimeModule });
MimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MimeModule_Factory(t) { return new (t || MimeModule)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _contents_dialog_contents_dialog_module__WEBPACK_IMPORTED_MODULE_7__["ContentsDialogModule"],
            _attribution_dialog_attribution_dialog_module__WEBPACK_IMPORTED_MODULE_3__["AttributionDialogModule"],
            _help_dialog_help_dialog_module__WEBPACK_IMPORTED_MODULE_6__["HelpDialogModule"],
            _content_search_dialog_content_search_dialog_module__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogModule"],
            _canvas_group_dialog_canvas_group_dialog_module__WEBPACK_IMPORTED_MODULE_4__["CanvasGroupDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MimeModule, { declarations: [_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ViewerComponent"],
        _viewer_viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_15__["ViewerHeaderComponent"],
        _viewer_viewer_footer_viewer_footer_component__WEBPACK_IMPORTED_MODULE_13__["ViewerFooterComponent"],
        _viewer_osd_toolbar_osd_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["OsdToolbarComponent"],
        _viewer_viewer_footer_content_search_navigator_content_search_navigator_component__WEBPACK_IMPORTED_MODULE_12__["ContentSearchNavigatorComponent"],
        _viewer_viewer_footer_canvas_group_navigator_canvas_group_navigator_component__WEBPACK_IMPORTED_MODULE_11__["CanvasGroupNavigatorComponent"],
        _viewer_viewer_spinner_viewer_spinner_component__WEBPACK_IMPORTED_MODULE_16__["ViewerSpinnerComponent"],
        _viewer_viewer_header_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _contents_dialog_contents_dialog_module__WEBPACK_IMPORTED_MODULE_7__["ContentsDialogModule"],
        _attribution_dialog_attribution_dialog_module__WEBPACK_IMPORTED_MODULE_3__["AttributionDialogModule"],
        _help_dialog_help_dialog_module__WEBPACK_IMPORTED_MODULE_6__["HelpDialogModule"],
        _content_search_dialog_content_search_dialog_module__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogModule"],
        _canvas_group_dialog_canvas_group_dialog_module__WEBPACK_IMPORTED_MODULE_4__["CanvasGroupDialogModule"]], exports: [_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ViewerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ViewerComponent"],
                    _viewer_viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_15__["ViewerHeaderComponent"],
                    _viewer_viewer_footer_viewer_footer_component__WEBPACK_IMPORTED_MODULE_13__["ViewerFooterComponent"],
                    _viewer_osd_toolbar_osd_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["OsdToolbarComponent"],
                    _viewer_viewer_footer_content_search_navigator_content_search_navigator_component__WEBPACK_IMPORTED_MODULE_12__["ContentSearchNavigatorComponent"],
                    _viewer_viewer_footer_canvas_group_navigator_canvas_group_navigator_component__WEBPACK_IMPORTED_MODULE_11__["CanvasGroupNavigatorComponent"],
                    _viewer_viewer_spinner_viewer_spinner_component__WEBPACK_IMPORTED_MODULE_16__["ViewerSpinnerComponent"],
                    _viewer_viewer_header_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"]
                ],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _contents_dialog_contents_dialog_module__WEBPACK_IMPORTED_MODULE_7__["ContentsDialogModule"],
                    _attribution_dialog_attribution_dialog_module__WEBPACK_IMPORTED_MODULE_3__["AttributionDialogModule"],
                    _help_dialog_help_dialog_module__WEBPACK_IMPORTED_MODULE_6__["HelpDialogModule"],
                    _content_search_dialog_content_search_dialog_module__WEBPACK_IMPORTED_MODULE_5__["ContentSearchDialogModule"],
                    _canvas_group_dialog_canvas_group_dialog_module__WEBPACK_IMPORTED_MODULE_4__["CanvasGroupDialogModule"]
                ],
                exports: [_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ViewerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/shared/mime-material.module.ts":
/*!**************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/shared/mime-material.module.ts ***!
  \**************************************************************************************/
/*! exports provided: MimeMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MimeMaterialModule", function() { return MimeMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/fesm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");















class MimeMaterialModule {
}
MimeMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MimeMaterialModule });
MimeMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MimeMaterialModule_Factory(t) { return new (t || MimeMaterialModule)(); }, imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MimeMaterialModule, { exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MimeMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/shared/shared.module.ts":
/*!*******************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/shared/shared.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _mime_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mime-material.module */ "../../libs/ngx-mime/src/lib/shared/mime-material.module.ts");
/* harmony import */ var _core_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/spinner-service/spinner.service */ "../../libs/ngx-mime/src/lib/core/spinner-service/spinner.service.ts");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_core_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _mime_material_module__WEBPACK_IMPORTED_MODULE_4__["MimeMaterialModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _mime_material_module__WEBPACK_IMPORTED_MODULE_4__["MimeMaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _mime_material_module__WEBPACK_IMPORTED_MODULE_4__["MimeMaterialModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _mime_material_module__WEBPACK_IMPORTED_MODULE_4__["MimeMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _mime_material_module__WEBPACK_IMPORTED_MODULE_4__["MimeMaterialModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _mime_material_module__WEBPACK_IMPORTED_MODULE_4__["MimeMaterialModule"]
                ],
                providers: [_core_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/osd-toolbar/osd-toolbar.component.ts":
/*!***************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/osd-toolbar/osd-toolbar.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OsdToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsdToolbarComponent", function() { return OsdToolbarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _core_models_viewing_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");
/* harmony import */ var _core_style_service_style_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/style-service/style.service */ "../../libs/ngx-mime/src/lib/core/style-service/style.service.ts");
/* harmony import */ var _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../core/viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");

























const _c0 = ["container"];
function OsdToolbarComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.goToPreviousCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r1.intl.previousPageLabel)("disabled", ctx_r1.isFirstCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r1.intl.previousPageLabel);
} }
function OsdToolbarComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.goToNextCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r2.intl.nextPageLabel)("disabled", ctx_r2.isLastCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.intl.nextPageLabel);
} }
function OsdToolbarComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_ng_container_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.goToNextCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r3.intl.nextPageLabel)("disabled", ctx_r3.isLastCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r3.intl.nextPageLabel);
} }
function OsdToolbarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_ng_container_12_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.goToPreviousCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r4.intl.previousPageLabel)("disabled", ctx_r4.isFirstCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r4.intl.previousPageLabel);
} }
class OsdToolbarComponent {
    constructor(intl, renderer, changeDetectorRef, mimeService, viewerService, canvasService, styleService, iiifManifestService) {
        this.intl = intl;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.mimeService = mimeService;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.styleService = styleService;
        this.iiifManifestService = iiifManifestService;
        this.osdToolbarStyle = {};
        this.state = 'hide';
        this.invert = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get osdToolbarState() {
        return this.state;
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.invert = manifest.viewingDirection === _core_models_viewing_direction__WEBPACK_IMPORTED_MODULE_6__["ViewingDirection"].LTR;
            this.changeDetectorRef.detectChanges();
        });
        this.mimeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((dimensions) => {
            this.osdToolbarStyle = {
                top: dimensions.top + 110 + 'px'
            };
            this.changeDetectorRef.detectChanges();
        });
        this.viewerService.onCanvasGroupIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((currentCanvasGroupIndex) => {
            this.numberOfCanvasGroups = this.canvasService.numberOfCanvasGroups;
            this.isFirstCanvasGroup = this.isOnFirstCanvasGroup(currentCanvasGroupIndex);
            this.isLastCanvasGroup = this.isOnLastCanvasGroup(currentCanvasGroupIndex);
            this.changeDetectorRef.detectChanges();
        });
        this.intl.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(() => this.changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this.styleService.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(c => {
            const backgroundRgbaColor = this.styleService.convertToRgba(c, 0.3);
            this.renderer.setStyle(this.container.nativeElement, 'background-color', backgroundRgbaColor);
        });
    }
    zoomIn() {
        this.viewerService.zoomIn();
    }
    zoomOut() {
        this.viewerService.zoomOut();
    }
    home() {
        this.viewerService.home();
    }
    rotate() {
        this.viewerService.rotate();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    goToPreviousCanvasGroup() {
        this.viewerService.goToPreviousCanvasGroup();
    }
    goToNextCanvasGroup() {
        this.viewerService.goToNextCanvasGroup();
    }
    isOnFirstCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === 0;
    }
    isOnLastCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === this.numberOfCanvasGroups - 1;
    }
}
OsdToolbarComponent.ɵfac = function OsdToolbarComponent_Factory(t) { return new (t || OsdToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_9__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_10__["MimeResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_11__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_8__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_style_service_style_service__WEBPACK_IMPORTED_MODULE_7__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"])); };
OsdToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OsdToolbarComponent, selectors: [["mime-osd-toolbar"]], viewQuery: function OsdToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostVars: 1, hostBindings: function OsdToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@osdToolbarState", ctx.osdToolbarState);
    } }, decls: 23, vars: 13, consts: [[1, "osd-toolbar", 3, "ngStyle"], ["container", ""], ["fxHide", "", "fxShow.gt-sm", "true"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "osd-toolbar-container"], [1, "osd-toolbar-row"], [4, "ngIf"], ["id", "homeButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["id", "zoomInButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["id", "rotateButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["id", "zoomOutButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["id", "navigateBeforeButton", "mat-icon-button", "", 3, "matTooltip", "disabled", "click"], ["id", "navigateNextButton", "mat-icon-button", "", 3, "matTooltip", "disabled", "click"]], template: function OsdToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OsdToolbarComponent_ng_container_6_Template, 4, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OsdToolbarComponent_ng_container_7_Template, 4, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_Template_button_click_8_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OsdToolbarComponent_ng_container_11_Template, 4, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OsdToolbarComponent_ng_container_12_Template, 4, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_Template_button_click_14_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_Template_button_click_17_listener() { return ctx.rotate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "rotate_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OsdToolbarComponent_Template_button_click_20_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "zoom_out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.osdToolbarStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.invert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.intl.homeLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.intl.homeLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.invert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.invert);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.intl.zoomInLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.intl.zoomInLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.intl.rotateCwLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.intl.rotateCwLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.intl.zoomOutLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.intl.zoomOutLabel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultStyleDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_13__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  z-index: 1;\n}\n\n  .osd-toolbar-row > .mat-toolbar-row {\n  height: 40px;\n}\n\n.osd-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  background: transparent;\n  width: auto;\n  border-radius: 8px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvb3NkLXRvb2xiYXIvb3NkLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJsaWJzL25neC1taW1lL3NyYy9saWIvdmlld2VyL29zZC10b29sYmFyL29zZC10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB6LWluZGV4OiAxO1xufVxuXG46Om5nLWRlZXAgLm9zZC10b29sYmFyLXJvdyA+IC5tYXQtdG9vbGJhci1yb3cge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5vc2QtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('osdToolbarState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translate(-120px, 0)',
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translate(0px, 0px)',
                    display: 'block'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseInTime}ms ease-out`)
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseOutTime}ms ease-in`))
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OsdToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mime-osd-toolbar',
                templateUrl: './osd-toolbar.component.html',
                styleUrls: ['./osd-toolbar.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('osdToolbarState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translate(-120px, 0)',
                            display: 'none'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translate(0px, 0px)',
                            display: 'block'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseInTime}ms ease-out`)
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseOutTime}ms ease-in`))
                    ])
                ]
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_9__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_10__["MimeResizeService"] }, { type: _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_11__["ViewerService"] }, { type: _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_8__["CanvasService"] }, { type: _core_style_service_style_service__WEBPACK_IMPORTED_MODULE_7__["StyleService"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['container', { static: true }]
        }], osdToolbarState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@osdToolbarState']
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/canvas-group-navigator/canvas-group-navigator.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer-footer/canvas-group-navigator/canvas-group-navigator.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CanvasGroupNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGroupNavigatorComponent", function() { return CanvasGroupNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _canvas_group_dialog_canvas_group_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../canvas-group-dialog/canvas-group-dialog.service */ "../../libs/ngx-mime/src/lib/canvas-group-dialog/canvas-group-dialog.service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_models_AccessKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/models/AccessKeys */ "../../libs/ngx-mime/src/lib/core/models/AccessKeys.ts");
/* harmony import */ var _core_models_viewing_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");
/* harmony import */ var _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../core/canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_models_search_result__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../core/models/search-result */ "../../libs/ngx-mime/src/lib/core/models/search-result.ts");
/* harmony import */ var _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../core/viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "../../node_modules/@angular/material/fesm2015/slider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
























function CanvasGroupNavigatorComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasGroupNavigatorComponent_ng_container_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goToPreviousCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasGroupNavigatorComponent_ng_container_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goToNextCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.intl.previousPageLabel)("disabled", ctx_r0.isFirstCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.intl.previousPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.intl.nextPageLabel)("disabled", ctx_r0.isLastCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.intl.nextPageLabel);
} }
function CanvasGroupNavigatorComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasGroupNavigatorComponent_ng_container_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goToNextCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasGroupNavigatorComponent_ng_container_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goToPreviousCanvasGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1.intl.nextPageLabel)("disabled", ctx_r1.isLastCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.intl.nextPageLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1.intl.previousPageLabel)("disabled", ctx_r1.isFirstCanvasGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.intl.previousPageLabel);
} }
class CanvasGroupNavigatorComponent {
    constructor(intl, changeDetectorRef, viewerService, canvasService, pageDialogService, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.pageDialogService = pageDialogService;
        this.iiifManifestService = iiifManifestService;
        this.invert = false;
        this.currentSliderCanvasGroupIndex = -1;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.invert = manifest.viewingDirection === _core_models_viewing_direction__WEBPACK_IMPORTED_MODULE_6__["ViewingDirection"].LTR;
            this.changeDetectorRef.detectChanges();
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((currentCanvasGroupIndex) => {
            if (this.currentSliderCanvasGroupIndex !== -1 &&
                this.currentSliderCanvasGroupIndex === currentCanvasGroupIndex) {
                this.currentSliderCanvasGroupIndex = -1;
            }
            else if (this.currentSliderCanvasGroupIndex === -1) {
                this.currentCanvasGroupIndex = currentCanvasGroupIndex;
                this.canvasGroupLabel = this.canvasService.getCanvasGroupLabel(this.currentCanvasGroupIndex);
            }
            this.isFirstCanvasGroup = this.isOnFirstCanvasGroup(currentCanvasGroupIndex);
            this.isLastCanvasGroup = this.isOnLastCanvasGroup(currentCanvasGroupIndex);
            this.changeDetectorRef.detectChanges();
        });
        this.canvasService.onNumberOfCanvasGroupsChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((numberOfCanvasGroups) => {
            this.numberOfCanvasGroups = numberOfCanvasGroups;
            this.numberOfCanvases = this.canvasService.numberOfCanvases;
            this.isFirstCanvasGroup = this.isOnFirstCanvasGroup(this.currentCanvasGroupIndex);
            this.isLastCanvasGroup = this.isOnLastCanvasGroup(this.currentCanvasGroupIndex);
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    goToPreviousCanvasGroup() {
        this.viewerService.goToPreviousCanvasGroup();
    }
    goToNextCanvasGroup() {
        this.viewerService.goToNextCanvasGroup();
    }
    onSliderChange(change) {
        this.currentSliderCanvasGroupIndex = change.value;
        this.currentCanvasGroupIndex = change.value;
        this.canvasGroupLabel = this.canvasService.getCanvasGroupLabel(this.currentCanvasGroupIndex);
        this.viewerService.goToCanvasGroup(change.value, false);
        this.changeDetectorRef.detectChanges();
    }
    onSliderHotKey(event) {
        const accessKeys = new _core_models_AccessKeys__WEBPACK_IMPORTED_MODULE_5__["AccessKeys"](event);
        if (accessKeys.isSliderKeys()) {
            event.stopPropagation();
        }
    }
    openCanvasGroupDialog() {
        this.pageDialogService.toggle();
    }
    isOnFirstCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === 0;
    }
    isOnLastCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === this.numberOfCanvasGroups - 1;
    }
}
CanvasGroupNavigatorComponent.ɵfac = function CanvasGroupNavigatorComponent_Factory(t) { return new (t || CanvasGroupNavigatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_8__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_10__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_7__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_canvas_group_dialog_canvas_group_dialog_service__WEBPACK_IMPORTED_MODULE_3__["CanvasGroupDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"])); };
CanvasGroupNavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasGroupNavigatorComponent, selectors: [["mime-page-navigator"]], inputs: { searchResult: "searchResult" }, decls: 15, vars: 8, consts: [["fxLayout", "row", "fxFlex", "", "fxLayoutAlign", "start center"], ["fxFlex", ""], ["id", "navigationSlider", "fxFlex", "", 1, "navigation-slider", 3, "invert", "max", "value", "input", "keyup"], ["mat-button", "", "id", "goToCanvasGroupButton", 1, "canvasGroups", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "1px"], ["id", "currentCanvasGroupLabel"], ["id", "numOfCanvasGroups"], [1, "navigation-buttons"], [4, "ngIf"], ["id", "footerNavigateBeforeButton", "mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "disabled", "click"], ["id", "footerNavigateNextButton", "mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "disabled", "click"]], template: function CanvasGroupNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CanvasGroupNavigatorComponent_Template_mat_slider_input_3_listener($event) { return ctx.onSliderChange($event); })("keyup", function CanvasGroupNavigatorComponent_Template_mat_slider_keyup_3_listener($event) { return ctx.onSliderHotKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasGroupNavigatorComponent_Template_button_click_4_listener() { return ctx.openCanvasGroupDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CanvasGroupNavigatorComponent_ng_container_13_Template, 7, 6, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CanvasGroupNavigatorComponent_ng_container_14_Template, 7, 6, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invert", !ctx.invert)("max", ctx.numberOfCanvasGroups - 1)("value", ctx.currentCanvasGroupIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.intl.currentPageLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.canvasGroupLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.numberOfCanvases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.invert);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSlider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"]], styles: [".canvasGroups[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.navigation-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci9jYW52YXMtZ3JvdXAtbmF2aWdhdG9yL2NhbnZhcy1ncm91cC1uYXZpZ2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL3ZpZXdlci92aWV3ZXItZm9vdGVyL2NhbnZhcy1ncm91cC1uYXZpZ2F0b3IvY2FudmFzLWdyb3VwLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXNHcm91cHMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2aWdhdGlvbi1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasGroupNavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-page-navigator',
                templateUrl: './canvas-group-navigator.component.html',
                styleUrls: ['./canvas-group-navigator.component.scss']
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_8__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_10__["ViewerService"] }, { type: _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_7__["CanvasService"] }, { type: _canvas_group_dialog_canvas_group_dialog_service__WEBPACK_IMPORTED_MODULE_3__["CanvasGroupDialogService"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"] }]; }, { searchResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/content-search-navigator/content-search-navigator.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer-footer/content-search-navigator/content-search-navigator.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ContentSearchNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSearchNavigatorComponent", function() { return ContentSearchNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_models_search_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/models/search-result */ "../../libs/ngx-mime/src/lib/core/models/search-result.ts");
/* harmony import */ var _core_models_viewing_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/models/viewing-direction */ "../../libs/ngx-mime/src/lib/core/models/viewing-direction.ts");
/* harmony import */ var _core_navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/navigation/content-search-navigation-service/content-search-navigation.service */ "../../libs/ngx-mime/src/lib/core/navigation/content-search-navigation-service/content-search-navigation.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");























function ContentSearchNavigatorComponent_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchNavigatorComponent_div_1_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.goToPreviousCanvasGroupHit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchNavigatorComponent_div_1_ng_container_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.goToNextCanvasGroupHit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1.intl.previousHitLabel)("disabled", ctx_r1.isFirstCanvasGroupHit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.intl.previousHitLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r1.intl.nextHitLabel)("disabled", ctx_r1.isLastCanvasGroupHit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.intl.nextHitLabel);
} }
function ContentSearchNavigatorComponent_div_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchNavigatorComponent_div_1_ng_container_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.goToNextCanvasGroupHit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchNavigatorComponent_div_1_ng_container_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.goToPreviousCanvasGroupHit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2.intl.nextHitLabel)("disabled", ctx_r2.isLastCanvasGroupHit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.intl.nextHitLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2.intl.previousHitLabel)("disabled", ctx_r2.isFirstCanvasGroupHit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.intl.previousHitLabel);
} }
const _c0 = function (a0) { return { "not-on-page": a0 }; };
function ContentSearchNavigatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentSearchNavigatorComponent_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ContentSearchNavigatorComponent_div_1_ng_container_7_Template, 7, 6, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContentSearchNavigatorComponent_div_1_ng_container_8_Template, 7, 6, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r0.intl.closeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.intl.closeLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx_r0.isHitOnActiveCanvasGroup))("innerHTML", ctx_r0.intl.currentHitLabel(ctx_r0.currentIndex + 1, ctx_r0.searchResult.size()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invert);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.invert);
} }
class ContentSearchNavigatorComponent {
    constructor(intl, changeDetectorRef, canvasService, iiifContentSearchService, contentSearchNavigationService, iiifManifestService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.canvasService = canvasService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.contentSearchNavigationService = contentSearchNavigationService;
        this.iiifManifestService = iiifManifestService;
        this.isHitOnActiveCanvasGroup = false;
        this.isFirstCanvasGroupHit = false;
        this.isLastCanvasGroupHit = false;
        this.currentIndex = 0;
        this.invert = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.invert = manifest.viewingDirection === _core_models_viewing_direction__WEBPACK_IMPORTED_MODULE_8__["ViewingDirection"].LTR;
            this.changeDetectorRef.detectChanges();
        });
        this.intl.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe(() => this.changeDetectorRef.markForCheck());
        this.canvasService.onCanvasGroupIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroyed))
            .subscribe(canvasGroupIndex => {
            this.contentSearchNavigationService.update(canvasGroupIndex);
            this.currentIndex = this.contentSearchNavigationService.getCurrentIndex();
            this.isHitOnActiveCanvasGroup = this.contentSearchNavigationService.getHitOnActiveCanvasGroup();
            this.isFirstCanvasGroupHit = this.contentSearchNavigationService.getFirstHitCanvasGroup();
            this.isLastCanvasGroupHit = this.contentSearchNavigationService.getLastHitCanvasGroup();
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    clear() {
        this.iiifContentSearchService.destroy();
    }
    goToPreviousCanvasGroupHit() {
        this.contentSearchNavigationService.goToPreviousCanvasGroupHit();
    }
    goToNextCanvasGroupHit() {
        this.contentSearchNavigationService.goToNextCanvasGroupHit();
    }
}
ContentSearchNavigatorComponent.ɵfac = function ContentSearchNavigatorComponent_Factory(t) { return new (t || ContentSearchNavigatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_4__["IiifContentSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_9__["ContentSearchNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_5__["IiifManifestService"])); };
ContentSearchNavigatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentSearchNavigatorComponent, selectors: [["mime-content-search-navigator"]], inputs: { searchResult: "searchResult" }, decls: 2, vars: 1, consts: [["id", "content-search-navigator-toolbar", "color", "primary"], ["fxLayout", "row", "fxFlex", "", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["fxLayout", "row", "fxFlex", "", "fxLayoutAlign", "space-between center"], ["id", "footerNavigateCloseHitsButton", "mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "click"], ["fxFlex", "", "fxFlex", "", 1, "current-hit-label", 3, "ngClass", "innerHTML"], [1, "navigation-buttons"], [4, "ngIf"], ["id", "footerNavigatePreviousHitButton", "mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "disabled", "click"], ["id", "footerNavigateNextHitButton", "mat-icon-button", "", "matTooltipPosition", "above", 3, "matTooltip", "disabled", "click"]], template: function ContentSearchNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentSearchNavigatorComponent_div_1_Template, 9, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"]], styles: [".current-hit-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n}\n\n.not-on-page[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci9jb250ZW50LXNlYXJjaC1uYXZpZ2F0b3IvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJsaWJzL25neC1taW1lL3NyYy9saWIvdmlld2VyL3ZpZXdlci1mb290ZXIvY29udGVudC1zZWFyY2gtbmF2aWdhdG9yL2NvbnRlbnQtc2VhcmNoLW5hdmlnYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW50LWhpdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90LW9uLXBhZ2Uge1xuICBvcGFjaXR5OiAwLjY7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSearchNavigatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-content-search-navigator',
                templateUrl: './content-search-navigator.component.html',
                styleUrls: ['./content-search-navigator.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_6__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"] }, { type: _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_4__["IiifContentSearchService"] }, { type: _core_navigation_content_search_navigation_service_content_search_navigation_service__WEBPACK_IMPORTED_MODULE_9__["ContentSearchNavigationService"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_5__["IiifManifestService"] }]; }, { searchResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/viewer-footer.component.ts":
/*!*******************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer-footer/viewer-footer.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerFooterComponent", function() { return ViewerFooterComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _core_models_search_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/models/search-result */ "../../libs/ngx-mime/src/lib/core/models/search-result.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _canvas_group_navigator_canvas_group_navigator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./canvas-group-navigator/canvas-group-navigator.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/canvas-group-navigator/canvas-group-navigator.component.ts");
/* harmony import */ var _content_search_navigator_content_search_navigator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-search-navigator/content-search-navigator.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/content-search-navigator/content-search-navigator.component.ts");
















const _c0 = ["mimeFooterBefore"];
const _c1 = ["mimeFooterAfter"];
function ViewerFooterComponent_ng_template_3_Template(rf, ctx) { }
function ViewerFooterComponent_div_5_mime_content_search_navigator_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mime-content-search-navigator", 5);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchResult", ctx_r5.searchResult);
} }
function ViewerFooterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewerFooterComponent_div_5_mime_content_search_navigator_1_Template, 1, 1, "mime-content-search-navigator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showContentSearchNavigator);
} }
function ViewerFooterComponent_ng_template_9_Template(rf, ctx) { }
class ViewerFooterComponent {
    constructor(iiifContentSearchService, mediaObserver, changeDetectorRef) {
        this.iiifContentSearchService = iiifContentSearchService;
        this.mediaObserver = mediaObserver;
        this.changeDetectorRef = changeDetectorRef;
        this.state = 'hide';
        this.showNavigationToolbar = true;
        this.searchResult = new _core_models_search_result__WEBPACK_IMPORTED_MODULE_7__["SearchResult"]();
        this.showPageNavigator = true;
        this.showContentSearchNavigator = false;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get footerState() {
        return this.state;
    }
    ngOnInit() {
        this.iiifContentSearchService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed))
            .subscribe((sr) => {
            this.searchResult = sr;
            this.showContentSearchNavigator = this.searchResult.size() > 0;
            this.showPageNavigator =
                this.searchResult.size() === 0 || !this.isMobile();
            this.changeDetectorRef.detectChanges();
        });
        this.mediaSubscription = this.mediaObserver.asObservable().subscribe((changes) => {
            this.showPageNavigator =
                this.searchResult.size() === 0 || !this.isMobile();
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
        this.mediaSubscription.unsubscribe();
    }
    isMobile() {
        return this.mediaObserver.isActive('lt-md');
    }
}
ViewerFooterComponent.ɵfac = function ViewerFooterComponent_Factory(t) { return new (t || ViewerFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_6__["IiifContentSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
ViewerFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewerFooterComponent, selectors: [["mime-viewer-footer"]], viewQuery: function ViewerFooterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mimeFooterBefore = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mimeFooterAfter = _t.first);
    } }, hostVars: 1, hostBindings: function ViewerFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@footerState", ctx.footerState);
    } }, decls: 11, vars: 3, consts: [[1, "footer-toolbar"], ["fxLayout", "row", "fxFlex", "", "fxLayoutAlign", "start center"], ["mimeFooterBefore", ""], ["fxFlex", "250px", "fxFlex.lt-md", "100%", 4, "ngIf"], ["fxFlex", "", 3, "hidden"], [3, "searchResult"], ["mimeFooterAfter", ""], ["fxFlex", "250px", "fxFlex.lt-md", "100%"], [3, "searchResult", 4, "ngIf"]], template: function ViewerFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewerFooterComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ViewerFooterComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mime-page-navigator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewerFooterComponent_ng_template_9_Template, 0, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchResult.size() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showPageNavigator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("searchResult", ctx.searchResult);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _canvas_group_navigator_canvas_group_navigator_component__WEBPACK_IMPORTED_MODULE_11__["CanvasGroupNavigatorComponent"], _content_search_navigator_content_search_navigator_component__WEBPACK_IMPORTED_MODULE_12__["ContentSearchNavigatorComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.footer-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWZvb3Rlci92aWV3ZXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL3ZpZXdlci92aWV3ZXItZm9vdGVyL3ZpZXdlci1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZvb3Rlci10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('footerState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translate(0, 100%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translate(0, 0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseInTime + 'ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseOutTime + 'ms ease-out'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewerFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mime-viewer-footer',
                templateUrl: './viewer-footer.component.html',
                styleUrls: ['./viewer-footer.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('footerState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translate(0, 100%)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translate(0, 0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseInTime + 'ms ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_5__["ViewerOptions"].transitions.toolbarsEaseOutTime + 'ms ease-out'))
                    ])
                ]
            }]
    }], function () { return [{ type: _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_6__["IiifContentSearchService"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { mimeFooterBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mimeFooterBefore', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }], mimeFooterAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mimeFooterAfter', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }], footerState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@footerState']
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer-header/icon/icon.component.ts":
/*!***************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer-header/icon/icon.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



function IconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .st0 { clip-path: url(#SVGID_2_); } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clipPath", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "use", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function IconComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "style", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " .st0 { clip-path: url(#SVGID_2_); } ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clipPath", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "use", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class IconComponent {
    constructor() { }
    ngOnInit() { }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["mime-icon"]], inputs: { iconName: "iconName" }, decls: 3, vars: 2, consts: [[1, "mat-icon"], [4, "ngIf"], [1, "single-page-display"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 90 90", "preserveAspectRatio", "xMidYMin slice"], ["type", "text/css"], ["id", "SVGID_1_", "width", "100%", "height", "100%"], ["id", "SVGID_2_"], [0, "xlink", "href", "#SVGID_1_", 2, "overflow", "visible"], ["d", "M21.7,25.2H8.3v2.7h13.4V25.2z M21.7,18.1H8.3v2.7h13.4V18.1z M26.1,31.8H4V4.1h13.6v8.4h8.5V31.8z M30,31.6\n          V11.4L18.7,0H4.3C4.3,0,0,0,0,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C25.8,35.9,30,35.9,30,31.6", 1, "st0"], ["d", "M52.5,25.2H39.1v2.7h13.4V25.2z M52.5,18.1H39.1v2.7h13.4V18.1z M56.8,31.8H34.7V4.1h13.6v8.4h8.5V31.8z\n        M60.8,31.6V11.4L49.4,0H35c0,0-4.3,0-4.3,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C56.6,35.9,60.8,35.9,60.8,31.6", 1, "st0"], ["d", "M21.7,25.2H8.3v2.7h13.4V25.2z M21.7,18.1H8.3v2.7h13.4V18.1z M21.7,11.1H8.3v2.7h13.4V11.1z M26.1,31.8H4V4.1\n       h22.1V31.8z M30,31.6V4.3c0,0,0-4.3-4.3-4.3H4.3C4.3,0,0,0,0,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C25.8,35.9,30,35.9,30,31.6", 1, "st0"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IconComponent_ng_container_1_Template, 11, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IconComponent_ng_container_2_Template, 11, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconName === "single_page_display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconName === "two_page_display");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 7px;\n  vertical-align: middle;\n}\n\n.single-page-display[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWhlYWRlci9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6ImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWhlYWRlci9pY29uL2ljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2luZ2xlLXBhZ2UtZGlzcGxheSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer-header/viewer-header.component.ts":
/*!*******************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer-header/viewer-header.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ViewerHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerHeaderComponent", function() { return ViewerHeaderComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/iiif-manifest-service/iiif-manifest-utils */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-utils.ts");
/* harmony import */ var _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/mime-dom-helper */ "../../libs/ngx-mime/src/lib/core/mime-dom-helper.ts");
/* harmony import */ var _core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");
/* harmony import */ var _core_models_viewer_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _core_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/viewer-layout-service/viewer-layout-service */ "../../libs/ngx-mime/src/lib/core/viewer-layout-service/viewer-layout-service.ts");
/* harmony import */ var _content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../content-search-dialog/content-search-dialog.service */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.service.ts");
/* harmony import */ var _contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../contents-dialog/contents-dialog.service */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.service.ts");
/* harmony import */ var _core_fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../core/fullscreen-service/fullscreen.service */ "../../libs/ngx-mime/src/lib/core/fullscreen-service/fullscreen.service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _help_dialog_help_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../help-dialog/help-dialog.service */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./icon/icon.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-header/icon/icon.component.ts");































const _c0 = ["mimeHeaderBefore"];
const _c1 = ["mimeHeaderAfter"];
function ViewerHeaderComponent_ng_template_3_Template(rf, ctx) { }
function ViewerHeaderComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewerHeaderComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.toggleViewerLayout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mime-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r2.viewerLayout === ctx_r2.ViewerLayout.ONE_PAGE ? "toggleTwoPageViewButton" : "toggleSinglePageViewButton")("matTooltip", ctx_r2.viewerLayout === ctx_r2.ViewerLayout.ONE_PAGE ? ctx_r2.intl.twoPageViewLabel : ctx_r2.intl.singlePageViewLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r2.viewerLayout === ctx_r2.ViewerLayout.ONE_PAGE ? ctx_r2.intl.twoPageViewLabel : ctx_r2.intl.singlePageViewLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("iconName", ctx_r2.viewerLayout === ctx_r2.ViewerLayout.ONE_PAGE ? "two_page_display" : "single_page_display");
} }
function ViewerHeaderComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewerHeaderComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.toggleSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r3.intl.searchLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r3.intl.searchLabel);
} }
function ViewerHeaderComponent_button_16_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewerHeaderComponent_button_16_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ViewerHeaderComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewerHeaderComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.toggleFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewerHeaderComponent_button_16_mat_icon_1_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewerHeaderComponent_button_16_mat_icon_2_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r4.fullscreenLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r4.fullscreenLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isInFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isInFullScreen);
} }
function ViewerHeaderComponent_ng_template_18_Template(rf, ctx) { }
class ViewerHeaderComponent {
    constructor(intl, changeDetectorRef, contentsDialogService, contentSearchDialogService, helpDialogService, iiifManifestService, fullscreenService, mimeDomHelper, viewerLayoutService) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.contentsDialogService = contentsDialogService;
        this.contentSearchDialogService = contentSearchDialogService;
        this.helpDialogService = helpDialogService;
        this.iiifManifestService = iiifManifestService;
        this.fullscreenService = fullscreenService;
        this.mimeDomHelper = mimeDomHelper;
        this.viewerLayoutService = viewerLayoutService;
        this.state = 'hide';
        this.isContentSearchEnabled = false;
        this.isFullscreenEnabled = false;
        this.isInFullscreen = false;
        this.fullscreenLabel = this.intl.fullScreenLabel;
        this.isPagedManifest = false;
        this.viewerLayout = _core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_6__["ViewerLayout"].ONE_PAGE;
        this.ViewerLayout = _core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_6__["ViewerLayout"]; // enables parsing of enum in template
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get headerState() {
        return this.state;
    }
    ngOnInit() {
        this.isFullscreenEnabled = this.fullscreenService.isEnabled();
        this.intl.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(() => this.changeDetectorRef.markForCheck());
        this.fullscreenService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe(() => {
            this.isInFullscreen = this.fullscreenService.isFullscreen();
            this.fullscreenLabel = this.isInFullscreen
                ? this.intl.exitFullScreenLabel
                : this.intl.fullScreenLabel;
            this.changeDetectorRef.detectChanges();
        });
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            this.manifest = manifest;
            this.isContentSearchEnabled = manifest.service ? true : false;
            this.isPagedManifest = _core_iiif_manifest_service_iiif_manifest_utils__WEBPACK_IMPORTED_MODULE_4__["ManifestUtils"].isManifestPaged(manifest);
            this.changeDetectorRef.detectChanges();
        });
        this.viewerLayoutService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((viewerLayout) => {
            this.viewerLayout = viewerLayout;
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    toggleContents() {
        this.contentSearchDialogService.close();
        this.helpDialogService.close();
        this.contentsDialogService.toggle();
    }
    toggleSearch() {
        this.contentsDialogService.close();
        this.helpDialogService.close();
        this.contentSearchDialogService.toggle();
    }
    toggleHelp() {
        this.contentsDialogService.close();
        this.contentSearchDialogService.close();
        this.helpDialogService.toggle();
    }
    toggleFullscreen() {
        return this.mimeDomHelper.toggleFullscreen();
    }
    isInFullScreen() {
        return this.fullscreenService.isFullscreen();
    }
    toggleViewerLayout() {
        this.viewerLayoutService.toggle();
    }
    setLayoutOnePage() {
        this.viewerLayoutService.setLayout(_core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_6__["ViewerLayout"].ONE_PAGE);
    }
    setLayoutTwoPage() {
        this.viewerLayoutService.setLayout(_core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_6__["ViewerLayout"].TWO_PAGE);
    }
}
ViewerHeaderComponent.ɵfac = function ViewerHeaderComponent_Factory(t) { return new (t || ViewerHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_13__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_10__["ContentsDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_9__["ContentSearchDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_help_dialog_help_dialog_service__WEBPACK_IMPORTED_MODULE_14__["HelpDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_12__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_11__["FullscreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_5__["MimeDomHelper"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_8__["ViewerLayoutService"])); };
ViewerHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewerHeaderComponent, selectors: [["mime-viewer-header"]], viewQuery: function ViewerHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mimeHeaderBefore = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mimeHeaderAfter = _t.first);
    } }, hostVars: 1, hostBindings: function ViewerHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsyntheticHostProperty"]("@headerState", ctx.headerState);
    } }, decls: 20, vars: 9, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "header-container"], ["mimeHeaderBefore", ""], ["fxFlexOffset", "16px", 1, "label", 3, "matTooltip"], ["fxFlex", "noshrink", "fxLayout", "row", "fxLayoutAlign", "end center", 1, "buttons-container"], ["mat-icon-button", "", 3, "id", "matTooltip", "click", 4, "ngIf"], ["id", "contentsDialogButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["aria-hidden", "true"], ["id", "contentSearchDialogButton", "mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], ["id", "helpDialogButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["id", "fullscreenButton", "mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], ["mimeHeaderAfter", ""], ["mat-icon-button", "", 3, "id", "matTooltip", "click"], [3, "iconName"], ["id", "contentSearchDialogButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["id", "fullscreenButton", "mat-icon-button", "", 3, "matTooltip", "click"], ["aria-hidden", "true", 4, "ngIf"]], template: function ViewerHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewerHeaderComponent_ng_template_3_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewerHeaderComponent_button_8_Template, 2, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewerHeaderComponent_Template_button_click_9_listener() { return ctx.toggleContents(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ViewerHeaderComponent_button_12_Template, 3, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewerHeaderComponent_Template_button_click_13_listener() { return ctx.toggleHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ViewerHeaderComponent_button_16_Template, 3, 4, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ViewerHeaderComponent_ng_template_18_Template, 0, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.manifest == null ? null : ctx.manifest.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.manifest == null ? null : ctx.manifest.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPagedManifest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.intl.contentsLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.intl.contentsLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isContentSearchEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx.intl.help.helpLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.intl.help.helpLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFullscreenEnabled);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexOffsetDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_21__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n  max-height: 64px;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 17px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  padding: 0px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLWhlYWRlci92aWV3ZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFFbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFFbkIiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL3ZpZXdlci92aWV3ZXItaGVhZGVyL3ZpZXdlci1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1heC1oZWlnaHQ6IDY0cHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5tYXQtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('headerState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translate(0, -100%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translate(0px, 0px)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_7__["ViewerOptions"].transitions.toolbarsEaseInTime + 'ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_7__["ViewerOptions"].transitions.toolbarsEaseOutTime + 'ms ease-out'))
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewerHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mime-viewer-header',
                templateUrl: './viewer-header.component.html',
                styleUrls: ['./viewer-header.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('headerState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translate(0, -100%)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            transform: 'translate(0px, 0px)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_7__["ViewerOptions"].transitions.toolbarsEaseInTime + 'ms ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_7__["ViewerOptions"].transitions.toolbarsEaseOutTime + 'ms ease-out'))
                    ])
                ]
            }]
    }], function () { return [{ type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_13__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_10__["ContentsDialogService"] }, { type: _content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_9__["ContentSearchDialogService"] }, { type: _help_dialog_help_dialog_service__WEBPACK_IMPORTED_MODULE_14__["HelpDialogService"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_12__["IiifManifestService"] }, { type: _core_fullscreen_service_fullscreen_service__WEBPACK_IMPORTED_MODULE_11__["FullscreenService"] }, { type: _core_mime_dom_helper__WEBPACK_IMPORTED_MODULE_5__["MimeDomHelper"] }, { type: _core_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_8__["ViewerLayoutService"] }]; }, { mimeHeaderBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mimeHeaderBefore', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }], mimeHeaderAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['mimeHeaderAfter', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], static: true }]
        }], headerState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['@headerState']
        }] }); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer-spinner/viewer-spinner.component.ts":
/*!*********************************************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer-spinner/viewer-spinner.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ViewerSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerSpinnerComponent", function() { return ViewerSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/spinner-service/spinner.service */ "../../libs/ngx-mime/src/lib/core/spinner-service/spinner.service.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/fesm2015/progress-spinner.js");






class ViewerSpinnerComponent {
    constructor(spinnerService, changeDetectorRef) {
        this.spinnerService = spinnerService;
        this.changeDetectorRef = changeDetectorRef;
        this.visible = false;
    }
    ngOnInit() {
        this.spinnerSub = this.spinnerService.spinnerState.subscribe((state) => {
            this.visible = state.show;
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.spinnerSub.unsubscribe();
    }
}
ViewerSpinnerComponent.ɵfac = function ViewerSpinnerComponent_Factory(t) { return new (t || ViewerSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ViewerSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewerSpinnerComponent, selectors: [["mime-spinner"]], decls: 2, vars: 2, consts: [[1, "mime-spinner"]], template: function ViewerSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mime-spinner--active", ctx.visible);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]], styles: [".mime-spinner[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 45%;\n  transform: translate(-50%, 0);\n  z-index: 9999;\n}\n\n.mime-spinner--active[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLXNwaW5uZXIvdmlld2VyLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL3ZpZXdlci92aWV3ZXItc3Bpbm5lci92aWV3ZXItc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW1lLXNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA0NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB6LWluZGV4OiA5OTk5OyAvLyBUT0RPOiBUaGlzIHNob3VsZG4ndCBiZSBhcmJpdHJhcnkgc2V0XG59XG5cbi5taW1lLXNwaW5uZXItLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-spinner',
                templateUrl: './viewer-spinner.component.html',
                styleUrls: ['./viewer-spinner.component.scss']
            }]
    }], function () { return [{ type: _core_spinner_service_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "../../libs/ngx-mime/src/lib/viewer/viewer.component.ts":
/*!**********************************************************************************!*\
  !*** /home/ronnym/git/ngx-mime/libs/ngx-mime/src/lib/viewer/viewer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/iiif-manifest-service/iiif-manifest-service */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-service.ts");
/* harmony import */ var _contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contents-dialog/contents-dialog.service */ "../../libs/ngx-mime/src/lib/contents-dialog/contents-dialog.service.ts");
/* harmony import */ var _attribution_dialog_attribution_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../attribution-dialog/attribution-dialog.service */ "../../libs/ngx-mime/src/lib/attribution-dialog/attribution-dialog.service.ts");
/* harmony import */ var _content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content-search-dialog/content-search-dialog.service */ "../../libs/ngx-mime/src/lib/content-search-dialog/content-search-dialog.service.ts");
/* harmony import */ var _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/mime-resize-service/mime-resize.service */ "../../libs/ngx-mime/src/lib/core/mime-resize-service/mime-resize.service.ts");
/* harmony import */ var _core_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/mode-service/mode.service */ "../../libs/ngx-mime/src/lib/core/mode-service/mode.service.ts");
/* harmony import */ var _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/models/viewer-mode */ "../../libs/ngx-mime/src/lib/core/models/viewer-mode.ts");
/* harmony import */ var _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/canvas-service/canvas-service */ "../../libs/ngx-mime/src/lib/core/canvas-service/canvas-service.ts");
/* harmony import */ var _viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewer-header/viewer-header.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-header/viewer-header.component.ts");
/* harmony import */ var _viewer_footer_viewer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./viewer-footer/viewer-footer.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-footer/viewer-footer.component.ts");
/* harmony import */ var _osd_toolbar_osd_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./osd-toolbar/osd-toolbar.component */ "../../libs/ngx-mime/src/lib/viewer/osd-toolbar/osd-toolbar.component.ts");
/* harmony import */ var _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/viewer-service/viewer.service */ "../../libs/ngx-mime/src/lib/core/viewer-service/viewer.service.ts");
/* harmony import */ var _core_mime_viewer_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/mime-viewer-config */ "../../libs/ngx-mime/src/lib/core/mime-viewer-config.ts");
/* harmony import */ var _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../core/iiif-content-search-service/iiif-content-search.service */ "../../libs/ngx-mime/src/lib/core/iiif-content-search-service/iiif-content-search.service.ts");
/* harmony import */ var _core_models_viewer_options__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/models/viewer-options */ "../../libs/ngx-mime/src/lib/core/models/viewer-options.ts");
/* harmony import */ var _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/intl/viewer-intl */ "../../libs/ngx-mime/src/lib/core/intl/viewer-intl.ts");
/* harmony import */ var _core_access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/access-keys-handler-service/access-keys.service */ "../../libs/ngx-mime/src/lib/core/access-keys-handler-service/access-keys.service.ts");
/* harmony import */ var _core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/models/viewer-layout */ "../../libs/ngx-mime/src/lib/core/models/viewer-layout.ts");
/* harmony import */ var _core_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/viewer-layout-service/viewer-layout-service */ "../../libs/ngx-mime/src/lib/core/viewer-layout-service/viewer-layout-service.ts");
/* harmony import */ var _core_iiif_manifest_service_iiif_manifest_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/iiif-manifest-service/iiif-manifest-utils */ "../../libs/ngx-mime/src/lib/core/iiif-manifest-service/iiif-manifest-utils.ts");
/* harmony import */ var _core_models_viewerState__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/models/viewerState */ "../../libs/ngx-mime/src/lib/core/models/viewerState.ts");
/* harmony import */ var _core_style_service_style_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../core/style-service/style.service */ "../../libs/ngx-mime/src/lib/core/style-service/style.service.ts");
/* harmony import */ var _help_dialog_help_dialog_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../help-dialog/help-dialog.service */ "../../libs/ngx-mime/src/lib/help-dialog/help-dialog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _viewer_spinner_viewer_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./viewer-spinner/viewer-spinner.component */ "../../libs/ngx-mime/src/lib/viewer/viewer-spinner/viewer-spinner.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");


















































const _c0 = ["mimeHeader"];
const _c1 = ["mimeFooter"];
const _c2 = ["mimeOsdToolbar"];
function ViewerComponent_mime_osd_toolbar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mime-osd-toolbar", null, 8);
} }
function ViewerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.intl.somethingHasGoneWrongLabel);
} }
class ViewerComponent {
    constructor(snackBar, intl, el, iiifManifestService, contentsDialogService, attributionDialogService, contentSearchDialogService, helpDialogService, viewerService, mimeService, changeDetectorRef, modeService, iiifContentSearchService, accessKeysHandlerService, canvasService, viewerLayoutService, styleService, zone) {
        this.snackBar = snackBar;
        this.intl = intl;
        this.el = el;
        this.iiifManifestService = iiifManifestService;
        this.contentsDialogService = contentsDialogService;
        this.attributionDialogService = attributionDialogService;
        this.contentSearchDialogService = contentSearchDialogService;
        this.helpDialogService = helpDialogService;
        this.viewerService = viewerService;
        this.mimeService = mimeService;
        this.changeDetectorRef = changeDetectorRef;
        this.modeService = modeService;
        this.iiifContentSearchService = iiifContentSearchService;
        this.accessKeysHandlerService = accessKeysHandlerService;
        this.canvasService = canvasService;
        this.viewerLayoutService = viewerLayoutService;
        this.styleService = styleService;
        this.zone = zone;
        this.config = new _core_mime_viewer_config__WEBPACK_IMPORTED_MODULE_16__["MimeViewerConfig"]();
        this.tabIndex = 0;
        this.viewerModeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.canvasChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.qChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.manifestChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isCanvasPressed = false;
        this.viewerState = new _core_models_viewerState__WEBPACK_IMPORTED_MODULE_24__["ViewerState"]();
        this.errorMessage = null;
        contentsDialogService.el = el;
        attributionDialogService.el = el;
        contentSearchDialogService.el = el;
        helpDialogService.el = el;
        mimeService.el = el;
    }
    get mimeHeaderBeforeRef() {
        return this.header.mimeHeaderBefore;
    }
    get mimeHeaderAfterRef() {
        return this.header.mimeHeaderAfter;
    }
    get mimeFooterBeforeRef() {
        return this.footer.mimeFooterBefore;
    }
    get mimeFooterAfterRef() {
        return this.footer.mimeFooterAfter;
    }
    ngOnInit() {
        this.styleService.init();
        this.modeService.initialMode = this.config.initViewerMode;
        this.iiifManifestService.currentManifest
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((manifest) => {
            if (manifest) {
                this.initialize();
                this.currentManifest = manifest;
                this.manifestChanged.next(manifest);
                this.viewerLayoutService.init(_core_iiif_manifest_service_iiif_manifest_utils__WEBPACK_IMPORTED_MODULE_23__["ManifestUtils"].isManifestPaged(manifest));
                this.changeDetectorRef.detectChanges();
                this.viewerService.setUpViewer(manifest, this.config);
                if (this.config.attributionDialogEnabled && manifest.attribution) {
                    this.attributionDialogService.open(this.config.attributionDialogHideTimeout);
                }
                if (this.q) {
                    this.iiifContentSearchService.search(manifest, this.q);
                }
            }
        });
        this.viewerService.onOsdReadyChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((state) => {
            // Don't reset current page when switching layout
            if (state &&
                this.canvasIndex &&
                !this.canvasService.currentCanvasGroupIndex) {
                this.viewerService.goToCanvas(this.canvasIndex, false);
            }
        });
        this.iiifManifestService.errorMessage
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((error) => {
            this.resetCurrentManifest();
            this.errorMessage = error;
            this.changeDetectorRef.detectChanges();
        });
        this.iiifContentSearchService.onQChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((q) => {
            this.qChanged.emit(q);
        });
        this.iiifContentSearchService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((sr) => {
            this.viewerService.highlight(sr);
        });
        this.viewerService.isCanvasPressed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((value) => {
            this.isCanvasPressed = value;
            this.changeDetectorRef.detectChanges();
        });
        this.modeService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((mode) => {
            this.toggleToolbarsState(mode.currentValue);
            if (mode.previousValue === _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].DASHBOARD &&
                mode.currentValue === _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].PAGE) {
                this.viewerState.contentDialogState.isOpen = this.contentsDialogService.isOpen();
                this.viewerState.contentDialogState.selectedIndex = this.contentsDialogService.getSelectedIndex();
                this.viewerState.contentsSearchDialogState.isOpen = this.contentSearchDialogService.isOpen();
                this.viewerState.helpDialogState.isOpen = this.helpDialogService.isOpen();
                this.zone.run(() => {
                    this.contentsDialogService.close();
                    this.contentSearchDialogService.close();
                    this.helpDialogService.close();
                });
            }
            if (mode.currentValue === _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].DASHBOARD) {
                this.zone.run(() => {
                    if (this.viewerState.contentDialogState.isOpen) {
                        this.contentsDialogService.open(this.viewerState.contentDialogState.selectedIndex);
                    }
                    if (this.viewerState.contentsSearchDialogState.isOpen) {
                        this.contentSearchDialogService.open();
                    }
                    if (this.viewerState.helpDialogState.isOpen) {
                        this.helpDialogService.open();
                    }
                });
            }
            this.viewerModeChanged.emit(mode.currentValue);
        });
        this.canvasService.onCanvasGroupIndexChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((canvasGroupIndex) => {
            const canvasIndex = this.canvasService.findCanvasByCanvasIndex(canvasGroupIndex);
            if (canvasIndex !== -1) {
                this.canvasChanged.emit(canvasIndex);
            }
        });
        this.mimeService.onResize
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttle"])(val => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(_core_models_viewer_options__WEBPACK_IMPORTED_MODULE_18__["ViewerOptions"].transitions.OSDAnimationTime)))
            .subscribe(() => {
            setTimeout(() => {
                this.viewerService.home();
            }, _core_models_viewer_options__WEBPACK_IMPORTED_MODULE_18__["ViewerOptions"].transitions.OSDAnimationTime);
        });
        this.viewerLayoutService.onChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed))
            .subscribe((viewerLayout) => {
            this.viewerLayout = viewerLayout;
        });
        this.loadManifest();
    }
    ngOnChanges(changes) {
        let manifestUriIsChanged = false;
        let qIsChanged = false;
        let canvasIndexChanged = false;
        if (changes['q']) {
            const qChanges = changes['q'];
            if (!qChanges.isFirstChange() &&
                qChanges.currentValue !== qChanges.firstChange) {
                this.q = qChanges.currentValue;
                qIsChanged = true;
            }
        }
        if (changes['canvasIndex']) {
            const canvasIndexChanges = changes['canvasIndex'];
            if (!canvasIndexChanges.isFirstChange() &&
                canvasIndexChanges.currentValue !== canvasIndexChanges.firstChange) {
                this.canvasIndex = canvasIndexChanges.currentValue;
                canvasIndexChanged = true;
            }
        }
        if (changes['manifestUri']) {
            const manifestUriChanges = changes['manifestUri'];
            if (!manifestUriChanges.isFirstChange() &&
                manifestUriChanges.currentValue !== manifestUriChanges.previousValue) {
                this.modeService.mode = this.config.initViewerMode;
                this.manifestUri = manifestUriChanges.currentValue;
                manifestUriIsChanged = true;
            }
        }
        if (manifestUriIsChanged) {
            this.loadManifest();
        }
        else {
            if (qIsChanged) {
                this.iiifContentSearchService.search(this.currentManifest, this.q);
            }
            if (canvasIndexChanged) {
                this.viewerService.goToCanvas(this.canvasIndex, true);
            }
        }
    }
    handleKeys(event) {
        this.accessKeysHandlerService.handleKeyEvents(event);
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.config.isDropEnabled) {
            const url = event.dataTransfer.getData('URL');
            const params = new URL(url).searchParams;
            const manifestUri = params.get('manifest');
            const startCanvasId = params.get('canvas');
            if (manifestUri) {
                this.manifestUri = manifestUri.startsWith('//')
                    ? `${location.protocol}${manifestUri}`
                    : manifestUri;
                this.loadManifest();
                if (startCanvasId) {
                    this.manifestChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(manifest => {
                        const canvasIndex = manifest.sequences[0].canvases.findIndex(c => c.id === startCanvasId);
                        if (canvasIndex !== -1) {
                            setTimeout(() => {
                                this.viewerService.goToCanvas(canvasIndex, true);
                            }, 0);
                        }
                    });
                }
            }
        }
        else {
            this.snackBar.open(this.intl.dropDisabled, null, {
                duration: 3000
            });
        }
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
        this.cleanup();
        this.iiifManifestService.destroy();
        this.iiifContentSearchService.destroy();
    }
    toggleToolbarsState(mode) {
        if (this.header && this.footer) {
            switch (mode) {
                case _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].DASHBOARD:
                    this.header.state = this.footer.state = 'show';
                    if (this.config.navigationControlEnabled && this.osdToolbar) {
                        this.osdToolbar.state = 'hide';
                    }
                    break;
                case _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].PAGE:
                    this.header.state = this.footer.state = 'hide';
                    if (this.config.navigationControlEnabled && this.osdToolbar) {
                        this.osdToolbar.state = 'show';
                    }
                    break;
            }
            this.changeDetectorRef.detectChanges();
        }
    }
    ngAfterViewChecked() {
        this.mimeService.markForCheck();
    }
    loadManifest() {
        this.cleanup();
        this.iiifManifestService.load(this.manifestUri);
    }
    initialize() {
        this.attributionDialogService.initialize();
        this.contentsDialogService.initialize();
        this.contentSearchDialogService.initialize();
        this.helpDialogService.initialize();
    }
    cleanup() {
        this.viewerState = new _core_models_viewerState__WEBPACK_IMPORTED_MODULE_24__["ViewerState"]();
        this.attributionDialogService.destroy();
        this.contentsDialogService.destroy();
        this.contentSearchDialogService.destroy();
        this.helpDialogService.destroy();
        this.viewerService.destroy();
        this.resetErrorMessage();
    }
    resetCurrentManifest() {
        this.currentManifest = null;
    }
    resetErrorMessage() {
        this.errorMessage = null;
    }
    setClasses() {
        return {
            'mode-page': this.modeService.mode === _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].PAGE,
            'mode-page-zoomed': this.modeService.mode === _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].PAGE_ZOOMED,
            'mode-dashboard': this.modeService.mode === _core_models_viewer_mode__WEBPACK_IMPORTED_MODULE_10__["ViewerMode"].DASHBOARD,
            'layout-one-page': this.viewerLayout === _core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_21__["ViewerLayout"].ONE_PAGE,
            'layout-two-page': this.viewerLayout === _core_models_viewer_layout__WEBPACK_IMPORTED_MODULE_21__["ViewerLayout"].TWO_PAGE,
            'canvas-pressed': this.isCanvasPressed
        };
    }
}
ViewerComponent.ɵfac = function ViewerComponent_Factory(t) { return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_19__["MimeViewerIntl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_attribution_dialog_attribution_dialog_service__WEBPACK_IMPORTED_MODULE_6__["AttributionDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ContentSearchDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_help_dialog_help_dialog_service__WEBPACK_IMPORTED_MODULE_26__["HelpDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_15__["ViewerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_8__["MimeResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_9__["ModeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_17__["IiifContentSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_20__["AccessKeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_11__["CanvasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_22__["ViewerLayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_style_service_style_service__WEBPACK_IMPORTED_MODULE_25__["StyleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewerComponent, selectors: [["mime-viewer"]], viewQuery: function ViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.osdToolbar = _t.first);
    } }, hostBindings: function ViewerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ViewerComponent_keyup_HostBindingHandler($event) { return ctx.handleKeys($event); })("drop", function ViewerComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("dragover", function ViewerComponent_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function ViewerComponent_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); });
    } }, inputs: { manifestUri: "manifestUri", q: "q", canvasIndex: "canvasIndex", config: "config", tabIndex: "tabIndex" }, outputs: { viewerModeChanged: "viewerModeChanged", canvasChanged: "canvasChanged", qChanged: "qChanged", manifestChanged: "manifestChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 5, consts: [["id", "mimeViewer", 1, "viewer-container", 3, "ngClass", "hidden", "tabIndex"], [1, "navbar", "navbar-header"], ["mimeHeader", ""], [4, "ngIf"], ["id", "openseadragon"], [1, "navbar", "navbar-footer"], ["mimeFooter", ""], ["class", "error-container", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["mimeOsdToolbar", ""], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "error-container"]], template: function ViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mime-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mime-viewer-header", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewerComponent_mime_osd_toolbar_4_Template, 2, 0, "mime-osd-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mime-viewer-footer", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewerComponent_div_8_Template, 3, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses())("hidden", ctx.errorMessage !== null)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.config == null ? null : ctx.config.navigationControlEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_27__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__["DefaultClassDirective"], _viewer_spinner_viewer_spinner_component__WEBPACK_IMPORTED_MODULE_29__["ViewerSpinnerComponent"], _viewer_header_viewer_header_component__WEBPACK_IMPORTED_MODULE_12__["ViewerHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _viewer_footer_viewer_footer_component__WEBPACK_IMPORTED_MODULE_13__["ViewerFooterComponent"], _osd_toolbar_osd_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["OsdToolbarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__["DefaultLayoutAlignDirective"]], styles: [".viewer-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%] .openseadragon-container {\n  flex-grow: 1;\n}\n\n[_nghost-%COMP%] .openseadragon-canvas:focus {\n  outline: none;\n}\n\n#openseadragon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  opacity: 0;\n  width: 100%;\n}\n\n  .viewer-container.mode-page-zoomed .tile:hover {\n  cursor: -webkit-grab;\n}\n\n.viewer-container.canvas-pressed[_ngcontent-%COMP%], .viewer-container.canvas-pressed[_ngcontent-%COMP%] .tile:hover {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n  .viewer-container .tile {\n  cursor: pointer;\n  fill-opacity: 0;\n}\n\n  .viewer-container.mode-dashboard.layout-one-page .tile,   .viewer-container.mode-dashboard.layout-two-page .page-group .tile {\n  stroke: rgba(0, 0, 0, 0.15);\n  stroke-width: 8;\n  transition: 0.25s ease stroke;\n}\n\n  .viewer-container.mode-dashboard.layout-one-page .tile:hover,  \n.viewer-container.mode-dashboard.layout-two-page\n.page-group:hover\n.tile {\n  stroke: rgba(0, 0, 0, 0.45);\n}\n\n  .viewer-container .hit {\n  fill: rgba(255, 255, 0, 0.6);\n}\n\n  .viewer-container .selected {\n  fill: rgba(255, 225, 0, 0.6);\n}\n\n.navbar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  overflow: hidden;\n  z-index: 2;\n}\n\n.navbar-header[_ngcontent-%COMP%] {\n  top: 0;\n  width: 100%;\n}\n\n.navbar-footer[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n  .cdk-overlay-container {\n  z-index: 2147483647;\n}\n\n.error-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3ZXIvdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7Ozs7O0VBS0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibGlicy9uZ3gtbWltZS9zcmMvbGliL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld2VyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuOmhvc3Q6Om5nLWRlZXAub3BlbnNlYWRyYWdvbi1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbjpob3N0OjpuZy1kZWVwLm9wZW5zZWFkcmFnb24tY2FudmFzOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI29wZW5zZWFkcmFnb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLnZpZXdlci1jb250YWluZXIubW9kZS1wYWdlLXpvb21lZCAudGlsZTpob3ZlciB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xufVxuXG4udmlld2VyLWNvbnRhaW5lci5jYW52YXMtcHJlc3NlZCxcbi52aWV3ZXItY29udGFpbmVyLmNhbnZhcy1wcmVzc2VkOjpuZy1kZWVwLnRpbGU6aG92ZXIge1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG59XG5cbjo6bmctZGVlcCAudmlld2VyLWNvbnRhaW5lciAudGlsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmlsbC1vcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnZpZXdlci1jb250YWluZXIubW9kZS1kYXNoYm9hcmQubGF5b3V0LW9uZS1wYWdlIC50aWxlLFxuOjpuZy1kZWVwIC52aWV3ZXItY29udGFpbmVyLm1vZGUtZGFzaGJvYXJkLmxheW91dC10d28tcGFnZSAucGFnZS1ncm91cCAudGlsZSB7XG4gIHN0cm9rZTogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgc3Ryb2tlLXdpZHRoOiA4O1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlIHN0cm9rZTtcbn1cblxuOjpuZy1kZWVwIC52aWV3ZXItY29udGFpbmVyLm1vZGUtZGFzaGJvYXJkLmxheW91dC1vbmUtcGFnZSAudGlsZTpob3Zlcixcbjo6bmctZGVlcFxuICAudmlld2VyLWNvbnRhaW5lci5tb2RlLWRhc2hib2FyZC5sYXlvdXQtdHdvLXBhZ2VcbiAgLnBhZ2UtZ3JvdXA6aG92ZXJcbiAgLnRpbGUge1xuICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG59XG5cbjo6bmctZGVlcCAudmlld2VyLWNvbnRhaW5lciAuaGl0IHtcbiAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMCwgMC42KTtcbn1cblxuOjpuZy1kZWVwIC52aWV3ZXItY29udGFpbmVyIC5zZWxlY3RlZCB7XG4gIGZpbGw6IHJnYmEoMjU1LCAyMjUsIDAsIDAuNik7XG59XG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubmF2YmFyLWhlYWRlciB7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXZiYXItZm9vdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mime-viewer',
                templateUrl: './viewer.component.html',
                styleUrls: ['./viewer.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _core_intl_viewer_intl__WEBPACK_IMPORTED_MODULE_19__["MimeViewerIntl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _core_iiif_manifest_service_iiif_manifest_service__WEBPACK_IMPORTED_MODULE_4__["IiifManifestService"] }, { type: _contents_dialog_contents_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ContentsDialogService"] }, { type: _attribution_dialog_attribution_dialog_service__WEBPACK_IMPORTED_MODULE_6__["AttributionDialogService"] }, { type: _content_search_dialog_content_search_dialog_service__WEBPACK_IMPORTED_MODULE_7__["ContentSearchDialogService"] }, { type: _help_dialog_help_dialog_service__WEBPACK_IMPORTED_MODULE_26__["HelpDialogService"] }, { type: _core_viewer_service_viewer_service__WEBPACK_IMPORTED_MODULE_15__["ViewerService"] }, { type: _core_mime_resize_service_mime_resize_service__WEBPACK_IMPORTED_MODULE_8__["MimeResizeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _core_mode_service_mode_service__WEBPACK_IMPORTED_MODULE_9__["ModeService"] }, { type: _core_iiif_content_search_service_iiif_content_search_service__WEBPACK_IMPORTED_MODULE_17__["IiifContentSearchService"] }, { type: _core_access_keys_handler_service_access_keys_service__WEBPACK_IMPORTED_MODULE_20__["AccessKeysService"] }, { type: _core_canvas_service_canvas_service__WEBPACK_IMPORTED_MODULE_11__["CanvasService"] }, { type: _core_viewer_layout_service_viewer_layout_service__WEBPACK_IMPORTED_MODULE_22__["ViewerLayoutService"] }, { type: _core_style_service_style_service__WEBPACK_IMPORTED_MODULE_25__["StyleService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { manifestUri: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], q: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvasIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewerModeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], canvasChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], qChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], manifestChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mimeHeader', { static: true }]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mimeFooter', { static: true }]
        }], osdToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mimeOsdToolbar']
        }], handleKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keyup', ['$event']]
        }], onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }] }); })();


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





const appRoutes = [
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'demo', component: _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_0__["ViewerComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _core_navbar_theme_picker_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/navbar/theme-picker/theme-service/theme.service */ "./src/app/core/navbar/theme-picker/theme-service/theme.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "../../node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _core_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/sidenav/sidenav.component */ "./src/app/core/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");















class AppComponent {
    constructor(mediaObserver, overlayContainer, themeService) {
        this.mediaObserver = mediaObserver;
        this.overlayContainer = overlayContainer;
        this.themeService = themeService;
        this.sidenavMode = 'side';
        this.sidenavIsOpen = false;
    }
    ngOnInit() {
        this.watcher = this.mediaObserver.asObservable().subscribe((changes) => {
            this.layout();
        });
        this.layout();
        this.setTheme(this.themeService.getStoredTheme().name);
        this.overlayContainer
            .getContainerElement()
            .classList.add(this.currentTheme);
        this.themeService.onThemeUpdate.subscribe((theme) => {
            this.setTheme(theme.name);
        });
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    layout() {
        if (this.mediaObserver.isActive('lt-md')) {
            this.sidenavMode = 'over';
            this.sidenavIsOpen = false;
        }
        else {
            this.sidenavMode = 'side';
            this.sidenavIsOpen = true;
        }
    }
    setTheme(name) {
        this.overlayContainer
            .getContainerElement()
            .classList.remove(this.currentTheme);
        this.currentTheme = name;
        this.overlayContainer.getContainerElement().classList.add(name);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_navbar_theme_picker_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["demo-app"]], decls: 8, vars: 5, consts: [["fullscreen", "", 1, "demo-root", "mat-app-background", 3, "ngClass"], ["role", "navigation", 3, "mode", "opened"], ["start", ""], [3, "sidenav"], ["role", "main", "fxFlexFill", ""], [1, "demo-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "demo-sidenav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "demo-navbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.currentTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.sidenavMode)("opened", ctx.sidenavIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sidenav", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sidenav", _r0);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _core_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexFillDirective"], _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: Roboto, 'Helvetica Neue', sans-serif;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 240px;\n}\n\n.demo-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 64px);\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImFwcHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmRlbW8tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'demo-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayContainer"] }, { type: _core_navbar_theme_picker_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nrwl/angular */ "../../node_modules/@nrwl/angular/fesm2015/nrwl-angular.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! openseadragon */ "../../node_modules/openseadragon/build/openseadragon/openseadragon.js");
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(openseadragon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/fesm2015/overlay.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["FullscreenOverlayContainer"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["NxModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_10__["ViewerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["NxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _nrwl_angular__WEBPACK_IMPORTED_MODULE_4__["NxModule"].forRoot()
                ],
                providers: [{ provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"], useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["FullscreenOverlayContainer"] }],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_10__["ViewerComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class AuthInterceptor {
    intercept(req, next) {
        const withCredentials = this.useWithCredentials(req.url);
        const authReq = req.clone({ withCredentials: withCredentials });
        return next.handle(authReq);
    }
    useWithCredentials(url) {
        return AuthInterceptor.withCredentialsSites.some(s => url.indexOf(s) !== -1);
    }
}
AuthInterceptor.withCredentialsSites = ['api.nb.no', 'api.dev.nb.no'];
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/core/auth.interceptor.ts");
/* harmony import */ var _manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manifest-service/manifest.service */ "./src/app/core/manifest-service/manifest.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _navbar_theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/theme-picker/theme-picker.component */ "./src/app/core/navbar/theme-picker/theme-picker.component.ts");
/* harmony import */ var _navbar_theme_picker_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/theme-picker/theme-service/theme.service */ "./src/app/core/navbar/theme-picker/theme-service/theme.service.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/core/sidenav/sidenav.component.ts");











class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12)); }, providers: [
        _manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_5__["ManifestService"],
        _navbar_theme_picker_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"], multi: true }
    ], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_7__["ThemePickerComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_7__["ThemePickerComponent"]],
                exports: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]],
                providers: [
                    _manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_5__["ManifestService"],
                    _navbar_theme_picker_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"], multi: true }
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/manifest-service/manifest.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/manifest-service/manifest.service.ts ***!
  \***********************************************************/
/*! exports provided: ManifestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestService", function() { return ManifestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class ManifestService {
    constructor() { }
    getManifests() {
        return ManifestService.manifests;
    }
}
ManifestService.manifests = [
    {
        label: 'LTR',
        uri: 'assets/fixtures/presentation/2/simple-ltr-manifest.json'
    },
    {
        label: 'RTL',
        uri: 'assets/fixtures/presentation/2/simple-rtl-manifest.json'
    },
    {
        label: 'Minimum',
        uri: 'assets/fixtures/presentation/2/minimum-manifest.json'
    },
    {
        label: 'Downloadable',
        uri: 'assets/fixtures/presentation/2/downloadble-manifest.json'
    },
    {
        label: 'Searchable',
        uri: 'assets/fixtures/presentation/2/searchable-manifest.json'
    },
    {
        label: 'License',
        uri: 'assets/fixtures/presentation/2/license-manifest.json'
    },
    {
        label: 'Attribution',
        uri: 'assets/fixtures/presentation/2/attribution-manifest.json'
    },
    {
        label: 'Landscape',
        uri: 'assets/fixtures/presentation/2/landscape-manifest.json'
    },
    {
        label: 'Different sizes',
        uri: 'assets/fixtures/presentation/2/different-size-manifest.json'
    },
    {
        label: 'Static image',
        uri: 'assets/fixtures/presentation/2/static-image-manifest.json'
    }
];
ManifestService.ɵfac = function ManifestService_Factory(t) { return new (t || ManifestService)(); };
ManifestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ManifestService, factory: ManifestService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManifestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-picker/theme-picker.component */ "./src/app/core/navbar/theme-picker/theme-picker.component.ts");











class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    toggle() {
        this.sidenav.toggle();
    }
    onSubmit() {
        this.router.navigate(['demo'], {
            queryParams: {
                manifestUri: this.manifestUri
            }
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["demo-navbar"]], inputs: { sidenav: "sidenav" }, decls: 16, vars: 1, consts: [["color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-icon-button", "", "aria-label", "Menu", 3, "click"], [1, "mat-24"], ["fxFlex", "grow", "fxFlex.gt-sm", "500px"], [3, "ngSubmit"], ["form", "ngForm"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], [1, "cdk-visually-hidden"], ["fxFlex", "", "aria-label", "Paste the URL of a IIIF manifest here", "placeholder", "Paste the URL of a IIIF manifest here", "autocomplete", "off", "name", "manifestUri", 1, "manifest-uri", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "accent"], ["fxFlex", "grow", 1, "theme-picker"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavbarComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "DemoWeb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_11_listener($event) { return ctx.manifestUri = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "VIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "demo-theme-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.manifestUri);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_8__["ThemePickerComponent"]], styles: [".manifest-uri[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 40px;\n  padding: 6px;\n  border-radius: 6px;\n  background: #bcaaa3;\n  border-color: #bcaaa3;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.theme-picker[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtby9zcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUdaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcHMvZGVtby9zcmMvYXBwL2NvcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5pZmVzdC11cmkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogI2JjYWFhMztcbiAgYm9yZGVyLWNvbG9yOiAjYmNhYWEzO1xufVxuXG5tYXQtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRoZW1lLXBpY2tlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'demo-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/navbar/theme-picker/theme-picker.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/navbar/theme-picker/theme-picker.component.ts ***!
  \********************************************************************/
/*! exports provided: ThemePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePickerComponent", function() { return ThemePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _theme_service_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-service/theme.service */ "./src/app/core/navbar/theme-picker/theme-service/theme.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");










function ThemePickerComponent_mat_grid_tile_6_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ThemePickerComponent_mat_grid_tile_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemePickerComponent_mat_grid_tile_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const theme_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.installTheme(theme_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ThemePickerComponent_mat_grid_tile_6_mat_icon_3_Template, 2, 0, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentTheme.name === theme_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", theme_r2.primary);
} }
class ThemePickerComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.themes = themeService.getAllThemes();
        this.currentTheme = themeService.getStoredTheme();
        if (this.currentTheme) {
            this.installTheme(this.currentTheme);
        }
    }
    installTheme(theme) {
        this.currentTheme = theme;
        if (this.currentTheme) {
            this.themeService.storeTheme(this.currentTheme);
        }
    }
}
ThemePickerComponent.ɵfac = function ThemePickerComponent_Factory(t) { return new (t || ThemePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"])); };
ThemePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThemePickerComponent, selectors: [["demo-theme-picker"]], decls: 7, vars: 2, consts: [["mat-icon-button", "", "matTooltip", "Select a theme!", "aria-label", "Theme picker", "tabindex", "-1", 3, "mat-menu-trigger-for"], ["hasBackdrop", "false", 1, "docs-theme-picker-menu"], ["themeMenu", "matMenu"], ["cols", "2"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [1, "docs-theme-picker-swatch"], ["class", "docs-theme-chosen-icon", 4, "ngIf"], [1, "docs-theme-picker-primary"], [1, "docs-theme-chosen-icon"]], template: function ThemePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ThemePickerComponent_mat_grid_tile_6_Template, 5, 3, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-menu-trigger-for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.themes);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-menu-content[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\n[mat-menu-item][_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 0;\n  overflow: hidden;\n}\n\n.docs-theme-picker-swatch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  margin: 6px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.docs-theme-chosen-icon[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.docs-theme-picker-swatch[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n\n.docs-theme-picker-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.docs-theme-picker-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 6px;\n  width: 100%;\n  height: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtby9zcmMvYXBwL2NvcmUvbmF2YmFyL3RoZW1lLXBpY2tlci90aGVtZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztBQUVsQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBRXBCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFFZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7QUFFYiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9jb3JlL25hdmJhci90aGVtZS1waWNrZXIvdGhlbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5bbWF0LW1lbnUtaXRlbV0ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRvY3MtdGhlbWUtcGlja2VyLXN3YXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kb2NzLXRoZW1lLWNob3Nlbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZG9jcy10aGVtZS1waWNrZXItc3dhdGNoOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kb2NzLXRoZW1lLXBpY2tlci1wcmltYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRvY3MtdGhlbWUtcGlja2VyLWFjY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDZweDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'demo-theme-picker',
                templateUrl: './theme-picker.component.html',
                styleUrls: ['./theme-picker.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _theme_service_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/navbar/theme-picker/theme-service/theme.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/navbar/theme-picker/theme-service/theme.service.ts ***!
  \*************************************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


class ThemeService {
    constructor() {
        this.onThemeUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.themes = [
            {
                primary: '#5d4037',
                accent: '#b0bec5',
                name: 'brown-theme',
                isDark: false,
                isDefault: true
            },
            {
                primary: '#0277bd',
                accent: '#01579b',
                name: 'blue-theme',
                isDark: false
            },
            {
                primary: '#18ffff',
                accent: '#b2ff59',
                name: 'cyan-theme',
                isDark: true
            },
            {
                primary: '#673ab7',
                accent: '#ffd740',
                name: 'purple-theme',
                isDark: true
            }
        ];
    }
    getAllThemes() {
        return this.themes;
    }
    storeTheme(theme) {
        try {
            window.localStorage[ThemeService.storageKey] = JSON.stringify(theme);
        }
        catch (e) { }
        this.onThemeUpdate.emit(theme);
    }
    getStoredTheme() {
        try {
            return JSON.parse(window.localStorage[ThemeService.storageKey] || this.getDefaultTheme());
        }
        catch (e) {
            return this.getDefaultTheme();
        }
    }
    clearStorage() {
        try {
            window.localStorage.removeItem(ThemeService.storageKey);
        }
        catch (e) { }
    }
    getDefaultTheme() {
        return this.themes.filter(t => t.isDefault)[0];
    }
}
ThemeService.storageKey = 'docs-theme-storage-current';
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/sidenav/sidenav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidenav/sidenav.component.ts ***!
  \***************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../manifest-service/manifest.service */ "./src/app/core/manifest-service/manifest.service.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");








const _c0 = function () { return ["demo"]; };
const _c1 = function (a0) { return { manifestUri: a0 }; };
function SidenavComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const manifest_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, manifest_r1.uri));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", manifest_r1.label, " ");
} }
class SidenavComponent {
    constructor(manifestService) {
        this.manifestService = manifestService;
    }
    ngOnInit() {
        this.manifests = this.manifestService.getManifests();
    }
    close() {
        if (this.sidenav.mode === 'over') {
            this.sidenav.close();
        }
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_2__["ManifestService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["demo-sidenav"]], inputs: { sidenav: "sidenav" }, decls: 12, vars: 1, consts: [["aria-label", "Sample manifests"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "queryParams", "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "href", "https://www.nb.no/items/f080d07ddce0f9ebd2615c44e040197d?manifest=https://api.nb.no/catalog/v1/iiif/f080d07ddce0f9ebd2615c44e040197d/manifest", "target", "_blank"], ["src", "assets/logo-iiif.png", "alt", "IIIF Drag-n-drop", 1, "logo-iiif"], ["mat-list-item", "", "href", "https://www.nb.no/items/f080d07ddce0f9ebd2615c44e040197d?manifest=https://api.nb.no/catalog/v1/iiif/f080d07ddce0f9ebd2615c44e040197d/manifest&canvas=https://api.nb.no/catalog/v1/iiif/f080d07ddce0f9ebd2615c44e040197d/canvas/URN:NBN:no-nb_digibok_2011070412003_0020", "target", "_blank"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "queryParams", "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manifest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_a_3_Template, 2, 6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Drag and drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Drag and drop with canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.manifests);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: ["a[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: rgba(0, 0, 0, 0.06);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  letter-spacing: 1px;\n  line-height: 28px;\n  text-transform: uppercase;\n  font-weight: 400;\n  margin: 0;\n  padding: 0 16px;\n  background: rgba(0, 0, 0, 0.6);\n  color: rgba(255, 255, 255, 0.87);\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.logo-iiif[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtby9zcmMvYXBwL2NvcmUvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGdDQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHBzL2RlbW8vc3JjL2FwcC9jb3JlL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuODcpO1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxvZ28taWlpZiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'demo-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_2__["ManifestService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/demoMaterialModule.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/demoMaterialModule.ts ***!
  \**********************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "../../node_modules/@angular/material/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");












class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nationallibraryofnorway/ngx-mime */ "../../libs/ngx-mime/src/index.ts");
/* harmony import */ var _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demoMaterialModule */ "./src/app/shared/demoMaterialModule.ts");







class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
            _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__["MimeModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
        _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__["MimeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
        _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__["MimeModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
        _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__["MimeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                    _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__["MimeModule"]
                ],
                declarations: [],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _demoMaterialModule__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                    _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_4__["MimeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nationallibraryofnorway/ngx-mime */ "../../libs/ngx-mime/src/index.ts");
/* harmony import */ var _core_manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../core/manifest-service/manifest.service */ "./src/app/core/manifest-service/manifest.service.ts");
/* harmony import */ var _libs_ngx_mime_src_lib_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/ngx-mime/src/lib/viewer/viewer.component */ "../../libs/ngx-mime/src/lib/viewer/viewer.component.ts");








class ViewerComponent {
    constructor(route, router, manifestService) {
        this.route = route;
        this.router = router;
        this.manifestService = manifestService;
        this.config = new _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_2__["MimeViewerConfig"]({
            attributionDialogEnabled: true,
            attributionDialogHideTimeout: -1,
            navigationControlEnabled: true,
            preserveZoomOnCanvasGroupChange: true,
            startOnTopOnCanvasGroupChange: true,
            isDropEnabled: true,
            initViewerMode: _nationallibraryofnorway_ngx_mime__WEBPACK_IMPORTED_MODULE_2__["MimeViewerMode"].PAGE
        });
    }
    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            this.manifestUri = params['manifestUri'];
            if (!this.manifestUri) {
                this.router.navigate(['demo'], {
                    queryParams: {
                        manifestUri: this.manifestService.getManifests()[0].uri
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
ViewerComponent.ɵfac = function ViewerComponent_Factory(t) { return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_3__["ManifestService"])); };
ViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewerComponent, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [[1, "viewer-container"], [3, "manifestUri", "config"]], template: function ViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mime-viewer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("manifestUri", ctx.manifestUri)("config", ctx.config);
    } }, directives: [_libs_ngx_mime_src_lib_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ViewerComponent"]], styles: [".viewer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvZGVtby9zcmMvYXBwL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiYXBwcy9kZW1vL3NyYy9hcHAvdmlld2VyL3ZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './viewer.component.html',
                styleUrls: ['./viewer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_manifest_service_manifest_service__WEBPACK_IMPORTED_MODULE_3__["ManifestService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ronnym/git/ngx-mime/apps/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map