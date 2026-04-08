# Changelog — geminispecwebapp

Todos los cambios notables del proyecto se documentan en este archivo.
El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el versionado sigue [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.1.0] — 2025-04-08 — WIP

### Añadido
- `feat`: GodApp (`/godapp`) — Centro de comando completo con 8 tabs: Misión, Organigrama, Pipeline, Workflow, QA, Accesos, IDE Preview y Changelog.
- `feat`: React Router v6 (HashRouter) para navegación SPA entre `/` y `/godapp`.
- `feat`: Componentes GodUI reutilizables: `GodSection`, `GodCard`, `GodTable`, `GodBadge`.
- `docs`: `WORKFLOW.md` — Reglas de forks, branches y merge para colaboración multi-agente.
- `docs`: `QA.md` — Estándares de quality assurance y pipeline de validación.
- `docs`: `SECURITY.md` — Gestión de secretos, control de accesos y protección de ramas.
- `docs`: `CHANGELOG.md` — Este archivo.
- `chore`: `.github/pull_request_template.md` — Template obligatorio para PRs.

---

## [1.0.0] — 2025-04-08 — RELEASED

### Añadido
- `feat`: Scaffold completo React 18 + TypeScript (strict) + Tailwind CSS v3 + Vite 5.
- `feat`: Secciones principales: Hero, Architecture, HMI, LLMOS, MCP, VPN.
- `feat`: Sistema de diseño Liquid Glass 2050 (holographic grid, spatial orbs, neon colors, backdrop-filter).
- `feat`: JSON-LD structured data (TechArticle + SoftwareApplication) para AI crawlers.
- `feat`: HTML5 semántico + ARIA para accesibilidad máxima.
- `feat`: PWA `manifest.json`.
- `feat`: `Dockerfile` multi-stage (Node build + Nginx Alpine) + `docker-compose.yml`.
- `feat`: `firebase.json` + `.firebaserc` para Firebase Hosting.
- `feat`: Capa de mocks API (`src/lib/api-mock.ts`) lista para swap con GCP/Firebase.
- `docs`: `README.md`, `CONTRIBUTING.md`, `AGENTS.md`.
- `chore`: Repositorio `geminispecwebapp` creado en GitHub (privado) bajo `thelaunchpadtlp`.

---

*Agente responsable de esta versión: Manus AI — manus@thelaunchpadtlp.education*
