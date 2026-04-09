import { GodSection, GodCard, GodTable, GodBadge } from '../GodUI'
import { Zap, GitBranch, Shield, Code2, Users, BookOpen } from 'lucide-react'

export default function TabOnboarding() {
  return (
    <GodSection
      title="Onboarding · Guía de Integración"
      subtitle="Todo lo que necesitas para integrarte al proyecto en menos de 10 minutos. Este documento se actualiza automáticamente con cada versión."
    >
      {/* Welcome banner */}
      <div className="rounded-xl p-5 mb-4" style={{
        background: 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(138,43,226,0.08))',
        border: '1px solid rgba(0,240,255,0.2)',
      }}>
        <div className="flex items-start gap-3">
          <span className="text-2xl">⬡</span>
          <div>
            <h3 className="text-white font-bold text-sm mb-1">Bienvenido al equipo de desarrollo</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Este es el <strong className="text-white">Centro de Comando (GodApp)</strong> del proyecto
              <strong className="text-[#00f0ff]"> Cliente Agéntico Universal Framework 2050</strong>.
              Aquí encontrarás todo lo necesario para contribuir desde el primer día, sin importar si eres
              un agente IA, un desarrollador humano, o una herramienta de vibe coding.
            </p>
          </div>
        </div>
      </div>

      <GodCard title="1. Identidad del Proyecto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {[
            ['Nombre', 'Cliente Agéntico Universal Framework 2050'],
            ['Repositorio', 'github.com/thelaunchpadtlp/geminispecwebapp'],
            ['Owner GitHub', '@thelaunchpadtlp'],
            ['Rama principal', 'main (producción)'],
            ['Rama de desarrollo', 'develop (integración)'],
            ['Stack', 'React 18 + TypeScript + Tailwind CSS + Vite'],
            ['Deploy target', 'GitHub Pages / Firebase Hosting / Cloud Run'],
            ['Dominio futuro (v2.0)', 'geminispecwebapp.thelaunchpadtlp.education'],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-2 bg-white/3 rounded-lg p-2.5 border border-white/5">
              <span className="text-slate-500 shrink-0 w-28">{k}:</span>
              <span className="text-white font-mono text-[10px]">{v}</span>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="2. Acceso al Repositorio">
        <p className="text-xs text-slate-400 mb-3">
          Todos los desarrolladores (humanos y agentes IA) trabajan bajo el mismo usuario GitHub
          <code className="text-[#00f0ff] mx-1">@thelaunchpadtlp</code>. La identidad individual se registra
          en los mensajes de commit y en GodApp.
        </p>
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto mb-3">{`# Clonar el repositorio
git clone https://github.com/thelaunchpadtlp/geminispecwebapp.git
cd geminispecwebapp

# Sincronizar antes de trabajar (OBLIGATORIO)
chmod +x scripts/agent-sync.sh
./scripts/agent-sync.sh feature tu-nombre-de-feature

# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev   # → http://localhost:5173`}</pre>
        <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-3 text-xs text-amber-300">
          <strong>Regla crítica:</strong> SIEMPRE ejecutar <code>scripts/agent-sync.sh</code> antes de comenzar
          a trabajar. Nunca hacer push directo a <code>main</code>. Todo va por PR desde tu rama.
        </div>
      </GodCard>

      <GodCard title="3. Identidad en Commits (Sistema Multi-Agente)">
        <p className="text-xs text-slate-400 mb-3">
          Como todos usamos el mismo usuario GitHub, cada commit debe incluir un tag de identidad al final del mensaje.
          Esto permite saber exactamente quién hizo qué en el historial.
        </p>
        <GodTable
          headers={['Desarrollador', 'Tag en commit', 'Tipo', 'Color']}
          rows={[
            ['Piqui (owner)', '[dev: piqui]', <GodBadge color="purple">Human</GodBadge>, '🟣'],
            ['Manus Team', '[agent: manus-team]', <GodBadge color="cyan">AI Agent</GodBadge>, '🔵'],
            ['Manus Original', '[agent: manus-original]', <GodBadge color="cyan">AI Agent</GodBadge>, '🔵'],
            ['Claude', '[agent: claude-ai]', <GodBadge color="cyan">AI Agent</GodBadge>, '🟠'],
            ['Google AI', '[agent: google-ai]', <GodBadge color="cyan">AI Agent</GodBadge>, '🔵'],
            ['Perplexity', '[agent: perplexity-ai]', <GodBadge color="cyan">AI Agent</GodBadge>, '🔵'],
            ['OpenAI', '[agent: openai-agent]', <GodBadge color="cyan">AI Agent</GodBadge>, '🟢'],
            ['Lorna', '[dev: lorna]', <GodBadge color="purple">Human</GodBadge>, '🩷'],
            ['Anyssa', '[dev: anyssa]', <GodBadge color="purple">Human</GodBadge>, '🟡'],
          ]}
        />
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 mt-3 overflow-x-auto">{`# Ejemplo de mensaje de commit correcto:
git commit -m "feat(hero): add animated gradient title

Improved the hero section with a CSS gradient animation
that pulses in sync with the holographic background.

[agent: claude-ai | user: thelaunchpadtlp]"`}</pre>
      </GodCard>

      <GodCard title="4. Flujo de Trabajo (Obligatorio para todos)">
        <div className="space-y-2 text-xs">
          {[
            { step: '1', icon: GitBranch, title: 'Sincronizar', desc: 'Ejecutar scripts/agent-sync.sh para crear tu rama de trabajo actualizada desde develop.' },
            { step: '2', icon: Code2, title: 'Desarrollar', desc: 'Trabajar en tu rama feature/fix/agent. Nunca en main ni develop directamente.' },
            { step: '3', icon: Shield, title: 'Verificar', desc: 'npm run build debe pasar sin errores. npm run type-check sin warnings. Ver QA & Testing.' },
            { step: '4', icon: Users, title: 'Pull Request', desc: 'Abrir PR de tu rama → develop. Llenar el template completo. Esperar CI verde.' },
            { step: '5', icon: Zap, title: 'Merge', desc: 'El owner o un admin hace merge. El auto-sync lleva develop → main diariamente.' },
          ].map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="flex gap-3 bg-white/3 rounded-lg p-3 border border-white/5">
              <div className="w-6 h-6 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center shrink-0">
                <span className="text-[#00f0ff] text-[10px] font-bold">{step}</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon className="w-3 h-3 text-[#00f0ff]" />
                  <strong className="text-white">{title}</strong>
                </div>
                <span className="text-slate-400">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="5. Estructura del Proyecto">
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`geminispecwebapp/
├── src/
│   ├── components/
│   │   ├── auth/          ← Sistema de autenticación (LoginModal, DevPortalButton)
│   │   ├── godapp/        ← Centro de comando (solo tocar con autorización)
│   │   │   └── tabs/      ← Tabs del GodApp (Onboarding, Mission, Org, etc.)
│   │   ├── layout/        ← Navbar, Footer
│   │   ├── sections/      ← Secciones de la webapp pública (Hero, Architecture, etc.)
│   │   └── ui/            ← Componentes reutilizables (LiquidGlassCard, NeonButton)
│   ├── context/           ← AuthContext (sistema de identidades)
│   ├── lib/               ← API mocks, conectores externos (GCP, Gemini, Cloudinary)
│   ├── styles/            ← globals.css (design tokens Liquid Glass)
│   ├── types/             ← TypeScript interfaces
│   └── utils/             ← SEO, helpers
├── v2/                    ← Preparación para v2.0 (multimedia, AI, backend)
│   ├── api/               ← Endpoints futuros (Express/Cloud Functions)
│   ├── ai/                ← Integración Gemini API
│   └── media/             ← Cloudinary, video, audio configs
├── scripts/               ← agent-sync.sh, setup-branch-protection.sh
├── .github/               ← Workflows CI/CD, CODEOWNERS, Dependabot, PR template
├── Dockerfile             ← Multi-stage build para Cloud Run
├── firebase.json          ← Firebase Hosting config
├── WORKFLOW.md            ← Reglas de branches y PRs
├── QA.md                  ← Estándares de calidad
├── SECURITY.md            ← Gestión de accesos y secretos
├── DOMAIN_SETUP.md        ← Instrucciones para dominio v2.0
└── CHANGELOG.md           ← Historial de versiones`}</pre>
      </GodCard>

      <GodCard title="6. Estándares de Código">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {[
            ['Lenguaje', 'TypeScript estricto. Sin any implícito.'],
            ['Componentes', 'Functional components + hooks. Sin clases.'],
            ['Estilos', 'Tailwind CSS. Variables CSS en globals.css para design tokens.'],
            ['Imports', 'Absolutos desde src/. Sin imports relativos de más de 2 niveles.'],
            ['Commits', 'Conventional Commits: feat/fix/docs/chore/refactor + tag de identidad.'],
            ['Build', 'npm run build debe pasar sin errores antes de cualquier PR.'],
            ['Accesibilidad', 'ARIA labels en todos los elementos interactivos. HTML5 semántico.'],
            ['SEO/AI-crawl', 'JSON-LD en index.html. Meta tags completos. Estructura semántica.'],
          ].map(([k, v]) => (
            <div key={k} className="bg-white/3 rounded-lg p-2.5 border border-white/5">
              <div className="text-[#00f0ff] font-bold mb-0.5">{k}</div>
              <div className="text-slate-400">{v}</div>
            </div>
          ))}
        </div>
      </GodCard>

      <GodCard title="7. Acceso a GodApp">
        <p className="text-xs text-slate-400 mb-3">
          GodApp está disponible en <code className="text-[#00f0ff]">(url-del-proyecto)/#/godapp</code>.
          El botón "Dev Portal" siempre está visible en la navbar de la webapp pública.
        </p>
        <GodTable
          headers={['Usuario', 'Contraseña', 'Rol', 'Tipo']}
          rows={[
            ['manus', 'manusdev', <GodBadge color="cyan">Owner</GodBadge>, 'Compartido (Piqui / Manus Team / Manus Original)'],
            ['piqui', 'piquidev', <GodBadge color="cyan">Owner</GodBadge>, 'Compartido (Piqui / Manus Team / Manus Original)'],
            ['claude', 'claudedev', <GodBadge color="gray">Agent</GodBadge>, 'IA · Anthropic'],
            ['google', 'googledev', <GodBadge color="gray">Agent</GodBadge>, 'IA · Google Gemini'],
            ['perplexity', 'perplexitydev', <GodBadge color="gray">Agent</GodBadge>, 'IA · Perplexity'],
            ['openai', 'openaidev', <GodBadge color="gray">Agent</GodBadge>, 'IA · OpenAI'],
            ['lorna', 'lornadev', <GodBadge color="purple">Dev</GodBadge>, 'Humano · TLP team'],
            ['anyssa', 'anyssadev', <GodBadge color="purple">Dev</GodBadge>, 'Humano · TLP team'],
          ]}
        />
        <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-3 text-xs text-amber-300 mt-3">
          <strong>Seguridad:</strong> Estas credenciales son para acceso al portal de desarrollo interno.
          No son credenciales de producción ni de servicios externos. Para API keys y secretos reales,
          ver la pestaña <strong>Accesos & Claves</strong>.
        </div>
      </GodCard>

      <GodCard title="8. Roadmap Rápido">
        <GodTable
          headers={['Versión', 'Estado', 'Descripción']}
          rows={[
            ['v1.0.0', <GodBadge color="green">Publicado</GodBadge>, 'Scaffold inicial: React+TS+Tailwind, Liquid Glass, todas las secciones'],
            ['v1.1.0', <GodBadge color="green">Publicado</GodBadge>, 'GodApp: centro de comando con 8 tabs, gobernanza, CONTRIBUTING, QA, SECURITY'],
            ['v1.2.0', <GodBadge color="green">Publicado</GodBadge>, 'Auto-sync: GitHub Actions, Dependabot, CODEOWNERS, scripts de agentes'],
            ['v1.3.0', <GodBadge color="cyan">Actual</GodBadge>, 'Auth system: login visible, identidades multi-agente, TabOnboarding, arquitectura v2.0'],
            ['v2.0.0', <GodBadge color="gray">Planificado</GodBadge>, 'Multimedia: ilustraciones, video, animaciones avanzadas, AI integrada, dominio custom'],
          ]}
        />
      </GodCard>

      <GodCard title="9. Recursos y Documentación">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          {[
            ['WORKFLOW.md', 'Reglas de branches, PRs y merges'],
            ['QA.md', 'Estándares de calidad y testing'],
            ['SECURITY.md', 'Gestión de accesos y secretos'],
            ['DOMAIN_SETUP.md', 'Configuración del dominio v2.0'],
            ['CHANGELOG.md', 'Historial completo de versiones'],
            ['CONTRIBUTING.md', 'Guía de contribución multi-agente'],
            ['AGENTS.md', 'Registro de contribuciones de IA'],
            ['scripts/agent-sync.sh', 'Script de sincronización pre-trabajo'],
          ].map(([file, desc]) => (
            <div key={file as string} className="flex gap-2 bg-white/3 rounded-lg p-2.5 border border-white/5">
              <BookOpen className="w-3 h-3 text-[#00f0ff] shrink-0 mt-0.5" />
              <div>
                <code className="text-[#00f0ff] text-[10px]">{file}</code>
                <div className="text-slate-500">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </GodCard>

      <div className="text-center py-4 text-slate-700 text-xs">
        Documento generado y mantenido por Manus AI · Se actualiza con cada versión del proyecto
      </div>
    </GodSection>
  )
}
