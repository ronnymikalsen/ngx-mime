import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { MimeViewerIntl } from './viewer-intl';
import { HelpIntlNoNb } from './help-intl.no_nb';
var MimeViewerIntlNoNb = /** @class */ (function (_super) {
    __extends(MimeViewerIntlNoNb, _super);
    function MimeViewerIntlNoNb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.help = new HelpIntlNoNb();
        _this.closeLabel = 'Lukk';
        _this.attributionLabel = 'Tillatelse';
        _this.attributonCloseAriaLabel = 'Steng tillatelse dialog';
        _this.contentsLabel = 'Innhold';
        _this.twoPageViewLabel = 'Tosidevisning';
        _this.singlePageViewLabel = 'Enkeltsidevisning';
        _this.metadataLabel = 'Metadata';
        _this.licenseLabel = 'Lisens';
        _this.tocLabel = 'Innholdsfortegnelse';
        _this.fullScreenLabel = 'Fullskjerm';
        _this.exitFullScreenLabel = 'Avslutt fullskjerm';
        _this.zoomInLabel = 'Zoom inn';
        _this.zoomOutLabel = 'Zoom ut';
        _this.previousPageLabel = 'Forrige side';
        _this.nextPageLabel = 'Neste side';
        _this.homeLabel = 'Hjem';
        _this.rotateCwLabel = 'Rotér 90°';
        _this.searchLabel = 'Søk';
        _this.clearSearchLabel = 'Tøm';
        _this.previousHitLabel = 'Forrige treff';
        _this.nextHitLabel = 'Neste treff';
        _this.goToPageLabel = 'Gå til side';
        _this.currentPageLabel = 'Nåværende side';
        _this.enterPageNumber = 'Skriv inn sidenummer';
        _this.dropDisabled = 'Beklager, men drag and drop er ikke aktivert';
        // ERRORS
        _this.somethingHasGoneWrongLabel = 'Å nei! Noe har gått galt...';
        _this.manifestUriMissingLabel = 'Lenke til manifest mangler';
        _this.manifestNotValidLabel = 'Manifestet er ikke gyldig';
        _this.pageDoesNotExists = 'Beklager, men den siden finnes ikke';
        _this.noResultsFoundLabel = function (q) {
            return "Ingen treff funnet for <em class=\"current-search\">" + q + "</em>";
        };
        _this.resultsFoundLabel = function (numberOfHits, q) {
            return numberOfHits + " treff funnet for <em class=\"current-search\">" + q + "</em>";
        };
        _this.currentHitLabel = function (currentHit, numberOfHits) {
            return currentHit + " av " + numberOfHits + " treff";
        };
        return _this;
    }
    MimeViewerIntlNoNb = __decorate([
        Injectable()
    ], MimeViewerIntlNoNb);
    return MimeViewerIntlNoNb;
}(MimeViewerIntl));
export { MimeViewerIntlNoNb };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWludGwubm9fbmIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9pbnRsL3ZpZXdlci1pbnRsLm5vX25iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pEO0lBQXdDLHNDQUFjO0lBQXREO1FBQUEscUVBNkNDO1FBNUNDLFVBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLHNCQUFnQixHQUFHLFlBQVksQ0FBQztRQUNoQyw4QkFBd0IsR0FBRyx5QkFBeUIsQ0FBQztRQUNyRCxtQkFBYSxHQUFHLFNBQVMsQ0FBQztRQUMxQixzQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDbkMseUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDMUMsbUJBQWEsR0FBRyxVQUFVLENBQUM7UUFDM0Isa0JBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsY0FBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ2pDLHFCQUFlLEdBQUcsWUFBWSxDQUFDO1FBQy9CLHlCQUFtQixHQUFHLG9CQUFvQixDQUFDO1FBQzNDLGlCQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLGtCQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLHVCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUNuQyxtQkFBYSxHQUFHLFlBQVksQ0FBQztRQUM3QixlQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHNCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixzQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDbkMsa0JBQVksR0FBRyxhQUFhLENBQUM7UUFDN0IsbUJBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIsc0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMscUJBQWUsR0FBRyxzQkFBc0IsQ0FBQztRQUN6QyxrQkFBWSxHQUFHLDhDQUE4QyxDQUFDO1FBRTlELFNBQVM7UUFDVCxnQ0FBMEIsR0FBRyw2QkFBNkIsQ0FBQztRQUMzRCw2QkFBdUIsR0FBRyw0QkFBNEIsQ0FBQztRQUN2RCwyQkFBcUIsR0FBRywyQkFBMkIsQ0FBQztRQUNwRCx1QkFBaUIsR0FBRyxxQ0FBcUMsQ0FBQztRQUUxRCx5QkFBbUIsR0FBRyxVQUFDLENBQVM7WUFDOUIsT0FBTyx5REFBcUQsQ0FBQyxVQUFPLENBQUM7UUFDdkUsQ0FBQyxDQUFDO1FBRUYsdUJBQWlCLEdBQUcsVUFBQyxZQUFvQixFQUFFLENBQVM7WUFDbEQsT0FBVSxZQUFZLHVEQUFnRCxDQUFDLFVBQU8sQ0FBQztRQUNqRixDQUFDLENBQUM7UUFFRixxQkFBZSxHQUFHLFVBQUMsVUFBa0IsRUFBRSxZQUFvQjtZQUN6RCxPQUFVLFVBQVUsWUFBTyxZQUFZLFdBQVEsQ0FBQztRQUNsRCxDQUFDLENBQUM7O0lBQ0osQ0FBQztJQTdDWSxrQkFBa0I7UUFEOUIsVUFBVSxFQUFFO09BQ0Esa0JBQWtCLENBNkM5QjtJQUFELHlCQUFDO0NBQUEsQUE3Q0QsQ0FBd0MsY0FBYyxHQTZDckQ7U0E3Q1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IEhlbHBJbnRsTm9OYiB9IGZyb20gJy4vaGVscC1pbnRsLm5vX25iJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1pbWVWaWV3ZXJJbnRsTm9OYiBleHRlbmRzIE1pbWVWaWV3ZXJJbnRsIHtcbiAgaGVscCA9IG5ldyBIZWxwSW50bE5vTmIoKTtcbiAgY2xvc2VMYWJlbCA9ICdMdWtrJztcbiAgYXR0cmlidXRpb25MYWJlbCA9ICdUaWxsYXRlbHNlJztcbiAgYXR0cmlidXRvbkNsb3NlQXJpYUxhYmVsID0gJ1N0ZW5nIHRpbGxhdGVsc2UgZGlhbG9nJztcbiAgY29udGVudHNMYWJlbCA9ICdJbm5ob2xkJztcbiAgdHdvUGFnZVZpZXdMYWJlbCA9ICdUb3NpZGV2aXNuaW5nJztcbiAgc2luZ2xlUGFnZVZpZXdMYWJlbCA9ICdFbmtlbHRzaWRldmlzbmluZyc7XG4gIG1ldGFkYXRhTGFiZWwgPSAnTWV0YWRhdGEnO1xuICBsaWNlbnNlTGFiZWwgPSAnTGlzZW5zJztcbiAgdG9jTGFiZWwgPSAnSW5uaG9sZHNmb3J0ZWduZWxzZSc7XG4gIGZ1bGxTY3JlZW5MYWJlbCA9ICdGdWxsc2tqZXJtJztcbiAgZXhpdEZ1bGxTY3JlZW5MYWJlbCA9ICdBdnNsdXR0IGZ1bGxza2plcm0nO1xuICB6b29tSW5MYWJlbCA9ICdab29tIGlubic7XG4gIHpvb21PdXRMYWJlbCA9ICdab29tIHV0JztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnRm9ycmlnZSBzaWRlJztcbiAgbmV4dFBhZ2VMYWJlbCA9ICdOZXN0ZSBzaWRlJztcbiAgaG9tZUxhYmVsID0gJ0hqZW0nO1xuICByb3RhdGVDd0xhYmVsID0gJ1JvdMOpciA5MMKwJztcbiAgc2VhcmNoTGFiZWwgPSAnU8O4ayc7XG4gIGNsZWFyU2VhcmNoTGFiZWwgPSAnVMO4bSc7XG4gIHByZXZpb3VzSGl0TGFiZWwgPSAnRm9ycmlnZSB0cmVmZic7XG4gIG5leHRIaXRMYWJlbCA9ICdOZXN0ZSB0cmVmZic7XG4gIGdvVG9QYWdlTGFiZWwgPSAnR8OlIHRpbCBzaWRlJztcbiAgY3VycmVudFBhZ2VMYWJlbCA9ICdOw6V2w6ZyZW5kZSBzaWRlJztcbiAgZW50ZXJQYWdlTnVtYmVyID0gJ1Nrcml2IGlubiBzaWRlbnVtbWVyJztcbiAgZHJvcERpc2FibGVkID0gJ0Jla2xhZ2VyLCBtZW4gZHJhZyBhbmQgZHJvcCBlciBpa2tlIGFrdGl2ZXJ0JztcblxuICAvLyBFUlJPUlNcbiAgc29tZXRoaW5nSGFzR29uZVdyb25nTGFiZWwgPSAnw4UgbmVpISBOb2UgaGFyIGfDpXR0IGdhbHQuLi4nO1xuICBtYW5pZmVzdFVyaU1pc3NpbmdMYWJlbCA9ICdMZW5rZSB0aWwgbWFuaWZlc3QgbWFuZ2xlcic7XG4gIG1hbmlmZXN0Tm90VmFsaWRMYWJlbCA9ICdNYW5pZmVzdGV0IGVyIGlra2UgZ3lsZGlnJztcbiAgcGFnZURvZXNOb3RFeGlzdHMgPSAnQmVrbGFnZXIsIG1lbiBkZW4gc2lkZW4gZmlubmVzIGlra2UnO1xuXG4gIG5vUmVzdWx0c0ZvdW5kTGFiZWwgPSAocTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGBJbmdlbiB0cmVmZiBmdW5uZXQgZm9yIDxlbSBjbGFzcz1cImN1cnJlbnQtc2VhcmNoXCI+JHtxfTwvZW0+YDtcbiAgfTtcblxuICByZXN1bHRzRm91bmRMYWJlbCA9IChudW1iZXJPZkhpdHM6IG51bWJlciwgcTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGAke251bWJlck9mSGl0c30gdHJlZmYgZnVubmV0IGZvciA8ZW0gY2xhc3M9XCJjdXJyZW50LXNlYXJjaFwiPiR7cX08L2VtPmA7XG4gIH07XG5cbiAgY3VycmVudEhpdExhYmVsID0gKGN1cnJlbnRIaXQ6IG51bWJlciwgbnVtYmVyT2ZIaXRzOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYCR7Y3VycmVudEhpdH0gYXYgJHtudW1iZXJPZkhpdHN9IHRyZWZmYDtcbiAgfTtcbn1cbiJdfQ==