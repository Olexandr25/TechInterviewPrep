# Method Overriding

`Method overriding` is a mechanism where a subclass provides a new implementation for a method that is already defined in its parent class. This allows the subclass to change the behavior inherited from the parent class.

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

let animal: Animal;
animal = new Dog();
animal.makeSound(); // Output: Bark
```

## How to use

- Declare a method in the parent class.
- In the subclass, declare a method with the same signature to override it.
- When calling the method on a subclass instance, the subclass implementation will be used.

## Common use cases

- Changing behavior inherited from the base class.
- Implementing specific logic for subclasses.
- Polymorphism in object-oriented programming.

## Good to know

- The method signature in the subclass must exactly match the signature in the parent class.
- You can use the `super` keyword to call the parent class method.
- Overriding allows you to change behavior without modifying the base class.

## Rarely used

- In classes where all methods have unique behavior.
- If there is no need to change the behavior inherited from the base class.

## Interview questions

- How does method overriding work in TypeScript?
- Can you change the method signature when overriding?
- What is the purpose of method overriding?

## What to answer

- Method overriding allows a subclass to change the implementation of a base class method.
- The method signature must be the same.
- It is fundamental for implementing polymorphism.

## Tricky points

- If the method signature does not match, TypeScript will throw an error.
- Calling a method via the base type uses the subclass implementation if the instance is a subclass.
- You can call the base class implementation using `super.methodName()`.
