interface User {
  id: number;
  name: string;
  isAdmin?: boolean;
}

const user1: User = {
  id: 1,
  name: 'Olexandr',
};

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

console.log(greet(user1));
