import {
  Component,
  computed,
  inject,
  input,
  linkedSignal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { form, FormField } from '@angular/forms/signals';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSidenav } from '@angular/material/sidenav';
import {
  ActivatedRoute,
  convertToParamMap,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ManifestService } from '../manifest-service/manifest.service';

@Component({
  selector: 'demo-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    MatRadioGroup,
    FormField,
    MatRadioButton,
    MatNavList,
    MatListItem,
    RouterLinkActive,
    RouterLink,
  ],
})
export class SidenavComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly manifestService = inject(ManifestService);
  private readonly router = inject(Router);

  readonly sidenav = input.required<MatSidenav>();
  readonly queryParamMap = toSignal(this.activatedRoute.queryParamMap, {
    initialValue: convertToParamMap({}),
  });
  readonly iiifVersionModel = linkedSignal(() => ({
    version: this.queryParamMap().get('v') ?? '3',
  }));
  readonly iiifVersionForm = form(this.iiifVersionModel);
  readonly manifests = computed(() =>
    this.manifestService.getManifests(this.iiifVersionModel().version),
  );
  readonly selectedManifest = linkedSignal(() => {
    const manifestUris = this.queryParamMap().getAll('manifestUri');
    return this.manifests().find(
      (manifest) =>
        manifest.uri.length === manifestUris.length &&
        manifest.uri.every((uri, index) => uri === manifestUris[index]),
    )?.label;
  });

  selectIiifVersion(version: string): void {
    const selectedManifest = this.selectedManifest();
    this.iiifVersionModel.set({ version });
    if (selectedManifest) {
      const manifest = this.manifestService
        .getManifests(version)
        .find((item) => item.label === selectedManifest);
      if (manifest?.uri) {
        this.router.navigate(['demo'], {
          queryParams: { manifestUri: manifest.uri, v: manifest.iiifVersion },
        });
      }
    }
  }

  close(label?: string): void {
    this.selectedManifest.set(label);
    if (this.sidenav().mode === 'over') {
      this.sidenav().close();
    }
  }
}
