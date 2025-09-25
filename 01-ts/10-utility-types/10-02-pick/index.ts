interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// Another example with User
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// For public API without sensitive data
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

const publicUser: PublicUser = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

// For login form
type LoginCredentials = Pick<User, 'email' | 'password'>;

const loginData: LoginCredentials = {
  email: 'john@example.com',
  password: 'secret123',
};

console.log(todo); // { title: 'Clean room', completed: false }
console.log(publicUser); // { id: 1, name: 'John Doe', email: 'john@example.com' }
