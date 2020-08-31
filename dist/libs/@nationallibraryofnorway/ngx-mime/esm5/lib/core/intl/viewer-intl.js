import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HelpIntl } from './help-intl';
var MimeViewerIntl = /** @class */ (function () {
    function MimeViewerIntl() {
        this.changes = new Subject();
        this.help = new HelpIntl();
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
        this.noResultsFoundLabel = function (q) {
            return "No results found for <em class=\"current-search\">" + q + "</em>";
        };
        this.resultsFoundLabel = function (numberOfHits, q) {
            return numberOfHits + " results found for <em class=\"current-search\">" + q + "</em>";
        };
        this.currentHitLabel = function (currentHit, numberOfHits) {
            return currentHit + " of " + numberOfHits + " hits";
        };
    }
    MimeViewerIntl = __decorate([
        Injectable()
    ], MimeViewerIntl);
    return MimeViewerIntl;
}());
export { MimeViewerIntl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWludGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9pbnRsL3ZpZXdlci1pbnRsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QztJQUFBO1FBQ0UsWUFBTyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTdDLFNBQUksR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLDZCQUF3QixHQUFHLDBCQUEwQixDQUFDO1FBQ3RELGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3RDLHdCQUFtQixHQUFHLHFCQUFxQixDQUFDO1FBQzVDLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQixvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixpQkFBWSxHQUFHLFVBQVUsQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxlQUFlLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFDNUIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixrQkFBYSxHQUFHLFlBQVksQ0FBQztRQUM3QixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsWUFBWSxDQUFDO1FBQzdCLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUNsQyxvQkFBZSxHQUFHLG1CQUFtQixDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsc0NBQXNDLENBQUM7UUFFdEQsU0FBUztRQUNULCtCQUEwQixHQUFHLCtDQUErQyxDQUFDO1FBQzdFLDRCQUF1QixHQUFHLHdCQUF3QixDQUFDO1FBQ25ELDBCQUFxQixHQUFHLHVCQUF1QixDQUFDO1FBQ2hELHNCQUFpQixHQUFHLGlDQUFpQyxDQUFDO1FBRXRELHdCQUFtQixHQUFHLFVBQUMsQ0FBUztZQUM5QixPQUFPLHVEQUFtRCxDQUFDLFVBQU8sQ0FBQztRQUNyRSxDQUFDLENBQUM7UUFFRixzQkFBaUIsR0FBRyxVQUFDLFlBQW9CLEVBQUUsQ0FBUztZQUNsRCxPQUFVLFlBQVksd0RBQWlELENBQUMsVUFBTyxDQUFDO1FBQ2xGLENBQUMsQ0FBQztRQUVGLG9CQUFlLEdBQUcsVUFBQyxVQUFrQixFQUFFLFlBQW9CO1lBQ3pELE9BQVUsVUFBVSxZQUFPLFlBQVksVUFBTyxDQUFDO1FBQ2pELENBQUMsQ0FBQztJQUNKLENBQUM7SUEvQ1ksY0FBYztRQUQxQixVQUFVLEVBQUU7T0FDQSxjQUFjLENBK0MxQjtJQUFELHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0EvQ1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhlbHBJbnRsIH0gZnJvbSAnLi9oZWxwLWludGwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWltZVZpZXdlckludGwge1xuICBjaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBoZWxwOiBIZWxwSW50bCA9IG5ldyBIZWxwSW50bCgpO1xuICBjbG9zZUxhYmVsID0gJ0Nsb3NlJztcbiAgYXR0cmlidXRpb25MYWJlbCA9ICdBdHRyaWJ1dGlvbic7XG4gIGF0dHJpYnV0b25DbG9zZUFyaWFMYWJlbCA9ICdDbG9zZSBhdHRyaWJ1dGlvbiBkaWFsb2cnO1xuICBjb250ZW50c0xhYmVsID0gJ0NvbnRlbnRzJztcbiAgdHdvUGFnZVZpZXdMYWJlbCA9ICdUd28gcGFnZSBkaXNwbGF5JztcbiAgc2luZ2xlUGFnZVZpZXdMYWJlbCA9ICdTaW5nbGUgcGFnZSBkaXNwbGF5JztcbiAgbWV0YWRhdGFMYWJlbCA9ICdNZXRhZGF0YSc7XG4gIGxpY2Vuc2VMYWJlbCA9ICdMaWNlbnNlJztcbiAgdG9jTGFiZWwgPSAnVGFibGUgb2YgQ29udGVudHMnO1xuICBmdWxsU2NyZWVuTGFiZWwgPSAnRnVsbCBzY3JlZW4nO1xuICBleGl0RnVsbFNjcmVlbkxhYmVsID0gJ0V4aXQgZnVsbCBzY3JlZW4nO1xuICB6b29tSW5MYWJlbCA9ICdab29tIGluJztcbiAgem9vbU91dExhYmVsID0gJ1pvb20gb3V0JztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnUHJldmlvdXMgUGFnZSc7XG4gIG5leHRQYWdlTGFiZWwgPSAnTmV4dCBQYWdlJztcbiAgaG9tZUxhYmVsID0gJ0dvIEhvbWUnO1xuICByb3RhdGVDd0xhYmVsID0gJ1JvdGF0ZSA5MMKwJztcbiAgc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcbiAgY2xlYXJTZWFyY2hMYWJlbCA9ICdDbGVhcic7XG4gIHByZXZpb3VzSGl0TGFiZWwgPSAnUHJldmlvdXMgSGl0JztcbiAgbmV4dEhpdExhYmVsID0gJ05leHQgSGl0JztcbiAgZ29Ub1BhZ2VMYWJlbCA9ICdHbyB0byBwYWdlJztcbiAgY3VycmVudFBhZ2VMYWJlbCA9ICdDdXJyZW50IHBhZ2UnO1xuICBlbnRlclBhZ2VOdW1iZXIgPSAnRW50ZXIgcGFnZSBudW1iZXInO1xuICBkcm9wRGlzYWJsZWQgPSAnU29ycnksIGJ1dCBkcmFnIGFuZCBkcm9wIGlzIGRpc2FibGVkJztcblxuICAvLyBFUlJPUlNcbiAgc29tZXRoaW5nSGFzR29uZVdyb25nTGFiZWwgPSAnT2ggZGVhciwgc29tZXRoaW5nIGhhcyBnb25lIHRlcnJpYmx5IHdyb25nLi4uJztcbiAgbWFuaWZlc3RVcmlNaXNzaW5nTGFiZWwgPSAnTWFuaWZlc3RVcmkgaXMgbWlzc2luZyc7XG4gIG1hbmlmZXN0Tm90VmFsaWRMYWJlbCA9ICdNYW5pZmVzdCBpcyBub3QgdmFsaWQnO1xuICBwYWdlRG9lc05vdEV4aXN0cyA9ICdTb3JyeSwgdGhhdCBwYWdlIGRvZXMgbm90IGV4aXN0JztcblxuICBub1Jlc3VsdHNGb3VuZExhYmVsID0gKHE6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBgTm8gcmVzdWx0cyBmb3VuZCBmb3IgPGVtIGNsYXNzPVwiY3VycmVudC1zZWFyY2hcIj4ke3F9PC9lbT5gO1xuICB9O1xuXG4gIHJlc3VsdHNGb3VuZExhYmVsID0gKG51bWJlck9mSGl0czogbnVtYmVyLCBxOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7bnVtYmVyT2ZIaXRzfSByZXN1bHRzIGZvdW5kIGZvciA8ZW0gY2xhc3M9XCJjdXJyZW50LXNlYXJjaFwiPiR7cX08L2VtPmA7XG4gIH07XG5cbiAgY3VycmVudEhpdExhYmVsID0gKGN1cnJlbnRIaXQ6IG51bWJlciwgbnVtYmVyT2ZIaXRzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYCR7Y3VycmVudEhpdH0gb2YgJHtudW1iZXJPZkhpdHN9IGhpdHNgO1xuICB9O1xufVxuIl19