import { useState, useRef, useEffect } from 'react'
import { useAuth, DEVELOPERS, type Developer, type PersonaName } from '../../context/AuthContext'
import { X, LogIn, Eye, EyeOff, Zap } from 'lucide-react'

interface Props {
  onClose: () => void
}

export default function LoginModal({ onClose }: Props) {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [needsPersona, setNeedsPersona] = useState(false)
  const [pendingDev, setPendingDev] = useState<Developer | null>(null)
  const [persona, setPersona] = useState<PersonaName | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const result = login(username, password, persona ?? undefined)
    if (result.success) {
      onClose()
    } else if (result.needsPersona && result.developer) {
      setNeedsPersona(true)
      setPendingDev(result.developer)
    } else {
      setError('Usuario o contraseña incorrectos.')
    }
  }

  const handlePersonaSelect = (p: PersonaName) => {
    setPersona(p)
    const result = login(username, password, p)
    if (result.success) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-[#00f0ff]/30 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0,240,255,0.06) 0%, rgba(138,43,226,0.06) 100%)',
          boxShadow: '0 0 60px rgba(0,240,255,0.15), 0 0 120px rgba(138,43,226,0.08)',
        }}
      >
        {/* Animated top border */}
        <div className="h-px w-full" style={{
          background: 'linear-gradient(90deg, transparent, #00f0ff, #8a2be2, transparent)',
        }} />

        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#00f0ff] text-lg">⬡</span>
              <span className="text-xs text-[#00f0ff] font-bold tracking-widest uppercase">GodApp Access</span>
            </div>
            <h2 className="text-white text-xl font-bold">Developer Portal</h2>
            <p className="text-slate-400 text-xs mt-1">Acceso exclusivo para el equipo de desarrollo</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!needsPersona ? (
          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
            {/* Username */}
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Usuario</label>
              <input
                ref={inputRef}
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="tu-usuario"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00f0ff]/50 focus:bg-white/8 transition-all"
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00f0ff]/50 transition-all"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #00f0ff22, #8a2be222)',
                border: '1px solid rgba(0,240,255,0.3)',
                color: '#00f0ff',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #00f0ff33, #8a2be233)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #00f0ff22, #8a2be222)')}
            >
              <LogIn className="w-4 h-4" />
              Acceder a GodApp
            </button>

            {/* Developer avatars hint */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex -space-x-1">
                {DEVELOPERS.slice(0, 5).map(d => (
                  <div
                    key={d.username}
                    className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-xs"
                    style={{ background: `${d.color}22`, borderColor: d.color + '44' }}
                    title={d.displayName}
                  >
                    {d.avatar}
                  </div>
                ))}
              </div>
              <span className="text-slate-600 text-xs">{DEVELOPERS.length} desarrolladores activos</span>
            </div>
          </form>
        ) : (
          /* Persona selector for shared accounts */
          <div className="px-8 pb-8">
            <div className="text-center mb-6">
              <div className="text-3xl mb-2">{pendingDev?.avatar}</div>
              <p className="text-white font-bold">Cuenta compartida</p>
              <p className="text-slate-400 text-xs mt-1">¿Quién accede ahora?</p>
            </div>
            <div className="space-y-3">
              {pendingDev?.personas?.map(p => (
                <button
                  key={p}
                  onClick={() => handlePersonaSelect(p)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 hover:border-[#00f0ff]/40 hover:bg-white/5 transition-all text-left group"
                >
                  <Zap className="w-4 h-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-[#00f0ff] transition-colors">{p}</div>
                    <div className="text-slate-500 text-xs">
                      {p === 'Piqui' ? 'Owner humano · joaquin.munoz@thelaunchpadtlp.education' :
                       p === 'Manus Team' ? 'Agente IA principal · manus@thelaunchpadtlp.com' :
                       'Agente IA externo · manus@thelaunchpadtlp.com'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => { setNeedsPersona(false); setPendingDev(null) }}
              className="w-full mt-4 text-slate-500 text-xs hover:text-slate-300 transition-colors"
            >
              ← Volver
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
