# Advanced SQL Functions

Advanced SQL functions дозволяють виконувати складні маніпуляції та аналіз даних у базах, забезпечуючи потужні інструменти для роботи з текстом, датами, числами та умовною логікою.

---

## String Functions (Робота з рядками)

- **CONCAT** — об'єднує кілька рядків в один.

  ```sql
  SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
  ```

- **LENGTH** — повертає кількість символів у рядку.

  ```sql
  SELECT LENGTH(email) FROM users;
  ```

- **SUBSTRING** — витягує підрядок із рядка.

  ```sql
  SELECT SUBSTRING(name, 1, 3) FROM products;
  ```

- **REPLACE** — замінює всі входження підрядка на інший.

  ```sql
  SELECT REPLACE(phone, '-', '') FROM contacts;
  ```

- **UPPER / LOWER** — переводить рядок у верхній/нижній регістр.

  ```sql
  SELECT UPPER(city), LOWER(country) FROM addresses;
  ```

---

## Date & Time Functions (Дати та час)

- **DATE** — тип даних для зберігання дати (YYYY-MM-DD).
- **TIME** — тип для зберігання часу (HH:MM:SS).
- **TIMESTAMP** — дата і час разом (YYYY-MM-DD HH:MI:SS).
- **DATEPART** — повертає частину дати (рік, місяць, день тощо).

  ```sql
  SELECT DATEPART(year, hire_date) FROM employees;
  ```

- **DATEADD** — додає/віднімає інтервал до дати.

  ```sql
  SELECT DATEADD(day, 7, order_date) FROM orders;
  ```

- **DATEDIFF** — рахує різницю між двома датами.

  ```sql
  SELECT DATEDIFF(day, start_date, end_date) FROM projects;
  ```

---

## Numeric Functions (Числові функції)

- **FLOOR** — округлює вниз до цілого.

  ```sql
  SELECT FLOOR(price) FROM products;
  ```

- **CEILING** — округлює вгору до цілого.

  ```sql
  SELECT CEILING(rating) FROM reviews;
  ```

- **ROUND** — округлює до заданої кількості знаків.

  ```sql
  SELECT ROUND(salary, 2) FROM employees;
  ```

- **ABS** — повертає абсолютне значення.

  ```sql
  SELECT ABS(balance) FROM accounts;
  ```

- **MOD** — повертає залишок від ділення.

  ```sql
  SELECT MOD(id, 2) FROM users;
  ```

---

## Conditional Functions (Умовна логіка)

- **CASE** — умовна конструкція (аналог if-else).

  ```sql
  SELECT name,
         CASE
           WHEN salary > 10000 THEN 'High'
           WHEN salary > 5000 THEN 'Medium'
           ELSE 'Low'
         END AS salary_level
  FROM employees;
  ```

- **NULLIF** — повертає NULL, якщо два вирази рівні, інакше — перший вираз.

  ```sql
  SELECT NULLIF(sold, 0) FROM products;
  ```

- **COALESCE** — повертає перше не-NULL значення зі списку.

  ```sql
  SELECT COALESCE(phone, 'No phone') FROM customers;
  ```

---

## Interview Questions

- Які основні функції для роботи з рядками, датами, числами в SQL?
- Як об'єднати кілька стовпців у один рядок?
- Як витягти частину рядка або дати?
- Як виконати умовну логіку у SELECT?
- Для чого використовують COALESCE та NULLIF?
- Як округлити число або отримати залишок від ділення?

---

## What to Answer

- **Які основні функції для роботи з рядками, датами, числами в SQL?**
  - Для рядків: `CONCAT`, `LENGTH`, `SUBSTRING`, `REPLACE`, `UPPER`, `LOWER`.
  - Для дат і часу: `DATE`, `TIME`, `TIMESTAMP`, `DATEPART`, `DATEADD`, `DATEDIFF`.
  - Для чисел: `FLOOR`, `CEILING`, `ROUND`, `ABS`, `MOD`.

- **Як об'єднати кілька стовпців у один рядок?**
  - Використовуйте `CONCAT`:

    ```sql
    SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
    ```

- **Як витягти частину рядка або дати?**
  - Для рядка: `SUBSTRING`:

    ```sql
    SELECT SUBSTRING(name, 1, 3) FROM products;
    ```

  - Для дати: `DATEPART` (або EXTRACT у деяких СУБД):

    ```sql
    SELECT DATEPART(year, hire_date) FROM employees;
    ```

- **Як виконати умовну логіку у SELECT?**
  - Використовуйте `CASE`:

    ```sql
    SELECT name,
           CASE
             WHEN salary > 10000 THEN 'High'
             WHEN salary > 5000 THEN 'Medium'
             ELSE 'Low'
           END AS salary_level
    FROM employees;
    ```

- **Для чого використовують COALESCE та NULLIF?**
  - `COALESCE` повертає перше не-NULL значення зі списку (наприклад, для підстановки дефолтного значення):

    ```sql
    SELECT COALESCE(phone, 'No phone') FROM customers;
    ```

  - `NULLIF` повертає NULL, якщо два вирази рівні, інакше — перший вираз (наприклад, щоб уникнути ділення на нуль):

    ```sql
    SELECT NULLIF(sold, 0) FROM products;
    ```

- **Як округлити число або отримати залишок від ділення?**
  - Округлення: `ROUND`, `FLOOR`, `CEILING`:

    ```sql
    SELECT ROUND(salary, 2), FLOOR(price), CEILING(rating) FROM employees;
    ```

  - Залишок від ділення: `MOD`:

    ```sql
    SELECT MOD(id, 2) FROM users;
    ```
