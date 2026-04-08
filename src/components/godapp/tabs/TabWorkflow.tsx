import { GodSection, GodCard, GodBadge } from '../GodUI'

export default function TabWorkflow() {
  return (
    <GodSection title="Workflow de Desarrollo" subtitle="Reglas de forks, branches, commits y merges para todos los agentes y humanos">

      <GodCard title="Modelo de Ramas (Branch Model)">
        <div className="space-y-3 text-xs">
          {[
            { branch: 'main', desc: 'Rama de producción. SOLO recibe merges desde develop o hotfix. Nunca push directo.', color: 'green' as const },
            { branch: 'develop', desc: 'Rama de integración. Aquí se mergean todas las features antes de ir a main.', color: 'blue' as const },
            { branch: 'feature/<nombre>', desc: 'Rama de trabajo por feature o tarea. Creada desde develop. Ej: feature/mcp-claude', color: 'purple' as const },
            { branch: 'fix/<nombre>', desc: 'Corrección de bug. Creada desde develop (o main si es crítico).', color: 'orange' as const },
            { branch: 'hotfix/<nombre>', desc: 'Fix urgente en producción. Creada desde main, mergeada a main Y develop.', color: 'red' as const },
            { branch: 'agent/<nombre>', desc: 'Rama exclusiva para un agente de IA. Ej: agent/manus-godapp-v2', color: 'gray' as const },
          ].map(({ branch, desc, color }) => (
            <div key={branch} className="flex gap-3 items-start bg-white/5 rounded-lg p-3 border border-white/10">
              <GodBadge color={color}>{branch}</GodBadge>
              <span className="text-slate-400">{desc}</span>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="Flujo Paso a Paso para Contribuir">
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-4 overflow-x-auto leading-relaxed">{`# 1. Clonar el repo (primera vez)
git clone https://github.com/thelaunchpadtlp/geminispecwebapp.git
cd geminispecwebapp

# 2. Crear rama desde develop
git checkout develop
git pull origin develop
git checkout -b feature/mi-nueva-feature

# 3. Trabajar, commitear con mensaje semántico
git add .
git commit -m "feat(seccion): descripción [agent: mi-nombre]"

# 4. Push de la rama
git push origin feature/mi-nueva-feature

# 5. Abrir Pull Request en GitHub:
#    base: develop  ←  compare: feature/mi-nueva-feature
#    Llenar el template de PR (ver .github/pull_request_template.md)

# 6. Esperar review y aprobación (mínimo 1 aprobación)
# 7. Merge con Squash (para mantener historial limpio)
# 8. Eliminar rama remota después del merge`}</pre>
      </GodCard>

      <GodCard title="Reglas Anti-Destrucción">
        <ul className="text-xs text-slate-400 space-y-2">
          {[
            'NUNCA hacer force push a main o develop.',
            'NUNCA hacer push directo a main (branch protection activada).',
            'NUNCA mergear sin que el build de CI pase (verde).',
            'NUNCA borrar archivos de configuración (Dockerfile, firebase.json, vite.config.ts) sin PR y aprobación.',
            'NUNCA commitear secrets, API keys o contraseñas. Usar variables de entorno (.env no commiteado).',
            'Si un merge rompe develop, el autor del PR es responsable de abrir un hotfix inmediato.',
          ].map(rule => (
            <li key={rule} className="flex gap-2 items-start">
              <span className="text-red-400 shrink-0">✕</span>
              {rule}
            </li>
          ))}
        </ul>
      </GodCard>

      <GodCard title="Forks para Colaboradores Externos">
        <p className="text-xs text-slate-400 mb-3">
          Si un colaborador no tiene acceso de escritura directo al repo, debe trabajar mediante fork:
        </p>
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`# 1. Fork del repo en GitHub (botón Fork en la UI)
# 2. Clonar su fork
git clone https://github.com/SU-USUARIO/geminispecwebapp.git

# 3. Agregar upstream
git remote add upstream https://github.com/thelaunchpadtlp/geminispecwebapp.git

# 4. Sincronizar con upstream antes de trabajar
git fetch upstream && git merge upstream/develop

# 5. Crear rama, trabajar, pushear a su fork
# 6. Abrir PR desde su fork → thelaunchpadtlp/geminispecwebapp (base: develop)`}</pre>
      </GodCard>
    </GodSection>
  )
}
