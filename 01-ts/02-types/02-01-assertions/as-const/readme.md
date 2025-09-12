# As Const

`as const` is a type assertion in TypeScript that allows you to declare a value as a constant with the most precise type and makes it read-only.

## Example

```typescript
const colors = ['red', 'green', 'blue'] as const;
// Type: readonly ["red", "green", "blue"]
```

## When to use

- When you need an array or object to be constant and immutable.
- To improve typing, especially with literal types.

## Common use cases

- For enum-like structures, configs, fixed lists.
- To create precise types for switch/case statements or functions that accept only specific values.

## Good to know

- `as const` makes all properties readonly.
- Arrays become tuples with fixed values.
- Values cannot be changed (read-only).

## Rarely used for

- Variables that need to be mutable.
- Large objects where mutability is required.

## Interview questions

- What is `as const` used for?
- How does it affect typing?
- What is the difference between a regular array and an array with `as const`?

### How to answer

- `as const` allows TypeScript to interpret a value as a constant with an exact type.
- It's useful for literal types and enum-like structures.
- All properties become readonly, and values cannot be changed.

## Tricky points

- You cannot change array elements or object properties after `as const`.
- The type becomes very precise, which may lead to errors if you try to modify the value.
