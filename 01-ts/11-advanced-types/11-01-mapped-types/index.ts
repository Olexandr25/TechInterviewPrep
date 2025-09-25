// Mapped Types in TypeScript

// Example with Readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

let obj = { x: 10, y: 20 };
let readonlyObj: Readonly<typeof obj> = obj;
// readonlyObj.x = 15; // Error: Cannot assign to 'x' because it is a read-only property

// Example with Optional (all properties become optional)
type Optional<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Optional<User>;
// type PartialUser = {
//   id?: number;
//   name?: string;
//   email?: string;
// }

// Example with type transformation
type Stringify<T> = {
  [P in keyof T]: string;
};

type StringifiedUser = Stringify<User>;
// type StringifiedUser = {
//   id: string;
//   name: string;
//   email: string;
// }

// Example with conditional types
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type NullableUser = Nullable<User>;
// type NullableUser = {
//   id: number | null;
//   name: string | null;
//   email: string | null;
// }
