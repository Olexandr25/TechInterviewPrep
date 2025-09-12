class User {
  id: number;
  name: string;
  isAdmin: boolean;

  constructor(id: number, name: string, isAdmin: boolean = false) {
    this.id = id;
    this.name = name;
    this.isAdmin = isAdmin;
  }

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}

const user2 = new User(2, 'Anna', true);
console.log(user2.greet());
