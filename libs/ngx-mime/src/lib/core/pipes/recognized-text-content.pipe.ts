import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { String, TextBlock, TextLine } from '../alto-service/alto.model';

@Pipe({
  name: 'recognizedTextContent',
})
export class RecognizedTextContentPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(textBlock: TextBlock | undefined, ...args: unknown[]): unknown {
    let html = '';
    if (textBlock) {
      let words: string[] = [];
      textBlock.textLines.forEach((textLine: TextLine) => {
        textLine.strings.forEach((string: String) => {
          words.push(string.content);
        });
      });
      const styles: string[] = [];
      if (textBlock?.textStyle?.fontStyle === 'bold') {
        styles.push('font-weight: bold');
      }

      html += '<p';
      if (styles && styles.length > 0) {
        html += ` style="${styles.join(';')}"`;
      }
      html += `>${words.join(' ')}<p/>`;
    }

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
