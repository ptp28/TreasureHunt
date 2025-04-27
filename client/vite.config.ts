import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.SERVER_URL ?? 'http://localhost:8000',
        changeOrigin: true,
      },
      '/admin': {
        target: process.env.SERVER_URL ?? 'http://localhost:8000',
        changeOrigin: true,
      },
      '/media': {
        target: process.env.SERVER_URL ?? 'http://localhost:8000',
        changeOrigin: true,
      },
      '/assets': {
        target: process.env.SERVER_URL ?? 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  },
  publicDir: 'public',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
