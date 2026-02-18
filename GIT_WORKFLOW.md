# Git Workflow Guide — The Excellent Way

## Philosophy: Atomic Commits + Semantic Messages

Every commit should be:
1. **Atomic** — One logical change per commit
2. **Semantic** — Clear, descriptive message
3. **Traceable** — Linked to AGENT_LOG entry
4. **Reversible** — Easy to rollback if needed

---

## Daily Workflow

### **Morning: Sync & Review**
```bash
# 1. Pull latest changes
git pull origin main

# 2. Read AGENT_LOG.md to see what other agents did
cat AGENT_LOG.md | tail -50

# 3. Check status
git status
```

### **During Work: Commit Often**
```bash
# 1. Stage specific files (avoid "git add .")
git add src/components/NewComponent.tsx
git add src/lib/utils.ts

# 2. Commit with clear message
git commit -m "Add NewComponent with error handling

- Created reusable NewComponent for X
- Added TypeScript types for Y
- Implemented error boundaries

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# 3. Update AGENT_LOG.md after each work session
# (See AGENT_LOG.md for entry template)
```

### **Evening: Push & Document**
```bash
# 1. Push to remote
git push origin main

# 2. Verify on GitHub
gh repo view --web
```

---

## Commit Message Format

### **Template:**
```
<type>: <short summary> (max 70 chars)

<detailed description>
- Bullet point 1
- Bullet point 2

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### **Types:**
- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation only
- `refactor:` — Code restructuring (no behavior change)
- `test:` — Adding tests
- `chore:` — Maintenance (dependencies, config)

### **Examples:**

**Good ✅**
```
feat: Add real-time agent status dashboard

- Created WebSocket connection for live updates
- Added Diya animation with state sync
- Implemented fallback for offline mode

Resolves critical issue #3 from MASTER_PROMPT

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

**Bad ❌**
```
update stuff
```

---

## Branch Strategy (for larger features)

### **Main Branch Protection**
```bash
# For small changes: commit directly to main
git commit -m "docs: Fix typo in README"
git push origin main

# For large features: use feature branches
git checkout -b feature/add-authentication
# ... work on feature ...
git commit -m "feat: Add JWT authentication system"
git push origin feature/add-authentication

# Create pull request
gh pr create --title "Add authentication system" --body "Implements JWT auth with refresh tokens"
```

---

## Emergency: Undo Last Commit

```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Undo last commit and discard changes (DANGEROUS!)
git reset --hard HEAD~1

# Undo last push (VERY DANGEROUS!)
# Don't do this unless you're sure!
git push --force origin main
```

---

## Multi-Agent Coordination

### **Before Starting Work:**
1. Read `AGENT_LOG.md` tail
2. Pull latest changes: `git pull origin main`
3. Check for conflicts

### **After Completing Work:**
1. Commit changes with semantic message
2. Update `AGENT_LOG.md` with entry
3. Commit AGENT_LOG update
4. Push to remote: `git push origin main`

### **Conflict Resolution:**
```bash
# If another agent pushed while you were working:
git pull origin main
# Resolve conflicts in VS Code
git add .
git commit -m "merge: Resolve conflicts with AGT2-AG changes"
git push origin main
```

---

## File Status Reference

```bash
# See what changed
git status

# See detailed changes
git diff

# See commit history
git log --oneline -10

# See who changed what
git blame filename.ts
```

---

## .gitignore Best Practices

**Always ignore:**
- `node_modules/` — Dependencies (reinstall with `bun install`)
- `.next/`, `out/`, `build/` — Build artifacts (regenerate with `bun run build`)
- `.env`, `.env.local` — Secrets (NEVER commit!)
- `*.log` — Logs (temporary)
- `.DS_Store` — macOS metadata

**Always commit:**
- `package.json` — Dependency list
- `bun.lock` — Lockfile (ensures consistent installs)
- `src/` — Source code
- `*.md` — Documentation
- Configuration files (tsconfig.json, next.config.ts, etc.)

---

## GitHub Best Practices

### **Repository Settings:**
1. Add description and topics
2. Enable GitHub Pages (for static demos)
3. Add .github/workflows/ for CI/CD (optional)

### **README.md is Your Storefront:**
- First thing visitors see
- Should answer: What? Why? How?
- Include badges for status, build, coverage

### **Use GitHub Features:**
```bash
# View repo in browser
gh repo view --web

# Create issue
gh issue create --title "Missing src/ directory" --body "Need to implement Next.js app"

# View issues
gh issue list

# Create PR
gh pr create --title "Add authentication" --body "Implements JWT auth"
```

---

## Reusability Tips

### **Make Your Project a Template:**
1. Go to GitHub repo settings
2. Check "Template repository"
3. Now you can create new projects from this template!

### **Extract Reusable Patterns:**
- Save your AGENT_LOG format
- Save your MASTER_PROMPT structure
- Save your Git workflow
- Create a "project-starter" repo

---

## Summary: The Excellent Way

```
┌─────────────────────────────────────┐
│ 1. Document before coding           │
│ 2. Commit atomically with semantics │
│ 3. Update AGENT_LOG after sessions  │
│ 4. Push to remote daily             │
│ 5. Make reversible decisions        │
└─────────────────────────────────────┘
```

**Remember:**
- Commits are cheap — commit often!
- Clear messages save future you hours of debugging
- AGENT_LOG is your team's memory — use it!
