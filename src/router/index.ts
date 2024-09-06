import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
// import SignupView from '../views/SignupView.vue'
import CreatePost from '../views/CreatePost.vue'
import PostDetails from '../views/PostDetails.vue'
import AllBlogs from '../views/AllBlogs.vue'
import EditPost from '../views/EditPost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: CreatePost
    },
    {
      path: '/edit-post/:id',
      name: 'edit-post',
      component: EditPost
    },
    {
      path: '/all-blogs',
      name: 'all-blogs',
      component: AllBlogs
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostDetails
    }
  ]
})

export default router
