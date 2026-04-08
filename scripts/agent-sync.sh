#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# agent-sync.sh
# Script de sincronización para agentes de IA y desarrolladores.
# Ejecutar SIEMPRE antes de comenzar a trabajar en el proyecto.
#
# Lo que hace:
#   1. Verifica que estás en el repo correcto.
#   2. Hace fetch de todos los cambios remotos.
#   3. Actualiza develop con los últimos cambios.
#   4. Verifica que el build pasa antes de crear tu rama.
#   5. Crea tu rama de trabajo con nombre estandarizado.
#
# Uso:
#   chmod +x scripts/agent-sync.sh
#   ./scripts/agent-sync.sh feature mi-nueva-feature
#   ./scripts/agent-sync.sh agent manus-refactor-ui
#   ./scripts/agent-sync.sh fix bug-navbar-mobile
# ─────────────────────────────────────────────────────────────

set -euo pipefail

BRANCH_TYPE="${1:-feature}"
BRANCH_NAME="${2:-my-task}"
FULL_BRANCH="$BRANCH_TYPE/$BRANCH_NAME"

echo "╔══════════════════════════════════════════════════════╗"
echo "║  geminispecwebapp — Agent Sync Script                ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# ─── 1. Verificar repo ──────────────────────────────────────
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
if [[ "$REMOTE_URL" != *"geminispecwebapp"* ]]; then
  echo "❌ ERROR: No estás en el repo geminispecwebapp."
  echo "   Clona el repo primero:"
  echo "   git clone https://github.com/thelaunchpadtlp/geminispecwebapp.git"
  exit 1
fi
echo "✅ Repo verificado: $REMOTE_URL"

# ─── 2. Fetch remoto ────────────────────────────────────────
echo "→ Sincronizando con remoto..."
git fetch --all --prune
echo "✅ Fetch completado."

# ─── 3. Actualizar develop ──────────────────────────────────
echo "→ Actualizando develop..."
git checkout develop
git pull origin develop
echo "✅ develop actualizado."

# ─── 4. Verificar build ─────────────────────────────────────
echo "→ Verificando build en develop..."
npm ci --silent
npm run type-check
echo "✅ Build verificado. develop está sano."

# ─── 5. Crear rama de trabajo ───────────────────────────────
if git show-ref --verify --quiet "refs/heads/$FULL_BRANCH"; then
  echo "→ Rama $FULL_BRANCH ya existe. Cambiando a ella..."
  git checkout "$FULL_BRANCH"
  git pull origin "$FULL_BRANCH" 2>/dev/null || true
else
  echo "→ Creando rama: $FULL_BRANCH"
  git checkout -b "$FULL_BRANCH"
fi

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║  ✅ Listo para trabajar en: $FULL_BRANCH"
echo "║"
echo "║  Recuerda al commitear:"
echo "║  git commit -m \"feat(x): descripción [agent: tu-nombre]\""
echo "║"
echo "║  Al terminar, push y abre PR hacia: develop"
echo "║  git push origin $FULL_BRANCH"
echo "╚══════════════════════════════════════════════════════╝"
