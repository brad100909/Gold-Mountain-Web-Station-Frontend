<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>

  <!-- 影片遮罩，讓文字更清晰 -->
  <div class="fixed inset-0 bg-black/50 z-0 pointer-events-none"></div>

  <div class="min-h-screen relative z-10 pt-24 pb-20 px-6">

    <!-- Hero -->
    <div class="text-center mb-20">
      <p class="text-xs tracking-[0.3em] uppercase text-[#BFA76A] mb-3">
        {{ t('servicesPage.eyebrow') }}
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-5 tracking-wide">
        <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
          {{ t('servicesPage.title') }}
        </span>
      </h1>
      <p class="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {{ t('servicesPage.subtitle') }}
      </p>
    </div>

    <!-- Service Cards -->
    <div class="max-w-5xl mx-auto space-y-8 mb-24">

      <div
        v-for="(svc, i) in serviceItems" :key="i"
        class="group bg-white/8 backdrop-blur border border-white/15 rounded-2xl p-8 md:p-10
               hover:border-[#BFA76A]/50 transition-all duration-300"
      >
        <div class="flex flex-col md:flex-row md:items-start gap-6">

          <!-- Icon + number -->
          <div class="shrink-0 flex flex-col items-center gap-2">
            <div class="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl group-hover:bg-[#BFA76A]/20 transition-colors">
              {{ svc.icon }}
            </div>
            <span class="text-[10px] text-[#BFA76A] tracking-widest font-bold">0{{ i + 1 }}</span>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide">{{ svc.title }}</h2>
            <p class="text-[#BFA76A] text-sm font-medium mb-4">{{ svc.tagline }}</p>
            <p class="text-gray-100 text-sm md:text-base leading-relaxed mb-5">{{ svc.desc }}</p>

            <!-- Feature list -->
            <ul class="space-y-2 mb-6">
              <li v-for="(feat, j) in svc.features" :key="j" class="flex items-start gap-2 text-sm text-gray-100">
                <span class="text-[#BFA76A] mt-0.5 shrink-0">✦</span>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <!-- Note badge -->
            <div class="inline-block px-4 py-2 bg-white/8 border border-white/15 rounded-full text-xs text-gray-300">
              {{ svc.note }}
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Process section -->
    <div class="max-w-4xl mx-auto mb-24">
      <p class="text-xs tracking-[0.3em] uppercase text-[#BFA76A] mb-3 text-center">
        {{ t('servicesPage.processEyebrow') }}
      </p>
      <h2 class="text-2xl md:text-3xl font-bold text-center text-white mb-12 tracking-wide">
        {{ t('servicesPage.processTitle') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(step, i) in processSteps" :key="i"
          class="relative bg-white/8 border border-white/15 rounded-2xl p-6 text-center"
        >
          <!-- Connector line (desktop) -->
          <div v-if="i < processSteps.length - 1"
            class="hidden md:block absolute top-8 -right-2 w-4 h-px bg-[#BFA76A]/40 z-10">
          </div>
          <div class="w-10 h-10 rounded-full bg-[#BFA76A]/20 border border-[#BFA76A]/40 flex items-center justify-center text-[#BFA76A] font-bold text-sm mx-auto mb-4">
            {{ i + 1 }}
          </div>
          <div class="text-lg mb-2">{{ step.icon }}</div>
          <div class="text-white font-semibold text-sm mb-1">{{ step.title }}</div>
          <div class="text-gray-300 text-xs leading-relaxed">{{ step.desc }}</div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="max-w-2xl mx-auto text-center">
      <div class="bg-white/8 backdrop-blur border border-white/15 rounded-2xl p-10">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
          {{ t('servicesPage.ctaTitle') }}
        </h2>
        <p class="text-gray-100 mb-8 leading-relaxed">{{ t('servicesPage.ctaDesc') }}</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <router-link
            :to="'/' + locale"
            class="px-8 py-3 bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-white rounded-lg font-semibold hover:opacity-90 transition text-sm"
          >
            {{ t('servicesPage.ctaBtn') }}
          </router-link>
          <router-link
            :to="'/' + locale + '/portfolio'"
            class="px-8 py-3 border border-white/30 text-gray-100 rounded-lg font-medium hover:bg-white/10 transition text-sm"
          >
            {{ t('servicesPage.ctaBtnSecondary') }}
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()

const serviceItems = computed(() => [
  {
    icon: '🎨',
    title: t('servicesPage.svc1.title'),
    tagline: t('servicesPage.svc1.tagline'),
    desc: t('servicesPage.svc1.desc'),
    features: [
      t('servicesPage.svc1.f1'),
      t('servicesPage.svc1.f2'),
      t('servicesPage.svc1.f3'),
      t('servicesPage.svc1.f4'),
    ],
    note: t('servicesPage.svc1.note'),
  },
  {
    icon: '⚙️',
    title: t('servicesPage.svc2.title'),
    tagline: t('servicesPage.svc2.tagline'),
    desc: t('servicesPage.svc2.desc'),
    features: [
      t('servicesPage.svc2.f1'),
      t('servicesPage.svc2.f2'),
      t('servicesPage.svc2.f3'),
      t('servicesPage.svc2.f4'),
      t('servicesPage.svc2.f5'),
    ],
    note: t('servicesPage.svc2.note'),
  },
  {
    icon: '🖥️',
    title: t('servicesPage.svc3.title'),
    tagline: t('servicesPage.svc3.tagline'),
    desc: t('servicesPage.svc3.desc'),
    features: [
      t('servicesPage.svc3.f1'),
      t('servicesPage.svc3.f2'),
      t('servicesPage.svc3.f3'),
      t('servicesPage.svc3.f4'),
    ],
    note: t('servicesPage.svc3.note'),
  },
])

const processSteps = computed(() => [
  { icon: '💬', title: t('servicesPage.step1'), desc: t('servicesPage.step1Desc') },
  { icon: '📐', title: t('servicesPage.step2'), desc: t('servicesPage.step2Desc') },
  { icon: '🛠️', title: t('servicesPage.step3'), desc: t('servicesPage.step3Desc') },
  { icon: '🚀', title: t('servicesPage.step4'), desc: t('servicesPage.step4Desc') },
])
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
