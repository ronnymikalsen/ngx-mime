import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MimeViewerIntl } from './viewer-intl';
import { HelpIntlNoNb } from './help-intl.no_nb';
let MimeViewerIntlNoNb = class MimeViewerIntlNoNb extends MimeViewerIntl {
    constructor() {
        super(...arguments);
        this.help = new HelpIntlNoNb();
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
};
MimeViewerIntlNoNb = __decorate([
    Injectable()
], MimeViewerIntlNoNb);
export { MimeViewerIntlNoNb };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWludGwubm9fbmIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9pbnRsL3ZpZXdlci1pbnRsLm5vX25iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsY0FBYztJQUF0RDs7UUFDRSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLFlBQVksQ0FBQztRQUNoQyw2QkFBd0IsR0FBRyx5QkFBeUIsQ0FBQztRQUNyRCxrQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsa0JBQWEsR0FBRyxVQUFVLENBQUM7UUFDM0IsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsYUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLHdCQUFtQixHQUFHLG9CQUFvQixDQUFDO1FBQzNDLGdCQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLFlBQVksQ0FBQztRQUM3QixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixxQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDbkMsaUJBQVksR0FBRyxhQUFhLENBQUM7UUFDN0Isa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMsb0JBQWUsR0FBRyxzQkFBc0IsQ0FBQztRQUN6QyxpQkFBWSxHQUFHLDhDQUE4QyxDQUFDO1FBRTlELFNBQVM7UUFDVCwrQkFBMEIsR0FBRyw2QkFBNkIsQ0FBQztRQUMzRCw0QkFBdUIsR0FBRyw0QkFBNEIsQ0FBQztRQUN2RCwwQkFBcUIsR0FBRywyQkFBMkIsQ0FBQztRQUNwRCxzQkFBaUIsR0FBRyxxQ0FBcUMsQ0FBQztRQUUxRCx3QkFBbUIsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQ2xDLE9BQU8scURBQXFELENBQUMsT0FBTyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQztRQUVGLHNCQUFpQixHQUFHLENBQUMsWUFBb0IsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUN0RCxPQUFPLEdBQUcsWUFBWSxnREFBZ0QsQ0FBQyxPQUFPLENBQUM7UUFDakYsQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRyxDQUFDLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxFQUFFO1lBQzdELE9BQU8sR0FBRyxVQUFVLE9BQU8sWUFBWSxRQUFRLENBQUM7UUFDbEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUE3Q1ksa0JBQWtCO0lBRDlCLFVBQVUsRUFBRTtHQUNBLGtCQUFrQixDQTZDOUI7U0E3Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IEhlbHBJbnRsTm9OYiB9IGZyb20gJy4vaGVscC1pbnRsLm5vX25iJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1pbWVWaWV3ZXJJbnRsTm9OYiBleHRlbmRzIE1pbWVWaWV3ZXJJbnRsIHtcbiAgaGVscCA9IG5ldyBIZWxwSW50bE5vTmIoKTtcbiAgY2xvc2VMYWJlbCA9ICdMdWtrJztcbiAgYXR0cmlidXRpb25MYWJlbCA9ICdUaWxsYXRlbHNlJztcbiAgYXR0cmlidXRvbkNsb3NlQXJpYUxhYmVsID0gJ1N0ZW5nIHRpbGxhdGVsc2UgZGlhbG9nJztcbiAgY29udGVudHNMYWJlbCA9ICdJbm5ob2xkJztcbiAgdHdvUGFnZVZpZXdMYWJlbCA9ICdUb3NpZGV2aXNuaW5nJztcbiAgc2luZ2xlUGFnZVZpZXdMYWJlbCA9ICdFbmtlbHRzaWRldmlzbmluZyc7XG4gIG1ldGFkYXRhTGFiZWwgPSAnTWV0YWRhdGEnO1xuICBsaWNlbnNlTGFiZWwgPSAnTGlzZW5zJztcbiAgdG9jTGFiZWwgPSAnSW5uaG9sZHNmb3J0ZWduZWxzZSc7XG4gIGZ1bGxTY3JlZW5MYWJlbCA9ICdGdWxsc2tqZXJtJztcbiAgZXhpdEZ1bGxTY3JlZW5MYWJlbCA9ICdBdnNsdXR0IGZ1bGxza2plcm0nO1xuICB6b29tSW5MYWJlbCA9ICdab29tIGlubic7XG4gIHpvb21PdXRMYWJlbCA9ICdab29tIHV0JztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnRm9ycmlnZSBzaWRlJztcbiAgbmV4dFBhZ2VMYWJlbCA9ICdOZXN0ZSBzaWRlJztcbiAgaG9tZUxhYmVsID0gJ0hqZW0nO1xuICByb3RhdGVDd0xhYmVsID0gJ1JvdMOpciA5MMKwJztcbiAgc2VhcmNoTGFiZWwgPSAnU8O4ayc7XG4gIGNsZWFyU2VhcmNoTGFiZWwgPSAnVMO4bSc7XG4gIHByZXZpb3VzSGl0TGFiZWwgPSAnRm9ycmlnZSB0cmVmZic7XG4gIG5leHRIaXRMYWJlbCA9ICdOZXN0ZSB0cmVmZic7XG4gIGdvVG9QYWdlTGFiZWwgPSAnR8OlIHRpbCBzaWRlJztcbiAgY3VycmVudFBhZ2VMYWJlbCA9ICdOw6V2w6ZyZW5kZSBzaWRlJztcbiAgZW50ZXJQYWdlTnVtYmVyID0gJ1Nrcml2IGlubiBzaWRlbnVtbWVyJztcbiAgZHJvcERpc2FibGVkID0gJ0Jla2xhZ2VyLCBtZW4gZHJhZyBhbmQgZHJvcCBlciBpa2tlIGFrdGl2ZXJ0JztcblxuICAvLyBFUlJPUlNcbiAgc29tZXRoaW5nSGFzR29uZVdyb25nTGFiZWwgPSAnw4UgbmVpISBOb2UgaGFyIGfDpXR0IGdhbHQuLi4nO1xuICBtYW5pZmVzdFVyaU1pc3NpbmdMYWJlbCA9ICdMZW5rZSB0aWwgbWFuaWZlc3QgbWFuZ2xlcic7XG4gIG1hbmlmZXN0Tm90VmFsaWRMYWJlbCA9ICdNYW5pZmVzdGV0IGVyIGlra2UgZ3lsZGlnJztcbiAgcGFnZURvZXNOb3RFeGlzdHMgPSAnQmVrbGFnZXIsIG1lbiBkZW4gc2lkZW4gZmlubmVzIGlra2UnO1xuXG4gIG5vUmVzdWx0c0ZvdW5kTGFiZWwgPSAocTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGBJbmdlbiB0cmVmZiBmdW5uZXQgZm9yIDxlbSBjbGFzcz1cImN1cnJlbnQtc2VhcmNoXCI+JHtxfTwvZW0+YDtcbiAgfTtcblxuICByZXN1bHRzRm91bmRMYWJlbCA9IChudW1iZXJPZkhpdHM6IG51bWJlciwgcTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke251bWJlck9mSGl0c30gdHJlZmYgZnVubmV0IGZvciA8ZW0gY2xhc3M9XCJjdXJyZW50LXNlYXJjaFwiPiR7cX08L2VtPmA7XG4gIH07XG5cbiAgY3VycmVudEhpdExhYmVsID0gKGN1cnJlbnRIaXQ6IG51bWJlciwgbnVtYmVyT2ZIaXRzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYCR7Y3VycmVudEhpdH0gYXYgJHtudW1iZXJPZkhpdHN9IHRyZWZmYDtcbiAgfTtcbn1cbiJdfQ==