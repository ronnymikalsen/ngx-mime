import 'jest';
import 'jest-canvas-mock';
import 'jest-preset-angular/setup-jest';

const OpenSeadragon = require('openseadragon');
global.OpenSeadragon = OpenSeadragon;
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}))
