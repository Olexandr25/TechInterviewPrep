# Access Modifiers

`Access modifiers` are keywords that define the visibility and accessibility level of class properties and methods in TypeScript. There are three access modifiers:

- **public** — properties and methods are accessible everywhere (default).
- **private** — accessible only within the same class.
- **protected** — accessible within the class and its subclasses.

## Example

```typescript
class Person {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class Employee extends Person {
  getEmployeeAddress(): string {
    return this.address; // OK
  }
}

const person = new Person('Alex', 30, 'Kyiv');
console.log(person.name); // OK
// console.log(person.age); // Error
// console.log(person.address); // Error
```

## How to use

- Add the modifier before a property or method: `public`, `private`, or `protected`.
- Use `private` for hidden data, `protected` for subclass access, `public` for open data.

## Common use cases

- Data encapsulation in classes.
- Protecting internal class logic.
- Granting property access only to subclasses.

## Good to know

- By default, all properties and methods are `public`.
- `private` and `protected` improve code safety and maintainability.
- `protected` allows subclasses to access properties, but not external code.

## Rarely used

- In simple classes where all properties should be open.
- If there is no need to hide data or logic.

## Interview questions

- What access modifiers exist in TypeScript?
- What is the difference between `private` and `protected`?
- How do you ensure encapsulation in classes?

## What to answer

- TypeScript has three modifiers: `public`, `private`, `protected`.
- `private` is accessible only in the class, `protected` — in the class and subclasses, `public` — everywhere.
- They help encapsulate data and logic.

## Tricky points

- `private` properties are not accessible even in subclasses.
- `protected` properties are inaccessible to external code, but accessible to subclasses.
- Modifiers work only at the TypeScript type level; in JS, they do not protect data.
