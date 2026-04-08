# Seguridad, Accesos y Control de Permisos — geminispecwebapp

La seguridad es primordial en un proyecto colaborativo abierto a agentes de IA y humanos de múltiples plataformas.
Este documento establece las políticas obligatorias de gestión de secretos, control de accesos y mitigación de riesgos para `geminispecwebapp`.

## 1. Gestión de Secretos (Secrets Management)

**REGLA DE ORO:** Nunca, bajo ninguna circunstancia, almacenes contraseñas, claves de API (API keys), tokens OAuth, o cualquier otra credencial sensible en el código fuente, archivos de configuración o en la documentación.

1. **Variables de Entorno Locales**:
   El proyecto utiliza Vite, por lo que las variables de entorno deben prefijarse con `VITE_`.
   Crea un archivo `.env` en la raíz del proyecto para desarrollo local. Este archivo está incluido en `.gitignore` y **jamás debe ser commiteado**.
   Si necesitas documentar qué variables existen, utiliza un archivo `.env.example` con valores ficticios.

2. **GitHub Secrets**:
   Para los flujos de CI/CD (GitHub Actions), los secretos deben configurarse en la interfaz web del repositorio:
   `Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`.
   Estos valores se inyectan dinámicamente durante el build o despliegue.

3. **Ejemplos de Secretos Críticos**:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_GEMINI_API_KEY`
   - Tokens de acceso a GCP o servicios externos.

## 2. Control de Accesos y Permisos (GitHub)

El acceso al repositorio está estrictamente regulado para prevenir modificaciones no autorizadas o destructivas.

1. **Propietarios (Owners)**:
   Tienen control total sobre el repositorio, configuración de secretos, despliegues y gestión de colaboradores.
   - Humano: `thelaunchpadtlp`
   - Agente Principal: `manus@thelaunchpadtlp.education` (Debe ser invitado como Admin desde la interfaz de GitHub).

2. **Colaboradores (Collaborators)**:
   Agentes de IA o humanos invitados explícitamente con permisos de escritura (`Write`).
   Pueden crear ramas, abrir Pull Requests y fusionar cambios aprobados en `develop`.

3. **Colaboradores Externos**:
   Desarrolladores sin acceso directo al repositorio deben utilizar el flujo de Fork detallado en `WORKFLOW.md`.
   Solo pueden contribuir mediante Pull Requests desde sus repositorios bifurcados.

## 3. Protección de Ramas (Branch Protection)

La rama `main` (producción) y `develop` (integración) están protegidas mediante reglas de GitHub para evitar modificaciones accidentales o maliciosas.

- **Prohibido el Push Directo**: Nadie, ni siquiera los administradores, puede hacer push directamente a `main`.
- **Pull Requests Obligatorios**: Todos los cambios deben ingresar a través de un PR hacia `develop` o `main`.
- **Revisiones Requeridas**: Se requiere al menos 1 aprobación (Approve) de un revisor autorizado antes de fusionar.
- **Verificaciones de Estado (Status Checks)**: Los flujos de CI (`npm run build` y `npm run type-check`) deben pasar exitosamente antes de habilitar el botón de Merge.
- **Historial Lineal**: Se exige la estrategia "Squash and Merge" para mantener un historial de commits limpio y legible.

## 4. Auditoría y Trazabilidad

Para mantener la transparencia en un entorno multi-agente, todas las acciones deben ser trazables:

1. **Identificación en Commits**:
   Como se especifica en `WORKFLOW.md`, todo commit debe incluir la etiqueta `[agent: nombre]` o `[dev: nombre]`.
   Esto permite rastrear rápidamente qué agente o desarrollador introdujo un cambio específico.

2. **Registro en AGENTS.md**:
   Cada nuevo agente de IA que contribuya al proyecto debe registrar su primera intervención en el archivo `AGENTS.md`, documentando su plataforma, propósito y los archivos modificados.

3. **Changelog**:
   Las nuevas versiones y funcionalidades deben documentarse en `CHANGELOG.md` y en la pestaña correspondiente de GodApp (`/godapp`).

## 5. Reporte de Vulnerabilidades

Si descubres una vulnerabilidad de seguridad, **NO abras un Issue público**.
Por favor, contacta directamente a los administradores del repositorio de forma privada para coordinar un parche de seguridad (Hotfix) antes de divulgar el problema.
