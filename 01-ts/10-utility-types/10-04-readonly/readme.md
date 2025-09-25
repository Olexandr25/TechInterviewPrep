# Readonly

`Readonly<T>` is a utility type in TypeScript that makes all properties of type `T` read-only. Properties cannot be changed after the object is created.

## Example

```typescript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// Cannot assign to 'title' because it is a read-only property.
// todo.title = 'Hello'; // Compilation error
```

## When to use

- For creating immutable objects.
- When you need to guarantee that data will not be changed after creation.

## Common use cases

- For configuration objects.
- When working with constants and settings.
- In functional programming for immutable structures.
- To protect against accidental data modification.

## Good to know

- `Readonly<T>` makes ALL properties readonly at the first level.
- Equivalent to `{ readonly [P in keyof T]: T[P] }`.
- For arrays, there is `ReadonlyArray<T>`.

## Rarely used

- Deep readonly (for nested objects, additional utility types are needed).
- Combining with other utility types.

## Interview questions

- What does `Readonly<T>` do?
- What is the difference between `readonly` and `const`?
- How to make deep readonly?

### What to answer

- `Readonly<T>` makes all properties of type `T` read-only.
- `const` is for variables, `readonly` is for object properties.
- For deep readonly, you need recursive utility types or libraries.

## Tricky points

- `Readonly` works only at the first level — nested objects remain mutable.
- This is only a TypeScript check — at runtime, the object can still be changed.
- `ReadonlyArray<T>` does not have mutation methods (push, pop, splice).
- You can bypass it via type assertion, but this is unsafe.
