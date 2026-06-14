# CLAUDE.md

Portfolio personal de Víctor Sales, publicado en https://mrclit.github.io vía GitHub Pages.

## Stack

- **React 18** + **TypeScript** (strict) sobre **Vite 5**
- **Tailwind CSS 4** (plugin `@tailwindcss/vite`)
- **React Router 7**, **Zustand** (estado), **i18next** (EN/ES/CA), **framer-motion**, **react-icons**
- Gestor de paquetes: **pnpm**

## Comandos

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo (http://localhost:5173)
pnpm build        # build de producción → dist/
pnpm preview      # previsualizar el build
```

## Estructura

- `src/pages/` – secciones principales (Home, Projects, About)
- `src/components/` – componentes reutilizables
- `src/store/` – estado global (Zustand)
- `src/data/projects/` – datos de los proyectos del portfolio
- `src/i18n/locales/` – traducciones (EN/ES/CA)
- `public/` – assets estáticos (imágenes, favicon)

## Gestión de tareas

- **GitHub Project:** https://github.com/users/MrClit/projects/3 (vinculado al repo)
- Las tareas se gestionan como **issues** del repo y se añaden al tablero.
- Estados del tablero: `Backlog → Ready → In progress → In review → Done`
- Campos: Status, Priority (P0/P1/P2), Size (XS–XL), Estimate, Start/Target date.

## Flujo de trabajo (main + develop)

```
feature/N-descripcion ──(PR)──▶ develop ──(PR de release)──▶ main ──▶ deploy
```

- **`main`**: siempre desplegable. Cada push dispara `.github/workflows/deploy.yml`
  (build con Vite → publica `dist/` en GitHub Pages).
- **`develop`**: rama de integración. Las features se mergean aquí primero.
- **Ramas de trabajo**: cortas, nombradas con el issue → `feat/4-add-finapp`, `chore/1-pnpm`, `fix/...`
- **PRs**: una por tarea; en el cuerpo usar `Closes #N` para cerrar el issue al mergear.

### Convenciones

- Commits **Conventional Commits**: `feat:`, `fix:`, `chore:`, `docs:`, etc.
- Mapeo issue ↔ tablero: Backlog = idea capturada · Ready = priorizada · In progress = rama creada ·
  In review = PR abierta · Done = mergeado a `main` y desplegado.

### 🤖 Protocolo de estados (Claude)

Al trabajar una issue, Claude mueve su estado en el tablero usando el script
`scripts/project-status.sh <issue> "<Status>"` (mover el item del Project v2 requiere la
API GraphQL; las herramientas MCP de GitHub solo tocan el issue, no el tablero). Disparadores:

1. **Al pedir analizar/planificar una issue** → asegurarse de estar en `develop`
   (`git switch develop`) y mover la issue a **Ready**. Si durante el análisis se ve necesario
   refinar el contenido del issue (título/descripción/criterios), editarlo con `gh issue edit`.
2. **Al aceptar el plan** (salida de plan mode) → mover la issue a **In progress** y crear la
   rama de trabajo (`feat/N-...`, `fix/N-...`, `chore/N-...`).
3. **Al abrir la PR** → mover la issue a **In review**.
4. **Al mergear la PR** → mover la issue a **Done** y añadir un comentario en el issue
   (`gh issue comment N`) que resuma lo realizado.

> El script necesita `gh` con scope `project` (`gh auth refresh -s project`). Estados válidos:
> `Backlog | Ready | In progress | In review | Done`.

## Protocolo de releases (`develop → main`)

Cada merge a `main` es un **release** y dispara el deploy a producción. Versionado
**SemVer** (`vMAJOR.MINOR.PATCH`), empezando en `v1.0.0`. Se mergea con **merge commit**
(no squash) para conservar el historial de PRs.

Decidir el bump según lo incluido desde el último tag:
`MAJOR` = rediseño/cambio incompatible · `MINOR` = nueva feature/sección ·
`PATCH` = fix, copy, ajuste menor.

**Pasos:**

1. **Preparar en `develop`** — `git switch develop && git pull`. Verificar build limpio:
   `pnpm install --frozen-lockfile && pnpm build`, y revisión visual con `pnpm preview`.
2. **Bump de versión** — actualizar `"version"` en `package.json` y commit
   `chore(release): vX.Y.Z` en `develop`.
3. **PR de release** — `gh pr create --base main --head develop --title "release: vX.Y.Z"`,
   con el cuerpo listando los cambios (PRs/issues) desde el tag anterior.
4. **Mergear** — `gh pr merge --merge` (merge commit, sin borrar `develop`).
5. **Tag + GitHub Release** — sobre `main`:
   `git switch main && git pull && git tag vX.Y.Z && git push origin vX.Y.Z`, y
   `gh release create vX.Y.Z --title "vX.Y.Z" --notes "..."`.
6. **Verificar deploy** — esperar a `deploy.yml` (`gh run watch`) y comprobar
   https://mrclit.github.io en vivo.
7. **Volver a `develop`** — `git switch develop` para seguir trabajando.

## Modelos por tipo de trabajo

Para optimizar coste y razonamiento, el trabajo se reparte por modelo:

- **Análisis, planificación y generación de código → sesión principal (Opus).**
  Es donde el razonamiento importa; se hace directamente en la conversación.
- **Operaciones mecánicas de git/GitHub → subagente `gestor-git` (Sonnet).**
  Delegar **siempre** en él (vía la tool `Agent`) los commits, ramas, PRs, gestión de
  issues y movimientos del tablero, en vez de ejecutarlos en la sesión principal.
  Definido en `.claude/agents/gestor-git.md` con `model: sonnet`.

> El subagente arranca en frío (sin el contexto de la conversación): hay que pasarle
> instrucciones autocontenidas (qué commitear, mensaje, nº de issue, base/head del PR…).

## ⚠️ Notas importantes

- **`deploy.yml` usa `pnpm/action-setup` + `pnpm install --frozen-lockfile` + `pnpm run build`.**
  El campo `packageManager` de `package.json` fija la versión de pnpm que usa CI.
- `dist/` y `node_modules/` están en `.gitignore`; el build se genera en CI, no se commitea.
- Las automatizaciones del tablero (Item added → Backlog, Item closed → Done) se configuran solo
  desde la web (la API de GitHub no permite activarlas): https://github.com/users/MrClit/projects/3/workflows
