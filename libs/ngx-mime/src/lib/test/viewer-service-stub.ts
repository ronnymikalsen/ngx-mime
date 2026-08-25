import { signal, Signal } from '@angular/core';
import { Hit } from '../core/models/hit';

export class ViewerServiceStub {
  readonly currentCanvasGroupIndex: Signal<number>;
  private readonly currentCanvasGroupIndexState = signal(0);

  constructor() {
    this.currentCanvasGroupIndex =
      this.currentCanvasGroupIndexState.asReadonly();
  }

  setCanvasGroupIndexChange(canvasIndex: number) {
    this.currentCanvasGroupIndexState.set(canvasIndex);
  }

  public goToPreviousCanvasGroup(): void {}

  public goToNextCanvasGroup(): void {}

  public goToCanvas(index: number): void {}

  public setCurrentHit(hit: Hit): void {}

  zoomIn(): void {}
}
