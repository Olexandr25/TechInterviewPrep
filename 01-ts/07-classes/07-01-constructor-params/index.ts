// Constructor parameters with access modifiers in TypeScript

class Example {
  constructor(
    private name: string,
    public age: number
  ) {}

  getName(): string {
    return this.name; // accessible only inside the class
  }
}

const ex = new Example('Alex', 30);
console.log(ex.age); // OK: 30
// console.log(ex.name);  // Error: Property 'name' is private
console.log(ex.getName()); // OK: Alex
