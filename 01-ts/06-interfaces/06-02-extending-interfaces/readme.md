# Extending Interfaces

In TypeScript, interfaces can be extended using the `extends` keyword. The new interface inherits all properties and methods from the base interface and can add its own.

## Example

```typescript
interface Shape {
  width: number;
  height: number;
}

interface Square extends Shape {
  sideLength: number;
}
```

## How to use

- To create complex types based on basic ones.
- To organize type hierarchies in large projects.

## When and how it's commonly used

- To describe objects that share common properties (e.g., UI components, data models).
- To extend APIs when you need to add new properties to a base type.

## Good to know

- You can extend multiple interfaces by separating them with commas.
- All properties from base interfaces become required in the child interface.
- You can override properties if the type is compatible.

## Rarely used

- Deep inheritance (more than 2–3 levels).
- Inheriting interfaces with identical properties of different types (may cause conflicts).

## Common interview questions

- How do you extend an interface in TypeScript?
- Can you extend multiple interfaces?
- What happens if properties overlap but have different types?

### What to answer

- Use the `extends` keyword.
- You can extend multiple interfaces.
- If property types are incompatible, you'll get a compilation error.

## Tricky points

- If you extend multiple interfaces with identical properties, the types must be compatible.
- All properties from base interfaces become required.
