# Class

A **class** is a template for creating objects with properties and methods.

- Can contain a constructor, properties, and methods.
- Supports inheritance and encapsulation.

```typescript
class User {
  id: number;
  name: string;
  isAdmin: boolean;

  constructor(id: number, name: string, isAdmin: boolean = false) {
    this.id = id;
    this.name = name;
    this.isAdmin = isAdmin;
  }

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}
```

**When to use:**

- For creating complex objects with behavior.
- For OOP approach (inheritance, encapsulation).

**Advantages:**

- Structure, code reuse, scalability.
