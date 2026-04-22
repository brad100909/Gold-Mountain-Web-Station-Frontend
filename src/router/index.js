import LangWrapper from '../components/LangWrapper.vue'

const seoData = {
  home: {
    zh: {
      title: '台灣網頁設計推薦 | 客製化網站、系統開發、VPS 主機 | Golden Mountain',
      description: '找台灣網頁設計公司？Golden Mountain 提供客製化形象網站、系統開發與 VPS 主機服務，不使用套版，讓你的網站真正帶來詢問與成交。'
    },
    en: {
      title: 'Taiwan Web Design | Custom Websites, System Development & VPS | Golden Mountain',
      description: 'Looking for a web designer in Taiwan? Golden Mountain builds custom websites, systems, and VPS hosting — no templates, built to convert visitors into clients.'
    }
  },
  portfolio: {
    zh: {
      title: '網頁設計作品集 | 餐廳、美甲、健身、電商實際案例 | Golden Mountain',
      description: '查看 Golden Mountain 網頁設計實際作品：日式餐廳、美甲沙龍、健身教練、電商系統與後台管理，了解客製化網站的設計能力。'
    },
    en: {
      title: 'Web Design Portfolio | Restaurant, Beauty, Fitness & E-commerce | Golden Mountain',
      description: 'Browse Golden Mountain web design projects: Japanese restaurant, nail salon, fitness coach, e-commerce, and admin dashboard demos.'
    }
  },
  services: {
    zh: {
      title: '台灣網頁設計服務 | 客製化網站、會員系統、VPS 主機推薦 | Golden Mountain',
      description: '台灣專業網頁設計服務：客製化形象網站、會員系統開發、VPS 主機架設與長期維護。從需求評估到上線後支援，一個窗口全程負責。'
    },
    en: {
      title: 'Web Design Services in Taiwan | Custom Sites, Systems & VPS | Golden Mountain',
      description: 'Professional web design services in Taiwan: custom brand websites, membership system development, VPS setup and long-term maintenance. Full support from day one.'
    }
  },
  pricing: {
    zh: {
      title: '網頁設計費用多少？台灣網站設計報價行情 | Golden Mountain',
      description: '台灣網頁設計收費透明公開：形象網站 NT$28,000 起，含訂閱制與一次付清方案。不確定預算？免費需求評估，告訴你實際要花多少。'
    },
    en: {
      title: 'Taiwan Web Design Pricing | How Much Does a Website Cost? | Golden Mountain',
      description: 'Transparent web design pricing in Taiwan: brand websites from NT$28,000. One-time or subscription plans available. Free assessment to estimate your budget.'
    }
  },
  blog: {
    zh: {
      title: '網頁設計知識部落格 | SEO、費用、系統開發實用指南 | Golden Mountain',
      description: '台灣網頁設計實用知識：SEO 入門、網站費用行情、套版 vs 客製化比較，幫助業者做出更好的網站決策。'
    },
    en: {
      title: 'Web Design Blog | SEO, Pricing & Development Guides | Golden Mountain',
      description: 'Practical web design guides for Taiwan businesses: SEO basics, pricing comparisons, template vs custom websites — make better decisions for your online presence.'
    }
  },
  contact: {
    zh: {
      title: '免費網頁設計諮詢 | 聯絡 Golden Mountain 金山網頁設計',
      description: '有網站或系統開發需求？免費需求評估，告訴你實際方向與費用，1-2 個工作天內回覆，不強迫推銷。'
    },
    en: {
      title: 'Free Web Design Consultation | Contact Golden Mountain',
      description: 'Have a website or system project in mind? Get a free assessment — honest advice on direction and budget. Reply within 1–2 business days, no pressure.'
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
      { path: 'blog', name: 'blog', component: () => import('../views/Blog.vue') },
      { path: 'blog/:slug', name: 'blog-post', component: () => import('../views/BlogPost.vue') },
      { path: 'contract', name: 'contract', component: () => import('../views/ContractGenerator.vue') },
      { path: 'spec', name: 'spec', component: () => import('../views/SpecGenerator.vue') }
    ]
  }
]

export { routes, seoData, updateSeoMeta }
