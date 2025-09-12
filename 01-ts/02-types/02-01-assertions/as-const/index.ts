const colors = ['red', 'green', 'blue'] as const;
// Type: readonly ["red", "green", "blue"]

// Example with an object
const point = { x: 10, y: 20 } as const;
// Type: { readonly x: 10; readonly y: 20 }

function printColor(color: (typeof colors)[number]) {
  console.log(color);
}

printColor('red'); // OK
// printColor('yellow'); // Error: Argument of type '"yellow"' is not assignable

printColor(colors[0]); // OK, colors[0] is 'red'
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property

console.log('Colors:', colors);
console.log('Point:', point);
// Output: Colors: [ 'red', 'green', 'blue' ]
// Output: Point: { x: 10, y: 20 }

// Example with a function
function getStatus(status: 'success' | 'error' | 'loading') {
  return `Status is ${status}`;
}

console.log(getStatus('success')); // OK
// console.log(getStatus('pending')); // Error: Argument of type '"pending"' is not assignable

const statuses = ['success', 'error', 'loading'] as const;
type StatusType = (typeof statuses)[number];

function getStatusImproved(status: StatusType) {
  return `Status is ${status}`;
}

console.log(getStatusImproved('error')); // OK
// console.log(getStatusImproved('pending')); // Error: Argument of type '"pending"' is not assignable

// Example with an array of objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
] as const;
// Type: readonly [{ readonly id: 1; readonly name: "Alice"; }, { readonly id: 2; readonly name: "Bob"; }]

console.log('Users:', users);
// Output: Users: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]

// Example with nested objects
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  features: {
    darkMode: true,
    multiLanguage: false,
  },
} as const;
// Type: { readonly apiUrl: "https://api.example.com"; readonly timeout: 5000; readonly features: { readonly darkMode: true; readonly multiLanguage: false; }; }

console.log('Config:', config);
// Output: Config: { apiUrl: 'https://api.example.com', timeout: 5000, features: { darkMode: true, multiLanguage: false } }

// Example with a function returning as const
function createPoint(x: number, y: number) {
  return { x, y } as const;
}

const p = createPoint(5, 10);
// Type: { readonly x: 5; readonly y: 10; }

console.log('Point from function:', p);
// Output: Point from function: { x: 5, y: 10 }

// Example with a tuple
const tuple = [1, 'two', true] as const;
// Type: readonly [1, "two", true]

console.log('Tuple:', tuple);
// Output: Tuple: [ 1, 'two', true ]

// Example with an array of numbers
const numbers = [10, 20, 30] as const;
// Type: readonly [10, 20, 30]

console.log('Numbers:', numbers);
// Output: Numbers: [ 10, 20, 30 ]

// Example with boolean values
const flags = [true, false, true] as const;
// Type: readonly [true, false, true]

console.log('Flags:', flags);
// Output: Flags: [ true, false, true ]

// Example with strings
const messages = ['Hello', 'World'] as const;
// Type: readonly ["Hello", "World"]

console.log('Messages:', messages);
// Output: Messages: [ 'Hello', 'World' ]

// Example with mixed types
const mixed = [1, 'two', { three: 3 }] as const;
// Type: readonly [1, "two", { readonly three: 3; }]

console.log('Mixed:', mixed);
// Output: Mixed: [ 1, 'two', { three: 3 } ]

// Example with a function accepting a tuple
function logTuple(t: readonly [number, string, boolean]) {
  console.log(`Number: ${t[0]}, String: ${t[1]}, Boolean: ${t[2]}`);
}

logTuple([42, 'Answer', true] as const);
// Output: Number: 42, String: Answer, Boolean: true

// Example with an array of statuses
const responseStatuses = ['pending', 'fulfilled', 'rejected'] as const;
type ResponseStatus = (typeof responseStatuses)[number];

function handleResponse(status: ResponseStatus) {
  switch (status) {
    case 'pending':
      return 'Response is pending...';
    case 'fulfilled':
      return 'Response fulfilled successfully!';
    case 'rejected':
      return 'Response was rejected.';
  }
}

console.log(handleResponse('fulfilled')); // OK
// console.log(handleResponse('unknown')); // Error: Argument of type '"unknown"' is not assignable

// Example with a settings object
const settings = {
  theme: 'light',
  notifications: true,
  autoSave: false,
} as const;
// Type: { readonly theme: "light"; readonly notifications: true; readonly autoSave: false; }

console.log('Settings:', settings);
// Output: Settings: { theme: 'light', notifications: true, autoSave: false }

// Example with an array of user roles
const roles = ['admin', 'editor', 'viewer'] as const;
type Role = (typeof roles)[number];

function assignRole(role: Role) {
  return `Assigned role: ${role}`;
}

console.log(assignRole('editor')); // OK
// console.log(assignRole('guest')); // Error: Argument of type '"guest"' is not assignable
