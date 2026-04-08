import { Target, Users, GitBranch, Workflow, ShieldCheck, KeyRound, Monitor, ScrollText } from 'lucide-react'
import type { GodTab } from './GodApp'

const TABS: { id: GodTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'mission',   label: 'Misión & Visión',   icon: Target },
  { id: 'org',       label: 'Organigrama',        icon: Users },
  { id: 'pipeline',  label: 'Pipeline & Estado',  icon: GitBranch },
  { id: 'workflow',  label: 'Workflow & Forks',   icon: Workflow },
  { id: 'qa',        label: 'QA & Testing',       icon: ShieldCheck },
  { id: 'access',    label: 'Accesos & Claves',   icon: KeyRound },
  { id: 'preview',   label: 'IDE Preview',        icon: Monitor },
  { id: 'changelog', label: 'Changelog',          icon: ScrollText },
]

interface Props {
  activeTab: GodTab
  setActiveTab: (tab: GodTab) => void
}

export default function GodAppNav({ activeTab, setActiveTab }: Props) {
  return (
    <nav
      className="fixed left-0 top-14 bottom-0 w-56 bg-black/60 backdrop-blur-md border-r border-white/10 flex flex-col py-4 overflow-y-auto"
      aria-label="GodApp Navigation"
    >
      {TABS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`flex items-center gap-3 px-5 py-3 text-xs text-left transition-all duration-150 hover:bg-white/5 ${
            activeTab === id
              ? 'text-[#00f0ff] border-l-2 border-[#00f0ff] bg-[#00f0ff]/5'
              : 'text-slate-400 border-l-2 border-transparent'
          }`}
          aria-current={activeTab === id ? 'page' : undefined}
        >
          <Icon className="w-4 h-4 shrink-0" />
          <span className="uppercase tracking-wider">{label}</span>
        </button>
      ))}
    </nav>
  )
}
