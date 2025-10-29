# Data Manipulation Language (DML)

**Data Manipulation Language (DML)** — це підмножина SQL, яка використовується для роботи з даними у таблицях бази даних. DML дозволяє отримувати, додавати, змінювати та видаляти дані, не змінюючи структуру самої бази.

---

## Основні DML-команди

- **SELECT** — вибірка даних з однієї або кількох таблиць.

  ```sql
  SELECT * FROM customers WHERE city = 'Kyiv';
  ```

- **INSERT** — додавання нових рядків у таблицю.

  ```sql
  INSERT INTO customers (id, name, address) VALUES (1, 'John Smith', '123 Main St');
  ```

- **UPDATE** — зміна існуючих даних у таблиці.

  ```sql
  UPDATE customers SET address = '456 Park Ave' WHERE id = 1;
  ```

- **DELETE** — видалення рядків з таблиці.

  ```sql
  DELETE FROM customers WHERE id = 1;
  ```

---

## Основні SQL-оператори та конструкції у DML

- **FROM** — вказує таблицю(и), з яких відбувається вибірка.
- **WHERE** — фільтрує рядки за умовою.
- **JOIN** — об'єднує дані з кількох таблиць (INNER, LEFT, RIGHT, FULL).
- **GROUP BY** — групує дані для агрегації (COUNT, SUM, AVG тощо).
- **ORDER BY** — сортує результати.
- **HAVING** — фільтрує групи після GROUP BY.

---

## JOIN-и

- **INNER JOIN** — повертає лише ті рядки, які мають співпадіння в обох таблицях.
- **LEFT JOIN** — всі рядки з лівої таблиці + співпадіння з правої (або NULL).
- **RIGHT JOIN** — всі рядки з правої таблиці + співпадіння з лівої (або NULL).
- **FULL JOIN** — всі рядки з обох таблиць (де немає співпадіння — NULL).

---

## GROUP BY та HAVING

- **GROUP BY** — групує дані за одним або кількома стовпцями.
- **HAVING** — фільтрує групи після агрегації (аналог WHERE для GROUP BY).

---

## Порівняння DML та DDL

| DML (Data Manipulation Language) | DDL (Data Definition Language) |
|----------------------------------|-------------------------------|
| Працює з даними (SELECT, INSERT, UPDATE, DELETE) | Працює зі структурою (CREATE, ALTER, DROP, TRUNCATE) |
| Може бути відкотити (ROLLBACK)  | Зазвичай не можна відкотити   |
| Використовується користувачами, додатками | Використовується адміністраторами, розробниками |
| Оперує даними                   | Оперує схемою/об'єктами       |

---

## FAQ

- **Чи можна відкотити DML-операції?**  
  Так, якщо вони виконуються у транзакції (ROLLBACK).

- **Чи можна відкотити DDL-операції?**  
  Зазвичай ні, зміни структури незворотні.

- **Які команди входять у DML?**  
  SELECT, INSERT, UPDATE, DELETE.

- **Які команди входять у DDL?**  
  CREATE, ALTER, DROP, TRUNCATE.

- **В якому порядку виконуються DDL та DML?**  
  Спочатку DDL (створення структури), потім DML (робота з даними).

---

## Приклади

```sql
-- Вибірка даних
SELECT name, age FROM employees WHERE age > 30 ORDER BY age DESC;

-- Додавання нового запису
INSERT INTO employees (name, age, department) VALUES ('Ivan', 28, 'IT');

-- Оновлення даних
UPDATE employees SET department = 'HR' WHERE name = 'Ivan';

-- Видалення запису
DELETE FROM employees WHERE age < 20;

-- Групування та агрегація
SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 2;
```

---

## Interview Questions

- Які основні DML-команди? Наведіть приклади.
- Як працює SELECT і які опції він підтримує (WHERE, ORDER BY, GROUP BY, HAVING)?
- Як додати, змінити або видалити дані у таблиці?
- Для чого потрібен WHERE у UPDATE та DELETE?
- Як працює JOIN і які бувають типи JOIN?
- Як працюють агрегатні функції (COUNT, SUM, AVG, MIN, MAX)?
- Чим DML відрізняється від DDL?
- Як працюють транзакції та ROLLBACK у DML?

---

## What to Answer

- Основні команди: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- `SELECT` — вибірка даних; підтримує фільтрацію (`WHERE`), сортування (`ORDER BY`), групування (`GROUP BY`), агрегацію, обмеження (`LIMIT`).
- `INSERT` — додавання рядків; можна вказати всі або лише деякі колонки.
- `UPDATE` — зміна даних; обов'язково вказуйте `WHERE`, щоб не змінити всі рядки.
- `DELETE` — видалення рядків; без `WHERE` видалить всі дані з таблиці.
- `JOIN` — об'єднання даних з кількох таблиць; типи: `INNER`, `LEFT`, `RIGHT`, `FULL`.
- Агрегатні функції: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.
- DML — для роботи з даними, DDL — для роботи зі структурою.
- DML-операції можна відкотити у транзакції (ROLLBACK).
