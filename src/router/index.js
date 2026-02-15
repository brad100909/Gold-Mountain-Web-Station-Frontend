import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/test',
    component: () => import('../views/test.vue'),
  },
  {
    path: '/shopify',
    component: () => import('../components/ShopifyProducts.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
