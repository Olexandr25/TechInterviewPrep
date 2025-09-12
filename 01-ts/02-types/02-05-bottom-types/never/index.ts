// TypeScript 'never' Type Examples

// Function that always throws (never returns)
function alwaysThrows(): never {
  throw new Error('This function never returns!');
}

// Function with infinite loop (never returns)
function endlessLoop(): never {
  while (true) {}
}

// never in exhaustive checks (discriminated unions)
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    case 'square':
      return shape.side * shape.side;
    default:
      // TypeScript ensures only 'never' can reach here
      return assertNever(shape);
  }
}

function assertNever(x: never): never {
  throw new Error('Unexpected value: ' + JSON.stringify(x));
}

// never vs void
function returnsVoid(): void {
  // returns nothing, but does not throw or loop forever
}

function returnsNever(): never {
  throw new Error('Never returns');
}

// Tricky moments
// - never is not assignable to any other type except never
// - Used for unreachable code and exhaustive checks
// - TypeScript infers never for unreachable code paths

// Example: Unreachable code
function unreachable(): never {
  throw new Error('Unreachable code');
  // Any code here is unreachable and inferred as never
}
