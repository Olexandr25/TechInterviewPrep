// objects.ts

// Examples of object creation
const basicObj = { key: 'value' };
const emptyObj = {};
const objWithSymbol = { [Symbol('id')]: 123 };

// Object static methods (all main ones)
const sample = { a: 1, b: 2, c: 3 };

console.log(Object.keys(sample)); // ['a', 'b', 'c']
console.log(Object.values(sample)); // [1, 2, 3]
console.log(Object.entries(sample)); // [['a', 1], ['b', 2], ['c', 3]]
console.log(Object.getOwnPropertyNames(sample)); // ['a', 'b', 'c']
console.log(Object.getOwnPropertySymbols(objWithSymbol)); // [Symbol(id)]
console.log(Object.hasOwn(sample, 'a')); // true (ES2022+)
console.log(Object.hasOwnProperty.call(sample, 'b')); // true
console.log(Object.assign({}, sample, { d: 4 })); // { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.freeze(sample)); // sample is now immutable (shallow)
console.log(Object.seal(sample)); // sample is now sealed
console.log(Object.isFrozen(sample)); // true/false
console.log(Object.isSealed(sample)); // true/false
console.log(Object.isExtensible(sample)); // true/false
console.log(Object.preventExtensions(sample)); // sample is not extensible
console.log(Object.getPrototypeOf(sample)); // usually Object.prototype
console.log(Object.setPrototypeOf(sample, null)); // sets prototype

// "Suitcases" (ways to define object types)
interface Suitcase {
  color: string;
  wheels: number;
}
type Bag = {
  material: string;
  size: 'small' | 'medium' | 'large';
};
const suitcase: Suitcase = { color: 'blue', wheels: 4 };
const bag: Bag = { material: 'leather', size: 'medium' };

// Tricky moments for interview

// 1. Object vs object type
let objType: object = { foo: 'bar' }; // valid
// let notObj: object = 42; // Error

// 2. Index signatures
const scores: { [key: string]: number } = { alice: 10, bob: 15 };

// 3. Optional properties
interface User {
  id: number;
  nickname?: string;
}
const user: User = { id: 1 };

// 4. Property existence
console.log('color' in suitcase); // true

// 5. Object.freeze is shallow
const deepObj = { nested: { x: 1 } };
Object.freeze(deepObj);
deepObj.nested.x = 2; // Allowed! Only top-level is frozen

// 6. Symbol keys are not returned by Object.keys
const sym = Symbol('secret');
const objWithSym = { [sym]: 'hidden', visible: 'shown' };
console.log(Object.keys(objWithSym)); // ['visible']
console.log(Object.getOwnPropertySymbols(objWithSym)); // [Symbol(secret)]

// 7. Prototype chain
const proto = { greet: () => 'hi' };
const child = Object.create(proto);
console.log(child.greet()); // "hi"
console.log(Object.getPrototypeOf(child) === proto); // true

// 8. Object literal vs class instance
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const animalObj = { name: 'dog' };
const animalInstance = new Animal('cat');
console.log(animalObj instanceof Animal); // false
console.log(animalInstance instanceof Animal); // true

// ...existing code...
