import { GodSection, GodCard, GodTable, GodBadge } from '../GodUI'

export default function TabAccess() {
  return (
    <GodSection title="Accesos, Claves & Control de Permisos" subtitle="Gestión de credenciales y accesos del proyecto">

      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-xs text-red-300 mb-4">
        <strong className="text-red-400">⚠ SEGURIDAD:</strong> Nunca almacenes secrets reales en este archivo ni en el repositorio.
        Esta sección documenta QUÉ credenciales existen y DÓNDE están almacenadas de forma segura.
        Los valores reales van en variables de entorno (<code>.env</code> local, no commiteado) o en GitHub Secrets.
      </div>

      <GodCard title="Repositorio GitHub">
        <GodTable
          headers={['Recurso', 'URL / Handle', 'Acceso', 'Estado']}
          rows={[
            ['Repositorio', 'github.com/thelaunchpadtlp/geminispecwebapp', 'Owner: thelaunchpadtlp', <GodBadge color="green">Activo</GodBadge>],
            ['Visibilidad', 'Privado', '—', <GodBadge color="orange">Privado</GodBadge>],
            ['Branch protection main', 'Configurar en Settings → Branches', 'Owner', <GodBadge color="gray">Pendiente</GodBadge>],
            ['GitHub Actions', '.github/workflows/', 'Requiere scope "workflows"', <GodBadge color="gray">Pendiente</GodBadge>],
            ['Colaborador Admin', 'manus@thelaunchpadtlp.education', 'Invitar en Settings → Collaborators', <GodBadge color="gray">Pendiente</GodBadge>],
          ]}
        />
      </GodCard>

      <GodCard title="Variables de Entorno Requeridas">
        <p className="text-xs text-slate-500 mb-3">
          Crear archivo <code className="text-[#00f0ff]">.env</code> en la raíz del proyecto (NO commitear).
          Para CI/CD, agregar como <strong className="text-white">GitHub Secrets</strong> en Settings → Secrets and variables → Actions.
        </p>
        <GodTable
          headers={['Variable', 'Descripción', 'Dónde obtenerla', 'Requerida ahora']}
          rows={[
            ['VITE_FIREBASE_API_KEY', 'API Key de Firebase Web App', 'Firebase Console → Project Settings', <GodBadge color="gray">No (mock activo)</GodBadge>],
            ['VITE_FIREBASE_PROJECT_ID', 'ID del proyecto GCP/Firebase', 'Firebase Console', <GodBadge color="gray">No (mock activo)</GodBadge>],
            ['VITE_GEMINI_API_KEY', 'API Key de Gemini (Google AI Studio)', 'aistudio.google.com', <GodBadge color="gray">No (mock activo)</GodBadge>],
            ['VITE_APP_URL', 'URL pública del deploy', 'geminispecwebapp.thelaunchpadtlp.education', <GodBadge color="orange">Cuando se configure DNS</GodBadge>],
          ]}
        />
      </GodCard>

      <GodCard title="Plataformas de Deploy">
        <GodTable
          headers={['Plataforma', 'URL / Proyecto', 'Credencial necesaria', 'Estado']}
          rows={[
            ['GitHub Pages', 'thelaunchpadtlp.github.io/geminispecwebapp', 'GitHub Actions (token workflows)', <GodBadge color="gray">Pendiente activar</GodBadge>],
            ['Firebase Hosting', 'Editar .firebaserc con project ID real', 'firebase login (Google Account)', <GodBadge color="gray">Configurar</GodBadge>],
            ['Google Cloud Run', 'gcloud run deploy (via Docker)', 'gcloud auth login', <GodBadge color="gray">Futuro</GodBadge>],
            ['Dominio Custom', 'geminispecwebapp.thelaunchpadtlp.education', 'DNS CNAME → Firebase / GitHub Pages', <GodBadge color="gray">Pendiente</GodBadge>],
          ]}
        />
      </GodCard>

      <GodCard title="Pasos para Activar GitHub Actions (T-001)">
        <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside">
          <li>Clonar el repo en tu máquina local: <code className="text-[#00f0ff]">git clone https://github.com/thelaunchpadtlp/geminispecwebapp.git</code></li>
          <li>Los archivos de workflows ya están en <code className="text-[#00f0ff]">.github/workflows/</code> localmente.</li>
          <li>Hacer push desde tu cuenta personal (con token que tenga scope <code className="text-[#00f0ff]">workflow</code>): <code className="text-[#00f0ff]">git push origin main</code></li>
          <li>Alternativamente: crear los archivos directamente en la UI de GitHub → New file → <code className="text-[#00f0ff]">.github/workflows/ci.yml</code></li>
          <li>Verificar en la pestaña <strong className="text-white">Actions</strong> del repo que el workflow corre.</li>
        </ol>
      </GodCard>
    </GodSection>
  )
}
