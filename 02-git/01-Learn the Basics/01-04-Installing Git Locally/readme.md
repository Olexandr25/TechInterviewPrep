# Installing Git Locally

To use Git on your local computer, you first need to install it. The installation process depends on your operating system:

## Windows

- Download the installer from the [official Git website](https://git-scm.com/download/win) or [GitHub releases](https://github.com/git-for-windows/git/releases).
- Run the installer and follow the instructions.

## macOS

- Open Terminal.
- Enter the command:

    ```sh
    brew install git
    ```

    (Requires Homebrew: [brew.sh](https://brew.sh/))

## Linux

- For Ubuntu/Debian:

    ```sh
    sudo apt-get install git
    ```

- For Fedora/CentOS:

    ```sh
    sudo yum install git
    ```

## Verifying Installation

After installation, check the Git version:

```sh
git --version
```

You should see something like: `git version 2.42.0`

## Useful Resources

- [Official Git Documentation](https://git-scm.com/doc)
- [GitHub Docs: Installing Git](https://docs.github.com/en/get-started/quickstart/set-up-git)

---

**Tip:**
After installation, set your name and email for commits:

```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
