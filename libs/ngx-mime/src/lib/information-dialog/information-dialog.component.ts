import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
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
import { MimeViewerIntl } from '../core/intl';
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
  selectedIndex = 0;
  readonly intl = (() => {
    const intl = inject(MimeViewerIntl);
    return toSignal(intl.changes.pipe(map(() => ({ ...intl }))), {
      initialValue: intl,
    });
  })();
  readonly isHandsetOrTabletInPortrait = toSignal(
    inject(BreakpointObserver)
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map((value: BreakpointState) => value.matches)),
    { initialValue: false },
  );
  readonly manifest = toSignal(inject(IiifManifestService).currentManifest, {
    initialValue: null,
  });
  readonly showToc = computed(() => {
    const manifest = this.manifest();
    return Boolean(manifest?.structures?.length);
  });
  readonly mimeHeight = toSignal(
    inject(MimeResizeService).onResize.pipe(
      map((dimensions) => dimensions.height),
    ),
    { initialValue: 0 },
  );
  readonly tabHeight = computed(() => {
    const height = this.isHandsetOrTabletInPortrait()
      ? window.innerHeight - 128
      : this.mimeHeight() - 288;
    return { maxHeight: `${height}px` };
  });
  private readonly dialogRef =
    inject<MatDialogRef<InformationDialogComponent>>(MatDialogRef);

  onCanvasChanged() {
    if (this.isHandsetOrTabletInPortrait()) {
      this.dialogRef.close();
    }
  }
}
