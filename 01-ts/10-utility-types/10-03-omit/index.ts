interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

// Another example with User
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  isAdmin: boolean;
}

// For user registration (without id and createdAt)
type CreateUserRequest = Omit<User, 'id' | 'createdAt'>;

const newUser: CreateUserRequest = {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'secret123',
  isAdmin: false,
};

// For public profile (without password)
type PublicProfile = Omit<User, 'password'>;

const profile: PublicProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: new Date(),
  isAdmin: false,
};

console.log(todo); // { title: 'Clean room', completed: false, createdAt: 1615544252770 }
console.log(todoInfo); // { title: 'Pick up kids', description: 'Kindergarten closes at 5pm' }
