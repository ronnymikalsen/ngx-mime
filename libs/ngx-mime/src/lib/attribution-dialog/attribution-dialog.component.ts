import {
  afterRenderEffect,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import {
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { AccessKeysService } from '../core/access-keys-handler-service/access-keys.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
import { StyleService } from '../core/style-service/style.service';
import { AttributionDialogResizeService } from './attribution-dialog-resize.service';

@Component({
  templateUrl: './attribution-dialog.component.html',
  styleUrls: ['./attribution-dialog.component.scss'],
  imports: [
    MatDialogTitle,
    MatIconButton,
    MatTooltip,
    MatDialogClose,
    MatIcon,
    MatDialogContent,
  ],
})
export class AttributionDialogComponent {
  private readonly iiifManifestService = inject(IiifManifestService);
  private readonly styleService = inject(StyleService);
  private readonly attributionDialogResizeService = inject(
    AttributionDialogResizeService,
  );
  private readonly accessKeysHandlerService = inject(AccessKeysService);
  readonly intl = injectMimeViewerIntlSignal();

  readonly container = viewChild.required<ElementRef<HTMLElement>>('container');
  readonly manifest = toSignal(this.iiifManifestService.currentManifest, {
    initialValue: null,
  });
  private readonly styleColor = toSignal(this.styleService.onChange, {
    initialValue: undefined,
  });
  readonly backgroundColor = computed(() => this.getBackgroundColor());

  constructor() {
    afterRenderEffect(() => this.updateDialogSize());
  }

  @HostListener('keydown', ['$event'])
  handleKeys(event: KeyboardEvent) {
    this.accessKeysHandlerService.handleKeyEvents(event);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.attributionDialogResizeService.markForCheck();
  }

  private getBackgroundColor(): string | null {
    const color = this.styleColor();

    return color ? this.styleService.convertToRgba(color, 0.3) : null;
  }

  private updateDialogSize(): void {
    this.manifest();
    this.intl();
    this.attributionDialogResizeService.el = this.container();
    this.attributionDialogResizeService.markForCheck();
  }
}
