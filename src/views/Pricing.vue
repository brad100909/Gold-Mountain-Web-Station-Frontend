<template>
  <BgVideo />

  <div class="fixed inset-0 bg-black/55 z-0 pointer-events-none"></div>

  <div class="min-h-screen relative z-10 pt-24 pb-20 px-6">

    <!-- Entry Offer Banner -->
    <div class="max-w-3xl mx-auto mb-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 rounded-2xl
                  border border-[#BFA76A]/50 bg-[#BFA76A]/10 backdrop-blur-sm">
        <p class="text-sm text-[#E3D3A3] leading-relaxed text-center sm:text-left">
          {{ t('pricingPage.entryOffer') }}
        </p>
        <router-link
          :to="'/' + locale + '/contact'"
          class="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide
                 bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-[#1a1000]
                 hover:brightness-110 transition-all whitespace-nowrap"
        >
          {{ t('pricingPage.entryOfferCta') }}
        </router-link>
      </div>
    </div>

    <!-- Hero -->
    <div class="text-center mb-14">
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

    <!-- Pain Points -->
    <div class="max-w-4xl mx-auto mb-16">
      <p class="text-center text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-8">
        {{ t('pricingPage.painLabel') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="pain in painPoints" :key="pain.title"
          class="p-6 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm">
          <div class="text-2xl mb-3">{{ pain.icon }}</div>
          <h3 class="text-white font-semibold text-sm mb-2">{{ pain.title }}</h3>
          <p class="text-white/55 text-xs leading-relaxed">{{ pain.desc }}</p>
        </div>
      </div>
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
          <div class="text-xs text-gray-400 border-t border-white/10 pt-4 mb-3">
            {{ plan.note }}
          </div>

          <!-- AI tag (ot2 only) -->
          <div v-if="plan.aiTag" class="mb-5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wide
                         bg-[#BFA76A]/15 border border-[#BFA76A]/40 text-[#E3D3A3]">
              {{ plan.aiTag }}
            </span>
          </div>

          <!-- CTA -->
          <router-link
            :to="'/' + locale + '/contact'"
            class="block text-center py-3 rounded-xl text-sm font-semibold transition-all"
            :class="plan.highlight
              ? 'bg-[#BFA76A] text-gray-900 hover:bg-[#CDB87A]'
              : 'border border-white/30 text-white hover:bg-white/10'"
          >
            {{ plan.cta }}
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

      <!-- 月付 / 年付 切換 -->
      <div class="flex justify-center mb-10">
        <div class="flex items-center bg-white/10 border border-white/20 rounded-full p-1 text-sm font-medium">
          <button
            @click="billing = 'monthly'"
            class="px-5 py-2 rounded-full transition-all"
            :class="billing === 'monthly' ? 'bg-white/20 text-white' : 'text-gray-400 hover:text-white'"
          >
            {{ t('pricingPage.billingMonthly') }}
          </button>
          <button
            @click="billing = 'annual'"
            class="px-5 py-2 rounded-full transition-all flex items-center gap-2"
            :class="billing === 'annual' ? 'bg-[#BFA76A] text-gray-900' : 'text-gray-400 hover:text-white'"
          >
            {{ t('pricingPage.billingAnnual') }}
            <span class="text-xs font-bold px-2 py-0.5 rounded-full"
              :class="billing === 'annual' ? 'bg-gray-900/20 text-gray-900' : 'bg-[#BFA76A]/20 text-[#BFA76A]'"
            >
              {{ t('pricingPage.annualSave') }}
            </span>
          </button>
        </div>
      </div>

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
              <span class="text-4xl font-extrabold text-white">
                {{ billing === 'annual' ? plan.priceAnnual : plan.price }}
              </span>
              <span class="text-gray-400 text-sm mb-1">
                / {{ billing === 'annual' ? t('pricingPage.year') : t('pricingPage.month') }}
              </span>
            </div>
            <div class="text-gray-400 text-xs mt-1">
              {{ billing === 'annual' ? t('pricingPage.annualNote') : t('pricingPage.cancelAnytime') }}
            </div>
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

    <!-- AI Section -->
    <div class="max-w-4xl mx-auto mt-20">
      <div class="rounded-2xl border border-[#BFA76A]/30 bg-[#BFA76A]/5 backdrop-blur-sm p-10">
        <div class="text-center mb-10">
          <p class="text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-3">{{ t('aiSection.eyebrow') }}</p>
          <h2 class="text-2xl font-bold text-white mb-3">{{ t('aiSection.title') }}</h2>
          <p class="text-white/55 text-sm max-w-xl mx-auto">{{ t('aiSection.subtitle') }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div v-for="item in aiItems" :key="item.title" class="p-5 rounded-xl border border-[#BFA76A]/30 bg-black/35">
            <div class="text-2xl mb-3">{{ item.icon }}</div>
            <h3 class="text-[#E3D3A3] font-bold text-sm mb-2">{{ item.title }}</h3>
            <p class="text-white/80 text-xs leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
        <div class="text-center">
          <p class="text-white/35 text-xs mb-4">{{ t('aiSection.note') }}</p>
          <router-link :to="'/' + locale + '/contact'"
            class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold
                   border border-[#BFA76A]/50 text-[#BFA76A] hover:bg-[#BFA76A]/10 transition-all">
            {{ t('aiSection.cta') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Proof / Outcomes -->
    <div class="max-w-4xl mx-auto mt-20 mb-20">
      <p class="text-center text-xs font-bold tracking-[0.35em] text-[#BFA76A] uppercase mb-8">
        {{ t('pricingPage.proofLabel') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="proof in proofItems" :key="proof.title"
          class="p-6 rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm flex flex-col gap-3">
          <div class="text-2xl">{{ proof.icon }}</div>
          <h3 class="text-[#E3D3A3] font-bold text-sm">{{ proof.title }}</h3>
          <p class="text-white/65 text-xs leading-relaxed flex-1">{{ proof.desc }}</p>
          <span class="text-[10px] tracking-widest text-[#BFA76A]/70 uppercase border border-[#BFA76A]/25 rounded-full px-3 py-1 self-start">
            {{ proof.tag }}
          </span>
        </div>
      </div>
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

    <!-- Final CTA -->
    <div class="max-w-2xl mx-auto mt-16">
      <div class="relative p-10 rounded-3xl overflow-hidden border border-[#BFA76A]/30 bg-black/30 backdrop-blur-lg text-center">
        <div class="absolute -top-12 -right-12 w-48 h-48 bg-[#BFA76A]/8 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-[#BFA76A]/6 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10">
          <h2 class="text-2xl font-bold text-white mb-3">{{ t('pricingPage.finalCtaTitle') }}</h2>
          <p class="text-white/60 text-sm leading-relaxed mb-8 max-w-lg mx-auto">{{ t('pricingPage.finalCtaDesc') }}</p>
          <div class="flex justify-center">
            <router-link
              :to="'/' + locale + '/contact'"
              class="px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all
                     bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-[#1a1000]
                     hover:brightness-110 hover:scale-105 shadow-lg shadow-[#BFA76A]/25"
            >
              {{ t('pricingPage.finalCtaBtn') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BgVideo from '../components/BgVideo.vue'

const { t, locale } = useI18n()

const tab = ref('onetime')
const billing = ref('monthly')
const openFaq = ref(null)

const aiItems = computed(() => [
  { icon: t('aiSection.item1Icon'), title: t('aiSection.item1Title'), desc: t('aiSection.item1Desc') },
  { icon: t('aiSection.item2Icon'), title: t('aiSection.item2Title'), desc: t('aiSection.item2Desc') },
  { icon: t('aiSection.item3Icon'), title: t('aiSection.item3Title'), desc: t('aiSection.item3Desc') },
  { icon: t('aiSection.item4Icon'), title: t('aiSection.item4Title'), desc: t('aiSection.item4Desc') },
])

const painPoints = computed(() => [
  { icon: t('pricingPage.pain1Icon'), title: t('pricingPage.pain1Title'), desc: t('pricingPage.pain1Desc') },
  { icon: t('pricingPage.pain2Icon'), title: t('pricingPage.pain2Title'), desc: t('pricingPage.pain2Desc') },
  { icon: t('pricingPage.pain3Icon'), title: t('pricingPage.pain3Title'), desc: t('pricingPage.pain3Desc') },
])

const proofItems = computed(() => [
  { icon: t('pricingPage.proof1Icon'), title: t('pricingPage.proof1Title'), desc: t('pricingPage.proof1Desc'), tag: t('pricingPage.proof1Tag') },
  { icon: t('pricingPage.proof2Icon'), title: t('pricingPage.proof2Title'), desc: t('pricingPage.proof2Desc'), tag: t('pricingPage.proof2Tag') },
  { icon: t('pricingPage.proof3Icon'), title: t('pricingPage.proof3Title'), desc: t('pricingPage.proof3Desc'), tag: t('pricingPage.proof3Tag') },
])

const onetimePlans = computed(() => [
  {
    icon: '🌱',
    name: t('pricingPage.ot1.name'),
    desc: t('pricingPage.ot1.desc'),
    price: '7,000+',
    highlight: false,
    cta: t('pricingPage.ctaOt1'),
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
    price: '20,000+',
    highlight: true,
    cta: t('pricingPage.ctaOt2'),
    aiTag: t('pricingPage.ot2.aiTag'),
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
    price: '40,000+',
    highlight: false,
    cta: t('pricingPage.ctaOt3'),
    aiTag: t('pricingPage.ot3.aiTag'),
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
    price: '面議',
    highlight: false,
    cta: t('pricingPage.ctaOt4'),
    aiTag: t('pricingPage.ot4.aiTag'),
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
    price: '800',
    priceAnnual: '8,000',
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
    price: '2,000',
    priceAnnual: '20,000',
    highlight: true,
    features: [
      t('pricingPage.sub2.f1'),
      t('pricingPage.sub2.f2'),
      t('pricingPage.sub2.f3'),
      t('pricingPage.sub2.f4'),
    ],
    note: t('pricingPage.sub2.note'),
  },
  {
    icon: '👑',
    name: t('pricingPage.sub3.name'),
    desc: t('pricingPage.sub3.desc'),
    price: '5,000',
    priceAnnual: '50,000',
    highlight: false,
    features: [
      t('pricingPage.sub3.f1'),
      t('pricingPage.sub3.f2'),
      t('pricingPage.sub3.f3'),
      t('pricingPage.sub3.f4'),
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

