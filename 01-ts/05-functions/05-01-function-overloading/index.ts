// Declaration of signatures (overloads)
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// Function implementation
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(1, 2)); // 3
console.log(add('Hello', ' World')); // "Hello World"

// Another example: overloading for different parameter types
function greet(person: string): string;
function greet(persons: string[]): string;
function greet(personOrPersons: string | string[]): string {
  if (Array.isArray(personOrPersons)) {
    return 'Hello, ' + personOrPersons.join(' and ') + '!';
  }
  return 'Hello, ' + personOrPersons + '!';
}

console.log(greet('Olexandr')); // Hello, Olexandr!
console.log(greet(['Olexandr', 'Anna', 'Maria'])); // Hello, Olexandr and Anna and Maria!
