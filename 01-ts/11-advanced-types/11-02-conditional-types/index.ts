// Conditional Types in TypeScript

// Basic example of a conditional type
type Extends<T, U> = T extends U ? T : U;

type A = Extends<string, any>; // type A is 'string'
type B = Extends<any, string>; // type B is 'string'

// Example: checking for array
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>; // false

// Example with infer to extract type
type GetArrayType<T> = T extends (infer U)[] ? U : never;

type StringType = GetArrayType<string[]>; // string
type NumberType = GetArrayType<number[]>; // number
type NeverType = GetArrayType<string>; // never
type StringNumberType = GetArrayType<string | number[]>; // string | number

// Example with functions
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type FuncReturn1 = GetReturnType<() => string>; // string
type FuncReturn2 = GetReturnType<() => number>; // number
type FuncReturn3 = GetReturnType<string>; // never

// Example with objects
type IsObject<T> = T extends object ? true : false;

type ObjTest1 = IsObject<{ name: string }>; // true
type ObjTest2 = IsObject<string>; // false

// Complex example with nested conditions
type DeepReadonly<T> = T extends object
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T;

interface User {
  name: string;
  address: {
    city: string;
    country: string;
  };
}

type ReadonlyUser = DeepReadonly<User>;
// type ReadonlyUser = {
//   readonly name: string;
//   readonly address: {
//     readonly city: string;
//     readonly country: string;
//   };
// }
