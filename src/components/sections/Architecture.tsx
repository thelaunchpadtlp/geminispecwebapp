import { Network, Terminal, Layers } from 'lucide-react'

const capabilities = [
  'Evasión de limitaciones oficiales de modelos.',
  'Despliegue y clonación de agentes con memoria.',
  'Retención de historial de chat privado e ilimitado.',
  'Orquestación cognitiva client-side (sin backend propio).',
]

export default function Architecture() {
  return (
    <section id="arquitectura" aria-labelledby="arquitectura-title" className="relative">
      <h2
        id="arquitectura-title"
        className="text-3xl font-bold mb-8 flex items-center gap-3"
      >
        <Network className="text-[#8a2be2]" aria-hidden="true" />
        Visión Arquitectónica y Fundamentos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: text card */}
        <article
          className="liquid-glass liquid-glass-card rounded-3xl p-8"
          aria-labelledby="arch-card-title"
        >
          <h3 id="arch-card-title" className="text-xl font-semibold mb-4 text-[#00f0ff]">
            Evolución HMI → LLM-OS
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            La interacción humano-máquina ha superado los chatbots transaccionales.
            El sistema opera como un <strong>hipervisor agéntico</strong>, desplazando
            la orquestación cognitiva, la gestión del ciclo de vida de datos y el
            renderizado hacia la arquitectura del cliente (<em>Client-side architecture</em>).
          </p>
          <ul className="space-y-3 font-mono text-sm text-slate-400" role="list">
            {capabilities.map(cap => (
              <li key={cap} className="flex items-start gap-2" role="listitem">
                <Terminal className="w-4 h-4 text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                {cap}
              </li>
            ))}
          </ul>
        </article>

        {/* Right: visual */}
        <div
          className="relative flex items-center justify-center p-8 liquid-glass rounded-3xl overflow-hidden group"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#8a2be2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col items-center gap-6 animate-float">
            <Layers className="w-28 h-28 text-white/70 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00f0ff]">
              Client-Side Hypervisor
            </span>
            {/* Architecture layers */}
            <div className="flex flex-col gap-2 w-full max-w-xs">
              {['LLM Orchestration Layer', 'MCP Protocol Bridge', 'State DAG (LangGraph)', 'Liquid Glass UI'].map((layer, i) => (
                <div
                  key={layer}
                  className="liquid-glass rounded-lg px-4 py-2 text-xs font-mono text-center"
                  style={{ opacity: 1 - i * 0.15 }}
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
