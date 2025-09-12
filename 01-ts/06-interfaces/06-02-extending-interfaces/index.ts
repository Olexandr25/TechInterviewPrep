interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  width: 10,
  height: 10,
  sideLength: 10,
};

interface Colored {
  color: string;
}

interface ColoredSquare extends Square, Colored {}

const coloredSquare: ColoredSquare = {
  width: 20,
  height: 20,
  sideLength: 20,
  color: 'blue',
};
