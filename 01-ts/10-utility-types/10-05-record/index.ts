// Example of using Record<K, T>

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

// Another example with settings
type Theme = 'light' | 'dark' | 'auto';

interface ThemeConfig {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

const themeSettings: Record<Theme, ThemeConfig> = {
  light: {
    backgroundColor: '#ffffff',
    textColor: '#000000',
    borderColor: '#cccccc',
  },
  dark: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    borderColor: '#333333',
  },
  auto: {
    backgroundColor: '#f5f5f5',
    textColor: '#333333',
    borderColor: '#dddddd',
  },
};

// Example with numeric keys
type StatusCode = 200 | 404 | 500;

const statusMessages: Record<StatusCode, string> = {
  200: 'OK',
  404: 'Not Found',
  500: 'Internal Server Error',
};

// Example with string keys
const userRoles: Record<string, string[]> = {
  admin: ['read', 'write', 'delete'],
  user: ['read'],
  guest: ['read'],
};

console.log(cats.miffy); // { age: 10, breed: 'Persian' }
console.log(themeSettings.dark); // { backgroundColor: '#000000', textColor: '#ffffff', borderColor: '#333333' }
console.log(statusMessages[404]); // 'Not Found'
