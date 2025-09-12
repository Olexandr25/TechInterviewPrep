// enum/index.ts
// Examples, all methods, how it works, and tricky moments for interview

// Example 1: Numeric Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log('Direction.Up: ', Direction.Up); // 1
console.log('Direction[2]: ', Direction[2]); // 'Down'

// Example 2: String Enum
enum Status {
  Success = 'SUCCESS',
  Error = 'ERROR',
  Loading = 'LOADING',
}
console.log('Status.Success: ', Status.Success); // 'SUCCESS'

// Example 3: Heterogeneous Enum (not recommended)
enum Mixed {
  No = 0,
  Yes = 'YES',
}
console.log('Mixed.Yes: ', Mixed.Yes); // 'YES'

// All methods and features
// 1. Enum members can be accessed by key or value (reverse mapping for numeric enums only)
console.log('Direction[Direction.Left]: ', Direction[Direction.Left]); // 'Left'
// 2. Enums are real objects at runtime
console.log('Object.keys(Direction): ', Object.keys(Direction));
// 3. Enums can be used as types
function move(dir: Direction) {
  console.log('Moving', Direction[dir]);
}
move(Direction.Right);

// Tricky moments for interview
// - String enums do NOT have reverse mapping
console.log('Status.Success: ', Status.Success); // 'SUCCESS'
// - Enums are not extensible (cannot add new members at runtime)
// - Computed and constant members
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = '123'.length,
}
console.log('FileAccess.ReadWrite: ', FileAccess.ReadWrite); // 6
console.log('FileAccess.G: ', FileAccess.G); // 3

// - Enums can be const (const enum) for performance, but are inlined and not available at runtime
// const enum ConstEnum { A, B }
// let a = ConstEnum.A;

// - Enums can be used in switch statements
function printStatus(status: Status) {
  switch (status) {
    case Status.Success:
      return 'Operation was successful';
    case Status.Error:
      return 'There was an error';
    default:
      return 'Loading...';
  }
}
console.log(printStatus(Status.Error));
