import { Database, History, Save, Workflow } from 'lucide-react'

export default function LLMOS() {
  return (
    <section id="llm-os" aria-labelledby="llmos-title">
      <div className="liquid-glass rounded-3xl p-8 relative overflow-hidden">
        {/* Background icon */}
        <div className="absolute top-0 right-0 p-8 opacity-5" aria-hidden="true">
          <Workflow className="w-64 h-64" />
        </div>

        <h2
          id="llmos-title"
          className="text-3xl font-bold mb-6 flex items-center gap-3 relative z-10"
        >
          <Database className="text-[#ff00ff]" aria-hidden="true" />
          LLM-OS: Grafo Acíclico y Time-Travel
        </h2>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Left: description + code snippet */}
          <div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Implementación de <strong>LangGraph</strong> acoplado a clústeres{' '}
              <strong>ScyllaDB</strong>. Una conversación no es texto lineal; es un{' '}
              <em>Grafo Acíclico Dirigido (DAG)</em> de transiciones de estado. Cada
              nodo representa un checkpoint serializable con latencia P99 &lt; 5 ms.
            </p>
            <div
              className="bg-black/60 rounded-xl p-5 font-mono text-xs text-[#8a2be2] border border-white/5 shadow-inner"
              role="code"
              aria-label="Ejemplo de consulta LangGraph checkpoint"
            >
              <span className="text-slate-500">-- LangGraph Checkpoint Query</span>
              <br />
              SELECT thread_id, checkpoint_id,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;parent_checkpoint_id, metadata
              <br />
              FROM langgraph.checkpoints
              <br />
              WHERE task = <span className="text-green-400">'clone_agent'</span>;
            </div>
          </div>

          {/* Right: feature items */}
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                <History className="text-[#00f0ff] w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Viaje en el Tiempo</h4>
                <p className="text-sm text-slate-400">
                  Clonación de contexto desde cualquier{' '}
                  <code className="text-[#00f0ff] font-mono">checkpoint_id</code> para
                  bifurcar tareas y explorar escenarios "what-if" sin alterar el historial
                  original.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                <Save className="text-[#ff00ff] w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Checkpointing Híbrido</h4>
                <p className="text-sm text-slate-400">
                  Puntos de control ligeros (&lt;350 KB) en ScyllaDB/RAM. Cargas masivas
                  (contextos de repositorios) asíncronas en S3 / iCloud Drive con puntero
                  de referencia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10 shrink-0">
                <Workflow className="text-[#8a2be2] w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">DAG de Estado</h4>
                <p className="text-sm text-slate-400">
                  Cada tarea, mensaje o iteración de código se evalúa como un nodo en el
                  grafo. El sistema soporta ejecución paralela de ramas independientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
