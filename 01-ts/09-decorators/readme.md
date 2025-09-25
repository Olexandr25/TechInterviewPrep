# Decorators

Decorators are TypeScript functions that allow you to modify the behavior of classes, properties, methods, or parameters. They provide a way to add functionality to existing code.

## Examples

**Method Decorator:**

```typescript
function log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey.toString()} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}
```

**Class Decorator:**

```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
```

## How to Use

- Enable `experimentalDecorators` in `tsconfig.json`.
- Decorators are written with the `@` symbol before the name.
- Can be applied to classes, methods, properties, and parameters.

## Common Use Cases

- For logging, validation, caching.
- In frameworks (Angular, NestJS) for dependency injection.
- For automating routine tasks (autobinding, metadata).

## Good to Know

- There are several types: class, method, property, and parameter decorators.
- Decorator factories allow you to parameterize decorators.
- Decorators run at compile time but can change behavior at runtime.

## Rarely Used

- Parameter decorators (least useful).
- Complex decorators with reflect-metadata.
- Accessor decorators (getter/setter).

## Interview Questions

- What are decorators and why are they needed?
- How do you create a custom decorator?
- What is the difference between a decorator and a decorator factory?
- How do you enable decorator support?

### What to Answer

- Decorators are functions that modify the behavior of classes/methods.
- Created as regular functions with a specific signature.
- Decorator factory returns a decorator and allows passing parameters.
- You need to enable `experimentalDecorators` in `tsconfig.json`.

## What is a Decorator Factory

A **Decorator Factory** is a function that returns a decorator. It allows you to parameterize decorators.

```typescript
// Regular decorator
function simpleDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // decorator logic
}

// Decorator Factory
function logWithPrefix(prefix: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix}: Calling ${propertyKey} with args: ${args}`);
      return originalMethod.apply(this, args);
    };
  };
}

class Example {
  @logWithPrefix('DEBUG') // Calls the factory, which returns a decorator
  method() {}
}
```

**Advantages of Decorator Factory:**

- You can pass parameters to the decorator
- More flexibility and code reusability
- One factory can be used for different configurations

## `this` Inside a Decorator

The **`this` context in decorators** can be tricky and depends on where and how the decorator is used.

### In a Method Decorator

```typescript
function bindMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    // `this` here refers to the class instance (when the method is called)
    console.log('this in decorator:', this);
    return originalMethod.apply(this, args); // Important to preserve context
  };
}

class MyClass {
  name = 'MyClass';

  @bindMethod
  getName() {
    return this.name; // `this` here is also the class instance
  }
}
```

### Problems with `this`

```typescript
function problematicDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  // ❌ Incorrect - loses `this` context
  descriptor.value = originalMethod;

  // ✅ Correct - preserves `this` context
  descriptor.value = function (...args: any[]) {
    return originalMethod.apply(this, args);
  };
}
```

### Autobinding Decorator

```typescript
function autobind(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      // `this` here will be the class instance
      return originalMethod.bind(this);
    },
  };
}

class EventHandler {
  message = 'Hello!';

  @autobind
  handleClick() {
    console.log(this.message); // Always correct context
  }
}

const handler = new EventHandler();
const clickHandler = handler.handleClick; // No loss of context
clickHandler(); // "Hello!"
```

**Key Points about `this`:**

- In method decorators, `this` usually refers to the class instance
- You must carefully preserve context using `apply()` or `call()`
- Autobinding decorators are useful for event handlers
- Arrow functions can break the `this` context

## Tricky Points

- Decorators are an experimental feature (until TypeScript 5.0).
- Execution order: top-down for evaluation, bottom-up for invocation.
- `this` in a decorator may not be what you expect.
- Decorators do not automatically change TypeScript types.
- Decorator factories are called at compile time but return decorators for runtime.
