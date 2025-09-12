# Hybrid Types

A hybrid type is a type that combines several types into one. This can be a union or intersection, or even a type that is both a function and an object.

## Example

**Union:**

```typescript
type StringOrNumber = string | number;
```

**Intersection:**

```typescript
type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};
```

**Hybrid type for a function with properties:**

```typescript
interface Counter {
  (start: number): number;
  interval: number;
  reset(): void;
}
```

## How to use

- For typing values that can be of different types (union).
- For complex structures that combine properties of several types (intersection).
- For creating objects that have both properties and functionality.

## When and how they are usually used

- For APIs that accept different data types.
- For typing functions with additional properties (e.g., counters, caches).

## What you should know

- Union allows a value to be one of several types.
- Intersection allows you to combine properties of several types.
- A hybrid type can be both a function and an object at the same time.

## What is rarely used

- Very complex intersection types (can make code harder to read).
- Hybrid types for functions, if a simpler structure is sufficient.

## What is asked in interviews

- How to create a type that can be several types?
- How to combine properties of several types?
- How to type a function with additional properties?

### What to answer

- Use `|` for union, `&` for intersection.
- You can combine types for complex structures.
- A hybrid type is a type that combines functionality and properties.

### Example answer

```typescript
// Union type example
type Result = string | number;

// Intersection type example
type Person = { name: string } & { age: number };

// Hybrid type example
interface Logger {
  (message: string): void;
  level: 'info' | 'warn' | 'error';
}
```

## Tricky points

- With union, only properties common to all types are accessible.
- With intersection, all properties must be implemented.
- For hybrid types with functions, use type assertion or interface.
