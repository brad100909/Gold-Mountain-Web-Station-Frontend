<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>

  <div class="min-h-screen relative z-10">
    <!-- Hero -->
    <div class="pt-24 pb-12 px-6 text-center">
      <p class="text-xs tracking-[0.3em] uppercase text-[#BFA76A] mb-3">
        {{ t('contactPage.eyebrow') }}
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-5 tracking-wide">
        <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
          {{ t('contactPage.title') }}
        </span>
      </h1>
      <p class="text-gray-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        {{ t('contactPage.subtitle') }}
      </p>
    </div>

    <!-- Contact Form (reuse existing component) -->
    <ContactForm />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import ContactForm from '../components/ContactForm.vue'

const { t } = useI18n()
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
