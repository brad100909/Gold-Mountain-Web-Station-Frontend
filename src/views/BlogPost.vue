<template>
  <div class="min-h-screen bg-[#0f1117] text-white pt-28 pb-20 px-6">
    <div class="max-w-2xl mx-auto">

      <!-- 404 -->
      <div v-if="!post" class="text-center py-20">
        <p class="text-white/40">{{ locale === 'zh' ? '找不到這篇文章。' : 'Article not found.' }}</p>
        <router-link :to="'/' + locale + '/blog'" class="text-[#BFA76A] text-sm mt-4 inline-block hover:text-[#E3D3A3]">
          ← {{ locale === 'zh' ? '回文章列表' : 'Back to blog' }}
        </router-link>
      </div>

      <template v-else>
        <!-- Back -->
        <router-link :to="'/' + locale + '/blog'" class="inline-flex items-center gap-1.5 text-[#BFA76A] text-sm mb-10 hover:text-[#E3D3A3] transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {{ locale === 'zh' ? '回文章列表' : 'Back to blog' }}
        </router-link>

        <!-- Meta -->
        <p class="text-xs text-white/35 mb-3">{{ post.date }}</p>
        <h1 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
          {{ content.title }}
        </h1>
        <p class="text-white/55 text-sm leading-relaxed mb-10 pb-10 border-b border-white/10">
          {{ content.description }}
        </p>

        <!-- Content -->
        <div class="prose-blog" v-html="renderedContent"></div>

        <!-- CTA -->
        <div class="mt-16 p-8 rounded-2xl border border-[#BFA76A]/30 bg-black/30">
          <p class="text-[#E3D3A3] font-semibold mb-2">
            {{ locale === 'zh' ? '有網站需求？' : 'Have a project in mind?' }}
          </p>
          <p class="text-white/55 text-sm mb-4">
            {{ locale === 'zh'
              ? '歡迎直接聯絡我，免費評估你的需求，1–2 個工作天內回覆。'
              : 'Feel free to reach out for a free consultation. I typically reply within 1–2 business days.' }}
          </p>
          <router-link
            :to="'/' + locale + '/contact'"
            class="inline-block px-6 py-2.5 rounded-lg text-sm font-medium
                   bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-gray-900
                   hover:brightness-110 transition-all"
          >
            {{ locale === 'zh' ? '免費需求評估' : 'Free Consultation' }}
          </router-link>
        </div>
      </template>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { posts } from '../data/blog.js'

const route = useRoute()
const { locale } = useI18n()

const post = computed(() => posts.find(p => p.slug === route.params.slug))
const content = computed(() => post.value ? post.value[locale.value] || post.value.zh : null)

const BASE = 'https://goldenmountaindesign.com'

useHead(computed(() => {
  if (!content.value) return {}
  const lang = route.params.lang || 'zh'
  const slug = route.params.slug
  const siteName = 'Golden Mountain 金山網頁設計'
  const title = `${content.value.title} | ${siteName}`
  const description = content.value.description
  const canonical = `${BASE}/${lang}/blog/${slug}`
  const altLang = lang === 'zh' ? 'en' : 'zh'

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: lang === 'zh' ? 'zh-TW' : 'en', href: canonical },
      { rel: 'alternate', hreflang: lang === 'zh' ? 'en' : 'zh-TW', href: `${BASE}/${altLang}/blog/${slug}` },
      { rel: 'alternate', hreflang: 'x-default', href: `${BASE}/zh/blog/${slug}` },
    ]
  }
}))

const renderedContent = computed(() => {
  if (!content.value) return ''
  return content.value.content
    .trim()
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^\*\*(.+?)\*\*$/gm, '<strong>$1</strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^---$/gm, '<hr>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul]|<hr|<\/p|<p)(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
})
</script>

<style scoped>
.prose-blog :deep(h2) {
  font-size: 1.25rem;
  font-weight: 700;
  color: #E3D3A3;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.prose-blog :deep(h3) {
  font-size: 1rem;
  font-weight: 600;
  color: #E3D3A3;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.prose-blog :deep(p) {
  color: rgba(255,255,255,0.7);
  font-size: 0.925rem;
  line-height: 1.85;
  margin-bottom: 1rem;
}
.prose-blog :deep(ul) {
  margin: 0.75rem 0 1rem 1.25rem;
  list-style: disc;
}
.prose-blog :deep(li) {
  color: rgba(255,255,255,0.7);
  font-size: 0.925rem;
  line-height: 1.85;
  margin-bottom: 0.25rem;
}
.prose-blog :deep(strong) {
  color: white;
  font-weight: 600;
}
.prose-blog :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin: 2rem 0;
}
</style>
