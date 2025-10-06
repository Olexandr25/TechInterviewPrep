# Viewing Commit History

Viewing commit history is an important part of working with Git, allowing you to track the chronology of changes in a repository. This helps you understand the evolution of a project, analyze changes made, and collaborate effectively in a team.

## Basic Commands

- `git log` — shows the full commit history.
- `git log --oneline` — short format (one line per commit).
- `git log --graph` — graphical representation of branches and merges.
- `git log --patch` — shows the content of changes for each commit.
- `git log --stat` — statistics of changes per file.

## Filtering History

- By author:
    `git log --author="Name"`
- By date:
    `git log --since="2024-01-01" --until="2024-06-30"`
- By file:
    `git log -- <file>`

## Best Practices

- Write clear commit messages.
- Use tags for important versions (`git tag v1.0.0`).
- Regularly review history to analyze changes.

## Interview Questions

- How do you view commit history in Git?
- What options can you use with `git log`?
- How do you filter commits by author or date?

## Interview Answers

- To view commit history, use the `git log` command with various options for convenient formatting.
- You can use options like `--oneline`, `--graph`, `--patch`, `--stat` for different viewing formats.
- To filter commits, use parameters like `--author`, `--since`, `--until`, or specify a particular file.
