import { Play, CheckCircle2, Aperture } from 'lucide-react'
import NeonButton from '../ui/NeonButton'

export default function Hero() {
  return (
    <header
      className="text-center space-y-8 relative py-24"
      aria-labelledby="hero-title"
    >
      {/* Spinning background icon */}
      <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-10 animate-spin-slow" aria-hidden="true">
        <Aperture className="w-[500px] h-[500px] text-[#00f0ff]" />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-xs font-mono text-[#00f0ff]">
        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
        Especificación Técnica v9.4 &mdash; Framework 2050
      </div>

      {/* Title */}
      <h1
        id="hero-title"
        className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
      >
        Cliente Agéntico
        <br />
        <span className="text-gradient">Universal Framework</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
        El hipervisor agéntico diseñado bajo la filosofía especulativa{' '}
        <strong className="text-white/70">Apple 2050</strong>. Orquestación cognitiva
        multi-modelo, evasión de restricciones y computación espacial.
      </p>

      {/* Stats row */}
      <div className="flex justify-center gap-8 pt-4 flex-wrap" role="list" aria-label="Estadísticas del framework">
        {[
          { value: '4+', label: 'Modelos LLM' },
          { value: 'MCP', label: 'Protocolo Universal' },
          { value: 'WASM', label: 'VPN WireGuard' },
          { value: 'GCP', label: 'Firebase Ready' },
        ].map(stat => (
          <div key={stat.label} role="listitem" className="text-center">
            <div className="text-2xl font-bold text-gradient">{stat.value}</div>
            <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center gap-4 pt-6 flex-wrap">
        <NeonButton variant="white" aria-label="Iniciar entorno de simulación">
          <Play className="w-4 h-4" aria-hidden="true" />
          Iniciar Entorno de Simulación
        </NeonButton>
        <NeonButton variant="blue" aria-label="Ver especificación técnica en GitHub">
          Ver en GitHub
        </NeonButton>
      </div>
    </header>
  )
}
