import { GodSection, GodCard, GodTable, GodBadge } from '../GodUI'

export default function TabQA() {
  return (
    <GodSection title="QA, Testing & Quality Assurance" subtitle="Estándares obligatorios para todos los agentes y desarrolladores">

      <GodCard title="Pipeline de Calidad (obligatorio antes de merge a main)">
        <GodTable
          headers={['Paso', 'Herramienta / Comando', 'Criterio de Éxito', 'Automático']}
          rows={[
            ['1. Type Check', 'npm run type-check (tsc --noEmit)', 'Cero errores TypeScript', <GodBadge color="green">CI</GodBadge>],
            ['2. Build', 'npm run build', 'Build exitoso sin warnings críticos', <GodBadge color="green">CI</GodBadge>],
            ['3. Lint', 'npm run lint (ESLint)', 'Cero errores, warnings permitidos', <GodBadge color="green">CI</GodBadge>],
            ['4. Visual Review', 'npm run dev → revisar en browser', 'Sin regresiones visuales', <GodBadge color="orange">Manual</GodBadge>],
            ['5. Responsive', 'DevTools: 375px, 768px, 1440px', 'Layout correcto en los 3 breakpoints', <GodBadge color="orange">Manual</GodBadge>],
            ['6. Accessibility', 'axe DevTools o Lighthouse', 'Score accesibilidad ≥ 90', <GodBadge color="orange">Manual</GodBadge>],
            ['7. Performance', 'Lighthouse CI', 'Performance ≥ 80, LCP < 2.5s', <GodBadge color="green">CI</GodBadge>],
            ['8. JSON-LD', 'schema.org validator', 'Sin errores en structured data', <GodBadge color="orange">Manual</GodBadge>],
          ]}
        />
      </GodCard>

      <GodCard title="Estándares de Código">
        <div className="space-y-3 text-xs text-slate-400">
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <strong className="text-[#00f0ff]">TypeScript:</strong> Modo strict activado. Prohibido <code className="text-red-400">any</code> implícito.
            Todas las props de componentes deben tener interfaces definidas en <code className="text-slate-300">src/types/index.ts</code> o inline.
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <strong className="text-[#00f0ff]">Componentes:</strong> Un componente por archivo. Máximo 150 líneas por archivo.
            Si supera ese límite, dividir en sub-componentes. Usar <code className="text-slate-300">default export</code>.
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <strong className="text-[#00f0ff]">CSS:</strong> Usar clases Tailwind. CSS custom solo en <code className="text-slate-300">globals.css</code> para design tokens.
            Prohibido <code className="text-red-400">style</code> inline excepto para valores dinámicos.
          </div>
          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
            <strong className="text-[#00f0ff]">Accesibilidad:</strong> Todo elemento interactivo debe tener <code className="text-slate-300">aria-label</code> o texto visible.
            Imágenes decorativas: <code className="text-slate-300">aria-hidden="true"</code>. Secciones: <code className="text-slate-300">aria-labelledby</code>.
          </div>
        </div>
      </GodCard>

      <GodCard title="Checklist de PR (obligatorio)">
        <p className="text-xs text-slate-500 mb-3">El autor del PR debe confirmar cada punto antes de solicitar review:</p>
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`## PR Checklist
- [ ] npm run build pasa sin errores
- [ ] npm run type-check pasa sin errores
- [ ] Revisé visualmente en mobile (375px) y desktop (1440px)
- [ ] No commiteé ningún secret o API key
- [ ] Agregué mi entrada en AGENTS.md o CHANGELOG.md si aplica
- [ ] El mensaje de commit sigue Conventional Commits
- [ ] La rama está actualizada con develop (git merge develop)
- [ ] El PR tiene descripción clara de qué cambió y por qué`}</pre>
      </GodCard>

      <GodCard title="Versioning (SemVer)">
        <p className="text-xs text-slate-400 mb-2">
          Se sigue <strong className="text-white">Semantic Versioning 2.0.0</strong>: <code className="text-[#00f0ff]">MAJOR.MINOR.PATCH</code>
        </p>
        <GodTable
          headers={['Tipo de cambio', 'Versión que sube', 'Ejemplo']}
          rows={[
            ['Breaking change (rompe API/estructura)', 'MAJOR (1.x.x → 2.0.0)', 'Cambio de router, refactor total'],
            ['Nueva funcionalidad compatible', 'MINOR (1.0.x → 1.1.0)', 'Nueva sección, GodApp, nueva tab'],
            ['Bug fix, mejora menor', 'PATCH (1.1.x → 1.1.1)', 'Fix CSS, typo, ajuste responsive'],
          ]}
        />
      </GodCard>
    </GodSection>
  )
}
