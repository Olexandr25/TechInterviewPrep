// TypeScript Variables and Types Examples

// Primitive types
let count: number = 10;
let username: string = 'interviewee';
let isReady: boolean = false;

// Arrays
let scores: number[] = [90, 85, 88];
let names: Array<string> = ['Anna', 'Bob', 'Cara'];

// Tuples
let person: [string, number] = ['Alex', 25];

// Any type
let randomValue: any = 'Could be anything';
randomValue = 42;

// Union types
let id: number | string = 'abc123';
id = 101;

// Object type
let product: { id: number; name: string; price: number } = {
  id: 1,
  name: 'Laptop',
  price: 999,
};

// Type alias

type Point = { x: number; y: number };
let origin: Point = { x: 0, y: 0 };
