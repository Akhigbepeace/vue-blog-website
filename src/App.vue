<script setup lang="ts">
import { onMounted } from 'vue'
import router from './router'

const user = localStorage.getItem('user')
const parsedUser = JSON.parse(user as string)

onMounted(() => {
  if (parsedUser === null) {
    router.push('/')
  }
})
</script>

<template>
  <RouterView />
</template>
