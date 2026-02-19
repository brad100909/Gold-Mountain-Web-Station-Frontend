<template>
  <!-- 背景影片 -->
  <video autoplay loop muted playsinline class="bg-video">
    <source src="/bc_video.mp4" type="video/mp4" />
    你的瀏覽器不支援影片
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
            客製化網站與系統開發<br />
            為「能長期成長」的品牌打造
          </span>
        </h1>

        <p class="observe-item opacity-0 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
          我不是販售套版，而是替你打造<br />
          <strong>好維護、可擴充、能實際營運的網站與系統</strong><br />
          <span class="font-semibold">
            Vue + Laravel 全端架構｜適合長期經營與功能成長
          </span>
        </p>

        <div class="flex justify-center gap-4">
          <a
            href="#portfolio"
            class="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            查看作品
          </a>
          <a
            href="#contact"
            class="px-8 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition"
          >
            免費需求評估
          </a>
        </div>
      </div>
    </section>

    <!-- 專案與系統介面展示 -->
    <section id="portfolio" class="py-20 px-6 text-center">
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-100">
        專案與系統介面示意
      </h2>

      <p class="text-gray-300 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed">
        以下展示的是實際開發過的專案類型與系統介面概念，<br />
        包含企業官網、後台管理、會員與流程設計。<br />
        後續可依需求提供「可實際操作」的系統體驗頁面。
      </p>

      <div class="max-w-5xl mx-auto flex justify-center">
        <SwiperGallery />
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 px-6 bg-transparent">
      <h2 class="text-2xl font-semibold text-center mb-12 text-gray-100">
        服務項目
      </h2>

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- Service 1 -->
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            客製化形象網站
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            不使用套版，依品牌定位與實際需求設計。<br />
            重視網站速度、SEO 與使用體驗，讓網站真正帶來詢問與轉換。
          </p>
          <p class="text-center text-gray-400 text-sm mt-6">
            適合：不想三個月後重做一次網站的客戶
          </p>
        </div>

        <!-- Service 2 -->
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            系統 / 會員功能開發
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            會員系統、後台管理、訂單流程、API 串接。<br />
            從一開始就以「好維護、好擴充」為前提設計。
          </p>
          <p class="text-center text-gray-400 text-sm mt-6">
            適合：需要資料管理與流程自動化的成長型業務
          </p>
        </div>

        <!-- Service 3 -->
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            VPS 架設與長期維護
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            主機部署、SSL、效能調校、備份與例行維運。<br />
            網站上線後，我依然負責。
          </p>
          <p class="text-center text-gray-400 text-sm mt-6">
            適合：希望有固定技術窗口、長期合作的客戶
          </p>
        </div>
      </div>
    </section>

    <!-- Why Me -->
    <section class="py-12 px-6 bg-transparent">
      <div class="max-w-4xl mx-auto bg-white/80 p-8 rounded-lg shadow-md">
        <h2 class="text-xl md:text-2xl font-semibold text-center tracking-wide mb-8 text-gray-900">
          為什麼選擇我？
        </h2>

        <div class="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            多數網站失敗，並不是設計不夠漂亮，而是
            <strong>無法擴充、無人維護、後期成本失控</strong>。
          </p>

          <p>
            我從一開始就以「三年後還能不能用」為前提設計網站與系統，
            而不是只完成當下的畫面。
          </p>

          <p>
            如果你只想要最快、最便宜的套版，我可能不適合你。<br />
            但如果你需要的是一個能陪著事業一起成長的技術夥伴，
            我會是值得信任的選擇。
          </p>

          <p class="pt-4 text-center">
            <a href="#contact" class="font-medium text-green-700 hover:text-green-800 transition">
              聯絡我，聊聊你的專案需求
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
        簡單描述你的想法，我會評估並提供實際可行的建議。
      </p>
      <a
        href="mailto:your@email.com"
        class="inline-block px-10 py-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        免費需求評估
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
