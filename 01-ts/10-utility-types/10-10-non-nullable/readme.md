# Non Nullable

`NonNullable<T>` is a utility type in TypeScript that creates a type by excluding `null` and `undefined` from type `T`. Equivalent to `Exclude<T, null | undefined>`.

## Example

```typescript
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
```

## How to use

- To remove `null` and `undefined` from union types.
- When working with types that may be nullable but you need to guarantee their presence.

## Common use cases

- When processing API responses where data can be `null`.
- For creating type guards and utility functions.
- When working with optional fields that need to be made required.

## Good to know

- Only removes `null` and `undefined` from union types.
- Equivalent to `Exclude<T, null | undefined>`.
- Does not affect nullable properties inside objects.

## Rarely used

- With deep nested objects (more complex utility types are needed).
- In combination with other utility types for complex transformations.

## Interview questions

- What does `NonNullable<T>` do?
- What is the difference between `NonNullable` and `Required`?
- How to create a type guard with `NonNullable`?

### What to answer

- `NonNullable<T>` removes `null` and `undefined` from the union type `T`.
- `NonNullable` removes nullable values, `Required` makes optional fields required.
- Type guard: `function isNonNullable<T>(value: T): value is NonNullable<T> { return value != null; }`.

## Tricky points

- Does not change optional object properties—only removes `null`/`undefined` from union types.
- If the type does not contain `null` or `undefined`, it remains unchanged.
- Often used with `filter` to clean arrays from nullable values.
- Useful for creating type guards and utility functions.
