# Formatting

`Prettier` is a tool for automatic code formatting that supports JavaScript, HTML, CSS, YAML, Markdown, GraphQL, and more. The main advantage of Prettier is ending debates about code style, since all files are formatted consistently. An alternative is `Biome`, which works faster and also performs linting.

## Example

```typescript
// Unformatted code
function sum(a: number, b: number) {
  return a + b;
}

// Formatted code (Prettier/Biome)
function sum(a: number, b: number): number {
  return a + b;
}
```

## How to use

- Install Prettier or Biome as a dev dependency:
  `npm install --save-dev prettier`
  or
  `npm install --save-dev @biomejs/biome`
- Add a configuration file: `.prettierrc` or `biome.json`.
- Use the command `npx prettier --write .` or `npx biome format .` to format all files.

## Common use cases

- Automatic code formatting before committing.
- Maintaining a consistent style within a team.
- Integration with editors (VS Code, WebStorm).

## Good to know

- Prettier does not check code quality, only formatting.
- Biome also performs linting (style and error checking).
- You can set up auto-formatting on file save.

## Rarely used

- In small projects or scripts.
- If the team has no code style requirements.

## Interview questions

- What is Prettier used for?
- How is Biome different from Prettier?
- How to set up auto-formatting in VS Code?

## What to answer

- Prettier ensures a consistent code style in the project.
- Biome is a faster alternative that also performs linting.
- Formatting helps avoid debates about style.

## Tricky points

- Prettier does not fix logical errors, only formatting.
- Biome може змінити не тільки формат, а й знайти помилки.
- Деякі правила можна налаштувати у конфігураційному файлі.
