import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'app/pages',
    }),
    Unocss(),
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
    {
      find: '@/',
      replacement: `${path.resolve(__dirname, 'app')}/components/`,
    },
  ],
})
