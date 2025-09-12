// TypeScript Number Type Examples

let age: number = 25;
let price: number = 19.99;
let negative: number = -10;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

// NaN and Infinity
let notANumber: number = NaN;
let infinite: number = Infinity;

// Number methods and examples
const num: number = 123.456;

// toFixed()
console.log(num.toFixed(2)); // '123.46'

// toExponential()
console.log(num.toExponential(2)); // '1.23e+2'

// toPrecision()
console.log(num.toPrecision(4)); // '123.5'

// isNaN()
console.log(isNaN(notANumber)); // true
console.log(isNaN(num)); // false

// isFinite()
console.log(isFinite(num)); // true
console.log(isFinite(infinite)); // false

// parseInt()
console.log(parseInt('42')); // 42
console.log(parseInt('42px')); // 42
console.log(parseInt('px42')); // NaN

// parseFloat()
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('3.14abc')); // 3.14

// Math methods
console.log(Math.round(num)); // 123
console.log(Math.floor(num)); // 123
console.log(Math.ceil(num)); // 124
console.log(Math.abs(negative)); // 10
console.log(Math.max(1, 5, 10)); // 10
console.log(Math.min(1, 5, 10)); // 1
console.log(Math.random()); // random number between 0 and 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
