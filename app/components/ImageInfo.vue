<script setup lang="ts">
import { NButton, NIcon, NImage, NText } from 'naive-ui'
import { LinkOutline, LogoMarkdown } from '@vicons/ionicons5'
defineProps<{
  name: string
  url: string
}>()
</script>

<template>
  <div flex items-center gap-2 mt2>
    <NImage :src="url" width="50" height="50" object-fit="cover" />
    <NText flex-1>
      {{ name }}
    </NText>
    <NButton>
      <template #icon>
        <NIcon>
          <LinkOutline />
        </NIcon>
      </template>
    </NButton>
    <NButton>
      <template #icon>
        <NIcon>
          <LogoMarkdown />
        </NIcon>
      </template>
    </NButton>
  </div>
</template>
