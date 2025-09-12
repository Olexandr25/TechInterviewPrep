# As Any

**Type assertion** using the `as` keyword allows you to explicitly tell the compiler what type a value has when TypeScript cannot determine it automatically.

## Example

```typescript
let someValue: any = 'Hello, TypeScript!';
let strLength: number = (someValue as string).length;
console.log(strLength); // 18
```

## When to use

- When you know the type of a value, but TypeScript cannot infer it.
- To convert the type from `any` or `unknown` to a specific type.

## Common use cases

- When working with data from external sources (API, DOM).
- For gradual migration from JavaScript to TypeScript.

## Good to know

- Type assertion does not change the type of the value at runtime — it only gives a hint to the compiler.
- If the type is incorrect, the error will occur only at runtime, not at compile time.

## Rarely used

- Casting between incompatible types (e.g., from `number` to `string` without actual conversion).

## Interview questions

- How does type assertion work?
- When should you use `as`?
- What is the difference between type assertion and type casting?

### What to answer

- Type assertion is a way to tell the compiler what type a value has.
- Use it when you are sure about the type, but TypeScript cannot infer it.
- It does not convert the value, only changes the type for the compiler.

## Tricky points

- Type assertion does not guarantee type correctness — you may get a runtime error.
- Avoid excessive type assertion from `any` — it's better to avoid `any` where possible.
