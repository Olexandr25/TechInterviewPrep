// TypeScript 'any' Type Examples

let anything: any = 42;
console.log(anything); // 42

anything = 'hello';
console.log(anything); // hello

anything = { key: 'value' };
console.log(anything); // { key: 'value' }

anything = [1, 2, 3];
console.log(anything); // [1, 2, 3]

// You can call any method or access any property
console.log(anything.length); // 3
console.log(anything.nonExistentMethod); // undefined

// TypeScript will not warn about errors
try {
  anything.toUpperCase(); // Will fail at runtime if not a string
} catch (e) {
  if (e instanceof Error) {
    console.log('Runtime error:', e.message);
  } else {
    console.log('Runtime error:', e);
  }
}

// Tricky moments
// Implicit any
function logValue(value: any) {
  // value is explicitly 'any'
  console.log(value);
}
logValue(123);
logValue('abc');

// Use unknown for safer type handling
let safer: unknown = 'safe';
// console.log(safer.toUpperCase()); // Error: Object is of type 'unknown'
