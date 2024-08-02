import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html',
      },
    },
  },
})
