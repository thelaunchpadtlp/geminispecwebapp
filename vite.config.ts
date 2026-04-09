import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  preview: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 4174,
  },
  server: {
    allowedHosts: 'all',
    host: '0.0.0.0',
  },
})
