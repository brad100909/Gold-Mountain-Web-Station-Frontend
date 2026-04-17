<template>
  <div id="app">
    <Header />
    <div class="pt-10">
      <router-view />
    </div>
    <ChatWidget />

    <!-- LINE 浮動按鈕（全站常駐）-->
    <!-- 替換 href 為你的 LINE 連結：https://line.me/ti/p/~你的LINE_ID -->
    <a
      href="https://line.me/ti/p/~@980iqvmh"
      target="_blank"
      rel="noopener noreferrer"
      class="line-float-btn"
      aria-label="LINE 聯絡我們"
    >
      <!-- LINE 官方圖示 -->
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7">
        <path d="M20 3C10.611 3 3 9.492 3 17.5c0 4.986 2.9 9.39 7.32 12.128-.298 1.12-1.078 4.18-1.238 4.81-.197.79.287.78.603.567.25-.164 3.982-2.71 5.595-3.8A20.8 20.8 0 0 0 20 32c9.389 0 17-6.492 17-14.5S29.389 3 20 3Z" fill="white"/>
        <text x="20" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="9" fill="#06C755" letter-spacing="0.5">LINE</text>
      </svg>
    </a>
  </div>
</template>


<script setup>
import Header from './components/Header.vue'
import ChatWidget from './components/ChatWidget.vue'
</script>

<style>
.line-float-btn {
  position: fixed;
  bottom: 5rem;
  right: 1.25rem;
  z-index: 9999;
  width: 52px;
  height: 52px;
  border-radius: 9999px;
  background-color: #06C755;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(6, 199, 85, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.line-float-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(6, 199, 85, 0.6);
}
</style>