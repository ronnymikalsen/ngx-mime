import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { MetadataComponent } from './metadata/metadata.component';
import { TocComponent } from './table-of-contents/table-of-contents.component';

@Component({
  selector: 'mime-information',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbar,
    MatIconButton,
    MatTooltip,
    MatDialogClose,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    MatTabGroup,
    MatTab,
    NgStyle,
    MetadataComponent,
    TocComponent,
  ],
})
export class InformationDialogComponent {
  private readonly dialogRef =
    inject<MatDialogRef<InformationDialogComponent>>(MatDialogRef);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly iiifManifestService = inject(IiifManifestService);
  private readonly mimeResizeService = inject(MimeResizeService);
  readonly intl = injectMimeViewerIntlSignal();

  selectedIndex = 0;
  readonly isHandsetOrTabletInPortrait = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map(({ matches }) => matches)),
    { initialValue: false },
  );
  readonly manifest = toSignal(this.iiifManifestService.currentManifest, {
    initialValue: null,
  });
  readonly showToc = computed(() =>
    Boolean(this.manifest()?.structures?.length),
  );
  readonly mimeHeight = toSignal(
    this.mimeResizeService.onResize.pipe(
      map((dimensions) => dimensions.height),
    ),
    { initialValue: 0 },
  );
  readonly tabHeight = computed(() => this.getTabHeight());

  onCanvasChanged() {
    if (this.isHandsetOrTabletInPortrait()) {
      this.dialogRef.close();
    }
  }

  private getTabHeight(): { maxHeight: string } {
    const height = this.isHandsetOrTabletInPortrait()
      ? window.innerHeight - 128
      : this.mimeHeight() - 288;
    return { maxHeight: `${height}px` };
  }
}
