// Abstract classes in TypeScript

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

// const animal = new Animal(); // Error: cannot instantiate abstract class directly
