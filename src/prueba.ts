type ColorType = 'red' | 'yellow' | 'blue' | 'orange' | 'green';

abstract class TwoDimensionalFigure {
  constructor(private readonly name: string, private color: ColorType) {
  }

  getName() {
    return this.name;
  }
  getColor() {
    return this.color;
  }
  setColor(color: ColorType) {
    this.color = color;
  }

  abstract getArea(): number;
  abstract print(): void;
}

class Rectangle extends TwoDimensionalFigure {
  private readonly sides = 4;

  constructor(name: string, color: ColorType,
    private base: number = 1, private height: number = 1) {
    super(name, color);
  }

  getSides() {
    return this.sides;
  }

  getArea() {
    return this.base * this.height;
  }

  print() {
    console.log(`I am a ${this.getName()}, I have ${this.getSides()} sides, ` +
      `and my area is ${this.getArea()}`);
  }
}

class Triangle extends TwoDimensionalFigure {
  private readonly sides = 3;

  constructor(name: string, color: ColorType,
    private base: number = 1, private height: number = 1) {
    super(name, color);
  }

  getSides() {
    return this.sides;
  }

  getArea() {
    return this.base * this.height / 2;
  }

  print() {
    console.log(`I am a ${this.getName()}, I have ${this.getSides()} sides, ` +
      `and my area is ${this.getArea()}`);
  }
}

class TwoDimensionalFigureCollection {
  constructor(private figures: TwoDimensionalFigure[]) {
  }

  addFigure(newFigure: TwoDimensionalFigure) {
    this.figures.push(newFigure);
  }

  getNumberOfFigures() {
    return this.figures.length;
  }

  getFigure(index: number) {
    return this.figures[index];
  }

  print() {
    this.figures.forEach((figure) => {
      figure.print();
    });
  }
}

const myFigureCollection = new TwoDimensionalFigureCollection([
  new Rectangle('RedRectangle', 'red', 10, 5),
  new Rectangle('YellowRectangle', 'yellow'),
]);

myFigureCollection.addFigure(new Triangle('GreenTriangle', 'green', 25, 3));
myFigureCollection.print();
