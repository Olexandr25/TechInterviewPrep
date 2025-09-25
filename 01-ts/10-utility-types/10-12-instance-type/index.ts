// InstanceType creates a type consisting of the instance type of a constructor Type.

// Example 1: Basic usage with a class
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// T0 is of type C

const obj: T0 = new C();
console.log(obj.x, obj.y); // 0 0

// Example 2: Using 'any' as the constructor type
type T1 = InstanceType<any>;
// T1 is of type any

// Example 3: Using 'never' as the constructor type
type T2 = InstanceType<never>;
// T2 is of type never

// Example 4: Using a non-constructor type (string)
type T3 = InstanceType<string>;
// Error: Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

// Example 5: Using Function type (not a constructor)
type T4 = InstanceType<Function>;
// Error: Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.

// Example 6: With a constructor function
function MyClass(this: any) {
  this.a = 1;
}
type T5 = InstanceType<typeof MyClass>;
// T5 is of type MyClass

// Example 7: With an abstract class
abstract class Animal {
  abstract speak(): void;
}
type T6 = InstanceType<typeof Animal>;
// T6 is of type Animal

// Example 8: With a generic class
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}
type T7 = InstanceType<typeof Box>;
// T7 is of type Box<any>
