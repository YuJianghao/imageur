<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NCard, NIcon, NText, NUpload, NUploadDragger, useThemeVars } from 'naive-ui'
import { ImageOutline as UploadIcon } from '@vicons/ionicons5'
import type { FileInfo } from 'naive-ui/es/upload/src/interface'
import { signOut } from '~/api/auth'
import { useOss } from '~/composables/oss'
import ImageInfo from '~/components/ImageInfo.vue'
const oss = useOss()
const imgs = ref<{ name: string; url: string }[]>([])
const vars = useThemeVars()
const fileInfo = ref<FileInfo>()
const onUploadChange = (options: { file: FileInfo }) => (fileInfo.value = options.file)
const uploadEl = ref()
const upload = () => {
  const file = fileInfo.value?.file
  if (!file)
    return
  oss.upload(file).then(({ name, url }) => {
    imgs.value.push({ name, url })
    uploadEl.value?.clear()
    fileInfo.value = undefined
  })
}
</script>

<template>
  <div h-100vh w-100vw flex="~ col" :style="{ backgroundColor: vars.primaryColor }">
    <nav flex="~" py2 px4>
      <div flex-1 />
      <NText secondary text text-white:50 hover:text-white cursor-pointer @click="signOut">
        SignOff
      </NText>
    </nav>
    <div flex-1 flex items-center pb-10>
      <div max-h-80vh overflow-auto w150 mx-auto>
        <NCard>
          <NUpload ref="uploadEl" :max="1" :on-change="onUploadChange" list-type="image">
            <NUploadDragger>
              <div style="margin-bottom: 12px">
                <NIcon size="48" :depth="3">
                  <UploadIcon />
                </NIcon>
              </div>
              <NText style="font-size: 16px">
                Click or drag inside to upload.
              </NText>
            </NUploadDragger>
          </NUpload>
          <NButton block :disabled="!fileInfo" @click="upload">
            upload
          </NButton>
          <ImageInfo v-for="item in imgs" :key="item.url" :name="item.name" :url="item.url" />
        </NCard>
      </div>
    </div>
  </div>
</template>

<style>
.n-upload-trigger{
  display: block;
}
</style>
