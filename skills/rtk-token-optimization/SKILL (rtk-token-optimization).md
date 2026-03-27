---
name: rtk-token-optimization
description: RTK (Rust Token Killer) - High-performance CLI proxy that reduces LLM token consumption by 60-90% on dev commands. Use this skill to optimize Claude Code, Copilot, Cursor, and other AI tools with token-efficient output filtering. Install once, get massive token savings automatically.
license: MIT - https://github.com/rtk-ai/rtk/blob/master/LICENSE
---

# 🚀 RTK - Token Optimization for AI Coding Tools

RTK (Rust Token Killer) is a high-performance CLI proxy that reduces LLM token consumption by **60-90%** on common development commands.

**Single Rust binary, zero dependencies, <10ms overhead.**

🔗 **Project**: https://github.com/rtk-ai/rtk  
🌐 **Website**: https://www.rtk-ai.app/  
💬 **Discord**: https://discord.gg/RySmvNF5kF

---

## 📊 Why RTK?

### Token Savings (30-min Claude Code Session)

| Command | Usage | Tokens (Raw) | Tokens (RTK) | Savings |
|---------|-------|--------------|--------------|---------|
| ls / tree | 10x | 2,000 | 400 | **-80%** |
| cat / read | 20x | 40,000 | 12,000 | **-70%** |
| grep / rg | 8x | 16,000 | 3,200 | **-80%** |
| git status | 10x | 3,000 | 600 | **-80%** |
| git diff | 5x | 10,000 | 2,500 | **-75%** |
| git log | 5x | 2,500 | 500 | **-80%** |
| git add/commit/push | 8x | 1,600 | 120 | **-92%** |
| cargo test / npm test | 5x | 25,000 | 2,500 | **-90%** |
| ruff check | 3x | 3,000 | 600 | **-80%** |
| pytest | 4x | 8,000 | 800 | **-90%** |
| go test | 3x | 6,000 | 600 | **-90%** |
| docker ps | 3x | 900 | 180 | **-80%** |
| **TOTAL** | | **~118,000** | **~23,900** | **-80%** |

**Real-world impact**: In a 30-minute coding session, RTK typically saves **100,000+ tokens** while maintaining all the information you need.

---

## ⚙️ How It Works

### Four Token Reduction Strategies

```
WITHOUT RTK:                          WITH RTK:

Claude --git status--> shell --> git  Claude --git status--> RTK --> git
  ^                      |              ^                     |        |
  | ~2,000 tokens        |              |  ~200 tokens  filter |        |
  +---------------------+              +--------- (filtered) -+--------+
```

1. **Smart Filtering** - Removes noise (comments, whitespace, boilerplate)
2. **Grouping** - Aggregates similar items (files by directory, errors by type)
3. **Truncation** - Keeps relevant context, cuts redundancy
4. **Deduplication** - Collapses repeated log lines with counts

---

## 📥 Installation

### Homebrew (Recommended for macOS/Linux)

```bash
brew install rtk
```

### Quick Install (Linux/macOS)

```bash
curl -fsSL https://raw.githubusercontent.com/rtk-ai/rtk/refs/heads/master/install.sh | sh
```

Installs to `~/.local/bin`. Add to PATH if needed:
```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc  # or ~/.zshrc
```

### Cargo Install

```bash
cargo install --git https://github.com/rtk-ai/rtk
```

### Pre-built Binaries

