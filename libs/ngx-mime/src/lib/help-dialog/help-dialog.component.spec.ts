import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideAutoSpy } from 'jest-auto-spies';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ViewerLayoutServiceStub } from '../test/viewer-layout-service-stub';
import { HelpDialogComponent } from './help-dialog.component';

describe('HelpDialogComponent', () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;
  let viewerLayoutServiceStub: ViewerLayoutServiceStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDialogComponent],
      providers: [
        MimeViewerIntl,
        provideAutoSpy(MimeResizeService, {
          observablePropsToSpyOn: ['onResize'],
        }),
        {
          provide: ViewerLayoutService,
          useClass: ViewerLayoutServiceStub,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpDialogComponent);
    component = fixture.componentInstance;
    viewerLayoutServiceStub = TestBed.inject<any>(ViewerLayoutService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display desktop toolbar', async () => {
    await fixture.whenStable();

    const heading: DebugElement = fixture.debugElement.query(
      By.css('.heading-desktop'),
    );
    expect(heading).not.toBeNull();
  });

  it('should display mobile toolbar', async () => {
    viewerLayoutServiceStub.useMobileViewport();
    await fixture.whenStable();

    const heading: DebugElement = fixture.debugElement.query(
      By.css('.heading-desktop'),
    );
    expect(heading).toBeNull();
  });
});
