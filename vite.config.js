import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow imports from the workspace root and subdirectories
      allow: ['.']
    }
  }
})
