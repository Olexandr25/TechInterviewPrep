# TypeScript `never` type

## Examples

```typescript
function throwError(msg: string): never {
	throw new Error(msg);
}

function infinite(): never {
	while (true) {}
}
```

## All methods

- Used for functions that never return (throws or infinite loop)
- Useful for exhaustive checks in switch/case
- Only assignable to never itself

## How it works

- Represents unreachable code
- Used for functions that always throw or never finish
- Helps with type safety and exhaustive checks

## Tricky moments for interview

- `never` is not the same as `void` (`void` means returns nothing, `never` means never returns)
- Useful for exhaustive type checking in discriminated unions
- If a function has unreachable end, TypeScript infers `never`
- Rarely used directly, but important for type safety
