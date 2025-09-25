// Access modifiers in TypeScript

class Person {
  public name: string; // accessible everywhere
  private age: number; // accessible only inside the class
  protected address: string; // accessible in the class and subclasses

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public getName(): string {
    return this.name;
  }

  private getAge(): number {
    return this.age;
  }

  protected getAddress(): string {
    return this.address;
  }
}

class Employee extends Person {
  getEmployeeAddress(): string {
    // Can access protected property address
    return this.address;
  }
}

const person = new Person('Alex', 30, 'Kyiv');
console.log(person.name); // OK
// console.log(person.age); // Error: Property 'age' is private
// console.log(person.address); // Error: Property 'address' is protected

const employee = new Employee('Olga', 25, 'Lviv');
console.log(employee.getEmployeeAddress()); // OK
