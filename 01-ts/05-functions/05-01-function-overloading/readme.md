# Function Overloading

**Function Overloading** is the ability to declare a single function with different sets of parameters.

## Examples

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```

## How to use

- Declare signatures for each usage variant of the function.
- The implementation should cover all parameter variants.
- The return type in the implementation is usually `any`, but it's better to perform type checks.

## When and how it is commonly used

- For APIs that have different call variants (e.g., working with strings and numbers).
- For functions that accept different types or numbers of parameters.

## Good to know

- The function implementation is single, but there can be multiple signatures.
- TypeScript uses the first matching signature for typing.
- Overloading works only at the type level, not at runtime.

## Rarely used

- Overloading with a large number of signatures (more than 3–4).
- Overloading for functions with different return types if it complicates code readability.

## Common interview questions

- How does function overloading work in TypeScript?
- How to declare a function with multiple parameter variants?
- How to implement a function that supports all signatures?

### What to answer

- Overloading means declaring multiple signatures for a single function.
- The implementation should cover all parameter variants.
- TypeScript chooses the signature based on argument types.

## Tricky points

- The function implementation is single and is not typed as an overload — you need to manually check types.
- If you don't declare signatures, TypeScript won't type function calls correctly.
- The order of signatures matters — the most general should be last.
- You cannot overload functions by return type, only by parameters.
