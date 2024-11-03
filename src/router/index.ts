import AboutView from '@/views/AboutUsView.vue'
import AuthorView from '@/views/AuthorView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import BlogView from '@/views/BlogView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component: BlogPostView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicyView,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
  ],
})

export default router
