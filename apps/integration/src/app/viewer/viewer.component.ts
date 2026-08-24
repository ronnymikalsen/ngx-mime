import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, convertToParamMap, Params } from '@angular/router';
import { ViewerComponent as ComponentViewerComponent } from './components/viewer/viewer.component';
import { ViewerComponent as ElementsViewerComponent } from './elements/viewer/viewer.component';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  imports: [ComponentViewerComponent, ElementsViewerComponent],
})
export class ViewerComponent {
  readonly routeParams = toSignal(inject(ActivatedRoute).params, {
    initialValue: {} as Params,
  });
  readonly queryParamMap = toSignal(inject(ActivatedRoute).queryParamMap, {
    initialValue: convertToParamMap({}),
  });
  readonly isComponent = computed(
    () => this.routeParams()['id'] === 'components',
  );
  readonly manifestUris = computed(() =>
    this.queryParamMap().has('manifestUri')
      ? this.queryParamMap().getAll('manifestUri')
      : ['http://localhost:4040/catalog/v1/iiif/a-ltr-book/manifest'],
  );
  readonly canvasIndex = computed(() => {
    const value = this.queryParamMap().get('canvasIndex');
    return value ? Number.parseInt(value, 10) : 0;
  });
}
