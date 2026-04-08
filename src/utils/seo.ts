/**
 * seo.ts — Dynamic metadata and JSON-LD helpers
 * Replace static JSON-LD in index.html with dynamic injection here
 * when migrating to Next.js App Router (generateMetadata).
 */

export const APP_META = {
  title: 'Cliente Agéntico Universal Framework 2050',
  description:
    'Hipervisor agéntico con estética Liquid Glass. Orquestación cognitiva multi-modelo via MCP. Portabilidad total GCP/Firebase.',
  url: 'https://thelaunchpadtlp.github.io/cliente-agentico-universal-2050/',
  author: 'The Launchpad TLP',
  keywords: [
    'LLM-OS', 'MCP', 'Liquid Glass', 'WireGuard WASM',
    'LangGraph', 'Firebase', 'GCP', 'Gemini', 'Claude', 'Manus AI',
    'Spatial Computing', 'Generative UI',
  ],
} as const

export function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP_META.title,
    description: APP_META.description,
    url: APP_META.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'macOS, iOS, iPadOS, Web',
    author: { '@type': 'Organization', name: APP_META.author },
  }
}
