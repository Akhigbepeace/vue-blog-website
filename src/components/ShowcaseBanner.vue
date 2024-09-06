<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="bg-blue-600 text-white py-20">
    <div class="container mx-auto text-center">
      <h1 class="text-5xl font-bold mb-4">Share Your Thoughts with the World</h1>
      <p class="text-lg mb-8">
        Start writing your own blog posts today and connect with like-minded individuals.
      </p>
      <RouterLink
        to="/create-post"
        class="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
      >
        Create Your Post
      </RouterLink>
    </div>
  </section>
</template>
