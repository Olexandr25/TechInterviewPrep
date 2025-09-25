# Abstract Classes

`Abstract classes` are classes that cannot be instantiated directly; they must be inherited. They provide a template for other classes and can contain abstract methods (without implementation) that must be overridden in subclasses. Abstract classes are useful for defining a common interface or base functionality for other classes.

## Example

```typescript
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('moving...');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('bark');
  }
}

const dog = new Dog();
dog.makeSound(); // bark
dog.move(); // moving...
// const animal = new Animal(); // Error: Cannot create an instance of an abstract class
```

## How to use

- Declare a class with the `abstract` keyword.
- Add abstract methods without implementation.
- Inherit the abstract class in a subclass and implement all abstract methods.

## Common use cases

- Defining a base interface for a group of classes.
- Implementing design patterns such as the template method.
- Ensuring mandatory implementation of certain methods in subclasses.

## Good to know

- An abstract class cannot be instantiated directly.
- A subclass must implement all abstract methods.
- An abstract class can contain both abstract and regular methods.

## Rarely used

- In simple programs without complex class hierarchies.
- If all classes have unique behavior and do not require a shared template.

## Interview questions

- What is an abstract class?
- How is an abstract class different from an interface?
- How do abstract methods work?

## What to answer

- An abstract class provides a template for subclasses and cannot be instantiated directly.
- A subclass must implement all abstract methods.
- An abstract class can contain implemented methods.

## Tricky points

- If you do not implement an abstract method in a subclass, TypeScript will throw an error.
- An abstract class can contain properties and implemented methods.
- You can inherit from an abstract class, but cannot instantiate it directly.
