import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import GodAppNav from './GodAppNav'
import TabMission from './tabs/TabMission'
import TabOrg from './tabs/TabOrg'
import TabPipeline from './tabs/TabPipeline'
import TabWorkflow from './tabs/TabWorkflow'
import TabQA from './tabs/TabQA'
import TabSync from './tabs/TabSync'
import TabAccess from './tabs/TabAccess'
import TabPreview from './tabs/TabPreview'
import TabChangelog from './tabs/TabChangelog'
import TabOnboarding from './tabs/TabOnboarding'
import LoginModal from '../auth/LoginModal'
import { LogOut, ArrowLeft, Shield } from 'lucide-react'

export type GodTab = 'mission' | 'org' | 'pipeline' | 'workflow' | 'qa' | 'sync' | 'access' | 'preview' | 'changelog' | 'onboarding'

const TAB_COMPONENTS: Record<GodTab, React.ComponentType> = {
  mission:    TabMission,
  org:        TabOrg,
  pipeline:   TabPipeline,
  workflow:   TabWorkflow,
  qa:         TabQA,
  sync:       TabSync,
  access:     TabAccess,
  preview:    TabPreview,
  changelog:  TabChangelog,
  onboarding: TabOnboarding,
}

function GodAppLocked({ onLoginSuccess: _onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4" style={{
      background: 'radial-gradient(ellipse at 50% 50%, rgba(0,240,255,0.04) 0%, #030712 70%)',
    }}>
      {/* Background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full top-10 left-10 opacity-10" style={{ background: 'radial-gradient(circle, #8a2be2, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full bottom-10 right-10 opacity-10" style={{ background: 'radial-gradient(circle, #00f0ff, transparent)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative text-center max-w-md w-full">
        {/* Animated ring */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-[#00f0ff]/20 animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 rounded-full border border-[#00f0ff]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-10 h-10 text-[#00f0ff]" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">GodApp</h1>
        <p className="text-[#00f0ff] text-xs font-mono tracking-widest uppercase mb-2">Centro de Comando</p>
        <p className="text-slate-500 text-sm mb-8">Acceso exclusivo para el equipo de desarrollo de<br /><span className="text-slate-400">Cliente Agéntico Universal 2050</span></p>

        <button
          onClick={() => setShowLogin(true)}
          className="px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(138,43,226,0.15))',
            border: '1px solid rgba(0,240,255,0.3)',
            color: '#00f0ff',
            boxShadow: '0 0 30px rgba(0,240,255,0.1)',
          }}
        >
          Iniciar sesión como desarrollador
        </button>

        <p className="text-slate-700 text-xs mt-6">geminispecwebapp · v1.3.0 · thelaunchpadtlp</p>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  )
}

export default function GodApp() {
  const { session, logout, isAuthenticated } = useAuth()
  const [activeTab, setActiveTab] = useState<GodTab>('mission')
  const navigate = useNavigate()

  if (!isAuthenticated) {
    return <GodAppLocked onLoginSuccess={() => {}} />
  }

  const ActiveComponent = TAB_COMPONENTS[activeTab]
  const dev = session!.developer
  const persona = session!.persona

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-mono">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full -top-40 -left-40 opacity-5" style={{ background: 'radial-gradient(circle, #00f0ff, transparent)', filter: 'blur(80px)' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full -bottom-40 -right-40 opacity-5" style={{ background: 'radial-gradient(circle, #8a2be2, transparent)', filter: 'blur(80px)' }} />
      </div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{
        background: 'rgba(3,7,18,0.9)',
        backdropFilter: 'blur(20px)',
      }}>
        <div className="flex items-center justify-between px-4 py-2.5">
          {/* Left: back + logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors text-xs"
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">webapp</span>
            </button>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-[#00f0ff]">⬡</span>
              <span className="text-[#00f0ff] text-xs font-bold tracking-widest uppercase">GodApp</span>
              <span className="text-slate-700 text-xs hidden sm:inline">· Centro de Comando</span>
            </div>
          </div>

          {/* Center: active tab name */}
          <div className="text-slate-500 text-xs uppercase tracking-widest hidden md:block">
            {activeTab}
          </div>

          {/* Right: session info + controls */}
          <div className="flex items-center gap-3">
            {/* Live indicator */}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs hidden sm:inline">LIVE</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            {/* Developer identity */}
            <div
              className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs"
              style={{
                background: `${dev.color}11`,
                border: `1px solid ${dev.color}33`,
                color: dev.color,
              }}
            >
              <span>{dev.avatar}</span>
              <span className="font-bold">{persona ?? dev.displayName}</span>
              <span className="text-xs opacity-60 hidden sm:inline">
                {dev.type === 'ai' ? '· AI' : '· Human'}
              </span>
            </div>
            {/* Version */}
            <span className="text-slate-600 text-xs hidden lg:inline">v1.3.0 · main</span>
            {/* Logout */}
            <button
              onClick={logout}
              className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-red-400 hover:border-red-400/30 transition-all"
              title="Cerrar sesión"
            >
              <LogOut className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex pt-11">
        {/* Sidebar nav */}
        <GodAppNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content */}
        <main className="flex-1 ml-52 p-6 min-h-screen">
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}
