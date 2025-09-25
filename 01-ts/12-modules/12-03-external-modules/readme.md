# External Modules

`External modules` allow you to organize and share code between different files in TypeScript. External modules in TypeScript follow CommonJS or ES module standards and provide clear separation of functionality.

## Example

```typescript
// myModule.ts
export function doSomething() {
  console.log('Doing something...');
}

export const version = '1.0.0';

// main.ts
import { doSomething, version } from './myModule';
doSomething(); // Output: "Doing something..."
console.log(version); // Output: "1.0.0"
```

## How to use

- Use `export` to export functions, classes, interfaces, variables.
- Use `import` to import exported elements.
- Both named exports and default exports are supported.

## Common use cases

- Splitting code into logical modules and files.
- Creating reusable libraries and utilities.
- Organizing large projects with a clear structure.

## Good to know

- ES modules are the standard for modern JavaScript and TypeScript.
- Tree-shaking is supported for bundle size optimization.
- Both static and dynamic imports can be used.

## Rarely used

- In small projects with simple structure.
- When working with legacy code that uses global variables.

## Interview questions

- How do external modules differ from namespaces?
- How does tree-shaking work with ES modules?
- What are barrel exports and why are they needed?

## What to answer

- External modules provide modularity and encapsulation of code.
- ES modules enable static analysis and optimization.
- They are the foundation of modern JavaScript/TypeScript application architecture.

## Tricky points

- The difference between default and named exports.
- Cyclic dependencies can cause issues.
- Module system configuration in tsconfig.json affects behavior.
