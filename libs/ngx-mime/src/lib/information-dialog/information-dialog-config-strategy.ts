import { ElementRef, ViewContainerRef } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { Dimensions } from './../core/models/dimensions';

export interface InformationDialogConfigStrategy {
  getConfig(
    elementRef: ElementRef,
    viewContainerRef: ViewContainerRef,
  ): MatDialogConfig;
}

export class MobileInformationDialogConfigStrategy
  implements InformationDialogConfigStrategy
{
  public getConfig(
    elementRef: ElementRef,
    viewContainerRef: ViewContainerRef,
  ): MatDialogConfig {
    return {
      hasBackdrop: false,
      width: '100%',
      height: '100%',
      maxWidth: '100% !important',
      panelClass: ['mime-mobile-dialog', 'mime-dialog', 'information-panel'],
      viewContainerRef: viewContainerRef,
    };
  }
}

export class DesktopInformationDialogConfigStrategy
  implements InformationDialogConfigStrategy
{
  public static readonly dialogWidth = 350;
  public static readonly paddingRight = 16;
  private mimeDomHelper: MimeDomHelper;

  constructor(mimeDomHelper: MimeDomHelper) {
    this.mimeDomHelper = mimeDomHelper;
  }

  public getConfig(
    el: ElementRef,
    viewContainerRef: ViewContainerRef,
  ): MatDialogConfig {
    const dimensions = this.getPosition(el);
    return {
      hasBackdrop: false,
      width: `${DesktopInformationDialogConfigStrategy.dialogWidth}px`,
      position: {
        top: dimensions.top + 'px',
        left: dimensions.left + 'px',
      },
      maxWidth: '100% !important',
      panelClass: ['mime-dialog', 'information-panel'],
      viewContainerRef: viewContainerRef,
    };
  }
  private getPosition(el: ElementRef): Dimensions {
    const dimensions = this.mimeDomHelper.getBoundingClientRect(el);
    return new Dimensions({
      top: dimensions.top + 80,
      left:
        dimensions.right -
        DesktopInformationDialogConfigStrategy.dialogWidth -
        DesktopInformationDialogConfigStrategy.paddingRight,
    });
  }
}
