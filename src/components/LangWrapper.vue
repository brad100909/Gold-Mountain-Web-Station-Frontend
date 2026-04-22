<template>
  <router-view />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { seoData } from '../router'

const BASE = 'https://goldenmountaindesign.com'
const route = useRoute()

const head = computed(() => {
  const lang = route.params.lang || 'zh'
  const name = route.name
  const data = seoData[name]?.[lang] || seoData[name]?.['zh']

  if (!data) return {}

  const canonical = `${BASE}${route.path}`
  const altLang = lang === 'zh' ? 'en' : 'zh'
  const altPath = route.path.replace(`/${lang}`, `/${altLang}`)

  return {
    title: data.title,
    meta: [
      { name: 'description', content: data.description },
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:url', content: canonical },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: lang === 'zh' ? 'zh-TW' : 'en', href: canonical },
      { rel: 'alternate', hreflang: lang === 'zh' ? 'en' : 'zh-TW', href: `${BASE}${altPath}` },
      { rel: 'alternate', hreflang: 'x-default', href: `${BASE}/zh` },
    ],
    htmlAttrs: { lang: lang === 'zh' ? 'zh-Hant' : 'en' }
  }
})

useHead(head)
</script>
