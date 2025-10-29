# Data Integrity and Security

**Data integrity and security** в SQL — це комплекс заходів і технік для забезпечення точності, узгодженості та захисту даних у базі. Це включає використання обмежень (constraints), транзакцій, контроль доступу, шифрування, резервне копіювання та аудит.

---

## Data Integrity Constraints (Обмеження цілісності)

Обмеження цілісності (integrity constraints) — це правила, які гарантують правильність і узгодженість даних у таблицях. Вони можуть бути задані при створенні таблиці або додані пізніше.

### Основні типи constraints

- **PRIMARY KEY** — унікально ідентифікує кожен запис у таблиці.

  ```sql
  CREATE TABLE students (
      student_id INT PRIMARY KEY,
      ...
  );
  ```

  - Може бути складеним (з кількох стовпців).

- **NOT NULL** — забороняє зберігати NULL у стовпці.

  ```sql
  first_name TEXT NOT NULL
  ```

- **UNIQUE** — гарантує унікальність значень у стовпці або групі стовпців.

  ```sql
  email TEXT UNIQUE NOT NULL
  ```

  - Може бути на кілька стовпців:

    ```sql
    UNIQUE (course_name, department)
    ```

- **DEFAULT** — встановлює значення за замовчуванням.

  ```sql
  major TEXT DEFAULT 'Undeclared'
  ```

- **CHECK** — перевіряє, чи відповідає значення певній умові.

  ```sql
  grade INT CHECK (grade BETWEEN 0 AND 100)
  ```

  - Може бути складним, з кількома умовами.

- **FOREIGN KEY** — забезпечує зв'язок між таблицями, підтримує referential integrity.

  ```sql
  FOREIGN KEY (student_id) REFERENCES students(student_id)
  ```

#### Додавання constraints після створення таблиці

```sql
ALTER TABLE enrollments
ADD CONSTRAINT enroll_pk PRIMARY KEY (student_id, course_id, year);
```

---

## Приклади використання constraints

```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    major TEXT DEFAULT 'Undeclared',
    enrollment_year INT,
    CONSTRAINT year_check CHECK (enrollment_year >= 1900)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name TEXT NOT NULL,
    department TEXT NOT NULL,
    UNIQUE (course_name, department)
);

CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    year INT CHECK (year >= 1900),
    grade INT NULL DEFAULT NULL,
    is_passing_grade BOOLEAN NULL DEFAULT NULL,
    CONSTRAINT grade_check CHECK (grade BETWEEN 0 AND 100),
    CONSTRAINT is_passing_grade CHECK (
        (grade IS NULL AND is_passing_grade IS NULL) OR
        (grade >= 60 AND is_passing_grade = TRUE) OR
        (grade < 60 AND is_passing_grade = FALSE)
    ),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    PRIMARY KEY (student_id, course_id, year)
);
```

---

## Security: GRANT and REVOKE

- **GRANT** — надає користувачам або ролям права на об'єкти БД (SELECT, INSERT, UPDATE, DELETE тощо).

  ```sql
  GRANT SELECT, UPDATE ON students TO user1;
  GRANT INSERT ON enrollments TO PUBLIC;
  ```

  - `WITH GRANT OPTION` дозволяє передавати права іншим.

- **REVOKE** — відкликає раніше надані права.

  ```sql
  REVOKE SELECT ON students FROM user1;
  REVOKE INSERT ON enrollments FROM PUBLIC;
  ```

  - Можливий каскадний ефект: якщо користувач передав права іншим, вони теж будуть відкликані.

---

## Database Security Best Practices

1. **Принцип найменших привілеїв** — надавайте лише мінімально необхідні права.
2. **Регулярні оновлення** — підтримуйте СУБД у актуальному стані.
3. **Складні паролі** — використовуйте складні паролі та змінюйте їх регулярно.
4. **Обмеження віддаленого доступу** — вимикайте, якщо не потрібно.
5. **Не використовуйте адміністраторський акаунт для щоденних задач**.
6. **Шифрування** — шифруйте трафік між додатком і БД.
7. **Резервне копіювання** — регулярно створюйте бекапи.
8. **Моніторинг та аудит** — відстежуйте дії користувачів у БД.
9. **Сканування на вразливості** — використовуйте спеціальні інструменти.
10. **Захист від SQL-ін'єкцій** — використовуйте параметризовані запити.

---

## Interview Questions

- Які основні типи integrity constraints у SQL?
- Для чого потрібен PRIMARY KEY? Чим він відрізняється від UNIQUE?
- Як забезпечити зв'язок між таблицями?
- Як обмежити допустимі значення у стовпці?
- Як працюють GRANT і REVOKE?
- Які основні принципи безпеки баз даних?
- Як захистити БД від SQL-ін'єкцій?

---

## What to Answer

- **Які основні типи integrity constraints у SQL?**
  - PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, CHECK, FOREIGN KEY. Всі вони забезпечують цілісність і правильність даних у таблицях.

- **Для чого потрібен PRIMARY KEY? Чим він відрізняється від UNIQUE?**
  - PRIMARY KEY — це унікальний ідентифікатор кожного рядка, не допускає NULL і може бути лише один на таблицю. UNIQUE — забезпечує унікальність значень у стовпці/стовпцях, але допускає кілька таких обмежень і може містити NULL.

- **Як забезпечити зв'язок між таблицями?**
  - За допомогою FOREIGN KEY, який посилається на PRIMARY KEY іншої таблиці. Це гарантує, що значення у дочірній таблиці існують у батьківській.

- **Як обмежити допустимі значення у стовпці?**
  - Використовувати CHECK (наприклад, CHECK (grade BETWEEN 0 AND 100)), NOT NULL, або перелік допустимих значень через IN.

- **Як працюють GRANT і REVOKE?**
  - GRANT — надає права користувачам або ролям на об'єкти БД (наприклад, SELECT, INSERT). REVOKE — відкликає ці права. Можна надавати права з опцією передачі (WITH GRANT OPTION).

- **Які основні принципи безпеки баз даних?**
  - Принцип найменших привілеїв, регулярні оновлення, складні паролі, обмеження віддаленого доступу, шифрування, резервне копіювання, моніторинг, аудит, сканування на вразливості.

- **Як захистити БД від SQL-ін'єкцій?**
  - Використовувати параметризовані запити або prepared statements, не вставляти дані напряму у SQL-рядки, перевіряти і валідувати вхідні дані.
