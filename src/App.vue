<template>
  <div id="app">
    <Header />
    <div class="pt-10"> <!-- 上方留 5rem 間距 -->
      <router-view />
    </div>
    <ChatWidget />
  </div>
</template>


<script setup>
import Header from './components/Header.vue'
import ChatWidget from './components/ChatWidget.vue'
</script>