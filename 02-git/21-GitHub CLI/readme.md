# GitHub CLI

GitHub CLI — це інструмент командного рядка, який дозволяє працювати з GitHub безпосередньо з терміналу. Він дає змогу керувати репозиторіями, створювати issues, pull requests та виконувати інші дії з GitHub, не залишаючи середовища розробки. Це спрощує робочі процеси, підвищує продуктивність і забезпечує зручну інтеграцію локальної розробки з можливостями GitHub.

---

## Installation and Setup

GitHub CLI можна встановити на Windows, macOS і Linux.
Встановлення можливе через офіційний сайт, менеджери пакетів (наприклад, Homebrew для macOS: `brew install gh`).

Після встановлення потрібно автентифікуватися:

```sh
gh auth login
```

Це дозволяє підключити ваш GitHub-акаунт до CLI і виконувати дії з репозиторіями.

---

## Repository management

Основні команди для керування репозиторіями:

- Створити репозиторій:

  ```sh
  gh repo create
  ```

- Видалити репозиторій:

  ```sh
  gh repo delete
  ```

- Змінити видимість:

  ```sh
  gh repo visibility
  ```

- Керувати темами (topics):

  ```sh
  gh repo topic
  ```

---

## Issue Management

Керування issues через CLI:

- Переглянути список:

  ```sh
  gh issue list
  ```

- Створити issue:

  ```sh
  gh issue create --title "Issue Title" --body "Issue body"
  ```

- Призначити користувача:

  ```sh
  gh issue assign <issue-number> <username>
  ```

- Додати label:

  ```sh
  gh issue label <issue-number> <label-name>
  ```

- Закрити issue:

  ```sh
  gh issue close <issue-number>
  ```

---

## Pull Requests

Робота з pull requests:

- Створити pull request:

  ```sh
  gh pr create
  ```

- Злити pull request:

  ```sh
  gh pr merge
  ```

- Переглянути список PR:

  ```sh
  gh pr list
  ```

- Переглянути деталі PR:

  ```sh
  gh pr view
  ```

---

## Use in Automation

GitHub CLI ідеально підходить для автоматизації задач, пов’язаних із GitHub:

- **CI/CD:** Автоматизація створення, рев’ю, злиття PR, релізів.
- **Issue/Project Management:** Масове створення, оновлення, закриття issues, керування проектами.
- **Repository Management:** Клонування, форки, налаштування доступу.
- **GitHub Actions:** Запуск і моніторинг workflow, керування секретами.
- **Скрипти:** Виконання пакетних операцій над кількома репозиторіями.

Щоб використовувати CLI в автоматизації:

1. Встановіть GitHub CLI.
2. Пройдіть автентифікацію.
3. Вивчіть базові команди.
4. Інтегруйте CLI у свої скрипти чи CI/CD-процеси.

---

## Interview Questions

- Для чого використовується GitHub CLI?
- Як встановити та налаштувати GitHub CLI?
- Які основні команди для роботи з репозиторіями, issues, pull requests?
- Як GitHub CLI допомагає в автоматизації?

## What to Answer

- GitHub CLI дозволяє керувати GitHub з терміналу, автоматизувати робочі процеси та інтегрувати GitHub у скрипти та CI/CD.
- Встановлення через менеджер пакетів, автентифікація через `gh auth login`.
- Основні команди: `gh repo create`, `gh issue create`, `gh pr create` тощо.
- CLI спрощує автоматизацію та масові операції з GitHub.
