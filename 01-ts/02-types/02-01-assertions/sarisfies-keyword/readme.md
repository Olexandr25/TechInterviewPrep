# Satisfies Keyword

`satisfies` is an operator in TypeScript that checks if the type of an expression matches a specific type, but does not change the actual type of the expression.

## Example

```typescript
type User = { id: number; name: string; isAdmin?: boolean };
const user = {
  id: 1,
  name: 'Olexandr',
  isAdmin: true,
} satisfies User;
```

## When to Use

- When you need to check type compatibility but want to preserve the exact type of the value.
- For validating the structure of complex objects, configs, arrays.

## Typical Use Cases

- For typing constants, configurations, enum-like structures.
- When it's important to keep the literal type but check interface compatibility.

## Good to Know

- `satisfies` does not change the value's type, it only checks type compatibility.
- Helps avoid loss of type precision compared to type assertion.

## Rarely Used

- In regular variables where maximum type precision is not required.
- For simple types where regular typing is sufficient.

## Common Interview Questions

- What is the purpose of the `satisfies` operator?
- What is the difference between `satisfies` and type assertion (`as`)?
- How do you preserve the exact type of a value when checking its type?

### Sample Answers

- The `satisfies` operator ensures that a value matches a specific type, but keeps the value's original type unchanged.
- It is useful for maintaining literal types and type precision, especially in constants or configuration objects.
- Unlike type assertion (`as`), which forces a value to a type and may lose type details, `satisfies` only checks compatibility without altering the value's type.
- This approach helps catch type errors at compile time while retaining accurate type information for autocompletion and further type checks.

## Tricky Points

- If the structure does not match the type, a compile-time error will occur.
- The value's type remains precise, which is useful for autocomplete and type checks.
