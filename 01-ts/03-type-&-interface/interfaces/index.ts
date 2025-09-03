/**
 * Interfaces in TypeScript
 * ------------------------
 * - Define object shapes and contracts.
 * - Can be extended and implemented.
 * - Support declaration merging.
 * - Cannot represent union/intersection types directly.
 * - Cannot alias primitives.
 */

// Basic interface
interface Point {
  x: number;
  y: number;
}

// Extending interfaces
interface Named {
  name: string;
}
interface User extends Named {
  age: number;
}

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
interface Config {
  debug?: boolean;
}

// Function interface
interface Greet {
  (name: string): string;
}

// Declaration merging (tricky interview moment)
interface MergeExample {
  a: number;
}
interface MergeExample {
  b: string;
}
// MergeExample now has both 'a' and 'b'

// What interfaces can't do (limitations & tricky moments)
// 1. Cannot use unions/intersections directly in interface declaration
// 2. Cannot alias primitives

// Example: Using union type in property (allowed)
type Status = 'success' | 'error';
interface Result {
  status: Status; // OK
}

// Example: Using union directly in interface (not allowed)
interface StatusUnion {
  status: 'success' | 'error'; // OK as property type, but cannot do: interface StatusUnion = 'success' | 'error';
}

// Example: Cannot alias primitives
// interface Age = number; // ❌ Error

// Interfaces are open-ended (can be merged)
// Types are closed (cannot be merged)

// Interview tip: Use interfaces for public APIs, classes, and when you need declaration merging.
