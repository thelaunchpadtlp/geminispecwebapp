import { Apple, Cloud, FolderSync, ShieldCheck, Globe, Layers } from 'lucide-react'

const osIntegrations = [
  {
    Icon: Apple,
    title: 'App Intents & Siri',
    description: 'Indexación semántica con Spotlight. Siri puede pasar payloads visuales directamente al cliente nativo.',
    color: 'text-white',
  },
  {
    Icon: Cloud,
    title: 'iCloud & CloudKit',
    description: 'Sincronización bidireccional profunda. Almacenamiento persistente en el navegador para bases de datos vectoriales via OPFS.',
    color: 'text-blue-400',
  },
  {
    Icon: FolderSync,
    title: 'Google Workspace APIs',
    description: 'Integración con Google Docs, Drive y Sheets mediante APIs OAuth2. Mismo ecosistema de facturación GCP/Firebase.',
    color: 'text-yellow-400',
  },
  {
    Icon: Layers,
    title: 'OPFS (Origin Private File System)',
    description: 'Almacenamiento de alta performance directamente en el navegador. Archivos generados interactúan con editores locales sin recargas.',
    color: 'text-green-400',
  },
]

const vpnFeatures = [
  'Compilación de WireGuard a WebAssembly (WASM).',
  'Pila TCP/IP de Espacio de Usuario emulada en el navegador.',
  'Túneles ofuscados sobre WebSockets y protocolo DERP.',
  'Enrutamiento Granular (Split Tunneling por Agente/Modelo).',
  'Criptografía de grado militar: ChaCha20-Poly1305 + Curve25519.',
  'Sin instalación nativa: corre 100% en el navegador.',
]

export default function VPN() {
  return (
    <section id="vpn" aria-labelledby="vpn-title" className="space-y-8">
      <h2 id="vpn-title" className="text-3xl font-bold flex items-center gap-3">
        <Globe className="text-[#00f0ff]" aria-hidden="true" />
        Sinergia Operativa & Infraestructura Segura
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Apple OS & Google Workspace */}
        <article
          className="liquid-glass rounded-3xl p-8"
          style={{ borderTop: '4px solid #00f0ff' }}
          aria-labelledby="os-card-title"
        >
          <h3 id="os-card-title" className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Apple className="w-6 h-6" aria-hidden="true" />
            Apple OS &amp; Google Workspace
          </h3>
          <ul className="space-y-5 text-slate-300" role="list">
            {osIntegrations.map(({ Icon, title, description, color }) => (
              <li key={title} className="flex gap-3" role="listitem">
                <Icon className={`${color} shrink-0 mt-1 w-5 h-5`} aria-hidden="true" />
                <div>
                  <strong className="text-white">{title}:</strong>{' '}
                  <span className="text-slate-400">{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* WASM VPN */}
        <article
          className="liquid-glass rounded-3xl p-8 relative overflow-hidden"
          style={{ borderTop: '4px solid #8a2be2' }}
          aria-labelledby="vpn-card-title"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 text-[#8a2be2]" aria-hidden="true">
            <ShieldCheck className="w-48 h-48" />
          </div>
          <h3 id="vpn-card-title" className="text-2xl font-bold mb-4 relative z-10 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#8a2be2]" aria-hidden="true" />
            VPN WASM WireGuard
          </h3>
          <p className="text-slate-300 mb-5 relative z-10 leading-relaxed">
            Evasión de censura y bloqueos corporativos mediante criptografía de grado
            militar ejecutada íntegramente en el navegador. Sin instalación nativa
            requerida.
          </p>
          <ul className="space-y-2 text-sm text-slate-400 font-mono relative z-10" role="list">
            {vpnFeatures.map(feat => (
              <li key={feat} className="flex items-start gap-2" role="listitem">
                <span className="text-[#8a2be2] shrink-0">&gt;</span>
                {feat}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
