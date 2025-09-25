// Namespaces in TypeScript

// Basic example of a namespace
namespace MyNamespace {
  export function doSomething() {
    console.log('Doing something...');
  }

  export const version = '1.0.0';

  // Private function (not exported)
  function privateFunction() {
    console.log('This is private');
  }

  export function usePrivate() {
    privateFunction(); // can be used inside the namespace
  }
}

// Using the namespace
MyNamespace.doSomething(); // Output: "Doing something..."
console.log(MyNamespace.version); // Output: "1.0.0"
MyNamespace.usePrivate(); // Output: "This is private"

// Nested namespaces
namespace Utilities {
  export namespace StringUtils {
    export function capitalize(str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    export function reverse(str: string): string {
      return str.split('').reverse().join('');
    }
  }

  export namespace MathUtils {
    export function add(a: number, b: number): number {
      return a + b;
    }

    export function multiply(a: number, b: number): number {
      return a * b;
    }
  }
}

// Using nested namespaces
console.log(Utilities.StringUtils.capitalize('hello')); // "Hello"
console.log(Utilities.StringUtils.reverse('world')); // "dlrow"
console.log(Utilities.MathUtils.add(5, 3)); // 8

// Namespace with interfaces and classes
namespace Models {
  export interface User {
    id: number;
    name: string;
    email: string;
  }

  export class UserService {
    private users: User[] = [];

    addUser(user: User): void {
      this.users.push(user);
    }

    getUser(id: number): User | undefined {
      return this.users.find((user) => user.id === id);
    }
  }

  export enum UserRole {
    Admin = 'admin',
    User = 'user',
    Guest = 'guest',
  }
}

// Using namespace with classes and interfaces
const userService = new Models.UserService();
const newUser: Models.User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

userService.addUser(newUser);
console.log(userService.getUser(1)); // { id: 1, name: "Alice", email: "alice@example.com" }
console.log(Models.UserRole.Admin); // "admin"

// Extending an existing namespace
namespace MyNamespace {
  export function anotherFunction() {
    console.log('Another function');
  }

  export const newConstant = 42;
}

// Now MyNamespace has both functions
MyNamespace.doSomething(); // "Doing something..."
MyNamespace.anotherFunction(); // "Another function"
console.log(MyNamespace.newConstant); // 42
