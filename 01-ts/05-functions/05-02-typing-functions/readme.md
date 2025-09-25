# Typing Functions

In TypeScript, functions can be typed in various ways to explicitly specify parameter types and return types.

## Code

- Function declaration with types:

  ```typescript
  function add(a: number, b: number): number { ... }
  ```

- Arrow function:

  ```typescript
  const multiply = (a: number, b: number): number => { ... }
  ```

- Function type via variable:

  ```typescript
  let divide: (a: number, b: number) => number;
  ```

- Optional parameters, default parameters, `void` and `never` types — see `index.ts`.

## Interesting Points

- You can type functions via interface or type alias:

  ```typescript
  type MathOp = (a: number, b: number) => number;
  ```

- Functions can have optional and default parameters.
- Return type `void` — the function returns nothing.
- Return type `never` — the function always throws an error or never completes.

## Typical Issues

- Mismatched parameter and return types.
- Loss of types when using `any`.
- Unexpected values with optional parameters.
- Implicit return type (TypeScript can infer the type, but it's better to specify explicitly).

## What can be asked in an interview

- How to type a function with optional/default parameters?

  **Answer:**
  Use `?` for optional parameters and assign a default value for default parameters:

  ```typescript
  function greet(name: string, greeting?: string): void { ... }
  function greet(name: string, greeting: string = "Hello"): void { ... }
  ```

- How to type a function that returns nothing?

  **Answer:**
  Specify the return type as `void`:

  ```typescript
  function logMessage(message: string): void { ... }
  ```

- How to describe a function type via interface or type alias?

  **Answer:**
  Use a type alias or interface:

  ```typescript
  type Callback = (value: number) => void;
  interface MathFunc {
    (a: number, b: number): number;
  }
  ```

- How does the `never` type work in functions?

  **Answer:**
  Use `never` for functions that never return (e.g., always throw an error):

  ```typescript
  function throwError(message: string): never {
    throw new Error(message);
  }
  ```

- How to type a function that takes another function as a parameter (callback)?

  **Answer:**
  Specify the parameter type as a function:

  ```typescript
  function processNumbers(
    numbers: number[],
    callback: (n: number) => number
  ): number[] {
    return numbers.map(callback);
  }
  ```

## Rarely Used but Good to Know

- Typing functions with rest parameters:

  ```typescript
  function sum(...args: number[]): number { ... }
  ```

- Function overloading.
- Typing `this` in functions.
- Generics in functions:

  ```typescript
  function identity<T>(value: T): T {
    return value;
  }
  ```
