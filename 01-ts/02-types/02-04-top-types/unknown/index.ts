// unknown/index.ts

// 1. Declaration and assignment
let value: unknown;
value = 42;
value = 'hello';
value = { a: 1 };

// 2. Assigning unknown to other types requires type checking or assertion
// let num: number = value; // Error
if (typeof value === 'number') {
  let num: number = value; // OK
}
let str = value as string; // Type assertion

// 3. Type guards
function isString(val: unknown): val is string {
  return typeof val === 'string';
}
function isNumber(val: unknown): val is number {
  return typeof val === 'number';
}
function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean';
}
function isObject(val: unknown): val is object {
  return typeof val === 'object' && val !== null;
}

// 4. Handling unknown with control flow
function handleUnknown(val: unknown) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  } else if (typeof val === 'number') {
    console.log(val + 1);
  } else if (typeof val === 'boolean') {
    console.log(val ? 'true' : 'false');
  } else if (typeof val === 'object' && val !== null) {
    console.log('Object:', val);
  } else {
    console.log('Unknown type');
  }
}

// 5. Tricky moments for interviews
// a. unknown vs any
let a: any = 5;
let b: unknown = 5;
a.toFixed(); // OK
// b.toFixed(); // Error: Object is of type 'unknown'

// b. unknown is assignable to itself and any, but not to other types without checking
let c: unknown = b; // OK
let d: any = b; // OK
// let e: number = b; // Error

// c. Use type guards, assertions, or control flow analysis to work with unknown
function process(val: unknown) {
  if (typeof val === 'boolean') {
    return val ? 'yes' : 'no';
  }
  return 'unknown';
}

// d. Useful for safe API responses, user input, or dynamic data
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

// e. unknown cannot be used directly (no property access, method calls, etc.)
// value.toString(); // Error

// f. unknown is safer than any, forces explicit type checking

// 6. All cases with unknown
// - API responses
// - User input
// - Dynamic data (e.g., from external sources)
// - Libraries with loose types
// - When you want to force type safety and explicit checks

// 7. Narrowing unknown with custom type guards
function isArray(val: unknown): val is any[] {
  return Array.isArray(val);
}
function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

// 8. Example usage
function safeCall(val: unknown) {
  if (isFunction(val)) {
    val();
  }
}

function safeAccess(val: unknown) {
  if (isObject(val) && 'prop' in val) {
    // TypeScript still requires assertion or further narrowing
    console.log((val as any).prop);
  }
}
