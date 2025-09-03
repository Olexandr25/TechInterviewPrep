# Types in TypeScript

## Documentation

A `type` in TypeScript is used to define custom types, including primitives, unions, intersections, tuples, and more. Types are flexible and can describe complex shapes.

## Code Examples

```ts
// Basic type alias
type Point = { x: number; y: number };

// Union type
type Status = 'success' | 'error' | 'loading';

// Intersection type
type User = { name: string } & { age: number };

// Tuple type
type Pair = [string, number];

// Function type
type Greet = (name: string) => string;

// keyof Operator
interface User {
  name: string;
  age: number;
  location: string;
}

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name';
```

## How Types Work & Limitations

- Types are only used at compile time; they do not exist at runtime.
- Types cannot be extended or implemented like interfaces.
- Types can use unions and intersections, which interfaces cannot.
- You cannot merge multiple type declarations (no declaration merging).

## Tricky Interview Moments

- Types are more flexible for unions/intersections, but interfaces are better for objects that need to be extended.
- You cannot use `implements` or `extends` with types in classes.
- Types can alias primitives, interfaces cannot.
- Types cannot participate in declaration merging, interfaces can.

**Example of what doesn't work:**

```ts
// Error: Cannot implement a type
class MyClass implements Point {} // ❌

// Error: Cannot merge type declarations
type A = { x: number };
type A = { y: number }; // ❌
```
