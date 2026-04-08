import { useState } from 'react'
import GodAppNav from './GodAppNav'
import TabMission from './tabs/TabMission'
import TabOrg from './tabs/TabOrg'
import TabPipeline from './tabs/TabPipeline'
import TabWorkflow from './tabs/TabWorkflow'
import TabQA from './tabs/TabQA'
import TabAccess from './tabs/TabAccess'
import TabPreview from './tabs/TabPreview'
import TabChangelog from './tabs/TabChangelog'
import TabSync from './tabs/TabSync'

export type GodTab = 'mission' | 'org' | 'pipeline' | 'workflow' | 'qa' | 'access' | 'preview' | 'changelog' | 'sync'

const TAB_COMPONENTS: Record<GodTab, React.ComponentType> = {
  mission:   TabMission,
  org:       TabOrg,
  pipeline:  TabPipeline,
  workflow:  TabWorkflow,
  qa:        TabQA,
  access:    TabAccess,
  preview:   TabPreview,
  changelog: TabChangelog,
  sync:      TabSync,
}

export default function GodApp() {
  const [activeTab, setActiveTab] = useState<GodTab>('mission')
  const ActiveComponent = TAB_COMPONENTS[activeTab]

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-mono">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00f0ff]/20 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[#00f0ff] text-xs font-bold tracking-widest uppercase">⬡ GodApp</span>
          <span className="text-slate-600 text-xs">|</span>
          <span className="text-slate-400 text-xs">geminispecwebapp.thelaunchpadtlp.education/godapp</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          <span className="text-xs text-green-400">LIVE</span>
          <span className="text-slate-600 mx-2">|</span>
          <span className="text-xs text-slate-500">v1.2.0 · branch: main</span>
        </div>
      </div>

      <div className="flex pt-14">
        {/* Sidebar nav */}
        <GodAppNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content */}
        <main className="flex-1 ml-56 p-8 min-h-screen">
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}
