<template>
  <div class="min-h-screen bg-[#0f1117] text-white pt-28 pb-20 px-6">
    <div class="max-w-3xl mx-auto">

      <!-- Header -->
      <div class="mb-14">
        <p class="text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-3">Blog</p>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
          {{ locale === 'zh' ? '網頁設計知識分享' : 'Web Design Insights' }}
        </h1>
        <p class="text-white/50 text-sm leading-relaxed">
          {{ locale === 'zh'
            ? '分享網站開發、SEO、系統設計的實用知識，幫助你做出更好的決策。'
            : 'Practical insights on web development, SEO, and system design to help you make better decisions.' }}
        </p>
      </div>

      <!-- Post List -->
      <div class="flex flex-col gap-6">
        <router-link
          v-for="post in posts"
          :key="post.slug"
          :to="'/' + locale + '/blog/' + post.slug"
          class="group block p-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur
                 hover:border-[#BFA76A]/50 hover:bg-black/40 transition-all duration-300"
        >
          <p class="text-xs text-white/35 mb-2">{{ post.date }}</p>
          <h2 class="text-lg font-bold text-white mb-2 group-hover:text-[#E3D3A3] transition-colors">
            {{ locale === 'zh' ? post.zh.title : post.en.title }}
          </h2>
          <p class="text-white/55 text-sm leading-relaxed mb-4">
            {{ locale === 'zh' ? post.zh.description : post.en.description }}
          </p>
          <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">
            {{ locale === 'zh' ? '閱讀全文 →' : 'Read more →' }}
          </span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { posts } from '../data/blog.js'

const { locale } = useI18n()
</script>
