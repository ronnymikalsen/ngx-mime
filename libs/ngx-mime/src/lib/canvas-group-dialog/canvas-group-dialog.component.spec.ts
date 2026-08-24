import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { By } from '@angular/platform-browser';
import { AltoService } from '../core/alto-service/alto.service';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { ClickService } from '../core/click-service/click.service';
import { HighlightService } from '../core/highlight-service/highlight.service';
import { IiifContentSearchService } from '../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../core/intl';
import { ModeService } from '../core/mode-service/mode.service';
import { StyleService } from '../core/style-service/style.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { AltoServiceStub } from '../test/alto-service-stub';
import { CanvasServiceStub } from '../test/canvas-service-stub';
import { IiifContentSearchServiceStub } from '../test/iiif-content-search-service-stub';
import { IiifManifestServiceStub } from '../test/iiif-manifest-service-stub';
import { MatDialogRefStub } from '../test/mat-dialog-ref-stub';
import { CanvasGroupDialogComponent } from './canvas-group-dialog.component';

describe('CanvasGroupDialogComponent', () => {
  let component: CanvasGroupDialogComponent;
  let fixture: ComponentFixture<CanvasGroupDialogComponent>;
  let loader: HarnessLoader;

  let intl: MimeViewerIntl;
  let canvasService: CanvasServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasGroupDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ViewerService,
        ClickService,
        ModeService,
        ViewerLayoutService,
        MimeViewerIntl,
        StyleService,
        HighlightService,
        {
          provide: IiifContentSearchService,
          useClass: IiifContentSearchServiceStub,
        },
        { provide: MatDialogRef, useClass: MatDialogRefStub },
        { provide: CanvasService, useClass: CanvasServiceStub },
        { provide: AltoService, useClass: AltoServiceStub },
        { provide: IiifManifestService, useClass: IiifManifestServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CanvasGroupDialogComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);

    intl = TestBed.inject(MimeViewerIntl);
    canvasService = TestBed.inject(CanvasService) as CanvasServiceStub;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with an empty numeric page number', () => {
    const input: HTMLInputElement = fixture.debugElement.query(
      By.css('.go-to-canvas-group-input'),
    ).nativeElement;

    expect(input.value).toBe('');
    expect(typeof component.canvasGroupModel().canvasGroup).toBe('number');
    expect(Number.isNaN(component.canvasGroupModel().canvasGroup)).toBe(true);
    expect(component.canvasGroupForm().invalid()).toBe(true);
  });

  it('should re-render when the i18n labels have changed', async () => {
    const title = fixture.debugElement.query(
      By.css('.canvas-group-dialog-title'),
    );

    intl.goToPageLabel = 'Testlabel';
    intl.changes.next();
    await fixture.whenStable();

    expect(title.nativeElement.innerHTML).toBe('Testlabel');
  });

  describe('error messages', () => {
    it('should show a error message if user enters a canvas group number index that does not exists', async () => {
      canvasService._currentNumberOfCanvasGroups.next(10);

      component.canvasGroupModel.set({ canvasGroup: 11 });
      component.canvasGroupForm.canvasGroup().markAsTouched();
      await fixture.whenStable();

      const canvasGroupDoesNotExistsError =
        await loader.getHarness(MatFormFieldHarness);
      expect(await canvasGroupDoesNotExistsError.hasErrors()).toBe(true);
    });
  });
});
