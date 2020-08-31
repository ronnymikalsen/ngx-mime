import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MimeViewerIntl } from './viewer-intl';
import { HelpIntlLt } from './help-intl.lt';
let MimeViewerIntlLt = class MimeViewerIntlLt extends MimeViewerIntl {
    constructor() {
        super(...arguments);
        this.help = new HelpIntlLt();
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
};
MimeViewerIntlLt = __decorate([
    Injectable()
], MimeViewerIntlLt);
export { MimeViewerIntlLt };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLWludGwubHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmF0aW9uYWxsaWJyYXJ5b2Zub3J3YXkvbmd4LW1pbWUvIiwic291cmNlcyI6WyJsaWIvY29yZS9pbnRsL3ZpZXdlci1pbnRsLmx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWlCLFNBQVEsY0FBYztJQUFwRDs7UUFDRSxTQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLDZCQUF3QixHQUFHLGtDQUFrQyxDQUFDO1FBQzlELGtCQUFhLEdBQUcsMEJBQTBCLENBQUM7UUFDM0MscUJBQWdCLEdBQUcsNkJBQTZCLENBQUM7UUFDakQsd0JBQW1CLEdBQUcsOEJBQThCLENBQUM7UUFDckQsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFDL0IsaUJBQVksR0FBRyxXQUFXLENBQUM7UUFDM0IsYUFBUSxHQUFHLFNBQVMsQ0FBQztRQUNyQixvQkFBZSxHQUFHLHNCQUFzQixDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLCtCQUErQixDQUFDO1FBQ3RELGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsY0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLHFCQUFnQixHQUFHLFVBQVUsQ0FBQztRQUM5QixxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLGtCQUFrQixDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsc0JBQXNCLENBQUM7UUFDdkMscUJBQWdCLEdBQUcscUJBQXFCLENBQUM7UUFDekMsb0JBQWUsR0FBRywwQkFBMEIsQ0FBQztRQUM3QyxpQkFBWSxHQUFHLG9DQUFvQyxDQUFDO1FBRXBELFNBQVM7UUFDVCwrQkFBMEIsR0FBRyxpQ0FBaUMsQ0FBQztRQUMvRCw0QkFBdUIsR0FBRyx3REFBd0QsQ0FBQztRQUNuRiwwQkFBcUIsR0FBRyx1Q0FBdUMsQ0FBQztRQUNoRSxzQkFBaUIsR0FBRyw2QkFBNkIsQ0FBQztRQUVsRCx3QkFBbUIsR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO1lBQ2xDLE9BQU8seURBQXlELENBQUMsT0FBTyxDQUFDO1FBQzNFLENBQUMsQ0FBQztRQUVGLHNCQUFpQixHQUFHLENBQUMsWUFBb0IsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUN0RCxPQUFPLEdBQUcsWUFBWSxhQUFhLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyxPQUFPLENBQUM7UUFDOUcsQ0FBQyxDQUFDO1FBQ0Ysb0JBQWUsR0FBRyxDQUFDLFVBQWtCLEVBQUUsWUFBb0IsRUFBRSxFQUFFO1lBQzdELE9BQU8sR0FBRyxVQUFVLE9BQU8sWUFBWSxhQUFhLENBQUM7UUFDdkQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUE7QUE1Q1ksZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtHQUNBLGdCQUFnQixDQTRDNUI7U0E1Q1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWltZVZpZXdlckludGwgfSBmcm9tICcuL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IEhlbHBJbnRsTHQgfSBmcm9tICcuL2hlbHAtaW50bC5sdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNaW1lVmlld2VySW50bEx0IGV4dGVuZHMgTWltZVZpZXdlckludGwge1xuICBoZWxwID0gbmV3IEhlbHBJbnRsTHQoKTtcbiAgY2xvc2VMYWJlbCA9ICdVxb5kYXJ5dGknO1xuICBhdHRyaWJ1dGlvbkxhYmVsID0gJ1RlaXNpxbMgcHJpc2t5cmltYXMnO1xuICBhdHRyaWJ1dG9uQ2xvc2VBcmlhTGFiZWwgPSAnVcW+ZGFyeXRpIHRlaXNpxbMgcHJpc2t5cmltbyBsYW5nxIUnO1xuICBjb250ZW50c0xhYmVsID0gJ0luZm9ybWFjaWphIGFwaWUgb2JqZWt0xIUnO1xuICB0d29QYWdlVmlld0xhYmVsID0gJ0F0dmFpemR1b3RpIHBvIGR1IHB1c2xhcGl1cyc7XG4gIHNpbmdsZVBhZ2VWaWV3TGFiZWwgPSAnQXR2YWl6ZHVvdGkgcG8gdmllbsSFIHB1c2xhcMSvJztcbiAgbWV0YWRhdGFMYWJlbCA9ICdNZXRhZHVvbWVueXMnO1xuICBsaWNlbnNlTGFiZWwgPSAnTGljZW5jaWphJztcbiAgdG9jTGFiZWwgPSAnVHVyaW55cyc7XG4gIGZ1bGxTY3JlZW5MYWJlbCA9ICdQaWxubyBla3Jhbm8gcmXFvmltYXMnO1xuICBleGl0RnVsbFNjcmVlbkxhYmVsID0gJ0nFoWVpdGkgacWhIHBpbG5vIGVrcmFubyByZcW+aW1vJztcbiAgem9vbUluTGFiZWwgPSAnUHJpYXJ0aW50aSc7XG4gIHpvb21PdXRMYWJlbCA9ICdBdGl0b2xpbnRpJztcbiAgcHJldmlvdXNQYWdlTGFiZWwgPSAnQnV2xJlzIHB1c2xhcGlzJztcbiAgbmV4dFBhZ2VMYWJlbCA9ICdLaXRhcyBwdXNsYXBpcyc7XG4gIGhvbWVMYWJlbCA9ICdHcsSvxb50aSDEryBwcmFkxb5pxIUnO1xuICByb3RhdGVDd0xhYmVsID0gJ1Bhc3VrdGkgOTDCsCc7XG4gIHNlYXJjaExhYmVsID0gJ1BhaWXFoWthJztcbiAgY2xlYXJTZWFyY2hMYWJlbCA9ICdJxaF2YWx5dGknO1xuICBwcmV2aW91c0hpdExhYmVsID0gJ0J1dsSZcyByZXp1bHRhdGFzJztcbiAgbmV4dEhpdExhYmVsID0gJ0tpdGFzIHJlenVsdGF0YXMnO1xuICBnb1RvUGFnZUxhYmVsID0gJ1BlcnNpa2VsdGkgxK8gcHVzbGFwxK8nO1xuICBjdXJyZW50UGFnZUxhYmVsID0gJ0RhYmFydGluaXMgcHVzbGFwaXMnO1xuICBlbnRlclBhZ2VOdW1iZXIgPSAnxK52ZXNraXRlIHB1c2xhcGlvIG51bWVyxK8nO1xuICBkcm9wRGlzYWJsZWQgPSAnQXRsZWlza2l0ZSwgYmV0IHZlaWtzbWFzIG5lZ2FsaW1hcyc7XG5cbiAgLy8gRVJST1JTXG4gIHNvbWV0aGluZ0hhc0dvbmVXcm9uZ0xhYmVsID0gJ09iamVrdG8gYXR2YWl6ZHVvdGkgbmVwYXZ5a28uLi4nO1xuICBtYW5pZmVzdFVyaU1pc3NpbmdMYWJlbCA9ICdOZXJhc3RhcyBvYmpla3TFsyBzxIVyYcWhbyBpZGVudGlmaWthdG9yaXVzIChNYW5pZmVzdFVyaSknO1xuICBtYW5pZmVzdE5vdFZhbGlkTGFiZWwgPSAnTmV0aW5rYW1hcyBvYmpla3TFsyBzxIVyYcWhYXMgKE1hbmlmZXN0KSc7XG4gIHBhZ2VEb2VzTm90RXhpc3RzID0gJ05lcGF2eWtvIHJhc3RpIMWhaW8gcGFzbGFwaW8nO1xuXG4gIG5vUmVzdWx0c0ZvdW5kTGFiZWwgPSAocTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGBPYmpla3RlIG5lcmFzdGEgYXRpdGlrbWVuxbMgPGVtIGNsYXNzPVwiY3VycmVudC1zZWFyY2hcIj4ke3F9PC9lbT5gO1xuICB9O1xuXG4gIHJlc3VsdHNGb3VuZExhYmVsID0gKG51bWJlck9mSGl0czogbnVtYmVyLCBxOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYCR7bnVtYmVyT2ZIaXRzfSByZXp1bHRhdGEke251bWJlck9mSGl0cyA9PT0gMSA/ICdzJyA6ICdpJ30gc3UgPGVtIGNsYXNzPVwiY3VycmVudC1zZWFyY2hcIj4ke3F9PC9lbT5gO1xuICB9O1xuICBjdXJyZW50SGl0TGFiZWwgPSAoY3VycmVudEhpdDogbnVtYmVyLCBudW1iZXJPZkhpdHM6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBgJHtjdXJyZW50SGl0fSBpxaEgJHtudW1iZXJPZkhpdHN9IGF0aXRpa21lbsWzYDtcbiAgfTtcbn1cbiJdfQ==