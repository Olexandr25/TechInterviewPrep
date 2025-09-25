// External Modules in TypeScript

// Example import from myModule.ts
import { doSomething, version } from './myModule';
import defaultFunction from './myModule';

// Here are just demonstration exports for example
export const PI = 3.14159;

export function calculateArea(radius: number): number {
  return PI * radius * radius;
}

export function calculateCircumference(radius: number): number {
  return 2 * PI * radius;
}

const mathUtils = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
};

export { mathUtils };

// Re-export from another module
export { doSomething as doSomethingElse } from './myModule';

// Module types
export type UserRole = 'admin' | 'user' | 'guest';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export type UserWithRole = User & {
  role: UserRole;
};

console.log('=== Testing myModule ===');
doSomething(); // Output: "Doing something..."
console.log(version); // Output: "1.0.0"
defaultFunction(); // Output: "Default function"

// Example usage of UserService
import { User, UserService, DEFAULT_USER_ROLE } from './userService';

const userService = new UserService();
const newUser: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

userService.addUser(newUser);
console.log(userService.getUser(1));
console.log(DEFAULT_USER_ROLE);

// Demonstration of different export and import methods
console.log('=== Utils Demo ===');
console.log('PI:', PI);
console.log('Area of radius 5:', calculateArea(5));
console.log('Math utils add 2+3:', mathUtils.add(2, 3));

// Example with dynamic import
async function loadModule() {
  const { doSomething } = await import('./myModule');
  doSomething();
}

loadModule();
