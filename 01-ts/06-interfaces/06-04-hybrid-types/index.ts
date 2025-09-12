type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'Hello';
value = 42;

// Example of a more complex hybrid type using intersection
type Education = {
  degree: string;
  school: string;
  year: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  education: Education;
};

// Hybrid type: function with properties
interface Counter {
  (start: number): number;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let c = function (start: number) {
    return start;
  } as Counter;
  c.interval = 123;
  c.reset = () => {};
  return c;
}

const counter = getCounter();
console.log(counter(10)); // 10
counter.reset();
console.log(counter.interval); // 123
