// TypeScript String Type Examples

let name: string = 'Alex';
let greeting: string = `Hello, ${name}!`;
let multiline: string = `This is a
multiline string.`;

// Concatenation
let fullName: string = name + ' Voichyshyn';

// String methods and their results
const str: string = 'TypeScript Interview';

// concat()
console.log(str.concat(' Prep')); // TypeScript Interview Prep

// slice()
console.log(str.slice(0, 10)); // TypeScript

// substring()
console.log(str.substring(0, 10)); // TypeScript

// substr() (legacy)
console.log(str.substr(0, 10)); // TypeScript

// replace()
console.log(str.replace('Interview', 'Preparation')); // TypeScript Preparation

// toUpperCase()
console.log(str.toUpperCase()); // TYPESCRIPT INTERVIEW

// toLowerCase()
console.log(str.toLowerCase()); // typescript interview

// split()
console.log(str.split(' ')); // [ 'TypeScript', 'Interview' ]

// trim()
console.log('   padded string   '.trim()); // padded string

// includes()
console.log(str.includes('Script')); // true

// startsWith()
console.log(str.startsWith('Type')); // true

// endsWith()
console.log(str.endsWith('Interview')); // true

// charAt()
console.log(str.charAt(4)); // S

// indexOf()
console.log(str.indexOf('Script')); // 4

// padStart()
console.log('5'.padStart(3, '0')); // 005

// padEnd()
console.log('5'.padEnd(3, '0')); // 500

// repeat()
console.log('ha'.repeat(3)); // hahaha

// length
console.log(str.length); // 19

// Template literal example
const age = 30;
console.log(`Name: ${name}, Age: ${age}`); // Name: Alex, Age: 30
