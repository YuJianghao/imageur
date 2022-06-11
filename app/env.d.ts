/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
