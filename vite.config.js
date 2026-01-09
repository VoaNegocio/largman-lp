import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['react-icons'],
          'animation-vendor': ['framer-motion'], // If present, otherwise remove. Just react-icons is fine for now.
        },
      },
    },
  },
})
