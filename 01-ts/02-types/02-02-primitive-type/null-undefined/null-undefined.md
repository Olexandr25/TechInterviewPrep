# null & undefined in TypeScript

## Examples

```ts
let a: null = null;
let b: undefined = undefined;
```

## All Methods

- `typeof` operator
- Type guards: `val === null`, `val === undefined`
- Optional chaining: `obj?.prop`
- Nullish coalescing: `val ?? default`
- Function return types: `number | null | undefined`

## How It Works

- **null**: Explicitly set to "no value". Used to indicate intentional absence.
- **undefined**: Variable declared but not assigned. Default value for uninitialized variables and missing function arguments.
- Both are subtypes of all types if `--strictNullChecks` is off. With `--strictNullChecks` on, must be explicitly included in type.

## Tricky Moments for Interview

- `typeof null` is `'object'` (historical bug in JS)
- `null == undefined` is `true`, but `null === undefined` is `false`
- Accessing properties/methods on `null` or `undefined` throws `TypeError`
- Optional chaining (`?.`) and nullish coalescing (`??`) help handle these values safely
- Function return types can include `null` and `undefined` for flexibility
- Be careful with falsy checks: `if (!val)` is true for `null`, `undefined`, `0`, `''`, `false`, `NaN`

## Examples in Practice

```ts
function getValue(): number | null | undefined {
  return Math.random() > 0.5 ? null : undefined;
}

const obj: { a?: number | null } = {};
console.log(obj.a ?? 'default'); // 'default'
```

---
**Interview tip:** Know the difference between `null` and `undefined`, and how TypeScript's strictness affects their usage.
