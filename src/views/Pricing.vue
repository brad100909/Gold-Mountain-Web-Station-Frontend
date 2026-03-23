<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>

  <div class="fixed inset-0 bg-black/55 z-0 pointer-events-none"></div>

  <div class="min-h-screen relative z-10 pt-24 pb-20 px-6">

    <!-- Hero -->
    <div class="text-center mb-16">
      <p class="text-xs tracking-[0.3em] uppercase text-[#BFA76A] mb-3">
        {{ t('pricingPage.eyebrow') }}
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-5 tracking-wide">
        <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
          {{ t('pricingPage.title') }}
        </span>
      </h1>
      <p class="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        {{ t('pricingPage.subtitle') }}
      </p>
    </div>

    <!-- Toggle -->
    <div class="flex justify-center mb-12">
      <div class="flex items-center bg-white/10 border border-white/20 rounded-full p-1 text-sm font-medium">
        <button
          @click="tab = 'onetime'"
          class="px-5 py-2 rounded-full transition-all"
          :class="tab === 'onetime' ? 'bg-[#BFA76A] text-gray-900' : 'text-gray-300 hover:text-white'"
        >
          {{ t('pricingPage.tabOnetime') }}
        </button>
        <button
          @click="tab = 'subscription'"
          class="px-5 py-2 rounded-full transition-all"
          :class="tab === 'subscription' ? 'bg-[#BFA76A] text-gray-900' : 'text-gray-300 hover:text-white'"
        >
          {{ t('pricingPage.tabSubscription') }}
        </button>
      </div>
    </div>

    <!-- One-time Plans -->
    <div v-if="tab === 'onetime'" class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(plan, i) in onetimePlans" :key="i"
          class="relative flex flex-col bg-white/8 backdrop-blur border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
          :class="plan.highlight
            ? 'border-[#BFA76A]/70 shadow-lg shadow-[#BFA76A]/10'
            : 'border-white/15'"
        >
          <!-- Popular badge -->
          <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-[#BFA76A] text-gray-900 text-xs font-bold px-4 py-1 rounded-full tracking-wide">
              {{ t('pricingPage.popular') }}
            </span>
          </div>

          <div class="mb-5">
            <div class="text-2xl mb-2">{{ plan.icon }}</div>
            <div class="text-white font-bold text-lg mb-1">{{ plan.name }}</div>
            <div class="text-gray-300 text-xs leading-relaxed">{{ plan.desc }}</div>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <div class="flex items-end gap-1">
              <span class="text-gray-400 text-sm">NT$</span>
              <span class="text-4xl font-extrabold text-white">{{ plan.price }}</span>
            </div>
            <div class="text-gray-400 text-xs mt-1">{{ t('pricingPage.oneTimePayment') }}</div>
          </div>

          <!-- Features -->
          <ul class="space-y-2.5 mb-8 flex-1">
            <li v-for="(feat, j) in plan.features" :key="j" class="flex items-start gap-2 text-sm">
              <span class="text-[#BFA76A] shrink-0 mt-0.5">✓</span>
              <span class="text-gray-200">{{ feat }}</span>
            </li>
          </ul>

          <!-- Note -->
          <div class="text-xs text-gray-400 border-t border-white/10 pt-4 mb-5">
            {{ plan.note }}
          </div>

          <!-- CTA -->
          <router-link
            :to="'/' + locale + '/contact'"
            class="block text-center py-3 rounded-xl text-sm font-semibold transition-all"
            :class="plan.highlight
              ? 'bg-[#BFA76A] text-gray-900 hover:bg-[#CDB87A]'
              : 'border border-white/30 text-white hover:bg-white/10'"
          >
            {{ t('pricingPage.cta') }}
          </router-link>
        </div>
      </div>

      <!-- Custom note -->
      <p class="text-center text-gray-400 text-sm mt-8">
        {{ t('pricingPage.customNote') }}
      </p>
    </div>

    <!-- Subscription Plans -->
    <div v-if="tab === 'subscription'" class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(plan, i) in subscriptionPlans" :key="i"
          class="relative flex flex-col bg-white/8 backdrop-blur border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
          :class="plan.highlight
            ? 'border-[#BFA76A]/70 shadow-lg shadow-[#BFA76A]/10'
            : 'border-white/15'"
        >
          <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="bg-[#BFA76A] text-gray-900 text-xs font-bold px-4 py-1 rounded-full tracking-wide">
              {{ t('pricingPage.popular') }}
            </span>
          </div>

          <div class="mb-5">
            <div class="text-2xl mb-2">{{ plan.icon }}</div>
            <div class="text-white font-bold text-lg mb-1">{{ plan.name }}</div>
            <div class="text-gray-300 text-xs leading-relaxed">{{ plan.desc }}</div>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <div class="flex items-end gap-1">
              <span class="text-gray-400 text-sm">NT$</span>
              <span class="text-4xl font-extrabold text-white">{{ plan.price }}</span>
              <span class="text-gray-400 text-sm mb-1">/ {{ t('pricingPage.month') }}</span>
            </div>
            <div class="text-gray-400 text-xs mt-1">{{ t('pricingPage.cancelAnytime') }}</div>
          </div>

          <!-- Features -->
          <ul class="space-y-2.5 mb-8 flex-1">
            <li v-for="(feat, j) in plan.features" :key="j" class="flex items-start gap-2 text-sm">
              <span class="text-[#BFA76A] shrink-0 mt-0.5">✓</span>
              <span class="text-gray-200">{{ feat }}</span>
            </li>
          </ul>

          <!-- Note -->
          <div class="text-xs text-gray-400 border-t border-white/10 pt-4 mb-5">
            {{ plan.note }}
          </div>

          <!-- CTA -->
          <router-link
            :to="'/' + locale + '/contact'"
            class="block text-center py-3 rounded-xl text-sm font-semibold transition-all"
            :class="plan.highlight
              ? 'bg-[#BFA76A] text-gray-900 hover:bg-[#CDB87A]'
              : 'border border-white/30 text-white hover:bg-white/10'"
          >
            {{ t('pricingPage.cta') }}
          </router-link>
        </div>
      </div>

      <!-- Subscription note -->
      <p class="text-center text-gray-400 text-sm mt-8">
        {{ t('pricingPage.subscriptionNote') }}
      </p>
    </div>

    <!-- FAQ -->
    <div class="max-w-2xl mx-auto mt-20">
      <h2 class="text-center text-white font-bold text-xl mb-8 tracking-wide">{{ t('pricingPage.faqTitle') }}</h2>
      <div class="space-y-3">
        <div
          v-for="(faq, i) in faqs" :key="i"
          class="bg-white/8 border border-white/15 rounded-xl overflow-hidden"
        >
          <button
            @click="openFaq = openFaq === i ? null : i"
            class="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            <span>{{ faq.q }}</span>
            <svg
              class="w-4 h-4 text-[#BFA76A] shrink-0 transition-transform duration-200"
              :class="openFaq === i ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="openFaq === i" class="px-5 pb-4 text-sm text-gray-300 leading-relaxed">
            {{ faq.a }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const tab = ref('onetime')
const openFaq = ref(null)

const onetimePlans = computed(() => [
  {
    icon: '🌱',
    name: t('pricingPage.ot1.name'),
    desc: t('pricingPage.ot1.desc'),
    price: '28,000+',
    highlight: false,
    features: [
      t('pricingPage.ot1.f1'),
      t('pricingPage.ot1.f2'),
      t('pricingPage.ot1.f3'),
      t('pricingPage.ot1.f4'),
      t('pricingPage.ot1.f5'),
    ],
    note: t('pricingPage.ot1.note'),
  },
  {
    icon: '📅',
    name: t('pricingPage.ot2.name'),
    desc: t('pricingPage.ot2.desc'),
    price: '45,000+',
    highlight: true,
    features: [
      t('pricingPage.ot2.f1'),
      t('pricingPage.ot2.f2'),
      t('pricingPage.ot2.f3'),
      t('pricingPage.ot2.f4'),
      t('pricingPage.ot2.f5'),
    ],
    note: t('pricingPage.ot2.note'),
  },
  {
    icon: '🏢',
    name: t('pricingPage.ot3.name'),
    desc: t('pricingPage.ot3.desc'),
    price: '68,000+',
    highlight: false,
    features: [
      t('pricingPage.ot3.f1'),
      t('pricingPage.ot3.f2'),
      t('pricingPage.ot3.f3'),
      t('pricingPage.ot3.f4'),
      t('pricingPage.ot3.f5'),
      t('pricingPage.ot3.f6'),
    ],
    note: t('pricingPage.ot3.note'),
  },
  {
    icon: '⚙️',
    name: t('pricingPage.ot4.name'),
    desc: t('pricingPage.ot4.desc'),
    price: '180,000+',
    highlight: false,
    features: [
      t('pricingPage.ot4.f1'),
      t('pricingPage.ot4.f2'),
      t('pricingPage.ot4.f3'),
      t('pricingPage.ot4.f4'),
      t('pricingPage.ot4.f5'),
      t('pricingPage.ot4.f6'),
    ],
    note: t('pricingPage.ot4.note'),
  },
])

const subscriptionPlans = computed(() => [
  {
    icon: '🛡️',
    name: t('pricingPage.sub1.name'),
    desc: t('pricingPage.sub1.desc'),
    price: '2,500',
    highlight: false,
    features: [
      t('pricingPage.sub1.f1'),
      t('pricingPage.sub1.f2'),
      t('pricingPage.sub1.f3'),
      t('pricingPage.sub1.f4'),
    ],
    note: t('pricingPage.sub1.note'),
  },
  {
    icon: '🚀',
    name: t('pricingPage.sub2.name'),
    desc: t('pricingPage.sub2.desc'),
    price: '4,500',
    highlight: true,
    features: [
      t('pricingPage.sub2.f1'),
      t('pricingPage.sub2.f2'),
      t('pricingPage.sub2.f3'),
      t('pricingPage.sub2.f4'),
      t('pricingPage.sub2.f5'),
    ],
    note: t('pricingPage.sub2.note'),
  },
  {
    icon: '👑',
    name: t('pricingPage.sub3.name'),
    desc: t('pricingPage.sub3.desc'),
    price: '8,000',
    highlight: false,
    features: [
      t('pricingPage.sub3.f1'),
      t('pricingPage.sub3.f2'),
      t('pricingPage.sub3.f3'),
      t('pricingPage.sub3.f4'),
      t('pricingPage.sub3.f5'),
      t('pricingPage.sub3.f6'),
    ],
    note: t('pricingPage.sub3.note'),
  },
])

const faqs = computed(() => [
  { q: t('pricingPage.faq1q'), a: t('pricingPage.faq1a') },
  { q: t('pricingPage.faq2q'), a: t('pricingPage.faq2a') },
  { q: t('pricingPage.faq3q'), a: t('pricingPage.faq3a') },
  { q: t('pricingPage.faq4q'), a: t('pricingPage.faq4a') },
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
