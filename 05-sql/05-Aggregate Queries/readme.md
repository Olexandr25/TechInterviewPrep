# Aggregate Queries

**Aggregate queries** в SQL використовуються для виконання обчислень над кількома рядками даних, повертаючи одне підсумкове значення або згруповані результати. Такі запити зазвичай використовують агрегатні функції та оператори групування.

---

## Основні агрегатні функції

- **COUNT()** — повертає кількість рядків, що відповідають умові.

  ```sql
  SELECT COUNT(*) FROM employees WHERE department = 'IT';
  ```

- **SUM()** — обчислює суму значень числового стовпця.

  ```sql
  SELECT department, SUM(salary) FROM employees GROUP BY department;
  ```

- **AVG()** — обчислює середнє значення числового стовпця.

  ```sql
  SELECT AVG(age) FROM employees;
  ```

- **MIN()** — знаходить мінімальне значення у стовпці.

  ```sql
  SELECT MIN(salary) FROM employees;
  ```

- **MAX()** — знаходить максимальне значення у стовпці.

  ```sql
  SELECT MAX(hire_date) FROM employees;
  ```

---

## GROUP BY

`GROUP BY` — оператор, який групує рядки за одним або кількома стовпцями, дозволяючи застосовувати агрегатні функції до кожної групи окремо.

**Приклад:**

```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department;
```

Цей запит поверне кількість співробітників у кожному департаменті.

---

## HAVING

`HAVING` — фільтрує результати після групування (аналог WHERE, але для груп).

**Приклад:**

```sql
SELECT department, SUM(salary)
FROM employees
GROUP BY department
HAVING SUM(salary) > 100000;
```

Цей запит поверне лише ті департаменти, де сумарна зарплата перевищує 100000.

---

## Важливі моменти

- `WHERE` фільтрує окремі рядки до групування.
- `HAVING` фільтрує вже згруповані результати.
- Агрегатні функції ігнорують NULL (крім COUNT(*), який рахує всі рядки).

---

## Interview Questions

- Які основні агрегатні функції в SQL? Наведіть приклади.
- Для чого використовується GROUP BY?
- Чим HAVING відрізняється від WHERE?
- Як знайти максимальну/мінімальну/середню/сумарну величину у групах?
- Як порахувати кількість унікальних значень у стовпці?
- Як поєднувати агрегатні функції з JOIN?

---

## What to Answer

- **Основні агрегатні функції:**
  - `COUNT` — рахує кількість рядків (усіх або за умовою).

    ```sql
    SELECT COUNT(*) FROM employees;
    SELECT COUNT(DISTINCT department) FROM employees;
    ```

  - `SUM` — обчислює суму значень числового стовпця.

    ```sql
    SELECT SUM(salary) FROM employees;
    SELECT department, SUM(salary) FROM employees GROUP BY department;
    ```

  - `AVG` — обчислює середнє значення числового стовпця.

    ```sql
    SELECT AVG(age) FROM employees;
    SELECT department, AVG(salary) FROM employees GROUP BY department;
    ```

  - `MIN` — знаходить мінімальне значення у стовпці.

    ```sql
    SELECT MIN(hire_date) FROM employees;
    SELECT department, MIN(salary) FROM employees GROUP BY department;
    ```

  - `MAX` — знаходить максимальне значення у стовпці.

    ```sql
    SELECT MAX(salary) FROM employees;
    SELECT department, MAX(salary) FROM employees GROUP BY department;
    ```

- **GROUP BY** — групує дані для підрахунків у кожній групі.
  - Наприклад, підрахувати кількість співробітників у кожному департаменті:

    ```sql
    SELECT department, COUNT(*) FROM employees GROUP BY department;
    ```

- **HAVING** — фільтрує групи після агрегації, `WHERE` — рядки до агрегації.
  - Наприклад, знайти департаменти з кількістю співробітників більше 5:

    ```sql
    SELECT department, COUNT(*)
    FROM employees
    GROUP BY department
    HAVING COUNT(*) > 5;
    ```

  - `WHERE` використовується для фільтрації рядків до групування:

    ```sql
    SELECT department, COUNT(*)
    FROM employees
    WHERE salary > 50000
    GROUP BY department;
    ```

- **Для підрахунку унікальних значень:**
  - Використовуйте `COUNT(DISTINCT column)`:

    ```sql
    SELECT COUNT(DISTINCT department) FROM employees;
    ```

- **Агрегатні функції з JOIN:**
  - Можна поєднувати агрегатні функції з об'єднанням таблиць для аналізу пов'язаних даних:

    ```sql
    SELECT d.name, COUNT(e.id)
    FROM departments d
    JOIN employees e ON d.id = e.department_id
    GROUP BY d.name;
    ```

- **Агрегатні функції часто використовують для:**
  - Звітів, статистики, аналітики, підрахунку сум, середніх, мінімальних/максимальних значень у групах, аналізу унікальних значень тощо.

- **Додатково:**
  - Агрегатні функції ігнорують NULL (крім COUNT(*)).
  - HAVING потрібен, якщо потрібно фільтрувати саме агреговані групи, а не окремі рядки.
