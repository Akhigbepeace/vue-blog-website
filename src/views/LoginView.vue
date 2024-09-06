<script setup lang="ts">
import type { LoginDetails } from '@/components/types'
import router from '@/router'
import { ref, type Ref } from 'vue'
import { toast } from 'vue3-toastify'

const userDetails: Ref<LoginDetails> = ref({
  email: '',
  password: ''
})
const handleSignIn = () => {
  const loggedInUser = userDetails.value

  if (loggedInUser.email !== 'superadmin@gmail.com') {
    toast('Oops, Admins Only!')
    return
  }

  if (loggedInUser.password !== 'superadmin@123456') {
    toast('Incorrect Password!')
  } else {
    localStorage.setItem('user', JSON.stringify(loggedInUser))
    toast('Logged In Successfully!')
    setTimeout(() => {
      router.push('/home')
    }, 3000)
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-28 p-6 bg-slate-200 shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Log In</h2>

    <form @submit.prevent="handleSignIn">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>

        <input
          required
          v-model="userDetails.email"
          type="email"
          id="email"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>

        <input
          required
          v-model="userDetails.password"
          type="password"
          id="password"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <div class="flex items-center justify-between mb-4">
        <button
          type="submit"
          class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
