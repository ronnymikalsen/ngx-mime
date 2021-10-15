import { Alto } from '../../alto-service/alto.model';
import { Manifest } from '../../models/manifest';
import { LayoutBuilder } from './layout.builder';
import { StylesBuilder } from './styles.builder';

export class AltoBuilder {
  private layoutBuilder = new LayoutBuilder();
  private altoXml: any | undefined;

  withCanvasIndex(canvasIndex: number) {
    this.layoutBuilder.withCanvasIndex(canvasIndex);
    return this;
  }

  withManifest(manifest: Manifest) {
    this.layoutBuilder.withManifest(manifest);
    return this;
  }

  withAltoXml(altoXml: any): AltoBuilder {
    this.altoXml = altoXml;
    return this;
  }

  build(): Alto {
    if (this.altoXml.Styles) {
      this.layoutBuilder.withTextStyles(
        new StylesBuilder(this.altoXml.Styles[0]).build()
      );
    }
    this.layoutBuilder.withLayoutXml(this.altoXml.Layout[0]);

    return {
      layout: this.layoutBuilder.build(),
    };
  }
}
