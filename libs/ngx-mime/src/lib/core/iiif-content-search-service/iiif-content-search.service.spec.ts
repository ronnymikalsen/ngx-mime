import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TestManifests } from '../../../testing';
import { testSearchResult } from '../../test/testSearchResult';
import { MimeViewerConfig } from '../mime-viewer-config';
import { Hit } from '../models/hit';
import { SearchResult } from '../models/search-result';
import { IiifContentSearchService } from './iiif-content-search.service';

describe('IiifContentSearchService', () => {
  let httpTestingController: HttpTestingController;
  let service: IiifContentSearchService;
  let config: MimeViewerConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        IiifContentSearchService,
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IiifContentSearchService);
    config = new MimeViewerConfig();
    service.setConfig(config);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a search result', () => {
    let result: SearchResult = new SearchResult();

    service.search(TestManifests.withContentSearchService(), 'query');
    service.onChange.subscribe((searchResult: SearchResult) => {
      result = searchResult;
    });

    httpTestingController.expectOne(`dummyUrl?q=query`).flush(testSearchResult);

    expect(result?.size()).toBe(2);
  });

  it('should return a empty search result if empty q', () => {
    let result!: SearchResult;

    service.search(TestManifests.aEmpty(), '');
    service.onChange.subscribe((searchResult: SearchResult) => {
      result = searchResult;
    });

    httpTestingController.expectNone(`dummyUrl?q=`);

    expect(result.size()).toBe(0);
  });

  it('should cleanup on destroy', () => {
    let currentSearchResult!: SearchResult;
    let currentQ!: string;
    let currentIsSearching!: boolean;
    let currentSelected!: Hit | null;
    service.search(TestManifests.withContentSearchService(), 'fakeQuery');
    service.isSearching.subscribe(
      (isSearching: boolean) => (currentIsSearching = isSearching),
    );
    service.onQChange.subscribe((q: string) => (currentQ = q));
    service.onChange.subscribe(
      (searchResult: SearchResult) => (currentSearchResult = searchResult),
    );
    service.onSelected.subscribe(
      (selected: Hit | null) => (currentSelected = selected),
    );
    httpTestingController
      .expectOne(`dummyUrl?q=fakeQuery`)
      .flush(testSearchResult);
    service.selected(new Hit());

    service.destroy();

    expect(currentSelected).toBeNull();
    expect(currentIsSearching).toBeFalsy();
    expect(currentQ).toBe('');
    expect(currentSearchResult.q).toEqual('');
    expect(currentSearchResult.hits.length).toBe(0);
  });
});
