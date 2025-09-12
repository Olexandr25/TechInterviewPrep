# Interface

**Interface** is a way to describe the structure of an object, specifying which properties and methods it has.

- Describes only the shape of data, not its implementation.
- Can contain optional properties (`?`).
- Can inherit from other interfaces.

```typescript
interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}
```

**When to use:**

- For typing objects, classes, functions.
- For describing the contract between parts of code.

**Advantages:**

- Flexibility, extensibility, readability.
