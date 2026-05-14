<template>
  <video v-if="showVideo" autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showVideo = ref(false)

onMounted(() => {
  if (window.innerWidth >= 768) showVideo.value = true
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
