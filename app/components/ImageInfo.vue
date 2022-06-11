<script setup lang="ts">
import { NButton, NIcon, NImage, NText, useMessage } from 'naive-ui'
import { LinkOutline, LogoMarkdown } from '@vicons/ionicons5'
import { useClipboard } from '@vueuse/core'
const props = defineProps<{
  name: string
  url: string
}>()
const { copy } = useClipboard()
const message = useMessage()
const onCopyUrl = () => {
  copy(props.url)
  message.success('URL copied!')
}
const onCopyMarkdown = () => {
  copy(`![](${props.url})`)
  message.success('markdown copied!')
}
</script>

<template>
  <div flex items-center gap-2 mt2>
    <NImage :src="url" width="50" height="50" object-fit="cover" />
    <NText flex-1>
      {{ name }}
    </NText>
    <NButton @click="onCopyUrl">
      <template #icon>
        <NIcon>
          <LinkOutline />
        </NIcon>
      </template>
    </NButton>
    <NButton @click="onCopyMarkdown">
      <template #icon>
        <NIcon>
          <LogoMarkdown />
        </NIcon>
      </template>
    </NButton>
  </div>
</template>
