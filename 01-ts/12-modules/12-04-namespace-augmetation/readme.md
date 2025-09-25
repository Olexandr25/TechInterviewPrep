# Namespace Augmentation

`Namespace augmentation` is a way to extend or modify existing namespaces in TypeScript. This is useful when you need to add new functionality to existing namespaces or fix missing or incorrect declarations in third-party libraries.

## Example

```typescript
declare namespace MyModule {
  export interface MyInterface {
    newFunction(): void;
  }
}

namespace MyModule {
  export class MyClass implements MyInterface {
    public newFunction() {
      console.log('I am a new function in MyModule!');
    }
  }
}

const obj = new MyModule.MyClass();
obj.newFunction(); // Output: "I am a new function in MyModule!"
```

## How to use

- Use `declare namespace` to declare new elements in a namespace.
- Implement the declared elements in the corresponding namespace.
- For global extensions, use `declare global`.

## Common use cases

- Extending global objects (Array, String, Window).
- Adding methods to third-party libraries (jQuery, lodash).
- Fixing incomplete type declarations.

## Good to know

- Extensions affect all usages of the namespace.
- Be careful with global extensions.
- It is recommended to document all extensions.

## Rarely used

- In modern projects that use ES modules.
- When composition is sufficient instead of extension.

## Interview questions

- What is namespace augmentation?
- How do you extend the global Array object with a new method?
- What risks are associated with extending third-party libraries?

## What to answer

- Namespace augmentation allows you to extend existing namespaces with new functionality.
- It is used to add methods to global objects and third-party libraries.
- You should be careful not to break existing functionality.

## Tricky points

- Extensions may conflict with future versions of libraries.
- Global extensions affect the entire project.
- You must implement all declared elements.
