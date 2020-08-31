import { __decorate } from "tslib";
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { ViewerOptions } from '../../core/models/viewer-options';
import { ViewingDirection } from '../../core/models/viewing-direction';
import { StyleService } from '../../core/style-service/style.service';
import { CanvasService } from './../../core/canvas-service/canvas-service';
import { MimeViewerIntl } from './../../core/intl/viewer-intl';
import { MimeResizeService } from './../../core/mime-resize-service/mime-resize.service';
import { ViewerService } from './../../core/viewer-service/viewer.service';
let OsdToolbarComponent = class OsdToolbarComponent {
    constructor(intl, renderer, changeDetectorRef, mimeService, viewerService, canvasService, styleService, iiifManifestService) {
        this.intl = intl;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.mimeService = mimeService;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.styleService = styleService;
        this.iiifManifestService = iiifManifestService;
        this.osdToolbarStyle = {};
        this.state = 'hide';
        this.invert = false;
        this.destroyed = new Subject();
    }
    get osdToolbarState() {
        return this.state;
    }
    ngOnInit() {
        this.iiifManifestService.currentManifest
            .pipe(takeUntil(this.destroyed))
            .subscribe((manifest) => {
            this.invert = manifest.viewingDirection === ViewingDirection.LTR;
            this.changeDetectorRef.detectChanges();
        });
        this.mimeService.onResize
            .pipe(takeUntil(this.destroyed))
            .subscribe((dimensions) => {
            this.osdToolbarStyle = {
                top: dimensions.top + 110 + 'px'
            };
            this.changeDetectorRef.detectChanges();
        });
        this.viewerService.onCanvasGroupIndexChange
            .pipe(takeUntil(this.destroyed))
            .subscribe((currentCanvasGroupIndex) => {
            this.numberOfCanvasGroups = this.canvasService.numberOfCanvasGroups;
            this.isFirstCanvasGroup = this.isOnFirstCanvasGroup(currentCanvasGroupIndex);
            this.isLastCanvasGroup = this.isOnLastCanvasGroup(currentCanvasGroupIndex);
            this.changeDetectorRef.detectChanges();
        });
        this.intl.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => this.changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this.styleService.onChange.pipe(takeUntil(this.destroyed)).subscribe(c => {
            const backgroundRgbaColor = this.styleService.convertToRgba(c, 0.3);
            this.renderer.setStyle(this.container.nativeElement, 'background-color', backgroundRgbaColor);
        });
    }
    zoomIn() {
        this.viewerService.zoomIn();
    }
    zoomOut() {
        this.viewerService.zoomOut();
    }
    home() {
        this.viewerService.home();
    }
    rotate() {
        this.viewerService.rotate();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    goToPreviousCanvasGroup() {
        this.viewerService.goToPreviousCanvasGroup();
    }
    goToNextCanvasGroup() {
        this.viewerService.goToNextCanvasGroup();
    }
    isOnFirstCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === 0;
    }
    isOnLastCanvasGroup(currentCanvasGroupIndex) {
        return currentCanvasGroupIndex === this.numberOfCanvasGroups - 1;
    }
};
OsdToolbarComponent.ctorParameters = () => [
    { type: MimeViewerIntl },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: MimeResizeService },
    { type: ViewerService },
    { type: CanvasService },
    { type: StyleService },
    { type: IiifManifestService }
];
__decorate([
    ViewChild('container', { static: true })
], OsdToolbarComponent.prototype, "container", void 0);
__decorate([
    HostBinding('@osdToolbarState')
], OsdToolbarComponent.prototype, "osdToolbarState", null);
OsdToolbarComponent = __decorate([
    Component({
        selector: 'mime-osd-toolbar',
        template: "<div #container class=\"osd-toolbar\" [ngStyle]=\"osdToolbarStyle\">\n  <div fxHide fxShow.gt-sm=\"true\">\n    <div\n      class=\"osd-toolbar-container\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\"\n    >\n      <div class=\"osd-toolbar-row\"> </div>\n      <div class=\"osd-toolbar-row\">\n        <ng-container *ngIf=\"invert\">\n          <button\n            id=\"navigateBeforeButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.previousPageLabel\"\n            [matTooltip]=\"intl.previousPageLabel\"\n            [disabled]=\"isFirstCanvasGroup\"\n            (click)=\"goToPreviousCanvasGroup()\"\n          >\n            <mat-icon>navigate_before</mat-icon>\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"!invert\">\n          <button\n            id=\"navigateNextButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.nextPageLabel\"\n            [matTooltip]=\"intl.nextPageLabel\"\n            [disabled]=\"isLastCanvasGroup\"\n            (click)=\"goToNextCanvasGroup()\"\n          >\n            <mat-icon>navigate_before</mat-icon>\n          </button>\n        </ng-container>\n        <button\n          (click)=\"home()\"\n          id=\"homeButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.homeLabel\"\n          [matTooltip]=\"intl.homeLabel\"\n        >\n          <mat-icon>home</mat-icon>\n        </button>\n        <ng-container *ngIf=\"invert\">\n          <button\n            id=\"navigateNextButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.nextPageLabel\"\n            [matTooltip]=\"intl.nextPageLabel\"\n            [disabled]=\"isLastCanvasGroup\"\n            (click)=\"goToNextCanvasGroup()\"\n          >\n            <mat-icon>navigate_next</mat-icon>\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"!invert\">\n          <button\n            id=\"navigateBeforeButton\"\n            mat-icon-button\n            [attr.aria-label]=\"intl.previousPageLabel\"\n            [matTooltip]=\"intl.previousPageLabel\"\n            [disabled]=\"isFirstCanvasGroup\"\n            (click)=\"goToPreviousCanvasGroup()\"\n          >\n            <mat-icon>navigate_next</mat-icon>\n          </button>\n        </ng-container>\n      </div>\n\n      <div class=\"osd-toolbar-row\">\n        <button\n          (click)=\"zoomIn()\"\n          id=\"zoomInButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.zoomInLabel\"\n          [matTooltip]=\"intl.zoomInLabel\"\n        >\n          <mat-icon>zoom_in</mat-icon>\n        </button>\n\n        <button\n          (click)=\"rotate()\"\n          id=\"rotateButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.rotateCwLabel\"\n          [matTooltip]=\"intl.rotateCwLabel\"\n        >\n          <mat-icon>rotate_right</mat-icon>\n        </button>\n        <button\n          (click)=\"zoomOut()\"\n          id=\"zoomOutButton\"\n          mat-icon-button\n          [attr.aria-label]=\"intl.zoomOutLabel\"\n          [matTooltip]=\"intl.zoomOutLabel\"\n        >\n          <mat-icon>zoom_out</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            trigger('osdToolbarState', [
                state('hide', style({
                    transform: 'translate(-120px, 0)',
                    display: 'none'
                })),
                state('show', style({
                    transform: 'translate(0px, 0px)',
                    display: 'block'
                })),
                transition('hide => show', [
                    group([
                        style({ display: 'block' }),
                        animate(`${ViewerOptions.transitions.toolbarsEaseInTime}ms ease-out`)
                    ])
                ]),
                transition('show => hide', animate(`${ViewerOptions.transitions.toolbarsEaseOutTime}ms ease-in`))
            ])
        ],
        styles: [":host{z-index:1}::ng-deep .osd-toolbar-row>.mat-toolbar-row{height:40px}.osd-toolbar{position:absolute;z-index:2;background:0 0;width:auto;border-radius:8px;margin-left:16px}"]
    })
], OsdToolbarComponent);
export { OsdToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NkLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5hdGlvbmFsbGlicmFyeW9mbm9yd2F5L25neC1taW1lLyIsInNvdXJjZXMiOlsibGliL3ZpZXdlci9vc2QtdG9vbGJhci9vc2QtdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFN0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQW9DM0UsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFjOUIsWUFDUyxJ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QUUsQ0FBQztzREFBdUI7QUFFaEU7SUFEQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7MERBRy9CO0FBTFUsbUJBQW1CO0lBbEMvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLCtzR0FBMkM7UUFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsVUFBVSxFQUFFO1lBQ1YsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUN6QixLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztvQkFDSixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxPQUFPLEVBQUUsTUFBTTtpQkFDaEIsQ0FBQyxDQUNIO2dCQUNELEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO29CQUNKLFNBQVMsRUFBRSxxQkFBcUI7b0JBQ2hDLE9BQU8sRUFBRSxPQUFPO2lCQUNqQixDQUFDLENBQ0g7Z0JBQ0QsVUFBVSxDQUFDLGNBQWMsRUFBRTtvQkFDekIsS0FBSyxDQUFDO3dCQUNKLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzt3QkFDM0IsT0FBTyxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsYUFBYSxDQUFDO3FCQUN0RSxDQUFDO2lCQUNILENBQUM7Z0JBQ0YsVUFBVSxDQUNSLGNBQWMsRUFDZCxPQUFPLENBQUMsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLG1CQUFtQixZQUFZLENBQUMsQ0FDdEU7YUFDRixDQUFDO1NBQ0g7O0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQTJHL0I7U0EzR1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgZ3JvdXAsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWlpZk1hbmlmZXN0U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvaWlpZi1tYW5pZmVzdC1zZXJ2aWNlL2lpaWYtbWFuaWZlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWxzL21hbmlmZXN0JztcbmltcG9ydCB7IFZpZXdlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVscy92aWV3ZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9tb2RlbHMvdmlld2luZy1kaXJlY3Rpb24nO1xuaW1wb3J0IHsgU3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zdHlsZS1zZXJ2aWNlL3N0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gJy4vLi4vLi4vY29yZS9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZSc7XG5pbXBvcnQgeyBNaW1lVmlld2VySW50bCB9IGZyb20gJy4vLi4vLi4vY29yZS9pbnRsL3ZpZXdlci1pbnRsJztcbmltcG9ydCB7IE1pbWVSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9jb3JlL21pbWUtcmVzaXplLXNlcnZpY2UvbWltZS1yZXNpemUuc2VydmljZSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi8uLi8uLi9jb3JlL21vZGVscy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFZpZXdlclNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL2NvcmUvdmlld2VyLXNlcnZpY2Uvdmlld2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLW9zZC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29zZC10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vb3NkLXRvb2xiYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvc2RUb29sYmFyU3RhdGUnLCBbXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2hpZGUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0xMjBweCwgMCknLFxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnc2hvdycsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMHB4LCAwcHgpJyxcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignaGlkZSA9PiBzaG93JywgW1xuICAgICAgICBncm91cChbXG4gICAgICAgICAgc3R5bGUoeyBkaXNwbGF5OiAnYmxvY2snIH0pLFxuICAgICAgICAgIGFuaW1hdGUoYCR7Vmlld2VyT3B0aW9ucy50cmFuc2l0aW9ucy50b29sYmFyc0Vhc2VJblRpbWV9bXMgZWFzZS1vdXRgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKFxuICAgICAgICAnc2hvdyA9PiBoaWRlJyxcbiAgICAgICAgYW5pbWF0ZShgJHtWaWV3ZXJPcHRpb25zLnRyYW5zaXRpb25zLnRvb2xiYXJzRWFzZU91dFRpbWV9bXMgZWFzZS1pbmApXG4gICAgICApXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPc2RUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBIb3N0QmluZGluZygnQG9zZFRvb2xiYXJTdGF0ZScpXG4gIGdldCBvc2RUb29sYmFyU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cbiAgcHVibGljIG9zZFRvb2xiYXJTdHlsZSA9IHt9O1xuICBwdWJsaWMgbnVtYmVyT2ZDYW52YXNHcm91cHM6IG51bWJlcjtcbiAgcHVibGljIGlzRmlyc3RDYW52YXNHcm91cDogYm9vbGVhbjtcbiAgcHVibGljIGlzTGFzdENhbnZhc0dyb3VwOiBib29sZWFuO1xuICBwdWJsaWMgc3RhdGUgPSAnaGlkZSc7XG4gIGludmVydCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3llZDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGludGw6IE1pbWVWaWV3ZXJJbnRsLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG1pbWVTZXJ2aWNlOiBNaW1lUmVzaXplU2VydmljZSxcbiAgICBwcml2YXRlIHZpZXdlclNlcnZpY2U6IFZpZXdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3R5bGVTZXJ2aWNlOiBTdHlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpaWlmTWFuaWZlc3RTZXJ2aWNlOiBJaWlmTWFuaWZlc3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlpaWZNYW5pZmVzdFNlcnZpY2UuY3VycmVudE1hbmlmZXN0XG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgobWFuaWZlc3Q6IE1hbmlmZXN0KSA9PiB7XG4gICAgICAgIHRoaXMuaW52ZXJ0ID0gbWFuaWZlc3Qudmlld2luZ0RpcmVjdGlvbiA9PT0gVmlld2luZ0RpcmVjdGlvbi5MVFI7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm1pbWVTZXJ2aWNlLm9uUmVzaXplXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoZGltZW5zaW9uczogRGltZW5zaW9ucykgPT4ge1xuICAgICAgICB0aGlzLm9zZFRvb2xiYXJTdHlsZSA9IHtcbiAgICAgICAgICB0b3A6IGRpbWVuc2lvbnMudG9wICsgMTEwICsgJ3B4J1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLm9uQ2FudmFzR3JvdXBJbmRleENoYW5nZVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkNhbnZhc0dyb3VwcyA9IHRoaXMuY2FudmFzU2VydmljZS5udW1iZXJPZkNhbnZhc0dyb3VwcztcbiAgICAgICAgdGhpcy5pc0ZpcnN0Q2FudmFzR3JvdXAgPSB0aGlzLmlzT25GaXJzdENhbnZhc0dyb3VwKFxuICAgICAgICAgIGN1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaXNMYXN0Q2FudmFzR3JvdXAgPSB0aGlzLmlzT25MYXN0Q2FudmFzR3JvdXAoXG4gICAgICAgICAgY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuaW50bC5jaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0eWxlU2VydmljZS5vbkNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpLnN1YnNjcmliZShjID0+IHtcbiAgICAgIGNvbnN0IGJhY2tncm91bmRSZ2JhQ29sb3IgPSB0aGlzLnN0eWxlU2VydmljZS5jb252ZXJ0VG9SZ2JhKGMsIDAuMyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgIGJhY2tncm91bmRSZ2JhQ29sb3JcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICB6b29tSW4oKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLnpvb21JbigpO1xuICB9XG5cbiAgem9vbU91dCgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2Uuem9vbU91dCgpO1xuICB9XG5cbiAgaG9tZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdlclNlcnZpY2UuaG9tZSgpO1xuICB9XG5cbiAgcm90YXRlKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyU2VydmljZS5yb3RhdGUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIGdvVG9QcmV2aW91c0NhbnZhc0dyb3VwKCk6IHZvaWQge1xuICAgIHRoaXMudmlld2VyU2VydmljZS5nb1RvUHJldmlvdXNDYW52YXNHcm91cCgpO1xuICB9XG5cbiAgcHVibGljIGdvVG9OZXh0Q2FudmFzR3JvdXAoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ZXJTZXJ2aWNlLmdvVG9OZXh0Q2FudmFzR3JvdXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNPbkZpcnN0Q2FudmFzR3JvdXAoY3VycmVudENhbnZhc0dyb3VwSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9PT0gMDtcbiAgfVxuXG4gIHByaXZhdGUgaXNPbkxhc3RDYW52YXNHcm91cChjdXJyZW50Q2FudmFzR3JvdXBJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRDYW52YXNHcm91cEluZGV4ID09PSB0aGlzLm51bWJlck9mQ2FudmFzR3JvdXBzIC0gMTtcbiAgfVxufVxuIl19