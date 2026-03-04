<template>
  <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <router-link :to="'/' + locale" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img src="/Logo.svg" alt="Gold Mountain Logo" class="h-8 w-auto" />
        <span class="text-xl font-bold text-gray-800">Golden Mountain {{ t('nav.logoText') }}</span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        <router-link class="nav-link" :to="'/' + locale + '/portfolio'">{{ t('nav.portfolio') }}</router-link>

        <!-- Demo Dropdown -->
        <div class="relative group">
          <button class="nav-link flex items-center gap-1 cursor-pointer select-none">
            {{ t('nav.demo') }}
            <svg class="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Panel -->
          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none
                      group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
            <div class="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden min-w-[180px]">
              <router-link
                :to="'/' + locale + '/demo/shop'"
                class="flex items-center gap-3 px-4 py-3 hover:bg-[#F5F2EA] transition-colors group/item"
              >
                <span class="text-lg">🛍</span>
                <div>
                  <div class="text-sm font-medium text-gray-800 group-hover/item:text-[#A58A4A]">
                    {{ t('nav.demoShop') }}
                  </div>
                  <div class="text-[11px] text-gray-400">{{ t('nav.demoShopSub') }}</div>
                </div>
              </router-link>
              <div class="border-t border-gray-100"></div>
              <router-link
                :to="'/' + locale + '/demo/admin'"
                class="flex items-center gap-3 px-4 py-3 hover:bg-[#F5F2EA] transition-colors group/item"
              >
                <span class="text-lg">⚙️</span>
                <div>
                  <div class="text-sm font-medium text-gray-800 group-hover/item:text-[#A58A4A]">
                    {{ t('nav.demoAdmin') }}
                  </div>
                  <div class="text-[11px] text-gray-400">{{ t('nav.demoAdminSub') }}</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

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
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100">
      <nav class="flex flex-col px-6 py-4 space-y-1 text-sm">
        <router-link
          class="nav-link py-2.5"
          :to="'/' + locale + '/portfolio'"
          @click="menuOpen = false"
        >
          {{ t('nav.portfolio') }}
        </router-link>

        <!-- Mobile Demo Accordion -->
        <div>
          <button
            @click="demoOpen = !demoOpen"
            class="w-full flex items-center justify-between py-2.5 text-gray-700 font-medium"
          >
            <span>{{ t('nav.demo') }}</span>
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="demoOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div v-if="demoOpen" class="pl-4 pb-2 space-y-1 border-l-2 border-[#E3D3A3] ml-1">
            <router-link
              :to="'/' + locale + '/demo/shop'"
              @click="menuOpen = false"
              class="flex items-center gap-2 py-2 text-gray-600 hover:text-[#A58A4A] transition-colors"
            >
              <span>🛍</span>
              <div>
                <div class="font-medium text-sm">{{ t('nav.demoShop') }}</div>
                <div class="text-[11px] text-gray-400">{{ t('nav.demoShopSub') }}</div>
              </div>
            </router-link>
            <router-link
              :to="'/' + locale + '/demo/admin'"
              @click="menuOpen = false"
              class="flex items-center gap-2 py-2 text-gray-600 hover:text-[#A58A4A] transition-colors"
            >
              <span>⚙️</span>
              <div>
                <div class="font-medium text-sm">{{ t('nav.demoAdmin') }}</div>
                <div class="text-[11px] text-gray-400">{{ t('nav.demoAdminSub') }}</div>
              </div>
            </router-link>
          </div>
        </div>

        <a class="nav-link py-2.5" href="#services" @click="menuOpen = false">{{ t('nav.services') }}</a>
        <a class="nav-link py-2.5" href="#contact" @click="menuOpen = false">{{ t('nav.contact') }}</a>
        <a class="nav-link py-2.5" href="#pricing" @click="menuOpen = false">{{ t('nav.pricing') }}</a>

        <!-- Mobile Language Switch -->
        <div class="pt-3 relative flex items-center rounded-full bg-[#F5F2EA] p-1 text-xs w-fit">
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
const demoOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) demoOpen.value = false
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
