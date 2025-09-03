// Type Guards Examples

// 1. typeof for primitives
function printValue(val: string | number) {
  if (typeof val === 'string') {
    // val is string here
    console.log('String:', val.toUpperCase());
  } else {
    // val is number here
    console.log('Number:', val.toFixed(2));
  }
}

// 2. instanceof for classes
class Dog {
  bark() {
    console.log('Woof!');
  }
}
class Cat {
  meow() {
    console.log('Meow!');
  }
}
function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// 3. Custom type guard
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// 4. Discriminated union (tagged union)
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };
function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}

// Tricky: Type guards don't work for interfaces without a discriminant property
interface A {
  x: number;
}
interface B {
  x: number;
}
function isA(obj: A | B): obj is A {
  // Can't distinguish at runtime unless you add a unique property
  return (obj as A).x !== undefined;
}
