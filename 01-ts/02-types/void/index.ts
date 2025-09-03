// void/index.ts

// --- Methods ---
// There are NO methods on the void type itself.
// void is not an object, so you cannot call any methods on it.

// --- Use Cases (Suitcases) ---
// 1. Function return type (most common)
function log(message: string): void {
  console.log(message);
}

// 2. Callbacks that don't return a value
[1, 2, 3].forEach((num): void => {
  console.log(num);
});

// 3. Promises that resolve with no value
function doAsync(): Promise<void> {
  return Promise.resolve();
}

// 4. Type annotation for variables (rare, not recommended)
let v: void = undefined;

// 5. As a function parameter (very rare, discouraged)
function takesVoid(arg: void) {
  // arg can only be undefined
}

// 6. void operator (JavaScript, returns undefined)
console.log(void 0); // undefined

// --- Tricky Moments for Interview ---
// 1. void vs undefined
function f(): void {} // Can return undefined or nothing
let x: void = undefined; // OK
// let y: void = 5; // Error

// 2. void in strictNullChecks mode
// result = null; // Only OK if --strictNullChecks is off

// 3. void in callbacks (e.g., setTimeout)
setTimeout((): void => {
  console.log('Timeout!');
}, 1000);

// 4. void in Promises
function asyncVoid(): Promise<void> {
  return Promise.resolve();
}

// 5. void operator returns undefined, not void type
console.log(typeof void 0); // "undefined"

// 6. void is not assignable to other types except undefined (and null if not strict)
let a: void = undefined; // OK
// let b: void = 123; // Error

// 7. void is not the same as never
function neverReturns(): never {
  throw new Error('Never!');
}
function returnsVoid(): void {} // Can return undefined

// 8. void in generic constraints (rare)
function callWithVoid<T extends void>(fn: () => T) {
  fn();
}
