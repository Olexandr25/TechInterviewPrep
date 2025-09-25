# Inheritance vs Polymorphism

`Inheritance` and `polymorphism` are fundamental concepts of object-oriented programming, supported in TypeScript.

## Inheritance

Inheritance is a mechanism by which a subclass inherits properties and methods from a parent class. This allows you to reuse code and behavior from the parent class, as well as add or modify your own behavior. In TypeScript, inheritance is implemented using the `extends` keyword.

## Polymorphism

Polymorphism is the ability of an object to take on different forms. It allows objects of different classes to be treated as objects of a common class if they share a common interface or inheritance hierarchy. In TypeScript, polymorphism is achieved through method overriding and overloading.

## Example

```typescript
class Animal {
  makeSound(): void {
    console.log('Making animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

let animal: Animal;

animal = new Dog();
animal.makeSound(); // Output: Bark

animal = new Cat();
animal.makeSound(); // Output: Meow
```

## How to use

- Use `extends` to create a subclass that inherits properties and methods from a base class.
- Override methods in subclasses to implement polymorphism.
- Declare variables of the base class type to store instances of subclasses.

## Common use cases

- Creating class hierarchies to model real-world objects.
- Implementing flexible and extensible APIs.
- Using design patterns such as factory or strategy.

## Good to know

- Inheritance enables code reuse.
- Polymorphism provides flexibility and extensibility.
- Method overriding allows you to change subclass behavior.

## Rarely used

- In simple programs without complex class hierarchies.
- If all objects have unique behavior.

## Interview questions

- What is inheritance and polymorphism?
- How is inheritance implemented in TypeScript?
- How does polymorphism work in TypeScript classes?

## What to answer

- Inheritance allows a subclass to obtain properties and methods from a base class.
- Polymorphism allows subclass objects to behave as base class objects.
- These are the foundation for flexible and scalable programs.

## Tricky points

- If you don't override a method in a subclass, the base class implementation will be used.
- You can use the base class type to store instances of subclasses.
- Polymorphism only works for methods declared in the base class.
