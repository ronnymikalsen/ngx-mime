import { Component, inject, input, signal } from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';

@Component({
  selector: 'demo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    FormField,
    MatFormField,
    MatInput,
    MatButton,
    ThemePickerComponent,
  ],
})
export class NavbarComponent {
  private readonly router = inject(Router);

  readonly sidenav = input.required<MatSidenav>();
  readonly manifestModel = signal({ uri: '' });
  readonly manifestForm = form(this.manifestModel);

  toggle() {
    this.sidenav().toggle();
  }

  async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    await submit(this.manifestForm, async () => {
      await this.router.navigate(['demo'], {
        queryParams: {
          manifestUri: this.manifestModel().uri,
        },
      });
    });
  }
}
