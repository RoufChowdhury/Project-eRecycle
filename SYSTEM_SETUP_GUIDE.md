# Sivan's Universal System Setup Guide

> **Created:** 2026-02-18 | **Machine:** MacBook Pro M4 Pro, 24GB, 2TB
> **Purpose:** One-time setup that serves every future project, business, and automation

---

## The Architecture: 3 Zones

Your entire digital workflow lives in 3 zones:

```
┌─────────────────────────────────────────────────────────────┐
│  ZONE 1: WORKSPACE (Local — ~/Workspace/)                   │
│  Where you BUILD. Fast SSD access. Git-tracked.             │
│  ├── projects/       Active projects                        │
│  ├── sandbox/        Experiments and learning               │
│  └── archive/        Completed projects                     │
├─────────────────────────────────────────────────────────────┤
│  ZONE 2: VAULT (iCloud — ~/Library/.../CloudDocs/Vault/)    │
│  Where you STORE. Synced across devices. Templates & docs.  │
│  ├── templates/      Reusable project starters              │
│  ├── references/     Research, papers, frameworks            │
│  └── credentials/    Secure configs (not secrets)            │
├─────────────────────────────────────────────────────────────┤
│  ZONE 3: SYSTEM (Dotfiles — ~/.*/)                          │
│  Where you CONFIGURE. Shell, agents, tools.                 │
│  ├── ~/.claude/      Claude Code config                     │
│  ├── ~/.openclaw/    OpenClaw agents & skills               │
│  ├── ~/.ironshell_profile  Shell customizations             │
│  └── ~/.secrets.env  API key references                     │
└─────────────────────────────────────────────────────────────┘
```

**Rule:** Every file on your machine belongs in exactly one zone. If you can't classify it, it goes in sandbox/.

---

## Zone 1: Workspace (Local)

### Directory Structure

```
~/Workspace/
├── projects/                    ← Active work (git repos)
│   ├── erecycle-business/       ← Current: Project eRecycle
│   ├── decision-expert-ai/      ← If/when active
│   └── [future-project]/
│
├── sandbox/                     ← Learning & experiments
│   ├── claude-course/           ← Claude Code learning
│   ├── gemini-work/             ← Gemini experiments
│   ├── agent-sdk-lab/           ← Agent SDK experiments
│   └── [experiment-name]/
│
├── tools/                       ← Custom scripts & utilities
│   ├── bin/                     ← CLI scripts (in PATH)
│   │   ├── new-project          ← Create project from template
│   │   ├── evidence-check       ← Run evidence audit
│   │   └── agent-report         ← Generate agent activity summary
│   └── configs/                 ← Shareable tool configs
│       ├── .gitignore-default
│       ├── tsconfig-strict.json
│       └── eslint-default.mjs
│
├── archive/                     ← Completed projects (read-only)
│   └── [project-name]-YYYY-MM/
│
└── README.md                    ← Index of everything
```

### Why This Works

| Before (Scattered) | After (Organized) |
|---|---|
| `~/erecycle-business/` | `~/Workspace/projects/erecycle-business/` |
| `~/Developer/clawdbot/` | `~/Workspace/sandbox/clawdbot/` |
| `~/ai/gemini-work/` | `~/Workspace/sandbox/gemini-work/` |
| `~/Claude Course/` | `~/Workspace/sandbox/claude-course/` |
| `~/Documents/GitHub/` | `~/Workspace/projects/` or `sandbox/` |

**One parent directory. Everything findable in 2 seconds.**

---

## Zone 2: Vault (iCloud)

### Directory Structure

```
~/Library/Mobile Documents/com~apple~CloudDocs/Vault/
├── templates/                           ← Reusable project starters
│   ├── ai-project-starter/              ← Full project template
│   │   ├── README.md
│   │   ├── MASTER_PROMPT.md
│   │   ├── AGENT_LOG.md
│   │   ├── CLAUDE.md
│   │   ├── GIT_WORKFLOW.md
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── next.config.ts
│   ├── multi-agent-system/              ← Agent coordination template
│   │   ├── AGENT_REGISTRY.md
│   │   ├── COORDINATION_PROTOCOL.md
│   │   └── LOGGING_FORMAT.md
│   ├── bun-web-starter/                 ← Minimal web project
│   │   ├── index.ts
│   │   ├── index.html
│   │   ├── package.json
│   │   └── .gitignore
│   └── research-paper/                  ← Academic research template
│       ├── SLR_TEMPLATE.md
│       ├── EVIDENCE_TRACKER.md
│       └── FRAMEWORK_EXTRACTOR.md
│
├── references/                          ← Knowledge base
│   ├── frameworks/                      ← Extracted frameworks
│   │   ├── documentation-driven-dev.md
│   │   ├── multi-agent-coordination.md
│   │   └── evidence-based-claims.md
│   ├── cheatsheets/                     ← Quick reference cards
│   │   ├── git-workflow.md
│   │   ├── bun-commands.md
│   │   ├── claude-code-tips.md
│   │   └── agent-config-minimum.md
│   └── research/                        ← Papers & findings
│       ├── circular-economy/
│       ├── ai-agents/
│       └── e-waste-regulation/
│
├── credentials/                         ← Non-secret configs
│   ├── firebase-configs/                ← Firebase project configs
│   ├── gcloud-configs/                  ← GCP project configs
│   └── agent-configs/                   ← Agent setup files
│
└── lessons-learned.md                   ← Running log of insights
```

