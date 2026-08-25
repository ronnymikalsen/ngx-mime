import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IiifManifestService } from '../../core/iiif-manifest-service/iiif-manifest-service';
import { injectMimeViewerIntlSignal } from '../../core/intl/viewer-intl.signal';

@Component({
  selector: 'mime-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetadataComponent {
  private readonly iiifManifestService = inject(IiifManifestService);

  readonly intl = injectMimeViewerIntlSignal();
  readonly manifest = toSignal(this.iiifManifestService.currentManifest, {
    initialValue: null,
  });
}
