# Generic Types

Generic types in TypeScript allow you to write objects, functions, and classes that work with different data types instead of being restricted to a single type. A generic type is defined using angle brackets `<T>`.

## Example

**Generic function:**

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // output type will be 'string'
```

**Generic class:**

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
```

## How to use

- For creating functions, classes, and interfaces that work with different types.
- To maintain type safety when working with abstract types.

## Common use cases

- For utility functions (map, filter, reduce).
- For collection classes (Array, Set, Map).
- For APIs that need to work with various data types.

## Good to know

- `T` is a convention, but you can use any name.
- You can have multiple generic parameters: `<T, U, V>`.
- TypeScript can automatically infer the type.

## Rarely used

- Very complex generic constructs with many parameters.
- Generics for simple functions where the type is obvious.

## Interview questions

- What are generics and why are they needed?
- How do you create a generic function/class?
- How does TypeScript infer the type in generic functions?

### What to answer

- Generics allow you to create reusable code that works with different types.
- Angle brackets `<T>` are used to define a generic parameter.
- TypeScript can infer the type automatically or you can specify it explicitly.

## Tricky points

- If you don't specify the type explicitly, TypeScript will try to infer it.
- Generics do not exist at runtime—they are only for the compiler.
- You can constrain generic types using `extends`.
