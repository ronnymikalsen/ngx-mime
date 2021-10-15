export interface Alto {
  layout: Layout;
}

export interface Layout {
  page: Page;
}

export interface Page {
  topMargin: PrintSpace;
  leftMargin: PrintSpace;
  rightMargin: PrintSpace;
  bottomMargin: PrintSpace;
  printSpace: PrintSpace;
}

export interface PrintSpace {
  textBlocks?: TextBlock[];
}

export interface TextBlock {
  canvasIndex: number;
  textLines: TextLine[];
  textStyle?: TextStyle;
  dimension: Dimension;
}

export interface TextLine {
  strings: String[];
}

export interface Dimension {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface String {
  content: string;
}

export interface TextStyle {
  fontStyle?: string;
}
