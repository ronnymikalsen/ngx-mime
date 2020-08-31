import { ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogConfigStrategyFactory } from './help-dialog-config-strategy-factory';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
export declare class HelpDialogService {
    private dialog;
    private helpDialogConfigStrategyFactory;
    private mimeResizeService;
    private _el;
    private isHelpDialogOpen;
    private dialogRef;
    private destroyed;
    constructor(dialog: MatDialog, helpDialogConfigStrategyFactory: HelpDialogConfigStrategyFactory, mimeResizeService: MimeResizeService);
    initialize(): void;
    destroy(): void;
    set el(el: ElementRef);
    open(): void;
    close(): void;
    toggle(): void;
    isOpen(): boolean;
    private getDialogConfig;
}
