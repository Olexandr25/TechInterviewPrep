# git init

The `git init` command creates a new Git repository. It is used for:

- Turning an existing, unversioned project into a Git repository.
- Initializing a new, empty repository for future development.

After running this command, a hidden `.git` directory will appear in your folder, containing all repository information (history, configuration, etc.).

Most other Git commands won't work until a repository is initialized, so `git init` is usually the first step in a new project.

## Usage example

```sh
cd /path/to/your/project
git init
```

## Interview questions

- What is the purpose of the `git init` command?
- What is created in the project after running `git init`?
- Can you initialize Git in an existing folder with files?

## Interview answers

- `git init` creates a new Git repository in the current directory.
- After running the command, a hidden `.git` folder appears, containing all the repository's history and metadata.
- Yes, you can initialize Git in an existing folder, and all existing files will become available for tracking.
