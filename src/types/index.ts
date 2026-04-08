// ============================================================
// Cliente Agéntico Universal 2050 — TypeScript Type Definitions
// ============================================================

export interface NavItem {
  label: string
  href: string
  color: 'blue' | 'purple' | 'pink'
}

export interface FeatureCard {
  id: string
  title: string
  description: string
  icon: string
  accentColor: string
}

export interface ModelCard {
  id: string
  name: string
  role: string
  description: string
  accentColor: string
  iconName: string
}

export interface HMIParadigm {
  paradigm: string
  mechanism: string
  impact: string
  icon: string
}

export interface CheckpointItem {
  title: string
  description: string
  icon: string
  color: string
}

export interface OSIntegration {
  icon: string
  title: string
  description: string
  color: string
}

export interface VPNFeature {
  text: string
}

export interface ApiMockResponse<T> {
  data: T
  status: 'ok' | 'error'
  timestamp: string
}
