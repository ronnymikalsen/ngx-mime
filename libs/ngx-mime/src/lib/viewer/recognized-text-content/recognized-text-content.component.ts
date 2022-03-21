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
import { Page, TextBlock } from '../../core/alto-service/alto.model';
import { AltoService } from '../../core/alto-service/alto.service';
import { CanvasService } from '../../core/canvas-service/canvas-service';
import { IiifContentSearchService } from '../../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../../core/intl/viewer-intl';
import { SearchResult } from '../../core/models/search-result';
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
  firstPage: Page | undefined;
  secondPage: Page | undefined;

  private subscriptions = new Subscription();

  constructor(
    public intl: MimeViewerIntl,
    private cdr: ChangeDetectorRef,
    private canvasService: CanvasService,
    private altoService: AltoService,
    private viewerService: ViewerService,
    private iiifManifestService: IiifManifestService,
    private iiifContentSearchService: IiifContentSearchService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.iiifContentSearchService.onChange.subscribe((sr: SearchResult) => {
        this.altoService.initialize(sr.hits);
      })
    );

    this.subscriptions.add(
      this.iiifManifestService.currentManifest.subscribe(() => {
        this.clearRecognizedText();
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
      this.altoService.hasErrors$.subscribe((error: string | undefined) => {
        this.error = error;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.altoService.destroy();
  }

  highlight(page: Page | undefined, textBlock: TextBlock) {
    if (page && textBlock) {
      this.viewerService.highlightTextBlock(page, textBlock);
    }
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

    this.firstPage = this.altoService.getHtml(canvases[0]);
    if (this.firstPage) {
      this.firstCanvasRecognizedTextContent = this.extractTextBlocks(
        this.firstPage
      );
    }

    if (canvases.length === 2) {
      this.secondPage = this.altoService.getHtml(canvases[1]);
      if (this.secondPage) {
        this.secondCanvasRecognizedTextContent = this.extractTextBlocks(
          this.secondPage
        );
      }
    }
  }

  private extractTextBlocks(page: Page) {
    let textBlocks: TextBlock[] = [];
    if (page.topMargin.textBlocks) {
      textBlocks = [...textBlocks, ...page.topMargin.textBlocks];
    }
    if (page.leftMargin.textBlocks) {
      textBlocks = [...textBlocks, ...page.leftMargin.textBlocks];
    }
    if (page.printSpace.textBlocks) {
      textBlocks = [...textBlocks, ...page.printSpace.textBlocks];
    }
    if (page.bottomMargin.textBlocks) {
      textBlocks = [...textBlocks, ...page.bottomMargin.textBlocks];
    }
    return textBlocks;
  }
}
