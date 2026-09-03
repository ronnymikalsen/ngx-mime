import { NgStyle } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';

@Component({
  selector: 'mime-help',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss'],
  imports: [
    MatToolbar,
    MatIconButton,
    MatTooltip,
    MatDialogClose,
    MatIcon,
    MatDialogTitle,
    MatDialogContent,
    NgStyle,
  ],
})
export class HelpDialogComponent {
  private readonly viewerLayoutService = inject(ViewerLayoutService);
  private readonly mimeResizeService = inject(MimeResizeService);

  readonly intl = injectMimeViewerIntlSignal();
  readonly isHandsetOrTabletInPortrait =
    this.viewerLayoutService.isHandsetOrTabletInPortrait;
  readonly mimeHeight = toSignal(
    this.mimeResizeService.onResize.pipe(
      map((dimensions) => dimensions.height),
    ),
    { initialValue: 0 },
  );
  readonly tabHeight = computed(() => this.getTabHeight());

  private getTabHeight(): { maxHeight: string } {
    const height = this.isHandsetOrTabletInPortrait()
      ? window.innerHeight - 128
      : this.mimeHeight() - 220;

    return { maxHeight: `${height}px` };
  }
}
