import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { map } from 'rxjs';
import { SpinnerService } from '../../core/spinner-service/spinner.service';

@Component({
  selector: 'mime-spinner',
  templateUrl: './viewer-spinner.component.html',
  styleUrls: ['./viewer-spinner.component.scss'],
  imports: [MatProgressSpinner],
})
export class ViewerSpinnerComponent {
  private readonly spinnerService = inject(SpinnerService);

  readonly visible = toSignal(
    this.spinnerService.spinnerState.pipe(map((state) => state.show)),
    { initialValue: false },
  );
}
