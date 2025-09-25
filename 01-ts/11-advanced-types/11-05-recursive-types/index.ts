// Recursive Types in TypeScript

// Example of a linked list
type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

let list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};

// Example of a tree
type TreeNode<T> = {
  value: T;
  children: TreeNode<T>[];
};

let tree: TreeNode<string> = {
  value: 'root',
  children: [
    {
      value: 'child1',
      children: [],
    },
    {
      value: 'child2',
      children: [{ value: 'grandchild', children: [] }],
    },
  ],
};

// Example of nested objects
type DeepObject = {
  [key: string]: string | number | boolean | DeepObject;
};

let config: DeepObject = {
  name: 'app',
  version: 1,
  settings: {
    theme: 'dark',
    language: 'en',
    advanced: {
      debug: true,
      cache: {
        enabled: true,
        ttl: 3600,
      },
    },
  },
};

// Example of JSON structure
type JSONValue = string | number | boolean | null | JSONArray | JSONObject;

type JSONArray = JSONValue[];
type JSONObject = { [key: string]: JSONValue };

let data: JSONValue = {
  users: [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
  ],
  meta: {
    total: 2,
    page: 1,
    settings: null,
  },
};

// Example of a file system
type FileSystemNode = {
  name: string;
  type: 'file' | 'directory';
  size?: number;
  children?: FileSystemNode[];
};

let filesystem: FileSystemNode = {
  name: 'root',
  type: 'directory',
  children: [
    { name: 'file1.txt', type: 'file', size: 1024 },
    {
      name: 'folder1',
      type: 'directory',
      children: [{ name: 'nested.js', type: 'file', size: 2048 }],
    },
  ],
};

// Example of a navigation menu
type MenuItem = {
  label: string;
  url?: string;
  children?: MenuItem[];
};

let menu: MenuItem[] = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'Products',
    children: [
      { label: 'Laptops', url: '/laptops' },
      { label: 'Phones', url: '/phones' },
    ],
  },
];
