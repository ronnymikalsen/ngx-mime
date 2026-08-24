import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MimeViewerIntl } from './viewer-intl';

export function injectMimeViewerIntlSignal() {
  const intl = inject(MimeViewerIntl);
  return toSignal(intl.changes.pipe(map(() => intl)), {
    initialValue: intl,
    equal: () => false,
  });
}
