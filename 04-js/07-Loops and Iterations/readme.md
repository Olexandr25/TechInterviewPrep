# Loops and Iterations

**Loops** дозволяють швидко і просто виконувати одну й ту саму дію багато разів.

---

## for loop

Стандартна конструкція для ітерації певної кількості разів або по елементах послідовності.

```js
for (let step = 0; step < 5; step++) {
  // Виконається 5 разів, step: 0..4
  console.log('Walking east one step');
}
```

---

## while statement

Виконує цикл, поки умова істинна. Умова перевіряється перед кожною ітерацією.

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

---

## do...while statement

Виконує цикл, поки умова істинна. Умова перевіряється після кожної ітерації, тому тіло циклу виконається мінімум один раз.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

---

## break / continue

- **break** — завершує виконання циклу повністю.
- **continue** — переходить до наступної ітерації циклу, пропускаючи поточну.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break;      // зупиняє цикл при i = 3
  if (i === 1) continue;   // пропускає ітерацію при i = 1
  console.log(i);
}
```

---

## for...of statement

Ітерує по значеннях ітерованого об'єкта (Array, String, Map, Set тощо).

```js
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // 10, 20, 30
}
```

---

## for...in statement

Ітерує по всіх enumerable властивостях об'єкта, які мають string-ключ (ігнорує Symbol).

```js
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

---

### Приклад циклу для обʼєкта: читання ключів і значень

```js
const user = {
  name: "Alice",
  age: 25,
  city: "Kyiv"
};

// Через for...in — ключі та значення
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log("Key:", key, "Value:", user[key]);
  }
}

// Через Object.entries — масив пар [ключ, значення]
for (const [key, value] of Object.entries(user)) {
  console.log("Key:", key, "Value:", value);
}
```

**Пояснення:**

- `for...in` ітерує по ключах обʼєкта, а значення отримуємо через `user[key]`.
- `Object.entries(obj)` повертає масив пар `[ключ, значення]`, який можна ітерувати через `for...of`.

---

## Interview Questions

- Які типи циклів є у JavaScript?
- Для чого використовують break і continue?
- Чим відрізняється for...of від for...in?

## What to Answer

- Основні цикли: for, while, do...while, for...of, for...in.
- break — вихід із циклу, continue — пропуск ітерації.
- for...of — по значеннях ітерованих об'єктів, for...in — по ключах об'єкта.
