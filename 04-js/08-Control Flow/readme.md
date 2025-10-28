# Control Flow

**Control flow** — порядок виконання інструкцій у програмі. За замовчуванням код виконується зверху вниз, але його можна змінювати за допомогою умов, циклів та обробки виключень.

---

## Sequential (послідовний)

Найпростіший режим виконання — інструкції виконуються у порядку появи.

```js
console.log('Start');
console.log('Middle');
console.log('End');
```

---

## Conditional Statements

### if / if...else / if...else if

Виконує блок коду залежно від істинності умови.

```js
const score = 75;
if (score >= 90) {
  console.log('A');
} else if (score >= 75) {
  console.log('B');
} else {
  console.log('C');
}
```

### switch

Зручний для перевірки виразу проти набору варіантів.

```js
const status = 'pending';
switch (status) {
  case 'success':
    console.log('OK');
    break;
  case 'pending':
    console.log('Please wait');
    break;
  default:
    console.log('Unknown status');
}
```

---

## Exception Handling

### throw

Кидає помилку вручну; виконання поточного блоку припиняється.

```js
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
```

### try / catch / finally

Захоплює помилки і дає змогу виконати очищення у `finally`.

```js
try {
  const result = divide(10, 0);
  console.log(result);
} catch (err) {
  console.error('Caught:', err.message);
} finally {
  console.log('Always runs');
}
```

### Поради по обробці помилок

- Кидайте інформативні Error з описом.
- Не ховайте помилки без логування у production.
- Використовуйте спеціалізовані класи помилок для різних причин (ValidationError, NotFoundError тощо).

---

## Взаємодія з циклами

Цикли (for, while, do..while, for...of, for...in) змінюють послідовний потік — див. розділ "Loops and Iterations" (07) для повних прикладів.

---

## Поради та best practices

- Використовуйте `switch` для багатьох фіксованих варіантів.
- Для простих умов — `if`/`else if`.
- Мінімізуйте вкладеність (refactor до функцій).
- Явно обробляйте очікувані помилки, а для неочікуваних — логування та перехоплення на вищих рівнях (global handlers).

---

## Interview Questions

- Що таке control flow і які є способи його контролю?
- Чим відрізняється `if` від `switch`?
- Як працює `try/catch/finally`?
- Коли слід кидати `throw` замість повертати помилку?

## What to Answer

- Control flow — порядок виконання коду; змінюється умовами, циклами, виключеннями.
- `if` — для умов, `switch` — для багатьох дискретних варіантів; `switch` читається краще при численних case.
- `try` запускає код, `catch` обробляє помилки, `finally` виконується завжди.
- `throw` для фатальних/очікуваних помилок; використовуйте специфічні повідомлення/класи помилок.
