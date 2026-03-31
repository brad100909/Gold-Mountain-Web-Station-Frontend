<template>
  <div class="restaurant-root">

    <!-- ===== HERO ===== -->
    <section class="hero-section">
      <!-- 背景佔位（之後換成 AI 生成的餐廳大圖） -->
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <!-- 日文副標 -->
        <p class="hero-eyebrow">山の恵みを、一皿に</p>

        <!-- 餐廳名 -->
        <h1 class="hero-title">
          <span class="hero-title-kanji">翠山</span>
          <span class="hero-title-sub">料理</span>
        </h1>

        <p class="hero-desc">
          精選當季食材，以職人之手呈現<br />每一道料理的純粹之美
        </p>

        <!-- CTAs -->
        <div class="hero-ctas">
          <a href="#reservation" class="btn-primary">予約 · 預約座位</a>
          <a href="#menu" class="btn-secondary">菜單一覽</a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-hint">
        <span>SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- ===== 三大理念 ===== -->
    <section class="philosophy-section">
      <div class="section-eyebrow">Our Philosophy</div>
      <h2 class="section-title">三つの心</h2>

      <div class="philosophy-grid">
        <div class="philosophy-card" v-for="p in philosophy" :key="p.kanji">
          <div class="philosophy-kanji">{{ p.kanji }}</div>
          <div class="philosophy-name">{{ p.name }}</div>
          <p class="philosophy-desc">{{ p.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ===== 精選料理 ===== -->
    <section id="menu" class="menu-section">
      <div class="section-eyebrow">Signature Dishes</div>
      <h2 class="section-title">精選料理</h2>

      <div class="menu-grid">
        <div class="menu-card" v-for="dish in dishes" :key="dish.name">
          <div class="dish-img-wrap">
            <img :src="dish.img" :alt="dish.name" class="dish-img" />
          </div>
          <div class="dish-info">
            <p class="dish-jp">{{ dish.japanese }}</p>
            <h3 class="dish-name">{{ dish.name }}</h3>
            <p class="dish-desc">{{ dish.desc }}</p>
            <p class="dish-price">NT$ {{ dish.price }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== Gallery ===== -->
    <section class="gallery-section">
      <div class="section-eyebrow">Atmosphere</div>
      <h2 class="section-title">空間</h2>

      <div class="gallery-grid">
        <div
          v-for="(g, i) in gallery"
          :key="i"
          class="gallery-item"
          :class="g.large ? 'gallery-large' : ''"
        >
          <img :src="g.img" alt="" class="gallery-img" />
        </div>
      </div>
    </section>

    <!-- ===== 預約 ===== -->
    <section id="reservation" class="reservation-section">
      <div class="reservation-inner">
        <div class="section-eyebrow">Reservation</div>
        <h2 class="section-title">予約 · 訂位</h2>
        <p class="reservation-subtitle">請填寫以下資訊，我們將於 24 小時內與您確認</p>

        <form class="reservation-form" @submit.prevent>
          <div class="form-row">
            <div class="form-group">
              <label>日期</label>
              <input type="date" v-model="form.date" />
            </div>
            <div class="form-group">
              <label>人數</label>
              <select v-model="form.guests">
                <option v-for="n in 10" :key="n" :value="n">{{ n }} 位</option>
              </select>
            </div>
            <div class="form-group">
              <label>時段</label>
              <select v-model="form.time">
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>姓名</label>
              <input type="text" v-model="form.name" placeholder="您的姓名" />
            </div>
            <div class="form-group">
              <label>電話</label>
              <input type="tel" v-model="form.phone" placeholder="聯絡電話" />
            </div>
          </div>

          <div class="form-group">
            <label>備註</label>
            <textarea v-model="form.note" rows="3" placeholder="過敏食材、特殊需求…"></textarea>
          </div>

          <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
            送出預約
          </button>
        </form>
      </div>
    </section>

    <!-- ===== Footer ===== -->
    <footer class="restaurant-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-name">翠山料理</div>
          <p class="footer-tagline">山の恵みを、一皿に</p>
        </div>

        <div class="footer-info">
          <div class="footer-info-item">
            <span class="footer-label">地址</span>
            <span>台北市大安區復興南路一段 100 號</span>
          </div>
          <div class="footer-info-item">
            <span class="footer-label">電話</span>
            <span>02-2700-0000</span>
          </div>
          <div class="footer-info-item">
            <span class="footer-label">營業時間</span>
            <span>午餐 11:30–14:00 ｜ 晚餐 18:00–21:30</span>
          </div>
          <div class="footer-info-item">
            <span class="footer-label">公休</span>
            <span>每週一</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2025 翠山料理 Suizan. All rights reserved.</span>
        <span class="footer-credit">Demo by Golden Mountain 網頁設計</span>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  date: '',
  guests: 2,
  time: '19:00',
  name: '',
  phone: '',
  note: '',
})

const philosophy = [
  {
    kanji: '旬',
    name: '當季食材',
    desc: '嚴選每個季節最鮮美的食材，讓大自然的節奏成為料理的靈魂。',
  },
  {
    kanji: '技',
    name: '職人技藝',
    desc: '主廚擁有二十年懷石料理經驗，每道料理皆是對傳統的致敬與創新。',
  },
  {
    kanji: '間',
    name: '靜謐空間',
    desc: '以日式枯山水為靈感設計的用餐環境，讓您在每一口之間感受靜謐之美。',
  },
]

const dishes = [
  {
    japanese: 'にぎり',
    name: '炙燒鮭魚握壽司',
    desc: '北海道直送鮭魚，以炙燒手法提引油脂甜香，佐以自製柚子醬油。',
    price: '580',
    img: '/japanese_restaurant_demo/restaurant-dish-salmon.jpg',
  },
  {
    japanese: '和牛',
    name: 'A5 和牛燒肉',
    desc: '宮崎縣 A5 等級和牛，油花均勻細緻，入口即化，附特製芥末鹽。',
    price: '1,280',
    img: '/japanese_restaurant_demo/restaurant-dish-wagyu.jpg',
  },
  {
    japanese: '懷石',
    name: '翠山懷石套餐',
    desc: '八道精緻料理，依時令調整，完整呈現日本料理的季節哲學。',
    price: '2,800',
    img: '/japanese_restaurant_demo/restaurant-dish-kaiseki.jpg',
  },
  {
    japanese: '甘味',
    name: '抹茶玄米甜品',
    desc: '宇治一番摘抹茶製成的濃郁甘味，搭配自製玄米冰淇淋，清爽收尾。',
    price: '380',
    img: '/japanese_restaurant_demo/restaurant-dish-matcha.jpg',
  },
]

const gallery = [
  { img: '/japanese_restaurant_demo/restaurant-gallery-main.jpg', large: true },
  { img: '/japanese_restaurant_demo/restaurant-gallery-bar.jpg', large: false },
  { img: '/japanese_restaurant_demo/restaurant-gallery-ingredients.jpg', large: false },
  { img: '/japanese_restaurant_demo/restaurant-gallery-private.jpg', large: false },
  { img: '/japanese_restaurant_demo/restaurant-gallery-closeup.jpg', large: false },
]
</script>

<style scoped>
/* ===== Root ===== */
.restaurant-root {
  background: #0d0d0d;
  color: #F0EAD6;
  font-family: 'Noto Sans TC', 'Inter', sans-serif;
  min-height: 100vh;
}

/* ===== Hero ===== */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/japanese_restaurant_demo/restaurant-hero.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1.5rem;
}

