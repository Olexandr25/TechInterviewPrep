// Literal Types in TypeScript

// Numeric literal types
type Age = 42;
let age: Age = 42; // ok
// let age2: Age = 43; // error

// String literal types
type Direction = 'up' | 'down' | 'left' | 'right';
let move: Direction = 'up'; // ok
// let move2: Direction = "forward"; // error

// Boolean literal types
type IsTrue = true;
let flag: IsTrue = true; // ok
// let flag2: IsTrue = false; // error

// Combining literal types
type Status = 'loading' | 'success' | 'error';
type Code = 200 | 404 | 500;

function handleResponse(status: Status, code: Code) {
  if (status === 'success' && code === 200) {
    console.log('Success!');
  }
}

handleResponse('success', 200); // ok
// handleResponse("pending", 201); // error

// Literal types with objects
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface Button {
  size: ButtonSize;
  variant: ButtonVariant;
  disabled: boolean;
}

const button: Button = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

// Template literal types (TypeScript 4.1+)
type Greeting = `Hello, ${string}!`;
let greeting1: Greeting = 'Hello, World!'; // ok
let greeting2: Greeting = 'Hello, TypeScript!'; // ok
// let greeting3: Greeting = "Hi there!"; // error

// Combining with keyof
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// type HandlerName = "onClick" | "onFocus" | "onBlur"
