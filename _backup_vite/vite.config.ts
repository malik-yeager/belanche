import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: mode === 'development',   // dev build: keep sourcemaps
    minify: mode === 'production',       // prod build: minify
    outDir: 'dist',                      // always same folder
    emptyOutDir: true                    // clean before build
  }
}))