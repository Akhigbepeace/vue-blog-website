<script setup lang="ts">
import router from '@/router'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const hasAccount = ref(false)
const user = localStorage.getItem('user')
const parsedUser = JSON.parse(user as string)

onMounted(() => {
  if (parsedUser) hasAccount.value = true
})

{
  /*

This is using props with defaults in Typescript

  const props = withDefaults(defineProps<NavProp>(), {
    showNavLink: true
})
  */
}

const handleLogout = () => {
  if (parsedUser) {
    localStorage.removeItem('user')
    hasAccount.value = true
    router.push('/')
  }
}
</script>

<template>
  <header class="bg-white shadow">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <div class="text-2xl font-bold text-gray-800">
        <RouterLink to="/home" class="hover:text-blue-500">Peace Blog</RouterLink>
      </div>

      <nav class="flex space-x-4">
        <RouterLink
          to="/create-post"
          class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Create Post
        </RouterLink>
        <button
          @click="handleLogout"
          class="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
        >
          Logout
        </button>
      </nav>
    </div>
  </header>
</template>
