<template>
  <!-- GIF 背景 -->
  <div class="bg-gif"></div>

  <!-- 主內容 -->
  <div class="min-h-screen text-gray-800 relative z-10">
    <!-- Hero -->
    <section
      id="hero"
      class="py-28 px-6 text-center relative bg-transparent"
    >
      <!-- 遮罩層（透明度降低，保持 GIF 可見） -->
      <div class="absolute inset-0 bg-black opacity-10"></div>

      <div class="relative z-10">
        <h1 class="observe-item opacity-0 text-4xl md:text-5xl font-extrabold mb-6 tracking-[0.10em]">
          <span
            class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent"
          >
            Golden Mountain 網頁設計
          </span>
        </h1>

        <p class="observe-item opacity-0 text-gray-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide animate-fade-in-up animate-fade-in-up-500">
          金山網頁設計｜<span class="font-semibold">Vue + Laravel 全端客製化開發</span><br />
          RWD 響應式網站・形象網站・系統開發・部署與長期維護・<span class="font-semibold">金流與電商整合（Shopify、WordPress、客製化網站 等）</span>
        </p>

        <div class="flex justify-center gap-4">
          <a href="#portfolio" class="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
            查看作品
          </a>

          <a href="#contact" class="px-8 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition">
            聯絡我
          </a>
        </div>
      </div>
    </section>

    <!-- 圖片動畫 -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto flex justify-center">
        <SwiperGallery />
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
      <h2 class="text-2xl font-semibold text-center mb-12 text-gray-900">
        服務提供
      </h2>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- 服務卡片 1 -->
        <div class="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400">
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            客製化形象網站
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            企業形象網站、個人品牌頁、服務介紹頁，專注速度、SEO 與轉換率，提升 Google 排名。
          </p>
        </div>

        <!-- 服務卡片 2 -->
        <div class="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400">
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            系統 / 會員功能開發
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            會員登入、後台管理、訂單系統、API 串接，Vue + Laravel 架構，穩定且可擴充。
          </p>
        </div>

        <!-- 服務卡片 3 -->
        <div class="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400">
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            VPS 架設與維護
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            Linux 主機部署、SSL、效能調校、備份與維運，網站上線後不失聯，可長期配合。
          </p>
        </div>
      </div>
    </section>

    <!-- Why Me -->
    <section class="py-9 px-3 bg-white">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xl md:text-2xl font-semibold text-center tracking-wide mb-8">
          優勢與特色
        </h2>
        <div class="space-y-3 text-gray-700 text-sm md:text-base leading-snug">
          <p>
            不只是交付「畫面」，而是從需求分析、網站結構、
            效能表現到後續維護，全程站在實際營運角度思考，
            提供優質且實惠的解決方案。
          </p>
          <p>
            相比套版快速交付，更重視網站是否能長期使用、
            是否好維護、是否真正幫助你帶來客戶，
            並提供穩定可靠的 7×24 技術支援。
          </p>
          <p>
            技術選型以 Vue + Laravel 為核心，
            兼顧開發效率與系統穩定性，
            特別適合中小企業與個人品牌持續成長。
          </p>
          <p class="pt-3 text-center">
            <a href="#hero" class="font-medium text-green-700 hover:text-green-800 transition">
              立即聯絡我，一起打造專屬於你的高品質網站。
            </a>
          </p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-24 px-6 text-center bg-gray-900 text-gray-100">
      <h2 class="text-2xl font-semibold mb-6">
        有專案需求？
      </h2>
      <p class="text-gray-400 mb-10">
        歡迎聯絡我，簡單描述你的需求，
        我會評估並回覆建議。
      </p>
      <a href="mailto:your@email.com" class="inline-block px-10 py-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
        聯絡我
      </a>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SwiperGallery from '../components/SwiperGallery.vue'

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

<style>
.bg-gif {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/night-sky.gif'); /* 放 public 資料夾 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -10;
  pointer-events: none;
}
</style>
