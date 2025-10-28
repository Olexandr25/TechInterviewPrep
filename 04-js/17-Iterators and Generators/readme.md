# JavaScript — Ітератори, Ітеровані Об'єкти та Генератори

Файл пояснює сучасну ітерацію в JavaScript: for...of, протоколи ітератора та ітерованого об'єкта, генераторні функції та просунуті можливості генераторів. Структура нормалізована, повтори видалені.

---

## Швидкий зміст

- for...of
- Ітератори (iterator protocol)
- Ітеровані об'єкти (Symbol.iterator)
- Генератори (function*)
- Просунуті методи генераторів: return(), throw(), yield*

---

## for...of (коротко)

for...of ітерує будь-який ітерований об'єкт:

```js
const nums = [1, 5, 16];
for (const n of nums) {
  console.log(n); // 1, 5, 16
}
```

Внутрішньо викликає `obj[Symbol.iterator]()` щоб отримати ітератор і повторно звертається до `next()` поки не отримає `{ done: true }`.

---

## Ітератори (iterator protocol)

Ітератор — об'єкт з методом `next()`, що повертає `{ value, done }`.

Приклад простої фабрики ітератора:

```js
function makeIterator(array) {
  let i = 0;
  return {
    next() {
      if (i < array.length) return { value: array[i++], done: false };
      return { value: undefined, done: true };
    }
  };
}

const iter = makeIterator([1,5,16]);
iter.next(); // {value:1, done:false}
```

Вбудовані ітератори існують для Array, String, Map, Set, typed arrays, DOM-колекцій як `obj[Symbol.iterator]()`.

---

## Ітеровані об'єкти (iterable protocol)

Об'єкт ітерований, якщо має метод під ключем `Symbol.iterator`, що повертає ітератор.

Перевірка ітерованості:

```js
function isIterable(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}
```

Можна зробити об'єкт ітерованим, додавши `[Symbol.iterator]` (на об'єкті або в прототипі). Оператор розпилення `...` та `for...of` споживають ітеровані об'єкти.

---

## Генератори (function* та yield)

Генератори — функції, які повертають ітератори. Використовують `function*` і `yield`.

```js
function* sequence() {
  yield 1;
  yield 3;
  yield 5;
}

const seq = sequence();
seq.next(); // {value:1, done:false}
for (const v of sequence()) console.log(v); // 1,3,5
```

Коротко про поведінку:

- Виклик генератора повертає ітератор, тіло функції не виконується відразу.
- `next()` відновлює виконання до наступного `yield`.
- `next(value)` передає `value` всередину призупиненого `yield`.
- Генератори дозволяють ліниву генерацію послідовностей (lazy), в т.ч. нескінченні послідовності.

Приклад генератора, що отримує значення:

```js
function* gen() {
  const a = yield 10;
  const b = yield a + 5;
  yield b;
}

const it = gen();
it.next();       // {value:10, done:false}
it.next(15);     // {value:20, done:false}  // a = 15, yield 15+5
it.next(60);     // {value:60, done:false}  // b = 60
it.next();       // {value:undefined, done:true}
```

---

## Просунуті генератори

- `iterator.return(value)` закриває генератор і повертає `{ value, done: true }`.
- `iterator.throw(err)` кине помилку в точці призупинення `yield`; якщо не оброблена всередині, помилка піднімається і генератор закривається.
- `yield* iterable` делегує іншому ітерованому об'єкту (або генератору), по черзі повертаючи його елементи.

Приклад делегації:

```js
function* a() { yield* [1,2,3]; }
[...a()]; // [1,2,3]
```

Збір делегованої послідовності в рядок:

```js
function* wholeNums() { for (let i=1;i<=5;i++) yield i; }
function* squareNums() { for (let i=1;i*i<=50;i++) yield i*i; }
function* cubeNums() { for (let i=1;i**3<=100;i++) yield i**3; }

function* gen() {
  yield* wholeNums();
  yield* squareNums();
  yield* cubeNums();
}

// Однорядковий лог послідовності як рядок:
console.log([...gen()].join(', '));
```

---

## Поради та кращі практики

- Використовуйте приватні поля `#` у класах для суворої інкапсуляції.
- Віддавайте перевагу вбудованим ітераторам або генераторам для лінивих обчислень замість створення великих масивів.
- Будьте обережні з нескінченними генераторами в `for...of` або при розпиленні — вони ніколи не завершаться.

---

## Питання на співбесіді (Interview Questions)

- Що таке iterator protocol? Які його вимоги?
- Чим відрізняється iterable від iterator?
- Як працює for...of під капотом?
- Як працює yield у генераторі? Що повертає next()?
- Що роблять iterator.return() та iterator.throw()?
- У чому різниця між yield та yield*?
- Як зробити звичайний об'єкт ітерованим?

---

## Як відповідати (What to Answer)

- Дайте коротке визначення (1–2 речення), потім приклад коду.
  - Наприклад: "iterator — об'єкт з next(), що повертає {value, done}. Приклад: ...".
- Пояснюйте механіку коротко: "for...of викликає obj[Symbol.iterator]() → next() ...".
- Для yield/генераторів покажіть невеликий приклад і опишіть паузу/відновлення.
- Якщо питання про performance — скажіть коли краще звичайний цикл, коли — генератор (великі/ліниві послідовності).
- При питаннях про делегування/throw/return — наведіть короткий приклад і результат.

---
