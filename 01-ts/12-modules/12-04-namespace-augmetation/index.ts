// Namespace Augmentation in TypeScript

// Example of extending an existing namespace
declare namespace MyModule {
  export interface MyInterface {
    newFunction(): void;
  }
}

namespace MyModule {
  export class MyClass implements MyInterface {
    public newFunction() {
      console.log('I am a new function in MyModule!');
    }

    public existingFunction() {
      console.log('This is an existing function');
    }
  }

  export const version = '2.0.0';
}

const obj = new MyModule.MyClass();
obj.newFunction(); // Output: "I am a new function in MyModule!"
obj.existingFunction(); // Output: "This is an existing function"
console.log(MyModule.version); // Output: "2.0.0"

// Example of extending the global namespace
declare global {
  interface Array<T> {
    customFind(predicate: (item: T) => boolean): T | undefined;
  }

  interface String {
    capitalize(): string;
    reverse(): string;
  }

  var MY_GLOBAL_CONFIG: {
    apiUrl: string;
    version: string;
  };
}

// Implementation of methods for Array
Array.prototype.customFind = function <T>(
  this: T[],
  predicate: (item: T) => boolean
): T | undefined {
  for (const item of this) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
};

// Implementation of methods for String
String.prototype.capitalize = function (this: string): string {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.reverse = function (this: string): string {
  return this.split('').reverse().join('');
};

// Using the extended methods
const numbers = [1, 2, 3, 4, 5];
const found = numbers.customFind((x) => x > 3);
console.log(found); // 4

const text = 'hello world';
console.log(text.capitalize()); // "Hello world"
console.log(text.reverse()); // "dlrow olleh"

// Example of extending an external module
declare module 'lodash' {
  interface LoDashStatic {
    customUtility<T>(array: T[]): T[];
  }
}

// If we had lodash, we could extend it like this:
// import _ from 'lodash';
// _.customUtility = function<T>(array: T[]): T[] {
//   return array.slice().reverse();
// };

// Example of extending an existing interface
interface Window {
  myCustomAPI: {
    init(): void;
    getData(): any;
  };
}

// Now you can use it in the browser:
// window.myCustomAPI = {
//   init() { console.log('API initialized'); },
//   getData() { return { data: 'some data' }; }
// };

// Example of extending a namespace with nested structure
declare namespace Utils {
  namespace StringUtils {
    export interface StringHelper {
      truncate(str: string, length: number): string;
    }
  }

  namespace MathUtils {
    export interface MathHelper {
      clamp(value: number, min: number, max: number): number;
    }
  }
}

namespace Utils {
  export namespace StringUtils {
    export class StringHelper implements StringHelper {
      truncate(str: string, length: number): string {
        return str.length > length ? str.substring(0, length) + '...' : str;
      }
    }
  }

  export namespace MathUtils {
    export class MathHelper implements MathHelper {
      clamp(value: number, min: number, max: number): number {
        return Math.min(Math.max(value, min), max);
      }
    }
  }
}

// Using the extended utilities
const stringHelper = new Utils.StringUtils.StringHelper();
console.log(stringHelper.truncate('This is a long string', 10)); // "This is a..."

const mathHelper = new Utils.MathUtils.MathHelper();
console.log(mathHelper.clamp(15, 0, 10)); // 10

// Example of extending jQuery types (if used)
declare global {
  interface JQuery {
    customPlugin(options?: { animation: boolean }): JQuery;
  }
}

// Plugin implementation:
// $.fn.customPlugin = function(options = { animation: true }) {
//   return this.each(function() {
//     console.log('Custom plugin applied', options);
//   });
// };
