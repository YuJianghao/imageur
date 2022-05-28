<script setup lang="ts">
import { reactive } from 'vue'
import { signIn } from '~/api/auth'
import { forceReloadWindow } from '~/utils'

const form = reactive({
  username: '',
  password: '',
})
const onSubmit = () => {
  signIn(form.username, form.password)
    .then(() => {
      forceReloadWindow()
    }).catch((err) => {
      // eslint-disable-next-line no-alert
      window.alert(err)
    })
}
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <input v-model="form.username" type="text">
    <input v-model="form.password" type="password">
    <button>SignIn</button>
  </form>
</template>
