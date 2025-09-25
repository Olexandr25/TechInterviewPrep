// Type Predicates in TypeScript

// Predicate function to determine if value is a string
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Example usage of type predicate
function example(x: unknown) {
  if (isString(x)) {
    // Now x is guaranteed to be a string
    console.log(x.toUpperCase());
  } else {
    console.log(x);
  }
}

// Additional example for arrays
function isArray(value: unknown): value is any[] {
  return Array.isArray(value);
}

function process(value: unknown) {
  if (isArray(value)) {
    console.log('Array length:', value.length);
  } else {
    console.log('Not an array:', value);
  }
}

// Example for objects
function isUser(obj: any): obj is { id: number; name: string } {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.id === 'number' &&
    typeof obj.name === 'string'
  );
}

function printUser(user: unknown) {
  if (isUser(user)) {
    console.log(`User: ${user.name} (${user.id})`);
  } else {
    console.log('Not a user');
  }
}
