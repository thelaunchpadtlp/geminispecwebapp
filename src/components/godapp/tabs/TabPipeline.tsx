import { GodSection, GodCard, GodTable, GodBadge } from '../GodUI'

const DONE = <GodBadge color="green">DONE</GodBadge>
const WIP  = <GodBadge color="orange">WIP</GodBadge>
const TODO = <GodBadge color="gray">TODO</GodBadge>

export default function TabPipeline() {
  return (
    <GodSection title="Pipeline & Estado del Proyecto" subtitle="Objetivos, tareas y estado actual — actualizar con cada PR">

      <GodCard title="Estado General">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Versión Publicada', value: 'v1.0.0', color: 'text-green-400' },
            { label: 'Versión en Desarrollo', value: 'v1.1.0', color: 'text-[#00f0ff]' },
            { label: 'Rama Principal', value: 'main', color: 'text-slate-300' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className={`text-xl font-bold ${color}`}>{value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="Hitos del Proyecto">
        <GodTable
          headers={['Hito', 'Descripción', 'Estado', 'Responsable']}
          rows={[
            ['v1.0.0 — Scaffold', 'Estructura base React+TS+Tailwind, todas las secciones, Dockerfile, Firebase', DONE, 'Manus AI'],
            ['v1.0.0 — GitHub', 'Repo geminispecwebapp creado, código subido, CONTRIBUTING.md', DONE, 'Manus AI'],
            ['v1.1.0 — GodApp', 'Centro de comando /godapp con todas las secciones y tabs', WIP, 'Manus AI'],
            ['v1.1.0 — Workflows', 'GitHub Actions CI/CD activados (requiere token con scope workflows)', TODO, 'thelaunchpadtlp'],
            ['v1.2.0 — Dominio', 'Configurar geminispecwebapp.thelaunchpadtlp.education en DNS + Firebase', TODO, 'thelaunchpadtlp'],
            ['v1.2.0 — Colaborador', 'Agregar manus@thelaunchpadtlp.education como Admin en GitHub', TODO, 'thelaunchpadtlp'],
            ['v1.3.0 — GCP Live', 'Conectar api-mock.ts con Firebase Firestore / GCP APIs reales', TODO, 'Equipo'],
            ['v2.0.0 — Gemini API', 'Integración live con Gemini API desde Google Workspace', TODO, 'Equipo'],
          ]}
        />
      </GodCard>

      <GodCard title="Backlog de Tareas Activas">
        <GodTable
          headers={['ID', 'Tarea', 'Prioridad', 'Estado', 'Rama sugerida']}
          rows={[
            ['T-001', 'Activar GitHub Actions (push workflows desde cuenta owner)', <GodBadge color="red">Alta</GodBadge>, TODO, 'main (directo)'],
            ['T-002', 'Configurar DNS para dominio custom en Firebase Hosting', <GodBadge color="red">Alta</GodBadge>, TODO, 'main (directo)'],
            ['T-003', 'Agregar manus@thelaunchpadtlp.education como colaborador Admin', <GodBadge color="orange">Media</GodBadge>, TODO, 'N/A (GitHub UI)'],
            ['T-004', 'Añadir animaciones Framer Motion a Hero y secciones', <GodBadge color="gray">Baja</GodBadge>, TODO, 'feature/animations'],
            ['T-005', 'Conectar api-mock.ts con Firebase Firestore real', <GodBadge color="orange">Media</GodBadge>, TODO, 'feature/firebase-live'],
            ['T-006', 'Agregar modo claro / dark toggle', <GodBadge color="gray">Baja</GodBadge>, TODO, 'feature/theme-toggle'],
            ['T-007', 'Internacionalización (i18n) ES/EN', <GodBadge color="gray">Baja</GodBadge>, TODO, 'feature/i18n'],
          ]}
        />
      </GodCard>
    </GodSection>
  )
}
