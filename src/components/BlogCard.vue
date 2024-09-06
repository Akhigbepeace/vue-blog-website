<script setup lang="ts">
import type { AllBlogPosts } from '@/components/types'

defineProps<{ posts: AllBlogPosts[] }>()
</script>

<template>
  <div
    v-for="(post, index) in posts"
    :key="index"
    class="justify-between bg-white border shadow-md rounded-lg overflow-hidden mb-6 p-6 flex flex-col"
  >
    <div class="">
      <h2 class="text-2xl font-bold text-gray-800 mb-2 capitalize text-truncate">
        {{ post.title }}
      </h2>

      <p class="text-gray-600 mb-4">{{ post.body }}</p>
    </div>
    <RouterLink :to="`/post/${post.id}`" class="text-blue-500 hover:underline">
      Read More &rarr;
    </RouterLink>
  </div>
</template>
