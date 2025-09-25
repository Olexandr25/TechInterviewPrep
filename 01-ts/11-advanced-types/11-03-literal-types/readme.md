# Literal Types

`Literal types` are a way to specify exact values, not just types. Literal types allow you to restrict a variable not only by type, but also by a specific value. They are created by using a literal value (string, number, boolean) as a type.

## Example

```typescript
type Age = 42;
let age: Age = 42; // ok
// let age2: Age = 43; // error

type Direction = 'up' | 'down' | 'left' | 'right';
let move: Direction = 'up'; // ok
// let move2: Direction = "forward"; // error
```

## How to use

- Use specific values as types: `"hello"`, `42`, `true`.
- Combine with union types to create restricted sets of values.
- Use template literal types for dynamic strings.

## Common use cases

- Creating enum-like types without using enum.
- Restricting values for configurations, statuses, sizes.
- Type-safe APIs with limited parameters.

## Good to know

- Literal types provide precision and autocomplete.
- You can combine different literal types in a union.
- Template literal types allow you to create dynamic string types.

## Rarely used

- In projects where precise value typing is not needed.
- If general types (`string`, `number`) are sufficient.

## Interview questions

- What are literal types?
- How do you create a type that only accepts specific values?
- How are literal types different from enums?

## What to answer

- Literal types allow you to specify an exact value, not just a type.
- Created by using a specific value as a type.
- Provide better type safety and autocomplete.

## Tricky points

- Literal types must exactly match the value.
- Can be combined with union types for sets of values.
- Template literal types work only with TypeScript 4.1+.
