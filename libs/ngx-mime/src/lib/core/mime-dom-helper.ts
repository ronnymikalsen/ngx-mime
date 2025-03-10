import { ElementRef, Injectable } from '@angular/core';
import { FullscreenService } from './fullscreen-service/fullscreen.service';
import { Dimensions } from './models/dimensions';
import { ViewerService } from './viewer-service/viewer.service';

@Injectable()
export class MimeDomHelper {
  constructor(
    private fullscreen: FullscreenService,
    private viewerService: ViewerService,
  ) {}

  public getBoundingClientRect(el: ElementRef): Dimensions {
    try {
      if (
        this.isDocumentInFullScreenMode() &&
        el.nativeElement.nodeName === 'MIME-VIEWER'
      ) {
        return this.createFullscreenDimensions(el);
      } else {
        return this.createDimensions(el);
      }
    } catch (e) {
      return new Dimensions();
    }
  }

  public isDocumentInFullScreenMode(): boolean {
    return this.fullscreen.isFullscreen();
  }

  public toggleFullscreen(): void {
    const el = this.getViewerElement();
    if (el && this.fullscreen.isEnabled()) {
      this.fullscreen.toggle(el);
    }
  }

  public setFocusOnViewer(): void {
    const el = this.getViewerElement();
    if (el) {
      el.focus();
    }
  }

  private getViewerElement(): HTMLElement | null {
    return document.querySelector(`#${this.viewerService.id}`);
  }

  private createFullscreenDimensions(el: ElementRef): Dimensions {
    const dimensions = el.nativeElement.getBoundingClientRect();
    const width = this.getFullscreenWidth();
    const height = this.getFullscreenHeight();
    return new Dimensions({
      ...dimensions,
      top: 0,
      bottom: height,
      width: width,
      height: height,
      left: 0,
      right: width,
    });
  }

  private createDimensions(el: ElementRef): Dimensions {
    const dimensions = el.nativeElement.getBoundingClientRect();
    return new Dimensions({
      top: dimensions.top,
      bottom: dimensions.bottom,
      width: dimensions.width,
      height: dimensions.height,
      left: dimensions.left,
      right: dimensions.right,
    });
  }

  private getFullscreenWidth(): number {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  }

  private getFullscreenHeight(): number {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  }
}
