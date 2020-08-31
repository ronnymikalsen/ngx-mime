import { __decorate } from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ViewerOptions } from '../../core/models/viewer-options';
import { IiifContentSearchService } from './../../core/iiif-content-search-service/iiif-content-search.service';
import { SearchResult } from './../../core/models/search-result';
var ViewerFooterComponent = /** @class */ (function () {
    function ViewerFooterComponent(iiifContentSearchService, mediaObserver, changeDetectorRef) {
        this.iiifContentSearchService = iiifContentSearchService;
        this.mediaObserver = mediaObserver;
        this.changeDetectorRef = changeDetectorRef;
        this.state = 'hide';
        this.showNavigationToolbar = true;
        this.searchResult = new SearchResult();
        this.showPageNavigator = true;
        this.showContentSearchNavigator = false;
        this.destroyed = new Subject();
    }
    Object.defineProperty(ViewerFooterComponent.prototype, "footerState", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    ViewerFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iiifContentSearchService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (sr) {
            _this.searchResult = sr;
            _this.showContentSearchNavigator = _this.searchResult.size() > 0;
            _this.showPageNavigator =
                _this.searchResult.size() === 0 || !_this.isMobile();
            _this.changeDetectorRef.detectChanges();
        });
        this.mediaSubscription = this.mediaObserver.asObservable().subscribe(function (changes) {
            _this.showPageNavigator =
                _this.searchResult.size() === 0 || !_this.isMobile();
            _this.changeDetectorRef.detectChanges();
        });
    };
    ViewerFooterComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
        this.mediaSubscription.unsubscribe();
    };
    ViewerFooterComponent.prototype.isMobile = function () {
        return this.mediaObserver.isActive('lt-md');
    };
    ViewerFooterComponent.ctorParameters = function () { return [
        { type: IiifContentSearchService },
        { type: MediaObserver },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        ViewChild('mimeFooterBefore', { read: ViewContainerRef, static: true })
    ], ViewerFooterComponent.prototype, "mimeFooterBefore", void 0);
    __decorate([
        ViewChild('mimeFooterAfter', { read: ViewContainerRef, static: true })
    ], ViewerFooterComponent.prototype, "mimeFooterAfter", void 0);
    __decorate([
        HostBinding('@footerState')
    ], ViewerFooterComponent.prototype, "footerState", null);
    ViewerFooterComponent = __decorate([
        Component({
            selector: 'mime-viewer-footer',
            template: "<mat-toolbar class=\"footer-toolbar\">\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\n    <div><ng-template #mimeFooterBefore></ng-template></div>\n    <div fxFlex=\"250px\" fxFlex.lt-md=\"100%\" *ngIf=\"searchResult.size() > 0\">\n      <mime-content-search-navigator\n        *ngIf=\"showContentSearchNavigator\"\n        [searchResult]=\"searchResult\"\n      ></mime-content-search-navigator>\n    </div>\n    <div fxFlex [hidden]=\"!showPageNavigator\">\n      <mime-page-navigator [searchResult]=\"searchResult\"></mime-page-navigator>\n    </div>\n  </div>\n  <div><ng-template #mimeFooterAfter></ng-template></div>\n</mat-toolbar>\n",
            animations: [
                trigger('footerState', [
                    state('hide', style({
                        transform: 'translate(0, 100%)'
                    })),
                    state('show', style({
                        transform: 'translate(0, 0)'
                    })),
                    transition('hide => show', animate(ViewerOptions.transitions.toolbarsEaseInTime + 'ms ease-in')),
                    transition('show => hide', animate(ViewerOptions.transitions.toolbarsEaseOutTime + 'ms ease-out'))
                ])
            ],
            styles: [":host{display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.footer-toolbar{padding:0}[hidden]{display:none}"]
        })
    ], ViewerFooterComponent);
    return ViewerFooterComponent;
}());
export { ViewerFooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvdmlld2VyL3ZpZXdlci1mb290ZXIvdmlld2VyLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBK0JqRTtJQWFFLCtCQUNVLHdCQUFrRCxFQUNuRCxhQUE0QixFQUMzQixpQkFBb0M7UUFGcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNuRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBWHZDLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZiwwQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0IsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxzQkFBaUIsR0FB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QUFxQixDQXFEakM7SUFBRCw0QkFBQztDQUFBLEFBckRELElBcURDO1NBckRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFDaGFuZ2UsIE1lZGlhT2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscy92aWV3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2NvcmUvaWlpZi1jb250ZW50LXNlYXJjaC1zZXJ2aWNlL2lpaWYtY29udGVudC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLy4uLy4uL2NvcmUvbW9kZWxzL3NlYXJjaC1yZXN1bHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLXZpZXdlci1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlld2VyLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci1mb290ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2Zvb3RlclN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdoaWRlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAxMDAlKSdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ3Nob3cnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDApJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oXG4gICAgICAgICdoaWRlID0+IHNob3cnLFxuICAgICAgICBhbmltYXRlKFZpZXdlck9wdGlvbnMudHJhbnNpdGlvbnMudG9vbGJhcnNFYXNlSW5UaW1lICsgJ21zIGVhc2UtaW4nKVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oXG4gICAgICAgICdzaG93ID0+IGhpZGUnLFxuICAgICAgICBhbmltYXRlKFZpZXdlck9wdGlvbnMudHJhbnNpdGlvbnMudG9vbGJhcnNFYXNlT3V0VGltZSArICdtcyBlYXNlLW91dCcpXG4gICAgICApXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ21pbWVGb290ZXJCZWZvcmUnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBtaW1lRm9vdGVyQmVmb3JlOiBWaWV3Q29udGFpbmVyUmVmO1xuICBAVmlld0NoaWxkKCdtaW1lRm9vdGVyQWZ0ZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBtaW1lRm9vdGVyQWZ0ZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIHB1YmxpYyBzdGF0ZSA9ICdoaWRlJztcbiAgcHVibGljIHNob3dOYXZpZ2F0aW9uVG9vbGJhciA9IHRydWU7XG4gIHB1YmxpYyBzZWFyY2hSZXN1bHQ6IFNlYXJjaFJlc3VsdCA9IG5ldyBTZWFyY2hSZXN1bHQoKTtcbiAgcHVibGljIHNob3dQYWdlTmF2aWdhdG9yID0gdHJ1ZTtcbiAgcHVibGljIHNob3dDb250ZW50U2VhcmNoTmF2aWdhdG9yID0gZmFsc2U7XG4gIHByaXZhdGUgZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBtZWRpYVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlOiBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UsXG4gICAgcHVibGljIG1lZGlhT2JzZXJ2ZXI6IE1lZGlhT2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIEBIb3N0QmluZGluZygnQGZvb3RlclN0YXRlJylcbiAgZ2V0IGZvb3RlclN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uub25DaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChzcjogU2VhcmNoUmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gc3I7XG4gICAgICAgIHRoaXMuc2hvd0NvbnRlbnRTZWFyY2hOYXZpZ2F0b3IgPSB0aGlzLnNlYXJjaFJlc3VsdC5zaXplKCkgPiAwO1xuICAgICAgICB0aGlzLnNob3dQYWdlTmF2aWdhdG9yID1cbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5zaXplKCkgPT09IDAgfHwgIXRoaXMuaXNNb2JpbGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMubWVkaWFTdWJzY3JpcHRpb24gPSB0aGlzLm1lZGlhT2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKFxuICAgICAgKGNoYW5nZXM6IE1lZGlhQ2hhbmdlW10pID0+IHtcbiAgICAgICAgdGhpcy5zaG93UGFnZU5hdmlnYXRvciA9XG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQuc2l6ZSgpID09PSAwIHx8ICF0aGlzLmlzTW9iaWxlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgICB0aGlzLm1lZGlhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1lZGlhT2JzZXJ2ZXIuaXNBY3RpdmUoJ2x0LW1kJyk7XG4gIH1cbn1cbiJdfQ==