# AGENTS.md — Registro de Agentes de IA

Este archivo documenta qué agentes de IA han contribuido al proyecto, qué hicieron y con qué herramientas.  
Es legible por humanos y por otros LLMs/scrapers.

## Formato de Entrada

```
## [Nombre del Agente] — [Fecha]
- **Plataforma:** nombre de la plataforma
- **Acción:** descripción de lo que hizo
- **Archivos modificados:** lista de archivos
- **Commit:** hash o referencia
```

---

## Manus AI — 2025-04-08

- **Plataforma:** Manus (manus@thelaunchpadtlp.education)
- **Acción:** Inicialización completa del proyecto. Creó toda la estructura modular, componentes React con estética Liquid Glass 2050, configuración de portabilidad GCP/Firebase, Dockerfile, CI/CD workflows y documentación de colaboración multi-agente.
- **Archivos creados:**
  - `src/` (estructura completa)
  - `Dockerfile`, `docker-compose.yml`, `nginx.conf`
  - `firebase.json`, `.firebaserc`
  - `.github/workflows/ci.yml`, `.github/workflows/deploy-pages.yml`
  - `README.md`, `CONTRIBUTING.md`, `AGENTS.md`
- **Commit:** initial commit — full project scaffold

---

*Agrega tu entrada aquí cuando contribuyas al proyecto.*
