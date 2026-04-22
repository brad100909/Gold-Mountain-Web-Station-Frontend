<template>
  <router-view />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { seoData } from '../router'

const route = useRoute()

const head = computed(() => {
  const lang = route.params.lang || 'zh'
  const name = route.name
  const data = seoData[name]?.[lang] || seoData[name]?.['zh']

  if (!data) return {}

  return {
    title: data.title,
    meta: [
      { name: 'description', content: data.description },
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
    ],
    htmlAttrs: { lang: lang === 'zh' ? 'zh-Hant' : 'en' }
  }
})

useHead(head)
</script>
