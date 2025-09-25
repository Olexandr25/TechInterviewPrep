# Constructor Params

`Constructor parameters` in TypeScript can be declared with access modifiers (`public`, `private`, `protected`) and types. Such parameters automatically become class properties with the corresponding access level.

## Example

```typescript
class Example {
  constructor(
    private name: string,
    public age: number
  ) {}
}

const ex = new Example('Alex', 30);
console.log(ex.age); // OK
// console.log(ex.name);  // Error: Property 'name' is private
```

## How to use

- Add an access modifier to a constructor parameter to automatically create a class property.
- Use types for constructor parameters to type class properties.

## Common use cases

- Reducing code when creating classes.
- Automatically creating properties with the required access level.
- Data encapsulation using `private` and `protected`.

## Good to know

- Without a modifier, a parameter does not become a class property.
- You can combine modifiers and types for different parameters.
- Property access depends on the modifier.

## Rarely used

- When you need to explicitly declare class properties separately.
- In classes where the constructor does not take parameters.

## Interview questions

- How do constructor parameters with access modifiers work?
- What is the difference between a parameter with a modifier and a regular parameter?
- How do you encapsulate data through the constructor?

## What to answer

- Constructor parameters with modifiers automatically become class properties.
- Property access is determined by the modifier (`public`, `private`, `protected`).
- This shortens code and increases encapsulation.

## Tricky points

- Without a modifier, a parameter does not become a class property.
- `private` and `protected` properties are not accessible from outside.
- You can combine different modifiers for different parameters.
