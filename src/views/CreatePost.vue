<script setup lang="ts">
import BlogFooter from '@/components/BlogFooter.vue'
import type { BlogData } from '@/components/types'
import router from '@/router'
import { ref, type Ref } from 'vue'
import { toast } from 'vue3-toastify'

const blogData: Ref<BlogData> = ref({
  title: '',
  body: ''
})

const handleCreatePost = async () => {
  try {
    localStorage.setItem('post', JSON.stringify(blogData.value))

    const res: Response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(blogData.value),
      headers: {
        'Content-type': 'application/json'
      }
    })

    if (res.ok) {
      toast('Post Successfully Created!')
      blogData.value = { body: '', title: '' }
      router.push('/home')
    }
  } catch (error) {
    toast(String(error))
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Create a New Post</h2>
    <form @submit.prevent="handleCreatePost">
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
        <label for="content" class="block text-gray-700 font-medium mb-2">Post Body</label>
        <textarea
          v-model="blogData.body"
          id="body"
          rows="6"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the content of the post"
          required
        />
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Create Post
        </button>
      </div>
    </form>
  </div>

  <BlogFooter />
</template>
