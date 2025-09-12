# Types vs Interfaces

In TypeScript, both types (`type`) and interfaces (`interface`) are used to describe object structures and perform type checking, but there are differences between them.

## Examples

**Type:**

```typescript
type Person = {
  name: string;
  age: number;
};
```

**Interface:**

```typescript
interface Person {
  name: string;
  age: number;
}
```

## How to use

- `type` — for complex types, unions, intersections, tuples, functions.
- `interface` — for describing object structures, classes, extension (extends).

## Typical usage

- `interface` — for APIs, classes, when extensibility is needed.
- `type` — for complex types, when unions, intersections, tuples are needed.

## Good to know

- `interface` can be extended (extends, declaration merging).
- `type` is more versatile, but does not support declaration merging.
- In most cases, you can use either for objects.

## Rarely used

- Declaration merging for types (not possible).
- Inheriting union/tuple types via interface.

## Common interview questions

- What is the difference between type and interface?
- When is it better to use type, and when interface?
- Can you combine type and interface?

### What to answer

- `interface` — for objects and classes, supports extension.
- `type` — for complex types, unions, intersections, tuples.
- You can combine them: interface can extend type, and vice versa.

## Tricky points

- `interface` supports declaration merging, but `type` does not.
- For typing functions, unions, tuples — it's better to use `type`.
- For APIs, classes — it's better to use `interface`.
