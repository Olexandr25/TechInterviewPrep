let someValue: any = 'Hello, TypeScript!';
let strLength: number = (someValue as string).length;
console.log(strLength); // 18

function handleInput(input: unknown) {
  const str = input as string;
  console.log(str.toUpperCase());
}

handleInput('test'); // TEST

// handleInput(42); // Runtime error: input.toUpperCase is not a function

// To avoid runtime errors, we can use type guards
function safeHandleInput(input: unknown) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else {
    console.log('Input is not a string');
  }
}

safeHandleInput('hello'); // HELLO
safeHandleInput(42); // Input is not a string

// Example with DOM manipulation
const inputElement = document.getElementById('myInput') as HTMLInputElement;
if (inputElement) {
  inputElement.value = 'TypeScript is awesome!';
  console.log(inputElement.value);
}

// Note: Avoid overusing 'as any' as it bypasses type checking
let value: any = 42;
let numValue = value as number;
console.log(numValue + 8); // 50
// Using 'as unknown' is safer than 'as any'
let unknownValue: unknown = 'A string';
let strValue = unknownValue as string;
console.log(strValue.toUpperCase()); // A STRING
// let numValue2 = unknownValue as number; // Error: Conversion of type 'unknown' to type 'number' may be a mistake
// console.log(numValue2 + 8); // Uncommenting this line will cause a compile-time error
// This demonstrates the use of type assertions in TypeScript while highlighting the importance of type safety.
// Always prefer type guards and proper type definitions over excessive use of 'as any'.
