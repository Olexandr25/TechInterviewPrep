// Приклад використання NonNullable<T>

type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]

// Практичні приклади
type UserData = {
  id: number;
  name: string;
  email?: string;
  avatar?: string | null;
};

type RequiredUserData = NonNullable<UserData>; // все той же тип, оскільки сам об'єкт не nullable

// Приклад з окремими полями
type EmailType = NonNullable<UserData['email']>; // string (видаляє undefined)
type AvatarType = NonNullable<UserData['avatar']>; // string (видаляє null і undefined)

// Приклад з API response
type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
};

type ValidApiData<T> = NonNullable<ApiResponse<T>['data']>; // T

// Приклад з функцією
function processValue(
  value: string | number | null | undefined
): NonNullable<typeof value> | never {
  if (value == null) {
    throw new Error('Value cannot be null or undefined');
  }
  return value; // тип: string | number
}

// Приклад з utility функцією
function filterNullable<T>(array: T[]): NonNullable<T>[] {
  return array.filter((item): item is NonNullable<T> => item != null);
}

const mixedArray = ['hello', null, 'world', undefined, '!'];
const cleanArray = filterNullable(mixedArray); // string[]

// Приклад з користувацьким типом
type MaybeUser =
  | {
      id: number;
      name: string;
    }
  | null
  | undefined;

type DefiniteUser = NonNullable<MaybeUser>; // { id: number; name: string; }

// Демонстрація
const validValue: T0 = 'hello'; // string
const validArray: T1 = ['item1', 'item2']; // string[]

console.log('NonNullable demo:', validValue, validArray);
