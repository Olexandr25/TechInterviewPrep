// Example of using Partial<T>

interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    ...user,
  };
}

const newUser = createUser({ name: 'Jane Doe' });

console.log(newUser);
// Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }

// Example with updating a user
function updateUser(id: number, updates: Partial<User>): User {
  const existingUser = getUserById(id); // let's assume this function exists
  return { ...existingUser, ...updates };
}

function getUserById(id: number): User {
  // Stub for example
  return { name: 'Old Name', age: 25, email: 'old@example.com' };
}

// You can pass only part of the properties
const updatedUser = updateUser(1, { age: 31 });
console.log(updatedUser);
// Output: { name: 'Old Name', age: 31, email: 'old@example.com' }
