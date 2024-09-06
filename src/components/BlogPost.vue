<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { toast } from 'vue3-toastify'
import type { AllBlogPosts } from './types'
import BlogCard from '@/components/BlogCard.vue'
import { RouterLink } from 'vue-router'

const posts: Ref<AllBlogPosts[]> = ref([])
const loading: Ref<boolean> = ref(false)

onMounted(() => {
  const getAllPosts = async () => {
    loading.value = true

    try {
      const res: Response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      if (res.ok) {
        posts.value = data
      }
    } catch (error) {
      toast(String(error))
    } finally {
      loading.value = false
    }
  }

  getAllPosts()
})
</script>

<template>
  <div v-if="loading" class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 p-5 gap-5">
    <div class="h-56 mb-4 w-full rounded bg-gray-300 animate-pulse border shadow-md" />
    <div class="h-56 mb-4 w-full rounded bg-gray-300 animate-pulse border shadow-md" />
    <div class="h-56 mb-4 w-full rounded bg-gray-300 animate-pulse border shadow-md" />
    <div class="h-56 mb-4 w-full rounded bg-gray-300 animate-pulse border shadow-md" />
    <div class="h-56 mb-4 w-full rounded bg-gray-300 animate-pulse border shadow-md" />
  </div>

  <div class="p-5">
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
      <BlogCard :posts="posts" />
    </div>

    <RouterLink
      to="/all-blogs"
      class="bg-blue-500 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300 block text-center w-28 mx-auto"
    >
      More
    </RouterLink>
  </div>
</template>
