// Global Augmentation in TypeScript

// Example of extending the global NodeJS object
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
    appVersion: string;
  }
}

// Implementation of the global function and property
(global as unknown as NodeJS.Global).myGlobalFunction = function () {
  console.log('I am a global function!');
};

(global as unknown as NodeJS.Global).appVersion = '2.1.0';

// Calling the global function and property
(global as unknown as NodeJS.Global).myGlobalFunction(); // Output: "I am a global function!"
console.log((global as unknown as NodeJS.Global).appVersion); // Output: "2.1.0"

// Example of extending the global Window (for browser)
declare global {
  interface Window {
    myAppConfig: {
      apiUrl: string;
      debug: boolean;
    };
    showNotification(message: string): void;
  }
}

// Implementation for browser (only if running in browser)
// window.myAppConfig = { apiUrl: "https://api.example.com", debug: true };
// window.showNotification = function(message: string) {
//   alert(message);
// };

// Example of extending the global Array type
declare global {
  interface Array<T> {
    sum(): number;
  }
}

Array.prototype.sum = function (): number {
  return this.reduce((acc, val) => acc + val, 0);
};

// Using the extended method
const arr = [1, 2, 3, 4];
console.log(arr.sum()); // Output: 10

// Example of a global constant
declare global {
  var MY_GLOBAL_CONSTANT: string;
}

// Implementation of the global constant
global.MY_GLOBAL_CONSTANT = 'Hello, global!';
console.log(MY_GLOBAL_CONSTANT); // Output: "Hello, global!"