.hero-eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  color: #C9A96E;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
}

.hero-title-kanji {
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, #C9A96E, #F0E0B0, #A07840);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.1em;
}

.hero-title-sub {
  font-size: clamp(1rem, 3vw, 1.5rem);
  letter-spacing: 0.8em;
  color: #C9A96E;
  font-weight: 300;
  margin-top: 0.5rem;
}

.hero-desc {
  color: rgba(240, 234, 214, 0.65);
  font-size: 0.95rem;
  line-height: 2;
  letter-spacing: 0.05em;
  margin-bottom: 2.5rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 0.85rem 2rem;
  background: linear-gradient(135deg, #C9A96E, #A07840);
  color: #1a1000;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

.btn-secondary {
  padding: 0.85rem 2rem;
  border: 1px solid rgba(201, 169, 110, 0.5);
  color: #C9A96E;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s;
  background: transparent;
}

.btn-secondary:hover {
  background: rgba(201, 169, 110, 0.1);
  border-color: #C9A96E;
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.3);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, rgba(201,169,110,0.6), transparent);
  animation: scrollLine 1.8s ease-in-out infinite;
}

@keyframes scrollLine {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ===== Section 共用 ===== */
.section-eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #C9A96E;
  text-align: center;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  text-align: center;
  color: #F0EAD6;
  letter-spacing: 0.15em;
  margin-bottom: 3.5rem;
}

