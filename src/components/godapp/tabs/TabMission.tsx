import { GodSection, GodCard, GodBadge } from '../GodUI'

export default function TabMission() {
  return (
    <GodSection title="Misión, Visión & Arquitectura" subtitle="Fundamentos del proyecto geminispecwebapp">

      <GodCard title="Misión">
        <p className="text-slate-300 leading-relaxed">
          Construir y mantener la <strong className="text-[#00f0ff]">micro web app "Cliente Agéntico Universal Framework 2050"</strong> como
          escaparate interactivo, landing page y prueba de concepto visual de un hipervisor agéntico multi-modelo.
          El proyecto debe ser desarrollable colectivamente por humanos y agentes de IA de cualquier plataforma,
          con portabilidad total hacia GCP/Firebase y dominio propio.
        </p>
      </GodCard>

      <GodCard title="Visión">
        <p className="text-slate-300 leading-relaxed">
          Ser el estándar de referencia para proyectos de software colaborativo humano-IA: arquitectura modular,
          documentación viva, CI/CD automatizado, y un centro de comando (<strong className="text-[#00f0ff]">GodApp</strong>) accesible
          en <code className="bg-white/10 text-[#00f0ff] px-1.5 py-0.5 rounded text-[11px]">/godapp</code> que mantenga a todos los agentes y desarrolladores sincronizados en tiempo real.
        </p>
      </GodCard>

      <GodCard title="Stack Tecnológico">
        <div className="grid grid-cols-2 gap-3 text-xs">
          {[
            ['Framework', 'React 18 + TypeScript (strict)'],
            ['Estilos', 'Tailwind CSS v3 + CSS Liquid Glass'],
            ['Build', 'Vite 5'],
            ['Router', 'React Router v6 (hash mode)'],
            ['Deploy', 'Firebase Hosting / GitHub Pages'],
            ['Contenedor', 'Docker multi-stage + Nginx Alpine'],
            ['CI/CD', 'GitHub Actions (ci.yml + deploy-pages.yml)'],
            ['Dominio futuro', 'geminispecwebapp.thelaunchpadtlp.education'],
          ].map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 bg-white/5 rounded-lg p-3 border border-white/10">
              <span className="text-slate-500 uppercase tracking-widest text-[10px]">{k}</span>
              <span className="text-[#00f0ff]">{v}</span>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="Estructura del Repositorio">
        <pre className="text-xs text-slate-400 leading-relaxed overflow-x-auto">{`geminispecwebapp/
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   ├── ui/            # LiquidGlassCard, NeonButton
│   │   ├── sections/      # Hero, Architecture, HMI, LLMOS, MCP, VPN
│   │   └── godapp/        # GodApp + tabs (este centro de comando)
│   ├── styles/globals.css # Design tokens Liquid Glass 2050
│   ├── types/index.ts     # Interfaces TypeScript
│   ├── utils/seo.ts       # JSON-LD + metadata helpers
│   └── lib/api-mock.ts    # Mocks → GCP/Firebase swap
├── public/manifest.json   # PWA
├── Dockerfile             # Multi-stage build
├── docker-compose.yml
├── firebase.json          # Firebase Hosting
├── .firebaserc            # GCP project ID
├── .github/workflows/     # CI/CD (activar con token workflows)
├── CONTRIBUTING.md        # Guía multi-agente
├── WORKFLOW.md            # Forks, branches, merge rules
├── QA.md                  # Quality assurance completo
├── SECURITY.md            # Accesos y secretos
├── AGENTS.md              # Registro de contribuciones IA
└── CHANGELOG.md           # Historial de versiones`}</pre>
      </GodCard>

      <div className="flex gap-2 flex-wrap">
        <GodBadge color="blue">React 18</GodBadge>
        <GodBadge color="purple">TypeScript Strict</GodBadge>
        <GodBadge color="pink">Liquid Glass 2050</GodBadge>
        <GodBadge color="green">GCP Ready</GodBadge>
        <GodBadge color="blue">PWA</GodBadge>
        <GodBadge color="purple">JSON-LD AI-Crawlable</GodBadge>
      </div>
    </GodSection>
  )
}
