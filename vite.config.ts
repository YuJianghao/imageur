import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'app/pages',
    }),
  ],
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
  alias: [
    {
      find: '~/',
      replacement: `${path.resolve(__dirname, 'app')}/`,
    },
  ],
})
