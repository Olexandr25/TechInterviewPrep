// null-undefined.ts

// --- All Methods (related to null/undefined) ---
// Note: null and undefined do not have prototype methods.
// You can only check, assign, and handle them.

// Type guards
function isNull(val: any): val is null {
  return val === null;
}

function isUndefined(val: any): val is undefined {
  return val === undefined;
}

// --- All Suitcases (use cases/examples) ---

// 1. Variable assignment
let n: null = null;
let u: undefined = undefined;

// 2. Function returns
function getNull(): null {
  return null;
}
function getUndefined(): undefined {
  return undefined;
}

// 3. Optional properties
type User = {
  name: string;
  age?: number | null;
};
const user: User = { name: 'Alex' };

// 4. Default values with nullish coalescing
const age = user.age ?? 18; // 18 if age is null/undefined

// 5. Checking values
if (user.age === null) {
  console.log('Age is null');
} else if (user.age === undefined) {
  console.log('Age is undefined');
}

// 6. Function with nullable/undefined return
function maybeValue(): string | null | undefined {
  return Math.random() > 0.5 ? null : undefined;
}

// --- Tricky Moments on Interview ---

// 1. typeof null === 'object' (historical bug)
console.log(typeof null); // 'object'
console.log(typeof undefined); // 'undefined'

// 2. null == undefined is true, but null === undefined is false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 3. Optional chaining and nullish coalescing
const obj: { a?: number | null } = {};
console.log(obj.a ?? 'default'); // 'default'

// 4. Avoid calling methods on null/undefined
// (null as any).toString(); // TypeError
// (undefined as any).toString(); // TypeError

// 5. Array holes are undefined
const arr = [1, , 3];
console.log(arr[1]); // undefined

// 6. JSON.stringify
console.log(JSON.stringify({ a: undefined, b: null })); // '{"b":null}'

// 7. Destructuring defaults
const { a = 5 } = { a: undefined };
console.log(a); // 5

// --- Summary ---
// null: intentional absence of value
// undefined: variable declared but not assigned
