# Git Basics Reference 📖

> A quick-reference guide for the core Git concepts covered in GitStart.

---

## What is Git?

Git is a **distributed version control system**. It tracks changes to files over time so you can recall specific versions later, collaborate with others, and work on different features simultaneously without breaking anything.

Think of it like a save system in a video game — but for your code. Every "save" (commit) captures a snapshot of your project that you can always return to.

---

## Core Concepts

### Repository (Repo)

A repository is a folder tracked by Git. It contains your project files plus a hidden `.git` directory that stores the entire history of changes.

```bash
# Create a new repository
git init

# Clone an existing repository
git clone https://github.com/username/project.git
```

There are two types:
- **Local repository** — on your computer
- **Remote repository** — on a server like GitHub

---

### Commit

A commit is a saved snapshot of your staged files at a specific point in time. Every commit has:
- A unique **hash** (e.g., `a1b2c3d`)
- An **author** and **timestamp**
- A **commit message** describing what changed

```bash
# Stage files first, then commit
git add .
git commit -m "feat: add login page"

# View commit history
git log --oneline
```

**Good commit message format:**
```
type: short description

# Types: feat, fix, docs, style, refactor, chore
# Examples:
feat: add search functionality
fix: correct typo in README
docs: update installation guide
```

---

### Staging Area (Index)

The staging area is a middle step between editing files and committing them. It lets you choose exactly which changes to include in your next commit.

```
Working Directory → Staging Area → Repository
     (edit)          (git add)     (git commit)
```

```bash
git add filename.txt        # stage one file
git add .                   # stage all changed files
git add *.html              # stage all HTML files

git restore --staged file   # unstage a file
git status                  # see what's staged
```

---

### Branch

A branch is an independent line of development. The default branch is usually called `main` (or `master` in older repos).

Branches let you:
- Work on features without affecting the stable `main` code
- Experiment safely
- Collaborate without overwriting each other's work

```bash
git branch                  # list all branches
git branch feature-name     # create a branch
git checkout feature-name   # switch to it
git checkout -b feature-name # create AND switch (shortcut)
git switch -c feature-name  # modern alternative

git branch -d feature-name  # delete a branch (after merging)
```

---

### Merge

Merging combines changes from one branch into another. When your feature is done, you merge it back into `main`.

```bash
git checkout main           # switch to main
git merge feature-name      # merge the feature into main
```

**Fast-forward merge** — happens when main hasn't changed since you branched off. Git just moves the pointer forward.

**Three-way merge** — happens when both branches have new commits. Git creates a merge commit combining both histories.

**Merge conflict** — happens when both branches changed the same part of the same file. You must resolve it manually.

---

### Remote

A remote is a version of your repository hosted on a server (like GitHub).

```bash
git remote add origin https://github.com/user/repo.git
git remote -v               # list remotes

git push origin main        # send commits to remote
git pull origin main        # get latest from remote
git fetch                   # download without merging
```

---

### Fork

A fork is your own copy of someone else's repository on GitHub. Forking is how you contribute to projects you don't own:

1. Fork the repo → you own the copy
2. Clone your fork locally
3. Make changes on a branch
4. Push to your fork
5. Open a Pull Request to the original

---

## Essential Commands Quick Reference

| Command | What it does |
|---------|-------------|
| `git init` | Initialize a new repository |
| `git clone <url>` | Copy a remote repo locally |
| `git status` | Show current state of working tree |
| `git add <file>` | Stage a file for the next commit |
| `git add .` | Stage all changed files |
| `git commit -m "msg"` | Save a snapshot with a message |
| `git log` | Show commit history |
| `git log --oneline` | Compact one-line history |
| `git branch` | List all branches |
| `git checkout -b name` | Create and switch to a branch |
| `git merge <branch>` | Merge a branch into current |
| `git push origin main` | Push commits to GitHub |
| `git pull` | Pull latest changes from remote |
| `git diff` | Show unstaged changes |
| `git restore <file>` | Discard changes in working tree |
| `git stash` | Temporarily save uncommitted work |
| `git tag v1.0.0` | Tag a specific commit |

---

## Common Scenarios

### Starting fresh on a new machine

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "nano"
```

### Oops — I committed to the wrong branch

```bash
git log --oneline -3         # find the commit hash
git reset HEAD~1             # undo last commit, keep changes
git checkout correct-branch
git add . && git commit -m "moved to correct branch"
```

### Oops — I need to undo my last commit

```bash
git reset HEAD~1             # undo commit, keep your changes staged
git reset --soft HEAD~1      # same, but changes stay staged
git reset --hard HEAD~1      # undo commit AND discard changes (careful!)
```

### I want to save my work and switch branches quickly

```bash
git stash                    # save current work
git checkout other-branch    # switch
# do your thing...
git checkout original-branch
git stash pop                # restore your work
```

---

## Next Steps

- [GitHub Workflow Guide](workflow.md) — How to contribute to a real project
- [Practice Guide](practice.md) — Exercises to practice these commands
- [GitStart Interactive Terminal](../practice.html) — Practice in your browser
