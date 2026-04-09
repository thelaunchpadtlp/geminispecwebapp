import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// ─── Developer Identity System ──────────────────────────────────────────────
// All developers (human and AI agents) share the same GitHub account.
// Each developer is identified by their username + persona in commits and GodApp.
// Format: [dev: username | persona: PersonaName]

export type PersonaName = 'Piqui' | 'Manus Team' | 'Manus Original'

export interface Developer {
  username: string
  password: string
  email: string
  displayName: string
  role: 'owner' | 'admin' | 'agent' | 'developer'
  type: 'human' | 'ai'
  color: string        // Accent color for UI identification
  avatar: string       // Emoji avatar
  commitTag: string    // Tag used in git commit messages
  shared?: boolean     // If true, will ask which persona is accessing
  personas?: PersonaName[]
  description: string
}

export const DEVELOPERS: Developer[] = [
  {
    username: 'manus',
    password: 'manusdev',
    email: 'manus@thelaunchpadtlp.com',
    displayName: 'Manus',
    role: 'owner',
    type: 'ai',
    color: '#00f0ff',
    avatar: '⬡',
    commitTag: 'manus',
    shared: true,
    personas: ['Piqui', 'Manus Team', 'Manus Original'],
    description: 'Cuenta compartida: Piqui (owner humano), Manus Team (agente principal) y Manus Original.',
  },
  {
    username: 'piqui',
    password: 'piquidev',
    email: 'joaquin.munoz@thelaunchpadtlp.education',
    displayName: 'Piqui',
    role: 'owner',
    type: 'human',
    color: '#a78bfa',
    avatar: '👤',
    commitTag: 'piqui',
    shared: true,
    personas: ['Piqui', 'Manus Team', 'Manus Original'],
    description: 'Cuenta compartida: Piqui (owner humano), Manus Team (agente principal) y Manus Original.',
  },
  {
    username: 'claude',
    password: 'claudedev',
    email: 'claude@thelaunchpadtlp.education',
    displayName: 'Claude',
    role: 'agent',
    type: 'ai',
    color: '#f97316',
    avatar: '🤖',
    commitTag: 'claude-ai',
    description: 'Agente IA Claude (Anthropic). Especialista en análisis, redacción técnica y arquitectura.',
  },
  {
    username: 'google',
    password: 'googledev',
    email: 'google@thelaunchpadtlp.education',
    displayName: 'Google AI',
    role: 'agent',
    type: 'ai',
    color: '#4285f4',
    avatar: '🔵',
    commitTag: 'google-ai',
    description: 'Agente IA Google (Gemini). Especialista en integración GCP, Firebase y Google Workspace.',
  },
  {
    username: 'perplexity',
    password: 'perplexitydev',
    email: 'perplexity@thelaunchpadtlp.education',
    displayName: 'Perplexity',
    role: 'agent',
    type: 'ai',
    color: '#22d3ee',
    avatar: '🔍',
    commitTag: 'perplexity-ai',
    description: 'Agente IA Perplexity. Especialista en investigación, búsqueda y síntesis de información.',
  },
  {
    username: 'openai',
    password: 'openaidev',
    email: 'openai@thelaunchpadtlp.education',
    displayName: 'OpenAI',
    role: 'agent',
    type: 'ai',
    color: '#10b981',
    avatar: '🟢',
    commitTag: 'openai-agent',
    description: 'Agente IA OpenAI (GPT-4/o1). Especialista en generación de código y razonamiento complejo.',
  },
  {
    username: 'lorna',
    password: 'lornadev',
    email: 'lorna.martinez@thelaunchpadtlp.education',
    displayName: 'Lorna',
    role: 'developer',
    type: 'human',
    color: '#ec4899',
    avatar: '👩',
    commitTag: 'lorna',
    description: 'Desarrolladora humana. The Launchpad TLP team.',
  },
  {
    username: 'anyssa',
    password: 'anyssadev',
    email: 'anyssa.salazar@thelaunchpadtlp.education',
    displayName: 'Anyssa',
    role: 'developer',
    type: 'human',
    color: '#f59e0b',
    avatar: '👩‍💻',
    commitTag: 'anyssa',
    description: 'Desarrolladora humana. The Launchpad TLP team.',
  },
]

// ─── Auth Context ────────────────────────────────────────────────────────────

export interface AuthSession {
  developer: Developer
  persona?: PersonaName
  loginTime: Date
  commitIdentity: string  // Used in git commit messages
}

interface AuthContextType {
  session: AuthSession | null
  login: (username: string, password: string, persona?: PersonaName) => { success: boolean; needsPersona?: boolean; developer?: Developer }
  logout: () => void
  isAuthenticated: boolean
  hasGodAppAccess: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

const SESSION_KEY = 'godapp_session'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(() => {
    try {
      const stored = sessionStorage.getItem(SESSION_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        return { ...parsed, loginTime: new Date(parsed.loginTime) }
      }
    } catch {}
    return null
  })

  useEffect(() => {
    if (session) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
    } else {
      sessionStorage.removeItem(SESSION_KEY)
    }
  }, [session])

  const login = (username: string, password: string, persona?: PersonaName) => {
    const dev = DEVELOPERS.find(
      d => d.username.toLowerCase() === username.toLowerCase() && d.password === password
    )
    if (!dev) return { success: false }

    // Shared account needs persona selection
    if (dev.shared && !persona) {
      return { success: false, needsPersona: true, developer: dev }
    }

    const commitIdentity = dev.shared && persona
      ? `${persona.toLowerCase().replace(' ', '-')} | tag: ${dev.commitTag}`
      : dev.commitTag

    const newSession: AuthSession = {
      developer: dev,
      persona: persona,
      loginTime: new Date(),
      commitIdentity,
    }
    setSession(newSession)
    return { success: true }
  }

  const logout = () => setSession(null)

  return (
    <AuthContext.Provider value={{
      session,
      login,
      logout,
      isAuthenticated: !!session,
      hasGodAppAccess: !!session,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
