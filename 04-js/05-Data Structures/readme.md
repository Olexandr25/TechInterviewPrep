# Data Structures

**Data structure** — це формат для організації, управління і зберігання даних, який дозволяє ефективно отримувати і змінювати інформацію.
У JavaScript є примітивні (вбудовані) та непримітивні (реалізовані вручну) структури даних.

---

## Structured Data

**Structured data** використовується пошуковими системами (Google тощо) для розуміння контенту сторінки та збору інформації про веб і світ загалом.
Кодується за допомогою розмітки на сторінці.

---

## JSON

**JSON (JavaScript Object Notation)** — стандартний текстовий формат для представлення структурованих даних на основі синтаксису об'єктів JavaScript.
Використовується для передачі даних у веб-додатках (з сервера на клієнт і навпаки).

---

## Keyed Collections

**Keyed collections** — це колекції, впорядковані за ключем, а не за індексом.
Вони асоціативні та ітеруються у порядку вставки.

### Map

**Map** — колекція пар ключ-значення, де ключ може бути будь-якого типу.

```js
const map = new Map();
map.set('name', 'Alice');
map.set(42, 'answer');
console.log(map.get('name')); // Alice
console.log(map.get(42)); // answer
```

### WeakMap

**WeakMap** — колекція пар ключ-значення, де ключем може бути лише об'єкт.
Ключі автоматично видаляються, якщо на них більше немає посилань.

```js
const wm = new WeakMap();
let obj = {};
wm.set(obj, 'data');
obj = null; // ключ буде видалено з WeakMap
```

### Set

**Set** — колекція унікальних значень будь-якого типу.

```js
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set { 1, 2, 3 }
set.add(4);
set.has(2); // true
```

### WeakSet

**WeakSet** — колекція унікальних об'єктів, які автоматично видаляються, якщо на них немає посилань.

```js
const ws = new WeakSet();
let obj = {};
ws.add(obj);
obj = null; // об'єкт буде видалено з WeakSet
```

---

## Indexed Collections

**Indexed collections** — це колекції, впорядковані за числовим індексом.
В JavaScript це масиви.

### Arrays

**Array** — впорядкована колекція елементів з числовими індексами.

```js
const arr = [10, 20, 30];
arr.push(40);
console.log(arr[1]); // 20
console.log(arr.length); // 4
```

### Typed Arrays

**Typed Arrays** — масиви для роботи з бінарними даними.
Використовуються для високопродуктивних операцій з числами (наприклад, Uint8Array, Float32Array).

```js
const buffer = new ArrayBuffer(8);
const intView = new Uint32Array(buffer);
intView[0] = 42;
console.log(intView[0]); // 42
```

---

## Interview Questions

- Які основні структури даних є у JavaScript?
- Чим відрізняється Map від Object?
- Для чого використовують Set і WeakSet?
- Що таке Typed Arrays?

## What to Answer

- Основні структури: Array, Object, Map, Set, WeakMap, WeakSet, Typed Arrays.
- Map дозволяє ключі будь-якого типу, Object — лише рядки/символи.
- Set — для унікальних значень, WeakSet — для унікальних об'єктів з автоматичним очищенням.
- Typed Arrays — для роботи з бінарними даними.