### Why iCloud for Vault

- Syncs automatically across all Apple devices
- Accessible from iPhone/iPad (read reference docs anywhere)
- Backed up by Apple
- Free with your Apple ID (up to 5GB, upgradable)
- Survives machine replacement/reset

### What Goes Where

| Content | Zone | Why |
|---------|------|-----|
| Active code | Workspace (local) | Fast SSD, git-tracked |
| Templates | Vault (iCloud) | Synced, persistent, reusable |
| Research papers | Vault (iCloud) + Zotero | Accessible anywhere |
| API keys | macOS Keychain | Secure, never in files |
| Tool configs | Zone 3 (dotfiles) | Per-machine settings |
| Completed projects | Workspace/archive + GitHub | Version-controlled |

---

## Zone 3: System (Dotfiles)

### Shell Configuration

Your `.zshrc` and `.ironshell_profile` are already well-configured. Additions needed:

```bash
# === ADD TO ~/.ironshell_profile ===

# ─── Workspace Navigation ───
export WORKSPACE="$HOME/Workspace"
export VAULT="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Vault"

alias ws='cd $WORKSPACE'
alias projects='cd $WORKSPACE/projects'
alias sandbox='cd $WORKSPACE/sandbox'
alias vault='cd $VAULT'
alias templates='cd $VAULT/templates'
alias refs='cd $VAULT/references'

# ─── Project Quick Access ───
alias erecycle='cd $WORKSPACE/projects/erecycle-business/Project-eRecycle'
alias er='erecycle'

# ─── Tool Shortcuts ───
alias cc='claude'                    # Claude Code
alias gg='gemini'                    # Gemini CLI
alias cu='cursor .'                  # Cursor in current dir
alias ol='ollama'                    # Ollama

# ─── Agentic Shortcuts ───
alias agent-log='cat AGENT_LOG.md | tail -50'
alias agent-status='echo "=== Last 3 Agent Entries ===" && grep "^### " AGENT_LOG.md | tail -3'

# ─── Custom Scripts ───
export PATH="$WORKSPACE/tools/bin:$PATH"
```

### Claude Code Memory

Your Claude Code auto-memory at `~/.claude/projects/` already tracks per-project context. The MEMORY.md files persist across sessions.

### OpenClaw Agents

Your existing 7 OpenClaw agents are well-organized:

```
~/.openclaw/agents/
├── content/    ← Content generation
├── main/       ← Primary agent
├── ops/        ← Operations
├── research/   ← Research tasks
├── revenue/    ← Business/revenue
├── success/    ← Success metrics
└── voice/      ← Voice interface
```

---

## Setup Commands

### Step 1: Create Workspace Structure

```bash
# Create the Workspace
mkdir -p ~/Workspace/{projects,sandbox,tools/bin,tools/configs,archive}

# Create Workspace README
cat > ~/Workspace/README.md << 'EOF'
# Sivan's Workspace

## Structure
- `projects/` — Active git repos (erecycle, future projects)
- `sandbox/` — Learning, experiments, prototypes
- `tools/` — Custom scripts and shared configs
- `archive/` — Completed projects

## Quick Access
- `ws` — Jump to Workspace
- `projects` — Jump to projects
- `sandbox` — Jump to sandbox
EOF
```

### Step 2: Create Vault Structure in iCloud

```bash
# Create the Vault
mkdir -p ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/{templates,references/frameworks,references/cheatsheets,references/research,credentials}
mkdir -p ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/templates/{ai-project-starter,multi-agent-system,bun-web-starter,research-paper}
```

### Step 3: Move Existing Projects (Symlink Approach)

Instead of moving files (which could break git), create symlinks:

```bash
# Symlink existing projects into Workspace
ln -s ~/erecycle-business ~/Workspace/projects/erecycle-business
ln -s ~/Developer/clawdbot ~/Workspace/sandbox/clawdbot
ln -s ~/ai/gemini-work ~/Workspace/sandbox/gemini-work

# Future projects go directly in ~/Workspace/projects/
```

### Step 4: Extract Templates to Vault

