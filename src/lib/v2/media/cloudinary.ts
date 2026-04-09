/**
 * v2.0 — Cloudinary Media Connector
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles all media assets: images, videos, audio, and transformations.
 * In v1.x this is a stub. In v2.0, configure your Cloudinary account.
 *
 * Setup:
 *   1. Create account: https://cloudinary.com
 *   2. Add to .env.local:
 *      VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
 *      VITE_CLOUDINARY_API_KEY=your-api-key
 *      VITE_CLOUDINARY_UPLOAD_PRESET=geminispecwebapp
 *   3. Install SDK: npm install @cloudinary/react @cloudinary/url-gen
 *
 * Usage (v2.0):
 *   import { getImageUrl, getVideoUrl } from '@/lib/v2/media/cloudinary'
 *   const url = getImageUrl('hero-illustration', { width: 1200, quality: 'auto' })
 */

export interface CloudinaryTransform {
  width?: number
  height?: number
  quality?: 'auto' | 'auto:best' | 'auto:eco' | number
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
  crop?: 'fill' | 'fit' | 'scale' | 'thumb' | 'pad'
  gravity?: 'auto' | 'face' | 'center'
  effect?: string
}

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? 'demo'
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`

// ─── Image URLs ──────────────────────────────────────────────────────────────

export function getImageUrl(publicId: string, transform: CloudinaryTransform = {}): string {
  const parts: string[] = []
  if (transform.width) parts.push(`w_${transform.width}`)
  if (transform.height) parts.push(`h_${transform.height}`)
  if (transform.quality) parts.push(`q_${transform.quality}`)
  if (transform.format) parts.push(`f_${transform.format}`)
  if (transform.crop) parts.push(`c_${transform.crop}`)
  if (transform.gravity) parts.push(`g_${transform.gravity}`)
  if (transform.effect) parts.push(`e_${transform.effect}`)

  const transformStr = parts.length > 0 ? parts.join(',') + '/' : ''
  return `${BASE_URL}/image/upload/${transformStr}${publicId}`
}

// ─── Video URLs ──────────────────────────────────────────────────────────────

export function getVideoUrl(publicId: string, transform: CloudinaryTransform = {}): string {
  const parts: string[] = []
  if (transform.width) parts.push(`w_${transform.width}`)
  if (transform.quality) parts.push(`q_${transform.quality ?? 'auto'}`)
  if (transform.format) parts.push(`f_${transform.format ?? 'auto'}`)

  const transformStr = parts.length > 0 ? parts.join(',') + '/' : ''
  return `${BASE_URL}/video/upload/${transformStr}${publicId}`
}

// ─── Upload (client-side, unsigned) ─────────────────────────────────────────

export async function uploadMedia(file: File, folder = 'geminispecwebapp'): Promise<string> {
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ?? 'geminispecwebapp'
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', uploadPreset)
  formData.append('folder', folder)

  // TODO v2.0: Uncomment when Cloudinary is configured
  // const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, {
  //   method: 'POST',
  //   body: formData,
  // })
  // const data = await response.json()
  // return data.secure_url

  console.log('[Cloudinary v2.0 stub] Upload:', file.name)
  return URL.createObjectURL(file) // Fallback to local URL in v1.x
}

// ─── Preset asset catalog (will be populated in v2.0) ───────────────────────

export const MEDIA_ASSETS = {
  // Hero section
  heroIllustration: 'geminispecwebapp/hero-illustration',
  heroVideo: 'geminispecwebapp/hero-background-loop',

  // Architecture diagrams
  architectureDiagram: 'geminispecwebapp/architecture-diagram',
  llmOsDiagram: 'geminispecwebapp/llm-os-diagram',
  mcpDiagram: 'geminispecwebapp/mcp-protocol-diagram',

  // Team
  teamAvatarManus: 'geminispecwebapp/team/manus-avatar',
  teamAvatarPiqui: 'geminispecwebapp/team/piqui-avatar',
} as const
