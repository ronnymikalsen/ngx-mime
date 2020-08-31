import { __decorate } from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ViewerOptions } from '../../core/models/viewer-options';
import { IiifContentSearchService } from './../../core/iiif-content-search-service/iiif-content-search.service';
import { SearchResult } from './../../core/models/search-result';
let ViewerFooterComponent = class ViewerFooterComponent {
    constructor(iiifContentSearchService, mediaObserver, changeDetectorRef) {
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
    get footerState() {
        return this.state;
    }
    ngOnInit() {
        this.iiifContentSearchService.onChange
            .pipe(takeUntil(this.destroyed))
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
};
ViewerFooterComponent.ctorParameters = () => [
    { type: IiifContentSearchService },
    { type: MediaObserver },
    { type: ChangeDetectorRef }
];
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
export { ViewerFooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvdmlld2VyL3ZpZXdlci1mb290ZXIvdmlld2VyLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBK0JqRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWFoQyxZQUNVLHdCQUFrRCxFQUNuRCxhQUE0QixFQUMzQixpQkFBb0M7UUFGcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNuRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBWHZDLFVBQUssR0FBRyxNQUFNLENBQUM7UUFDZiwwQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0IsaUJBQVksR0FBaUIsSUFBSSxZ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QztHQUNXLHFCQUFxQixDQXFEakM7U0FyRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYUNoYW5nZSwgTWVkaWFPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVmlld2VyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWxzL3ZpZXdlci1vcHRpb25zJztcbmltcG9ydCB7IElpaWZDb250ZW50U2VhcmNoU2VydmljZSB9IGZyb20gJy4vLi4vLi4vY29yZS9paWlmLWNvbnRlbnQtc2VhcmNoLXNlcnZpY2UvaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4vLi4vLi4vY29yZS9tb2RlbHMvc2VhcmNoLXJlc3VsdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21pbWUtdmlld2VyLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXItZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLWZvb3Rlci5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZm9vdGVyU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2hpZGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDEwMCUpJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc2hvdycsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMCknXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgJ2hpZGUgPT4gc2hvdycsXG4gICAgICAgIGFuaW1hdGUoVmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy50b29sYmFyc0Vhc2VJblRpbWUgKyAnbXMgZWFzZS1pbicpXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbihcbiAgICAgICAgJ3Nob3cgPT4gaGlkZScsXG4gICAgICAgIGFuaW1hdGUoVmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy50b29sYmFyc0Vhc2VPdXRUaW1lICsgJ21zIGVhc2Utb3V0JylcbiAgICAgIClcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlckZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnbWltZUZvb3RlckJlZm9yZScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIG1pbWVGb290ZXJCZWZvcmU6IFZpZXdDb250YWluZXJSZWY7XG4gIEBWaWV3Q2hpbGQoJ21pbWVGb290ZXJBZnRlcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIG1pbWVGb290ZXJBZnRlcjogVmlld0NvbnRhaW5lclJlZjtcbiAgcHVibGljIHN0YXRlID0gJ2hpZGUnO1xuICBwdWJsaWMgc2hvd05hdmlnYXRpb25Ub29sYmFyID0gdHJ1ZTtcbiAgcHVibGljIHNlYXJjaFJlc3VsdDogU2VhcmNoUmVzdWx0ID0gbmV3IFNlYXJjaFJlc3VsdCgpO1xuICBwdWJsaWMgc2hvd1BhZ2VOYXZpZ2F0b3IgPSB0cnVlO1xuICBwdWJsaWMgc2hvd0NvbnRlbnRTZWFyY2hOYXZpZ2F0b3IgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95ZWQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIG1lZGlhU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpaWlmQ29udGVudFNlYXJjaFNlcnZpY2U6IElpaWZDb250ZW50U2VhcmNoU2VydmljZSxcbiAgICBwdWJsaWMgbWVkaWFPYnNlcnZlcjogTWVkaWFPYnNlcnZlcixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdAZm9vdGVyU3RhdGUnKVxuICBnZXQgZm9vdGVyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5vbkNoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKHNyOiBTZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBzcjtcbiAgICAgICAgdGhpcy5zaG93Q29udGVudFNlYXJjaE5hdmlnYXRvciA9IHRoaXMuc2VhcmNoUmVzdWx0LnNpemUoKSA+IDA7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2VOYXZpZ2F0b3IgPVxuICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0LnNpemUoKSA9PT0gMCB8fCAhdGhpcy5pc01vYmlsZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5tZWRpYVN1YnNjcmlwdGlvbiA9IHRoaXMubWVkaWFPYnNlcnZlci5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoXG4gICAgICAoY2hhbmdlczogTWVkaWFDaGFuZ2VbXSkgPT4ge1xuICAgICAgICB0aGlzLnNob3dQYWdlTmF2aWdhdG9yID1cbiAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5zaXplKCkgPT09IDAgfHwgIXRoaXMuaXNNb2JpbGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMubWVkaWFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFPYnNlcnZlci5pc0FjdGl2ZSgnbHQtbWQnKTtcbiAgfVxufVxuIl19