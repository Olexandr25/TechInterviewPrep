# Awaited

`Awaited<T>` is a utility type in TypeScript that models the behavior of `await` in async functions or the `.then()` method on a Promise. It recursively unwraps Promises to their base type.

## Example

```typescript
type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number
type C = Awaited<boolean | Promise<number>>; // number | boolean
```

## How to use

- To get the result type from a Promise without using await.
- When working with the ReturnType of async functions.

## Common use cases

- Typing results of async operations.
- Creating types based on Promise-based APIs.
- Working with nested Promises.

## Good to know

- Recursively unwraps Promises of any nesting level.
- Works with union types, unwrapping only the Promise parts.
- Introduced in TypeScript 4.5.

## Rarely used

- With deeply nested Promises.
- In combination with other utility types.

## Interview questions

- What does `Awaited<T>` do?
- When should you use `Awaited`?
- How does it work with nested Promises?

### What to answer

- `Awaited<T>` unwraps a Promise to its base type, like `await` does.
- Used to get the result type of async operations.
- Recursively unwraps Promises of any depth.

## Tricky points

- Does not change non-Promise types in union types.
- Works recursively — `Promise<Promise<T>>` becomes just `T`.
- Useful with `ReturnType` for async functions.
- Before TypeScript 4.5, you had to manually type the result of await.
