<script lang="ts" setup>
import BlogFooter from '@/components/BlogFooter.vue'
import PageHeader from '@/components/PageHeader.vue'
import type { BlogDetails } from '@/components/types'
import router from '@/router'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'

const postData: Ref<BlogDetails> = ref({ id: '', body: '', title: '' })
const route = useRoute()
const path = route.path
const splittedPath = path.split('/')
const blogId = splittedPath[2]

onMounted(() => {
  const getSinglePost = async () => {
    try {
      const res: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      const data = await res.json()

      if (res.ok) {
        postData.value = data
      }
    } catch (error) {
      toast('Something went wrong...')
    }
  }

  getSinglePost()
})

const editPost = (id: string) => {
  router.push(`/edit-post/${id}`)
}

const deletePost = async () => {
  console.log('Delete from server')
  // Delete from the server
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
    method: 'DELETE'
  })
  if (res.ok) {
    toast('Successfully deleted a post!')
    setTimeout(() => {
      router.push('/home')
    }, 3000)
  }
}
</script>

<template>
  <PageHeader />

  <div class="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg">
    <div class="flex justify-between items-center my-4">
      <button @click="router.back()" class="mb-5 p-3 bg-gray-200 font-bold rounded text-center">
        Back to Blog
      </button>

      <div class="flex space-x-2">
        <button @click="editPost(postData.id)" class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Edit
        </button>
        <button class="bg-red-500 text-white px-4 py-2 rounded-md" @click="deletePost">
          Delete
        </button>
      </div>
    </div>

    <h1 class="text-3xl mb-5 font-bold text-gray-800 capitalize">{{ postData.title }}</h1>
    <p class="text-gray-600 text-lg">{{ postData.body }}</p>
  </div>

  <BlogFooter />
</template>
