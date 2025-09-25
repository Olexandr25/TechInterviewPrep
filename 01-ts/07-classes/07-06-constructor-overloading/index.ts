// Example of constructor overloading in TypeScript

class Point {
  // Overloads (constructor signatures)
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    if (typeof xs === 'number' && typeof y === 'string') {
      // x: number, y: string
      console.log(`Number: ${xs}, String: ${y}`);
    } else if (typeof xs === 'string' && y === undefined) {
      // s: string
      console.log(`String: ${xs}`);
    }
  }
}

// Usage examples:
const p1 = new Point(10, 'hello'); // Number: 10, String: hello
const p2 = new Point('world'); // String: world
