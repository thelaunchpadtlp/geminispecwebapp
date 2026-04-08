/**
 * api-mock.ts
 * ─────────────────────────────────────────────────────────────
 * Mock API layer — replace these functions with real calls to:
 *   • Google Cloud Functions  →  https://cloudfunctions.googleapis.com
 *   • Firebase Realtime DB    →  https://<project>.firebaseio.com
 *   • Gemini API              →  https://generativelanguage.googleapis.com
 *   • LangGraph / LangSmith   →  https://api.smith.langchain.com
 * ─────────────────────────────────────────────────────────────
 */

import type { ApiMockResponse, ModelCard, HMIParadigm } from '../types'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function fetchModels(): Promise<ApiMockResponse<ModelCard[]>> {
  await delay(300)
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    data: [
      {
        id: 'gemini',
        name: 'Gemini & Coding Assistant',
        role: 'Motor Principal',
        description: 'Motor heurístico principal. Razonamiento rápido e integración profunda con Google Workspace mediante MCP Servers dedicados.',
        accentColor: 'blue',
        iconName: 'sparkles',
      },
      {
        id: 'claude',
        name: 'Claude Code',
        role: 'Lógica Superior',
        description: 'Invocación asíncrona para tareas de refactorización de precisión y razonamiento lógico superior.',
        accentColor: 'orange',
        iconName: 'bot',
      },
      {
        id: 'chatgpt',
        name: 'ChatGPT Codex',
        role: 'Generación',
        description: 'Generación de scripts y conexión con integraciones preexistentes del ecosistema OpenAI.',
        accentColor: 'green',
        iconName: 'message-square-code',
      },
      {
        id: 'manus',
        name: 'Manus AI',
        role: 'Infraestructura Autónoma',
        description: 'Planifica, recopila información y despliega infraestructuras completas de manera autónoma.',
        accentColor: 'red',
        iconName: 'zap',
      },
    ],
  }
}

export async function fetchHMIParadigms(): Promise<ApiMockResponse<HMIParadigm[]>> {
  await delay(200)
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    data: [
      {
        paradigm: 'Generative UI Dinámica',
        mechanism: 'AG-UI, A2UI, herramientas de LLM.',
        impact: 'Transición de texto estático a micro-aplicaciones efímeras generadas al vuelo.',
        icon: 'box',
      },
      {
        paradigm: 'Estética Liquid Glass',
        mechanism: 'Composiciones 3D, nano-sombras, WebKit/Metal.',
        impact: 'Fusión con realidad mixta y macOS; reducción de disonancia visual.',
        icon: 'cuboid',
      },
      {
        paradigm: 'Orquestación por Intenciones',
        mechanism: 'Modelos de predicción multimodal (UI-JEPA).',
        impact: 'Eliminación de menús jerárquicos; anticipación basada en estado y mirada.',
        icon: 'brain-circuit',
      },
      {
        paradigm: 'Percepción Activa en Pantalla',
        mechanism: 'Embeddings de interfaz y aprendizaje autosupervisado.',
        impact: 'El cliente "ve" otras apps y sugiere automatizaciones sin instrucciones explícitas.',
        icon: 'scan-eye',
      },
    ],
  }
}
