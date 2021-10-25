import { Page, TextStyle } from '../../alto-service/alto.model';
import { Manifest } from '../../models/manifest';
import { PrintSpaceBuilder } from './print-space.builder';

export class PageBuilder {
  private printSpaceBuilder = new PrintSpaceBuilder();
  private pageXml: any | undefined;
  private manifest: Manifest | undefined;
  private canvasIndex = -1;

  withCanvasIndex(canvasIndex: number) {
    this.canvasIndex = canvasIndex;
    this.printSpaceBuilder.withCanvasIndex(canvasIndex);
    return this;
  }

  withManifest(manifest: Manifest) {
    this.manifest = manifest;
    this.printSpaceBuilder.withManifest(manifest);
    return this;
  }

  withPageXml(pageXml: any) {
    this.pageXml = pageXml;
    return this;
  }

  withTextStyles(textStyles: Map<string, TextStyle> | undefined): PageBuilder {
    this.printSpaceBuilder.withTextStyles(textStyles);
    return this;
  }

  build(): Page {
    let factor = 1;
    if (
      this.manifest &&
      this.manifest.sequences &&
      this.manifest.sequences.length > 0
    ) {
      const canvases = this.manifest.sequences[0].canvases;
      if (canvases) {
        const canvas = canvases[this.canvasIndex];
        if (canvas && canvas.width) {
          let w = parseInt(this.pageXml.$.WIDTH, 10);
          factor = 0.3937008;
        }
      }
    }
    console.log('factor', factor);

    return {
      topMargin: this.printSpaceBuilder
        .withFactor(factor)
        .withPrintSpaceXml(this.pageXml.TopMargin[0])
        .build(),
      leftMargin: this.printSpaceBuilder
        .withFactor(factor)
        .withPrintSpaceXml(this.pageXml.LeftMargin[0])
        .build(),
      rightMargin: this.printSpaceBuilder
        .withFactor(factor)
        .withPrintSpaceXml(this.pageXml.RightMargin[0])
        .build(),
      bottomMargin: this.printSpaceBuilder
        .withFactor(factor)
        .withPrintSpaceXml(this.pageXml.BottomMargin[0])
        .build(),
      printSpace: this.printSpaceBuilder
        .withFactor(factor)
        .withPrintSpaceXml(this.pageXml.PrintSpace[0])
        .build(),
    };
  }
}
