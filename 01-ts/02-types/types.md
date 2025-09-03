# Types

TypeScript’s type system helps catch errors early and makes code more robust. Understanding these categories is key for interviews and real-world development

**Tip:**

---

- **Special**: Used for specific scenarios (`void` for functions).
- **Bottom**: Subtype of no types (`never`).
- **Top**: Supertype of all types (`any`, `unknown`).
- **Object**: Structured, mutable data such as `arrays`, `functions`, and `objects`.
- **Primitive**: Basic, immutable values like `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, and `symbol`.

## What Each Means

- **Union/intersection types**: Combine types. Example: `string | number`, `A & B`
- **Literal types**: Specific values. Example: `type YesNo = 'yes' | 'no'`
- **Type aliases, interfaces, classes**: Ways to define custom types. Example: `type Point = { x: number; y: number }`

### Other Type Concepts

---

- **`void`**: No value returned (e.g., functions that don’t return anything). Example: `function log(msg: string): void { console.log(msg); }`

### Special Types

---

- **`never`**: Represents values that never occur (e.g., function that always throws). Example: `function fail(): never { throw new Error('fail'); }`

### Bottom Types

---

- **`unknown`**: Can be any type; must be type-checked before use. Example: `let y: unknown = 'abc';`
- **`any`**: Can be any type; disables type checking. Example: `let x: any = 5;`

### Top Types

---

- **`enum`**: Named constants. Example: `enum Color { Red, Green, Blue }`
- **`tuple`**: Fixed-length array with specific types. Example: `[number, string]`
- **`array`**: Ordered list of values. Example: `number[]`, `[1, 2, 3]`
- **`object`**: Non-primitive values (arrays, functions, objects). Example: `{ a: 1 }`

### Object Types

---

- **`bigint`**: Arbitrary-precision integers. Example: `123n` *(not in this folder)*
- **`symbol`**: Unique, immutable primitive value. Example: `Symbol('id')` *(not in this folder)*
- **`undefined`**: Variable declared but not assigned a value. Example: `undefined`
- **`null`**: Explicitly no value. Example: `null`
- **`boolean`**: Logical values. Example: `true`, `false`
- **`number`**: Numeric values. Example: `42`, `3.14`
- **`string`**: Textual data. Example: `"hello"`

### Primitive Types

---

This document summarizes all major TypeScript types, grouped by category, with explanations and examples.
