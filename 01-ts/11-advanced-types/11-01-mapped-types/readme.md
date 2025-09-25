# Mapped Types

`Mapped types` are a way to create a new type based on an existing type, where each property of the existing type is transformed in some way. Mapped types are created using the `keyof` operator and the `[P in keyof T]` syntax.

## Example

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

let obj = { x: 10, y: 20 };
let readonlyObj: Readonly<typeof obj> = obj;
// readonlyObj.x = 15; // Error: read-only
```

## How to use

- Use the `[P in keyof T]` syntax to iterate over the properties of a type.
- Add modifiers (`readonly`, `?`) or change the property type `T[P]`.
- Combine with conditional types for complex transformations.

## Common use cases

- Creating variations of existing types (readonly, optional, nullable).
- Transforming types for APIs or forms.
- Creating utility types for reuse.

## Good to know

- `keyof T` returns a union of all keys of type T.
- `T[P]` lets you get the type of a specific property.
- You can combine mapped types with conditional types.

## Rarely used

- In simple projects without complex type transformations.
- If built-in TypeScript utility types are sufficient.

## Interview questions

- What are mapped types?
- How do you create a type where all properties are optional?
- How does the `[P in keyof T]` syntax work?

## What to answer

- Mapped types let you create new types by transforming existing ones.
- They use `keyof` to get keys and `T[P]` for property types.
- Useful for creating type variations without duplicating code.

## Tricky points

- Can be combined with conditional types for complex logic.
- Modifiers `readonly` and `?` can be added or removed.
- Mapped types can be recursive for nested objects.
