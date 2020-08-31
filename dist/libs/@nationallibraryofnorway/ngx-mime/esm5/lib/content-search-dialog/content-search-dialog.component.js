import { __decorate } from "tslib";
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { IiifContentSearchService } from './../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from './../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from './../core/intl/viewer-intl';
import { MimeDomHelper } from './../core/mime-dom-helper';
import { MimeResizeService } from './../core/mime-resize-service/mime-resize.service';
var ContentSearchDialogComponent = /** @class */ (function () {
    function ContentSearchDialogComponent(dialogRef, intl, mediaObserver, mimeResizeService, iiifManifestService, iiifContentSearchService, el, mimeDomHelper) {
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
        this.destroyed = new Subject();
    }
    ContentSearchDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mimeResizeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (dimensions) {
            _this.mimeHeight = dimensions.height;
            _this.resizeTabHeight();
        });
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (manifest) {
            _this.manifest = manifest;
        });
        this.iiifContentSearchService.onChange
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (sr) {
            _this.hits = sr.hits;
            _this.currentSearch = sr.q ? sr.q : '';
            _this.q = sr.q;
            _this.numberOfHits = sr.size();
            if (_this.resultContainer !== null && _this.numberOfHits > 0) {
                _this.resultContainer.nativeElement.focus();
            }
            else if (_this.q.length === 0 || _this.numberOfHits === 0) {
                _this.qEl.nativeElement.focus();
            }
        });
        this.iiifContentSearchService.isSearching
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (s) {
            _this.isSearching = s;
        });
        this.iiifContentSearchService.onSelected
            .pipe(takeUntil(this.destroyed))
            .subscribe(function (hit) {
            if (hit === null) {
                _this.currentHit = hit;
            }
            else {
                if (!_this.currentHit || _this.currentHit.id !== hit.id) {
                    _this.currentHit = hit;
                    _this.scrollCurrentHitIntoView();
                }
            }
        });
        this.resizeTabHeight();
    };
    ContentSearchDialogComponent.prototype.ngAfterViewInit = function () {
        this.scrollCurrentHitIntoView();
    };
    ContentSearchDialogComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    ContentSearchDialogComponent.prototype.onResize = function (event) {
        this.resizeTabHeight();
    };
    ContentSearchDialogComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.search();
    };
    ContentSearchDialogComponent.prototype.clear = function () {
        this.q = '';
        this.search();
    };
    ContentSearchDialogComponent.prototype.goToHit = function (hit) {
        this.currentHit = hit;
        this.iiifContentSearchService.selected(hit);
        if (this.mediaObserver.isActive('lt-md')) {
            this.dialogRef.close();
        }
    };
    ContentSearchDialogComponent.prototype.search = function () {
        this.currentSearch = this.q;
        this.iiifContentSearchService.search(this.manifest, this.q);
    };
    ContentSearchDialogComponent.prototype.resizeTabHeight = function () {
        var dimensions = this.mimeDomHelper.getBoundingClientRect(this.el);
        var height = this.mimeHeight;
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
    };
    ContentSearchDialogComponent.prototype.scrollCurrentHitIntoView = function () {
        var _this = this;
        this.iiifContentSearchService.onSelected
            .pipe(take(1), filter(function (s) { return s !== null; }))
            .subscribe(function (hit) {
            var selected = _this.findSelected(hit);
            if (selected) {
                selected.nativeElement.focus();
            }
        });
    };
    ContentSearchDialogComponent.prototype.findSelected = function (selectedHit) {
        if (this.hitList) {
            var selectedList = this.hitList.filter(function (item, index) { return index === selectedHit.id; });
            return selectedList.length > 0 ? selectedList[0] : null;
        }
        else {
            return null;
        }
    };
    ContentSearchDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: MimeViewerIntl },
        { type: MediaObserver },
        { type: MimeResizeService },
        { type: IiifManifestService },
        { type: IiifContentSearchService },
        { type: ElementRef },
        { type: MimeDomHelper }
    ]; };
    __decorate([
        ViewChild('contentSearchResult', { static: true })
    ], ContentSearchDialogComponent.prototype, "resultContainer", void 0);
    __decorate([
        ViewChild('query', { static: true })
    ], ContentSearchDialogComponent.prototype, "qEl", void 0);
    __decorate([
        ViewChildren('hitButton', { read: ElementRef })
    ], ContentSearchDialogComponent.prototype, "hitList", void 0);
    __decorate([
        HostListener('window:resize', ['$event'])
    ], ContentSearchDialogComponent.prototype, "onResize", null);
    ContentSearchDialogComponent = __decorate([
        Component({
            selector: 'mime-search',
            template: "<div class=\"content-search-container\">\n  <div [ngSwitch]=\"mediaObserver.isActive('lt-md')\">\n    <div *ngSwitchCase=\"true\">\n      <mat-toolbar color=\"primary\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <button\n            id=\"close-content-search-dialog-button\"\n            mat-icon-button\n            [aria-label]=\"intl.closeLabel\"\n            [matTooltip]=\"intl.closeLabel\"\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n          <div class=\"heading\">{{ intl.searchLabel }}</div>\n        </div>\n      </mat-toolbar>\n    </div>\n    <div *ngSwitchDefault>\n      <mat-toolbar>\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxFlex>\n          <div class=\"heading heading-desktop\">{{ intl.searchLabel }}</div>\n          <button\n            id=\"close-content-search-dialog-button\"\n            mat-icon-button\n            [aria-label]=\"intl.closeLabel\"\n            [matTooltip]=\"intl.closeLabel\"\n            [matDialogClose]=\"true\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      </mat-toolbar>\n    </div>\n  </div>\n  <div class=\"content-search-form\">\n    <form (ngSubmit)=\"onSubmit($event)\" #searchForm=\"ngForm\">\n      <mat-form-field class=\"content-search-box\">\n        <button\n          id=\"content-search-form-submit\"\n          type=\"submit\"\n          matPrefix\n          mat-icon-button\n          [attr.aria-label]=\"intl.searchLabel\"\n          [matTooltip]=\"intl.searchLabel\"\n        >\n          <mat-icon class=\"icon\">search</mat-icon>\n        </button>\n        <input\n          #query\n          cdkFocusInitial\n          matInput\n          class=\"content-search-input\"\n          [(ngModel)]=\"q\"\n          name=\"q\"\n          autocomplete=\"off\"\n          aria-labelledby=\"content-search-form-submit\"\n        />\n        <button\n          *ngIf=\"q\"\n          id=\"clearSearchButton\"\n          type=\"button\"\n          matSuffix\n          mat-icon-button\n          [attr.aria-label]=\"intl.clearSearchLabel\"\n          [matTooltip]=\"intl.clearSearchLabel\"\n          (click)=\"clear()\"\n        >\n          <mat-icon class=\"icon\">clear</mat-icon>\n        </button>\n      </mat-form-field>\n    </form>\n  </div>\n  <div\n    #contentSearchResult\n    class=\"content-search-result-container\"\n    [ngStyle]=\"tabHeight\"\n  >\n    <div *ngIf=\"!isSearching\" class=\"content-search-result\" fxLayout=\"column\">\n      <input type=\"hidden\" id=\"numberOfHits\" [value]=\"numberOfHits\" />\n      <div *ngIf=\"currentSearch && currentSearch.length > 0\">\n        <div\n          *ngIf=\"numberOfHits > 0\"\n          [innerHTML]=\"intl.resultsFoundLabel(numberOfHits, currentSearch)\"\n        ></div>\n        <div\n          *ngIf=\"numberOfHits === 0\"\n          [innerHTML]=\"intl.noResultsFoundLabel(currentSearch)\"\n        ></div>\n      </div>\n      <ng-container *ngFor=\"let hit of hits; let last = last\">\n        <button\n          #hitButton\n          mat-button\n          [color]=\"currentHit && hit.id === currentHit.id ? 'primary' : null\"\n          [ngClass]=\"'hit'\"\n          (click)=\"goToHit(hit)\"\n          (keyup.enter)=\"goToHit(hit)\"\n        >\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n            <div fxFlex class=\"summary\">\n              {{ hit.before }} <em>{{ hit.match }}</em> {{ hit.after }}\n            </div>\n            <div fxFlex=\"40px\" class=\"canvasGroup\">{{ hit.index + 1 }}</div>\n          </div>\n        </button>\n        <mat-divider *ngIf=\"!last\"></mat-divider>\n      </ng-container>\n    </div>\n    <div *ngIf=\"isSearching\" class=\"content-search-result\" fxLayout=\"column\">\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n  </div>\n</div>\n",
            styles: [".heading{font-size:17px}.heading-desktop{padding-left:16px}.label{text-decoration:underline}.content-search-form{padding:0 16px}.content-search-box{width:100%}.content-search-input{font-size:20px}.content-search-result-container{font-family:Roboto,'Helvetica Neue',sans-serif;overflow:auto;margin-bottom:8px}.content-search-result{padding:8px 16px}.content-search-result .mat-button{line-height:initial;white-space:initial;word-wrap:initial;max-width:none;padding:8px;text-align:left;font-size:14px}::ng-deep .content-search-container .current-content-search{font-weight:700}em{font-weight:700}.canvasGroupLabel{text-align:right;opacity:.54}::ng-deep .content-search-panel{max-width:none!important}::ng-deep .content-search-panel>.mat-dialog-container{padding:0!important;overflow:initial}::ng-deep .content-search-container>div>div>.mat-toolbar{padding:0!important}input{font-family:Roboto,'Helvetica Neue',sans-serif}.icon{font-size:22px!important}"]
        })
    ], ContentSearchDialogComponent);
    return ContentSearchDialogComponent;
}());
export { ContentSearchDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuYXRpb25hbGxpYnJhcnlvZm5vcndheS9uZ3gtbWltZS8iLCJzb3VyY2VzIjpbImxpYi9jb250ZW50LXNlYXJjaC1kaWFsb2cvY29udGVudC1zZWFyY2gtZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBV3RGO0lBa0JFLHNDQUNTLFNBQXFELEVBQ3JELElBQW9CLEVBQ3BCLGFBQTRCLEVBQzNCLGlCQUFvQyxFQUNwQyxtQkFBd0MsRUFDeEMsd0JBQWtELEVBQ2xELEVBQWMsRUFDZCxhQUE0QjtRQVA3QixjQUFTLEdBQVQsU0FBUyxDQUE0QztRQUNyRCxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUF2Qi9CLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7SUFnQjlDLENBQUM7SUFFSiwrQ0FBUSxHQUFSO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO2FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLFVBQXNCO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZTthQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxRQUFrQjtZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRO2FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLEVBQWdCO1lBQzFCLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN0QyxLQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFJLEtBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRCxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM1QztpQkFBTSxJQUFJLEtBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsRUFBRTtnQkFDekQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXO2FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFDLENBQVU7WUFDcEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVTthQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxHQUFRO1lBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDaEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRTtvQkFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7b0JBQ3RCLEtBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2lCQUNqQzthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHNEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0QsK0NBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQ0FBUSxHQUFSLFVBQVMsS0FBb0I7UUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsNENBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw4Q0FBTyxHQUFQLFVBQVEsR0FBUTtRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVPLDZDQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sc0RBQWUsR0FBdkI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDZixTQUFTLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSTthQUMzQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLFNBQVMsRUFBRSxNQUFNLEdBQUcsSUFBSTthQUN6QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRU8sK0RBQXdCLEdBQWhDO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVTthQUNyQyxJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQ3hCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUNsQixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxtREFBWSxHQUFwQixVQUFxQixXQUFnQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3RDLFVBQUMsSUFBZ0IsRUFBRSxLQUFhLElBQUssT0FBQSxLQUFLLEtBQUssV0FBVyxDQUFDLEVBQUUsRUFBeEIsQ0FBd0IsQ0FDOUQsQ0FBQztZQUNGLE9BQU8sWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3pEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7Z0JBeEltQixZQUFZO2dCQUNqQixjQUFjO2dCQUNMLGFBQWE7Z0JBQ1IsaUJBQWlCO2dCQUNmLG1CQUFtQjtnQkFDZCx3QkFBd0I7Z0JBQzlDLFVBQVU7Z0JBQ0MsYUFBYTs7SUFidEM7UUFEQyxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7eUVBQ3ZCO0lBQ1U7UUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs2REFBaUI7SUFFdEQ7UUFEQyxZQUFZLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2lFQUNqQjtJQXlFL0I7UUFEQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Z0VBR3pDO0lBM0ZVLDRCQUE0QjtRQUx4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2Qiw2NEhBQXFEOztTQUV0RCxDQUFDO09BQ1csNEJBQTRCLENBNEp4QztJQUFELG1DQUFDO0NBQUEsQUE1SkQsSUE0SkM7U0E1SlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWFPYnNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElpaWZDb250ZW50U2VhcmNoU2VydmljZSB9IGZyb20gJy4vLi4vY29yZS9paWlmLWNvbnRlbnQtc2VhcmNoLXNlcnZpY2UvaWlpZi1jb250ZW50LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IElpaWZNYW5pZmVzdFNlcnZpY2UgfSBmcm9tICcuLy4uL2NvcmUvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lVmlld2VySW50bCB9IGZyb20gJy4vLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IE1pbWVEb21IZWxwZXIgfSBmcm9tICcuLy4uL2NvcmUvbWltZS1kb20taGVscGVyJztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb3JlL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi8uLi9jb3JlL21vZGVscy9kaW1lbnNpb25zJztcbmltcG9ydCB7IEhpdCB9IGZyb20gJy4vLi4vY29yZS9tb2RlbHMvaGl0JztcbmltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnLi8uLi9jb3JlL21vZGVscy9tYW5pZmVzdCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLy4uL2NvcmUvbW9kZWxzL3NlYXJjaC1yZXN1bHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LXNlYXJjaC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250ZW50LXNlYXJjaC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50U2VhcmNoRGlhbG9nQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcTogc3RyaW5nO1xuICBwdWJsaWMgaGl0czogSGl0W10gPSBbXTtcbiAgcHVibGljIGN1cnJlbnRIaXQ6IEhpdDtcbiAgcHVibGljIGN1cnJlbnRTZWFyY2ggPSAnJztcbiAgcHVibGljIG51bWJlck9mSGl0cyA9IDA7XG4gIHB1YmxpYyBpc1NlYXJjaGluZyA9IGZhbHNlO1xuICBwdWJsaWMgdGFiSGVpZ2h0ID0ge307XG4gIHByaXZhdGUgbWFuaWZlc3Q6IE1hbmlmZXN0O1xuICBwcml2YXRlIG1pbWVIZWlnaHQgPSAwO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRTZWFyY2hSZXN1bHQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICByZXN1bHRDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3F1ZXJ5JywgeyBzdGF0aWM6IHRydWUgfSkgcUVsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCdoaXRCdXR0b24nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgaGl0TGlzdDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb250ZW50U2VhcmNoRGlhbG9nQ29tcG9uZW50PixcbiAgICBwdWJsaWMgaW50bDogTWltZVZpZXdlckludGwsXG4gICAgcHVibGljIG1lZGlhT2JzZXJ2ZXI6IE1lZGlhT2JzZXJ2ZXIsXG4gICAgcHJpdmF0ZSBtaW1lUmVzaXplU2VydmljZTogTWltZVJlc2l6ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmTWFuaWZlc3RTZXJ2aWNlOiBJaWlmTWFuaWZlc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlOiBJaWlmQ29udGVudFNlYXJjaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG1pbWVEb21IZWxwZXI6IE1pbWVEb21IZWxwZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWltZVJlc2l6ZVNlcnZpY2Uub25SZXNpemVcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChkaW1lbnNpb25zOiBEaW1lbnNpb25zKSA9PiB7XG4gICAgICAgIHRoaXMubWltZUhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJlc2l6ZVRhYkhlaWdodCgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uub25DaGFuZ2VcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChzcjogU2VhcmNoUmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuaGl0cyA9IHNyLmhpdHM7XG4gICAgICAgIHRoaXMuY3VycmVudFNlYXJjaCA9IHNyLnEgPyBzci5xIDogJyc7XG4gICAgICAgIHRoaXMucSA9IHNyLnE7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gc3Iuc2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy5yZXN1bHRDb250YWluZXIgIT09IG51bGwgJiYgdGhpcy5udW1iZXJPZkhpdHMgPiAwKSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRDb250YWluZXIubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucS5sZW5ndGggPT09IDAgfHwgdGhpcy5udW1iZXJPZkhpdHMgPT09IDApIHtcbiAgICAgICAgICB0aGlzLnFFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2UuaXNTZWFyY2hpbmdcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpXG4gICAgICAuc3Vic2NyaWJlKChzOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBzO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmlpaWZDb250ZW50U2VhcmNoU2VydmljZS5vblNlbGVjdGVkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoaGl0OiBIaXQpID0+IHtcbiAgICAgICAgaWYgKGhpdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudEhpdCA9IGhpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudEhpdCB8fCB0aGlzLmN1cnJlbnRIaXQuaWQgIT09IGhpdC5pZCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SGl0ID0gaGl0O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxDdXJyZW50SGl0SW50b1ZpZXcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5yZXNpemVUYWJIZWlnaHQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNjcm9sbEN1cnJlbnRIaXRJbnRvVmlldygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgb25SZXNpemUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmVzaXplVGFiSGVpZ2h0KCk7XG4gIH1cblxuICBvblN1Ym1pdChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZWFyY2goKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucSA9ICcnO1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gIH1cblxuICBnb1RvSGl0KGhpdDogSGl0KTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50SGl0ID0gaGl0O1xuICAgIHRoaXMuaWlpZkNvbnRlbnRTZWFyY2hTZXJ2aWNlLnNlbGVjdGVkKGhpdCk7XG4gICAgaWYgKHRoaXMubWVkaWFPYnNlcnZlci5pc0FjdGl2ZSgnbHQtbWQnKSkge1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlYXJjaCgpIHtcbiAgICB0aGlzLmN1cnJlbnRTZWFyY2ggPSB0aGlzLnE7XG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHRoaXMubWFuaWZlc3QsIHRoaXMucSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZVRhYkhlaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBkaW1lbnNpb25zID0gdGhpcy5taW1lRG9tSGVscGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLmVsKTtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5taW1lSGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMubWVkaWFPYnNlcnZlci5pc0FjdGl2ZSgnbHQtbWQnKSkge1xuICAgICAgdGhpcy50YWJIZWlnaHQgPSB7XG4gICAgICAgIG1heEhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IC0gMTI4ICsgJ3B4J1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVpZ2h0IC09IDI3MjtcbiAgICAgIHRoaXMudGFiSGVpZ2h0ID0ge1xuICAgICAgICBtYXhIZWlnaHQ6IGhlaWdodCArICdweCdcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxDdXJyZW50SGl0SW50b1ZpZXcoKSB7XG4gICAgdGhpcy5paWlmQ29udGVudFNlYXJjaFNlcnZpY2Uub25TZWxlY3RlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIGZpbHRlcihzID0+IHMgIT09IG51bGwpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChoaXQ6IEhpdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZmluZFNlbGVjdGVkKGhpdCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRTZWxlY3RlZChzZWxlY3RlZEhpdDogSGl0KTogRWxlbWVudFJlZiB7XG4gICAgaWYgKHRoaXMuaGl0TGlzdCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gdGhpcy5oaXRMaXN0LmZpbHRlcihcbiAgICAgICAgKGl0ZW06IEVsZW1lbnRSZWYsIGluZGV4OiBudW1iZXIpID0+IGluZGV4ID09PSBzZWxlY3RlZEhpdC5pZFxuICAgICAgKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZExpc3QubGVuZ3RoID4gMCA/IHNlbGVjdGVkTGlzdFswXSA6IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19