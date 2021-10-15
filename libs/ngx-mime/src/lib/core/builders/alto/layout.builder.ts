import { Layout, TextStyle } from '../../alto-service/alto.model';
import { Manifest } from '../../models/manifest';
import { PageBuilder } from './page.builder';

export class LayoutBuilder {
  private pageBuilder = new PageBuilder();

  withCanvasIndex(canvasIndex: number) {
    this.pageBuilder.withCanvasIndex(canvasIndex);
    return this;
  }

  withManifest(manifest: Manifest) {
    this.pageBuilder.withManifest(manifest);
    return this;
  }

  withLayoutXml(layoutXml: any): LayoutBuilder {
    this.pageBuilder.withPageXml(layoutXml.Page[0]);
    return this;
  }

  withTextStyles(
    textStyles: Map<string, TextStyle> | undefined
  ): LayoutBuilder {
    this.pageBuilder.withTextStyles(textStyles);
    return this;
  }

  build(): Layout {
    return {
      page: this.pageBuilder.build(),
    };
  }
}
