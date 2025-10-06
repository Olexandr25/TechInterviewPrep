# git config

The `git config` command is used to configure Git settings at the global or local project level. The settings are stored in plain text `.gitconfig` files.

## Main configuration levels

- **Global** (`--global`): applies to all repositories for the user (stored in `~/.gitconfig`).
- **Local** (default): applies only to the current repository (stored in `.git/config`).
- **System** (`--system`): applies to all users on the computer.

## Usage examples

- Set the user name:

    ```sh
    git config --global user.name "Your Name"
    ```

- Set the email:

    ```sh
    git config --global user.email "your@email.com"
    ```

- View a configuration value:

    ```sh
    git config user.email
    ```

- Set the default editor:

    ```sh
    git config --global core.editor "code --wait"
    ```

## Configuration format

A configuration name consists of a section and a key, separated by a dot, for example: `user.email`.

## Interview questions

- What is the purpose of the `git config` command?
- What configuration levels exist in Git?
- How can you view or change the user email in Git?

## Interview answers

- `git config` allows you to view and change Git settings for all projects or for a specific repository.
- There are three levels: local (for the current repository), global (for the user), and system (for the entire system).
- To change the email, use: `git config --global user.email "your@email.com"`.
