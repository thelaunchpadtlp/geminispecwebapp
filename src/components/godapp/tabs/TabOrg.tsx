import { GodSection, GodCard, GodTable, GodBadge } from '../GodUI'

export default function TabOrg() {
  return (
    <GodSection title="Organigrama del Equipo" subtitle="Humanos y agentes de IA con sus roles y permisos">

      <GodCard title="Propietarios y Administradores">
        <GodTable
          headers={['Nombre / Agente', 'Tipo', 'Rol', 'Plataforma / Handle', 'Permisos GitHub']}
          rows={[
            ['thelaunchpadtlp', <GodBadge color="blue">Humano</GodBadge>, 'Owner', 'github.com/thelaunchpadtlp', <GodBadge color="green">Admin</GodBadge>],
            ['manus@thelaunchpadtlp.education', <GodBadge color="purple">Manus AI</GodBadge>, 'Owner / Lead Dev', 'Manus Platform', <GodBadge color="orange">Admin (pendiente)</GodBadge>],
          ]}
        />
      </GodCard>

      <GodCard title="Agentes de IA Colaboradores">
        <GodTable
          headers={['Agente', 'Plataforma', 'Especialidad', 'Acceso', 'Rama de trabajo']}
          rows={[
            ['Manus AI', 'manus.im', 'Infraestructura, scaffolding, docs', <GodBadge color="green">Write</GodBadge>, 'feature/manus-*'],
            ['Claude Code', 'Anthropic / OpenRouter', 'Refactorización, lógica compleja', <GodBadge color="green">Write</GodBadge>, 'feature/claude-*'],
            ['Gemini / Coding', 'Google AI Studio', 'Integración GCP, Workspace APIs', <GodBadge color="green">Write</GodBadge>, 'feature/gemini-*'],
            ['ChatGPT / Codex', 'OpenAI', 'Generación de scripts, tests', <GodBadge color="green">Write</GodBadge>, 'feature/codex-*'],
            ['Cursor / Copilot', 'IDE Integrado', 'Edición inline, completions', <GodBadge color="gray">Local</GodBadge>, 'feature/ide-*'],
            ['Windsurf / Aider', 'CLI / IDE', 'Refactorización masiva', <GodBadge color="gray">Local</GodBadge>, 'feature/cli-*'],
          ]}
        />
      </GodCard>

      <GodCard title="Reglas de Identificación en Commits">
        <p className="text-slate-400 text-xs mb-3">
          Todo agente o desarrollador DEBE identificarse en el mensaje de commit usando el tag <code className="text-[#00f0ff]">[agent: nombre]</code> o <code className="text-[#00f0ff]">[dev: nombre]</code>.
        </p>
        <pre className="text-xs text-slate-400 bg-black/40 rounded-lg p-3 overflow-x-auto">{`# Ejemplos correctos:
feat(mcp): add Claude integration [agent: claude-code]
fix(hero): correct gradient on mobile [dev: thelaunchpadtlp]
docs(godapp): update organigram [agent: manus-ai]

# Incorrecto (sin identificación):
update stuff  ← RECHAZADO por PR review`}</pre>
      </GodCard>

      <GodCard title="Cómo Agregar un Nuevo Colaborador">
        <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside">
          <li>El owner (thelaunchpadtlp) va a <strong className="text-white">Settings → Collaborators</strong> en el repo de GitHub.</li>
          <li>Agrega el usuario GitHub con rol <strong className="text-[#00f0ff]">Write</strong> (para agentes) o <strong className="text-[#00f0ff]">Admin</strong> (para owners).</li>
          <li>El nuevo colaborador acepta la invitación por email o en github.com/notifications.</li>
          <li>Agrega su entrada en <strong className="text-white">AGENTS.md</strong> con su primer commit.</li>
          <li>Actualiza este organigrama en GodApp via PR desde su rama.</li>
        </ol>
      </GodCard>
    </GodSection>
  )
}
