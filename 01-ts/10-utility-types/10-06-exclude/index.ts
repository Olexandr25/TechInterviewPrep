type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

// Practical examples
type Status = 'pending' | 'approved' | 'rejected' | 'cancelled';
type ActiveStatus = Exclude<Status, 'cancelled' | 'rejected'>; // "pending" | "approved"

const currentStatus: ActiveStatus = 'pending'; // OK
// const invalidStatus: ActiveStatus = "cancelled"; // Error

// Example with user roles
type UserRole = 'admin' | 'user' | 'guest' | 'moderator';
type NonAdminRole = Exclude<UserRole, 'admin'>; // "user" | "guest" | "moderator"

function assignNonAdminRole(role: NonAdminRole) {
  console.log(`Assigning role: ${role}`);
}

assignNonAdminRole('user'); // OK
// assignNonAdminRole("admin"); // Error

// Example with event types
type MouseEvent = 'click' | 'dblclick' | 'mousedown' | 'mouseup';
type KeyboardEvent = 'keydown' | 'keyup' | 'keypress';
type AllEvents = MouseEvent | KeyboardEvent;

type NonClickEvents = Exclude<AllEvents, 'click' | 'dblclick'>;
// "mousedown" | "mouseup" | "keydown" | "keyup" | "keypress"

// Example with primitive types
type Primitive = string | number | boolean | null | undefined;
type NonNullablePrimitive = Exclude<Primitive, null | undefined>; // string | number | boolean

console.log('T0 type:', 'b' as T0); // type demonstration
