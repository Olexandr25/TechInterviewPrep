# Parameters

`Parameters<T>` is a utility type in TypeScript that creates a tuple type from the parameter types of function `T`. It returns an array of parameter types in the same order.

## Example

```typescript
type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [s: string]
type T2 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>; // [arg: { a: number; b: string }]
```

## How to use

- To get the parameter types of an existing function.
- When creating wrapper functions or higher-order functions.

## Common use cases

- For typing wrapper functions, decorators.
- When creating utility functions that accept parameters of other functions.
- For working with functions as first-class objects.

## Good to know

- Returns a tuple type with parameter names and types.
- Works only with function types.
- Preserves optional parameters.

## Rarely used

- With very complex generic functions.
- In combination with other utility types for advanced transformations.

## Interview questions

- What does `Parameters<T>` do?
- How to use `Parameters` with generic functions?
- What is the difference between `Parameters` and `ReturnType`?

### What to answer

- `Parameters<T>` returns a tuple of parameter types of function `T`.
- Used for typing wrapper and higher-order functions.
- `Parameters` is for parameters, `ReturnType` is for return type.

## Tricky points

- Works only with function types—not with `string`, `Function`, etc.
- Preserves optional parameters as optional in the tuple.
- For class methods, use `ClassName['methodName']`.
- Returns `unknown[]` for type `any` and `never` for type `never`.
