import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/', 
        '/blog/sketch-to-svg-guide'
      ],
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
