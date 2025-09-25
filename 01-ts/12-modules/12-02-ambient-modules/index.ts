// Ambient Modules in TypeScript

// main.ts
import * as myModule from 'my-module';
myModule.doSomething();
console.log(myModule.version);

// Using a complex module
import APIClient, { initialize, Config } from 'complex-library';

const config: Config = {
  apiKey: 'secret-key',
  timeout: 5000,
};

const client = initialize(config);
const directClient = new APIClient(config);
