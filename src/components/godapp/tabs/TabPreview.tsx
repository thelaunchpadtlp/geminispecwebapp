import { ExternalLink, Monitor, GitBranch } from 'lucide-react'
import { GodSection, GodCard, GodBadge } from '../GodUI'

export default function TabPreview() {
  const PROD_URL = 'https://geminispecwebapp.thelaunchpadtlp.education'
  const PAGES_URL = 'https://thelaunchpadtlp.github.io/geminispecwebapp'
  const REPO_URL = 'https://github.com/thelaunchpadtlp/geminispecwebapp'

  return (
    <GodSection title="IDE Preview & Visualización en Vivo" subtitle="Estado visual actual del proyecto publicado y en desarrollo">

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <GodCard title="Versión Publicada (Producción)">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            <GodBadge color="green">LIVE</GodBadge>
            <span className="text-xs text-slate-500">main branch</span>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            La versión actualmente publicada y accesible al público.
          </p>
          <div className="space-y-2">
            <a
              href={PROD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#00f0ff] hover:underline"
            >
              <Monitor className="w-3 h-3" />
              {PROD_URL}
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PAGES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#00f0ff] hover:underline"
            >
              <Monitor className="w-3 h-3" />
              {PAGES_URL} (GitHub Pages)
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </GodCard>

        <GodCard title="Versión en Desarrollo (develop branch)">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse inline-block" />
            <GodBadge color="blue">DEV</GodBadge>
            <span className="text-xs text-slate-500">develop branch</span>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            Preview de la versión más reciente aún no publicada.
            Disponible via Netlify/Vercel preview deploy o localmente.
          </p>
          <a
            href={`${REPO_URL}/tree/develop`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#8a2be2] hover:underline"
          >
            <GitBranch className="w-3 h-3" />
            Ver rama develop en GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </GodCard>
      </div>

      <GodCard title="Vista Embebida — Versión Publicada">
        <p className="text-xs text-slate-500 mb-3">
          Vista previa embebida de la app. Si el dominio custom no está activo aún, usar el enlace de GitHub Pages.
        </p>
        <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black/40" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={PAGES_URL}
            title="Versión publicada de geminispecwebapp"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs text-slate-600">Cargando preview...</span>
          </div>
        </div>
      </GodCard>

      <GodCard title="Cómo Correr Localmente (Dev Server)">
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`# Clonar y correr
git clone https://github.com/thelaunchpadtlp/geminispecwebapp.git
cd geminispecwebapp
npm install
npm run dev
# → http://localhost:5173

# Build y preview de producción
npm run build
npm run preview
# → http://localhost:4173

# Docker (idéntico a producción)
docker-compose up --build
# → http://localhost:8080`}</pre>
      </GodCard>

      <GodCard title="Herramientas de Desarrollo Compatibles">
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            ['VS Code', 'Extensión Vite + ESLint + Tailwind IntelliSense'],
            ['Cursor', 'Funciona out-of-the-box con el proyecto'],
            ['Windsurf', 'Compatible, usar npm run dev'],
            ['Copilot (GitHub)', 'Activar en VS Code / JetBrains'],
            ['Aider (CLI)', 'aider --model gpt-4 src/'],
            ['Claude Code (CLI)', 'claude --project . (desde raíz)'],
            ['JetBrains WebStorm', 'Abrir carpeta raíz del proyecto'],
            ['Gemini Code Assist', 'Plugin para VS Code / JetBrains'],
          ].map(([tool, note]) => (
            <div key={tool} className="bg-white/5 rounded-lg p-2 border border-white/10">
              <div className="text-[#00f0ff] font-bold">{tool}</div>
              <div className="text-slate-500 text-[10px] mt-0.5">{note}</div>
            </div>
          ))}
        </div>
      </GodCard>
    </GodSection>
  )
}
