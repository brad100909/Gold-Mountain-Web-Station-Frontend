<template>
  <Swiper
    :modules="[Navigation, Pagination, Autoplay]"
    :space-between="30"
    :slides-per-view="1"
    navigation
    pagination
    loop
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    class="swiper-demo"
  >
    <SwiperSlide
      v-for="(slide, index) in slides"
      :key="index"
    >
      <div class="ratio-box">

        <!-- 圖片 -->
        <img :src="slide.img" alt="" class="slide-img" />

        <!-- 遮罩 -->
        <div class="overlay"></div>

        <!-- 文字 -->
        <div class="text-layer">
          <h3 class="title">
            {{ slide.title }}
          </h3>
          <p class="desc">
            {{ slide.desc }}
          </p>
        </div>

      </div>
    </SwiperSlide>
  </Swiper>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '/sample1.jpg'
import img2 from '/sample3.jpg'
import img3 from '/sample5.jpg'

const slides = [
  {
    img: img1,
    title: '客製化品牌網站',
    desc: '以 Vue + Laravel 打造高效能、可長期維護的形象網站、Linux 主機部署、SSL、效能調校、備份與維運>',
  },
  {
    img: img2,
    title: '系統與後台開發',
    desc: '會員系統、訂單流程、金流串接，完整全端解決方案',
  },
  {
    img: img3,
    title: '付費方案',
    desc: 'Linux 主機部署、SSL、效能調校、備份與維運',
    link: '/pricing',        // 👈 方案詳情頁 route
    linkText: '方案詳情',    // 👈 按鈕文字
  },
]
</script>


<style scoped>
/* Swiper 外框 */
.swiper-demo {
  width: 680px;
  border-radius: 18px;
  overflow: hidden;
  background: #000;
  box-shadow:
    0 20px 40px rgba(0,0,0,0.35),
    0 5px 15px rgba(0,0,0,0.2);
}

/* 固定比例盒子 */
.ratio-box {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
}

/* 圖片 */
.slide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  transition: transform 6s ease;
}

/* 當前 slide 圖片微放大 */
.swiper-slide-active .slide-img {
  transform: scale(1.12);
}

/* 遮罩（高級感重點） */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.15)
  );
  z-index: 1;
}

/* 文字層 */
.text-layer {
  position: absolute;
  inset: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 48px;
  color: #fff;
}

/* 標題動畫初始狀態 */
.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.12em;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

/* 描述文字 */
.desc {
  font-size: 15px;
  line-height: 1.7;
  max-width: 420px;
  margin-top: 12px;

  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.15s;
}

/* 進場動畫（只有 active 才顯示） */
.swiper-slide-active .title,
.swiper-slide-active .desc {
  opacity: 1;
  transform: translateY(0);
}


</style>
