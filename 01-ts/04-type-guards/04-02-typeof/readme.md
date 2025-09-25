# typeof Operator

`typeof` is an operator that returns a string representing the type of a variable. It is used for runtime type checking and type narrowing in TypeScript.

## Example

```typescript
let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}
```

## How to use

- Use `typeof` to check the type of a variable in if, else, or switch statements.
- Works with types: "string", "number", "boolean", "object", "function", "undefined", "symbol", "bigint".

## Common use cases

- Narrowing union types in functions.
- Checking data types before performing operations.

## Good to know

- TypeScript automatically narrows the type after a typeof check.
- typeof only works with primitive types and functions.

## Interview questions

- What types does typeof return?
- How does typeof help TypeScript narrow types?

## What to answer

- typeof returns a string with the variable's type.
- It is used for runtime type checking and type narrowing in TypeScript.

## Tricky points

- typeof null returns "object" (this is a JS quirk).
- For arrays, typeof returns "object"; it's better to use Array.isArray.
