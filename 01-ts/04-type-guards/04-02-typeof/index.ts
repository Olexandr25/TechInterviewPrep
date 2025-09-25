// typeof Operator in TypeScript

let value: string | number = 'hello';

if (typeof value === 'string') {
  console.log('value is a string');
} else {
  console.log('value is a number');
}

// Additional example with union type
function printValue(val: string | number | boolean) {
  if (typeof val === 'string') {
    console.log('String:', val.toUpperCase());
  } else if (typeof val === 'number') {
    console.log('Number:', val + 1);
  } else if (typeof val === 'boolean') {
    console.log('Boolean:', val ? 'true' : 'false');
  }
}
