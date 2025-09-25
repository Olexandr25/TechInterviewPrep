// Example usage of Extract<T, U>

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // "a" | "b"
type T2 = Extract<string | number | (() => void), Function>; // () => void

// Practical examples
type Status = 'pending' | 'approved' | 'rejected' | 'cancelled';
type FinalStatus = Extract<Status, 'approved' | 'rejected'>; // "approved" | "rejected"

const result: FinalStatus = 'approved'; // OK
// const invalid: FinalStatus = "pending"; // Error

// Example with user roles
type UserRole = 'admin' | 'user' | 'guest' | 'moderator';
type AdminRoles = Extract<UserRole, 'admin' | 'moderator'>; // "admin" | "moderator"

function assignAdminRole(role: AdminRoles) {
  console.log(`Assigning admin role: ${role}`);
}

assignAdminRole('admin'); // OK
// assignAdminRole("user"); // Error

// Example with event types
type MouseEvent = 'click' | 'dblclick' | 'mousedown' | 'mouseup';
type KeyboardEvent = 'keydown' | 'keyup' | 'keypress';
type AllEvents = MouseEvent | KeyboardEvent;

type ClickEvents = Extract<AllEvents, 'click' | 'dblclick'>; // "click" | "dblclick"

// Example with primitive types
type MixedTypes = string | number | boolean | Date | RegExp;
type PrimitiveTypes = Extract<MixedTypes, string | number | boolean>; // string | number | boolean

// Example with functions
type Functions = (() => void) | ((x: number) => string) | string | number;
type OnlyFunctions = Extract<Functions, Function>; // (() => void) | ((x: number) => string)

console.log('T0 type:', 'a' as T0); // type demonstration
