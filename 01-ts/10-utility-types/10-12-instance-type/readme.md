# InstanceType

`InstanceType<Type>` is a TypeScript utility type that lets you get the type of an instance created by the constructor `Type`. It automatically infers the type of the object created via `new`.

## Example

```typescript
class User {
  id = 1;
  name = 'Alex';
}
type UserInstance = InstanceType<typeof User>; // User
```

## How to use

- Pass the constructor type (class or constructor function) using `typeof` to `InstanceType` to get its instance type.
- Useful for typing objects created via constructors, especially when working with classes.

## Common use cases

- Typing class instances for use in other types or interfaces.
- Inferring types for factories, DI containers, class testing.
- Automating typing when creating complex structures.

## Good to know

- Works only with constructors that have the signature `new (...args: any) => any`.
- Passing a non-constructor will result in a type error.
- For generic constructors, the result type may be `unknown`.

## Rarely used

- For types that are not constructors, or when the instance type is not important.
- In simple projects where types are explicitly defined.

## Interview questions

- How do you get the type of an instance created by a constructor?
- What is `InstanceType` used for?
- What are the limitations of this utility type?

## What to answer

- `InstanceType` lets you get the type of an instance created by a constructor.
- It's useful for automatic typing and avoiding type duplication.
- Works only with constructors; otherwise, you'll get an error.

## Tricky points

- Doesn't work with the `Function` type or primitive types (like `string`).
- For generic constructors, the result type may be `unknown`.
- If the constructor returns a union type, `InstanceType` will return that union.
