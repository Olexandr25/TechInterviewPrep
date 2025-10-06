# .gitignore

The `.gitignore` file is used to specify files and folders that Git should ignore (not track). It is located at the root of the repository.

- **Purpose:** Allows you to avoid adding temporary, service, or private files (such as logs, build outputs, IDE settings) to the repository.
- **No separate command:** To ignore new files, you need to manually edit `.gitignore` and commit the changes.
- **Syntax:** The file contains patterns that match file and folder names.

## Example .gitignore

```plaintext
node_modules/
dist/
*.log
.env
.idea/
```

## Interview questions

- What is the purpose of the `.gitignore` file?
- How do you add a new pattern to `.gitignore`?
- Can you ignore files that are already being tracked?

## Interview answers

- `.gitignore` defines which files and folders should not be tracked by Git.
- To add a new pattern, you need to edit `.gitignore` and commit the changes.
- If a file is already tracked by Git, adding it to `.gitignore` will not stop it from being tracked—you need to remove it from the index first (`git rm --cached <file>`).
