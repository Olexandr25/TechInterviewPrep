// Example of using non-null assertion (!)

let name: string | null = null;

// The ! operator tells the compiler that name is definitely not null
// But if name is actually null, there will be a runtime error
// let nameLength = name!.length; // Runtime error

name = 'Olexandr';
let nameLength = name!.length; // 8
console.log(nameLength);

// Example of using type assertion via as

let someValue: any = 'Hello, TypeScript!';
let strLength: number = (someValue as string).length;

console.log(strLength); // 18

// Another example: casting any to number
let value: any = 42;
let numValue = value as number;
console.log(numValue + 8); // 50
