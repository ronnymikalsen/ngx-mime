import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgStyle } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import { MatButtonToggle } from '@angular/material/button-toggle';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { AltoService } from '../core/alto-service/alto.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { ManifestUtils } from '../core/iiif-manifest-service/iiif-manifest-utils';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { RecognizedTextMode, RecognizedTextModeChanges } from '../core/models';
import { ViewerLayout } from '../core/models/viewer-layout';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'mime-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss'],
  imports: [
    MatToolbar,
    MatIconButton,
    MatTooltip,
    MatDialogClose,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    NgStyle,
    MatButtonToggle,
    IconComponent,
    MatDivider,
  ],
})
export class ViewDialogComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly viewerLayoutService = inject(ViewerLayoutService);
  private readonly altoService = inject(AltoService);
  private readonly iiifManifestService = inject(IiifManifestService);
  private readonly mimeResizeService = inject(MimeResizeService);
  readonly intl = injectMimeViewerIntlSignal();

  ViewerLayout: typeof ViewerLayout = ViewerLayout;
  RecognizedTextMode: typeof RecognizedTextMode = RecognizedTextMode;
  readonly isHandsetOrTabletInPortrait = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );
  readonly viewerLayout = this.viewerLayoutService.viewerLayout;
  readonly recognizedTextMode = toSignal(
    this.altoService.onRecognizedTextContentModeChange$.pipe(
      map((changes: RecognizedTextModeChanges) => changes.currentValue),
    ),
    { initialValue: RecognizedTextMode.NONE },
  );
  readonly manifest = this.iiifManifestService.manifest;
  readonly isPagedManifest = computed(() => this.isCurrentManifestPaged());
  readonly hasRecognizedTextContent = computed(() =>
    this.currentManifestHasRecognizedTextContent(),
  );
  readonly mimeHeight = toSignal(
    this.mimeResizeService.onResize.pipe(
      map((dimensions) => dimensions.height),
    ),
    { initialValue: 0 },
  );
  readonly tabHeight = computed(() => this.getTabHeight());

  setLayoutOnePage(): void {
    this.viewerLayoutService.setLayout(ViewerLayout.ONE_PAGE);
  }

  setLayoutTwoPage(): void {
    this.viewerLayoutService.setLayout(ViewerLayout.TWO_PAGE);
  }

  closeRecognizedTextContent(): void {
    this.altoService.closeRecognizedTextContent();
  }

  showRecognizedTextContentInSplitView(): void {
    this.altoService.showRecognizedTextContentInSplitView();
  }

  showRecognizedTextContentOnly(): void {
    this.altoService.showRecognizedTextContentOnly();
  }

  private isCurrentManifestPaged(): boolean {
    const manifest = this.manifest();

    return manifest ? ManifestUtils.isManifestPaged(manifest) : false;
  }

  private currentManifestHasRecognizedTextContent(): boolean {
    const manifest = this.manifest();

    return manifest ? ManifestUtils.hasRecognizedTextContent(manifest) : false;
  }

  private getTabHeight(): { maxHeight: string } {
    const height = this.isHandsetOrTabletInPortrait()
      ? window.innerHeight - 128
      : this.mimeHeight() - 220;

    return { maxHeight: `${height}px` };
  }
}
