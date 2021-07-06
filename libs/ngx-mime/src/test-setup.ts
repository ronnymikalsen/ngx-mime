import 'jest';
import 'jest-canvas-mock';
import 'jest-preset-angular/setup-jest';

const OpenSeadragon = require('openseadragon');
(global as any).OpenSeadragon = OpenSeadragon;
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

class SVGAnimatedLength {
  baseVal = { value: 0 };
}
class SVGRectElement extends HTMLElement {
  height = { baseVal: { value: 0 } };
  width = 0;
  rx = 0;
  ry = 0;
  x = 0;
}

window.SVGRectElement = <any>SVGRectElement;
