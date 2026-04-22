<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
    {{ t('video.notSupported') }}
  </video>

  <!-- 全頁暗化遮罩 -->
  <div class="fixed inset-0 bg-black/15 z-0 pointer-events-none"></div>

  <div class="min-h-screen text-white relative z-10">

    <!-- ===== Hero ===== -->
    <section
      id="hero"
      class="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden"
    >
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30 pointer-events-none"></div>

      <div class="relative z-10 max-w-4xl mx-auto pt-20">

        <!-- Brand badge -->
        <div class="observe-item opacity-0 inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-[#BFA76A]/40 bg-black/25 backdrop-blur-sm">
          <img src="/_minimalist_geometric_mountain_Nano_Banana_2_54908.webp" alt="Golden Mountain Logo" class="w-5 h-5" />
          <span class="text-sm font-medium tracking-[0.2em] text-[#E3D3A3]">
            {{ t('hero.brandName') }}
          </span>
        </div>

        <!-- Main heading -->
        <h1 class="observe-item opacity-0 text-4xl md:text-6xl font-extrabold mb-6 tracking-[0.06em] leading-tight">
          <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
            {{ t('hero.titleLine1') }}
          </span>
          <br />
          <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
            {{ t('hero.titleLine2') }}
          </span>
        </h1>

        <!-- Description -->
        <p class="observe-item opacity-0 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-white/75">
          {{ t('hero.descLine1') }}<br />
          <strong class="text-white font-semibold">{{ t('hero.descStrong') }}</strong><br />
          <span class="text-white/65">{{ t('hero.descLine3') }}</span>
        </p>

        <!-- CTAs -->
        <div class="observe-item opacity-0 flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#portfolio"
            class="px-8 py-3.5 rounded-full font-semibold tracking-wide transition-all duration-300
                   bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-[#1a1000]
                   hover:brightness-110 hover:scale-105 shadow-lg shadow-[#BFA76A]/25"
          >
            {{ t('hero.ctaPortfolio') }}
          </a>
          <a
            href="#contact"
            class="px-8 py-3.5 rounded-full font-semibold tracking-wide transition-all duration-300
                   border border-white/50 text-white bg-white/10 backdrop-blur-sm
                   hover:bg-white/20 hover:border-white hover:scale-105"
          >
            {{ t('hero.ctaContact') }}
          </a>
        </div>

        <!-- Service tags -->
        <div class="observe-item opacity-0 flex flex-wrap justify-center gap-2">
          <span
            v-for="tag in heroTags"
            :key="tag"
            class="px-4 py-1.5 rounded-full border border-[#BFA76A]/35 bg-black/20 backdrop-blur-sm
                   text-[#E3D3A3] text-xs tracking-wide"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/35">
        <span class="text-[10px] tracking-[0.25em] font-medium uppercase">Scroll</span>
        <div class="scroll-dot-wrapper">
          <div class="scroll-dot"></div>
        </div>
      </div>
    </section>

    <!-- ===== Stats (Hero 下方第一屏) ===== -->
    <section class="py-10 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="observe-item opacity-0 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-lg px-8 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#BFA76A] to-[#E3D3A3] bg-clip-text text-transparent mb-1">
                {{ t('stats.s1Value') }}
              </div>
              <div class="text-white/55 text-xs tracking-wide">{{ t('stats.s1Label') }}</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#BFA76A] to-[#E3D3A3] bg-clip-text text-transparent mb-1">
                {{ t('stats.s2Value') }}
              </div>
              <div class="text-white/55 text-xs tracking-wide">{{ t('stats.s2Label') }}</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#BFA76A] to-[#E3D3A3] bg-clip-text text-transparent mb-1">
                {{ t('stats.s3Value') }}
              </div>
              <div class="text-white/55 text-xs tracking-wide">{{ t('stats.s3Label') }}</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#BFA76A] to-[#E3D3A3] bg-clip-text text-transparent mb-1">
                {{ t('stats.s4Value') }}
              </div>
              <div class="text-white/55 text-xs tracking-wide">{{ t('stats.s4Label') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Portfolio ===== -->
    <section id="portfolio" class="py-24 px-6 text-center">
      <div class="observe-item opacity-0 mb-12">
        <p class="text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-3">Portfolio</p>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          {{ t('portfolio.title') }}
        </h2>
        <p class="text-white/55 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {{ t('portfolio.line1') }}<br />
          {{ t('portfolio.line2') }}
        </p>
      </div>

      <div class="observe-item opacity-0 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">

        <!-- 日式餐廳 -->
        <router-link :to="'/' + locale + '/demo/restaurant'"
          class="group block bg-white/8 backdrop-blur border border-white/15 rounded-2xl overflow-hidden
                 hover:border-[#BFA76A]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="h-36 bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-[url('/japanese_restaurant_demo/restaurant-hero.jpg')] bg-cover bg-center opacity-50"></div>
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
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">Restaurant</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.demo1Title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolio.demo1Desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.viewDemo') }}</span>
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
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">Beauty Salon</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.demo2Title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolio.demo2Desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.viewDemo') }}</span>
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
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">Fitness</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.demo3Title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolio.demo3Desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.viewDemo') }}</span>
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
            <span class="text-[9px] tracking-widest uppercase text-[#BFA76A]">Café</span>
            <h3 class="text-white font-bold text-sm mt-1 mb-1.5 group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.demo4Title') }}</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-3">{{ t('portfolio.demo4Desc') }}</p>
            <span class="text-[#BFA76A] text-xs font-medium group-hover:text-[#E3D3A3] transition-colors">{{ t('portfolio.viewDemo') }}</span>
          </div>
        </router-link>

      </div>

      <!-- 查看更多 -->
      <div class="observe-item opacity-0 mt-10">
        <router-link
          :to="'/' + locale + '/portfolio'"
          class="inline-flex items-center gap-2 text-sm font-medium text-[#BFA76A] hover:text-[#E3D3A3] transition-colors group"
        >
          {{ t('portfolio.viewAll') }}
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>

    <!-- ===== Services ===== -->
    <section class="py-24 px-6">
      <div class="observe-item opacity-0 text-center mb-14">
        <p class="text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-3">Services</p>
        <h2 class="text-2xl md:text-3xl font-bold text-white">
          {{ t('services.title') }}
        </h2>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        <!-- Service 1 -->
        <div
          class="observe-item opacity-0 group relative p-8 rounded-2xl h-full
                 border border-white/10 bg-black/30 backdrop-blur-lg
                 hover:border-[#BFA76A]/50 hover:bg-black/40 hover:-translate-y-2
                 transition-all duration-500 cursor-default"
        >
          <!-- Icon: Globe / Website -->
          <div class="mb-5 w-11 h-11 rounded-xl bg-[#BFA76A]/15 border border-[#BFA76A]/30 flex items-center justify-center">
            <svg class="w-5 h-5 text-[#BFA76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <h3 class="font-bold text-base mb-3 text-white tracking-wide group-hover:text-[#E3D3A3] transition-colors duration-300">
            {{ t('services.service1.title') }}
          </h3>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            {{ t('services.service1.line1') }}<br />
            {{ t('services.service1.line2') }}
          </p>
          <div class="pt-4 border-t border-white/10">
            <p class="text-[#BFA76A]/70 text-xs tracking-wide leading-relaxed">
              {{ t('services.service1.note') }}
            </p>
          </div>
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br from-[#BFA76A]/6 to-transparent pointer-events-none"></div>
        </div>

        <!-- Service 2 (highlighted) -->
        <div
          class="observe-item opacity-0 group relative p-8 rounded-2xl h-full
                 border border-[#BFA76A]/40 bg-black/35 backdrop-blur-lg
                 hover:border-[#BFA76A]/70 hover:bg-black/45 hover:-translate-y-2
                 transition-all duration-500 cursor-default
                 shadow-xl shadow-[#BFA76A]/10"
        >
          <!-- Popular badge -->
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold
                      bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-[#1a1000] whitespace-nowrap tracking-wide">
            {{ t('services.popularBadge') }}
          </div>
          <!-- Icon: Code Bracket -->
          <div class="mb-5 w-11 h-11 rounded-xl bg-[#BFA76A]/20 border border-[#BFA76A]/50 flex items-center justify-center">
            <svg class="w-5 h-5 text-[#BFA76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
          </div>
          <h3 class="font-bold text-base mb-3 text-[#E3D3A3] tracking-wide">
            {{ t('services.service2.title') }}
          </h3>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            {{ t('services.service2.line1') }}<br />
            {{ t('services.service2.line2') }}
          </p>
          <div class="pt-4 border-t border-[#BFA76A]/20">
            <p class="text-[#BFA76A]/70 text-xs tracking-wide leading-relaxed">
              {{ t('services.service2.note') }}
            </p>
          </div>
        </div>

        <!-- Service 3 -->
        <div
          class="observe-item opacity-0 group relative p-8 rounded-2xl h-full
                 border border-white/10 bg-black/30 backdrop-blur-lg
                 hover:border-[#BFA76A]/50 hover:bg-black/40 hover:-translate-y-2
                 transition-all duration-500 cursor-default"
        >
          <!-- Icon: Server Stack -->
          <div class="mb-5 w-11 h-11 rounded-xl bg-[#BFA76A]/15 border border-[#BFA76A]/30 flex items-center justify-center">
            <svg class="w-5 h-5 text-[#BFA76A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3m-13.5 0a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-.75a3 3 0 0 0-3-3" />
            </svg>
          </div>
          <h3 class="font-bold text-base mb-3 text-white tracking-wide group-hover:text-[#E3D3A3] transition-colors duration-300">
            {{ t('services.service3.title') }}
          </h3>
          <p class="text-white/80 text-sm leading-relaxed mb-6">
            {{ t('services.service3.line1') }}<br />
            {{ t('services.service3.line2') }}
          </p>
          <div class="pt-4 border-t border-white/10">
            <p class="text-[#BFA76A]/70 text-xs tracking-wide leading-relaxed">
              {{ t('services.service3.note') }}
            </p>
          </div>
          <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br from-[#BFA76A]/6 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </section>


    <!-- ===== AI Section ===== -->
    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="observe-item opacity-0 text-center mb-12">
          <p class="text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-3">{{ t('aiSection.eyebrow') }}</p>
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ t('aiSection.title') }}</h2>
          <p class="text-white/55 text-sm max-w-xl mx-auto">{{ t('aiSection.subtitle') }}</p>
        </div>

        <div class="observe-item opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div v-for="item in aiItems" :key="item.title"
            class="p-7 rounded-2xl border border-[#BFA76A]/30 bg-black/30 backdrop-blur-lg">
            <div class="text-3xl mb-4">{{ item.icon }}</div>
            <h3 class="text-[#E3D3A3] font-bold text-sm mb-3">{{ item.title }}</h3>
            <p class="text-white/75 text-xs leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Why Me (Case Stories) ===== -->
    <section class="py-20 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="observe-item opacity-0 text-center mb-12">
          <p class="text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-3">{{ t('whyMe.eyebrow') }}</p>
          <h2 class="text-2xl md:text-3xl font-bold text-white">{{ t('whyMe.title') }}</h2>
        </div>

        <div class="observe-item opacity-0 grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Case 1 -->
          <div class="flex flex-col rounded-2xl border border-white/10 bg-black/30 backdrop-blur-lg overflow-hidden">
            <div class="px-6 pt-6 pb-4 border-b border-white/8">
              <span class="text-[9px] tracking-widest uppercase text-[#BFA76A] font-bold">{{ t('whyMe.case1Tag') }}</span>
              <div class="mt-3 flex items-start gap-2">
                <span class="mt-0.5 text-red-400/80 text-xs font-bold shrink-0">✗</span>
                <p class="text-white/50 text-xs leading-relaxed">{{ t('whyMe.case1Problem') }}</p>
              </div>
            </div>
            <div class="px-6 py-5 flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-2">
                <span class="mt-0.5 text-[#BFA76A] text-xs font-bold shrink-0">✓</span>
                <p class="text-white/80 text-xs leading-relaxed">{{ t('whyMe.case1Result') }}</p>
              </div>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="flex flex-col rounded-2xl border border-[#BFA76A]/35 bg-black/35 backdrop-blur-lg overflow-hidden shadow-lg shadow-[#BFA76A]/8">
            <div class="px-6 pt-6 pb-4 border-b border-white/8">
              <span class="text-[9px] tracking-widest uppercase text-[#BFA76A] font-bold">{{ t('whyMe.case2Tag') }}</span>
              <div class="mt-3 flex items-start gap-2">
                <span class="mt-0.5 text-red-400/80 text-xs font-bold shrink-0">✗</span>
                <p class="text-white/50 text-xs leading-relaxed">{{ t('whyMe.case2Problem') }}</p>
              </div>
            </div>
            <div class="px-6 py-5 flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-2">
                <span class="mt-0.5 text-[#BFA76A] text-xs font-bold shrink-0">✓</span>
                <p class="text-white/80 text-xs leading-relaxed">{{ t('whyMe.case2Result') }}</p>
              </div>
            </div>
          </div>

          <!-- Case 3 -->
          <div class="flex flex-col rounded-2xl border border-white/10 bg-black/30 backdrop-blur-lg overflow-hidden">
            <div class="px-6 pt-6 pb-4 border-b border-white/8">
              <span class="text-[9px] tracking-widests uppercase text-[#BFA76A] font-bold">{{ t('whyMe.case3Tag') }}</span>
              <div class="mt-3 flex items-start gap-2">
                <span class="mt-0.5 text-red-400/80 text-xs font-bold shrink-0">✗</span>
                <p class="text-white/50 text-xs leading-relaxed">{{ t('whyMe.case3Problem') }}</p>
              </div>
            </div>
            <div class="px-6 py-5 flex-1 flex flex-col justify-between">
              <div class="flex items-start gap-2">
                <span class="mt-0.5 text-[#BFA76A] text-xs font-bold shrink-0">✓</span>
                <p class="text-white/80 text-xs leading-relaxed">{{ t('whyMe.case3Result') }}</p>
              </div>
            </div>
          </div>

        </div>

        <div class="observe-item opacity-0 mt-10 text-center">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#BFA76A] hover:text-[#E3D3A3] transition-colors group"
          >
            {{ t('whyMe.cta') }}
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Gradient transition to footer -->
    <div class="h-20 bg-gradient-to-b from-transparent to-[#0f1117] pointer-events-none"></div>

    <!-- Contact -->
    <ContactForm />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from '../components/ContactForm.vue'

const { t, locale } = useI18n()

const aiItems = computed(() => [
  { icon: t('aiSection.item1Icon'), title: t('aiSection.item1Title'), desc: t('aiSection.item1Desc') },
  { icon: t('aiSection.item2Icon'), title: t('aiSection.item2Title'), desc: t('aiSection.item2Desc') },
  { icon: t('aiSection.item3Icon'), title: t('aiSection.item3Title'), desc: t('aiSection.item3Desc') },
  { icon: t('aiSection.item4Icon'), title: t('aiSection.item4Title'), desc: t('aiSection.item4Desc') },
])

const heroTags = computed(() => [
  t('hero.tag1'),
  t('hero.tag2'),
  t('hero.tag3'),
  t('hero.tag4'),
  t('hero.tag5'),
])

onMounted(() => {
  const items = document.querySelectorAll('.observe-item')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('animate-fade-out-down')
          entry.target.classList.add('animate-fade-in-up')
        } else {
          entry.target.classList.remove('animate-fade-in-up')
          entry.target.classList.add('animate-fade-out-down')
        }
      })
    },
    { threshold: 0.15 }
  )
  items.forEach(el => observer.observe(el))
})
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

/* Scroll indicator */
.scroll-dot-wrapper {
  width: 20px;
  height: 32px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  animation: scrollDot 1.8s ease-in-out infinite;
}

@keyframes scrollDot {
  0%   { opacity: 1; transform: translateY(0); }
  80%  { opacity: 0; transform: translateY(10px); }
  100% { opacity: 0; transform: translateY(10px); }
}
</style>
