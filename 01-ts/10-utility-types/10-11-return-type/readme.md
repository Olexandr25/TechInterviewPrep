# ReturnType

`ReturnType<Type>` is a TypeScript utility type that lets you get the type of the value returned by a function `Type`. It automatically infers the function's return type.

## Example

```typescript
function getUser() {
  return { id: 1, name: 'Alex' };
}
type User = ReturnType<typeof getUser>; // { id: number; name: string }
```

## How to use

- Pass the function type or the function itself via `typeof` to `ReturnType` to get its return type.
- Useful for typing function results, especially during refactoring or working with large codebases.

## Common use cases

- Typing the result of a function for use in other types or interfaces.
- Inferring types for async functions, API requests, Redux selectors.
- Automating typing when creating complex types.

## Good to know

- Works only with functions that have an explicit signature.
- Passing a non-function will result in a type error.
- For generic functions, the result type may be `unknown`.

## Rarely used

- For types that are not functions, or when the return type doesn't matter.
- In simple projects where function types are explicitly defined.

## Interview questions

- How do you get the type returned by a function?
- What is `ReturnType` used for?
- What limitations does this utility type have?

## What to answer

- `ReturnType` lets you get the return type of a function.
- It's useful for automatic typing and avoiding type duplication.
- Works only with functions; otherwise, you'll get an error.

## Tricky points

- Doesn't work with the `Function` type or simple types (like `string`).
- For generic functions, the result type may be `unknown`.
- If a function returns a union type, `ReturnType` will return that union.
