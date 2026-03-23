# Contributing to GitStart 🤝

First off — **thank you for considering a contribution to GitStart!**

This project was built for beginners, and we welcome contributions from beginners too. Whether you're fixing a typo, improving an explanation, or adding a whole new feature — every contribution matters.

If this is your first time contributing to open source, you're in exactly the right place. 🎉

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What Can I Contribute?](#what-can-i-contribute)
- [Getting Started](#getting-started)
- [The Contribution Workflow](#the-contribution-workflow)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Code Style](#code-style)
- [Opening a Pull Request](#opening-a-pull-request)
- [Good First Issues](#good-first-issues)

---

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to keeping this a welcoming, inclusive space for everyone.

---

## What Can I Contribute?

Here are some ways you can contribute to GitStart:

### 🟢 Easy (Great for First Contributions)
- Fix typos or grammar mistakes in any `.md` or `.html` file
- Improve or clarify an explanation in the docs
- Add a missing example command
- Fix a broken link

### 🟡 Medium
- Improve the UI of a section
- Add a new Git concept explanation
- Add a new practice mission to the terminal
- Write a new doc page (e.g., `docs/git-rebase.md`)
- Improve mobile responsiveness

### 🔴 Advanced
- Add new simulated Git commands to the interactive terminal
- Build a quiz/test section
- Integrate the GitHub API for project discovery
- Implement a dark/light theme toggle

---

## Getting Started

### Prerequisites

All you need is:
- A web browser
- A text editor (VS Code recommended)
- Git installed on your machine

### Step 1 — Fork the Repository

Click the **Fork** button at the top right of the [GitStart GitHub page](https://github.com/your-username/gitstart).

This creates your own copy of the project.

### Step 2 — Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/gitstart.git
cd gitstart
```

### Step 3 — Set Up the Upstream Remote

This keeps your fork in sync with the original repo:

```bash
git remote add upstream https://github.com/your-username/gitstart.git
git remote -v  # verify
```

---

## The Contribution Workflow

Follow these steps every time you contribute:

```bash
# 1. Make sure your main branch is up to date
git checkout main
git pull upstream main

# 2. Create a new branch for your change
#    Use a descriptive name!
git checkout -b fix/typo-in-readme
# or
git checkout -b feat/add-rebase-section
# or
git checkout -b docs/improve-workflow-guide

# 3. Make your changes
#    Edit files, add content, fix bugs...

# 4. Stage your changes
git add .
# or stage specific files
git add README.md

# 5. Commit with a clear message (see guidelines below)
git commit -m "docs: fix typo in README contributing section"

# 6. Push your branch to your fork
git push origin fix/typo-in-readme

# 7. Open a Pull Request on GitHub
#    Go to your fork → Compare & pull request → Fill in the template
```

---

## Commit Message Guidelines

We follow the **Conventional Commits** format. This keeps our commit history clean and readable.

### Format

```
type: short description (under 72 characters)
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | Adding a new feature or section |
| `fix` | Fixing a bug or broken behavior |
| `docs` | Changes to documentation or explanations |
| `style` | CSS changes, formatting, no logic change |
| `refactor` | Code restructuring without behavior change |
| `chore` | Maintenance tasks, dependency updates |

### Examples

```bash
git commit -m "feat: add git rebase explanation to docs"
git commit -m "fix: correct broken link in resources section"
git commit -m "docs: improve commit message guide in CONTRIBUTING"
git commit -m "style: improve mobile layout for workflow section"
git commit -m "chore: update .gitignore for macOS files"
```

### Rules
- Use **lowercase** for the type and description
- Use the **imperative mood** ("add" not "added", "fix" not "fixed")
- Keep the subject line under **72 characters**
- Don't end the subject line with a period

---

## Code Style

Since GitStart is currently a pure HTML/CSS/JS project, keep these in mind:

**HTML**
- Use semantic elements (`<section>`, `<nav>`, `<main>`, `<aside>`, etc.)
- Keep indentation consistent (2 spaces)
- Add comments for complex sections

**CSS**
- Use CSS custom properties (variables) for colors and fonts — they're already defined in `:root`
- Follow the existing naming conventions
- Mobile-first where possible

**JavaScript**
- Use `const` and `let` — never `var`
- Use descriptive variable and function names
- Add a comment above any non-obvious logic
- Keep functions small and focused

**Markdown (docs)**
- Use headings in order (H1 → H2 → H3, never skip)
- Include code blocks with language tags (` ```bash `, ` ```html `)
- Keep line length under 120 characters where possible

---

## Opening a Pull Request

When you open a PR, please:

1. **Fill in the PR template** completely
2. **Link the related issue** (if one exists) using `Closes #issue-number`
3. **Add screenshots** if your change affects the UI
4. **Keep PRs focused** — one purpose per PR makes review much faster
5. **Be patient** — maintainers will review your PR and may request changes. This is normal and helpful!

---

## Good First Issues

Not sure where to start? Look for issues labeled:

- [`good first issue`](https://github.com/your-username/gitstart/issues?q=label%3A%22good+first+issue%22) — perfect for new contributors
- [`help wanted`](https://github.com/your-username/gitstart/issues?q=label%3A%22help+wanted%22) — we'd love assistance here
- [`documentation`](https://github.com/your-username/gitstart/issues?q=label%3Adocumentation) — writing and clarity improvements

---

## Questions?

If you're unsure about anything, **open an issue and ask!** There are no dumb questions here. We'd rather you ask than get stuck.

Happy contributing! 🚀
