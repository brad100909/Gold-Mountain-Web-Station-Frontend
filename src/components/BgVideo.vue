<template>
  <video v-if="showVideo" autoplay loop muted playsinline class="bg-base bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>
  <div v-else class="bg-base bg-fallback" />
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showVideo = ref(false)

onMounted(() => {
  if (window.matchMedia('(min-width: 768px)').matches) showVideo.value = true
})
</script>

<style scoped>
.bg-base {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  pointer-events: none;
}
.bg-video {
  object-fit: cover;
}
.bg-fallback {
  background: linear-gradient(135deg, #0a0a0f 0%, #0f1117 60%, #0a0a0f 100%);
}
</style>
