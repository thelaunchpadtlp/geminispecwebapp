# Configuración de Dominio Custom — v2.0

> **Estado actual:** Pendiente para v2.0. La infraestructura está preparada y lista para activar.
> El dominio objetivo es `geminispecwebapp.thelaunchpadtlp.education`.

---

## Opción A — Firebase Hosting (Recomendada para GCP/Google Workspace)

Esta es la ruta de menor fricción dado que el proyecto ya usa Google Cloud Platform.

### Paso 1: Crear proyecto en Firebase

1. Ir a [console.firebase.google.com](https://console.firebase.google.com).
2. Crear nuevo proyecto o seleccionar uno existente de tu cuenta Google Workspace.
3. Copiar el **Project ID** (ejemplo: `geminispecwebapp-prod`).

### Paso 2: Actualizar `.firebaserc`

Editar el archivo `.firebaserc` en la raíz del proyecto:

```json
{
  "projects": {
    "default": "TU-PROJECT-ID-AQUI"
  }
}
```

### Paso 3: Instalar Firebase CLI y desplegar

```bash
npm install -g firebase-tools
firebase login
npm run build
firebase deploy
```

### Paso 4: Configurar dominio custom en Firebase

1. En Firebase Console → Hosting → Add custom domain.
2. Ingresar `geminispecwebapp.thelaunchpadtlp.education`.
3. Firebase te dará un registro **TXT** para verificar propiedad y un registro **A** o **CNAME** para apuntar el DNS.

### Paso 5: Configurar DNS en tu proveedor

En el panel DNS de `thelaunchpadtlp.education`, agregar:

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| TXT | geminispecwebapp | (valor de verificación de Firebase) | 3600 |
| A | geminispecwebapp | 151.101.1.195 | 3600 |
| A | geminispecwebapp | 151.101.65.195 | 3600 |

*(Los IPs exactos los provee Firebase al configurar el dominio custom.)*

---

## Opción B — GitHub Pages con CNAME

Si prefieres GitHub Pages (más simple, sin costo adicional):

### Paso 1: Activar GitHub Pages

1. GitHub → Settings → Pages → Source: `GitHub Actions`.
2. El workflow `deploy-pages.yml` ya está configurado para hacer el deploy automático.

### Paso 2: Agregar CNAME al repo

```bash
echo "geminispecwebapp.thelaunchpadtlp.education" > public/CNAME
git add public/CNAME
git commit -m "chore: add CNAME for custom domain v2.0"
git push origin main
```

### Paso 3: Configurar DNS

| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| CNAME | geminispecwebapp | thelaunchpadtlp.github.io | 3600 |

---

## Opción C — Google Cloud Run (Máxima escalabilidad)

Para cuando el proyecto crezca y necesite backend:

```bash
# Build de la imagen Docker
docker build -t gcr.io/TU-PROJECT-ID/geminispecwebapp .

# Push al Container Registry
docker push gcr.io/TU-PROJECT-ID/geminispecwebapp

# Deploy en Cloud Run
gcloud run deploy geminispecwebapp \
  --image gcr.io/TU-PROJECT-ID/geminispecwebapp \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Variables de Entorno para v2.0

Cuando se active el dominio, actualizar en GitHub Secrets:

```
VITE_APP_URL=https://geminispecwebapp.thelaunchpadtlp.education
VITE_FIREBASE_PROJECT_ID=TU-PROJECT-ID
VITE_FIREBASE_API_KEY=TU-API-KEY
```

---

*Este archivo fue preparado por Manus AI en v1.2.0 para facilitar la activación del dominio en v2.0.*
*El código ya está completamente listo — solo se necesita configurar DNS y Firebase/GitHub Pages.*
