# Constructor Overloading

`Constructor overloading` is the ability to define multiple constructor signatures with different parameters in a single class. In TypeScript, this is achieved by overloading signatures, but the implementation of the constructor is always a single function.

## Example

```typescript
class Point {
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    if (typeof xs === 'number' && typeof y === 'string') {
      // x: number, y: string
      console.log(`Number: ${xs}, String: ${y}`);
    } else if (typeof xs === 'string' && y === undefined) {
      // s: string
      console.log(`String: ${xs}`);
    }
  }
}

const p1 = new Point(10, 'hello'); // Number: 10, String: hello
const p2 = new Point('world'); // String: world
```

## How to use

- Declare multiple constructor signatures above the implementation.
- Implement a single constructor function that handles all parameter variants.

## Common use cases

- When you need to create class objects with different sets of parameters.
- For convenient and flexible class APIs when creating instances.

## Good to know

- Only signatures are overloaded; the constructor implementation is always one.
- All signatures must be declared before the constructor implementation.
- You need to manually check parameter types inside the constructor.

## Rarely used

- In simple classes where the constructor has only one set of parameters.
- If the object creation logic does not require flexibility.

## Interview questions

- How do you implement constructor overloading in TypeScript?
- Can you have multiple constructor implementations?
- What are the limitations of constructor overloading?

## What to answer

- In TypeScript, only constructor signatures can be overloaded; the implementation is always one.
- Type checking of parameters is done manually.
- This is useful for creating flexible classes.

## Tricky points

- If you don't check parameter types, you may get runtime errors.
- Overloading works only at the type level, not at runtime.
