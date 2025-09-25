# Extract

`Extract<T, U>` is a utility type in TypeScript that creates a type by keeping only those types from the union type `T` that can be assigned to type `U`. It is the opposite of `Exclude<T, U>`.

## Example

```typescript
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // "a" | "b"
type T2 = Extract<string | number | (() => void), Function>; // () => void
```

## How to use

- To select specific types from a union type.
- When you need to create a subset of a union type with only certain values.

## Common use cases

- Filtering types by specific criteria.
- Creating more specific types from general union types.
- Selecting functions, primitives, or objects from mixed types.

## Good to know

- Works only with union types.
- Uses conditional types internally: `T extends U ? T : never`.
- Opposite of `Exclude<T, U>`.

## Rarely used

- Combining with complex conditional types.
- Using with mapped types for advanced transformations.

## Interview questions

- What does `Extract<T, U>` do?
- What is the difference between `Extract` and `Pick`?
- How are `Extract` and `Exclude` related?

### What to answer

- `Extract<T, U>` keeps only those types from the union type `T` that can be assigned to `U`.
- `Extract` works with union types, `Pick` works with object properties.
- `Extract` and `Exclude` are opposites: one selects, the other excludes.

## Tricky points

- Works only with union types — use `Pick` for objects.
- If none of the types in `T` match `U`, the result is `never`.
- `never` is automatically removed from union types.
- Often used to filter types by their nature (functions, primitives, etc.).
