import { Component, input, OnInit } from '@angular/core';
import {
  MimeModule,
  MimeViewerConfig,
} from '@nationallibraryofnorway/ngx-mime';

@Component({
  selector: 'nationallibraryofnorway-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MimeModule],
})
export class AppComponent implements OnInit {
  readonly manifestUri = input.required<string>();
  readonly config = input<string>();
  mimeConfig = new MimeViewerConfig();

  ngOnInit() {
    const config = this.config();
    if (config) {
      this.mimeConfig = Object.assign(this.mimeConfig, JSON.parse(config));
    }
  }
}
