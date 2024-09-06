<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gray-800 grid grid-cols-3 items-center text-white p-8">
    <div class="mb-4">
      <RouterLink to="/home" class="text-2xl font-bold text-white hover:text-gray-400">
        Peace Blog
      </RouterLink>
    </div>
    <p class="ml-10">&copy; 2024 Peace Blog. All rights reserved.</p>
  </footer>
</template>
