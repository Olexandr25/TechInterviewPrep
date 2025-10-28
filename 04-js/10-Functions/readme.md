# Functions

Функції дозволяють повторно використовувати код — це блоки інструкцій, які виконуються при виклику. Зазвичай кожна функція виконує одну конкретну задачу.

---

## Оголошення функцій

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

---

## Параметри функцій

- Default parameters — значення за замовчуванням, якщо аргумент не передано або він undefined.

```js
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

- Rest parameters — збирають довільну кількість аргументів у масив.

```js
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log(sum(1,2,3,4)); // 10
```

---

## Arrow Functions

Скорочений синтаксис; не мають власного `this`, `arguments` та не можуть бути використані як конструктор.

```js
const mul = (a, b) => a * b;
console.log(mul(2, 3)); // 6
```

---

## IIFE (Immediately-Invoked Function Expression)

Функція, що виконується одразу після створення.

```js
(function() {
  console.log('IIFE executed');
})();
```

Асиметричний приклад з async:

```js
(async () => {
  await Promise.resolve();
  console.log('Async IIFE');
})();
```

---

## arguments object

Доступний у звичайних (не arrow) функціях; є array‑like, але краще використовувати rest-параметри.

```js
function f() {
  console.log(arguments[0]);
}
f(1); // 1
```

---

## Вбудовані функції (Built-ins)

Приклади: `parseInt()`, `parseFloat()`, `setTimeout()`, `Math.random()` та методи об'єктів `Array.prototype.map`, `String.prototype.slice` тощо.

---

## Scope і Call Stack

- Global scope, Function scope, Block scope (let/const).
- Call stack — стек викликів: поточна функція лежить на вершині, при рекурсії стек росте.

```js
function a() { b(); }
function b() { c(); }
function c() { console.log('c'); }
a(); // a -> b -> c (call stack)
```

---

## Рекурсія

Функція викликає сама себе; потрібен базовий випадок.

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

---

## Лексичне оточення і замикання (closures)

Лексичне оточення — змінні, доступні функції в момент її оголошення. Замикання — функція разом із своїм лексичним оточенням.

```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Замикання дозволяють зберігати приватний стан і будувати фабрики функцій.

---

## Best practices

- Виконуйте одну відповідальність (SRP) у функції.
- Використовуйте явні параметри замість rely-on globals.
- Використовуйте pure functions де можливо (без побічних ефектів).
- Для варіативних аргументів надавайте rest-параметри.
- Уникайте надмірної глибини рекурсії (використовуйте ітерації або оптимізовані підходи).

---

## Interview Questions

- Яка різниця між function declaration і function expression?
- Чим arrow functions відрізняються від звичайних функцій?
- Що таке замикання і де його використовувати?
- Як працює call stack і чому рекурсія може викликати помилку "Maximum call stack size exceeded"?
- Коли використовувати rest parameters замість arguments?

## What to Answer

- Function declaration піднімається (hoisted); function expression — ні.
- Arrow functions не мають власного `this` і `arguments`.
- Замикання — функція, яка "пам'ятає" лексичне оточення при створенні; корисне для інкапсуляції стану.
- Call stack — стек викликів, рекурсія додає нові фрейми; без базового випадку може стати нескінченною.
- Використовувати rest для чистішого, сучасного API; `arguments` — legacy.
