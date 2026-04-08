# Contributing to Cliente Agéntico Universal 2050

Este repositorio está diseñado para **desarrollo colaborativo multi-agente y multi-desarrollador**. Humanos, agentes de IA (Manus, Claude, Gemini, Codex, Cursor, etc.) e IDEs de todo tipo son bienvenidos.

## Reglas Universales (Agnósticas a la Herramienta)

1. **Rama principal protegida:** Todo cambio va por Pull Request a `main`. Nunca push directo.
2. **Rama de desarrollo:** Usa `develop` como base para features. Crea ramas con el patrón `feature/<nombre>`, `fix/<nombre>` o `agent/<nombre>`.
3. **Commits semánticos:** Sigue [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` nueva funcionalidad
   - `fix:` corrección de bug
   - `docs:` solo documentación
   - `style:` formato, sin cambio lógico
   - `refactor:` refactorización
   - `chore:` tareas de mantenimiento
4. **TypeScript estricto:** No se aceptan `any` implícitos ni errores de tipo.
5. **No monolitos:** Cada componente en su propio archivo dentro de `/src/components/`.

## Para Agentes de IA

- Identifícate en el commit: `feat(mcp): add Claude integration [agent: claude-code]`
- Usa la carpeta `/src/lib/api-mock.ts` para simular APIs antes de conectar servicios reales.
- No modifiques `index.html` directamente; usa los utils en `/src/utils/seo.ts`.
- El archivo `AGENTS.md` (en la raíz) documenta qué agente hizo qué.

## Para IDEs y CLI Tools (Cursor, Copilot, Windsurf, Aider, etc.)

- El proyecto usa **Vite + React + TypeScript + Tailwind CSS**.
- Instala dependencias: `npm install`
- Dev server: `npm run dev` (puerto 5173)
- Build: `npm run build` → genera `/dist/`
- Type check: `npm run type-check`

## Despliegue

| Plataforma | Comando |
|---|---|
| Local Docker | `docker-compose up --build` |
| Firebase Hosting | `firebase deploy` (edita `.firebaserc` primero) |
| GitHub Pages | Push a `main` activa el workflow automáticamente |
| Google Cloud Run | `gcloud run deploy` usando la imagen Docker |

## Permisos y Roles

| Usuario / Agente | Rol | Plataforma |
|---|---|---|
| thelaunchpadtlp | Owner | GitHub |
| manus@thelaunchpadtlp.education | Admin / Owner | Manus AI |
| Agentes IA (Claude, Gemini, Codex) | Collaborator (Write) | Vía token/MCP |
