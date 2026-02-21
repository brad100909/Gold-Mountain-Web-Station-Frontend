<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
    {{ t('video.notSupported') }}
  </video>

  <div class="min-h-screen text-gray-800 relative z-10">
    <!-- Hero -->
    <section id="hero" class="py-28 px-6 text-center relative bg-transparent">
      <div class="absolute inset-0 bg-black opacity-30"></div>

      <div class="relative z-10">
        <h1 class="observe-item opacity-0 text-4xl md:text-5xl font-extrabold mb-6 tracking-[0.10em]">
          <span
            class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent"
          >
            {{ t('hero.titleLine1') }}<br />
            {{ t('hero.titleLine2') }}
          </span>
        </h1>

        <p class="observe-item opacity-0 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
          {{ t('hero.descLine1') }}<br />
          <strong>{{ t('hero.descStrong') }}</strong><br />
          <span class="font-semibold">
            {{ t('hero.descLine3') }}
          </span>
        </p>

        <div class="flex justify-center gap-4">
          <a
            href="#portfolio"
            class="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            {{ t('hero.ctaPortfolio') }}
          </a>
          <a
            href="#contact"
            class="px-8 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition"
          >
            {{ t('hero.ctaContact') }}
          </a>
        </div>
      </div>
    </section>

    <!-- 專案與系統介面展示 -->
    <section id="portfolio" class="py-20 px-6 text-center">
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-100">
        {{ t('portfolio.title') }}
      </h2>

      <p class="text-gray-300 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed">
        {{ t('portfolio.line1') }}<br />
        {{ t('portfolio.line2') }}<br />
        {{ t('portfolio.line3') }}
      </p>

      <div class="max-w-5xl mx-auto flex justify-center">
        <SwiperGallery />
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 px-6 bg-transparent">
      <h2 class="text-2xl font-semibold text-center mb-12 text-gray-100">
        {{ t('services.title') }}
      </h2>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- Service 1 -->
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            {{ t('services.service1.title') }}
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            {{ t('services.service1.line1') }}<br />
            {{ t('services.service1.line2') }}
          </p>
          <p class="text-center text-gray-400 text-sm mt-6">
            {{ t('services.service1.note') }}
          </p>
        </div>

        <!-- Service 2 -->
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            {{ t('services.service2.title') }}
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            {{ t('services.service2.line1') }}<br />
            {{ t('services.service2.line2') }}
          </p>
          <p class="text-center text-gray-400 text-sm mt-6">
            {{ t('services.service2.note') }}
          </p>
        </div>

        <!-- Service 3 -->
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            {{ t('services.service3.title') }}
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            {{ t('services.service3.line1') }}<br />
            {{ t('services.service3.line2') }}
          </p>
          <p class="text-center text-gray-400 text-sm mt-6">
            {{ t('services.service3.note') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Why Me -->
    <section class="py-12 px-6 bg-transparent">
      <div class="max-w-4xl mx-auto bg-white/80 p-8 rounded-lg shadow-md">
        <h2 class="text-xl md:text-2xl font-semibold text-center tracking-wide mb-8 text-gray-900">
          {{ t('whyMe.title') }}
        </h2>

        <div class="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            {{ t('whyMe.p1Prefix') }}
            <strong>{{ t('whyMe.p1Strong') }}</strong>。
          </p>

          <p>
            {{ t('whyMe.p2') }}
          </p>

          <p>
            {{ t('whyMe.p3Line1') }}<br />
            {{ t('whyMe.p3Line2') }}
          </p>

          <p class="pt-4 text-center">
            <a href="#contact" class="font-medium text-green-700 hover:text-green-800 transition">
              {{ t('whyMe.cta') }}
            </a>
          </p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <ContactForm />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SwiperGallery from '../components/SwiperGallery.vue'
import ContactForm from '../components/ContactForm.vue'

const { t } = useI18n()

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
    { threshold: 0.2 }
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
</style>