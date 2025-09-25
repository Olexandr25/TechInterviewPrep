# Partial

`Partial<T>` is a utility type in TypeScript that makes all properties of type `T` optional. It's useful when you need to create an object with only some properties of an existing type.

## Example

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });
```

## How to use

- For functions that accept only part of an object's properties.
- For updating existing objects (PATCH operations).

## Common use cases

- Working with APIs (updating user profiles).
- Configuration objects with default values.
- Functions that create objects with optional parameters.

## Good to know

- `Partial<T>` makes ALL properties optional.
- Equivalent to `{ [P in keyof T]?: T[P] }`.
- Often used together with the spread operator (`...`).

## Rarely used

- Nested Partial (for deep objects, other utility types are needed).
- Combining with other utility types.

## Interview questions

- What does `Partial<T>` do?
- When should you use `Partial`?
- How to implement your own `Partial`?

### What to answer

- `Partial<T>` makes all properties of type `T` optional.
- Used for partial updates of objects.
- Implemented via mapped types: `{ [P in keyof T]?: T[P] }`.

## Tricky points

- `Partial` is not recursive — it only works at the first level.
- Does not guarantee that the object won't be empty (`{}`).
- When used with functions, required parameters may be lost.
