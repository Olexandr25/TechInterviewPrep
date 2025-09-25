# Equality

TypeScript uses equality operators (`===`, `!==`, `==`, `!=`) and switch statements for type narrowing. If two values are equal, TypeScript can determine their common type.

## Example

```typescript
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // x and y are guaranteed to be string
    x.toUpperCase();
    y.toLowerCase();
  }
}
```

## How to use

- Use equality operators to narrow union types.
- Use switch statements to check types via typeof.

## Common use cases

- Type narrowing in functions with union types.
- Type checking via switch/typeof.

## Good to know

- TypeScript analyzes types in if/switch branches.
- When values are equal, TypeScript determines their common type.

## Interview questions

- How do equality operators affect types in TypeScript?
- What type will x and y have after checking x === y?

## What to answer

- Equality operators allow TypeScript to narrow types to their common type.
- This increases safety and convenience when working with union types.

## Tricky points

- It's better to use === and !== for precise comparison.
- Loose equality (==, !=) can lead to unexpected results.
