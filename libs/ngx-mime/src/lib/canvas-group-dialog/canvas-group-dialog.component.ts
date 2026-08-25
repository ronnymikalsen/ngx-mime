import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
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
import { CanvasService } from '../core/canvas-service/canvas-service';
import { injectMimeViewerIntlSignal } from '../core/intl/viewer-intl.signal';
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
  private readonly dialogRef =
    inject<MatDialogRef<CanvasGroupDialogComponent>>(MatDialogRef);
  private readonly viewerService = inject(ViewerService);
  private readonly canvasService = inject(CanvasService);
  readonly intl = injectMimeViewerIntlSignal();

  readonly canvasCount = this.canvasService.canvasCount;
  readonly canvasGroupModel = signal({ canvasGroup: Number.NaN });
  readonly canvasGroupForm = form(this.canvasGroupModel, (path) => {
    required(path.canvasGroup);
    min(path.canvasGroup, 1);
    max(path.canvasGroup, () => this.canvasCount());
  });
  readonly canvasGroupDoesNotExist = computed(() =>
    this.canvasGroupForm
      .canvasGroup()
      .errors()
      .some((error) => error.kind === 'max'),
  );
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
