// tuple.ts

// --- Tuple Basics ---
const tuple1: [number, string] = [1, 'one'];
const tuple2: [string, boolean, number] = ['hello', true, 42];

// --- Accessing Elements ---
console.log(tuple1[0]); // 1
console.log(tuple1[1]); // "one"

// --- Destructuring ---
const [num, str] = tuple1;
console.log(num, str); // 1 "one"

// --- Array Methods on Tuples ---
tuple1.push('extra'); // Allowed, but breaks strict tuple type
console.log(tuple1); // [1, "one", "extra"]

tuple1.pop(); // Removes last element
console.log(tuple1); // [1, "one"]

tuple1.unshift(0); // Adds to start
console.log(tuple1); // [0, 1, "one"]

tuple1.splice(1, 1, 99); // Replace element at index 1
console.log(tuple1); // [0, 99, "one"]

console.log(tuple1.length); // 3

// --- Tricky Moments for Interview ---

// 1. Tuples are arrays with fixed types and length, but array methods can break this
const tuple3: [number, string?] = [5];
console.log(tuple3); // [5]

// 2. Optional elements
const tupleOpt: [number, string?] = [10];
console.log(tupleOpt); // [10]

// 3. Readonly tuples
const tuple4: readonly [number, string] = [2, 'two'];
// tuple4.push("extra"); // Error: can't modify readonly tuple

// 4. Tuple labels (for readability)
type Point = [x: number, y: number];
const p: Point = [10, 20];
console.log(p); // [10, 20]

// 5. Rest elements in tuples
type StringTuple = [string, ...string[]];
const st: StringTuple = ['a', 'b', 'c'];
console.log(st); // ["a", "b", "c"]

// 6. Tuple destructuring in function parameters
function printTuple([a, b]: [number, string]) {
  console.log(a, b);
}
printTuple([7, 'seven']);

// 7. Tuple with union types
const tupleUnion: [number | string, boolean] = ['id', false];
console.log(tupleUnion);

// 8. Tuple with function type
type CallbackTuple = [string, (x: number) => number];
const cbTuple: CallbackTuple = ['double', (x) => x * 2];
console.log(cbTuple[1](5)); // 10

// 9. Tuple with readonly and optional
type ReadonlyOptTuple = readonly [number, string?];
const roTuple: ReadonlyOptTuple = [42];
console.log(roTuple);

// 10. Tuple with rest and optional
type ComplexTuple = [number, boolean?, ...string[]];
const complex: ComplexTuple = [1, true, 'a', 'b'];
console.log(complex);

// --- All Methods Demonstrated ---
const tupleMethods: [number, string] = [3, 'three'];
console.log(tupleMethods.concat([4, 'four'])); // [3, "three", 4, "four"]
console.log(tupleMethods.join('-')); // "3-three"
console.log(tupleMethods.slice(0, 1)); // [3]
console.log(tupleMethods.indexOf('three')); // 1
console.log(tupleMethods.includes(3)); // true
console.log(tupleMethods.reverse()); // ["three", 3]

// --- Suitcases (Edge Cases) ---
// Empty tuple
const emptyTuple: [] = [];
console.log(emptyTuple); // []

// Tuple with many types
type ManyTuple = [number, string, boolean, null, undefined];
const many: ManyTuple = [1, 'str', true, null, undefined];
console.log(many); // [1, "str", true, null, undefined]

// Tuple with never type (rare)
type NeverTuple = [never];
function neverFn(): NeverTuple {
  throw new Error('Never!');
}
// neverFn(); // Uncomment to test

// Tuple with enums
enum Color {
  Red,
  Green,
  Blue,
}
type ColorTuple = [Color, string];
const colorTuple: ColorTuple = [Color.Green, 'green'];
console.log(colorTuple); // [0, "green"]

// --- End of tuple.ts ---
