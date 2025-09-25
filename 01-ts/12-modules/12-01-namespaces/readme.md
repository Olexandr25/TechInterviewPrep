# Namespaces

`Namespaces` are a way to organize and group related code in TypeScript. They help avoid naming conflicts and structure code into logical blocks. Although modern TypeScript recommends using ES modules, namespaces are still useful in certain situations.

## Example

```typescript
namespace MyNamespace {
  export function doSomething() {
    console.log('Doing something...');
  }

  export const version = '1.0.0';
}

MyNamespace.doSomething(); // "Doing something..."
console.log(MyNamespace.version); // "1.0.0"
```

## How to use

- Define a namespace using the `namespace` keyword.
- Export functions, classes, interfaces using `export`.
- Access exported elements via `NamespaceName.element`.

## Common use cases

- Organizing utility functions by category.
- Grouping related types and interfaces.
- Creating libraries with clear structure.

## Good to know

- Elements without `export` are private within the namespace.
- You can create nested namespaces.
- A namespace can be extended in different parts of the code.

## Rarely used

- In modern projects where ES modules are preferred.
- When working with bundlers like Webpack or Rollup.

## Interview questions

- What are namespaces in TypeScript?
- How do namespaces differ from ES modules?
- How do you organize code using namespaces?

## What to answer

- Namespaces allow you to group related code and avoid naming conflicts.
- Unlike ES modules, they do not require import/export between files.
- Useful for organizing large libraries or legacy code.

## Tricky points

- Modern TypeScript recommends ES modules instead of namespaces.
- Can complicate tree-shaking and bundler optimization.
- Require reference comments to work across multiple files.
