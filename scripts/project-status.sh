#!/usr/bin/env bash
#
# Mueve un issue a un estado del GitHub Project "Portfolio" (#3).
#
#   Uso:  scripts/project-status.sh <numero-issue> "<Status>"
#   Ej.:  scripts/project-status.sh 4 "In progress"
#
# Estados válidos: Backlog | Ready | In progress | In review | Done
#
# Requiere: gh autenticado con scope `project` (gh auth refresh -s project).

set -euo pipefail

OWNER="MrClit"
REPO="MrClit.github.io"
PROJECT_NUMBER=3
PROJECT_ID="PVT_kwHOCaelWs4Baj0Q"
FIELD_ID="PVTSSF_lAHOCaelWs4Baj0QzhVakLA"

issue="${1:?Falta el número de issue}"
status="${2:?Falta el estado destino}"

case "$status" in
  "Backlog")     option_id="e65edb6d" ;;
  "Ready")       option_id="9eab61eb" ;;
  "In progress") option_id="49cd43bc" ;;
  "In review")   option_id="80228b0b" ;;
  "Done")        option_id="feef678b" ;;
  *)
    echo "Estado no válido: '$status'" >&2
    echo "Usa: Backlog | Ready | In progress | In review | Done" >&2
    exit 1
    ;;
esac

# Buscar el item del issue en el tablero
item_id=$(gh project item-list "$PROJECT_NUMBER" --owner "$OWNER" --format json --limit 200 \
  | jq -r --argjson n "$issue" 'first(.items[] | select(.content.number == $n) | .id) // empty')

# Si el issue no está en el tablero, añadirlo
if [ -z "$item_id" ]; then
  item_id=$(gh project item-add "$PROJECT_NUMBER" --owner "$OWNER" \
    --url "https://github.com/$OWNER/$REPO/issues/$issue" --format json | jq -r '.id')
fi

gh project item-edit \
  --id "$item_id" \
  --project-id "$PROJECT_ID" \
  --field-id "$FIELD_ID" \
  --single-select-option-id "$option_id" >/dev/null

echo "Issue #$issue → $status"
