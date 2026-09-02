import { BreakpointObserver } from '@angular/cdk/layout';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideAutoSpy } from 'jest-auto-spies';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { MockBreakpointObserver } from '../test/mock-breakpoint-observer';
import { HelpDialogComponent } from './help-dialog.component';

describe('HelpDialogComponent', () => {
  let component: HelpDialogComponent;
  let fixture: ComponentFixture<HelpDialogComponent>;
  let breakpointObserver: MockBreakpointObserver;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpDialogComponent],
      providers: [
        MimeViewerIntl,
        provideAutoSpy(MimeResizeService, {
          observablePropsToSpyOn: ['onResize'],
        }),
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HelpDialogComponent);
    component = fixture.componentInstance;
    breakpointObserver = TestBed.inject(
      BreakpointObserver,
    ) as MockBreakpointObserver;
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
});
