import { Target, Users, GitBranch, Workflow, ShieldCheck, RefreshCw, KeyRound, Monitor, ScrollText, BookOpen } from 'lucide-react'
import type { GodTab } from './GodApp'

const TABS: { id: GodTab; label: string; icon: React.ComponentType<{ className?: string }>; accent?: string }[] = [
  { id: 'onboarding', label: 'Onboarding',      icon: BookOpen,     accent: '#00f0ff' },
  { id: 'mission',    label: 'Misión & Visión',  icon: Target },
  { id: 'org',        label: 'Organigrama',      icon: Users },
  { id: 'pipeline',   label: 'Pipeline',         icon: GitBranch },
  { id: 'workflow',   label: 'Workflow',         icon: Workflow },
  { id: 'qa',         label: 'QA & Testing',     icon: ShieldCheck },
  { id: 'sync',       label: 'Auto-Sync',        icon: RefreshCw },
  { id: 'access',     label: 'Accesos',          icon: KeyRound },
  { id: 'preview',    label: 'IDE Preview',      icon: Monitor },
  { id: 'changelog',  label: 'Changelog',        icon: ScrollText },
]

interface Props {
  activeTab: GodTab
  setActiveTab: (tab: GodTab) => void
}

export default function GodAppNav({ activeTab, setActiveTab }: Props) {
  return (
    <nav
      className="fixed left-0 top-11 bottom-0 w-52 flex flex-col py-3 overflow-y-auto"
      style={{
        background: 'rgba(3,7,18,0.8)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-label="GodApp Navigation"
    >
      {/* Section label */}
      <div className="px-4 pb-2 pt-1">
        <span className="text-slate-700 text-[10px] uppercase tracking-widest">Navegación</span>
      </div>

      {TABS.map(({ id, label, icon: Icon, accent }) => {
        const isActive = activeTab === id
        const color = accent ?? (isActive ? '#00f0ff' : undefined)
        return (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="relative flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-xs text-left transition-all duration-150 group"
            style={{
              background: isActive ? 'rgba(0,240,255,0.06)' : 'transparent',
              color: isActive ? (color ?? '#00f0ff') : 'rgb(148,163,184)',
            }}
            onMouseEnter={e => {
              if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
            onMouseLeave={e => {
              if (!isActive) e.currentTarget.style.background = 'transparent'
            }}
            aria-current={isActive ? 'page' : undefined}
          >
            {/* Active indicator */}
            {isActive && (
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                style={{ background: color ?? '#00f0ff' }}
              />
            )}
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="uppercase tracking-wider text-[10px] font-medium">{label}</span>
            {/* Onboarding badge */}
            {id === 'onboarding' && (
              <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded-full font-bold" style={{
                background: 'rgba(0,240,255,0.15)',
                color: '#00f0ff',
                border: '1px solid rgba(0,240,255,0.2)',
              }}>NEW</span>
            )}
          </button>
        )
      })}

      {/* Bottom: version */}
      <div className="mt-auto px-4 pb-4 pt-4 border-t border-white/5">
        <div className="text-slate-700 text-[10px] leading-relaxed">
          <div>geminispecwebapp</div>
          <div>v1.3.0 · main</div>
          <div className="mt-1 text-[#00f0ff]/40">thelaunchpadtlp</div>
        </div>
      </div>
    </nav>
  )
}
