<script setup lang="ts">
import { reactive } from 'vue'
import { signIn } from '~/api/auth'

const form = reactive({
  username: '',
  password: '',
})
const onSubmit = () => {
  signIn()
}
</script>

<template>
  <form action="" @submit.prevent="onSubmit">
    <input v-model="form.username" type="text">
    <input v-model="form.password" type="password">
    <button>SignIn</button>
  </form>
</template>
