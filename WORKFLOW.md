# Flujo de Trabajo (Workflow) — geminispecwebapp

Este documento establece las reglas obligatorias de colaboración para humanos y agentes de IA en el proyecto `geminispecwebapp`.
Todas las interacciones deben seguir este flujo para evitar conflictos y asegurar la estabilidad de la rama `main`.

## 1. Modelo de Ramas (Branching Model)

El proyecto utiliza un modelo simplificado basado en GitFlow.

- **`main`**: Producción. Siempre estable. Solo recibe Pull Requests desde `develop` o ramas de `hotfix`.
- **`develop`**: Integración. Todas las nuevas funcionalidades y correcciones se fusionan aquí primero.
- **`feature/<nombre>`**: Ramas de desarrollo. Creadas a partir de `develop`. Ejemplos: `feature/auth`, `feature/mcp-integration`.
- **`fix/<nombre>`**: Corrección de bugs no críticos. Creadas a partir de `develop`.
- **`hotfix/<nombre>`**: Corrección urgente en producción. Creadas a partir de `main` y fusionadas en `main` y `develop`.
- **`agent/<nombre>`**: Ramas exclusivas para agentes de IA autónomos. Ejemplo: `agent/manus-refactor`.

## 2. Ciclo de Vida de una Contribución

Todo colaborador (humano o agente) debe seguir este ciclo de vida exacto:

1. **Sincronización inicial**:
   Asegúrate de tener la última versión de la rama de integración.
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Creación de la rama**:
   Crea una rama descriptiva para tu tarea.
   ```bash
   git checkout -b feature/mi-nueva-tarea
   ```

3. **Desarrollo y Commits**:
   Realiza commits atómicos y semánticos. Es obligatorio identificarse en el mensaje del commit usando el formato `[agent: nombre]` o `[dev: nombre]`.
   ```bash
   git commit -m "feat(ui): agregar componente NeonButton [agent: manus-ai]"
   ```

4. **Publicación y Pull Request (PR)**:
   Sube tu rama y abre un Pull Request hacia `develop`.
   ```bash
   git push origin feature/mi-nueva-tarea
   ```
   El PR debe usar el template provisto en `.github/pull_request_template.md` y pasar todas las validaciones automáticas de CI/CD.

5. **Revisión y Fusión (Merge)**:
   Se requiere al menos una aprobación (Approve) de otro colaborador o del owner.
   La fusión debe realizarse utilizando la estrategia "Squash and Merge" para mantener el historial de `develop` limpio.

## 3. Colaboración Externa (Forks)

Los agentes o desarrolladores sin permisos directos de escritura en el repositorio deben contribuir mediante Forks:

1. Realiza un Fork del repositorio `geminispecwebapp` a tu cuenta personal.
2. Clona tu Fork localmente.
3. Agrega el repositorio original como `upstream` para mantenerte sincronizado.
   ```bash
   git remote add upstream https://github.com/thelaunchpadtlp/geminispecwebapp.git
   ```
4. Antes de iniciar trabajo nuevo, sincroniza tu `develop` local.
   ```bash
   git fetch upstream
   git checkout develop
   git merge upstream/develop
   ```
5. Trabaja en una rama nueva, súbela a tu Fork y abre un PR desde tu Fork hacia `thelaunchpadtlp/geminispecwebapp` apuntando a la rama `develop`.

## 4. Resolución de Conflictos

Si tu PR tiene conflictos con `develop`:
1. Actualiza tu rama local con los últimos cambios de `develop`.
   ```bash
   git fetch origin
   git merge origin/develop
   ```
2. Resuelve los conflictos manualmente o mediante las herramientas de tu IDE.
3. Haz commit de la resolución y haz push a tu rama.

El cumplimiento estricto de este flujo garantiza que humanos y agentes de IA de diferentes plataformas puedan colaborar simultáneamente sin destruir el trabajo de otros.
