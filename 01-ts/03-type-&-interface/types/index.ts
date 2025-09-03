// Type alias - cannot be merged
type A = { x: number };
// type A = { y: number }; // ❌ Error: Duplicate identifier 'A'

// Interface - can be merged (declaration merging)
interface B {
  x: number;
}
interface B {
  y: number;
}
// B is now: { x: number; y: number; }

// Combining types: union
type Status = 'success' | 'error' | 'loading';

// Combining types: intersection
type User = { name: string } & { age: number };

// Combining interfaces: extends
interface Person {
  name: string;
}
interface Employee extends Person {
  employeeId: number;
}

// Combining types: intersection with interfaces
type Worker = Person & { role: string };

// Tuple type
type Pair = [string, number];

// Generic type
type ApiResponse<T> = { data: T; error?: string };

// Recursive type
type Tree = { value: number; children: Tree[] };

// Summary:
// - Types: unions, intersections, tuples, primitives, generics, recursive
// - Interfaces: declaration merging, extends, implements (classes)
