// Template Literal Types in TypeScript

// Basic example of template literal type
type Name = `Mr. ${string}`;

let name1: Name = `Mr. Smith`; // ok
// let name2: Name = `Mrs. Smith`;  // error

// Example with specific values
type Greeting = `Hello, ${string}!`;
let greeting1: Greeting = 'Hello, World!'; // ok
let greeting2: Greeting = 'Hello, TypeScript!'; // ok
// let greeting3: Greeting = "Hi there!"; // error

// Combining with union types
type Size = 'small' | 'medium' | 'large';
type Color = 'red' | 'blue' | 'green';
type ButtonClass = `btn-${Size}-${Color}`;
// type ButtonClass = "btn-small-red" | "btn-small-blue" | "btn-small-green" |
//                    "btn-medium-red" | "btn-medium-blue" | "btn-medium-green" |
//                    "btn-large-red" | "btn-large-blue" | "btn-large-green"

let buttonClass: ButtonClass = 'btn-medium-blue'; // ok
// let buttonClass2: ButtonClass = "btn-xl-yellow"; // error

// Example with numbers
type Version = `v${number}.${number}.${number}`;
let version1: Version = 'v1.2.3'; // ok
let version2: Version = 'v10.0.1'; // ok
// let version3: Version = "version-1.0"; // error

// Using with keyof and Capitalize
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// type HandlerName = "onClick" | "onFocus" | "onBlur"

// Example with CSS selectors
type Element = 'div' | 'span' | 'p';
type Selector = `#${string}` | `.${string}` | Element;

let selector1: Selector = '#header'; // ok
let selector2: Selector = '.container'; // ok
let selector3: Selector = 'div'; // ok
// let selector4: Selector = "invalid"; // error (if not in union)

// Complex example with API endpoints
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type APIPath = '/users' | '/posts' | '/comments';
type APIEndpoint = `${HTTPMethod} ${APIPath}`;

let endpoint1: APIEndpoint = 'GET /users'; // ok
let endpoint2: APIEndpoint = 'POST /posts'; // ok
// let endpoint3: APIEndpoint = "PATCH /users"; // error

// Example with SQL-like queries
type TableName = 'users' | 'posts' | 'comments';
type SQLQuery = `SELECT * FROM ${TableName}`;

let query1: SQLQuery = 'SELECT * FROM users'; // ok
let query2: SQLQuery = 'SELECT * FROM posts'; // ok
// let query3: SQLQuery = "SELECT name FROM users"; // error
