# Global Augmentation

`Global augmentation` is a way to add declarations to the global scope in TypeScript. It's useful for extending existing libraries or built-in types, as well as adding new functionality to the global scope.

## Example

```typescript
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}

global.myGlobalFunction = function () {
  console.log('I am a global function!');
};

myGlobalFunction(); // Output: "I am a global function!"
```

## How to use

- Use `declare global` or extend the relevant namespace (e.g., NodeJS).
- Add new properties, methods, or types to global objects.
- Implement the added methods in the appropriate environment (Node.js, browser).

## Common use cases

- Adding global functions, constants, or configurations.
- Extending built-in types (Array, String, Window).
- Adding types for third-party libraries that operate in the global scope.

## Good to know

- Global augmentations affect the entire project.
- Be careful to avoid name conflicts.
- Use the NodeJS namespace for Node.js, and `declare global` for the browser.

## Rarely used

- In modern projects that mostly use modules.
- If there is no need for global variables or functions.

## Interview questions

- How do you add a new function to the global scope in TypeScript?
- How do you extend the global Array or Window type?
- What risks are associated with global augmentation?

## What to answer

- Global augmentation allows you to add new types, properties, and methods to the global scope.
- It's used to extend existing types or add new functionality.
- You should be careful not to break existing logic.

## Tricky points

- Global augmentations can conflict with other libraries.
- You must implement all added elements.
- They affect all files in the project.
