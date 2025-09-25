// Example of linting errors and their fixes

// Not recommended (ESLint will give a warning)
var x = 10;

// Recommended (ESLint: use const/let)
const y = 20;

// Not recommended: type not used
function greetNot(name: string) {
  return 'Hello, ' + name;
}

// Recommended: parameter typing
function greet(name: string): string {
  return 'Hello, ' + name;
}
