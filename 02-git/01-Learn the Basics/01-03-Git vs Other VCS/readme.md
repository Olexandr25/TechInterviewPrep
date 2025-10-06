# Git vs Other VCS

Git is the de facto standard for version control in modern development, but there are other VCS systems. Here are the main differences:

## Mercurial

- Distributed system, similar to Git.
- Architecture is more centralized.
- Does not use hashes to track changes.
- Simple to use, but less popular.

## Subversion (SVN)

- Centralized system.
- Requires a central server to work.
- Supports branching and merging, but less flexible than Git.
- Convenient for small teams or projects with a simple structure.

## Perforce

- Commercial centralized system.
- Targeted at large projects (games, enterprise).
- Has additional features: build automation, task tracking.
- Requires a license.

## CVS

- One of the oldest VCS.
- Centralized, few modern features.
- Considered obsolete, but still used in some legacy projects.

---

## Why Git?

- Distributed architecture: every developer has a full copy of the repository.
- High speed for branching and merging.
- No dependency on a central server.
- Flexibility, scalability, large community.

## Interview questions

- How does Git differ from SVN?
- What are the advantages of distributed VCS?
- For which projects is Perforce better suited?

## Interview answers

- **How does Git differ from SVN?**
    Git is distributed, so each user has a full copy of the repository and can work offline. SVN is centralized and requires a connection to a central server for most operations.

- **What are the advantages of distributed VCS?**
    Distributed VCS allow offline work, better collaboration, and improved backup and recovery since every user has the full history.

- **For which projects is Perforce better suited?**
    Perforce is ideal for large-scale projects with huge binary files (like games or enterprise software), where advanced access control and integration with build systems are needed.

## Tricky points

- Git is more complex for beginners, but much more powerful.
- Centralized VCS are simpler for access control.
- Some older VCS do not support modern features (pull requests, code review).
