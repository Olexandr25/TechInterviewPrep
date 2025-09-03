# TypeScript Interview Prep

TypeScript is a statically-typed programming language that is a superset of JavaScript. It was developed and is maintained by Microsoft. TypeScript was created to address the challenges of building large-scale JavaScript applications and adds optional type annotations, classes, interfaces, and other features to the language.

The main benefits of using TypeScript include:

- **Type Safety**
- **Improved Tooling**
- **Improved Maintainability**
- **Backwards Compatibility**

## Getting Started

### 1. Initialize TypeScript in your project

Open a terminal in the root of your project folder and run:

```sh
npm init -y
npm install typescript --save-dev
npx tsc --init
```

This will create a `tsconfig.json` file for TypeScript configuration.

### 2. Project Structure Example

```
name-folder/
├── file.md
├── file.ts
└── examples/
    └── example_name.ts
```

### 3. Running TypeScript Code

To compile a TypeScript file (e.g., `file.ts`) to JavaScript, run:

```sh
npx tsc file.ts
```

This will generate a `file.js` file. To run the compiled JavaScript:

```sh
node file.js
```

Or, to run TypeScript directly (without compiling) using ts-node (install if needed):

```sh
npm install -D ts-node
npx ts-node file.ts
```

### 4. Learn More

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Playground](https://www.typescriptlang.org/play)

---

Happy coding and good luck with your interview prep!
# TechInterviewPrep
