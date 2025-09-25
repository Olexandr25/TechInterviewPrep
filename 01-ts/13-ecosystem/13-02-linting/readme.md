# Linting

`ESLint` is a tool for checking code quality and enforcing style standards. It allows you to impose a set of rules to avoid errors, poor code, and ensure a consistent style across the project.

## Example

```typescript
// Not recommended (ESLint will warn)
var x = 10;

// Recommended (ESLint: use const/let)
const y = 20;
```

## How to use

- Install ESLint as a dev dependency:
  `npm install --save-dev eslint`
- Initialize configuration:
  `npx eslint --init`
- Add rules in `.eslintrc.json` or `.eslintrc.js`.
- Run linting:
  `npx eslint .`

## Common use cases

- Checking code for errors and issues.
- Enforcing team style standards.
- Automatically fixing simple errors (`npx eslint . --fix`).

## Good to know

- ESLint supports plugins for TypeScript, React, Node.js, etc.
- You can customize rules for your project needs.
- Integrates with editors for live linting.

## Rarely used

- In small projects or scripts.
- If the team has no code style requirements.

## Interview questions

- What is ESLint used for?
- How do you configure rules for TypeScript?
- How do you automatically fix ESLint errors?

## What to answer

- ESLint helps maintain code quality and style.
- You can set custom rules or use standard ones.
- Automatic error fixing simplifies teamwork.

## Tricky points

- Some rules may conflict with each other.
- You need to set up integration with TypeScript using the `@typescript-eslint` plugin.
- ESLint doesn't fix all errors; some must be fixed manually.
