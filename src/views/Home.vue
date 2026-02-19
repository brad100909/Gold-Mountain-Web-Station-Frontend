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
            高品質客製化網站<br />
            為你的品牌與業績而生
          </span>
        </h1>

        <p class="observe-item opacity-0 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide">
          企業形象網站・系統開發・電商整合<br />
          從規劃、設計、開發到上線與維護，一次完成<br />
          <span class="font-semibold">
            Vue + Laravel 全端架構｜穩定、安全、可長期擴充
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
    <section class="py-20 px-6 text-center">
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-gray-100">
        專案畫面與系統介面展示
      </h2>

      <p class="text-gray-300 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed">
        以下為實際專案與系統開發畫面示意，<br class="hidden md:block" />
        包含企業網站、後台介面與功能流程設計，後續可依需求提供實際操作體驗。
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
        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            客製化形象網站
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            為品牌量身打造專屬網站，而不是套版。<br />
            重視網站速度、SEO 與使用體驗，讓客戶願意停留並主動聯絡你。
          </p>
          <p class="text-center text-gray-400 text-sm mt-10">
            適合中小企業、個人品牌與需要長期維護的專案
          </p>

        </div>

        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            系統 / 會員功能開發
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            會員系統、後台管理、訂單流程、API 串接。<br />
            不只「能用」，而是好維護、好擴充、跑得久。
          </p>
        </div>

        <div
          class="bg-white/80 p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer hover:ring-1 hover:ring-green-400"
        >
          <h3 class="font-semibold text-lg mb-3 text-gray-900 tracking-wide">
            VPS 架設與長期維護
          </h3>
          <p class="text-gray-600 text-sm md:text-base leading-relaxed">
            主機部署、SSL、效能調校、備份與維運。<br />
            網站上線後，我不會消失。
          </p>
        </div>
      </div>
    </section>

    <!-- Why Me -->
    <section class="py-9 px-3 bg-transparent">
      <div class="max-w-4xl mx-auto bg-white/80 p-6 rounded-lg shadow-md">
        <h2 class="text-xl md:text-2xl font-semibold text-center tracking-wide mb-8 text-gray-900">
          為什麼選擇我？
        </h2>

        <div class="space-y-4 text-gray-700 text-sm md:text-base leading-snug">
          <p>
            我不只是交付「畫面」，而是從實際營運角度思考：
            這個網站能不能用三年？之後好不好維護？有沒有真的帶來客戶？
          </p>

          <p>
            如果你只想要最快、最便宜的套版，我可能不適合你。
            但如果你需要一個能長期使用、穩定成長的網站，
            我會是可靠的技術夥伴。
          </p>

          <p class="pt-3 text-center">
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
/* 背景影片 */
.bg-video {
  position: fixed; /* 固定在螢幕 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 完全覆蓋背景 */
  z-index: -10; /* 放到最底層 */
  pointer-events: none; /* 不影響滑鼠操作 */
}
</style>
