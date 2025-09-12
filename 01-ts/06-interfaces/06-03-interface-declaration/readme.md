# Interface Declaration

An interface in TypeScript is a "blueprint" for creating objects with a specific structure. An interface defines a set of properties and methods that a class or object must implement.

## Example

```typescript
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
  getFullName(): string;
}
```

## How to use

- To describe the structure of objects that should be consistent across different parts of the program.
- For typing classes, APIs, data models.

## When and how interfaces are commonly used

- For typing function parameters, API results, classes.
- To create a contract between different parts of code.

## Good to know

- Properties can be optional (`?`).
- An interface can only contain method signatures, not implementations.
- A class can implement multiple interfaces.

## Rarely used

- Inheriting interfaces with many levels.
- Interfaces for typing functions (usually `type` is used instead).

## Common interview questions

- How do you declare an interface in TypeScript?
- How do you implement an interface in a class?
- Can a property be made optional?

### What to answer

- An interface is declared using the `interface` keyword.
- A class implements an interface using `implements`.
- An optional property is marked with `?`.

## Tricky points

- An interface contains only the description of the structure, not the implementation.
- If a class does not implement all properties/methods of an interface, a compilation error will occur.
