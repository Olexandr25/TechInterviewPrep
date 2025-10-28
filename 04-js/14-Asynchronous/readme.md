# Asynchronous JavaScript

Асинхронне програмування дозволяє почати довготривалу операцію (HTTP‑запит, доступ до камери, таймери тощо) і продовжити виконання програми, не чекаючи завершення цієї операції. Результат обробляється пізніше через колбеки, проміси або async/await.

---

## Event loop (коротко)

Event loop керує виконанням синхронного і асинхронного коду в середовищі JS (браузер/Node). Спрощене правило виконання:

1. Виконується поточний макротаск (наприклад, весь скрипт або callback від setTimeout).
2. Після завершення макротаску — виконується вся черга microtasks (Promise callbacks, queueMicrotask, continuation після await).
3. Після опрацювання microtasks браузер/рушій може зробити рендер.
4. Береться наступний макротаск → повтор.

Приклад (скопіюй у консоль браузера):

```js
console.log('script start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve()
  .then(() => console.log('promise 1'))
  .then(() => console.log('promise 2'));

queueMicrotask(() => console.log('queueMicrotask'));

async function asyncFn() {
  console.log('async start');
  await Promise.resolve();
  console.log('async after await');
}
asyncFn();

console.log('script end');
```

Очікуваний порядок виводу:

1. script start
2. async start
3. script end
4. promise 1
5. queueMicrotask
6. async after await
7. promise 2
8. timeout

Покроковий розбір того, що саме відбувається

1. Починається виконання головного макротаску — основний скрипт. Call stack виконує синхронні рядки зверху вниз.
2. console.log('script start') — виводиться.
3. setTimeout(...) — планує callback у macrotask queue (запис: timeout). Поки що не виконується.
4. Promise.resolve().then(...).then(...) — перший .then ставиться в microtask queue (назвемо його M1). Другий .then буде поставлений пізніше, коли перший .then виконається (він сам додає наступний microtask).
5. queueMicrotask(...) — додає свій microtask (Mq) у кінець microtask queue. Порядок зараз: [M1, Mq]
6. asyncFn() виконується:
   - синхронно виводить 'async start'.
   - при await Promise.resolve() відкладена частина функції (console.log('async after await')) ставиться в microtask queue (назвемо MA). Тепер queue: [M1, Mq, MA].
7. console.log('script end') — виводиться.
8. Головний макротаск (скрипт) завершився. Тепер event loop очищує microtask queue у FIFO порядку:
   - Виконується M1 → виводить 'promise 1'. Після виконання M1 створюється наступний .then (promise 2) і його callback ставиться в кінець microtask queue. Queue після M1: [Mq, MA, M2].
   - Виконується Mq → виводить 'queueMicrotask'.
   - Виконується MA → виводить 'async after await'.
   - Виконується M2 → виводить 'promise 2'.
9. Після того як microtask queue порожня, рушій може зробити repaint (рендер).
10. Береться наступний макротаск із macrotask queue — це callback від setTimeout → виводить 'timeout'.
11. Повторюється цикл для подальших тасків.

Ключові висновки

- Microtasks (Promise .then/.catch/.finally, queueMicrotask, continuation після await) виконуються перед наступним macrotask і завершуються повністю перед рендером.
- Макротаски: setTimeout, setInterval, I/O callbacks, UI events — вони виконуються пізніше, після мікротасків.
- Коли у microtask під час виконання додаються нові microtasks (наприклад, ланцюгові .then), вони будуть виконані у тій же фазі — бо microtask queue обробляється до порожнього стану.
- У Node.js є додаткова very‑high priority черга process.nextTick, яка виконується ще до microtasks (у браузері аналогів немає).

Як експериментувати

- Змінюй місце викликів (помістити asyncFn перед/після queueMicrotask) і прогнозуй порядок.
- Додавай більше промісів і queueMicrotask, щоб побачити, як ланцюги .then ставлять нові microtasks.
- Пам'ятай: небезпечні уявлення типу "setTimeout(..., 0) = виконається одразу" — він виконається лише після всіх microtasks і після черги макротасків, коли настане його черга.

---

## Timers

```js
// setTimeout / clearTimeout
const id = setTimeout(() => console.log('after 1s'), 1000);
clearTimeout(id);

// setInterval / clearInterval
const i = setInterval(() => console.log('tick'), 1000);
clearInterval(i);
```

---

## Callbacks і callback‑hell

- Колбек — функція, передана іншій функції для виконання пізніше.
- Callback‑hell — складні вкладені колбеки, важко читати та обробляти помилки.
Рішення: проміси або async/await.

---

## Promises

Створення і використання:

```js
const p = new Promise((resolve, reject) => {
  // асинхронна операція
  if (ok) resolve(result);
  else reject(error);
});

p.then(result => console.log(result))
 .catch(err => console.error(err))
 .finally(() => console.log('done'));
```

Проміс можна повернути з функції:

```js
function fetchData() {
  return fetch('/api/data').then(r => r.json());
}
```

Комбінатори:

- Promise.all([...]) — чекає на всі (reject якщо хоча б один відхилено).
- Promise.allSettled([...]) — повертає статуси всіх.
- Promise.race([...]) — перший завершений (resolve/reject).
- Promise.any([...]) — перший успішний (якщо всі reject → AggregateError).

---

## async / await

Зручний синтаксис поверх промісів.

```js
async function load() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Error', err);
  }
}
```

- async функція завжди повертає Promise.
- await призупиняє виконання всередині async до результату промісу.

---

## fetch + AbortController

Приклад переривання запиту:

```js
const controller = new AbortController();
fetch('/api', { signal: controller.signal })
  .then(r => r.json())
  .catch(err => {
    if (err.name === 'AbortError') console.log('aborted');
  });

// відміна
controller.abort();
```

---

## Best practices

- Віддавайте перевагу промісам / async‑await над вкладеними колбеками.
- Обробляйте помилки (try/catch або .catch()).
- Використовуйте AbortController для скасування запитів.
- Не блокувати основний потік довгими синхронними операціями (використовуйте Web Workers при потребі).
- Розумійте різницю між macrotasks і microtasks (впливає на порядок виконання).

---

## Interview Questions

- Що таке event loop? Чим microtask відрізняється від macrotask?  
- Як створити і використати Promise? Навіщо finally?  
- Як працює async/await? Чим він відрізняється від then/catch?  
- Як скасувати fetch‑запит?  
- Чому callback‑hell шкідливий і як його уникнути?

## What to Answer

- Event loop керує порядком виконання синхронного і асинхронного коду; microtasks виконуються перед наступним macrotask.  
- Promise інкапсулює асинхронний результат; .then/.catch/.finally — для обробки.  
- async/await — синтаксичний цукор над промісами, дає більш імперативний код і читабельність; помилки ловляться try/catch.  
- AbortController.signal використовується для скасування fetch.  
- Використовувати проміси, композицію промісів і async/await замість вкладених колбеків.
