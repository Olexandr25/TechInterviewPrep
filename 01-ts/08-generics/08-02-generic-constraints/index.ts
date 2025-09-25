interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know that arg has a .length property
  console.log(arg.length);
  return arg;
}

// loggingIdentity(3); // Error: number does not have a .length property
loggingIdentity({ length: 10, value: 3 }); // OK
loggingIdentity('Hello'); // OK, string has .length
loggingIdentity([1, 2, 3]); // OK, array has .length

// Another example: restricting by object keys
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'John', age: 30, city: 'New York' };
const name = getProperty(person, 'name'); // OK, type string
console.log('Name:', name); // Name: John
const age = getProperty(person, 'age'); // OK, type number
console.log('Age:', age); // Age: 30
// const invalid = getProperty(person, "invalid"); // Error

// Restriction via union type
function compare<T extends string | number>(a: T, b: T): boolean {
  return a === b;
}

console.log(compare('hello', 'world')); // false
console.log(compare(10, 10)); // true
// compare("hello", 10); // Error: different types
