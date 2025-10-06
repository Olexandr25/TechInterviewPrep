# Staging Area

The staging area (index) in Git is an intermediate stage between the working directory and committing to the repository.

- **Temporary storage:** The staging area holds changes you plan to include in your next commit.
- **Preview:** It allows you to review which changes will be included in the commit before you actually create it.
- **Flexibility:** You can add only specific files or even parts of files to the staging area.

Changes are added to the staging area with the command:

```sh
git add <file>
```

After this, they are ready to be committed:

```sh
git commit -m "Your message"
```

## Interview questions

- What is the staging area in Git?
- How do you add changes to the staging area?
- What is the difference between the staging area and the working directory?

## Interview answers

- The staging area is an intermediate storage for changes being prepared for commit.
- To add changes to the staging area, use the `git add` command.
- The working directory contains all local changes, while the staging area contains only those that will be included in the next commit.
