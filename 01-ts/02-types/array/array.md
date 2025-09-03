# TypeScript: array Type

## Explanation

The `array` type in TypeScript allows you to store multiple values of the same type in a single variable. Arrays can be typed using `type[]` or `Array<type>` syntax.

## Examples

```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alex", "Bob", "Cara"];
let mixed: (number | string)[] = [1, "two", 3];
```

## Methods

Common array methods:

- `push()`, `pop()`, `shift()`, `unshift()`
- `concat()`, `slice()`, `splice()`
- `map()`, `filter()`, `reduce()`, `forEach()`
- `find()`, `findIndex()`, `indexOf()`, `includes()`
- `sort()`, `reverse()`
- `join()`, `every()`, `some()`

## How it works

- Arrays are zero-indexed.
- TypeScript enforces the type of elements in the array.
- You can use generics for more complex array types.

## Tricky Moments for Interview

- Mutating methods (`push`, `pop`, `splice`) change the original array.
- Non-mutating methods (`map`, `filter`, `slice`) return a new array.
- TypeScript will catch type errors if you try to push a wrong type.
- Sparse arrays (e.g., `let arr = []; arr[10] = 5;`) can lead to unexpected results.
- Array-like objects (e.g., `arguments`) are not true arrays.
