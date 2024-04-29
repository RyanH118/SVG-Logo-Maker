const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
  it('renders a circle SVG', () => {
    const shape = new Circle();
    const color ='blue';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`);
  });
});

describe('Triangle', () => {
  it('renders a triangle SVG', () => {
    const shape = new Triangle();
    const color ='green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}" />`);
  });
});

describe('Square', () => {
  it('renders a square SVG', () => {
    const shape = new Square();
    const color ='red';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="${color}" />`);
  });
});