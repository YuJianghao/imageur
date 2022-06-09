<script setup lang="ts">
import { ref } from 'vue'
import { signOut } from '~/api/auth'
import { useOss } from '~/composables/oss'
const oss = useOss()
const file = ref<HTMLInputElement>()
const imgs = ref<{ name: string; url: string }[]>([])
const upload = () => {
  const fileEl = file.value!
  if (!fileEl.files)
    return
  oss.upload(fileEl.files).then(({ name, url }) => {
    imgs.value.push({ name, url })
  })
}
</script>

<template>
  <div>
    <button @click="signOut">
      signout
    </button>
    <input ref="file" type="file">
    <button @click="upload">
      uplaod
    </button>
    <img v-for="item in imgs" :key="item.name" :src="item.url" :alt="item.name">
  </div>
</template>
