import { ChangeDetectorRef, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IiifContentSearchService } from './../../core/iiif-content-search-service/iiif-content-search.service';
import { SearchResult } from './../../core/models/search-result';
export declare class ViewerFooterComponent implements OnInit, OnDestroy {
    private iiifContentSearchService;
    mediaObserver: MediaObserver;
    private changeDetectorRef;
    mimeFooterBefore: ViewContainerRef;
    mimeFooterAfter: ViewContainerRef;
    state: string;
    showNavigationToolbar: boolean;
    searchResult: SearchResult;
    showPageNavigator: boolean;
    showContentSearchNavigator: boolean;
    private destroyed;
    private mediaSubscription;
    constructor(iiifContentSearchService: IiifContentSearchService, mediaObserver: MediaObserver, changeDetectorRef: ChangeDetectorRef);
    get footerState(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private isMobile;
}
