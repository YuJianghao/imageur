<script setup lang="ts">
import { signOut } from '~/api/auth'
</script>

<template>
  <div>
    <button @click="signOut">
      signout
    </button>
  </div>
</template>
