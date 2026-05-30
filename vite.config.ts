import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/interview-prep-hub/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    port: 4173
  }
})
