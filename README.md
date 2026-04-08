# Cliente Agéntico Universal Framework 2050

> Micro Web App — Escaparate interactivo y futurista del framework agéntico universal.  
> Estética **Liquid Glass 2050** · Arquitectura **LLM-OS** · Protocolo **MCP** · Portabilidad **GCP/Firebase**

[![CI Build](https://github.com/thelaunchpadtlp/cliente-agentico-universal-2050/actions/workflows/ci.yml/badge.svg)](https://github.com/thelaunchpadtlp/cliente-agentico-universal-2050/actions)
[![Deploy Pages](https://github.com/thelaunchpadtlp/cliente-agentico-universal-2050/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/thelaunchpadtlp/cliente-agentico-universal-2050/actions)

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 18 + TypeScript (strict) |
| Estilos | Tailwind CSS v3 + CSS custom (Liquid Glass) |
| Animaciones | Framer Motion / CSS nativo |
| Build | Vite 5 |
| Deploy | Firebase Hosting / GitHub Pages / Docker / GCP Cloud Run |
| Datos estructurados | JSON-LD Schema.org (TechArticle + SoftwareApplication) |

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Docker

```bash
# Build y run local
docker-compose up --build

# Acceder en http://localhost:8080
```

## Firebase Hosting

```bash
# 1. Editar .firebaserc con tu project ID real
# 2. Build
npm run build
# 3. Deploy
firebase deploy
```

## Estructura del Proyecto

```
/
├── src/
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   ├── ui/         # LiquidGlassCard, NeonButton
│   │   └── sections/   # Hero, Architecture, HMI, LLMOS, MCP, VPN
│   ├── styles/
│   │   └── globals.css # Variables Liquid Glass 2050
│   ├── types/
│   │   └── index.ts    # Interfaces TypeScript
│   ├── utils/
│   │   └── seo.ts      # Metadata y JSON-LD helpers
│   └── lib/
│       └── api-mock.ts # Mocks → reemplazar con GCP/Firebase
├── public/
│   └── manifest.json   # PWA
├── Dockerfile          # Multi-stage (Node build + Nginx serve)
├── docker-compose.yml
├── firebase.json       # Firebase Hosting config
├── .firebaserc         # Proyecto GCP (editar)
└── .github/workflows/  # CI/CD automático
```

## Colaboración

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para guía completa de colaboración multi-agente.

---

*Diseño Especulativo © 2050 — The Launchpad TLP*
