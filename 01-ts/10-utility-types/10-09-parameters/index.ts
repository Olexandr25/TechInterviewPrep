// Example usage of Parameters<T>

type T0 = Parameters<() => string>; // []
type T1 = Parameters<(s: string) => void>; // [s: string]
type T2 = Parameters<<T>(arg: T) => T>; // [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;
type T3 = Parameters<typeof f1>; // [arg: { a: number; b: string }]

type T4 = Parameters<any>; // unknown[]
type T5 = Parameters<never>; // never

// type T6 = Parameters<string>; // Error: Type 'string' does not satisfy the constraint
// type T7 = Parameters<Function>; // Error: Type 'Function' does not satisfy the constraint

// Practical examples
function processUser(id: number, name: string, isActive: boolean): void {
  console.log(`Processing user: ${id}, ${name}, active: ${isActive}`);
}

type ProcessUserParams = Parameters<typeof processUser>; // [id: number, name: string, isActive: boolean]

// Usage with higher-order function
function createWrapper<F extends (...args: any[]) => any>(fn: F) {
  return function (...args: Parameters<F>) {
    console.log('Calling function with args:', args);
    return fn(...args);
  };
}

const wrappedProcessUser = createWrapper(processUser);
wrappedProcessUser(1, 'John', true); // Correctly typed

// Example with async function
async function fetchData(
  url: string,
  options?: RequestInit
): Promise<Response> {
  return fetch(url, options);
}

type FetchParams = Parameters<typeof fetchData>; // [url: string, options?: RequestInit]
// Using FetchParams type for argument typing
const fetchParams: FetchParams = [
  'https://jsonplaceholder.typicode.com/posts',
  { method: 'GET' },
];

fetchData(...fetchParams).then((response) => {
  console.log('Fetched data:', response);
});

// Example with class method
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

type AddParams = Parameters<Calculator['add']>; // [a: number, b: number]
const addParams: AddParams = [5, 7];
const calculator = new Calculator();
const sum = calculator.add(...addParams); // 12
console.log('Sum:', sum);

// Demonstration
const params: ProcessUserParams = [1, 'John Doe', true];
processUser(...params); // OK
