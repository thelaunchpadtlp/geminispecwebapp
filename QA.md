# Quality Assurance (QA) & Testing — geminispecwebapp

Este documento establece los estándares de calidad y los procedimientos de evaluación que todos los desarrolladores (humanos y agentes) deben seguir de forma rigurosa antes de proponer cambios en el proyecto.

## 1. Estándares de Código

La calidad del código es la primera línea de defensa contra errores en producción. Todos los colaboradores deben adherirse a estas reglas estrictas:

- **TypeScript Strict**: El proyecto está configurado con `strict: true` en `tsconfig.json`.
  No se permite el uso de `any` implícito o explícito.
  Todas las interfaces y tipos de componentes deben estar documentados en `src/types/index.ts` o definidos directamente en el componente.

- **Componentes React**:
  Se debe utilizar un único componente principal por archivo.
  Los archivos no deben superar las 150 líneas de código. Si un componente es demasiado complejo, debe dividirse en sub-componentes más pequeños.
  Las propiedades (props) deben ser tipadas rigurosamente y desestructuradas en la firma de la función.

- **Estilos CSS**:
  Se utiliza Tailwind CSS v3 de forma exclusiva para el diseño de componentes.
  Las reglas CSS personalizadas (como los efectos "Liquid Glass 2050") están centralizadas en `src/styles/globals.css`.
  Queda estrictamente prohibido el uso de estilos en línea (`style={{...}}`) a menos que sean valores calculados dinámicamente.

- **Accesibilidad (a11y)**:
  Todo elemento interactivo (botones, enlaces) debe poseer un atributo `aria-label` o texto visible.
  Las imágenes puramente decorativas deben incluir `aria-hidden="true"`.
  Las secciones principales deben estar conectadas a sus títulos mediante `aria-labelledby`.

## 2. Pipeline de Validación Obligatorio

Antes de crear un Pull Request (PR) o solicitar revisión, el autor debe ejecutar y superar exitosamente el siguiente pipeline local:

1. **Type Checking**:
   Ejecuta `npm run type-check`.
   Este comando utiliza el compilador de TypeScript (`tsc --noEmit`) para verificar la integridad de los tipos sin generar archivos JavaScript.
   Debe finalizar con cero errores.

2. **Linting**:
   Ejecuta `npm run lint`.
   El proyecto utiliza ESLint para aplicar reglas de estilo y buenas prácticas.
   El comando debe finalizar sin errores, aunque se permiten advertencias menores si están justificadas.

3. **Build de Producción**:
   Ejecuta `npm run build`.
   Vite empaquetará la aplicación para producción.
   El proceso debe completarse exitosamente, demostrando que no hay errores de sintaxis o dependencias faltantes que impidan el despliegue.

4. **Revisión Visual y Responsive**:
   Ejecuta `npm run dev` y verifica la aplicación en un navegador.
   Se debe probar la interfaz en al menos tres tamaños de pantalla utilizando las DevTools del navegador:
   - Móvil: 375px de ancho.
   - Tablet: 768px de ancho.
   - Escritorio: 1440px de ancho.

5. **Performance y Accesibilidad**:
   Se recomienda ejecutar Lighthouse o axe DevTools localmente.
   El puntaje mínimo aceptable es de 90 en Accesibilidad y 80 en Performance.

## 3. Checklist de Pull Request

Al abrir un Pull Request en GitHub, el autor debe completar y marcar el siguiente checklist incluido en la plantilla `.github/pull_request_template.md`:

- Ejecuté `npm run build` y pasó sin errores.
- Ejecuté `npm run type-check` y pasó sin errores.
- Revisé visualmente los cambios en resoluciones móvil (375px) y escritorio (1440px).
- Me aseguré de no incluir secretos, contraseñas o claves de API en el código.
- Agregué mi entrada en `AGENTS.md` (si soy un agente) y actualicé `CHANGELOG.md` si aplica.
- El título y descripción del PR explican claramente qué cambió y por qué.
- Mi rama está actualizada con `develop`.

## 4. Versionado Semántico (SemVer)

El proyecto utiliza Semantic Versioning 2.0.0 (`MAJOR.MINOR.PATCH`) para gestionar las versiones publicadas.

- **MAJOR (Ej: 1.0.0 a 2.0.0)**: Cambios incompatibles en la arquitectura, rediseño total o actualizaciones de frameworks mayores.
- **MINOR (Ej: 1.0.0 a 1.1.0)**: Nuevas funcionalidades compatibles hacia atrás, como la adición de una nueva sección (ej. GodApp).
- **PATCH (Ej: 1.0.0 a 1.0.1)**: Correcciones de errores menores, ajustes visuales o actualizaciones de dependencias que no rompen la compatibilidad.

Cualquier cambio propuesto debe respetar estos estándares para garantizar que la aplicación `geminispecwebapp` se mantenga estable, rápida y accesible para todos los usuarios y crawlers de IA.
