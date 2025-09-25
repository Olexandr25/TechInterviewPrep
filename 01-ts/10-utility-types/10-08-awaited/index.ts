// Example usage of Awaited<T>

type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number
type C = Awaited<boolean | Promise<number>>; // number | boolean

// Practical examples
async function fetchUser(): Promise<{ id: number; name: string }> {
  return { id: 1, name: 'John Doe' };
}

type User = Awaited<ReturnType<typeof fetchUser>>; // { id: number; name: string }

// Example with nested Promise
async function fetchNestedData(): Promise<Promise<string>> {
  return Promise.resolve('Hello World');
}

type NestedResult = Awaited<ReturnType<typeof fetchNestedData>>; // string

// Example with union types
type MixedPromise = Promise<number> | string | Promise<boolean>;
type UnwrappedMixed = Awaited<MixedPromise>; // number | string | boolean

// Example with API response
interface ApiResponse<T> {
  data: T;
  status: number;
}

async function fetchApiData(): Promise<ApiResponse<string[]>> {
  return {
    data: ['item1', 'item2', 'item3'],
    status: 200,
  };
}

type ApiData = Awaited<ReturnType<typeof fetchApiData>>; // ApiResponse<string[]>

// Example with a function that processes the result
async function processData(data: Promise<number>): Promise<string> {
  const result: Awaited<typeof data> = await data; // number
  return result.toString();
}

// Demonstration
const promiseString: Promise<string> = Promise.resolve('Hello');
const awaitedString: A = 'Hello' as A;

console.log('Awaited type demo:', awaitedString);

// Before Awaited<T> appeared in TypeScript 4.5
type ManualAwait<T> = T extends Promise<infer U> ? U : T;

// Examples of using ManualAwait
type ManualA = ManualAwait<Promise<string>>; // string
type ManualB = ManualAwait<Promise<Promise<number>>>; // Promise<number>
type ManualC = ManualAwait<boolean | Promise<number>>; // boolean | number

// For deep Promise unwrapping manually:
type DeepAwait<T> = T extends Promise<infer U> ? DeepAwait<U> : T;

type DeepA = DeepAwait<Promise<Promise<string>>>; // string
type DeepB = DeepAwait<Promise<Promise<Promise<number>>>>; // number
