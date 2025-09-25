# Truthiness

`Truthiness` is a concept that describes whether a value is considered "truthy" or "falsy" in JavaScript. Any value can be used in conditions, logical operations, or if-statements, and it doesn't have to be a boolean.

## Example

```typescript
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}
```

## Falsy values

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy (even an empty array `[]` or object `{}`).

## How to use

- Use any value in if, while, or logical operations.
- Check truthiness for simple checks of "emptiness" or "existence".

## Common use cases

- Check if an array has elements: `if (arr.length)`
- Check if a variable is set: `if (value)`
- Check if a string is not empty: `if (str)`

## Good to know

- Not all values that seem "empty" are falsy (for example, `[]` and `{}` are truthy).
- TypeScript can't always guarantee a boolean type in such checks.

## Interview questions

- What values are falsy in JavaScript?
- How does truthiness work in if-statements?
- Is an empty array falsy?

## What to answer

- Truthiness is the ability of a value to behave as true or false in logical expressions.
- Falsy: false, 0, "", null, undefined, NaN. Everything else is truthy.
- This allows for short and convenient checks.

## Tricky points

- Empty array and object are truthy!
- You can accidentally miss checking for a specific value.
- TypeScript doesn't always warn about possible truthiness mistakes.
