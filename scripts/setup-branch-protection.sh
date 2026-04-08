#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# setup-branch-protection.sh
# Configura branch protection rules para main y develop via
# GitHub CLI. Ejecutar UNA VEZ por el owner (thelaunchpadtlp).
#
# Requisitos:
#   - gh CLI instalado y autenticado: gh auth login
#   - Token con scopes: repo, admin:repo_hook
#
# Uso:
#   chmod +x scripts/setup-branch-protection.sh
#   ./scripts/setup-branch-protection.sh
# ─────────────────────────────────────────────────────────────

set -euo pipefail

OWNER="thelaunchpadtlp"
REPO="geminispecwebapp"

echo "🔐 Configurando branch protection para $OWNER/$REPO..."

# ─── Protección de main ──────────────────────────────────────
echo "→ Protegiendo rama: main"
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  "/repos/$OWNER/$REPO/branches/main/protection" \
  --input - <<'EOF'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["Build & Type Check"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1,
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": true,
  "required_conversation_resolution": true
}
EOF

echo "✅ main protegida."

# ─── Protección de develop ───────────────────────────────────
echo "→ Protegiendo rama: develop"
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  "/repos/$OWNER/$REPO/branches/develop/protection" \
  --input - <<'EOF'
{
  "required_status_checks": {
    "strict": false,
    "contexts": ["Build & Type Check"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": 1,
    "dismiss_stale_reviews": false,
    "require_code_owner_reviews": false
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": false
}
EOF

echo "✅ develop protegida."
echo ""
echo "🎉 Branch protection configurada exitosamente."
echo "   Verifica en: https://github.com/$OWNER/$REPO/settings/branches"
