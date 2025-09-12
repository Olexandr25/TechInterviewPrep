type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

const user = {
  id: 1,
  name: 'Olexandr',
  isAdmin: true,
} satisfies User;

// The type of user remains exact, but TypeScript checks for compatibility with the User type

// Example with an array
const numbers = [1, 2, 3] satisfies number[];
const mixed = [1, 'two', 3] satisfies (number | string)[];

console.log(user); // { id: 1, name: 'Olexandr', isAdmin: true }
console.log(numbers); // [1, 2, 3]
console.log(mixed); // [1, 'two', 3]
