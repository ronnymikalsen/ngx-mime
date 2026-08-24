import { BreakpointObserver } from '@angular/cdk/layout';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { provideAutoSpy } from 'jest-auto-spies';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { FullscreenService } from '../core/fullscreen-service/fullscreen.service';
import { IiifContentSearchService } from '../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../core/intl';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { Hit } from '../core/models/hit';
import { SearchResult } from '../core/models/search-result';
import { ContentSearchNavigationService } from '../core/navigation/content-search-navigation-service/content-search-navigation.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { IiifContentSearchServiceStub } from '../test/iiif-content-search-service-stub';
import { IiifManifestServiceStub } from '../test/iiif-manifest-service-stub';
import { MatDialogRefStub } from '../test/mat-dialog-ref-stub';
import { MockBreakpointObserver } from '../test/mock-breakpoint-observer';
import { testManifest } from '../test/testManifest';
import { ViewerServiceStub } from '../test/viewer-service-stub';
import { ContentSearchDialogComponent } from './content-search-dialog.component';

describe('ContentSearchDialogComponent', () => {
  let component: ContentSearchDialogComponent;
  let fixture: ComponentFixture<ContentSearchDialogComponent>;
  let loader: HarnessLoader;

  let iiifContentSearchServiceStub: IiifContentSearchServiceStub;
  let iiifManifestServiceStub: IiifManifestServiceStub;
  let breakpointObserver: MockBreakpointObserver;
  let dialogRef: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSearchDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        MimeViewerIntl,
        MimeResizeService,
        MimeDomHelper,
        FullscreenService,
        ContentSearchNavigationService,
        CanvasService,
        { provide: MatDialogRef, useClass: MatDialogRefStub },
        { provide: ViewerService, useClass: ViewerServiceStub },
        { provide: IiifManifestService, useClass: IiifManifestServiceStub },
        {
          provide: IiifContentSearchService,
          useClass: IiifContentSearchServiceStub,
        },
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
        provideAutoSpy(ViewerLayoutService),
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(ContentSearchDialogComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    iiifContentSearchServiceStub = TestBed.inject<any>(
      IiifContentSearchService,
    );
    iiifManifestServiceStub = TestBed.inject<any>(IiifManifestService);
    breakpointObserver = TestBed.inject(
      BreakpointObserver,
    ) as MockBreakpointObserver;
    dialogRef = TestBed.inject(MatDialogRef);
    await fixture.whenStable();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display desktop toolbar', async () => {
    breakpointObserver.setMatches(false);

    await fixture.whenStable();

    const heading: DebugElement = fixture.debugElement.query(
      By.css('.heading-desktop'),
    );
    expect(heading).not.toBeNull();
  });

  it('should display mobile toolbar', async () => {
    breakpointObserver.setMatches(true);

    await fixture.whenStable();

    const heading: DebugElement = fixture.debugElement.query(
      By.css('.heading-desktop'),
    );
    expect(heading).toBeNull();
  });

  it('should go to hit and close dialog when selected on mobile', async () => {
    breakpointObserver.setMatches(true);
    jest.spyOn(iiifContentSearchServiceStub, 'selected');
    jest.spyOn(dialogRef, 'close');
    iiifContentSearchServiceStub._currentSearchResult.next(
      new SearchResult({
        q: 'dummysearch',
        hits: [
          new Hit({
            index: 0,
            match: 'querystring',
          }),
        ],
      }),
    );
    await fixture.whenStable();

    const hits = fixture.debugElement.queryAll(By.css('a[data-testid="hit"]'));
    hits[0].triggerEventHandler('click', null);

    await fixture.whenStable();
    expect(iiifContentSearchServiceStub.selected).toHaveBeenCalled();
    expect(dialogRef.close).toHaveBeenCalled();
  });

  it('should go to hit and when selected on desktop', async () => {
    breakpointObserver.setMatches(false);
    jest.spyOn(iiifContentSearchServiceStub, 'selected');
    jest.spyOn(dialogRef, 'close');
    iiifContentSearchServiceStub._currentSearchResult.next(
      new SearchResult({
        q: 'dummysearch',
        hits: [
          new Hit({
            index: 0,
            match: 'querystring',
          }),
        ],
      }),
    );
    await fixture.whenStable();

    const hits = fixture.debugElement.queryAll(By.css('a[data-testid="hit"]'));
    hits[0].triggerEventHandler('click', null);

    await fixture.whenStable();
    expect(iiifContentSearchServiceStub.selected).toHaveBeenCalled();
    expect(dialogRef.close).not.toHaveBeenCalled();
  });

  it('should remain in search input if content search return zero hits', async () => {
    const searchInput = fixture.debugElement.query(
      By.css('.content-search-input'),
    );
    const searchResultContainer = fixture.debugElement.query(
      By.css('.content-search-result-container'),
    );
    const spy = jest.spyOn(searchResultContainer.nativeElement, 'focus');
    iiifManifestServiceStub._currentManifest.next(testManifest);

    await fixture.whenStable();

    searchInput.nativeElement.setAttribute('value', 'dummyvalue');
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    searchInput.nativeElement.dispatchEvent(event);

    iiifContentSearchServiceStub._currentSearchResult.next(new SearchResult());

    await fixture.whenStable();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should set focus on search result if content search return hits', async () => {
    const searchInput = fixture.debugElement.query(
      By.css('.content-search-input'),
    );
    const searchResultContainer = fixture.debugElement.query(
      By.css('.content-search-result-container'),
    );
    const spy = jest.spyOn(searchResultContainer.nativeElement, 'focus');
    iiifManifestServiceStub._currentManifest.next(testManifest);

    await fixture.whenStable();

    searchInput.nativeElement.setAttribute('value', 'dummyvalue');
    const event = new KeyboardEvent('keypress', { key: 'Enter' });
    searchInput.nativeElement.dispatchEvent(event);

    iiifContentSearchServiceStub._currentSearchResult.next(
      new SearchResult({
        hits: [new Hit({ id: 1 }), new Hit({ id: 2 })],
      }),
    );

    await fixture.whenStable();

    expect(spy).toHaveBeenCalled();
  });

  it('should only show clear button on input', async () => {
    const searchInput: DebugElement = fixture.debugElement.query(
      By.css('.content-search-input'),
    );

    expect(await getButtonCount()).toEqual(2);

    searchInput.nativeElement.value = 'dummyvalue';
    searchInput.nativeElement.dispatchEvent(new Event('input'));

    await fixture.whenStable();

    expect(await getButtonCount()).toBe(3);
  });

  async function getButtonCount() {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    return buttons.length;
  }
});
