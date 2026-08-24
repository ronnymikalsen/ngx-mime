import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { MatSliderHarness } from '@angular/material/slider/testing';
import { provideAutoSpy } from 'jest-auto-spies';
import { CanvasGroupDialogComponent } from '../../../canvas-group-dialog/canvas-group-dialog.component';
import { CanvasGroupDialogService } from '../../../canvas-group-dialog/canvas-group-dialog.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { ViewerLayoutService } from '../../../core/viewer-layout-service/viewer-layout-service';
import { CanvasServiceStub } from '../../../test/canvas-service-stub';
import { IiifManifestServiceStub } from '../../../test/iiif-manifest-service-stub';
import { ViewerServiceStub } from '../../../test/viewer-service-stub';
import { CanvasService } from './../../../core/canvas-service/canvas-service';
import { MimeViewerIntl } from './../../../core/intl';
import { ViewerService } from './../../../core/viewer-service/viewer.service';
import { CanvasGroupNavigatorComponent } from './canvas-group-navigator.component';

@Component({
  template: `<mime-page-navigator #navigator></mime-page-navigator>`,
  imports: [CanvasGroupNavigatorComponent],
})
export class TestHostComponent {
  @ViewChild('navigator', { static: false })
  canvasGroupNavigatorComponent!: CanvasGroupNavigatorComponent;
  @ViewChild('navigator', { read: ElementRef })
  canvasGroupNavigatorElementRef!: ElementRef;
  viewContainerRef = inject(ViewContainerRef);
}

describe('CanvasGroupNavigatorComponent', () => {
  let component: CanvasGroupNavigatorComponent;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let rootLoader: HarnessLoader;
  let spy: any;
  let canvasService: CanvasServiceStub;
  let viewerService: ViewerService;
  let intl: MimeViewerIntl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        TestHostComponent,
        CanvasGroupNavigatorComponent,
        CanvasGroupDialogComponent,
      ],
      providers: [
        MimeViewerIntl,
        CanvasGroupDialogService,
        { provide: ViewerService, useClass: ViewerServiceStub },
        { provide: CanvasService, useClass: CanvasServiceStub },
        { provide: IiifManifestService, useClass: IiifManifestServiceStub },
        provideAutoSpy(ViewerLayoutService),
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    rootLoader = TestbedHarnessEnvironment.documentRootLoader(testHostFixture);
    canvasService = TestBed.inject<any>(CanvasService);
    viewerService = TestBed.inject<any>(ViewerService);
    intl = TestBed.inject(MimeViewerIntl);
    await testHostFixture.whenStable();
    component = testHostComponent.canvasGroupNavigatorComponent;
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should open canvas group dialog', async () => {
    const canvasGroupDialogButton = await getCanvasGroupDialogButton();

    await canvasGroupDialogButton?.click();

    const dialogs = await rootLoader.getAllHarnesses(MatDialogHarness);
    expect(dialogs.length).toEqual(1);
  });

  it('should re-render when the i18n labels have changed', async () => {
    const nextButton = await getNextButton();
    let ariaLabel = await getAriaLabel(nextButton);

    expect(ariaLabel).toEqual(`Next Page`);

    intl.nextPageLabel = 'New test string';
    intl.changes.next();
    await testHostFixture.whenStable();

    ariaLabel = await getAriaLabel(nextButton);
    expect(ariaLabel).toEqual('New test string');
  });

  it('should enable both navigation buttons when viewer is on second canvas group', async () => {
    canvasService._currentCanvasGroupIndex.next(1);
    await testHostFixture.whenStable();

    const previousButton = await getPreviousButton();
    const nextButton = await getNextButton();
    expect(await previousButton?.isDisabled()).toBeFalsy();
    expect(await nextButton?.isDisabled()).toBeFalsy();
  });

  it('should disable previous button when viewer is on first canvas group', async () => {
    canvasService._currentCanvasGroupIndex.next(0);
    await testHostFixture.whenStable();

    const previousButton = await getPreviousButton();
    expect(await previousButton?.isDisabled()).toBeTruthy();
  });

  it('should disable next button when viewer is on last canvas group', async () => {
    canvasService._currentNumberOfCanvasGroups.next(10);

    canvasService._currentCanvasGroupIndex.next(9);
    await testHostFixture.whenStable();
    const nextButton = await getNextButton();

    expect(await nextButton?.isDisabled()).toBeTruthy();
  });

  it('should reset a local slider value when the service index changes', async () => {
    component.currentCanvasGroupIndex.set(3);

    expect(component.currentCanvasGroupIndex()).toBe(3);

    canvasService._currentCanvasGroupIndex.next(4);
    await testHostFixture.whenStable();

    expect(component.currentCanvasGroupIndex()).toBe(4);
  });

  it('should display next canvas group', async () => {
    spy = jest.spyOn(viewerService, 'goToNextCanvasGroup').mockImplementation();
    await testHostFixture.whenStable();
    const nextButton = await getNextButton();

    await nextButton?.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should display previous canvas group', async () => {
    spy = jest.spyOn(viewerService, 'goToPreviousCanvasGroup');

    canvasService._currentCanvasGroupIndex.next(9);

    await testHostFixture.whenStable();
    const previousButton = await getPreviousButton();

    await previousButton?.click();

    await testHostFixture.whenStable();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should disable previous and next button if there is only one canvas', async () => {
    canvasService._currentNumberOfCanvasGroups.next(1);
    await testHostFixture.whenStable();
    const previousButton = await getPreviousButton();
    const nextButton = await getNextButton();

    expect(await nextButton?.isDisabled()).toBe(true);
    expect(await previousButton?.isDisabled()).toBe(true);
  });

  it('should check hotkeys', async () => {
    spy = jest.spyOn(component, 'onSliderHotKey');

    const slider = await rootLoader.getHarness(
      MatSliderHarness.with({ selector: '.navigation-slider' }),
    );
    const sliderHost = await slider.host();
    await sliderHost.sendKeys('f');

    expect(spy).toHaveBeenCalled();
  });

  const getCanvasGroupDialogButton = async () =>
    rootLoader.getHarnessOrNull(
      MatButtonHarness.with({
        selector: '[data-testid="canvasGroupDialogButton"]',
      }),
    );

  const getPreviousButton = async () =>
    rootLoader.getHarnessOrNull(
      MatButtonHarness.with({
        selector: '[data-testid="footerNavigateBeforeButton"]',
      }),
    );

  const getNextButton = async () =>
    rootLoader.getHarnessOrNull(
      MatButtonHarness.with({
        selector: '[data-testid="footerNavigateNextButton"]',
      }),
    );

  const getAriaLabel = async (buttonHarness: MatButtonHarness | null) => {
    const host = await buttonHarness?.host();
    return host?.getAttribute('aria-label');
  };
});
