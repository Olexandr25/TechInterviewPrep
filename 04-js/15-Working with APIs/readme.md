# Working with APIs

Коли потрібно взаємодіяти з віддаленими сервісами з браузера — використовують Web APIs. Сьогодні основні інструменти: Fetch (сучасний, проміс‑базований) та старіший XMLHttpRequest (XHR).

---

## Fetch — базова ідея

fetch(url, options) повертає Promise, який резольвиться в об'єкт Response (статус + заголовки) — для тіла викликаємо потім .json(), .text(), .blob() тощо.

Приклад GET (async/await):

```js
async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

POST з JSON:

```js
async function postJSON(url, payload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

Перевірка Content-Type перед читанням:

```js
const ct = res.headers.get('content-type') || '';
if (!ct.includes('application/json')) throw new TypeError('No JSON');
const data = await res.json();
```

---

## AbortController — як скасувати запит

```js
const controller = new AbortController();
fetch('/api/long', { signal: controller.signal })
  .then(r => r.json())
  .catch(err => {
    if (err.name === 'AbortError') console.log('aborted');
    else console.error(err);
  });

// пізніше
controller.abort();
```

---

## Потоки (Streaming) — обробка частинами

Читати вміст по чанкам корисно для великих файлів:

```js
const res = await fetch(url);
const reader = res.body
  .pipeThrough(new TextDecoderStream())
  .getReader();

let { value, done } = await reader.read();
while (!done) {
  console.log(value);
  ({ value, done } = await reader.read());
}
```

---

## Response.clone() — читати тіло кілька разів

Response тіло — стрім і його можна прочитати лише один раз. Якщо потрібно двічі, використайте clone():

```js
const res = await fetch(url);
const res2 = res.clone();
const a = await res.json();
const b = await res2.text();
```

---

## Поради / best practices (Fetch)

- Завжди перевіряйте response.ok / status.
- Обробляйте помилки network + форматні помилки JSON.
- Використовуйте AbortController для скасування (унмаунт компоненту, timeout).
- Для крос‑доменних запитів налаштуйте credentials та серверні CORS заголовки.
- Для великих наборів даних — стрімінг, щоб уникнути OOM.
- Не викликайте .json() двічі — клонувати Response або зберегти результат.

---

## XMLHttpRequest — коли потрібен

XHR дає контроль за прогресом завантаження/відвантаження (upload progress) і все ще корисний для старих браузерів або специфічних можливостей (наприклад, fine‑grained upload progress). Сучасний Fetch замінює XHR для більшості випадків.

Швидкий приклад XHR GET:

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/data');
xhr.responseType = 'json';
xhr.onload = () => {
  if (xhr.status === 200) console.log(xhr.response);
  else console.error('HTTP', xhr.status);
};
xhr.onerror = () => console.error('Network error');
xhr.send();
```

---

## Security / CORS / Credentials

- За замовчуванням fetch не надсилає крос‑доменні куки. Щоб надсилати: { credentials: 'include' } і сервер повинен відповідати Access-Control-Allow-Credentials + вказувати конкретний Origin (не *).
- Не довіряйте клієнтським заголовкам — сервер має валідовувати авторизацію.

---

## Common tasks / Patterns

- Parallel requests (не чекати послідовно):

```js
const users = await Promise.all(usernames.map(u =>
  fetch(`https://api.github.com/users/${u}`).then(r => r.ok ? r.json() : null)
));
```

- Timeout:

```js
function fetchWithTimeout(url, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { signal: ctrl.signal }).finally(() => clearTimeout(t));
}
```

---

## Interview Questions

- Чим відрізняється fetch від XMLHttpRequest?
- Коли fetch відхиляє проміс, а коли повертає Response з помилкою 404?
- Як скасувати fetch? (AbortController)
- Чим відрізняються потоки (streaming) від .json() / .text()?
- Як працює CORS і що таке credentials у fetch?

## What to Answer

- Fetch vs XHR:
  - fetch — сучасний, проміс‑базований API; повертає об'єкт Response; тіло може бути стрімом; краще для чистих async/await потоків. За замовчуванням не відправляє крос‑доменні куки.
  - XHR — старіший, callback/ event‑орієнтований; дає контроль над upload/download progress (xhr.upload.onprogress), підтримує sync режим (рідко потрібен). Використовується, коли потрібен прогрес завантаження або сумісність.

- Коли fetch rejects vs returns Response(404):
  - fetch резолвиться в Response для HTTP відповіді будь‑якого статусу (2xx, 3xx, 4xx, 5xx). Тому треба перевіряти response.ok / response.status.
  - fetch відхиляє проміс (reject) при мережевих помилках, CORS‑блокуванні, або при abort() (AbortError). Також при некоректному URL/синтаксичній помилці запиту.

- Як скасувати fetch:
  - Використати AbortController: передати signal у опції fetch(url, { signal }). controller.abort() призведе до відхилення промісу з помилкою типу AbortError.
  - Короткий приклад:

    ```js
    const c = new AbortController();
    fetch(url, { signal: c.signal }).catch(e => {
      if (e.name === 'AbortError') /* cancelled */;
    });
    c.abort();
    ```
