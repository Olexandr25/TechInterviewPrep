let someValue: any = 'Hello, TypeScript!';
let strLength: number = (someValue as string).length;

console.log(strLength); // 18

let value: any = 42;
let numValue = value as number;
console.log(numValue + 8); // 50
