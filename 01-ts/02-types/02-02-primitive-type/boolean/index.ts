// TypeScript Boolean Type Examples

let isActive: boolean = true;
let isDone: boolean = false;

function toggle(flag: boolean): boolean {
  return !flag;
}

// Boolean conversion examples
console.log('Boolean(0): ', Boolean(0)); // false
console.log('Boolean(1): ', Boolean(1)); // true
console.log('Boolean(""): ', Boolean('')); // false
console.log('Boolean("false"): ', Boolean('false')); // true
console.log('Boolean(null): ', Boolean(null)); // false
console.log('Boolean(undefined): ', Boolean(undefined)); // false
console.log('Boolean(NaN): ', Boolean(NaN)); // false
console.log('Boolean([]): ', Boolean([])); // true
console.log('Boolean({}): ', Boolean({})); // true

// Double negation for conversion
let str: string = 'hello';
console.log('!!str: ', !!str); // true
console.log('!!0: ', !!0); // false

// Logical operators
console.log('isActive && isDone: ', isActive && isDone); // false
console.log('isActive || isDone: ', isActive || isDone); // true
console.log('!isActive: ', !isActive); // false

// Tricky interview moments
// == vs === with booleans
// @ts-expect-error: Intentional type coercion for demonstration
console.log('true == 1: ', true == 1); // true
// @ts-expect-error: Intentional type coercion for demonstration
console.log('true === 1: ', true === 1); // false
// @ts-expect-error: Intentional type coercion for demonstration
console.log('false == 0: ', false == 0); // true
// @ts-expect-error: Intentional type coercion for demonstration
console.log('false === 0: ', false === 0); // false

// Falsy values in JS/TS: false, 0, '', null, undefined, NaN
function isFalsy(value: any): boolean {
  return !value;
}
console.log('isFalsy(0): ', isFalsy(0)); // true
console.log('isFalsy(""): ', isFalsy('')); // true
console.log('isFalsy([]): ', isFalsy([])); // false
console.log('isFalsy({}): ', isFalsy({})); // false