```bash
# Copy eRecycle docs as templates (remove project-specific content later)
cp ~/erecycle-business/Project-eRecycle/AGENT_LOG.md \
   ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/templates/ai-project-starter/AGENT_LOG.md

cp ~/erecycle-business/Project-eRecycle/CLAUDE.md \
   ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/templates/ai-project-starter/CLAUDE.md

cp ~/erecycle-business/Project-eRecycle/.gitignore \
   ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/templates/ai-project-starter/.gitignore

cp ~/erecycle-business/Project-eRecycle/GIT_WORKFLOW.md \
   ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/templates/ai-project-starter/GIT_WORKFLOW.md

cp ~/erecycle-business/Project-eRecycle/README.md \
   ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/templates/ai-project-starter/README.md
```

### Step 5: Update Shell Profile

```bash
# Append Workspace aliases to IronShell profile
cat >> ~/.ironshell_profile << 'ALIASES'

# ─── Workspace Navigation (added 2026-02-18) ───
export WORKSPACE="$HOME/Workspace"
export VAULT="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Vault"

alias ws='cd $WORKSPACE'
alias projects='cd $WORKSPACE/projects'
alias sandbox='cd $WORKSPACE/sandbox'
alias vault='cd "$VAULT"'
alias templates='cd "$VAULT/templates"'
alias refs='cd "$VAULT/references"'
alias erecycle='cd $WORKSPACE/projects/erecycle-business/Project-eRecycle'
alias er='erecycle'

alias cc='claude'
alias gg='gemini'
alias cu='cursor .'

alias agent-log='cat AGENT_LOG.md | tail -50'
alias agent-status='echo "=== Last 3 Entries ===" && grep "^### " AGENT_LOG.md | tail -3'

export PATH="$WORKSPACE/tools/bin:$PATH"
ALIASES

source ~/.ironshell_profile
```

### Step 6: Create the `new-project` Script

```bash
cat > ~/Workspace/tools/bin/new-project << 'SCRIPT'
#!/bin/zsh
# Usage: new-project <name> [template]
# Templates: ai (default), web, research, agent

PROJECT_NAME=$1
TEMPLATE=${2:-ai}
VAULT="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Vault"
WORKSPACE="$HOME/Workspace"

if [ -z "$PROJECT_NAME" ]; then
  echo "Usage: new-project <project-name> [ai|web|research|agent]"
  echo ""
  echo "Templates:"
  echo "  ai       — Full AI project (AGENT_LOG, MASTER_PROMPT, etc.)"
  echo "  web      — Bun web project (index.ts, index.html)"
  echo "  research — Academic research (SLR, evidence tracker)"
  echo "  agent    — Multi-agent system (registry, protocols)"
  exit 1
fi

# Map template name to directory
case $TEMPLATE in
  ai)       TEMPLATE_DIR="$VAULT/templates/ai-project-starter" ;;
  web)      TEMPLATE_DIR="$VAULT/templates/bun-web-starter" ;;
  research) TEMPLATE_DIR="$VAULT/templates/research-paper" ;;
  agent)    TEMPLATE_DIR="$VAULT/templates/multi-agent-system" ;;
  *)        echo "Unknown template: $TEMPLATE"; exit 1 ;;
esac

TARGET="$WORKSPACE/projects/$PROJECT_NAME"

if [ -d "$TARGET" ]; then
  echo "Error: $TARGET already exists"
  exit 1
fi

# Copy template
cp -r "$TEMPLATE_DIR" "$TARGET"
cd "$TARGET"

# Replace placeholders
find . -type f \( -name "*.md" -o -name "*.json" -o -name "*.ts" \) \
  -exec sed -i '' "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" {} +

# Replace date placeholder
TODAY=$(date +%Y-%m-%d)
find . -type f -name "*.md" -exec sed -i '' "s/{{DATE}}/$TODAY/g" {} +

# Initialize git
git init
git add .
git commit -m "Initial commit from $TEMPLATE template

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

echo ""
echo "Project created successfully!"
echo "  Name:     $PROJECT_NAME"
echo "  Template: $TEMPLATE"
echo "  Location: $TARGET"
echo ""
echo "Next steps:"
echo "  cd $TARGET"
echo "  bun install  (if package.json exists)"
echo "  claude       (start Claude Code session)"
SCRIPT

chmod +x ~/Workspace/tools/bin/new-project
```

### Step 7: Install Missing Tools

```bash
# Install n8n for workflow automation
brew install n8n

# Verify all tools
echo "=== Tool Check ===" && \
for cmd in claude gemini cursor ollama gh gcloud docker bun python3 node n8n; do
  printf "%-12s " "$cmd"
  which $cmd 2>/dev/null && echo "OK" || echo "MISSING"
done
```

### Step 8: Save Cheatsheets to Vault

