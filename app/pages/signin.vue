<script setup lang="ts">
import { reactive } from 'vue'
import { NButton, NForm, NFormItem, NH1, NInput, useThemeVars } from 'naive-ui'
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
const vars = useThemeVars()
</script>

<template>
  <div h-100vh w-100vw flex="~">
    <div :style="{ width: '60%', backgroundColor: vars.primaryColor }" />
    <div style="width: 40%">
      <div px-20 py-30>
        <NH1>Signin</NH1>
        <NForm :model="form" mt-5 @submit.prevent="onSubmit">
          <NFormItem path="username" label="Username">
            <NInput v-model:value="form.username" />
          </NFormItem>
          <NFormItem path="password" label="password">
            <NInput v-model:value="form.password" type="password" />
          </NFormItem>
          <NFormItem>
            <NButton block type="primary" attr-type="submit">
              SignIn
            </NButton>
          </NFormItem>
        </NForm>
      </div>
    </div>
  </div>
</template>
