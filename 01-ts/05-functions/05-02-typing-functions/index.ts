// 1. Function declaration with parameter and return types
function add(a: number, b: number): number {
  return a + b;
}

// 2. Arrow function with types
const multiply = (a: number, b: number): number => {
  return a * b;
};

// 3. Function type described via variable
let divide: (a: number, b: number) => number;
divide = (a, b) => a / b;

// 4. Function with optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting ?? 'Hello'}, ${name}!`;
}

// 5. Function with default parameter
function pow(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

// 6. Function with void return type
function logMessage(message: string): void {
  console.log(message);
}

// 7. Function with never return type (never returns a value)
function throwError(msg: string): never {
  throw new Error(msg);
}

console.log('add:', add(2, 3)); // 5
console.log('multiply:', multiply(2, 3)); // 6
console.log('divide:', divide(2, 3)); // 0.6666666666666666
console.log('greet:', greet('Olexandr')); // Hello, Olexandr!
console.log('pow:', pow(2)); // 4
logMessage('This is a log message.'); // This is a log message.
// Uncommenting the next line will terminate the program with an error
// throwError('This is an error message.');
// To demonstrate the never type without terminating the program, we can catch the error
try {
  throwError('This is an error message.');
} catch (error) {
  console.error(error);
}
