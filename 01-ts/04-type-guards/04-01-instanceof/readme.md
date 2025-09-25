# instanceof Operator

`instanceof` is an operator that checks if an object is an instance of a particular class. It is used for type narrowing in TypeScript.

## Example

```typescript
class Bird {
    fly() { ... }
}

const pet = new Bird();

if (pet instanceof Bird) {
    pet.fly();
}
```

## How to use

- Use `instanceof` to check the class type in if/else statements.
- After the check, TypeScript narrows the type to the corresponding class.

## Common use cases

- Type narrowing in functions with union types of classes.
- Checking an object's type before calling its methods.

## Good to know

- Works only with classes and constructor functions.
- Does not work with interfaces (only with classes).

## Interview questions

- What is instanceof used for?
- How is instanceof different from typeof?

## What to answer

- instanceof checks if an object is an instance of a class.
- It allows TypeScript to narrow the type to the class for safe method calls.

## Tricky points

- instanceof does not work with interfaces.
- Works only with classes and constructor functions.
