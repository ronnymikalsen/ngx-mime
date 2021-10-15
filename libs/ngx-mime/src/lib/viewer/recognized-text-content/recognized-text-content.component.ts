import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TextBlock } from '../../core/alto-service/alto.model';
import { AltoService } from '../../core/alto-service/alto.service';
import { CanvasService } from '../../core/canvas-service/canvas-service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../../core/intl/viewer-intl';
import { ViewerService } from '../../core/viewer-service/viewer.service';

@Component({
  selector: 'mime-recognized-text-content',
  templateUrl: './recognized-text-content.component.html',
  styleUrls: ['./recognized-text-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecognizedTextContentComponent implements OnInit, OnDestroy {
  @ViewChild('recognizedTextContentContainer', { read: ElementRef })
  recognizedTextContentContainer!: ElementRef;
  firstCanvasRecognizedTextContent: TextBlock[] | undefined;
  secondCanvasRecognizedTextContent: TextBlock[] | undefined;
  isLoading = false;
  error: string | undefined = undefined;

  private subscriptions = new Subscription();

  constructor(
    public intl: MimeViewerIntl,
    private cdr: ChangeDetectorRef,
    private canvasService: CanvasService,
    private altoService: AltoService,
    private viewerService: ViewerService,
    private iiifManifestService: IiifManifestService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.iiifManifestService.currentManifest.subscribe(() => {
        this.clearRecognizedText();
        this.altoService.initialize();
        this.cdr.detectChanges();
      })
    );

    this.subscriptions.add(
      this.altoService.onTextContentReady$.subscribe(() => {
        this.clearRecognizedText();
        this.scrollToTop();
        this.updateRecognizedText();
        this.cdr.detectChanges();
      })
    );
    this.subscriptions.add(
      this.altoService.isLoading$.subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
        this.cdr.detectChanges();
      })
    );
    this.subscriptions.add(
      this.altoService.hasErrors$.subscribe((error: string) => {
        this.error = error;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.altoService.destroy();
  }

  highlight(textBlock: TextBlock) {
    this.viewerService.highlightTextBlock(textBlock);
  }

  private clearRecognizedText() {
    this.firstCanvasRecognizedTextContent = undefined;
    this.secondCanvasRecognizedTextContent = undefined;
  }

  private scrollToTop() {
    this.recognizedTextContentContainer.nativeElement.scrollTop = 0;
  }

  private updateRecognizedText() {
    const canvases = this.canvasService.getCanvasesPerCanvasGroup(
      this.canvasService.currentCanvasGroupIndex
    );
    this.firstCanvasRecognizedTextContent = this.altoService.getHtml(
      canvases[0]
    );

    if (canvases.length === 2) {
      this.secondCanvasRecognizedTextContent = this.altoService.getHtml(
        canvases[1]
      );
    }
  }
}
