# Template Literal Types

`Template literal types` are a way to manipulate string values as types. They allow you to create types based on the result of string manipulation or concatenation. They are created using backticks (\`\`) and expressions inside the type.

## Example

```typescript
type Name = `Mr. ${string}`;

let name1: Name = `Mr. Smith`; // ok
// let name2: Name = `Mrs. Smith`;  // error

type ButtonClass = `btn-${Size}-${Color}`;
// Generates all possible combinations of Size and Color
```

## How to use

- Use the syntax \`template ${type}\` to create dynamic string types.
- Combine with union types to generate all possible combinations.
- Use built-in utilities like `Capitalize`, `Uppercase`, `Lowercase`.

## Common use cases

- Creating CSS classes, API endpoints, SQL queries.
- Generating event handler names (onClick, onFocus).
- Validating URL patterns, versions, formats.

## Good to know

- Automatically generates all combinations from union types.
- Works only with TypeScript 4.1+.
- Can be combined with conditional types and mapped types.

## Rarely used

- In projects without complex string patterns.
- If simple literal types are sufficient.

## Interview questions

- What are template literal types?
- How do you create a type for all combinations of two union types?
- What are the advantages of template literal types over regular strings?

## What to answer

- Template literal types allow you to create dynamic string types.
- Automatically generate all combinations from union types.
- Provide type safety for string patterns.

## Tricky points

- Generate a lot of types when combining large union types.
- Can slow down compilation if overused.
- Require TypeScript 4.1+ to work.
