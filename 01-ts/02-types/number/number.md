# TypeScript: Number Type

## Explanation
The `number` type in TypeScript represents both integer and floating-point values.

## Examples
```ts
let age: number = 25;
let price: number = 19.99;
```

## Interview Questions

- What is NaN in TypeScript and how is it used?
- What is Infinity in TypeScript and when does it occur?
- How does TypeScript handle arithmetic with NaN and Infinity?
- What is the default value of a number?
- How do you check if a value is NaN?

## Answers

- NaN stands for "Not-a-Number" and is a special value of the number type representing an undefined or unrepresentable value, especially in arithmetic operations.
- Infinity is a special value representing mathematical infinity, such as dividing by zero.
- Arithmetic with NaN always results in NaN; arithmetic with Infinity follows mathematical rules (e.g., Infinity + 1 = Infinity).
- There is no default value; you must initialize a number variable.
- Use `isNaN(value)` to check if a value is NaN.

## Tricky Moments

- NaN is not equal to itself (`NaN === NaN` is false).
- Type coercion can lead to NaN (e.g., `parseInt('abc')`).
- Infinity can result from division by zero or overflow.
