import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { ContentSearchDialogService } from '../../content-search-dialog/content-search-dialog.service';
import { FullscreenService } from '../../core/fullscreen-service/fullscreen.service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { ManifestUtils } from '../../core/iiif-manifest-service/iiif-manifest-utils';
import { injectMimeViewerIntlSignal } from '../../core/intl/viewer-intl.signal';
import { MimeDomHelper } from '../../core/mime-dom-helper';
import { HelpDialogService } from '../../help-dialog/help-dialog.service';
import { InformationDialogService } from '../../information-dialog/information-dialog.service';
import { ViewDialogService } from '../../view-dialog/view-dialog.service';

@Component({
  selector: 'mime-viewer-header',
  templateUrl: './viewer-header.component.html',
  styleUrls: ['./viewer-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [MatToolbar, MatTooltip, MatIconButton, MatIcon],
})
export class ViewerHeaderComponent {
  @ViewChild('mimeHeaderBefore', { read: ViewContainerRef, static: true })
  mimeHeaderBefore!: ViewContainerRef;
  @ViewChild('mimeHeaderAfter', { read: ViewContainerRef, static: true })
  mimeHeaderAfter!: ViewContainerRef;
  @ViewChild('viewMenu', { read: ElementRef, static: true })
  viewMenu!: ElementRef;
  readonly intl = injectMimeViewerIntlSignal();
  readonly manifest = toSignal(inject(IiifManifestService).currentManifest, {
    initialValue: null,
  });
  readonly isContentSearchEnabled = computed(() =>
    Boolean(this.manifest()?.service),
  );
  readonly isFullscreenEnabled = inject(FullscreenService).isEnabled();
  readonly isInFullscreen = this.createIsInFullscreenSignal();
  readonly fullscreenLabel = computed(() =>
    this.isInFullscreen()
      ? this.intl().exitFullScreenLabel
      : this.intl().fullScreenLabel,
  );
  readonly isPagedManifest = computed(() => this.isCurrentManifestPaged());
  readonly hasRecognizedTextContent = computed(() =>
    this.currentManifestHasRecognizedTextContent(),
  );
  private readonly informationDialogService = inject(InformationDialogService);
  private readonly contentSearchDialogService = inject(
    ContentSearchDialogService,
  );
  private readonly viewDialogService = inject(ViewDialogService);
  private readonly helpDialogService = inject(HelpDialogService);
  private readonly mimeDomHelper = inject(MimeDomHelper);

  toggleView() {
    this.informationDialogService.close();
    this.contentSearchDialogService.close();
    this.helpDialogService.close();
    this.viewDialogService.toggle();
  }

  toggleInformationDialog() {
    this.viewDialogService.close();
    this.contentSearchDialogService.close();
    this.helpDialogService.close();
    this.informationDialogService.toggle();
  }

  toggleSearch() {
    this.viewDialogService.close();
    this.informationDialogService.close();
    this.helpDialogService.close();
    this.contentSearchDialogService.toggle();
  }

  toggleHelp() {
    this.viewDialogService.close();
    this.informationDialogService.close();
    this.contentSearchDialogService.close();
    this.helpDialogService.toggle();
  }

  toggleFullscreen(): void {
    return this.mimeDomHelper.toggleFullscreen();
  }

  private createIsInFullscreenSignal() {
    const fullscreenService = inject(FullscreenService);
    return toSignal(
      fullscreenService.onChange.pipe(
        map(() => fullscreenService.isFullscreen()),
      ),
      { initialValue: fullscreenService.isFullscreen() },
    );
  }

  private isCurrentManifestPaged(): boolean {
    const manifest = this.manifest();
    return manifest ? ManifestUtils.isManifestPaged(manifest) : false;
  }

  private currentManifestHasRecognizedTextContent(): boolean {
    const manifest = this.manifest();
    return manifest ? ManifestUtils.hasRecognizedTextContent(manifest) : false;
  }
}
