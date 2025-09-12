# void in TypeScript

The `void` type represents the absence of any type. It's most commonly used as the return type for functions that do not return a value. In JavaScript, `void` also exists as an operator that always returns `undefined`.

## Examples

```ts
function logMessage(message: string): void {
  console.log(message);
}

function doNothing(): void {}

let result: void;
result = undefined; // OK
// result = null; // OK if --strictNullChecks is off
```

## All Methods

- No methods exist on `void` itself
- Used for function return types
- Can be used in callbacks and Promises

## How It Works

- Functions with `void` return type can return `undefined` or have no return statement
- Only `undefined` (and sometimes `null`) can be assigned to `void`
- Used to signal that a function does not return a value

## Tricky Moments for Interview

- `void` vs `undefined`: `void` is a type, `undefined` is a value
- Assigning other types to `void` is not allowed
- `void` as a function argument type is rare and not recommended
- `void` in callbacks (e.g., setTimeout)
- `void` in Promises: `Promise<void>`
- The `void` operator in JavaScript always returns `undefined`

## Examples in Practice

```ts
setTimeout((): void => {
  console.log("Timeout!");
}, 1000);

function asyncVoid(): Promise<void> {
  return Promise.resolve();
}

console.log(void 0); // undefined
```

---
**Interview tip:** Know when to use `void` for function return types and how it differs from `undefined` in TypeScript.
