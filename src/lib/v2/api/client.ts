/**
 * v2.0 — API Client
 * ─────────────────────────────────────────────────────────────────────────────
 * Centralized HTTP client for all backend API calls.
 * In v1.x, all data is static/mock. In v2.0, connect to your backend.
 *
 * Backend options (in order of complexity):
 *   A) Firebase Cloud Functions (serverless, recommended for GCP)
 *   B) Google Cloud Run (containerized Express/Fastify)
 *   C) Supabase Edge Functions (if migrating away from GCP)
 *
 * Setup (v2.0):
 *   Add to .env.local: VITE_API_BASE_URL=https://your-backend-url.com/api
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api'

// ─── Generic fetch wrapper ───────────────────────────────────────────────────

async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API Error ${response.status}: ${response.statusText}`)
  }

  return response.json()
}

// ─── v2.0 Endpoints (stubs) ──────────────────────────────────────────────────

export interface ContactFormData {
  name: string
  email: string
  message: string
  type: 'demo' | 'partnership' | 'general'
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; id: string }> {
  // TODO v2.0: POST /api/contact
  console.log('[API stub] Contact form:', data)
  return { success: true, id: `mock-${Date.now()}` }
}

export interface NewsletterData {
  email: string
  interests: string[]
}

export async function subscribeNewsletter(data: NewsletterData): Promise<{ success: boolean }> {
  // TODO v2.0: POST /api/newsletter
  console.log('[API stub] Newsletter:', data)
  return { success: true }
}

export interface DemoRequestData {
  name: string
  organization: string
  email: string
  useCase: string
}

export async function requestDemo(data: DemoRequestData): Promise<{ success: boolean; schedulingUrl: string }> {
  // TODO v2.0: POST /api/demo-request
  console.log('[API stub] Demo request:', data)
  return {
    success: true,
    schedulingUrl: 'https://calendly.com/thelaunchpadtlp/demo',
  }
}

// ─── Analytics (v2.0) ────────────────────────────────────────────────────────

export async function trackEvent(event: string, properties: Record<string, unknown> = {}): Promise<void> {
  // TODO v2.0: Integrate with Google Analytics 4 or Mixpanel
  console.log('[Analytics stub]', event, properties)
}

export { apiFetch }
