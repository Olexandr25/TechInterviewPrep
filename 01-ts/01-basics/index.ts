// TypeScript Interview Prep: Core Concepts

// 1. Basic Types
let age: number = 30;
let name: string = 'Alex';
let isActive: boolean = true;
let hobbies: string[] = ['reading', 'coding'];

// 2. Functions
function greet(person: string): string {
  return `Hello, ${person}!`;
}

// 3. Interfaces
interface User {
  id: number;
  username: string;
  isAdmin?: boolean;
}

const user1: User = { id: 1, username: 'alex' };

// 4. Classes
class Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak();

// 5. Generics
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>('TypeScript');

// 6. Type Aliases & Unions

type Status = 'pending' | 'active' | 'done';
let currentStatus: Status = 'active';

// 7. Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up;

// 8. Type Assertions
let someValue: any = 'I am a string';
let strLength: number = (someValue as string).length;

// 9. Null & Undefined
let optionalValue: string | undefined = undefined;

// 10. Never & Unknown
function throwError(msg: string): never {
  throw new Error(msg);
}

let unknownValue: unknown = 'Could be anything';
if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase());
}
