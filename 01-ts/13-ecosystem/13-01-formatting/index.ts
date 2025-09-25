// Example of code formatting

// Unformatted code
function sum(a: number, b: number) {
  return a + b;
}

// ? Formatted code (Prettier/Biome)
// function sum(a: number, b: number): number {
//   return a + b;
// }

// Example of object formatting
const user = { id: 1, name: 'Alex', email: 'alex@email.com' };

// Formatted object
const formattedUser = {
  id: 1,
  name: 'Alex',
  email: 'alex@email.com',
};

console.log('Sum:', sum(5, 10)); // Output: 15
console.log('User:', formattedUser); // Output: { id: 1, name: "Alex", email: "
