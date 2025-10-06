# Local vs Global Config

To manage local and global settings, use the `git config` command with the `--local` and `--global` options.

## Local configuration

- Applies only to the current repository.
- Stored in the `.git/config` file inside the repository.
- Example:

    ```sh
    git config --local user.name "Local User"
    ```

## Global configuration

- Applies to all user repositories on the computer.
- Stored in the `~/.gitconfig` file.
- Example:

    ```sh
    git config --global user.name "Global User"
    ```

## Interview questions

- What is the difference between local and global Git configuration?
- Where are local and global settings stored?
- How do you change the email for only one repository?

## Interview answers

- Local configuration applies only to the current repository, while global configuration applies to all user repositories.
- Local settings are stored in `.git/config`, global settings in `~/.gitconfig`.
- To change the email for only one repository, use:
    `git config --local user.email "local@email.com"`
