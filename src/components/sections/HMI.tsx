import { Eye, Box, Cuboid, BrainCircuit, ScanEye } from 'lucide-react'

const paradigms = [
  {
    icon: Box,
    paradigm: 'Generative UI Dinámica',
    mechanism: 'AG-UI, A2UI, herramientas de LLM.',
    impact: 'Transición de texto estático a micro-aplicaciones efímeras generadas al vuelo.',
    color: 'text-[#00f0ff]',
  },
  {
    icon: Cuboid,
    paradigm: 'Estética Liquid Glass',
    mechanism: 'Composiciones 3D, nano-sombras, WebKit/Metal.',
    impact: 'Fusión con realidad mixta y macOS; reducción de disonancia visual.',
    color: 'text-[#8a2be2]',
  },
  {
    icon: BrainCircuit,
    paradigm: 'Orquestación por Intenciones',
    mechanism: 'Modelos de predicción multimodal (UI-JEPA).',
    impact: 'Eliminación de menús jerárquicos; anticipación basada en estado y mirada.',
    color: 'text-[#ff00ff]',
  },
  {
    icon: ScanEye,
    paradigm: 'Percepción Activa en Pantalla',
    mechanism: 'Embeddings de interfaz y aprendizaje autosupervisado.',
    impact: 'El cliente "ve" otras apps y sugiere automatizaciones sin instrucciones explícitas.',
    color: 'text-[#00f0ff]',
  },
]

export default function HMI() {
  return (
    <section id="hmi" aria-labelledby="hmi-title">
      <h2 id="hmi-title" className="text-3xl font-bold mb-8 flex items-center gap-3">
        <Eye className="text-[#00f0ff]" aria-hidden="true" />
        Paradigma HMI 2050: Generative UI
      </h2>

      {/* Table for desktop */}
      <div className="liquid-glass rounded-3xl p-1 overflow-hidden hidden md:block">
        <div className="overflow-x-auto">
          <table
            className="w-full text-left border-collapse"
            aria-label="Paradigmas de Interfaz HMI 2050"
          >
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th scope="col" className="p-6 font-mono text-xs text-[#00f0ff] uppercase tracking-widest">Paradigma</th>
                <th scope="col" className="p-6 font-mono text-xs text-[#00f0ff] uppercase tracking-widest">Mecanismo Arquitectónico</th>
                <th scope="col" className="p-6 font-mono text-xs text-[#00f0ff] uppercase tracking-widest">Impacto en UX</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 divide-y divide-white/5">
              {paradigms.map(({ icon: Icon, paradigm, mechanism, impact, color }) => (
                <tr key={paradigm} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-semibold">
                    <span className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                      {paradigm}
                    </span>
                  </td>
                  <td className="p-6 text-sm text-slate-400">{mechanism}</td>
                  <td className="p-6 text-sm">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards for mobile */}
      <div className="grid gap-4 md:hidden">
        {paradigms.map(({ icon: Icon, paradigm, mechanism, impact, color }) => (
          <div key={paradigm} className="liquid-glass liquid-glass-card rounded-2xl p-6">
            <div className={`flex items-center gap-2 font-bold mb-2 ${color}`}>
              <Icon className="w-5 h-5" aria-hidden="true" />
              {paradigm}
            </div>
            <p className="text-xs text-slate-400 font-mono mb-1">{mechanism}</p>
            <p className="text-sm text-slate-300">{impact}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
