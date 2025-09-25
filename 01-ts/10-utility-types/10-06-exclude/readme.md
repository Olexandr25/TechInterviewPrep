# Exclude

`Exclude<T, U>` is a utility type in TypeScript that creates a type by removing from the union type `T` all types that can be assigned to type `U`.

## Example

```typescript
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number
```

## How to use

- To remove certain types from a union type.
- When you need to create a subset of a union type without specific values.

## Common use cases

- Filtering statuses, roles, event types.
- Creating types without certain values (e.g., without `null` or `undefined`).
- Creating more specific types based on general union types.

## Good to know

- Works only with union types.
- Uses conditional types internally: `T extends U ? never : T`.
- Opposite of `Extract<T, U>`.

## Rarely used

- Combining with complex conditional types.
- Using with mapped types.

## Interview questions

- What does `Exclude<T, U>` do?
- What is the difference between `Exclude` and `Omit`?
- How to implement your own `Exclude`?

### What to answer

- `Exclude<T, U>` removes from the union type `T` all types assignable to `U`.
- `Exclude` works with union types, `Omit` works with object properties.
- Implemented via conditional types: `T extends U ? never : T`.

## Tricky points

- Works only with union types — use `Omit` for objects.
- If `U` is not present in `T`, type `T` remains unchanged.
- `never` in a union type is automatically removed.
- Often used together with `keyof` for working with object keys.
