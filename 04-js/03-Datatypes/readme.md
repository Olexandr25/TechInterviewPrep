# Datatypes

**Data type** — це тип даних, який може містити змінна у JavaScript.
Всього існує сім примітивних типів: Number, BigInt, String, Boolean, Null, Undefined, Symbol.
Об'єкти — це непримітивний тип.

---

## Primitive Types

### Symbol

**Symbol** — унікальний і незмінний примітивний тип, введений в ES6.
Використовується для створення унікальних ключів властивостей об'єктів, щоб уникнути конфліктів.
Створюється через `Symbol()`.
Кожен Symbol унікальний, навіть із однаковим описом.

**Приклади використання Symbol:**

```js
// Створення символу
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false (символи завжди унікальні)

// Використання Symbol як ключа властивості об'єкта
const user = {};
user[sym1] = 123;
user[sym2] = 456;
console.log(user); // { [Symbol(id)]: 123, [Symbol(id)]: 456 }

// Символи не відображаються у for...in чи Object.keys
for (let key in user) {
  console.log(key); // нічого не виведе
}
console.log(Object.keys(user)); // []

// Доступ до символу через Object.getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id), Symbol(id) ]

// Використання глобального реєстру символів
const globalSym = Symbol.for('shared');
const sameGlobalSym = Symbol.for('shared');
console.log(globalSym === sameGlobalSym); // true

// Використання Symbol для прихованих/спеціальних властивостей
const secret = Symbol('secret');
const obj = {
  [secret]: 'hidden value'
};
console.log(obj[secret]); // 'hidden value'
```

**Пояснення:**

- Символи гарантують унікальність ключів, навіть якщо опис однаковий.
- Символи часто використовують для прихованих або спеціальних властивостей, які не повинні конфліктувати з іншими ключами об'єкта.

### Boolean

**Boolean** — простий тип, що може містити лише два значення: `true` або `false`.
Використовується для логічних операцій і контролю потоку програми (if, else, while тощо).

### Null

**null** — спеціальне значення, що означає навмисну відсутність об'єкта.
Використовується для явного "очищення" змінної, показує, що вона не містить жодного значення.

### Number

**Number** — тип для чисел з плаваючою комою (наприклад, 37 або -9.25).
Можна записувати числа у різних форматах: десятковий, шістнадцятковий, двійковий, експоненціальний.

**Приклад:**

```js
let num1 = 255; // integer
let num2 = 255.0; // floating-point
let num3 = 0xff; // hex
let num4 = 0b11111111; // binary
let num5 = 0.255e3; // exponential

console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true
```

### BigInt

**BigInt** — тип для роботи з дуже великими цілими числами, що виходять за межі Number (±2^53).
Використовується для високоточної математики, криптографії тощо.

### String

**String** — послідовність символів.
Можна записувати у одинарних '', подвійних "" або зворотних `` (template literals) лапках.

### Undefined

**undefined** — значення, яке отримує змінна, якщо вона оголошена, але не ініціалізована.
Функція повертає undefined, якщо не повертає значення.

---

## Object

**Object** — структура даних для зберігання пар "ключ-значення".
Кожен ключ у об'єкті унікальний, значення може бути будь-якого типу.

**Приклад:**

```js
const pen = {
  color: "blue",
  design: "classic",
  material: "plastic"
};
```

---

## Prototypal Inheritance

**Prototypal Inheritance** — механізм, що дозволяє одному об'єкту наслідувати властивості та методи іншого.
Використовується через `Object.getPrototypeOf` та `Object.setPrototypeOf`.

```js
// Приклад 1: Наслідування через прототип
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (успадковано від animal)
dog.walk(); // Animal walks
console.log(dog.barks); // true (власна властивість)

// Приклад 2: Встановлення прототипу вручну
const cat = { meows: true };
Object.setPrototypeOf(cat, animal);

console.log(cat.eats); // true
cat.walk(); // Animal walks

// Приклад 3: Перевірка прототипу
console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(Object.getPrototypeOf(cat) === animal); // true
```

---

## Prototypes

У JavaScript кожен об'єкт має прототип, від якого може наслідувати властивості.
Прототип — це об'єкт, з якого інші об'єкти можуть наслідувати.

```js
// Приклад 1: Прототип функції-конструктора
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
alice.sayHello(); // Hello, my name is Alice
console.log(alice.__proto__ === Person.prototype); // true


// Приклад 2: Ланцюжок прототипів
console.log(alice.hasOwnProperty('name')); // true
console.log(alice.hasOwnProperty('sayHello')); // false
console.log(typeof alice.sayHello); // "function"

// Приклад 3: Власні та успадковані властивості
for (let key in alice) {
  if (alice.hasOwnProperty(key)) {
    console.log("Own property:", key); // name
  } else {
    console.log("Inherited property:", key); // sayHello
  }
}
```

---

**Пояснення:**

- Прототипне наслідування дозволяє одному об'єкту використовувати властивості іншого.
- Прототипи — це основа для організації спадковості в JavaScript.
- Всі об'єкти мають приховану властивість `[[Prototype]]` (або `__proto__`), яка вказує на їх прототип.
- `__proto__` — це посилання на прототип об'єкта, через яке здійснюється наслідування властивостей.
- `prototype` — це властивість функції-конструктора, яка використовується для встановлення прототипу нових об'єктів, створених через цю функцію.
- Різниця: `__proto__` є у кожного об'єкта і вказує на його прототип, а `prototype` є лише у функцій-конструкторів і визначає, яким буде прототип створених ними об'єктів.

---

## Built-in Objects

**Built-in objects** — це глобальні об'єкти, вбудовані у саму мову.
Приклади:

- Number
- Math
- Date
- String
- Error
- Function
- Boolean

---

## typeof Operator

Оператор `typeof` дозволяє визначити тип даних змінної.
Повертає рядок із назвою типу.

**Приклад:**

```js
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"
typeof Symbol(); // "symbol"
typeof {}; // "object"
```

---

## Interview Questions

- Які примітивні типи даних є у JavaScript?
- Чим відрізняється null від undefined?
- Для чого використовують Symbol?
- Як працює прототипне наслідування?
- Як визначити тип змінної у JavaScript?

## What to Answer

- Примітивні типи: Number, BigInt, String, Boolean, Null, Undefined, Symbol.
- null — навмисна відсутність значення, undefined — змінна не ініціалізована.
- Symbol — для унікальних ключів об'єктів.
- Прототипне наслідування — механізм передачі властивостей між об'єктами.
- Тип змінної визначають через оператор typeof.
