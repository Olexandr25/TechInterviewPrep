# this (ключове слово)

Ключове слово this в JavaScript посилання на "контекст" виклику — об'єкт, від якого залежить виконання. Значення this визначається тим, як саме викликається функція, і відрізняється в строгому/нестрогому режимі.

---

## this в методі (object method)

this — об'єкт "перед крапкою".

```js
const user = {
  name: 'Alice',
  greet() {
    console.log(this.name);
  }
};

user.greet(); // 'Alice' (this === user)
```

---

## this у звичайній функції

У нестрогому режимі this → глобальний об'єкт (window в браузері, globalThis загалом). У strict → undefined.

```js
// non-strict
function f() {
  console.log(this); // window (в браузері)
}
f();

// strict
function g() {
  'use strict';
  console.log(this); // undefined
}
g();
```

---

## this в обробниках подій

У DOM-обробнику this = елемент, що отримав подію.

```html
<button id="btn">Click</button>
<script>
  const btn = document.getElementById('btn');
  btn.addEventListener('click', function (e) {
    console.log(this === btn); // true
  });
</script>
```

---

## this в arrow function

Arrow function не має власного this — воно лексично успадковується з оточення (зовнішньої функції/контексту оголошення).

```js
const obj = {
  id: 1,
  regular() {
    console.log(this.id); // 1
  },
  arrow: () => {
    console.log(this.id); // undefined або значення з зовнішнього контексту
  }
};

obj.regular();
obj.arrow();
```

Приклад, де arrow корисний для збереження контексту:

```js
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // this — це екземпляр Timer, бо arrow бере лексичне this
    console.log(this.seconds);
  }, 1000);
}
new Timer(); // 1
```

---

## call, apply, bind (explicit binding) і function borrowing

- call(thisArg, ...args) — викликає функцію з заданим this й аргументами.
- apply(thisArg, argsArray) — як call, але аргументи масивом.
- bind(thisArg, ...preset) — повертає нову функцію з прив'язаним this (не викликає відразу).

Приклад function borrowing та bind:

```js
const person = { name: 'Bob' };
function say(greeting) {
  console.log(greeting + ', ' + this.name);
}

// borrow via call/apply
say.call(person, 'Hi');           // "Hi, Bob"
say.apply(person, ['Hello']);     // "Hello, Bob"

// bind
const boundSay = say.bind(person);
boundSay('Hey');                  // "Hey, Bob"
```

Приклад проблеми з втраченим this і рішення:

```js
const obj = {
  x: 10,
  getX() { return this.x; }
};

setTimeout(obj.getX, 0);          // this втрачено -> undefined або globalThis.x
setTimeout(() => console.log(obj.getX()), 0); // корректно
setTimeout(obj.getX.bind(obj), 0); // тоже корректно
```

---

## Підводні камені та поради

- Метод, винесений з об'єкта (detached), втрачає this — використовуйте bind або wrapper.
- Arrow-функції не для методів, якщо потрібно динамічне this.
- У strict режимі виклики без контексту дають undefined — це безпечніше.

---

## Interview Questions

- Як визначається значення this у JavaScript?
- Чим arrow function відрізняється щодо this?
- Навіщо потрібні call/apply/bind і чим вони відрізняються?
- Чому при передачі методу в setTimeout this втрачається і як це виправити?

## What to Answer

- this залежить від способу виклику: метод (об'єкт перед крапкою), звичайний виклик (globalThis або undefined у strict), конструкція new (нова інстанція), call/apply/bind — явно вказане значення.
- Arrow-функції не мають власного this — вони наслідують його лексично.
- call застосовує функцію негайно з аргументами, apply — аргументи масивом, bind — повертає нову функцію з прив'язаним this.
- Використовувати bind або обгортку-стрілку, щоб зберегти контекст при передачі методу як callback. Arrow-функції навпаки не втрачають зовнішній контекст, бо this у них лексичне — це причина, чому їх використовують як обгортки для збереження контексту при callback-ах.
