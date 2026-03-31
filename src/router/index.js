import { createRouter, createWebHistory } from 'vue-router'
import LangWrapper from '../components/LangWrapper.vue'
import i18n from '../i18n'

const routes = [
  { path: '/', redirect: '/zh' }, // 根頁面直接導向中文
  {
    path: '/:lang(zh|en)',
    component: LangWrapper, // 用 wrapper
    children: [
      { path: '', name: 'home', component: () => import('../views/Home.vue') },
      { path: 'portfolio', name: 'portfolio', component: () => import('../views/Portfolio.vue') },
      { path: 'services', name: 'services', component: () => import('../views/Services.vue') },
      { path: 'contact', name: 'contact', component: () => import('../views/Contact.vue') },
      { path: 'pricing', name: 'pricing', component: () => import('../views/Pricing.vue') },
      { path: 'demo/shop', name: 'demo-shop', component: () => import('../views/demo/DemoShop.vue') },
      { path: 'demo/admin', name: 'demo-admin', component: () => import('../views/demo/DemoAdmin.vue') },
      { path: 'demo/payment-result', name: 'payment-result', component: () => import('../views/demo/PaymentResult.vue') },
      { path: 'demo/booking', name: 'demo-booking', component: () => import('../views/demo/DemoBooking.vue') },
      { path: 'demo/dashboard', name: 'demo-dashboard', component: () => import('../views/demo/DemoDashboard.vue') },
      { path: 'demo/restaurant', name: 'demo-restaurant', component: () => import('../views/demo/DemoRestaurant.vue') },
      { path: 'demo/nail', name: 'demo-nail', component: () => import('../views/demo/DemoNail.vue') },
      { path: 'demo/fitness', name: 'demo-fitness', component: () => import('../views/demo/DemoFitness.vue') },
      { path: 'demo/cafe', name: 'demo-cafe', component: () => import('../views/demo/DemoCafe.vue') },
      { path: 'contract', name: 'contract', component: () => import('../views/ContractGenerator.vue') },
      { path: 'spec', name: 'spec', component: () => import('../views/SpecGenerator.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 語言控制
router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  if (!['zh', 'en'].includes(lang)) {
    return next('/zh') // 沒語言就導回中文
  }
  i18n.global.locale.value = lang
  next()
})

export default router
