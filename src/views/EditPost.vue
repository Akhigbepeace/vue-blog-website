<script lang="ts" setup>
import BlogFooter from '@/components/BlogFooter.vue'
import type { BlogData } from '@/components/types'
import router from '@/router'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'

const loading: Ref<boolean> = ref(false)
const blogData: Ref<BlogData> = ref({
  body: '',
  title: ''
})

const route = useRoute()
const path = route.path
const splittedPath = path.split('/')
const blogId = splittedPath[2]

onMounted(() => {
  const getSinglePost = async () => {
    const res: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const data = await res.json()

    if (res.ok) {
      blogData.value = data
    }
  }

  getSinglePost()
})

const handleEditPost = async () => {
  loading.value = true
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
      method: 'PUT',
      body: JSON.stringify(blogData.value),
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (res.ok) toast('Successfuly edited a post')
    setTimeout(() => {
      router.push('/home')
    }, 3000)
  } catch (error) {
    toast(String(error))
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
    <button @click="router.back()" class="mb-5 p-3 bg-gray-200 font-bold rounded text-center">
      Back
    </button>

    <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Edit Post</h2>
    <form @submit.prevent="handleEditPost">
      <!-- Post Title -->
      <div class="mb-6">
        <label for="title" class="block text-gray-700 font-medium mb-2">Post Title</label>
        <input
          v-model="blogData.title"
          type="text"
          id="title"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the post title"
          required
        />
      </div>

      <div class="mb-6">
        <label for="body" class="block text-gray-700 font-medium mb-2">Post Content</label>
        <textarea
          v-model="blogData.body"
          id="body"
          rows="6"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the body of the post"
          required
        />
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {{ loading ? 'Loading...' : 'Edit Post' }}
        </button>
      </div>
    </form>
  </div>

  <BlogFooter />
</template>
