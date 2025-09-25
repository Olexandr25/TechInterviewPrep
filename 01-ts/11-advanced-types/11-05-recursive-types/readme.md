# Recursive Types

`Recursive types` are a way to define a type that refers to itself. Recursive types are used to describe complex data structures such as trees or linked lists, where a value can contain one or more values of the same type.

## Example

```typescript
type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

let list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};
```

## How to use

- Define a type that refers to itself through properties or arrays.
- Use union types with `null` or `undefined` to terminate recursion.
- Combine with generic types to create flexible structures.

## Common use cases

- Modeling trees, linked lists, graphs.
- JSON structures with nested objects.
- File systems, navigation menus, threaded comments.

## Good to know

- Always require a termination condition for recursion (null, undefined, empty array).
- TypeScript has limits on recursion depth for types.
- Can be combined with conditional types for complex logic.

## Rarely used

- In simple projects without deeply nested structures.
- If the data structure has a fixed depth.

## Interview questions

- What are recursive types?
- How do you create a type for a tree or linked list?
- What are TypeScript's limitations for recursive types?

## What to answer

- Recursive types allow a type to refer to itself.
- A termination condition is needed to avoid infinite loops.
- Useful for modeling complex nested structures.

## Tricky points

- TypeScript has a recursion depth limit (usually ~47 levels).
- Carefully design termination conditions for recursion.
- Overuse can make code harder to understand.