```bash
# Create minimum agent config cheatsheet
cat > ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/references/cheatsheets/agent-config-minimum.md << 'EOF'
# Minimum Agent Configuration

## 4 Core Tools (covers everything)

| Tool | Role | Command |
|------|------|---------|
| Claude Code Max | Build + orchestrate | `claude` |
| Cursor AI | Fast IDE edits | `cursor .` |
| Perplexity Pro | Research + verify | perplexity.ai |
| n8n | Automate workflows | `n8n start` |

## Quick Reference

- Writing code? → `claude`
- Quick edits? → `cursor .`
- Research? → Perplexity Pro (browser)
- Verify a claim? → Perplexity Pro
- Academic papers? → Perplexity + `gemini`
- Automate tasks? → `n8n start`
- Multi-agent? → Claude Agent Teams
- Deploy? → `claude` + `gh`
- Local AI? → `ollama run llama3.2`
EOF
```

---

## Future-Proofing: Agentic Skills to Learn

### Priority 1: Master Now (Feb-Mar 2026)

| Skill | Tool | Why | How to Start |
|-------|------|-----|-------------|
| **Claude Agent SDK** | Claude Code | Build custom agents. The future of software. | `claude` → read Agent SDK docs |
| **Multi-agent orchestration** | Claude Agent Teams | Parallel AI workers on your codebase | Enable experimental flag |
| **Prompt engineering** | All LLMs | 10x your output from every AI tool | Practice with MASTER_PROMPT patterns |
| **n8n workflows** | n8n | Automate repetitive tasks forever | `n8n start` → build first workflow |

### Priority 2: Learn This Quarter (Apr-Jun 2026)

| Skill | Tool | Why | How to Start |
|-------|------|-----|-------------|
| **MCP (Model Context Protocol)** | Claude Code + others | Connect AI to any data source | Read Anthropic MCP docs |
| **Vertex AI agents** | Google Cloud | Enterprise-grade AI deployment | Use your $1,400 GCP credit |
| **LangChain/LangGraph** | Python | Industry-standard agent framework | `pip install langchain` |
| **Firebase + AI** | Firebase | Already configured in eRecycle | `firebase init` with AI Logic |

### Priority 3: Explore This Year (2026)

| Skill | Tool | Why |
|-------|------|-----|
| **AI agent monetization** | Your multi-agent system | Sell your coordination framework as a service |
| **Computer Use agents** | Claude + Anthropic | Agents that control your screen. Next frontier |
| **Voice-first agents** | OpenClaw voice agent | Natural language computer control |
| **Edge AI** | MLX + Ollama | Run AI locally on Apple Silicon. Privacy-first |

---

## Maintenance Schedule

### Daily (2 min)
- [ ] `agent-log` — Check what agents did
- [ ] Commit work with semantic messages

### Weekly (15 min)
- [ ] Push all repos to GitHub
- [ ] Extract 1 reusable pattern to Vault
- [ ] Update lessons-learned.md if applicable

### Monthly (1 hour)
- [ ] Audit Vault templates — still accurate?
- [ ] Review tool subscriptions — still using them?
- [ ] Update system (brew upgrade, tool updates)
- [ ] Archive completed projects

### Quarterly (2 hours)
- [ ] Major template extraction
- [ ] Evaluate new tools (check SWE-bench, industry reports)
- [ ] Share 1 learning publicly (blog, GitHub, LinkedIn)
- [ ] Backup Vault to external drive

---

## Emergency Recovery

If your machine dies tomorrow:

### What's Safe (Automatic)
- iCloud Vault (templates, references, cheatsheets)
- GitHub repos (all code)
- macOS Keychain (API keys, backed up to iCloud Keychain)
- Zotero (synced to Zotero cloud)

### What Needs Manual Backup
- `~/.ironshell_profile` → Copy to Vault/credentials/
- `~/.claude/settings.json` → Copy to Vault/credentials/
- `~/.openclaw/` → Copy agents/ and skills/ to Vault/credentials/
- `~/Workspace/tools/bin/` → These scripts should be in a git repo

### Recovery Steps (New Machine)
```bash
# 1. Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Install core tools
brew install bun node@22 gh ollama python@3.14 n8n mlx

# 3. Install casks
brew install --cask docker-desktop cursor

# 4. Clone your repos
gh auth login
gh repo clone CortexDev1/erecycle-framework
gh repo clone CortexDev1/erecycle-business

# 5. Restore configs from Vault
cp ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/credentials/.ironshell_profile ~/.ironshell_profile
cp ~/Library/Mobile\ Documents/com~apple~CloudDocs/Vault/credentials/claude-settings.json ~/.claude/settings.json

# 6. Restore API keys from Keychain (automatic via iCloud Keychain)

# 7. Create Workspace
mkdir -p ~/Workspace/{projects,sandbox,tools/bin,archive}
# Symlink repos into Workspace
```

**Recovery time estimate: 30 minutes** (vs hours without this system)
