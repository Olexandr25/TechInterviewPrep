# Interfaces in TypeScript

## Documentation

An `interface` is used to define the shape of objects. Interfaces are ideal for defining contracts in object-oriented code and can be extended or implemented by classes.

## Code Examples

```ts
// Basic interface
interface Point { x: number; y: number; }

// Extending interfaces
interface Named { name: string; }
interface User extends Named { age: number; }

// Implementing interfaces
class Person implements User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Optional properties
interface Config { debug?: boolean; }

// Function interface
interface Greet { (name: string): string; }
```

## How Interfaces Work & Limitations

- Interfaces can be extended and implemented.
- Interfaces support declaration merging (multiple declarations are merged).
- Interfaces are best for object shapes, not primitives or unions.
- Cannot use unions or intersections directly in interfaces.

## Tricky Interview Moments

- Interfaces can merge, types cannot.
- Interfaces are open-ended; you can add properties in multiple places.
- You cannot use interfaces for union types.
- Interfaces are preferred for public APIs and libraries.

**Example of what doesn't work:**

```ts
// Error: Cannot use union in interface
type Status = 'success' | 'error';
interface Result { status: Status; } // OK
interface StatusUnion { status: 'success' | 'error'; } // ❌

// Error: Cannot alias primitives
interface Age = number; // ❌
```
