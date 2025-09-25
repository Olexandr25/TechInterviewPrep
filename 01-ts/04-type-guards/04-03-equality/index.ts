// Equality in TypeScript

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // Here TypeScript knows that both x and y are string
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

// Additional example with switch
function printType(value: string | number | boolean) {
  switch (typeof value) {
    case 'string':
      console.log('String:', value.toUpperCase());
      break;
    case 'number':
      console.log('Number:', value + 1);
      break;
    case 'boolean':
      console.log('Boolean:', value ? 'true' : 'false');
      break;
  }
}

// Example with == and != (better to use === and !==)
function looseEquality(a: string | number, b: number | boolean) {
  if (a == b) {
    console.log('Equal (loose)');
  } else {
    console.log('Not equal (loose)');
  }
}
