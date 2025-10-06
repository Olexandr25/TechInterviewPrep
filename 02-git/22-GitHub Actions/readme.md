# GitHub Actions

GitHub Actions — це потужний інструмент для автоматизації, який дозволяє розробникам автоматизувати задачі у життєвому циклі розробки безпосередньо на GitHub. Це CI/CD-платформа, яка дає змогу створювати власні workflow для автоматичної збірки, тестування, деплою та інших дій з кодом.

---

## Що таке GitHub Actions?

GitHub Actions — це платформа для автоматизації та CI/CD, яка дозволяє створювати кастомні workflow, що автоматично виконуються при певних подіях у репозиторії (наприклад, push, pull request, розклад, реліз тощо).
Вона допомагає командам прискорити розробку, покращити якість коду та автоматизувати рутинні задачі.

---

## Usecases

GitHub Actions відкриває широкі можливості для автоматизації:

- **Continuous Integration (CI):** Автоматична збірка та тестування коду при кожному push чи pull request.
- **Continuous Deployment (CD):** Автоматичний деплой додатку після успішної збірки.
- **Code Quality Checks:** Запуск лінтерів, форматерів та інших інструментів для перевірки якості коду.
- **Dependency Updates:** Автоматичне створення pull request для оновлення залежностей.
- **Issue and PR Management:** Автоматичне маркування, призначення або закриття issues та pull requests.
- **Scheduled Tasks:** Регулярне виконання задач (бекапи, обробка даних тощо).
- **Security Scanning:** Автоматичні перевірки безпеки коду та залежностей.
- **Documentation Generation:** Автоматичне створення та публікація документації.
- **Cross-platform Testing:** Тестування коду на різних ОС та середовищах.
- **Release Management:** Автоматизація створення релізів, release notes, завантаження артефактів.

---

## YAML Syntax

YAML (YAML Ain't Markup Language) — це людиноорієнтований формат для опису структурованих даних, який широко використовується для конфігурацій, у тому числі для GitHub Actions.  
Основні риси:

- Простота та читабельність (відступи мають значення)
- Підтримка списків, словників, скалярів
- Незалежність від мови програмування

YAML використовується для опису workflow у `.github/workflows/*.yml`.

---

## Workflow Triggers

Тригери workflow — це події, які запускають виконання workflow.
Типові тригери:

- Зміни у коді (push, pull_request)
- Розклад (schedule)
- Ручний запуск (workflow_dispatch)
- Інші події (release, issue, etc.)

---

## Scheduled Workflows

Можна налаштувати запуск workflow за розкладом (наприклад, щодня чи щотижня) за допомогою cron-синтаксису:

```yaml
on:
  schedule:
    - cron: '0 0 * * *' # щодня опівночі
```

---

## Workflow Runners

Runner — це середовище, де виконується workflow.
Бувають:

- **GitHub-hosted runners:** Віртуальні машини, які надає GitHub (Linux, Windows, macOS)
- **Self-hosted runners:** Ваші власні сервери з кастомним оточенням

---

## Workflow Context

Контекст workflow — це набір змінних та інформації про запуск:

- Подія, що запустила workflow
- Дані про репозиторій, гілку, користувача
- Системні змінні, секрети, environment variables

---

## Secrets and Env Vars

- **Secrets:** Безпечне зберігання чутливих даних (API-ключі, паролі). Додаються через GitHub UI, доступні у workflow як `${{ secrets.MY_SECRET }}`
- **Environment Variables:** Змінні середовища для налаштування workflow або додатку.

---

## Caching Dependencies

Кешування дозволяє зберігати залежності між запусками workflow, що прискорює виконання:

- Зберігайте зібрані бібліотеки, node_modules, pip cache тощо.
- Не зберігайте чутливу інформацію у кеші!

---

## Storing Artifacts

Артефакти — це файли, які створюються під час виконання workflow (наприклад, білди, звіти, логи).
Їх можна зберігати та завантажувати для подальшого використання або перевірки.

---

## Workflow Status

Статуси workflow:

- **Pending:** Очікує запуску
- **In Progress:** Виконується
- **Completed:** Завершено
- **Failed:** Завершено з помилкою

---

## Marketplace Actions

GitHub Marketplace містить тисячі готових actions для автоматизації різних задач (тестування, деплой, безпека тощо).
Можна легко додавати сторонні або власні actions у workflow для розширення можливостей автоматизації.

---

## Де навчитися?

- [Microsoft Learn: Introduction to GitHub Actions](https://learn.microsoft.com/en-us/training/modules/introduction-to-github-actions/)
- [YouTube: GitHub Actions Playlist](https://www.youtube.com/playlist?list=PL0lo9MOBetEHhfG9vFhNBp5hFdpbDq0bK)
- [Офіційна документація GitHub Actions](https://docs.github.com/en/actions)
- [Відео: What are GitHub Actions](https://www.youtube.com/watch?v=R8_veQiYBjI)

---

## Interview Questions

- Що таке GitHub Actions і для чого вони використовуються?
- Які типові сценарії використання GitHub Actions?
- Як працюють workflow triggers, runners, secrets, caching?
- Як використовувати Marketplace Actions?

## What to Answer

- GitHub Actions — це CI/CD-платформа для автоматизації задач у репозиторії GitHub.
- Дозволяє автоматично збирати, тестувати, деплоїти код, оновлювати залежності, керувати issues/PR, запускати регулярні задачі тощо.
- Workflow описуються у YAML, запускаються подіями (push, PR, розклад), можуть використовувати secrets, кеш, артефакти, сторонні actions з Marketplace.
