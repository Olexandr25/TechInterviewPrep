# Tuple in TypeScript

A tuple is a fixed-length, ordered array where each element can have a different type. Tuples are useful for representing a set of values with known types and order, such as coordinates, pairs, or function return values.

## Examples

```ts
const tuple1: [number, string] = [1, "one"];
const tuple2: [string, boolean, number] = ["hello", true, 42];
```

## All Methods

- All array methods (`push`, `pop`, `slice`, etc.) are available, but can break tuple type safety
- Destructuring: `const [a, b] = tuple1;`
- Length property: `tuple1.length`
- Readonly tuples: `readonly [number, string]`

## How It Works

- Tuples are ordered, fixed-length arrays with specific types for each position
- TypeScript enforces types and order, but array methods can break tuple guarantees
- Can have optional elements: `[number, string?]`
- Can use rest elements: `[string, ...string[]]`
- Tuple labels improve readability: `type Point = [x: number, y: number]`

## Tricky Moments for Interview

- `push` and `pop` are allowed, but break tuple length/type guarantees
- Readonly tuples prevent modification
- Optional elements and rest elements in tuples
- TypeScript checks tuple types structurally, not nominally
- Destructuring in function parameters

## Examples in Practice

```ts
type Point = [x: number, y: number];
const p: Point = [10, 20];

const tuple3: [number, string?] = [5];
const tuple4: readonly [number, string] = [2, "two"];

function printTuple([a, b]: [number, string]) {
  console.log(a, b);
}
printTuple([7, "seven"]);
```

---
**Interview tip:** Know how tuple types work, their limitations, and how array methods can affect tuple safety in TypeScript.
