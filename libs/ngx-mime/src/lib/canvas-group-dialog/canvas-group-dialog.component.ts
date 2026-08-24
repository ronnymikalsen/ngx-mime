import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  form,
  FormField,
  max,
  min,
  required,
  submit,
} from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  MatError,
  MatFormField,
  MatInput,
  MatLabel,
} from '@angular/material/input';
import { map } from 'rxjs';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { MimeViewerIntl } from '../core/intl';
import { ViewerService } from '../core/viewer-service/viewer.service';

@Component({
  templateUrl: './canvas-group-dialog.component.html',
  styleUrls: ['./canvas-group-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogTitle,
    FormField,
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
})
export class CanvasGroupDialogComponent {
  readonly intl = (() => {
    const intl = inject(MimeViewerIntl);
    return toSignal(intl.changes.pipe(map(() => ({ ...intl }))), {
      initialValue: intl,
    });
  })();
  readonly numberOfCanvases = inject(CanvasService).numberOfCanvases;
  readonly canvasGroupModel = signal({ canvasGroup: 0 });
  readonly canvasGroupForm = form(this.canvasGroupModel, (path) => {
    required(path.canvasGroup);
    min(path.canvasGroup, 1);
    max(path.canvasGroup, this.numberOfCanvases);
  });
  readonly canvasGroupDoesNotExist = computed(() =>
    this.canvasGroupForm
      .canvasGroup()
      .errors()
      .some((error) => error.kind === 'max'),
  );
  private readonly dialogRef =
    inject<MatDialogRef<CanvasGroupDialogComponent>>(MatDialogRef);
  private readonly viewerService = inject(ViewerService);
  private readonly canvasService = inject(CanvasService);

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    await submit(this.canvasGroupForm, async () => {
      const pageNumber = this.canvasGroupModel().canvasGroup;
      this.viewerService.goToCanvasGroup(
        this.canvasService.findCanvasGroupByCanvasIndex(pageNumber - 1),
        false,
      );
      this.dialogRef.close();
    });
  }
}
