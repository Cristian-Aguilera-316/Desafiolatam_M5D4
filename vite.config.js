import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Desafiolatam_M5D4/',
  build: {
    outDir: 'docs'
  }
})
