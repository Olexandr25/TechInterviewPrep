# Enum in TypeScript

## Examples

### Numeric Enum

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}
```

### String Enum

```ts
enum Status {
  Success = 'SUCCESS',
  Error = 'ERROR',
  Loading = 'LOADING'
}
```

### Heterogeneous Enum

```ts
enum Mixed {
  No = 0,
  Yes = 'YES'
}
```

## All Methods & Features

- Access by key or value (reverse mapping for numeric enums only):
  - `Direction[2] // 'Down'`
  - `Direction.Up // 1`
- Enums are real objects at runtime: `Object.keys(Direction)`
- Enums can be used as types in functions
- Computed and constant members
- Can be used in switch statements
- `const enum` for performance (inlined, not available at runtime)

## How It Works

- Numeric enums auto-increment unless initialized
- String enums require explicit values
- Reverse mapping only for numeric enums
- Enums are compiled to objects in JS

## Tricky Moments for Interview

- String enums do **not** have reverse mapping
- Enums are not extensible at runtime
- `const enum` is erased at compile time (no runtime object)
- Computed members must come after constant members
- Heterogeneous enums are allowed but discouraged
- Enums can be used as types, but not as values for string enums
- TypeScript enums are not the same as plain JS objects

## Example Interview Questions

- What is the difference between `enum` and `const enum`?
- How does reverse mapping work?
- Can you extend an enum at runtime?
- What are the pitfalls of heterogeneous enums?
