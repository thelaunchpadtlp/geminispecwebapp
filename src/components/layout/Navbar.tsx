import { Cpu } from 'lucide-react'
import DevPortalButton from '../auth/DevPortalButton'

const navItems = [
  { label: 'Arquitectura', href: '#arquitectura', color: 'hover:text-[#00f0ff]' },
  { label: 'HMI 2050',     href: '#hmi',          color: 'hover:text-[#8a2be2]' },
  { label: 'MCP',          href: '#mcp',           color: 'hover:text-[#ff00ff]' },
  { label: 'OS & VPN',     href: '#vpn',           color: 'hover:text-[#00f0ff]' },
]

export default function Navbar() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed w-full z-50 top-0 liquid-glass border-b border-white/10 rounded-b-3xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3" aria-label="Inicio AgenticOS 2050">
          <Cpu className="text-[#00f0ff] w-7 h-7" aria-hidden="true" />
          <span className="font-bold tracking-widest uppercase text-sm hidden sm:block">
            AgenticOS <span className="text-white/40">2050</span>
          </span>
        </a>

        <ul className="flex gap-5 text-sm font-medium text-slate-300 hidden md:flex" role="menubar">
          {navItems.map(item => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                role="menuitem"
                className={`transition-colors duration-200 ${item.color}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dev Portal — always visible for all developers */}
        <DevPortalButton />
      </div>
    </nav>
  )
}
