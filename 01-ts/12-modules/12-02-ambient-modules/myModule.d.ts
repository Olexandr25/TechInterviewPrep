// Example of a module declaration
declare module 'my-module' {
  export function doSomething(): void;
  export const version: string;
}

// Example of a complex library module declaration
declare module 'complex-library' {
  export interface Config {
    apiKey: string;
    timeout: number;
  }

  export class APIClient {
    constructor(config: Config);
    request(url: string): Promise<any>;
  }

  export function initialize(config: Config): APIClient;
  export default APIClient;
}

// Example with global variables
declare module 'jquery' {
  interface JQuery {
    customPlugin(options?: any): JQuery;
  }
}

// Example of module declaration for CSS/JSON files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

// Example of extending an existing module
declare module 'lodash' {
  interface LoDashStatic {
    customFunction(data: any[]): any;
  }
}

// Now lodash has a new function
// import _ from 'lodash';
// _.customFunction([1, 2, 3]);

// Example with a namespace module
declare module 'legacy-library' {
  namespace LegacyLib {
    interface User {
      id: number;
      name: string;
    }

    function getUser(id: number): User;
    function createUser(name: string): User;
  }

  export = LegacyLib;
}

// Using the namespace module
// import LegacyLib = require('legacy-library');
// const user = LegacyLib.getUser(1);

// Example with global types
declare global {
  interface Window {
    myGlobalAPI: {
      version: string;
      initialize(): void;
    };
  }

  var MY_GLOBAL_CONSTANT: string;
}

// Now you can use global types
// window.myGlobalAPI.initialize();
// console.log(MY_GLOBAL_CONSTANT);

// Example with conditional exports
declare module 'env-specific-module' {
  export interface BaseConfig {
    name: string;
  }

  export interface DevConfig extends BaseConfig {
    debug: true;
  }

  export interface ProdConfig extends BaseConfig {
    debug: false;
    apiUrl: string;
  }

  export function createConfig(env: 'dev'): DevConfig;
  export function createConfig(env: 'prod'): ProdConfig;
}
