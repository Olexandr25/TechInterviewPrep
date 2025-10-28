# Type Casting

**Type casting (type conversion)** — це процес перетворення даних з одного типу в інший.
У JavaScript це може відбуватися автоматично (implicit/коерція) або явно (explicit).

---

## Type Conversion/Coercion

- **Type coercion** — автоматичне (implicit) перетворення типів, коли JS сам змінює тип значення (наприклад, при операціях).
- **Type conversion** — загальний термін для будь-якого перетворення типу, може бути як implicit, так і explicit.

---

## Implicit Type Casting (Coercion)

Відбувається автоматично, коли JS сам змінює тип значення для виконання операції.

**Приклади:**

```js
console.log("5" + 2); // "52" (2 перетворюється на рядок)
console.log("5" - 2); // 3   ("5" перетворюється на число)
console.log(true + 1); // 2  (true → 1)
console.log(false + "test"); // "falsetest" (false → "false")
console.log(null == 0); // false (null не дорівнює 0)
console.log(null == undefined); // true (null і undefined рівні при ==)
```

---

## Explicit Type Casting

Виконується явно за допомогою функцій чи методів.

**Приклади:**

```js
let str = "123";
let num = Number(str); // явне перетворення в число
let float = parseFloat("3.14"); // явне перетворення в число з плаваючою комою
let int = parseInt("42px"); // явне перетворення в ціле число
let bool = Boolean(0); // явне перетворення в булевий тип
let s = (123).toString(); // явне перетворення числа в рядок
```

---

## Summary Table

| Операція         | Приклад         | Результат         |
|------------------|-----------------|-------------------|
| Implicit         | "5" + 2         | "52"              |
| Implicit         | "5" - 2         | 3                 |
| Explicit         | Number("123")   | 123               |
| Explicit         | Boolean("")     | false             |
| Explicit         | parseInt("42px")| 42                |

---

## Interview Questions

- Що таке type coercion і type conversion?
- Як працює implicit та explicit type casting у JavaScript?
- Які методи використовуються для явного перетворення типів?

## What to Answer

- Type coercion — автоматичне перетворення типів, type conversion — будь-яке перетворення.
- Implicit — JS сам змінює тип, explicit — розробник явно викликає функцію.
- Для явного кастингу використовують Number(), String(), Boolean(), parseInt(), parseFloat().
