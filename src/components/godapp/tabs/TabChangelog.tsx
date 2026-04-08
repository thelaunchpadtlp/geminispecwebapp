import { GodSection, GodCard, GodBadge } from '../GodUI'

const entries = [
  {
    version: 'v1.1.0',
    date: '2025-04-08',
    status: 'WIP' as const,
    author: 'Manus AI',
    changes: [
      { type: 'feat', desc: 'GodApp (/godapp): centro de comando completo con 8 tabs' },
      { type: 'feat', desc: 'TabMission, TabOrg, TabPipeline, TabWorkflow, TabQA, TabAccess, TabPreview, TabChangelog' },
      { type: 'feat', desc: 'React Router v6 para navegación SPA entre / y /godapp' },
      { type: 'docs', desc: 'WORKFLOW.md, QA.md, SECURITY.md, CHANGELOG.md' },
      { type: 'docs', desc: 'PR template (.github/pull_request_template.md)' },
      { type: 'docs', desc: 'Issue templates: bug report, feature request, agent task' },
    ],
  },
  {
    version: 'v1.0.0',
    date: '2025-04-08',
    status: 'RELEASED' as const,
    author: 'Manus AI',
    changes: [
      { type: 'feat', desc: 'Scaffold completo React 18 + TypeScript strict + Tailwind CSS v3 + Vite 5' },
      { type: 'feat', desc: 'Secciones: Hero, Architecture, HMI, LLMOS, MCP, VPN' },
      { type: 'feat', desc: 'Estética Liquid Glass 2050: holographic grid, spatial orbs, neon colors' },
      { type: 'feat', desc: 'JSON-LD structured data (TechArticle + SoftwareApplication)' },
      { type: 'feat', desc: 'HTML5 semántico + ARIA para accesibilidad y AI crawlers' },
      { type: 'feat', desc: 'PWA manifest.json' },
      { type: 'feat', desc: 'Dockerfile multi-stage (Node build + Nginx Alpine) + docker-compose.yml' },
      { type: 'feat', desc: 'firebase.json + .firebaserc para Firebase Hosting' },
      { type: 'docs', desc: 'README.md, CONTRIBUTING.md, AGENTS.md' },
      { type: 'chore', desc: 'Repositorio geminispecwebapp creado en GitHub (privado)' },
    ],
  },
]

const typeColors: Record<string, 'green' | 'blue' | 'orange' | 'gray'> = {
  feat: 'green', fix: 'orange', docs: 'blue', chore: 'gray', refactor: 'purple' as any,
}

export default function TabChangelog() {
  return (
    <GodSection title="Changelog" subtitle="Historial completo de versiones — actualizar con cada release">
      {entries.map(entry => (
        <GodCard key={entry.version} title={`${entry.version} — ${entry.date}`}>
          <div className="flex items-center gap-2 mb-4">
            <GodBadge color={entry.status === 'RELEASED' ? 'green' : 'orange'}>{entry.status}</GodBadge>
            <span className="text-xs text-slate-500">por {entry.author}</span>
          </div>
          <ul className="space-y-1.5">
            {entry.changes.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <GodBadge color={typeColors[c.type] ?? 'gray'}>{c.type}</GodBadge>
                <span className="text-slate-300">{c.desc}</span>
              </li>
            ))}
          </ul>
        </GodCard>
      ))}

      <GodCard title="Cómo Actualizar el Changelog">
        <p className="text-xs text-slate-400 leading-relaxed">
          Antes de cada merge a <code className="text-[#00f0ff]">main</code>, el autor del PR debe agregar una entrada en este archivo
          y en <code className="text-[#00f0ff]">CHANGELOG.md</code> en la raíz del repositorio, siguiendo el formato{' '}
          <a href="https://keepachangelog.com" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] hover:underline">
            Keep a Changelog
          </a>.
          También debe actualizar la versión en <code className="text-[#00f0ff]">package.json</code>.
        </p>
      </GodCard>
    </GodSection>
  )
}
