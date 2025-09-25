interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// Cannot assign to 'title' because it is a read-only property.
// todo.title = 'Hello'; // Compilation error

// Another example with a more complex object
interface User {
  id: number;
  name: string;
  email: string;
}

const user: Readonly<User> = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

// user.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property

// Example with an array
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'

// Function that returns a readonly object
function createConfig(): Readonly<{ apiUrl: string; timeout: number }> {
  return {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
  };
}

const config = createConfig();
// config.apiUrl = "https://api.test.com"; // Compilation error

console.log(todo); // { title: 'Delete inactive users' }
console.log(user); // { id: 1, name: 'John Doe', email: 'john@example.com' }
