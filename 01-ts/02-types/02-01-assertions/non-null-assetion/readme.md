# Non Null Assertion

The non-null assertion operator (`!`) in TypeScript lets you tell the compiler that a value will definitely not be `null` or `undefined`.

## Example

```typescript
let name: string | null = null;
// name!.length; // If name === null, this will throw a runtime error
```

## When to Use

- When you are certain that the value will not be `null` or `undefined` at the point of use.
- To bypass TypeScript's null/undefined checks.

## Common Use Cases

- When working with the DOM, APIs, or asynchronous data, after a prior check has been performed.
- In templates, where the value is guaranteed to exist after certain logic.

## Good to Know

- The `!` operator does not check the value at runtime — it is only a hint for the compiler.
- If the value is actually `null` or `undefined`, a runtime error will occur.

## Rarely Used

- Applying without a prior null/undefined check.
- In complex structures where it is hard to guarantee the presence of a value.

## Interview Questions

- What is the purpose of non-null assertion?
- What are the risks of using the `!` operator?
- How can you avoid errors when using non-null assertion?

### Suggested Answers

- The `!` operator tells the compiler that the value is definitely not null/undefined.
- Use it only where this is guaranteed by program logic.
- If you make a mistake, it will result in a runtime error.

## Tricky Points

- Avoid overusing the `!` operator — it's better to explicitly check values.
- It can hide real issues with null/undefined in your code.
