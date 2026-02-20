<template>
  <header class="bg-white shadow fixed w-full z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/Logo.svg" alt="Gold Mountain Logo" class="h-10 w-auto mr-3" />
        <span class="text-xl font-bold text-gray-800">Golden Mountain 網頁設計</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex space-x-8">
        <a href="#portfolio" class="text-gray-700 hover:text-green-700 font-medium transition">作品</a>
        <a href="#services" class="text-gray-700 hover:text-green-700 font-medium transition">服務</a>
        <a href="#contact" class="text-gray-700 hover:text-green-700 font-medium transition">聯絡我</a>
        <a href="#contact" class="text-gray-700 hover:text-green-700 font-medium transition">方案介紹</a>
        
        <button
        @click="toggleLocale"
        class="ml-6 text-sm font-medium text-gray-600 hover:text-green-700 transition"
        >
        {{ locale === 'zh' ? 'switch to English' : '切換到中文' }}  
        </button>
      </nav>

      <!-- Mobile Hamburger -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow-lg">
      <nav class="flex flex-col px-6 py-4 space-y-2">
        <a href="#portfolio" class="text-gray-700 hover:text-green-700 font-medium transition">作品</a>
        <a href="#services" class="text-gray-700 hover:text-green-700 font-medium transition">服務</a>
        <a href="#contact" class="text-gray-700 hover:text-green-700 font-medium transition">聯絡我</a>
        <a href="#contact" class="text-gray-700 hover:text-green-700 font-medium transition">方案介紹</a>
        <button
        @click="toggleLocale"
        class="text-sm font-medium text-gray-600 hover:text-green-700 transition"
        >
        {{ locale === 'zh' ? 'switch to English' : '切換到中文' }}
      </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const { locale } = useI18n()

const toggleLocale = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}


</script>

<style scoped>
/* 可以讓 Header 內容不被遮住 */
body {
  padding-top: 72px; /* 高度要和 header 高度差不多 */
}
</style>
