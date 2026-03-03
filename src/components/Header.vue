<template>
  <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="/Logo.svg" alt="Gold Mountain Logo" class="h-8 w-auto" />
        <span class="text-xl font-bold text-gray-800">Golden Mountain {{ t('nav.logoText') }}</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <router-link class="nav-link" :to="'/' + locale + '/portfolio'">{{ t('nav.portfolio') }}</router-link>
        <a class="nav-link" href="#services">{{ t('nav.services') }}</a>
        <a class="nav-link" href="#contact">{{ t('nav.contact') }}</a>
        <a class="nav-link" href="#pricing">{{ t('nav.pricing') }}</a>

        <!-- Language Switch -->
        <div class="ml-2 relative flex items-center rounded-full bg-[#F5F2EA] p-1 text-xs">
          <button
            @click="locale !== 'zh' && toggleLocale()"
            class="relative z-10 px-3 py-1 rounded-full transition-colors"
            :class="locale === 'zh' ? 'text-[#3B3320]' : 'text-[#A58A4A]'"
          >
            中
          </button>

          <button
            @click="locale !== 'en' && toggleLocale()"
            class="relative z-10 px-3 py-1 rounded-full transition-colors"
            :class="locale === 'en' ? 'text-[#3B3320]' : 'text-[#A58A4A]'"
          >
            EN
          </button>

          <span
            class="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full
                   bg-gradient-to-r from-[#D8C690] to-[#BFA76A]
                   transition-all duration-300"
            :class="locale === 'zh' ? 'left-1' : 'left-[calc(50%+2px)]'"
          />
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100">
      <nav class="flex flex-col px-6 py-4 space-y-4 text-sm">
        <router-link class="nav-link" :to="'/' + locale + '/portfolio'" @click="menuOpen = false">{{ t('nav.portfolio') }}</router-link>
        <a class="nav-link" href="#services" @click="menuOpen = false">{{ t('nav.services') }}</a>
        <a class="nav-link" href="#contact" @click="menuOpen = false">{{ t('nav.contact') }}</a>
        <a class="nav-link" href="#pricing" @click="menuOpen = false">{{ t('nav.pricing') }}</a>

        <!-- Mobile Language Switch -->
        <div class="pt-2 relative flex items-center rounded-full bg-[#F5F2EA] p-1 text-xs w-fit">
          <button
            @click="locale !== 'zh' && toggleLocale()"
            class="relative z-10 px-3 py-1 rounded-full transition-colors"
            :class="locale === 'zh' ? 'text-[#3B3320]' : 'text-[#A58A4A]'"
          >
            中
          </button>
          <button
            @click="locale !== 'en' && toggleLocale()"
            class="relative z-10 px-3 py-1 rounded-full transition-colors"
            :class="locale === 'en' ? 'text-[#3B3320]' : 'text-[#A58A4A]'"
          >
            EN
          </button>
          <span
            class="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full
                   bg-gradient-to-r from-[#D8C690] to-[#BFA76A]
                   transition-all duration-300"
            :class="locale === 'zh' ? 'left-1' : 'left-[calc(50%+2px)]'"
          />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const toggleLocale = () => {
  const newLang = locale.value === 'zh' ? 'en' : 'zh'
  router.push({ params: { ...route.params, lang: newLang } })
}
</script>




<style scoped>
/* 可以讓 Header 內容不被遮住 */
.nav-link {
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background-color: #BFA76A;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