/* ===== Philosophy ===== */
.philosophy-section {
  padding: 6rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.philosophy-card {
  padding: 2.5rem 2rem;
  border: 1px solid rgba(201, 169, 110, 0.15);
  border-radius: 1rem;
  background: rgba(255,255,255,0.02);
  text-align: center;
  transition: all 0.4s;
}

.philosophy-card:hover {
  border-color: rgba(201, 169, 110, 0.4);
  background: rgba(201, 169, 110, 0.04);
  transform: translateY(-4px);
}

.philosophy-kanji {
  font-size: 3.5rem;
  font-weight: 700;
  color: #C9A96E;
  line-height: 1;
  margin-bottom: 0.75rem;
  opacity: 0.85;
}

.philosophy-name {
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  color: #F0EAD6;
  margin-bottom: 1rem;
  font-weight: 500;
}

.philosophy-desc {
  font-size: 0.82rem;
  color: rgba(240, 234, 214, 0.55);
  line-height: 1.9;
}

/* ===== Menu ===== */
.menu-section {
  padding: 6rem 1.5rem;
  background: rgba(255,255,255,0.015);
}

.menu-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.menu-card {
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 1rem;
  overflow: hidden;
  background: #111;
  transition: all 0.4s;
}

.menu-card:hover {
  border-color: rgba(201, 169, 110, 0.35);
  transform: translateY(-4px);
}

.dish-img-wrap {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.dish-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.menu-card:hover .dish-img {
  transform: scale(1.05);
}

.placeholder-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.2);
}

.dish-info {
  padding: 1.25rem 1.5rem 1.5rem;
}

.dish-jp {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: #C9A96E;
  margin-bottom: 0.35rem;
}

.dish-name {
  font-size: 1rem;
  font-weight: 600;
  color: #F0EAD6;
  margin-bottom: 0.6rem;
  letter-spacing: 0.05em;
}

.dish-desc {
  font-size: 0.78rem;
  color: rgba(240, 234, 214, 0.5);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.dish-price {
  font-size: 0.9rem;
  color: #C9A96E;
  font-weight: 600;
  letter-spacing: 0.05em;
}

/* ===== Gallery ===== */
.gallery-section {
  padding: 6rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 0.75rem;
}

.gallery-item {
  aspect-ratio: 4/3;
  border-radius: 0.75rem;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item:hover .gallery-img {
  transform: scale(1.06);
  filter: brightness(1.1);
}

.gallery-large {
  grid-column: span 2;
  aspect-ratio: 16/9;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.6s ease;
}

/* ===== Reservation ===== */
.reservation-section {
  padding: 6rem 1.5rem;
  background: rgba(255,255,255,0.015);
}

.reservation-inner {
  max-width: 700px;
  margin: 0 auto;
}

.reservation-subtitle {
  text-align: center;
  font-size: 0.85rem;
  color: rgba(240, 234, 214, 0.5);
  margin-top: -2.5rem;
  margin-bottom: 3rem;
  letter-spacing: 0.05em;
}

.reservation-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: #C9A96E;
  text-transform: uppercase;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: #F0EAD6;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: rgba(201, 169, 110, 0.6);
}

.form-group select option {
  background: #1a1a1a;
  color: #F0EAD6;
}

.form-group textarea {
  resize: vertical;
}

/* ===== Footer ===== */
.restaurant-footer {
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 4rem 1.5rem 2rem;
}

.footer-inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #C9A96E;
  letter-spacing: 0.15em;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-size: 0.75rem;
  color: rgba(240, 234, 214, 0.35);
  letter-spacing: 0.2em;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-info-item {
  display: flex;
  gap: 1.5rem;
  font-size: 0.82rem;
  color: rgba(240, 234, 214, 0.6);
}

.footer-label {
  color: #C9A96E;
  width: 70px;
  flex-shrink: 0;
  font-weight: 500;
}

.footer-bottom {
  max-width: 900px;
  margin: 0 auto;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: rgba(240, 234, 214, 0.25);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-credit {
  color: rgba(201, 169, 110, 0.4);
}

/* ===== RWD ===== */
@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-large {
    grid-column: span 2;
  }
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
