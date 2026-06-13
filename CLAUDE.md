# CLAUDE.md

Portfolio personal de Víctor Sales, publicado en https://mrclit.github.io vía GitHub Pages.

## Stack

- **React 18** + **TypeScript** (strict) sobre **Vite 5**
- **Tailwind CSS 4** (plugin `@tailwindcss/vite`)
- **React Router 7**, **Zustand** (estado), **i18next** (EN/ES/CA), **framer-motion**, **react-icons**
- Gestor de paquetes: **npm** (migración a pnpm pendiente — ver issue #1)

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
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

## ⚠️ Notas importantes

- **`deploy.yml` usa `npm ci` + `npm run build`.** Al migrar a pnpm (issue #1) hay que actualizar
  ese workflow (añadir `pnpm/action-setup`, cambiar a `pnpm install --frozen-lockfile`) o el deploy fallará.
- `dist/` y `node_modules/` están en `.gitignore`; el build se genera en CI, no se commitea.
- Las automatizaciones del tablero (Item added → Backlog, Item closed → Done) se configuran solo
  desde la web (la API de GitHub no permite activarlas): https://github.com/users/MrClit/projects/3/workflows
