# Record

`Record<K, T>` is a utility type in TypeScript that creates an object type with keys of type `K` and values of type `T`. It's useful for creating dictionaries or map-like structures.

## Example

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};
```

## When to use

- For creating dictionary objects with fixed keys.
- When you need to ensure that all keys from a union type are present in the object.

## Common use cases

- Mapping enum values to configurations.
- Creating lookup tables or translation dictionaries.
- Working with settings, themes, statuses.

## Good to know

- `K` should be a type that can be used as an object key (`string | number | symbol`).
- Equivalent to `{ [P in K]: T }`.
- Guarantees the presence of all keys from type `K`.

## Rarely used features

- `Record` with computed property names.
- Combining with other utility types.

## Interview questions

- What does `Record<K, T>` do?
- When should you use `Record` instead of a regular object?
- How would you implement your own `Record`?

### Sample answers

- `Record<K, T>` creates an object type with keys `K` and values `T`.
- Use it when you need to guarantee all keys from a union type are present.
- It's implemented using mapped types: `{ [P in K]: T }`.

## Tricky points

- `Record` requires ALL keys from type `K` to be present in the object.
- If `K` is `string`, the object can have any string keys.
- You can't add keys that aren't part of type `K`.
- `Record<string, any>` is equivalent to `{ [key: string]: any }`.