Download from [releases](https://github.com/rtk-ai/rtk/releases):
- **macOS**: `rtk-x86_64-apple-darwin.tar.gz` / `rtk-aarch64-apple-darwin.tar.gz`
- **Linux**: `rtk-x86_64-unknown-linux-musl.tar.gz` / `rtk-aarch64-unknown-linux-gnu.tar.gz`
- **Windows**: `rtk-x86_64-pc-windows-msvc.zip`

### Verify Installation

```bash
rtk --version   # Should show version
rtk gain        # Should show token savings stats
```

⚠️ **Name collision**: Another project named "rtk" (Rust Type Kit) exists on crates.io. If `rtk gain` fails, use `cargo install --git` instead.

---

## 🚀 Quick Start

### 1. Initialize for Your AI Tool

```bash
# Claude Code / Copilot (default)
rtk init -g

# Specific AI tools:
rtk init -g --gemini            # Gemini CLI
rtk init -g --codex             # OpenAI Codex
rtk init -g --agent cursor      # Cursor
rtk init --agent windsurf        # Windsurf
rtk init --agent cline          # Cline / Roo Code
rtk init -g --opencode          # OpenCode
```

### 2. Restart Your AI Tool

After installation, restart Claude Code, Cursor, or Copilot.

### 3. Test It

Start using commands as normal. They'll automatically be optimized:

```bash
git status  # Automatically rewritten to rtk git status
cargo test  # Automatically rewritten to rtk cargo test
```

**That's it!** RTK runs transparently via a hook. You don't manually prefix with `rtk`.

---

## 📋 Commands Reference

### Files

```bash
rtk ls .                        # Token-optimized directory tree
rtk read file.rs                # Smart file reading
rtk read file.rs -l aggressive  # Signatures only (strips bodies)
rtk smart file.rs               # 2-line heuristic code summary
rtk find "*.rs" .               # Compact find results
rtk grep "pattern" .            # Grouped search results
rtk diff file1 file2            # Condensed diff
```

### Git

```bash
rtk git status                  # Compact status
rtk git log -n 10               # One-line commits
rtk git diff                    # Condensed diff
rtk git add                     # -> "ok"
rtk git commit -m "msg"         # -> "ok abc1234"
rtk git push                    # -> "ok main"
rtk git pull                    # -> "ok 3 files +10 -2"
```

### GitHub CLI

```bash
rtk gh pr list                  # Compact PR listing
rtk gh pr view 42               # PR details + checks
rtk gh issue list               # Compact issue listing
rtk gh run list                 # Workflow run status
```

### Test Runners

```bash
rtk test cargo test             # Show failures only (-90%)
rtk err npm run build           # Errors/warnings only
rtk vitest run                  # Vitest compact (failures only)
rtk playwright test             # E2E results (failures only)
rtk pytest                      # Python tests (-90%)
rtk go test                     # Go tests (NDJSON, -90%)
rtk cargo test                  # Cargo tests (-90%)
rtk rake test                   # Ruby minitest (-90%)
rtk rspec                       # RSpec tests (JSON, -60%+)
```

### Build & Lint

```bash
rtk lint                        # ESLint grouped by rule/file
rtk lint biome                  # Supports other linters
rtk tsc                         # TypeScript errors grouped by file
rtk next build                  # Next.js build compact
rtk prettier --check .          # Files needing formatting
rtk cargo build                 # Cargo build (-80%)
rtk cargo clippy                # Cargo clippy (-80%)
rtk ruff check                  # Python linting (JSON, -80%)
rtk golangci-lint run           # Go linting (JSON, -85%)
rtk rubocop                     # Ruby linting (JSON, -60%+)
```

### Package Managers

```bash
rtk pnpm list                   # Compact dependency tree
rtk pip list                    # Python packages (auto-detect uv)
rtk pip outdated                # Outdated packages
rtk bundle install              # Ruby gems (strip Using lines)
rtk prisma generate             # Schema generation (no ASCII art)
```

### Containers

```bash
rtk docker ps                   # Compact container list
rtk docker images               # Compact image list
rtk docker logs <container>     # Deduplicated logs
rtk docker compose ps           # Compose services
rtk kubectl pods                # Compact pod list
rtk kubectl logs <pod>          # Deduplicated logs
rtk kubectl services            # Compact service list
```

### Data & Analytics

```bash
rtk json config.json            # Structure without values
rtk deps                        # Dependencies summary
rtk env -f AWS                  # Filtered env vars
rtk log app.log                 # Deduplicated logs
rtk curl <url>                  # Auto-detect JSON + schema
rtk wget <url>                  # Download, strip progress bars
rtk summary <long command>      # Heuristic summary
rtk proxy <command>             # Raw passthrough + tracking
```

### Token Savings Analytics

```bash
rtk gain                        # Summary stats
rtk gain --graph                # ASCII graph (last 30 days)
rtk gain --history              # Recent command history
rtk gain --daily                # Day-by-day breakdown
rtk gain --all --format json    # JSON export for dashboards
rtk discover                    # Find missed savings opportunities
rtk discover --all --since 7    # All projects, last 7 days
rtk session                     # Show RTK adoption across recent sessions
```

---

## 🎯 Global Flags

```bash
-u, --ultra-compact    # ASCII icons, inline format (extra token savings)
-v, --verbose          # Increase verbosity (-v, -vv, -vvv)
```

---

## 🔧 Configuration

### Config File

Location: `~/.config/rtk/config.toml` (macOS: `~/Library/Application Support/rtk/config.toml`)

```toml
[tracking]
database_path = "/path/to/custom.db"  # default: ~/.local/share/rtk/history.db

[hooks]
exclude_commands = ["curl", "playwright"]  # skip rewrite for these

[tee]
enabled = true          # save raw output on failure (default: true)
mode = "failures"       # "failures", "always", or "never"
max_files = 20          # rotation limit
```

### Tee: Full Output Recovery

When a command fails, RTK saves the full unfiltered output so you can read it without re-executing:

```
FAILED: 2/15 tests
[full output: ~/.local/share/rtk/tee/1707753600_cargo_test.log]
```

### Uninstall

```bash
rtk init -g --uninstall     # Remove hook, RTK.md, settings.json entry
cargo uninstall rtk          # Remove binary
brew uninstall rtk           # If installed via Homebrew
```

---

## 🛠️ AI Tool Integration

RTK supports **9 AI coding tools** with transparent command rewriting:

| Tool | Setup | Mechanism |
|------|-------|-----------|
| **Claude Code** | `rtk init -g` | PreToolUse hook (bash) |
| **GitHub Copilot** | `rtk init -g` | PreToolUse hook (rtk hook copilot) |
| **Cursor** | `rtk init -g --agent cursor` | preToolUse hook (hooks.json) |
| **Gemini CLI** | `rtk init -g --gemini` | BeforeTool hook |
| **Codex (OpenAI)** | `rtk init -g --codex` | AGENTS.md + RTK.md instructions |
| **Windsurf** | `rtk init --agent windsurf` | .windsurfrules (project-scoped) |
| **Cline / Roo Code** | `rtk init --agent cline` | .clinerules (project-scoped) |
| **OpenCode** | `rtk init -g --opencode` | Plugin TS (tool.execute.before) |
| **OpenClaw** | `openclaw plugins install ./openclaw` | Plugin TS (before_tool_call) |

---

## 🔒 Privacy & Telemetry

RTK collects **anonymous, aggregate usage metrics once per day** to help prioritize development.

### What IS Collected
- Device hash (SHA-256 of hostname+username, not reversible)
- RTK version, OS, architecture
- Command count (last 24h) and top command names (e.g. "git", "cargo" — **no arguments, no file paths**)
- Token savings percentage

### What IS NOT Collected
- ✅ Source code
- ✅ File paths
- ✅ Command arguments
- ✅ Secrets
- ✅ Environment variables
- ✅ Personally identifiable information

### Opt-Out

**Environment variable**:
```bash
export RTK_TELEMETRY_DISABLED=1
```

**Or in config file** (`~/.config/rtk/config.toml`):
```toml
[telemetry]
enabled = false
```

---

## 💡 Usage Examples

### Directory Listing

```diff
# ls -la (45 lines, ~800 tokens)
drwxr-xr-x  15 user staff 480 ...
-rw-r--r--   1 user staff 1234 ...
...

# rtk ls (12 lines, ~150 tokens)
my-project/
+-- src/ (8 files)
|   +-- main.rs
+-- Cargo.toml
```

### Git Operations

```diff
# git push (15 lines, ~200 tokens)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
...

# rtk git push (1 line, ~10 tokens)
ok main
```

### Test Output

```diff
# cargo test (200+ lines on failure)
running 15 tests
test utils::test_parse ... ok
test utils::test_format ... ok
...

# rtk test cargo test (~20 lines)
FAILED: 2/15 tests
test_edge_case: assertion failed
test_overflow: panic at utils.rs:18
```

---

## 📚 Documentation

- [TROUBLESHOOTING.md](https://github.com/rtk-ai/rtk/blob/master/docs/TROUBLESHOOTING.md) - Fix common issues
- [INSTALL.md](https://github.com/rtk-ai/rtk/blob/master/INSTALL.md) - Detailed installation guide
- [ARCHITECTURE.md](https://github.com/rtk-ai/rtk/blob/master/ARCHITECTURE.md) - Technical architecture
- [SECURITY.md](https://github.com/rtk-ai/rtk/blob/master/SECURITY.md) - Security policy and PR review process
- [AUDIT_GUIDE.md](https://github.com/rtk-ai/rtk/blob/master/docs/AUDIT_GUIDE.md) - Token savings analytics guide

---

## 🎯 Key Features at a Glance

✅ **60-90% token reduction** across all dev commands  
✅ **Single Rust binary** - zero dependencies  
✅ **<10ms overhead** - invisible performance impact  
✅ **Auto-rewrite hook** - zero manual intervention  
✅ **Supports 9 AI tools** - Claude Code, Copilot, Cursor, Gemini, Codex, Windsurf, Cline, OpenCode, OpenClaw  
✅ **Smart filtering** - removes noise, keeps signal  
✅ **Full output recovery** - tee mode saves raw output on failures  
✅ **Privacy-first** - anonymous telemetry, fully opt-out able  
✅ **MIT Licensed** - open source

---

## 🚀 After Installation

### Immediate Actions

1. ✅ Install RTK: `brew install rtk` or `rtk init -g`
2. ✅ Restart Claude Code / Copilot / your AI tool
3. ✅ Use commands normally (they'll be auto-optimized)
4. ✅ View savings: `rtk gain --graph`

### Monitor Savings

```bash
rtk gain                     # Quick summary
rtk gain --history           # See recent commands
rtk discover --all --since 7 # Find optimization opportunities
```

### Share Your Win

Join the [Discord community](https://discord.gg/RySmvNF5kF) and share your token savings!

---

## 📌 Pro Tips

- **Auto-rewrite is transparent**: The hook rewrites `git status` → `rtk git status` automatically. You don't need to type `rtk` manually.
- **Built-in tools bypass the hook**: Claude Code's `Read`, `Grep`, `Glob` tools don't pass through Bash. Use shell commands (`cat`, `rg`, `find`) or call `rtk read`, `rtk grep`, `rtk find` directly for RTK filtering.
- **Test runner optimization**: Test failures only show relevant output. Pass/fail counts are summarized.
- **Git diff is smart**: Shows only changed lines, not entire file diffs.
- **Compose projects**: `rtk docker compose ps` gives a compact service status without verbose streaming.

---

## 🔗 Links

- **GitHub**: https://github.com/rtk-ai/rtk
- **Website**: https://www.rtk-ai.app/
- **Discord**: https://discord.gg/RySmvNF5kF
- **Issues**: https://github.com/rtk-ai/rtk/issues
- **Releases**: https://github.com/rtk-ai/rtk/releases

---

## 📄 License

MIT License - see [LICENSE](https://github.com/rtk-ai/rtk/blob/master/LICENSE) for details.

---

## 🎯 The Bottom Line

**RTK = Massive token savings with zero effort.**

Install once, restart your AI tool, get 60-90% token reduction on all your dev commands automatically. Perfect for long coding sessions, expensive token budgets, or simply wanting more context window for your LLM.

Join thousands of developers already using RTK to optimize their AI-assisted coding workflow.
