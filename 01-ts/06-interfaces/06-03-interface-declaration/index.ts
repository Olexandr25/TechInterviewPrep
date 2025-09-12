interface Person {
  firstName: string;
  lastName: string;
  age?: number | undefined;

  getFullName(): string;
}

const personObj: Person = {
  firstName: 'Olexandr',
  lastName: 'Voichyshyn',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

class User implements Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age?: number
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User('Anna', 'Petrenko', 28);

console.log(personObj.getFullName()); // Olexandr Voichyshyn
console.log(user.getFullName()); // Anna Petrenko
