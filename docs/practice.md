# Practice Guide 🏋️

> Hands-on exercises to build real Git muscle memory — without fear of breaking anything.

Work through these exercises in order. Each one builds on the last.

---

## Before You Start

Make sure Git is installed and configured:

```bash
git --version                              # should print a version number
git config --global user.name "Your Name"
git config --global user.email "you@email.com"
```

---

## Exercise 1 — Your First Repository ⭐ Beginner

**Goal:** Create a repo, make a file, and commit it.

```bash
# 1. Create a new folder and enter it
mkdir my-first-repo
cd my-first-repo

# 2. Initialize Git
git init

# 3. Check the status (should show "No commits yet")
git status

# 4. Create a file
echo "# My First Git Project" > README.md

# 5. Stage it
git add README.md

# 6. Check status again (should show file staged)
git status

# 7. Commit it
git commit -m "docs: add README"

# 8. View your commit
git log --oneline
```

**✅ You've made your first commit!**

---

## Exercise 2 — Multiple Commits ⭐ Beginner

**Goal:** Practice the add → commit cycle with multiple files.

```bash
# Inside my-first-repo (from Exercise 1)

# 1. Create more files
echo "Hello World" > index.html
echo "body { margin: 0; }" > style.css

# 2. Stage them one at a time
git add index.html
git commit -m "feat: add index page"

git add style.css
git commit -m "style: add base stylesheet"

# 3. Stage everything at once
echo "console.log('hello')" > app.js
git add .
git commit -m "feat: add app script"

# 4. View full history
git log --oneline

# 5. See who changed what
git log --stat
```

**✅ You have a 4-commit history!**

---

## Exercise 3 — Branching ⭐⭐ Beginner-Intermediate

**Goal:** Create a branch, make changes, switch back.

```bash
# 1. See your current branches
git branch

# 2. Create and switch to a new branch
git checkout -b feature/add-about-page

# 3. Confirm you're on the new branch
git branch

# 4. Make a change on this branch
echo "About page content" > about.html
git add about.html
git commit -m "feat: add about page"

# 5. Switch back to main — notice about.html disappears!
git checkout main
ls

# 6. Switch back to feature branch — it's back!
git checkout feature/add-about-page
ls
```

**✅ You understand that branches are isolated!**

---

## Exercise 4 — Merging ⭐⭐ Intermediate

**Goal:** Merge a feature branch into main.

```bash
# Continuing from Exercise 3

# 1. Switch to main
git checkout main

# 2. Merge the feature branch
git merge feature/add-about-page

# 3. Verify about.html is now in main
ls
git log --oneline

# 4. Clean up the merged branch
git branch -d feature/add-about-page

# 5. Confirm it's gone
git branch
```

**✅ You've completed a full branch → merge cycle!**

---

## Exercise 5 — Undo Changes ⭐⭐ Intermediate

**Goal:** Practice the different ways to undo things in Git.

```bash
# Scenario A: Unstage a file you didn't mean to stage
echo "oops" > mistake.txt
git add mistake.txt
git status                          # shows staged
git restore --staged mistake.txt   # unstage it
git status                          # no longer staged
rm mistake.txt

# Scenario B: Discard changes in a file
echo "original content" > notes.txt
git add notes.txt && git commit -m "docs: add notes"

echo "bad changes" >> notes.txt    # make a bad change
git diff notes.txt                  # see the change
git restore notes.txt              # discard it
cat notes.txt                       # back to original!

# Scenario C: Undo the last commit (keep changes)
git log --oneline                  # note the commits
git reset HEAD~1                   # undo last commit
git log --oneline                  # commit is gone
git status                          # changes are still there!
```

**✅ You know how to undo at every stage!**

---

## Exercise 6 — Stashing ⭐⭐ Intermediate

**Goal:** Save work temporarily without committing.

```bash
# 1. Make some changes
echo "work in progress" >> README.md

# 2. You need to switch branches but aren't ready to commit
git stash                          # save your work

# 3. Your working directory is clean now
git status
cat README.md                       # changes are gone temporarily

# 4. Do whatever you needed to do on another branch...
git checkout -b hotfix/urgent
git checkout main

# 5. Restore your stashed work
git stash pop

# 6. Your changes are back!
cat README.md
git stash list                     # stash is empty again
```

**✅ You can context-switch without losing work!**

---

## Exercise 7 — GitHub Workflow ⭐⭐⭐ Advanced

**Goal:** Full fork → clone → PR workflow on a real repo.

### Part A: Fork and Clone

1. Go to [github.com/firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions)
2. Click **Fork**
3. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/first-contributions.git
cd first-contributions
```

### Part B: Add Upstream Remote

```bash
git remote add upstream https://github.com/firstcontributions/first-contributions.git
git remote -v
```

### Part C: Create a Branch and Make a Change

```bash
git checkout -b add-your-name

# Edit Contributors.md and add your name
# Then:
git add Contributors.md
git commit -m "docs: add Your Name to contributors list"
```

### Part D: Push and Open a PR

```bash
git push origin add-your-name
```

Go to GitHub → your fork → Compare & pull request → Open PR.

**🎉 You've made a real open-source contribution!**

---

## Exercise 8 — Simulate a Conflict ⭐⭐⭐ Advanced

**Goal:** Create and resolve a merge conflict (safely).

```bash
# 1. Create a file on main
echo "Line 1" > shared.txt
echo "Line 2" >> shared.txt
git add shared.txt && git commit -m "feat: add shared file"

# 2. Create branch A and change Line 2
git checkout -b branch-a
sed -i 's/Line 2/Line 2 - from Branch A/' shared.txt
git add shared.txt && git commit -m "feat: update from branch A"

# 3. Go back to main, create branch B, change the same line
git checkout main
git checkout -b branch-b
sed -i 's/Line 2/Line 2 - from Branch B/' shared.txt
git add shared.txt && git commit -m "feat: update from branch B"

# 4. Merge branch-a into main first (no conflict)
git checkout main
git merge branch-a

# 5. Now merge branch-b (CONFLICT!)
git merge branch-b
git status                          # shows conflict
cat shared.txt                      # see the conflict markers

# 6. Resolve the conflict manually — edit shared.txt to keep what you want
# Remove the <<<, ===, >>> markers and keep the correct content

# 7. Stage and commit the resolution
git add shared.txt
git commit -m "fix: resolve merge conflict in shared.txt"
git log --oneline --graph
```

**✅ You can handle merge conflicts!**

---

## Quick Practice Checklist

Use this to track your progress:

- [ ] `git init` — initialize a repo
- [ ] `git add` — stage files
- [ ] `git commit -m` — make a commit
- [ ] `git status` — check state
- [ ] `git log` — view history
- [ ] `git branch` — list branches
- [ ] `git checkout -b` — create a branch
- [ ] `git merge` — merge branches
- [ ] `git restore` — undo changes
- [ ] `git stash` — stash work
- [ ] `git remote add` — connect to GitHub
- [ ] `git push` — push to remote
- [ ] `git pull` — pull from remote
- [ ] Fork a repo on GitHub
- [ ] Open a Pull Request

---

## Practice in the Browser

Not ready to run commands locally? Use the **[GitStart Interactive Terminal](../practice.html)** to simulate all of the above commands in your browser — no setup needed.

---

## Related Docs

- [Git Basics Reference](git-basics.md) — Concept explanations
- [GitHub Workflow Guide](workflow.md) — Full PR workflow
