import { TextBlock, TextStyle } from '../../alto-service/alto.model';
import { Manifest } from '../../models/manifest';
import { TextLinesBuilder } from './text-lines.builder';

export class TextBlocksBuilder {
  private textLinesBuilder = new TextLinesBuilder();
  private textStyles: Map<string, TextStyle> | undefined;
  private textBlocksXml: any | undefined;
  private canvasIndex = -1;

  withCanvasIndex(canvasIndex: number) {
    this.canvasIndex = canvasIndex;
    return this;
  }

  withTextBlocksXml(textBlocksXml: any) {
    this.textBlocksXml = textBlocksXml;
    return this;
  }

  withTextStyles(
    textStyles: Map<string, TextStyle> | undefined
  ): TextBlocksBuilder {
    this.textStyles = textStyles;
    return this;
  }

  build(): TextBlock[] {
    return this.textBlocksXml
      ? this.textBlocksXml.map((textBlock: any) => {
          const styleRef = textBlock.$.STYLEREFS?.split(' ');
          let textStyle = undefined;
          if (styleRef && this.textStyles) {
            textStyle = this.textStyles.get(styleRef[0]);
          }
          return {
            canvasIndex: this.canvasIndex,
            textLines: this.textLinesBuilder
              .withTextLinesXml(textBlock.TextLine)
              .build(),
            textStyle: {
              fontStyle: textStyle?.fontStyle,
            },
            dimension: {
              x: parseInt(textBlock.$.HPOS, 10),
              y: parseInt(textBlock.$.VPOS, 10),
              width: parseInt(textBlock.$.WIDTH, 10),
              height: parseInt(textBlock.$.HEIGHT, 10),
            }
          };
        })
      : [];
  }
}
