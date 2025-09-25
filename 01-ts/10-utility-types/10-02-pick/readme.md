# Pick

`Pick<T, K>` is a utility type in TypeScript that creates a new type by selecting only certain properties `K` from type `T`.

## Example

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

## When to use

- To create subtypes with only the required properties.
- When you need to restrict access to certain object fields.

## Common use cases

- Creating DTOs (Data Transfer Objects) with a limited set of fields.
- Working with APIs — selecting only public data.
- For forms — selecting only fields that users can edit.

## Good to know

- `K` must be a key (or union of keys) of type `T`.
- Equivalent to `{ [P in K]: T[P] }`.
- The opposite of `Omit<T, K>`.

## Rarely used

- Combining with other utility types (`Pick<Partial<T>, K>`).
- Using with computed property names.

## Interview questions

- What does `Pick<T, K>` do?
- What is the difference between `Pick` and `Partial`?
- How would you implement your own `Pick`?

### What to answer

- `Pick<T, K>` selects only the properties `K` from type `T`.
- `Pick` selects specific fields, `Partial` makes all fields optional.
- Implemented via mapped types: `{ [P in K]: T[P] }`.

## Tricky points

- Keys `K` must exist in type `T`, otherwise you'll get a compile-time error.
- `Pick` preserves the original property types (does not make them optional).
- Can be combined with other utility types: `Pick<Partial<T>, K>`.
