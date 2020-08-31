import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HelpIntl } from './help-intl';
let MimeViewerIntl = class MimeViewerIntl {
    constructor() {
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
};
MimeViewerIntl = __decorate([
    Injectable()
], MimeViewerIntl);
export { MimeViewerIntl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWludGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9pbnRsL3ZpZXdlci1pbnRsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQTNCO1FBQ0UsWUFBTyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRTdDLFNBQUksR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxPQUFPLENBQUM7UUFDckIscUJBQWdCLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLDZCQUF3QixHQUFHLDBCQUEwQixDQUFDO1FBQ3RELGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3RDLHdCQUFtQixHQUFHLHFCQUFxQixDQUFDO1FBQzVDLGtCQUFhLEdBQUcsVUFBVSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQixvQkFBZSxHQUFHLGFBQWEsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixpQkFBWSxHQUFHLFVBQVUsQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxlQUFlLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxXQUFXLENBQUM7UUFDNUIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixrQkFBYSxHQUFHLFlBQVksQ0FBQztRQUM3QixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixxQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDM0IscUJBQWdCLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzFCLGtCQUFhLEdBQUcsWUFBWSxDQUFDO1FBQzdCLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUNsQyxvQkFBZSxHQUFHLG1CQUFtQixDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsc0NBQXNDLENBQUM7UUFFdEQsU0FBUztRQUNULCtCQUEwQixHQUFHLCtDQUErQyxDQUFDO1FBQzdFLDRCQUF1QixHQUFHLHdCQUF3QixDQUFDO1FBQ25ELDBCQUFxQixHQUFHLHVCQUF1QixDQUFDO1FBQ2hELHNCQUFpQixHQUFHLGlDQUFpQyxDQUFDO1FBRXRELHdCQUFtQixHQUFHLENBQUMsQ0FBUyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxtREFBbUQsQ0FBQyxPQUFPLENBQUM7UUFDckUsQ0FBQyxDQUFDO1FBRUYsc0JBQWlCLEdBQUcsQ0FBQyxZQUFvQixFQUFFLENBQVMsRUFBRSxFQUFFO1lBQ3RELE9BQU8sR0FBRyxZQUFZLGlEQUFpRCxDQUFDLE9BQU8sQ0FBQztRQUNsRixDQUFDLENBQUM7UUFFRixvQkFBZSxHQUFHLENBQUMsVUFBa0IsRUFBRSxZQUFvQixFQUFFLEVBQUU7WUFDN0QsT0FBTyxHQUFHLFVBQVUsT0FBTyxZQUFZLE9BQU8sQ0FBQztRQUNqRCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQTtBQS9DWSxjQUFjO0lBRDFCLFVBQVUsRUFBRTtHQUNBLGNBQWMsQ0ErQzFCO1NBL0NZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIZWxwSW50bCB9IGZyb20gJy4vaGVscC1pbnRsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1pbWVWaWV3ZXJJbnRsIHtcbiAgY2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgaGVscDogSGVscEludGwgPSBuZXcgSGVscEludGwoKTtcbiAgY2xvc2VMYWJlbCA9ICdDbG9zZSc7XG4gIGF0dHJpYnV0aW9uTGFiZWwgPSAnQXR0cmlidXRpb24nO1xuICBhdHRyaWJ1dG9uQ2xvc2VBcmlhTGFiZWwgPSAnQ2xvc2UgYXR0cmlidXRpb24gZGlhbG9nJztcbiAgY29udGVudHNMYWJlbCA9ICdDb250ZW50cyc7XG4gIHR3b1BhZ2VWaWV3TGFiZWwgPSAnVHdvIHBhZ2UgZGlzcGxheSc7XG4gIHNpbmdsZVBhZ2VWaWV3TGFiZWwgPSAnU2luZ2xlIHBhZ2UgZGlzcGxheSc7XG4gIG1ldGFkYXRhTGFiZWwgPSAnTWV0YWRhdGEnO1xuICBsaWNlbnNlTGFiZWwgPSAnTGljZW5zZSc7XG4gIHRvY0xhYmVsID0gJ1RhYmxlIG9mIENvbnRlbnRzJztcbiAgZnVsbFNjcmVlbkxhYmVsID0gJ0Z1bGwgc2NyZWVuJztcbiAgZXhpdEZ1bGxTY3JlZW5MYWJlbCA9ICdFeGl0IGZ1bGwgc2NyZWVuJztcbiAgem9vbUluTGFiZWwgPSAnWm9vbSBpbic7XG4gIHpvb21PdXRMYWJlbCA9ICdab29tIG91dCc7XG4gIHByZXZpb3VzUGFnZUxhYmVsID0gJ1ByZXZpb3VzIFBhZ2UnO1xuICBuZXh0UGFnZUxhYmVsID0gJ05leHQgUGFnZSc7XG4gIGhvbWVMYWJlbCA9ICdHbyBIb21lJztcbiAgcm90YXRlQ3dMYWJlbCA9ICdSb3RhdGUgOTDCsCc7XG4gIHNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XG4gIGNsZWFyU2VhcmNoTGFiZWwgPSAnQ2xlYXInO1xuICBwcmV2aW91c0hpdExhYmVsID0gJ1ByZXZpb3VzIEhpdCc7XG4gIG5leHRIaXRMYWJlbCA9ICdOZXh0IEhpdCc7XG4gIGdvVG9QYWdlTGFiZWwgPSAnR28gdG8gcGFnZSc7XG4gIGN1cnJlbnRQYWdlTGFiZWwgPSAnQ3VycmVudCBwYWdlJztcbiAgZW50ZXJQYWdlTnVtYmVyID0gJ0VudGVyIHBhZ2UgbnVtYmVyJztcbiAgZHJvcERpc2FibGVkID0gJ1NvcnJ5LCBidXQgZHJhZyBhbmQgZHJvcCBpcyBkaXNhYmxlZCc7XG5cbiAgLy8gRVJST1JTXG4gIHNvbWV0aGluZ0hhc0dvbmVXcm9uZ0xhYmVsID0gJ09oIGRlYXIsIHNvbWV0aGluZyBoYXMgZ29uZSB0ZXJyaWJseSB3cm9uZy4uLic7XG4gIG1hbmlmZXN0VXJpTWlzc2luZ0xhYmVsID0gJ01hbmlmZXN0VXJpIGlzIG1pc3NpbmcnO1xuICBtYW5pZmVzdE5vdFZhbGlkTGFiZWwgPSAnTWFuaWZlc3QgaXMgbm90IHZhbGlkJztcbiAgcGFnZURvZXNOb3RFeGlzdHMgPSAnU29ycnksIHRoYXQgcGFnZSBkb2VzIG5vdCBleGlzdCc7XG5cbiAgbm9SZXN1bHRzRm91bmRMYWJlbCA9IChxOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYE5vIHJlc3VsdHMgZm91bmQgZm9yIDxlbSBjbGFzcz1cImN1cnJlbnQtc2VhcmNoXCI+JHtxfTwvZW0+YDtcbiAgfTtcblxuICByZXN1bHRzRm91bmRMYWJlbCA9IChudW1iZXJPZkhpdHM6IG51bWJlciwgcTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke251bWJlck9mSGl0c30gcmVzdWx0cyBmb3VuZCBmb3IgPGVtIGNsYXNzPVwiY3VycmVudC1zZWFyY2hcIj4ke3F9PC9lbT5gO1xuICB9O1xuXG4gIGN1cnJlbnRIaXRMYWJlbCA9IChjdXJyZW50SGl0OiBudW1iZXIsIG51bWJlck9mSGl0czogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIGAke2N1cnJlbnRIaXR9IG9mICR7bnVtYmVyT2ZIaXRzfSBoaXRzYDtcbiAgfTtcbn1cbiJdfQ==