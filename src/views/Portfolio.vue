<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>

  <div class="min-h-screen relative z-10 pt-24 pb-20 px-6">
    <!-- Hero -->
    <div class="text-center mb-16">
      <p class="text-xs tracking-[0.3em] uppercase text-[#BFA76A] mb-3">
        {{ t('portfolioPage.hero.eyebrow') }}
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-5 tracking-wide">
        <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
          {{ t('portfolioPage.hero.title') }}
        </span>
      </h1>
      <p class="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {{ t('portfolioPage.hero.subtitle') }}
      </p>
    </div>

    <!-- Project Cards -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Card 1: 企業形象官網 -->
      <div class="group bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden
                  hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        <!-- Browser Mockup -->
        <div class="bg-gray-900 p-2 border-b border-white/10">
          <div class="flex items-center gap-1.5 mb-2 px-1">
            <span class="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
            <span class="ml-2 flex-1 bg-gray-700 rounded text-[10px] text-gray-400 px-2 py-0.5">
              demo.goldenmountain.dev/brand
            </span>
          </div>
          <!-- Mock Website: 企業形象官網 -->
          <div class="rounded overflow-hidden bg-[#0a0a0a] h-44 relative">
            <div class="bg-[#111] px-3 py-1.5 flex items-center justify-between border-b border-gray-800">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-gradient-to-br from-[#BFA76A] to-[#A58A4A]"></span>
                <span class="text-[7px] text-gray-300 font-bold">BRAND CO.</span>
              </div>
              <div class="flex gap-2">
                <span class="text-[6px] text-gray-500">About</span>
                <span class="text-[6px] text-gray-500">Services</span>
                <span class="text-[6px] text-gray-500">Contact</span>
              </div>
            </div>
            <div class="px-4 py-3">
              <div class="h-1.5 w-24 bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] rounded mb-1.5"></div>
              <div class="h-1 w-32 bg-gray-700 rounded mb-1"></div>
              <div class="h-1 w-28 bg-gray-700 rounded mb-3"></div>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] rounded text-[5px] text-black font-bold">Get Started</span>
                <span class="px-2 py-1 border border-gray-600 rounded text-[5px] text-gray-400">Learn More</span>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 px-3 pb-2 flex gap-2">
              <div v-for="n in 3" :key="n" class="flex-1 bg-gray-800 rounded p-1.5">
                <div class="w-3 h-3 rounded bg-[#BFA76A]/40 mb-1"></div>
                <div class="h-0.5 w-6 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Info -->
        <div class="p-5">
          <span class="text-[10px] tracking-widest uppercase text-[#BFA76A] font-semibold">
            {{ t('portfolioPage.project1.category') }}
          </span>
          <h2 class="text-white font-bold text-lg mt-1 mb-2 group-hover:text-[#E3D3A3] transition-colors">
            {{ t('portfolioPage.project1.title') }}
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            {{ t('portfolioPage.project1.desc') }}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span v-for="tag in ['Vue 3', 'Laravel', 'Tailwind', 'RWD']" :key="tag"
              class="px-2 py-0.5 bg-white/10 text-gray-300 text-[10px] rounded-full border border-white/10">
              {{ tag }}
            </span>
          </div>
          <button
            @click="scrollToDemos"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-[#BFA76A]
                   hover:text-[#E3D3A3] transition-colors group/btn"
          >
            {{ t('portfolioPage.project1.cta') }}
            <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Card 2: 電商訂購系統 -->
      <div class="group bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden
                  hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        <!-- Browser Mockup -->
        <div class="bg-gray-900 p-2 border-b border-white/10">
          <div class="flex items-center gap-1.5 mb-2 px-1">
            <span class="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
            <span class="ml-2 flex-1 bg-gray-700 rounded text-[10px] text-gray-400 px-2 py-0.5">
              demo.goldenmountain.dev/shop
            </span>
          </div>
          <!-- Mock Website: 電商系統 -->
          <div class="rounded overflow-hidden bg-white h-44 relative">
            <div class="bg-white px-3 py-1.5 flex items-center justify-between border-b border-gray-200">
              <span class="text-[7px] text-gray-800 font-bold">🛍 SHOP</span>
              <div class="flex items-center gap-2">
                <span class="text-[6px] text-gray-500">Products</span>
                <span class="text-[6px] text-gray-500">Cart</span>
                <span class="w-3 h-3 bg-blue-500 rounded-full text-[5px] text-white flex items-center justify-center font-bold">2</span>
              </div>
            </div>
            <div class="px-2 py-2 grid grid-cols-3 gap-1.5">
              <div v-for="n in 6" :key="n" class="bg-gray-100 rounded overflow-hidden">
                <div class="h-7"
                  :class="[
                    n % 3 === 1 ? 'bg-gradient-to-br from-pink-100 to-rose-200' :
                    n % 3 === 2 ? 'bg-gradient-to-br from-blue-100 to-indigo-200' :
                                  'bg-gradient-to-br from-amber-100 to-orange-200'
                  ]">
                </div>
                <div class="px-1 py-0.5">
                  <div class="h-0.5 w-5 bg-gray-400 rounded mb-0.5"></div>
                  <div class="h-0.5 w-3 bg-blue-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Info -->
        <div class="p-5">
          <span class="text-[10px] tracking-widest uppercase text-[#BFA76A] font-semibold">
            {{ t('portfolioPage.project2.category') }}
          </span>
          <h2 class="text-white font-bold text-lg mt-1 mb-2 group-hover:text-[#E3D3A3] transition-colors">
            {{ t('portfolioPage.project2.title') }}
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            {{ t('portfolioPage.project2.desc') }}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span v-for="tag in ['Vue 3', 'Laravel', 'MySQL', 'Stripe']" :key="tag"
              class="px-2 py-0.5 bg-white/10 text-gray-300 text-[10px] rounded-full border border-white/10">
              {{ tag }}
            </span>
          </div>
          <router-link
            :to="'/' + locale + '/demo/shop'"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-[#BFA76A]
                   hover:text-[#E3D3A3] transition-colors group/btn"
          >
            {{ t('portfolioPage.project2.cta') }}
            <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Card 3: 會員後台系統 -->
      <div class="group bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden
                  hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

        <!-- Browser Mockup -->
        <div class="bg-gray-900 p-2 border-b border-white/10">
          <div class="flex items-center gap-1.5 mb-2 px-1">
            <span class="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
            <span class="ml-2 flex-1 bg-gray-700 rounded text-[10px] text-gray-400 px-2 py-0.5">
              demo.goldenmountain.dev/admin
            </span>
          </div>
          <!-- Mock Website: 後台系統 -->
          <div class="rounded overflow-hidden bg-[#1e1e2e] h-44 flex">
            <div class="w-12 bg-[#181825] border-r border-gray-700/50 px-1.5 py-2 flex flex-col gap-1.5">
              <div class="w-full h-2.5 bg-[#BFA76A]/30 rounded"></div>
              <div v-for="n in 4" :key="n" class="w-full h-2 bg-gray-700/50 rounded"></div>
              <div class="mt-auto w-full h-2 bg-gray-700/30 rounded"></div>
            </div>
            <div class="flex-1 p-2">
              <div class="grid grid-cols-3 gap-1 mb-2">
                <div v-for="(color, i) in ['[#BFA76A]/60', 'blue-400/60', 'green-400/60']" :key="i"
                  class="bg-[#2a2a3e] rounded p-1">
                  <div class="h-0.5 w-4 rounded mb-0.5" :class="'bg-' + color"></div>
                  <div class="h-1.5 w-5 rounded" :class="'bg-' + color.replace('60', '80')"></div>
                </div>
              </div>
              <div class="bg-[#2a2a3e] rounded p-1.5 mb-2 h-12 flex items-end gap-0.5">
                <div v-for="(h, i) in [40, 65, 45, 80, 55, 70, 90, 60]" :key="i"
                  class="flex-1 bg-gradient-to-t from-[#BFA76A]/60 to-[#E3D3A3]/30 rounded-t"
                  :style="{ height: h + '%' }">
                </div>
              </div>
              <div class="space-y-0.5">
                <div v-for="n in 3" :key="n" class="bg-[#2a2a3e] rounded px-1.5 py-1 flex gap-1.5 items-center">
                  <div class="w-2 h-2 rounded-full bg-gray-500/50"></div>
                  <div class="h-0.5 flex-1 bg-gray-600/50 rounded"></div>
                  <div class="h-0.5 w-4 bg-green-400/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Info -->
        <div class="p-5">
          <span class="text-[10px] tracking-widest uppercase text-[#BFA76A] font-semibold">
            {{ t('portfolioPage.project3.category') }}
          </span>
          <h2 class="text-white font-bold text-lg mt-1 mb-2 group-hover:text-[#E3D3A3] transition-colors">
            {{ t('portfolioPage.project3.title') }}
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-4">
            {{ t('portfolioPage.project3.desc') }}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span v-for="tag in ['Vue 3', 'Laravel', 'Sanctum', 'Chart.js']" :key="tag"
              class="px-2 py-0.5 bg-white/10 text-gray-300 text-[10px] rounded-full border border-white/10">
              {{ tag }}
            </span>
          </div>
          <router-link
            :to="'/' + locale + '/demo/admin'"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-[#BFA76A]
                   hover:text-[#E3D3A3] transition-colors group/btn"
          >
            {{ t('portfolioPage.project3.cta') }}
            <svg class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>

    </div>

    <!-- Live Demo Section -->
    <div id="live-demos" class="max-w-6xl mx-auto mt-20">
      <div class="text-center mb-10">
        <p class="text-xs tracking-[0.4em] uppercase text-[#BFA76A] mb-3">{{ t('portfolioPage.liveDemo.eyebrow') }}</p>
        <h2 class="text-2xl md:text-3xl font-extrabold tracking-wide">
          <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
            {{ t('portfolioPage.liveDemo.title') }}
          </span>
        </h2>
        <p class="text-gray-400 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
          {{ t('portfolioPage.liveDemo.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <!-- 日式餐廳 -->
        <router-link :to="'/' + locale + '/demo/restaurant'"
          class="group block bg-white/8 backdrop-blur border border-white/15 rounded-2xl overflow-hidden
                 hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="h-36 bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-[url('/japanese_restaurant_demo/restaurant-hero.webp')] bg-cover bg-center opacity-50"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
            <div class="relative text-center">
              <div class="text-3xl font-black tracking-widest"
                style="background: linear-gradient(135deg,#C9A96E,#F0E0B0); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
                翠山
              </div>
              <div class="text-[8px] tracking-[0.4em] text-[#C9A96E]/70 mt-0.5">料理</div>
            </div>
          </div>
          <div class="p-4">
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">{{ t('portfolioPage.liveDemo.restaurant.category') }}</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.restaurant.title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolioPage.liveDemo.restaurant.desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.cta') }}</span>
          </div>
        </router-link>

        <!-- 美甲沙龍 -->
        <router-link :to="'/' + locale + '/demo/nail'"
          class="group block bg-white/8 backdrop-blur border border-white/15 rounded-2xl overflow-hidden
                 hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="h-36 bg-[#FAF8F4] relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-[url('/nail_shop_demo/close-up_of_almond_shaped_nail_Nano_Banana_2_72966.webp')] bg-cover bg-center opacity-60"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent"></div>
            <div class="relative text-center">
              <div class="text-2xl font-black tracking-[0.3em] text-[#2C2825]">IVOIRE</div>
              <div class="text-[8px] tracking-[0.3em] text-[#C4A882] mt-0.5">Nail Studio</div>
            </div>
          </div>
          <div class="p-4">
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">{{ t('portfolioPage.liveDemo.nail.category') }}</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.nail.title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolioPage.liveDemo.nail.desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.cta') }}</span>
          </div>
        </router-link>

        <!-- 健身教練 -->
        <router-link :to="'/' + locale + '/demo/fitness'"
          class="group block bg-white/8 backdrop-blur border border-white/15 rounded-2xl overflow-hidden
                 hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="h-36 bg-[#080808] relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-[url('/fitness_demo/_dramatic_gym_interior_heavy_d_Nano_Banana_2_12315.webp')] bg-cover bg-center opacity-40"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
            <div class="relative text-center">
              <div class="text-2xl font-black tracking-[0.35em] text-white">FORGE</div>
              <div class="text-[8px] tracking-[0.3em] text-[#E8400C] mt-0.5">Personal Training</div>
            </div>
          </div>
          <div class="p-4">
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">{{ t('portfolioPage.liveDemo.fitness.category') }}</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.fitness.title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolioPage.liveDemo.fitness.desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.cta') }}</span>
          </div>
        </router-link>

        <!-- 咖啡廳 -->
        <router-link :to="'/' + locale + '/demo/cafe'"
          class="group block bg-white/8 backdrop-blur border border-white/15 rounded-2xl overflow-hidden
                 hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="h-36 bg-[#F5EDE0] relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-[url('/coffe_shop_demo/_cozy_cafe_interior_warm_morni_Nano_Banana_2_50292.webp')] bg-cover bg-center opacity-50"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#F5EDE0] via-transparent to-transparent"></div>
            <div class="relative text-center">
              <div class="text-2xl font-black tracking-[0.3em] text-[#2A1F14]">SOLEIL</div>
              <div class="text-[8px] tracking-[0.3em] text-[#C8804A] mt-0.5">CAFÉ</div>
            </div>
          </div>
          <div class="p-4">
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">{{ t('portfolioPage.liveDemo.cafe.category') }}</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.cafe.title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolioPage.liveDemo.cafe.desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolioPage.liveDemo.cta') }}</span>
          </div>
        </router-link>

      </div>
    </div>

    <!-- Back to Home -->
    <div class="text-center mt-16">
      <router-link
        :to="'/' + locale"
        class="inline-flex items-center gap-2 text-gray-400 hover:text-[#BFA76A] text-sm transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        {{ t('portfolioPage.backHome') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
function scrollToDemos() {
  document.getElementById('live-demos')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -10;
  pointer-events: none;
}
</style>
