# Type Guards in TypeScript

## What is a Type Guard?

A type guard is a technique in TypeScript used to narrow the type of a variable within a conditional block. It helps the compiler understand the specific type, enabling safer property access and method calls.

## Why Do Type Guards Exist?

TypeScript’s static type system can’t always infer the exact type at runtime, especially with union types or `any`. Type guards allow you to check and “guard” the type, improving type safety and reducing runtime errors.

## When Are Type Guards Used?

- When working with union types (e.g., `string | number`)
- When you need to access properties/methods specific to one type
- When handling values from external sources (APIs, user input)
- In functions that accept multiple types

## When Can’t Type Guards Be Used?

- With types that are erased at runtime (interfaces, type aliases)
- For distinguishing between types that have identical runtime shapes (structural typing)
- When using types that don’t exist at runtime (e.g., generics)

## Tricky Moments

- Custom type guards must return a type predicate (`param is Type`)
- `typeof` only works for primitives (`string`, `number`, `boolean`, `symbol`, `undefined`, `object`, `function`)
- `instanceof` works for classes, not interfaces or type aliases
- Type guards don’t work for discriminating between interfaces unless you use a “discriminant property” (tagged union)
- Type assertions (`as Type`) don’t check types at runtime—no safety

## Tricky Interview Prep Points

- Be ready to write custom type guards using type predicates
- Know the difference between `typeof`, `instanceof`, and custom guards
- Understand limitations with interfaces and type aliases
- Be able to explain why type guards are safer than type assertions
- Practice writing type guards for complex union types and tagged unions
