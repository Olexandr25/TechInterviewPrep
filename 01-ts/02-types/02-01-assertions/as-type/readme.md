# As Type

`as` is a keyword for type assertion in TypeScript, allowing you to explicitly tell the compiler the type of a value when it cannot infer it automatically.

## Example

```typescript
let someValue: any = 'Hello, TypeScript!';
let strLength: number = (someValue as string).length;
console.log(strLength); // 18
```

## When to use

- When you know the type of a value, but TypeScript cannot determine it.
- To cast from `any` or `unknown` to a specific type.

## Common use cases

- Working with data from external sources (API, DOM).
- Gradually migrating from JavaScript to TypeScript.

## Good to know

- Type assertion does not change the value's type at runtime — it's only a hint for the compiler.
- If the type is incorrect, errors will occur only at runtime, not at compile time.

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

- Type assertion does not guarantee type correctness — you can get runtime errors.
- Avoid excessive casting from `any` or `unknown` — it's better to avoid them where possible.
