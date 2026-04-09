/**
 * v2.0 — Gemini AI Connector
 * ─────────────────────────────────────────────────────────────────────────────
 * This module provides the integration layer for Google Gemini API.
 * In v1.x it is a stub. In v2.0, replace VITE_GEMINI_API_KEY in .env.local
 * and uncomment the actual API calls.
 *
 * Setup:
 *   1. Get API key: https://aistudio.google.com/app/apikey
 *   2. Add to .env.local: VITE_GEMINI_API_KEY=your-key-here
 *   3. Install SDK: npm install @google/generative-ai
 *   4. Uncomment the implementation below
 *
 * Usage (v2.0):
 *   import { askGemini } from '@/lib/v2/ai/gemini'
 *   const response = await askGemini('Explain the MCP protocol in 2 sentences')
 */

export interface GeminiMessage {
  role: 'user' | 'model'
  content: string
}

export interface GeminiConfig {
  model: 'gemini-2.0-flash' | 'gemini-1.5-pro' | 'gemini-1.5-flash'
  temperature?: number
  maxOutputTokens?: number
  systemInstruction?: string
}

const DEFAULT_CONFIG: GeminiConfig = {
  model: 'gemini-2.0-flash',
  temperature: 0.7,
  maxOutputTokens: 2048,
  systemInstruction: `You are the AI assistant of the "Cliente Agéntico Universal Framework 2050" web application.
You help users understand the architecture, LLM-OS concepts, MCP protocol, and the vision of agentic computing.
Be concise, technical, and inspiring. Respond in the same language as the user.`,
}

// ─── v1.x Stub (returns mock responses) ─────────────────────────────────────

export async function askGemini(
  prompt: string,
  _history: GeminiMessage[] = [],
  config: Partial<GeminiConfig> = {}
): Promise<string> {
  const _config = { ...DEFAULT_CONFIG, ...config }
  console.log('[Gemini v2.0 stub] Model:', _config.model, '| Prompt:', prompt.slice(0, 50))

  // TODO v2.0: Replace with actual Gemini API call
  // const { GoogleGenerativeAI } = await import('@google/generative-ai')
  // const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
  // const model = genAI.getGenerativeModel({ model: _config.model, systemInstruction: _config.systemInstruction })
  // const chat = model.startChat({ history: history.map(m => ({ role: m.role, parts: [{ text: m.content }] })) })
  // const result = await chat.sendMessage(prompt)
  // return result.response.text()

  return `[Gemini AI — v2.0 preview] This feature will be active in version 2.0. 
The AI assistant will be able to answer questions about the Cliente Agéntico Universal Framework, 
explain the LLM-OS architecture, and guide developers through the codebase.`
}

// ─── v2.0 Multimodal (image analysis) ───────────────────────────────────────

export async function analyzeImage(
  _imageBase64: string,
  _prompt: string = 'Describe this image in the context of the AgenticOS 2050 project'
): Promise<string> {
  console.log('[Gemini Vision v2.0 stub] Analyzing image...')
  // TODO v2.0: Implement with gemini-1.5-pro vision capabilities
  return '[Gemini Vision — v2.0 preview] Image analysis will be available in version 2.0.'
}

export { DEFAULT_CONFIG as geminiDefaultConfig }
