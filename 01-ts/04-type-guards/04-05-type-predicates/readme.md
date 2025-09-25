# Type Predicates

`Type predicates` are functions that return a boolean value and are used to narrow the type of a variable. They are applied in type guards for safe handling of different types.

## Example

```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function example(x: unknown) {
  if (isString(x)) {
    x.toUpperCase(); // x is guaranteed to be a string
  } else {
    console.log(x);
  }
}
```

## How to use

- Declare a function with the signature `value is Type`.
- Use this function in if/else statements to narrow the type.
- You can create predicates for any complex types.

## Common use cases

- Checking data types in functions that accept unknown or any.
- Narrowing types for safe access to properties and methods.
- Creating complex type guards for objects, arrays, union types.

## Good to know

- Type predicate looks like: `param is Type`.
- After the check, TypeScript automatically narrows the type.
- Can be combined with instanceof, typeof, Array.isArray.

## Rarely used

- If all types are known in advance.
- In simple functions without union/unknown types.

## Interview questions

- What is a type predicate?
- How does type narrowing work via type guard?
- How to write a type predicate for a complex object?

## What to answer

- Type predicate is a function that returns a boolean and narrows the type of a variable.
- Used for safe handling of unknown/any/union types.
- Allows TypeScript to automatically determine the type in code blocks.

## Tricky points

- Type predicate works only in functions, not in simple expressions.
- You can create predicates for any types, even complex objects.
- Incorrect implementation can lead to typing errors.
