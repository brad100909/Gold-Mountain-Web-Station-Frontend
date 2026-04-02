import { createRouter, createWebHistory } from 'vue-router'
import LangWrapper from '../components/LangWrapper.vue'
import i18n from '../i18n'

const seoData = {
  home: {
    zh: {
      title: 'Golden Mountain 金山網頁設計 | 客製化網站、系統開發與 VPS 主機',
      description: '專業客製化網站設計、系統開發與 VPS 主機服務。不使用套版，Vue 3 + Laravel 全端架構，為品牌打造能長期成長的網站。'
    },
    en: {
      title: 'Golden Mountain Web Design | Custom Websites, Systems & VPS Hosting',
      description: 'Professional custom website design, system development, and VPS hosting. No templates — Vue 3 + Laravel, built for long-term growth.'
    }
  },
  portfolio: {
    zh: {
      title: '作品集 | Golden Mountain 金山網頁設計',
      description: '查看 Golden Mountain 的示範專案：品牌形象網站、電商系統、後台管理系統，了解我們的開發能力與設計風格。'
    },
    en: {
      title: 'Portfolio | Golden Mountain Web Design',
      description: 'Explore Golden Mountain demo projects: brand websites, e-commerce systems, and admin dashboards showcasing our development capabilities.'
    }
  },
  services: {
    zh: {
      title: '服務項目 | Golden Mountain 金山網頁設計',
      description: '提供客製化形象網站、系統與會員功能開發、VPS 主機架設與長期維護服務。從需求訪談到上線後支援，一個窗口全程負責。'
    },
    en: {
      title: 'Services | Golden Mountain Web Design',
      description: 'Custom brand websites, system & membership development, VPS setup and long-term maintenance. One point of contact from discovery to post-launch support.'
    }
  },
  pricing: {
    zh: {
      title: '方案介紹與報價 | Golden Mountain 金山網頁設計',
      description: '透明定價，一次付清或訂閱方案任您選擇。基礎形象網站 NT$28,000 起，系統開發、VPS 維護訂閱方案彈性配合。'
    },
    en: {
      title: 'Pricing Plans | Golden Mountain Web Design',
      description: 'Transparent pricing — one-time or subscription. Starter websites from NT$28,000. Flexible plans for system development and VPS maintenance.'
    }
  },
  contact: {
    zh: {
      title: '聯絡我們 | Golden Mountain 金山網頁設計',
      description: '有網站或系統開發需求？歡迎直接聯絡 Golden Mountain，免費需求評估，1-2 個工作天內回覆。'
    },
    en: {
      title: 'Contact Us | Golden Mountain Web Design',
      description: 'Have a project in mind? Contact Golden Mountain for a free consultation. I typically reply within 1–2 business days.'
    }
  }
}

function updateSeoMeta(name, lang) {
  const key = name in seoData ? name : null
  if (!key) return

  const seo = seoData[key][lang] || seoData[key]['zh']
  document.title = seo.title

  const setMeta = (attr, value, content) => {
    let el = document.querySelector(`meta[${attr}="${value}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, value)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  setMeta('name', 'description', seo.description)
  setMeta('property', 'og:title', seo.title)
  setMeta('property', 'og:description', seo.description)
  setMeta('name', 'twitter:title', seo.title)
  setMeta('name', 'twitter:description', seo.description)

  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
}

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

// 語言控制 + SEO meta 更新
router.beforeEach((to, from, next) => {
  const lang = to.params.lang
  if (!['zh', 'en'].includes(lang)) {
    return next('/zh') // 沒語言就導回中文
  }
  i18n.global.locale.value = lang
  next()
})

router.afterEach((to) => {
  const lang = to.params.lang || 'zh'
  const name = to.name
  updateSeoMeta(name, lang)
})

export default router
