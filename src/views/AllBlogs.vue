<script lang="ts" setup>
import BlogCard from '@/components/BlogCard.vue'
import BlogFooter from '@/components/BlogFooter.vue'
import PageHeader from '@/components/PageHeader.vue'
import { onMounted, ref } from 'vue'

const allPosts = ref([])

onMounted(() => {
  const getAllPosts = async () => {
    const res: Response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    if (res.ok) {
      allPosts.value = data
    }
  }

  getAllPosts()
})
</script>

<template>
  <PageHeader />

  <div class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 p-5">
    <BlogCard :posts="allPosts" />
  </div>

  <BlogFooter />
</template>
