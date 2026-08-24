import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { ViewerService } from '../../core/viewer-service/viewer.service';

@Component({
  selector: 'mime-toc',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TocComponent {
  @Output()
  canvasChanged: EventEmitter<number> = new EventEmitter();
  readonly manifest = toSignal(inject(IiifManifestService).currentManifest, {
    initialValue: null,
  });
  readonly currentCanvasGroupIndex = toSignal(
    inject(ViewerService).onCanvasGroupIndexChange,
    { initialValue: 0 },
  );
  private readonly viewerService = inject(ViewerService);

  goToCanvas(event: Event, canvasIndex: number | undefined): void {
    if (canvasIndex !== undefined) {
      event.preventDefault();
      this.viewerService.goToCanvas(canvasIndex, false);
      this.canvasChanged.emit(canvasIndex);
    }
  }
}
