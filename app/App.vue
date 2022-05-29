<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NThemeEditor } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#1b55c4ff',
    primaryColorHover: '#2369f6ff',
    primaryColorPressed: '#1a49a0ff',
    primaryColorSuppl: '#283856ff',
  },
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NThemeEditor>
      <RouterView />
    </NThemeEditor>
  </NConfigProvider>
</template>
