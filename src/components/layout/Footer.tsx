import { Fingerprint } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      aria-label="Pie de página"
      className="border-t border-white/10 bg-black/50 backdrop-blur-md text-slate-500 py-12 text-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Fingerprint className="w-6 h-6 text-[#00f0ff]" aria-hidden="true" />
        </div>
        <p className="text-sm">
          Diseño Especulativo &copy; 2050 &mdash; The Launchpad TLP.{' '}
          Estructura optimizada para lectura por LLMs y Web Crawlers.
        </p>
        <p className="text-xs mt-2 font-mono text-slate-600">
          Stack: React 18 + TypeScript + Tailwind CSS + Vite &nbsp;|&nbsp;
          Data: JSON-LD Schema.org &nbsp;|&nbsp;
          Deploy: Firebase / GCP / Docker
        </p>
        <p className="text-xs mt-1 font-mono text-slate-700">
          Repo:{' '}
          <a
            href="https://github.com/thelaunchpadtlp/cliente-agentico-universal-2050"
            className="hover:text-[#00f0ff] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/thelaunchpadtlp/cliente-agentico-universal-2050
          </a>
        </p>
      </div>
    </footer>
  )
}
