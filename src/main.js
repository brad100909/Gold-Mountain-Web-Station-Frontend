import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { createPinia } from 'pinia'
import { routes } from './router'
import './assets/main.css'
import i18n from './i18n'

export const createApp = ViteSSG(
  App,
  { routes, base: '/' },
  ({ app, router, isClient }) => {
    app.use(createPinia())
    app.use(i18n)

    router.beforeEach((to, from, next) => {
      const lang = to.params.lang
      if (!['zh', 'en'].includes(lang)) {
        return next('/zh')
      }
      i18n.global.locale.value = lang
      next()
    })

if (isClient) {
      import('vue-gtag').then(({ createGtag }) => {
        app.use(createGtag({ tagId: 'G-R7C65VEN92' }), router)
      })
    }
  }
)
