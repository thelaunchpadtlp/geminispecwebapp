import { Cable, Sparkles, Bot, MessageSquareCode, Zap, ArrowRight } from 'lucide-react'

const models = [
  {
    id: 'gemini',
    name: 'Gemini & Coding',
    role: 'Motor Principal',
    description: 'Razonamiento rápido e integración profunda con Google Workspace mediante MCP Servers dedicados. Ventanas de contexto masivas.',
    Icon: Sparkles,
    ringColor: 'border-[#00f0ff]/40',
    glowColor: 'rgba(0,240,255,0.15)',
    textColor: 'text-[#00f0ff]',
    bgColor: 'bg-[#00f0ff]/10',
  },
  {
    id: 'claude',
    name: 'Claude Code',
    role: 'Lógica Superior',
    description: 'Invocación asíncrona vía OpenRouter para refactorización de precisión y razonamiento lógico complejo.',
    Icon: Bot,
    ringColor: 'border-orange-500/40',
    glowColor: 'rgba(249,115,22,0.15)',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT Codex',
    role: 'Generación',
    description: 'Generación de scripts y conexión con integraciones preexistentes del ecosistema OpenAI vía API compartida.',
    Icon: MessageSquareCode,
    ringColor: 'border-green-500/40',
    glowColor: 'rgba(34,197,94,0.15)',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    id: 'manus',
    name: 'Manus AI',
    role: 'Infraestructura Autónoma',
    description: 'Planifica, recopila y despliega infraestructuras completas de forma autónoma. Integración via endpoints RESTful y Webhooks v2.',
    Icon: Zap,
    ringColor: 'border-red-500/40',
    glowColor: 'rgba(239,68,68,0.15)',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
]

export default function MCP() {
  return (
    <section id="mcp" aria-labelledby="mcp-title">
      <h2 id="mcp-title" className="text-3xl font-bold mb-4 flex items-center gap-3">
        <Cable className="text-white" aria-hidden="true" />
        Interoperabilidad Multi-Modelo (MCP)
      </h2>
      <p className="text-slate-400 mb-8 max-w-2xl">
        El <strong className="text-white">Model Context Protocol</strong> actúa como capa
        de abstracción universal — el "USB-C para la IA" — eliminando la explosión
        combinatoria N×M de integraciones punto a punto.
      </p>

      {/* MCP Architecture diagram */}
      <div className="liquid-glass rounded-3xl p-6 mb-8 hidden md:flex items-center justify-center gap-4 flex-wrap" aria-label="Diagrama de arquitectura MCP">
        <div className="text-center">
          <div className="liquid-glass rounded-2xl px-5 py-3 font-mono text-xs text-[#00f0ff] border border-[#00f0ff]/30">MCP Host (Cliente Web)</div>
        </div>
        <ArrowRight className="text-white/30 w-5 h-5" aria-hidden="true" />
        <div className="text-center">
          <div className="liquid-glass rounded-2xl px-5 py-3 font-mono text-xs text-[#8a2be2] border border-[#8a2be2]/30">MCP Client (Router JSON-RPC 2.0)</div>
        </div>
        <ArrowRight className="text-white/30 w-5 h-5" aria-hidden="true" />
        <div className="flex gap-2 flex-wrap justify-center">
          {['Gemini MCP', 'Claude MCP', 'OpenAI MCP', 'Workspace MCP'].map(s => (
            <div key={s} className="liquid-glass rounded-xl px-3 py-2 font-mono text-xs text-slate-300 border border-white/10">{s}</div>
          ))}
        </div>
      </div>

      {/* Model cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {models.map(({ id, name, role, description, Icon, ringColor, glowColor, textColor, bgColor }) => (
          <article
            key={id}
            className={`liquid-glass liquid-glass-card rounded-2xl p-6 flex flex-col items-center text-center gap-4 border ${ringColor}`}
            style={{ '--hover-glow': glowColor } as React.CSSProperties}
            aria-labelledby={`model-${id}-title`}
          >
            <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center border ${ringColor}`}>
              <Icon className={`w-7 h-7 ${textColor}`} aria-hidden="true" />
            </div>
            <div>
              <h3 id={`model-${id}-title`} className={`font-bold text-base ${textColor}`}>{name}</h3>
              <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">{role}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
