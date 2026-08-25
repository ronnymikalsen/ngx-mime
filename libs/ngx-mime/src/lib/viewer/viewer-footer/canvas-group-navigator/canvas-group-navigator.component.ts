import { Dir, Direction } from '@angular/cdk/bidi';
import {
  Component,
  computed,
  inject,
  Input,
  linkedSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatToolbar } from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { CanvasGroupDialogService } from '../../../canvas-group-dialog/canvas-group-dialog.service';
import { IiifManifestService } from '../../../core/iiif-manifest-service/iiif-manifest-service';
import { AccessKeys } from '../../../core/models/AccessKeys';
import { ViewingDirection } from '../../../core/models/viewing-direction';
import { CanvasService } from './../../../core/canvas-service/canvas-service';
import { injectMimeViewerIntlSignal } from './../../../core/intl/viewer-intl.signal';
import { SearchResult } from './../../../core/models/search-result';
import { ViewerService } from './../../../core/viewer-service/viewer.service';

@Component({
  selector: 'mime-page-navigator',
  templateUrl: './canvas-group-navigator.component.html',
  styleUrls: ['./canvas-group-navigator.component.scss'],
  imports: [
    MatToolbar,
    Dir,
    MatSlider,
    MatSliderThumb,
    MatButton,
    MatIconButton,
    MatTooltip,
    MatIcon,
  ],
})
export class CanvasGroupNavigatorComponent {
  @Input() searchResult!: SearchResult;
  readonly intl = injectMimeViewerIntlSignal();
  readonly manifest = toSignal(inject(IiifManifestService).currentManifest, {
    initialValue: null,
  });
  readonly currentViewingDirection = computed<Direction>(() =>
    this.getCurrentViewingDirection(),
  );
  readonly numberOfCanvasGroups = toSignal(
    inject(CanvasService).onNumberOfCanvasGroupsChange,
    { initialValue: 0 },
  );
  readonly numberOfCanvases = this.createNumberOfCanvasesSignal();
  readonly serviceCanvasGroupIndex = this.createCanvasGroupIndexSignal();
  readonly currentCanvasGroupIndex = linkedSignal(() =>
    this.serviceCanvasGroupIndex(),
  );
  readonly canvasGroupLabel = computed(() =>
    this.canvasService.getCanvasGroupLabel(this.currentCanvasGroupIndex()),
  );
  readonly isFirstCanvasGroup = computed(
    () => this.currentCanvasGroupIndex() === 0,
  );
  readonly isLastCanvasGroup = computed(
    () => this.currentCanvasGroupIndex() === this.numberOfCanvasGroups() - 1,
  );
  readonly ViewingDirection = ViewingDirection;
  private readonly viewerService = inject(ViewerService);
  private readonly canvasService = inject(CanvasService);
  private readonly canvasGroupDialogService = inject(CanvasGroupDialogService);

  goToPreviousCanvasGroup(): void {
    this.viewerService.goToPreviousCanvasGroup();
  }

  goToNextCanvasGroup(): void {
    this.viewerService.goToNextCanvasGroup();
  }

  onSliderChange(event: Event): void {
    const value = parseInt((event.target as HTMLInputElement).value);
    this.currentCanvasGroupIndex.set(value);
    this.viewerService.goToCanvasGroup(value, false);
  }

  onSliderHotKey(event: KeyboardEvent) {
    const accessKeys = new AccessKeys(event);
    if (accessKeys.isSliderKeys()) {
      event.stopPropagation();
    }
  }

  openCanvasGroupDialog(): void {
    this.canvasGroupDialogService.toggle();
  }

  private getCurrentViewingDirection(): Direction {
    const manifest = this.manifest();
    return !manifest || manifest.viewingDirection === ViewingDirection.LTR
      ? ViewingDirection.LTR
      : ViewingDirection.RTL;
  }

  private createNumberOfCanvasesSignal() {
    const canvasService = inject(CanvasService);
    return toSignal(
      canvasService.onNumberOfCanvasGroupsChange.pipe(
        map(() => canvasService.numberOfCanvases),
      ),
      { initialValue: canvasService.numberOfCanvases },
    );
  }

  private createCanvasGroupIndexSignal() {
    const canvasService = inject(CanvasService);
    return toSignal(canvasService.onCanvasGroupIndexChange, {
      initialValue: canvasService.currentCanvasGroupIndex,
    });
  }
}
