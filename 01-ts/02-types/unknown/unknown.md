# unknown in TypeScript

The unknown type in TypeScript is a type-safe alternative to any. It can hold any value, but you cannot use or assign it to other types without first checking or asserting its type. This enforces safer handling of dynamic data, such as API responses or user input, by requiring explicit type checks before usage.

## Examples

```ts
let value: unknown;
value = 42;
value = "hello";
value = { a: 1 };

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

## All Methods

- Type guards: `typeof`, `instanceof`, custom guards
- Type assertions: `value as Type`
- Control flow analysis

## How It Works

- `unknown` is the safest type in TypeScript; you can't use or assign it to other types without narrowing or asserting
- Forces you to check the type before using the value
- Similar to `any`, but more type-safe
- Useful for API responses, user input, or dynamic data

## Tricky Moments for Interview

- `unknown` vs `any`: `any` allows any operation, `unknown` requires type checking
- Assigning `unknown` to other types is not allowed without narrowing
- Use type guards, assertions, or control flow to work with `unknown`
- Assignable to itself and `any`, but not to other types

## Examples in Practice

```ts
function handleUnknown(val: unknown) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else if (typeof val === "number") {
    console.log(val + 1);
  } else {
    console.log("Unknown type");
  }
}

let str = value as string;

function parseJson(json: string): unknown {
  return JSON.parse(json);
}
```

---
**Interview tip:** Know how `unknown` enforces type safety and how it differs from `any` in TypeScript.
