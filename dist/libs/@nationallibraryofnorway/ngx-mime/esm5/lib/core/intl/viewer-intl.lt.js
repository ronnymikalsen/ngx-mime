import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { MimeViewerIntl } from './viewer-intl';
import { HelpIntlLt } from './help-intl.lt';
var MimeViewerIntlLt = /** @class */ (function (_super) {
    __extends(MimeViewerIntlLt, _super);
    function MimeViewerIntlLt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.help = new HelpIntlLt();
        _this.closeLabel = 'Uždaryti';
        _this.attributionLabel = 'Teisių priskyrimas';
        _this.attributonCloseAriaLabel = 'Uždaryti teisių priskyrimo langą';
        _this.contentsLabel = 'Informacija apie objektą';
        _this.twoPageViewLabel = 'Atvaizduoti po du puslapius';
        _this.singlePageViewLabel = 'Atvaizduoti po vieną puslapį';
        _this.metadataLabel = 'Metaduomenys';
        _this.licenseLabel = 'Licencija';
        _this.tocLabel = 'Turinys';
        _this.fullScreenLabel = 'Pilno ekrano režimas';
        _this.exitFullScreenLabel = 'Išeiti iš pilno ekrano režimo';
        _this.zoomInLabel = 'Priartinti';
        _this.zoomOutLabel = 'Atitolinti';
        _this.previousPageLabel = 'Buvęs puslapis';
        _this.nextPageLabel = 'Kitas puslapis';
        _this.homeLabel = 'Grįžti į pradžią';
        _this.rotateCwLabel = 'Pasukti 90°';
        _this.searchLabel = 'Paieška';
        _this.clearSearchLabel = 'Išvalyti';
        _this.previousHitLabel = 'Buvęs rezultatas';
        _this.nextHitLabel = 'Kitas rezultatas';
        _this.goToPageLabel = 'Persikelti į puslapį';
        _this.currentPageLabel = 'Dabartinis puslapis';
        _this.enterPageNumber = 'Įveskite puslapio numerį';
        _this.dropDisabled = 'Atleiskite, bet veiksmas negalimas';
        // ERRORS
        _this.somethingHasGoneWrongLabel = 'Objekto atvaizduoti nepavyko...';
        _this.manifestUriMissingLabel = 'Nerastas objektų sąrašo identifikatorius (ManifestUri)';
        _this.manifestNotValidLabel = 'Netinkamas objektų sąrašas (Manifest)';
        _this.pageDoesNotExists = 'Nepavyko rasti šio paslapio';
        _this.noResultsFoundLabel = function (q) {
            return "Objekte nerasta atitikmen\u0173 <em class=\"current-search\">" + q + "</em>";
        };
        _this.resultsFoundLabel = function (numberOfHits, q) {
            return numberOfHits + " rezultata" + (numberOfHits === 1 ? 's' : 'i') + " su <em class=\"current-search\">" + q + "</em>";
        };
        _this.currentHitLabel = function (currentHit, numberOfHits) {
            return currentHit + " i\u0161 " + numberOfHits + " atitikmen\u0173";
        };
        return _this;
    }
    MimeViewerIntlLt = __decorate([
        Injectable()
    ], MimeViewerIntlLt);
    return MimeViewerIntlLt;
}(MimeViewerIntl));
export { MimeViewerIntlLt };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWludGwubHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9pbnRsL3ZpZXdlci1pbnRsLmx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVDO0lBQXNDLG9DQUFjO0lBQXBEO1FBQUEscUVBNENDO1FBM0NDLFVBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLHNCQUFnQixHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLDhCQUF3QixHQUFHLGtDQUFrQyxDQUFDO1FBQzlELG1CQUFhLEdBQUcsMEJBQTBCLENBQUM7UUFDM0Msc0JBQWdCLEdBQUcsNkJBQTZCLENBQUM7UUFDakQseUJBQW1CLEdBQUcsOEJBQThCLENBQUM7UUFDckQsbUJBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0Isa0JBQVksR0FBRyxXQUFXLENBQUM7UUFDM0IsY0FBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixxQkFBZSxHQUFHLHNCQUFzQixDQUFDO1FBQ3pDLHlCQUFtQixHQUFHLCtCQUErQixDQUFDO1FBQ3RELGlCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQzNCLGtCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLHVCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLG1CQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsZUFBUyxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLG1CQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLGlCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLHNCQUFnQixHQUFHLFVBQVUsQ0FBQztRQUM5QixzQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0QyxrQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLG1CQUFhLEdBQUcsc0JBQXNCLENBQUM7UUFDdkMsc0JBQWdCLEdBQUcscUJBQXFCLENBQUM7UUFDekMscUJBQWUsR0FBRywwQkFBMEIsQ0FBQztRQUM3QyxrQkFBWSxHQUFHLG9DQUFvQyxDQUFDO1FBRXBELFNBQVM7UUFDVCxnQ0FBMEIsR0FBRyxpQ0FBaUMsQ0FBQztRQUMvRCw2QkFBdUIsR0FBRyx3REFBd0QsQ0FBQztRQUNuRiwyQkFBcUIsR0FBRyx1Q0FBdUMsQ0FBQztRQUNoRSx1QkFBaUIsR0FBRyw2QkFBNkIsQ0FBQztRQUVsRCx5QkFBbUIsR0FBRyxVQUFDLENBQVM7WUFDOUIsT0FBTyxrRUFBeUQsQ0FBQyxVQUFPLENBQUM7UUFDM0UsQ0FBQyxDQUFDO1FBRUYsdUJBQWlCLEdBQUcsVUFBQyxZQUFvQixFQUFFLENBQVM7WUFDbEQsT0FBVSxZQUFZLG1CQUFhLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRywwQ0FBa0MsQ0FBQyxVQUFPLENBQUM7UUFDOUcsQ0FBQyxDQUFDO1FBQ0YscUJBQWUsR0FBRyxVQUFDLFVBQWtCLEVBQUUsWUFBb0I7WUFDekQsT0FBVSxVQUFVLGlCQUFPLFlBQVkscUJBQWEsQ0FBQztRQUN2RCxDQUFDLENBQUM7O0lBQ0osQ0FBQztJQTVDWSxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBNEM1QjtJQUFELHVCQUFDO0NBQUEsQUE1Q0QsQ0FBc0MsY0FBYyxHQTRDbkQ7U0E1Q1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IEhlbHBJbnRsTHQgfSBmcm9tICcuL2hlbHAtaW50bC5sdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaW1lVmlld2VySW50bEx0IGV4dGVuZHMgTWltZVZpZXdlckludGwge1xuICBoZWxwID0gbmV3IEhlbHBJbnRsTHQoKTtcbiAgY2xvc2VMYWJlbCA9ICdVxb5kYXJ5dGknO1xuICBhdHRyaWJ1dGlvbkxhYmVsID0gJ1RlaXNpxbMgcHJpc2t5cmltYXMnO1xuICBhdHRyaWJ1dG9uQ2xvc2VBcmlhTGFiZWwgPSAnVcW+ZGFyeXRpIHRlaXNpxbMgcHJpc2t5cmltbyBsYW5nxIUnO1xuICBjb250ZW50c0xhYmVsID0gJ0luZm9ybWFjaWphIGFwaWUgb2JqZWt0xIUnO1xuICB0d29QYWdlVmlld0xhYmVsID0gJ0F0dmFpemR1b3RpIHBvIGR1IHB1c2xhcGl1cyc7XG4gIHNpbmdsZVBhZ2VWaWV3TGFiZWwgPSAnQXR2YWl6ZHVvdGkgcG8gdmllbsSFIHB1c2xhcMSvJztcbiAgbWV0YWRhdGFMYWJlbCA9ICdNZXRhZHVvbWVueXMnO1xuICBsaWNlbnNlTGFiZWwgPSAnTGljZW5jaWphJztcbiAgdG9jTGFiZWwgPSAnVHVyaW55cyc7XG4gIGZ1bGxTY3JlZW5MYWJlbCA9ICdQaWxubyBla3Jhbm8gcmXFvmltYXMnO1xuICBleGl0RnVsbFNjcmVlbkxhYmVsID0gJ0nFoWVpdGkgacWhIHBpbG5vIGVrcmFubyByZcW+aW1vJztcbiAgem9vbUluTGFiZWwgPSAnUHJpYXJ0aW50aSc7XG4gIHpvb21PdXRMYWJlbCA9ICdBdGl0b2xpbnRpJztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnQnV2xJlzIHB1c2xhcGlzJztcbiAgbmV4dFBhZ2VMYWJlbCA9ICdLaXRhcyBwdXNsYXBpcyc7XG4gIGhvbWVMYWJlbCA9ICdHcsSvxb50aSDEryBwcmFkxb5pxIUnO1xuICByb3RhdGVDd0xhYmVsID0gJ1Bhc3VrdGkgOTDCsCc7XG4gIHNlYXJjaExhYmVsID0gJ1BhaWXFoWthJztcbiAgY2xlYXJTZWFyY2hMYWJlbCA9ICdJxaF2YWx5dGknO1xuICBwcmV2aW91c0hpdExhYmVsID0gJ0J1dsSZcyByZXp1bHRhdGFzJztcbiAgbmV4dEhpdExhYmVsID0gJ0tpdGFzIHJlenVsdGF0YXMnO1xuICBnb1RvUGFnZUxhYmVsID0gJ1BlcnNpa2VsdGkgxK8gcHVzbGFwxK8nO1xuICBjdXJyZW50UGFnZUxhYmVsID0gJ0RhYmFydGluaXMgcHVzbGFwaXMnO1xuICBlbnRlclBhZ2VOdW1iZXIgPSAnxK52ZXNraXRlIHB1c2xhcGlvIG51bWVyxK8nO1xuICBkcm9wRGlzYWJsZWQgPSAnQXRsZWlza2l0ZSwgYmV0IHZlaWtzbWFzIG5lZ2FsaW1hcyc7XG5cbiAgLy8gRVJST1JTXG4gIHNvbWV0aGluZ0hhc0dvbmVXcm9uZ0xhYmVsID0gJ09iamVrdG8gYXR2YWl6ZHVvdGkgbmVwYXZ5a28uLi4nO1xuICBtYW5pZmVzdFVyaU1pc3NpbmdMYWJlbCA9ICdOZXJhc3RhcyBvYmpla3TFsyBzxIVyYcWhbyBpZGVudGlmaWthdG9yaXVzIChNYW5pZmVzdFVyaSknO1xuICBtYW5pZmVzdE5vdFZhbGlkTGFiZWwgPSAnTmV0aW5rYW1hcyBvYmpla3TFsyBzxIVyYcWhYXMgKE1hbmlmZXN0KSc7XG4gIHBhZ2VEb2VzTm90RXhpc3RzID0gJ05lcGF2eWtvIHJhc3RpIMWhaW8gcGFzbGFwaW8nO1xuXG4gIG5vUmVzdWx0c0ZvdW5kTGFiZWwgPSAocTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGBPYmpla3RlIG5lcmFzdGEgYXRpdGlrbWVuxbMgPGVtIGNsYXNzPVwiY3VycmVudC1zZWFyY2hcIj4ke3F9PC9lbT5gO1xuICB9O1xuXG4gIHJlc3VsdHNGb3VuZExhYmVsID0gKG51bWJlck9mSGl0czogbnVtYmVyLCBxOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7bnVtYmVyT2ZIaXRzfSByZXp1bHRhdGEke251bWJlck9mSGl0cyA9PT0gMSA/ICdzJyA6ICdpJ30gc3UgPGVtIGNsYXNzPVwiY3VycmVudC1zZWFyY2hcIj4ke3F9PC9lbT5gO1xuICB9O1xuICBjdXJyZW50SGl0TGFiZWwgPSAoY3VycmVudEhpdDogbnVtYmVyLCBudW1iZXJPZkhpdHM6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBgJHtjdXJyZW50SGl0fSBpxaEgJHtudW1iZXJPZkhpdHN9IGF0aXRpa21lbsWzYDtcbiAgfTtcbn1cbiJdfQ==