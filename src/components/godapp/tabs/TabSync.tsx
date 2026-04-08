import { GodSection, GodCard, GodTable, GodBadge } from '../GodUI'
import { Shield, Bot, Clock, GitMerge, Trash2, Package } from 'lucide-react'

export default function TabSync() {
  return (
    <GodSection title="Sincronización Autónoma" subtitle="Sistema self-powered de sync, protección y actualización automática con GitHub">

      <div className="bg-[#00f0ff]/5 border border-[#00f0ff]/20 rounded-xl p-4 text-xs text-slate-300 mb-4">
        <strong className="text-[#00f0ff]">Principio de Diseño:</strong> El proyecto se mantiene actualizado, seguro y limpio
        de forma autónoma incluso cuando todos los desarrolladores están fuera de servicio.
        Los sistemas de sincronización operan 24/7 con salvaguardas anti-conflicto y anti-destrucción.
      </div>

      <GodCard title="Arquitectura del Sistema de Sincronización">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {[
            { icon: GitMerge, label: 'Auto-Sync Diario', desc: 'develop → main cada día a las 03:00 UTC. Solo si el build pasa y no hay conflictos.', color: 'text-[#00f0ff]' },
            { icon: Shield, label: 'Health Check', desc: 'Verifica que main y develop buildean correctamente cada 6 horas.', color: 'text-green-400' },
            { icon: Trash2, label: 'Stale Cleanup', desc: 'Cierra PRs inactivos (+14 días) y elimina ramas ya mergeadas. Cada domingo.', color: 'text-orange-400' },
            { icon: Package, label: 'Dependency Audit', desc: 'Auditoría de seguridad npm + parches automáticos. Cada lunes a las 06:00 UTC.', color: 'text-[#8a2be2]' },
            { icon: Bot, label: 'Dependabot', desc: 'PRs automáticos de actualización de dependencias npm y GitHub Actions. Cada lunes.', color: 'text-blue-400' },
            { icon: Clock, label: 'CODEOWNERS', desc: 'Revisores automáticos asignados por GitHub en cada PR según el archivo modificado.', color: 'text-slate-400' },
          ].map(({ icon: Icon, label, desc, color }) => (
            <div key={label} className="flex gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
              <Icon className={`w-4 h-4 ${color} shrink-0 mt-0.5`} />
              <div>
                <div className={`font-bold ${color} mb-0.5`}>{label}</div>
                <div className="text-slate-400">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="Workflows Automáticos (GitHub Actions)">
        <GodTable
          headers={['Workflow', 'Archivo', 'Trigger', 'Frecuencia', 'Estado']}
          rows={[
            ['CI Build & Type Check', 'ci.yml', 'Push / PR a main, develop', 'En cada push', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Deploy GitHub Pages', 'deploy-pages.yml', 'Push a main', 'En cada merge a main', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Auto-Sync develop→main', 'auto-sync.yml', 'Cron + manual', 'Diario 03:00 UTC', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Stale Cleanup', 'stale-cleanup.yml', 'Cron + manual', 'Domingos 04:00 UTC', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Dependency Audit', 'dependency-audit.yml', 'Cron + manual', 'Lunes 06:00 UTC', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Health Check', 'health-check.yml', 'Cron + manual', 'Cada 6 horas', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Dependabot (npm)', 'dependabot.yml', 'Automático GitHub', 'Lunes 07:00 UTC', <GodBadge color="gray">Pendiente activar</GodBadge>],
          ]}
        />
        <p className="text-xs text-slate-500 mt-3">
          Para activar todos los workflows: el owner debe hacer push de la carpeta <code className="text-[#00f0ff]">.github/workflows/</code> desde su máquina con un token que tenga el scope <code className="text-[#00f0ff]">workflow</code>.
          Ver instrucciones en la pestaña <strong className="text-white">Accesos & Claves</strong>.
        </p>
      </GodCard>

      <GodCard title="Salvaguardas Anti-Conflicto y Anti-Destrucción">
        <div className="space-y-2 text-xs text-slate-400">
          {[
            ['Auto-Sync aborta si hay conflictos', 'El workflow detecta conflictos de merge ANTES de intentar fusionar. Si los hay, aborta y crea un Issue automático.'],
            ['Auto-Sync aborta si el build falla', 'develop debe buildear limpio antes de cualquier merge automático a main. Sin build verde = sin merge.'],
            ['main nunca recibe push directo', 'Branch protection rules bloquean cualquier push directo a main. Todo debe pasar por PR + CI + aprobación.'],
            ['Stale cleanup nunca toca main/develop/hotfix', 'El script de limpieza solo elimina ramas feature/fix/agent ya mergeadas. Las ramas protegidas son intocables.'],
            ['Dependabot apunta a develop, no a main', 'Los PRs de actualización de dependencias van a develop para revisión antes de llegar a producción.'],
            ['CODEOWNERS asigna revisores automáticos', 'Archivos críticos (package.json, Dockerfile, workflows) requieren aprobación del owner antes de mergear.'],
            ['Issues automáticos ante cualquier fallo', 'Cualquier workflow que falle crea un Issue con etiqueta needs-attention para notificar al equipo.'],
          ].map(([title, desc]) => (
            <div key={title as string} className="flex gap-2 items-start bg-white/5 rounded-lg p-3 border border-white/10">
              <span className="text-green-400 shrink-0">✓</span>
              <div>
                <strong className="text-white">{title}:</strong>{' '}
                <span>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="Script de Sincronización para Agentes y Desarrolladores">
        <p className="text-xs text-slate-400 mb-3">
          Todos los agentes y desarrolladores deben ejecutar <code className="text-[#00f0ff]">scripts/agent-sync.sh</code> antes de comenzar a trabajar.
          Este script garantiza que siempre se trabaja sobre la versión más reciente de develop.
        </p>
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`# Dar permisos de ejecución (solo la primera vez)
chmod +x scripts/agent-sync.sh

# Sincronizar y crear rama de trabajo
./scripts/agent-sync.sh feature mi-nueva-feature
./scripts/agent-sync.sh agent manus-refactor-ui
./scripts/agent-sync.sh fix bug-navbar-mobile

# El script:
# 1. Verifica que estás en el repo correcto
# 2. Hace fetch de todos los cambios remotos
# 3. Actualiza develop con los últimos cambios
# 4. Verifica que el build pasa (npm run type-check)
# 5. Crea tu rama de trabajo estandarizada`}</pre>
      </GodCard>

      <GodCard title="Activar Branch Protection (1 vez, por el owner)">
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`# Dar permisos y ejecutar
chmod +x scripts/setup-branch-protection.sh
./scripts/setup-branch-protection.sh

# Esto configura vía GitHub API:
# - main: PR obligatorio + CI verde + 1 aprobación + no force push
# - develop: PR obligatorio + CI verde + 1 aprobación`}</pre>
      </GodCard>
    </GodSection>
  )
}
