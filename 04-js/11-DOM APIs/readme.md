# DOM APIs

**Document Object Model (DOM)** — програмний інтерфейс для представлення HTML / XML документів у вигляді дерева вузлів. DOM дозволяє скриптам (зазвичай JavaScript) читати та змінювати структуру, стиль і вміст сторінки.

---

## Основні поняття

- DOM представляє документ у вигляді дерева: кожен елемент, текстовий вузол або атрибут — це node.
- Головні об’єкти: `window` (контекст браузера) і `document` (корінь документа).
- Елементи HTML реалізують інтерфейси `Element`, `HTMLElement` та спеціалізовані інтерфейси (наприклад, `HTMLTableElement`).

---

## Доступ до елементів

- document.getElementById(id)
- document.getElementsByTagName(tagName)
- document.getElementsByClassName(className)
- document.querySelector(selector)
- document.querySelectorAll(selector)

Приклад:

```js
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs[0].nodeName); // "P"
```

---

## Створення та модифікація дерева

- document.createElement(tag)
- document.createTextNode(text)
- node.appendChild(child)
- node.removeChild(child)
- node.replaceChild(newChild, oldChild)
- node.insertBefore(newNode, referenceNode)

Приклад: додати заголовок і текст

```js
const heading = document.createElement('h1');
heading.textContent = 'Big Head!';
document.body.appendChild(heading);
```

Додати/видалити дитину:

```js
const parent = document.querySelector('.parent');

// додати
const child = document.createElement('div');
child.className = 'child';
child.textContent = 'child';
parent.appendChild(child);

// видалити
const toRemove = parent.querySelector('.child');
parent.removeChild(toRemove);
```

---

## Робота з атрибутами та властивостями

- element.getAttribute(name) / element.setAttribute(name, value)
- element.classList.add('cls'), .remove(), .toggle()
- element.style.property = 'value'

---

## Події та обробники

- element.addEventListener(type, handler, options)
- element.removeEventListener(type, handler)
- Події мають об’єкт `event` з корисними полями: `target`, `currentTarget`, `type`, `preventDefault()`, `stopPropagation()`.

Приклад: змінити вміст textarea по кліку:

```html
<button id="set-text">Set text content</button>
<textarea class="story"></textarea>
```

```js
const story = document.querySelector('.story');
document.getElementById('set-text').addEventListener('click', () => {
  story.textContent = 'It was a dark and stormy night...';
});
```

---

## Event propagation (capturing & bubbling)

Події проходять три фази: capturing → target → bubbling. За замовчуванням слухачі додаються у фазі bubbling.

Щоб зупинити підйом події:

```js
function stopEvent(e) {
  e.stopPropagation();
}
elem.addEventListener('click', stopEvent);
```

---

## Приклади реальних сценаріїв

- Динамічне будування DOM:

```js
const root = document.createElement('html');
root.lang = 'en';
const body = document.createElement('body');
const h1 = document.createElement('h1');
h1.textContent = 'Header';
body.appendChild(h1);
root.appendChild(body);
```

- Показ властивостей об'єкта події:

```js
window.addEventListener('load', (e) => {
  console.log(Object.keys(e).sort());
});
```

---

## Часто використовувані інтерфейси (вибірково)

`Document`, `Element`, `Node`, `NodeList`, `HTMLCollection`, `EventTarget`, `Event`, `MutationObserver`, `DocumentFragment`, `ShadowRoot`.

---

## Поради / Best practices

- Мінімізуйте прямі DOM-операції в циклах (збирайте фрагмент у DocumentFragment і додавайте разом).
- Уникайте частого доступу до layout-пов'язаних властивостей (reflow/repaint).
- Використовуйте делегування подій для великої кількості однотипних елементів.
- Не змішуйте розмітку і логіку — тримайте JS окремо від HTML.
- Для складних UI використовуйте фреймворки (React/Vue/Nest?) або шаблонні підходи, щоб мінімізувати помилки при ручних маніпуляціях DOM.

---

## Interview Questions

- Що таке DOM і чим він відрізняється від HTML?
- Як отримати елемент по селектору? Назвіть варіанти.
- Як створити і додати елемент у DOM?
- Поясніть event propagation і як зупинити bubbling.
- Що таке DocumentFragment і коли його використовувати?

## What to Answer

- DOM — об’єктна модель документа; HTML — його текстове представлення.
- Використовувати `getElementById`, `querySelector`, `querySelectorAll` тощо.
- `document.createElement` + `appendChild` або `insertBefore`.
- Подія проходить через capturing → target → bubbling; `stopPropagation()` зупиняє подальшу передачу.
- `DocumentFragment` дозволяє виконати багато змін у пам'яті і потім додати їх в DOM одним вставленням (ефективно).
