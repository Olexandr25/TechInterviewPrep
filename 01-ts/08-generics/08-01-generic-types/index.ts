function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello'); // output type will be 'string'
let numberOutput = identity<number>(42); // numberOutput type will be 'number'

console.log(output); // Hello
console.log(numberOutput); // 42

// Example of a generic class
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10)); // 15

// Example of a generic interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity2;
console.log(myIdentity(100)); // 100
