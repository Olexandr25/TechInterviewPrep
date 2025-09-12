// TypeScript Array Type Examples

let numbers: number[] = [1, 2, 3];
let names: Array<string> = ['Alex', 'Bob', 'Cara'];
let mixed: (number | string)[] = [1, 'two', 3];

// Array methods with console.log outputs
console.log('push(4): ', numbers.push(4)); // 4 (new length)
console.log('after push: ', numbers); // [1, 2, 3, 4]
console.log('pop: ', numbers.pop()); // 4
console.log('after pop: ', numbers); // [1, 2, 3]
console.log('shift: ', numbers.shift()); // 1
console.log('after shift: ', numbers); // [2, 3]
console.log('unshift(0): ', numbers.unshift(0)); // 3 (new length)
console.log('after unshift: ', numbers); // [0, 2, 3]

console.log('concat: ', numbers.concat([5, 6])); // [0, 2, 3, 5, 6]
console.log('slice: ', numbers.slice(1, 2)); // [2]
console.log('splice: ', numbers.splice(1, 1, 99)); // [2]
console.log('after splice: ', numbers); // [0, 99, 3]

console.log(
  'map: ',
  numbers.map((x) => x * 2)
); // [0, 198, 6]
console.log(
  'filter: ',
  numbers.filter((x) => x > 2)
); // [99, 3]
console.log(
  'reduce: ',
  numbers.reduce((acc, x) => acc + x, 0)
); // 102
console.log(
  'forEach: ',
  numbers.forEach((x) => console.log(x))
); // 0 99 3

console.log(
  'find: ',
  numbers.find((x) => x === 99)
); // 99
console.log(
  'findIndex: ',
  numbers.findIndex((x) => x === 99)
); // 1
console.log('indexOf: ', numbers.indexOf(3)); // 2
console.log('includes: ', numbers.includes(99)); // true

console.log(
  'sort: ',
  numbers.sort((a, b) => b - a)
); // [99, 3, 0]
console.log('reverse: ', numbers.reverse()); // [0, 3, 99]
console.log('join: ', numbers.join('-')); // 0-3-99
console.log(
  'every: ',
  numbers.every((x) => typeof x === 'number')
); // true
console.log(
  'some: ',
  numbers.some((x) => x > 50)
); // true

// Tricky moments
let sparse: number[] = [];
sparse[10] = 5;
console.log(sparse); // [ <10 empty items>, 5 ]
console.log(sparse.length); // 11

function sumArguments(...args: number[]) {
  // args is a true array
  return args.reduce((acc, x) => acc + x, 0);
}
console.log('sumArguments(1, 2, 3): ', sumArguments(1, 2, 3)); // 6
