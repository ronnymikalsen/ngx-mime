import { PrintSpace, TextStyle } from '../../alto-service/alto.model';
import { Manifest } from '../../models/manifest';
import { TextBlocksBuilder } from './text-blocks.builder';

export class PrintSpaceBuilder {
  private textStyles: Map<string, TextStyle> | undefined;
  private printSpaceXml: any | undefined;
  private canvasIndex = -1;
  private manifest: Manifest | undefined;

  withCanvasIndex(canvasIndex: number) {
    this.canvasIndex = canvasIndex;
    return this;
  }

  withPrintSpaceXml(printSpaceXml: any) {
    this.printSpaceXml = printSpaceXml;
    return this;
  }

  withManifest(manifest: Manifest) {
    this.manifest = manifest;
    return this;
  }

  withTextStyles(
    textStyles: Map<string, TextStyle> | undefined
  ): PrintSpaceBuilder {
    this.textStyles = textStyles;
    return this;
  }

  build(): PrintSpace {
    let textBlocks: any[] = [];

    if (this.printSpaceXml.$$) {
      textBlocks = this.extractTextBlocks(this.printSpaceXml.$$);
    }
    return {
      textBlocks: new TextBlocksBuilder()
        .withCanvasIndex(this.canvasIndex)
        .withTextBlocksXml(textBlocks)
        .withTextStyles(this.textStyles)
        .build(),
    };
  }

  private extractTextBlocks(node: any): any[] {
    let blocks: any[] = [];
    node.forEach((n: any) => {
      if (this.isTextBlock(n)) {
        blocks = [...blocks, n];
      } else if (this.isComposedBlock(n)) {
        if (n.$$) {
          blocks = [...blocks, ...this.extractTextBlocks(n.$$)];
        }
      }
    });
    return blocks;
  }

  private isTextBlock(n: any): boolean {
    return n['#name'] && n['#name'] === 'TextBlock';
  }

  private isComposedBlock(n: any): boolean {
    return n['#name'] && n['#name'] === 'ComposedBlock';
  }
}
