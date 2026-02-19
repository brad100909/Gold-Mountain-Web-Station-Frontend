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
      { path: 'test', name: 'test', component: () => import('../views/test.vue') }
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
