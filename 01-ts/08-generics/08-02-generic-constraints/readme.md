# Generic Constraints

Generic constraints in TypeScript allow you to set requirements for type parameters in generic types. They ensure that a type parameter meets certain conditions.

## Example

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know there is a .length property
  return arg;
}
```

## How to use

- Use `extends` to impose constraints on generic parameters.
- Restrict types when you need access to specific properties or methods.

## When and how they are commonly used

- When you need access to object properties in a generic function.
- To constrain types to certain interfaces or base types.
- When working with object keys (`keyof`).

## Good to know

- Constraints use the `extends` keyword.
- You can constrain to multiple types using a union (`T extends string | number`).
- `keyof` allows you to constrain a type to the keys of an object.

## Rarely used

- Very complex constraints with many conditions.
- Nested constraints (constraints inside constraints).

## Common interview questions

- How do you constrain a generic type to certain properties?
- What is `keyof` and how do you use it with generics?
- How do you create a function that only works with objects that have a specific property?

### What to answer

- Use `extends` to impose constraints.
- `keyof T` returns a union of the keys of type T.
- Constraints provide type safety when accessing properties.

## Tricky points

- Without constraints, TypeScript doesn't know which properties are available.
- `keyof` only works with object types, not primitive types.
- Constraints are checked at compile time, not at runtime.
