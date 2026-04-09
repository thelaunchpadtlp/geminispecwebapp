import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import LoginModal from './LoginModal'
import { Code2, LogOut, ChevronRight } from 'lucide-react'

export default function DevPortalButton() {
  const { session, logout, isAuthenticated } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()

  if (isAuthenticated && session) {
    return (
      <>
        <div className="flex items-center gap-2">
          {/* Identity badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              background: `${session.developer.color}11`,
              borderColor: `${session.developer.color}33`,
              color: session.developer.color,
            }}
            onClick={() => navigate('/godapp')}
            title="Ir a GodApp"
          >
            <span>{session.developer.avatar}</span>
            <span>{session.persona ?? session.developer.displayName}</span>
            <ChevronRight className="w-3 h-3" />
          </div>
          {/* GodApp button */}
          <button
            onClick={() => navigate('/godapp')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(138,43,226,0.15))',
              border: '1px solid rgba(0,240,255,0.3)',
              color: '#00f0ff',
            }}
          >
            <Code2 className="w-3 h-3" />
            GodApp
          </button>
          {/* Logout */}
          <button
            onClick={logout}
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-red-400 hover:border-red-400/30 transition-all"
            title="Cerrar sesión"
          >
            <LogOut className="w-3 h-3" />
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setShowLogin(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 group"
        style={{
          background: 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(138,43,226,0.08))',
          border: '1px solid rgba(0,240,255,0.2)',
          color: 'rgba(0,240,255,0.8)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(138,43,226,0.15))'
          e.currentTarget.style.borderColor = 'rgba(0,240,255,0.4)'
          e.currentTarget.style.color = '#00f0ff'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(138,43,226,0.08))'
          e.currentTarget.style.borderColor = 'rgba(0,240,255,0.2)'
          e.currentTarget.style.color = 'rgba(0,240,255,0.8)'
        }}
      >
        <Code2 className="w-3 h-3" />
        <span>Dev Portal</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
      </button>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  )
}
