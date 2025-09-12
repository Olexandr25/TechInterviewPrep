# TypeScript: String Type

## Explanation

The `string` type is used for textual data in TypeScript.

## Examples

```ts
let name: string = "Alex";
let greeting: string = `Hello, ${name}!`;
```

## Interview Questions

- How do you concatenate strings in TypeScript?
- What are the different methods for working with strings?
- What is a template literal?
- How do you find the length of a string?
- How do you convert a string to uppercase or lowercase?

## Answers

- You can concatenate strings using the `+` operator, `concat()` method, or template literals.
- Common string methods: `concat()`, `slice()`, `substring()`, `substr()`, `replace()`, `toUpperCase()`, `toLowerCase()`, `split()`, `trim()`, `includes()`, `startsWith()`, `endsWith()`, `charAt()`, `indexOf()`, `padStart()`, `padEnd()`, `repeat()`.
- Template literals use backticks and allow embedded expressions: `` `Hello, ${name}!` ``.
- Use `.length` property to get the length.
- Use `.toUpperCase()` and `.toLowerCase()` methods.

## Tricky Moments

- Mixing numbers and strings can lead to type coercion.
- Template literals allow multi-line strings and embedded expressions.
- Some methods (`substr`) are legacy and not recommended for new code.
