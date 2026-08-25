import { signal, Signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MimeViewerConfig } from '../core/mime-viewer-config';
import { Hit } from './../core/models/hit';
import { SearchResult } from './../core/models/search-result';

export class IiifContentSearchServiceStub {
  readonly query: Signal<string>;
  readonly searchResult: Signal<SearchResult>;
  readonly searching: Signal<boolean>;
  readonly selectedHit: Signal<Hit | null>;
  readonly onQChange: Observable<string>;
  readonly onChange: Observable<SearchResult>;
  readonly isSearching: Observable<boolean>;
  readonly onSelected: Observable<Hit | null>;
  private readonly querySignal = signal('');
  private readonly searchResultSignal = signal(new SearchResult({}));
  private readonly searchingSignal = signal(false);
  private readonly selectedHitSignal = signal<Hit | null>(null);
  private readonly queryState = new BehaviorSubject(this.querySignal());
  private readonly searchResultState = new BehaviorSubject(
    this.searchResultSignal(),
  );
  private readonly searchingState = new BehaviorSubject(this.searchingSignal());
  private readonly selectedHitState = new BehaviorSubject(
    this.selectedHitSignal(),
  );
  private config!: MimeViewerConfig;

  constructor() {
    this.query = this.querySignal.asReadonly();
    this.searchResult = this.searchResultSignal.asReadonly();
    this.searching = this.searchingSignal.asReadonly();
    this.selectedHit = this.selectedHitSignal.asReadonly();
    this.onQChange = this.queryState.asObservable();
    this.onChange = this.searchResultState.asObservable();
    this.isSearching = this.searchingState.asObservable();
    this.onSelected = this.selectedHitState.asObservable();
  }

  public selected(hit: Hit) {
    this.setSelected(hit);
  }

  public setConfig(config: MimeViewerConfig) {
    this.config = config;
  }

  destroy() {}

  setQuery(query: string): void {
    this.querySignal.set(query);
    this.queryState.next(query);
  }

  setSearchResult(searchResult: SearchResult): void {
    this.searchResultSignal.set(searchResult);
    this.searchResultState.next(searchResult);
  }

  setSearching(searching: boolean): void {
    this.searchingSignal.set(searching);
    this.searchingState.next(searching);
  }

  setSelected(hit: Hit | null): void {
    this.selectedHitSignal.set(hit);
    this.selectedHitState.next(hit);
  }
}
