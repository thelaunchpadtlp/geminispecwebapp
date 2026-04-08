import { type ReactNode } from 'react'

export function GodSection({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-lg font-bold text-[#00f0ff] uppercase tracking-widest">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

export function GodCard({ title, children, accent }: { title: string; children: ReactNode; accent?: string }) {
  return (
    <div className={`bg-white/5 border rounded-xl p-5 ${accent ? `border-[${accent}]/30` : 'border-white/10'}`}>
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{title}</h3>
      {children}
    </div>
  )
}

export function GodTable({ headers, rows }: { headers: string[]; rows: (string | ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            {headers.map(h => (
              <th key={h} className="text-left py-2 px-3 text-slate-500 uppercase tracking-widest font-normal">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-white/5 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="py-2 px-3 text-slate-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const badgeColors = {
  blue:   'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/30',
  purple: 'bg-[#8a2be2]/10 text-[#8a2be2] border-[#8a2be2]/30',
  pink:   'bg-[#ff00ff]/10 text-[#ff00ff] border-[#ff00ff]/30',
  green:  'bg-green-500/10 text-green-400 border-green-500/30',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  red:    'bg-red-500/10 text-red-400 border-red-500/30',
  gray:   'bg-white/5 text-slate-400 border-white/10',
}

export function GodBadge({ children, color = 'gray' }: { children: ReactNode; color?: keyof typeof badgeColors }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-widest ${badgeColors[color]}`}>
      {children}
    </span>
  )
}

export function mono(text: string) {
  return <code className="bg-white/10 text-[#00f0ff] px-1.5 py-0.5 rounded text-[11px]">{text}</code>
}
