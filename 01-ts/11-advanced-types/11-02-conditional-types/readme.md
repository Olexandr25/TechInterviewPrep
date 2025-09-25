# Conditional Types

`Conditional types` are a way to select a type based on a condition. They allow you to dynamically choose a type depending on the types of input parameters. Conditional types use the syntax `T extends U ? X : Y` and the `infer` keyword.

## Example

```typescript
type Extends<T, U> = T extends U ? T : U;

type A = Extends<string, any>; // type A is 'string'
type B = Extends<any, string>; // type B is 'string'

type IsArray<T> = T extends any[] ? true : false;
type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>; // false
```

## How to use

- Use the syntax `T extends U ? X : Y` for conditional type logic.
- Use `infer` to extract types from complex structures.
- Combine with mapped types for advanced transformations.

## Common use cases

- Creating utility types that depend on the structure of the input type.
- Extracting types from arrays, functions, objects.
- Building type-safe APIs and libraries.

## Good to know

- `infer` lets you "extract" a type from a complex structure.
- You can use nested conditions for complex logic.
- Conditional types are evaluated at compile time.

## Rarely used

- In simple projects without complex type logic.
- If built-in TypeScript utility types are sufficient.

## Interview questions

- What are conditional types?
- How does the syntax `T extends U ? X : Y` work?
- What is the purpose of the `infer` keyword?

## What to answer

- Conditional types let you select a type based on a condition.
- They use `extends` for checking and `? :` for choosing a type.
- `infer` allows extracting types from complex structures.

## Tricky points

- `infer` only works inside an `extends` clause.
- You can use multiple `infer` keywords in one conditional type.
- Conditional types can be recursive to handle complex structures.
