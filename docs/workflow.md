# GitHub Contribution Workflow 🔄

> The complete, step-by-step guide to contributing to an open-source project on GitHub.

This is the workflow you'll use for almost every open-source contribution you ever make. Learn it once and it becomes second nature.

---

## The Big Picture

```
Original Repo (upstream)
        │
        │ fork
        ▼
Your Fork (origin)          ← lives on GitHub
        │
        │ clone
        ▼
Your Local Machine          ← where you actually work
        │
        │ push changes
        ▼
Your Fork (origin)
        │
        │ Pull Request
        ▼
Original Repo (upstream)    ← your contribution!
```

---

## Step-by-Step Walkthrough

### Step 1 — Find a Project

Look for beginner-friendly projects with issues tagged **"good first issue"** or **"help wanted"**.

**Where to look:**
- [goodfirstissue.dev](https://goodfirstissue.dev) — curated list by language
- [up-for-grabs.net](https://up-for-grabs.net) — filterable project list
- [firstcontributions.github.io](https://firstcontributions.github.io) — practice PRs
- GitHub search: `label:"good first issue"` + your language

**What to look for in a healthy repo:**
- Active recently (commits in the last few months)
- Has a `CONTRIBUTING.md` file
- Maintainers respond to issues and PRs
- Clear `README.md`

---

### Step 2 — Fork the Repository

On GitHub, click the **Fork** button (top right of the repo page).

This creates `github.com/YOUR-USERNAME/project-name` — your own copy you have full control over.

> **Why fork?** You can't push directly to someone else's repo. Your fork gives you a place to push your changes before proposing them.

---

### Step 3 — Clone Your Fork Locally

```bash
git clone https://github.com/YOUR-USERNAME/project-name.git
cd project-name
```

Now you have the code on your machine.

---

### Step 4 — Connect to the Original (Upstream)

This lets you sync future changes from the original repo:

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/project-name.git
git remote -v
# You should see:
# origin    https://github.com/YOUR-USERNAME/project-name.git
# upstream  https://github.com/ORIGINAL-OWNER/project-name.git
```

---

### Step 5 — Create a Branch

**Never work directly on `main`.** Always create a descriptive branch:

```bash
git checkout -b fix/typo-in-readme
# or
git checkout -b feat/add-search-bar
# or
git checkout -b docs/improve-installation-steps
```

**Branch naming conventions:**
- `fix/` — for bug fixes
- `feat/` — for new features
- `docs/` — for documentation changes
- `style/` — for CSS/visual changes
- `refactor/` — for code restructuring

---

### Step 6 — Make Your Changes

Edit the files. Make your fix, improvement, or addition.

Then check what you changed:

```bash
git status        # see which files changed
git diff          # see exactly what changed line by line
```

---

### Step 7 — Stage and Commit

Stage your changes and commit with a clear message:

```bash
git add .
# or be specific:
git add README.md docs/workflow.md

git commit -m "docs: fix typo in installation section"
```

**Good commit messages:**
- Use the imperative: "fix typo" not "fixed typo"
- Be specific: "fix broken link to docs" not "fix stuff"
- Keep it under 72 characters

---

### Step 8 — Keep Your Branch Up to Date

Before pushing, make sure you're not behind the original repo:

```bash
git fetch upstream
git rebase upstream/main
# or
git merge upstream/main
```

This prevents merge conflicts in your Pull Request.

---

### Step 9 — Push to Your Fork

```bash
git push origin fix/typo-in-readme
```

---

### Step 10 — Open a Pull Request

1. Go to your fork on GitHub
2. You'll see a banner: "Compare & pull request" — click it
3. Fill in the **PR template** completely:
   - What does this PR do?
   - Which issue does it fix? (`Closes #42`)
   - Add screenshots if you changed the UI
4. Click **Create pull request**

---

## After Opening Your PR

### What happens next?

- A maintainer will review your PR
- They may **approve and merge** it 🎉
- They may **request changes** — this is normal! Respond politely and push the fixes
- They may **close it** — this happens too, and it's not personal. Read their feedback

### If changes are requested:

```bash
# Make the requested changes locally
git add .
git commit -m "fix: address review feedback"
git push origin fix/typo-in-readme
# The PR updates automatically — no need to open a new one
```

### After your PR is merged:

```bash
# Update your local main
git checkout main
git pull upstream main

# Clean up your branch
git branch -d fix/typo-in-readme

# Update your fork's main on GitHub
git push origin main
```

---

## Common Mistakes to Avoid

| Mistake | How to avoid it |
|---------|----------------|
| Working directly on `main` | Always create a branch first |
| Vague commit messages | Be specific: "what" and "why" |
| Giant PRs with many unrelated changes | One PR = one purpose |
| Not reading `CONTRIBUTING.md` | Read it before writing a single line |
| Skipping tests | Run the test suite before pushing |
| Giving up after review requests | Treat it as a learning opportunity |

---

## Writing a Great Pull Request Description

A good PR description makes the reviewer's job easy and gets your PR merged faster.

**Template:**
```markdown
## What does this PR do?
Fixes a broken link in the README that pointed to a 404 page.

## Why?
Users were clicking the "Contributing" link and getting a 404 error.

## How?
Updated the URL from `docs/contrib.md` to `CONTRIBUTING.md`.

## Related issue
Closes #23

## Screenshots
Before: [screenshot]
After: [screenshot]
```

---

## Your Contribution Is In! What's Next?

- Your name will appear in the project's contributor list 🏆
- The commit is now part of the public history forever
- You've officially contributed to open source!

**Level up:**
- Look for more issues in the same project — you're already familiar with it
- Try a slightly harder issue next time
- Eventually, help review other people's PRs

---

## Related Docs

- [Git Basics Reference](git-basics.md) — Core Git concepts
- [Practice Guide](practice.md) — Hands-on exercises
- [GitStart Interactive Terminal](../practice.html) — Practice the workflow
