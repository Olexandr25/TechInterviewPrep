# Object in TypeScript

## Examples

```ts
const person: { name: string; age: number } = { name: "Alice", age: 30 };
const emptyObj: object = {};
```

## All Methods

- `Object.keys(obj)`
- `Object.values(obj)`
- `Object.entries(obj)`
- `Object.hasOwnProperty.call(obj, key)`
- `Object.assign(target, ...sources)`
- `Object.freeze(obj)`
- `Object.create(proto)`

## How It Works

- Objects are collections of key-value pairs (properties).
- Keys are strings or symbols; values can be any type.
- TypeScript allows you to define object shapes using interfaces or type aliases.
- Index signatures allow dynamic property names: `{ [key: string]: number }`
- Optional properties: `interface User { id: number; nickname?: string }`

## Tricky Moments for Interview

- The `object` type only accepts non-primitive values (not `number`, `string`, etc.).
- `Object.freeze` makes an object immutable, but only shallowly.
- Property existence: `'key' in obj` vs `obj.hasOwnProperty('key')`
- Index signatures vs explicit properties
- TypeScript structural typing: objects are compatible if their shapes match, not their declared types.
- Be careful with methods: `Object.keys` returns string[], not symbol keys.

## Examples in Practice

```ts
interface Car {
  brand: string;
  year: number;
}
const car: Car = { brand: "Toyota", year: 2020 };

const dict: { [key: string]: number } = { apples: 5, oranges: 10 };
const frozen = Object.freeze({ x: 1 });
console.log('brand' in car); // true
```

---
**Interview tip:** Know the difference between `object`, `{}` and interfaces, and how TypeScript checks object compatibility.
