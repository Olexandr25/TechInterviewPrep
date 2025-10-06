# Branching Basics in Git

## Creating a Branch

Creating a branch in Git is a basic operation that allows you to work on new features or fixes without affecting the main branch (main/master). Branches can be created via the terminal or through the GitHub interface.

**Command to create a branch:**

```sh
git branch <branch-name>
```

**Create and switch to a branch immediately:**

```sh
git checkout -b <branch-name>
```

---

## Renaming a Branch

Renaming a branch means changing its name without losing history or commits. The code and history remain unchanged; only the branch reference (name) is updated.

**Command to rename the current branch:**

```sh
git branch -m <new-branch-name>
```

**Rename another branch:**

```sh
git branch -m <old-name> <new-name>
```

---

## Deleting a Branch

Deleting a branch removes the pointer to a particular line of development. The commits remain in history, but the branch is no longer accessible by that name.

**Delete a local branch:**

```sh
git branch -d <branch-name>
```

**Force delete (if not merged):**

```sh
git branch -D <branch-name>
```

**Delete a remote branch:**

```sh
git push origin --delete <branch-name>
```

---

## Checkout Branch

Checkout means switching to another branch, making it active. Your files are updated to the state of that branch, and you can work on it.

**Command to switch:**

```sh
git checkout <branch-name>
```

**Recommended since Git 2.23+:**

```sh
git switch <branch-name>
```

---

## git switch: Modern Alternative to git checkout

The `git switch` command was introduced in Git 2.23 to simplify branch operations. It does only one thing—switches branches—while `git checkout` has many functions (switching branches, restoring files, creating new branches, etc.).

**Key differences:**

- `git switch <branch>` — switches to an existing branch.
- `git switch -c <branch>` — creates a new branch and switches to it.
- `git checkout <branch>` — also switches branches but can be used for other tasks (like restoring files).

**Advantages of `git switch`:**

- Simple and clear syntax for working specifically with branches.
- Less risk of accidentally changing files or performing unexpected actions.

**Examples:**

```sh
git switch feature-branch         # Switch to an existing branch
git switch -c new-feature        # Create and switch to a new branch
```

---

## Merging Basics

Merge is the process of combining changes from one branch into another. Conflicts may occur during merging and must be resolved manually. A merge creates a new commit containing the combined changes.

**Command to merge:**

```sh
git checkout <target-branch>
git merge <source-branch>
```

---

## Interview questions

- How do you create a new branch in Git?
- How do you rename or delete a branch?
- What is the difference between `git checkout` and `git switch`?
- What is `git switch` used for and when should you use it?
- How does branch merging work and what is a merge conflict?
- How do you delete a remote branch?

## Interview answers

- To create a branch, use `git branch <branch-name>` or `git checkout -b <branch-name>`, or the modern `git switch -c <branch-name>`.
- To rename a branch: `git branch -m <new-name>`. To delete: `git branch -d <branch-name>`.
- `git switch` is a modern command for switching branches, simpler and safer than the all-purpose `git checkout`.
- Use `git switch` for switching between branches, and `git checkout` for restoring files or specific tasks.
- Merge combines changes from one branch into another. If changes conflict, you must resolve conflicts manually before completing the merge.
- To delete a remote branch, use: `git push origin --delete <branch-name>`.
