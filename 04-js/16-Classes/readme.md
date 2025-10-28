# Classes

Класи — шаблон для створення об'єктів. У JS вони побудовані на прототипах, але дають зручний синтаксис для конструкторів, методів, полів, спадкування, статичних та приватних елементів.

---

## Базовий синтаксис

```js
class User {
  name = 'Anonymous'; // public field

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi, ${this.name}`;
  }

  get displayName() {
    return this.name.toUpperCase();
  }
}
```

- Виклик: `const u = new User('Olex'); u.sayHi();`
- Код всередині класу завжди працює в strict mode.
- Методи визначені в прототипі класу (не перелічувані).

---

## Статичні властивості й методи

Статичні елементи належать самій конструкції (класу), а не екземплярам.

```js
class MathUtil {
  static PI = 3.14159;
  static sum(a, b) { return a + b; }
}

MathUtil.sum(2,3); // 5
```

---

## Приватні поля та методи (#)

Приватні елементи позначаються `#` — доступні лише всередині тіла класу.

```js
class Counter {
  #count = 0;

  increment() { this.#count++; }
  get value() { return this.#count; }
}

const c = new Counter();
c.increment();
c.value; // 1
// c.#count -> SyntaxError
```

Приватні поля не доступні навіть у підкласах.

---

## Спадкування та super

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks.`; }
}

const d = new Dog('Rex');
d.speak(); // "Rex barks."
```

У похідному конструкторі потрібно викликати `super(...)` перш ніж використовувати `this`.

---

## Поля як прив'язка this (bound methods)

Поле-стрілка прив'язує контекст на екземпляр і зручне для callback:

```js
class Button {
  constructor(v) { this.v = v; }
  onClick = () => console.log(this.v); // завжди this = екземпляр
}
```

---

## Часті помилки й нюанси

- Порядок ініціалізації полів:
  - Для базових класів поля ініціалізуються перед виконанням конструктора.
  - Для похідних — поля батька ініціалізуються під час `super()`, а поля похідного — після `super()`. Це впливає на видимість значень у конструкторі.
- `instanceof` перевіряє ланцюг прототипів. Його можна кастомізувати через `Class[Symbol.hasInstance]`.
- Методи, що використовують `super`, мають внутрішню прив'язку [[HomeObject]] — копіювання таких методів може змінити поведінку `super`.
- Не ставте коми між методами всередині класу (синтаксична помилка).
- Не викликайте клас-конструктор без `new` — це помилка для класів.

---

## Приклади практичного використання

1. **Статична фабрика:**

    ```js
    class User {
      constructor(name) { this.name = name; }
      static create(name) { return new this(name); }
    }
    ```

2. **Спадкування + приватне поле:**

    ```js
    class BankAccount {
      #balance = 0;
      deposit(v) { this.#balance += v; }
      get balance() { return this.#balance; }
    }

    class Savings extends BankAccount {
      // немає доступу до #balance напряму
    }
    ```

3. **Міксіни (копіювання функціоналу в прототип):**

    ```js
    const eventMixin = {
      on(name, handler) {
        this._events ??= {};
        (this._events[name] ??= []).push(handler);
      },
      off(name, handler) {
        const list = this._events?.[name];
        if (!list) return;
        for (let i = 0; i < list.length; i++) {
          if (list[i] === handler) list.splice(i--, 1);
        }
      },
      trigger(name, ...args) {
        (this._events?.[name] ?? []).forEach(h => h.apply(this, args));
      }
    };

    class Menu {}
    Object.assign(Menu.prototype, eventMixin);
    ```

---

## Рекомендації (best practices)

- Використовуйте приватні поля (`#`) для суворої інкапсуляції; `_` — як конвенція для "protected".
- Статичні методи — для фабрик та утиліт, що не залежать від екземпляра.
- Мінімізуйте побічні ефекти в конструкторах.
- Для callback'ів прив'язуйте методи в конструкторі або використовуйте поле-стрілку.

---

## Коротке резюме

- Class — зручний синтаксис над прототипами.
- Private (#) — реальна інкапсуляція.
- Static — методи/поля на рівні класу.
- Extends + super — для спадкування; виклик `super()` обов'язковий у похідних конструкторах.
- Міксіни — просте додавання поведінки через Object.assign.
