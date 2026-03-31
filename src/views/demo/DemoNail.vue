<template>
  <div class="nail-root">

    <!-- ===== NAV ===== -->
    <nav class="nail-nav">
      <div class="nav-inner">
        <div class="nav-brand">
          <span class="brand-en">IVOIRE</span>
          <span class="brand-divider"></span>
          <span class="brand-zh">純粹美學</span>
        </div>
        <ul class="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#booking" class="nav-cta">預約</a></li>
        </ul>
      </div>
    </nav>

    <!-- ===== HERO ===== -->
    <section class="hero-section">
      <div class="hero-left">
        <p class="hero-eyebrow">Nail & Beauty Studio</p>
        <h1 class="hero-title">
          <span class="hero-title-line">純粹</span>
          <span class="hero-title-line hero-title-accent">之美</span>
        </h1>
        <p class="hero-desc">
          以最克制的線條，呈現最純粹的優雅。<br />
          每一道工藝，都是對細節的執念。
        </p>
        <div class="hero-ctas">
          <a href="#booking" class="btn-dark">預約體驗</a>
          <a href="#gallery" class="btn-outline">作品欣賞</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">8+</span>
            <span class="stat-label">年資歷</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">2,000+</span>
            <span class="stat-label">服務顧客</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">純素材料</span>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-img-frame">
          <img src="/nail_shop_demo/close-up_of_almond_shaped_nail_Nano_Banana_2_72966.webp" alt="nail hero" class="hero-img" />
          <div class="hero-img-tag">
            <span>Spring Collection 2025</span>
          </div>
        </div>
        <div class="hero-float-card">
          <div class="float-dot"></div>
          <span>現正開放預約</span>
        </div>
      </div>
    </section>

    <!-- ===== MARQUEE ===== -->
    <div class="marquee-bar">
      <div class="marquee-track">
        <span v-for="n in 8" :key="n">
          NAIL ART &nbsp;&nbsp;·&nbsp;&nbsp; GEL MANICURE &nbsp;&nbsp;·&nbsp;&nbsp; NAIL EXTENSION &nbsp;&nbsp;·&nbsp;&nbsp; EYELASH &nbsp;&nbsp;·&nbsp;&nbsp;
        </span>
      </div>
    </div>

    <!-- ===== SERVICES ===== -->
    <section id="services" class="services-section">
      <div class="section-header">
        <p class="section-eyebrow">Our Services</p>
        <h2 class="section-title">服務項目</h2>
      </div>

      <div class="services-grid">
        <div class="service-card" v-for="s in services" :key="s.title">
          <div class="service-icon">{{ s.icon }}</div>
          <h3 class="service-title">{{ s.title }}</h3>
          <p class="service-desc">{{ s.desc }}</p>
          <ul class="service-items">
            <li v-for="item in s.items" :key="item.name" class="service-item">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">NT$ {{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===== GALLERY ===== -->
    <section id="gallery" class="gallery-section">
      <div class="section-header">
        <p class="section-eyebrow">Portfolio</p>
        <h2 class="section-title">作品集</h2>
      </div>

      <div class="gallery-grid">
        <!-- 大圖 -->
        <div class="gallery-item g-large">
          <img src="/nail_shop_demo/_french_tip_nails_sheer_pink_b_Nano_Banana_2_82900.webp" alt="法式裸色" class="g-img" />
          <div class="g-overlay"><span>法式裸色</span></div>
        </div>
        <!-- 小圖群 -->
        <div class="gallery-item">
          <img src="/nail_shop_demo/_nude_beige_gel_nails_glossy_f_Nano_Banana_2_80205.webp" alt="純色光療" class="g-img" />
          <div class="g-overlay"><span>純色光療</span></div>
        </div>
        <div class="gallery-item">
          <img src="/nail_shop_demo/_minimalist_nail_art_single_th_Nano_Banana_2_89555.webp" alt="極簡線條" class="g-img" />
          <div class="g-overlay"><span>極簡線條</span></div>
        </div>
        <div class="gallery-item">
          <img src="/nail_shop_demo/_delicate_hand_painted_floral__Nano_Banana_2_83714.webp" alt="手繪花卉" class="g-img" />
          <div class="g-overlay"><span>手繪花卉</span></div>
        </div>
        <div class="gallery-item g-wide">
          <img src="/nail_shop_demo/_multiple_nail_designs_flat_la_Nano_Banana_2_83381.webp" alt="季節限定" class="g-img" />
          <div class="g-overlay"><span>季節限定</span></div>
        </div>
      </div>

      <div class="gallery-note">
        <span>更多作品請見</span>
        <a href="#" class="gallery-ig">Instagram →</a>
      </div>
    </section>

    <!-- ===== ABOUT ===== -->
    <section id="about" class="about-section">
      <div class="about-inner">
        <div class="about-img-wrap">
          <img src="/nail_shop_demo/_nail_salon_interior_white_mar_Nano_Banana_2_49588.webp" alt="沙龍內裝" class="about-img" />
        </div>

        <div class="about-text">
          <p class="section-eyebrow">Our Story</p>
          <h2 class="section-title" style="text-align:left; margin-bottom: 1.5rem;">關於 IVOIRE</h2>
          <p class="about-desc">
            IVOIRE 創立於 2017 年，名稱源自法文「象牙」。<br /><br />
            我們相信，真正的優雅不在於繁複，而在於每一個細節的到位。從選材、調色到施作手法，我們堅持以最純粹的工藝，為每位客人打造屬於她的指尖美學。<br /><br />
            所有使用材料均通過無毒認證，讓美麗不以健康為代價。
          </p>
          <div class="about-badges">
            <span class="badge">無毒認證材料</span>
            <span class="badge">日本研修技術</span>
            <span class="badge">純素友善</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BOOKING ===== -->
    <section id="booking" class="booking-section">
      <div class="booking-inner">
        <div class="section-header">
          <p class="section-eyebrow">Reservation</p>
          <h2 class="section-title">線上預約</h2>
          <p class="booking-subtitle">我們將於 24 小時內確認您的預約時間</p>
        </div>

        <form class="booking-form" @submit.prevent>
          <div class="form-row">
            <div class="form-group">
              <label>姓名</label>
              <input type="text" v-model="form.name" placeholder="您的姓名" />
            </div>
            <div class="form-group">
              <label>聯絡電話</label>
              <input type="tel" v-model="form.phone" placeholder="0912-345-678" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>希望日期</label>
              <input type="date" v-model="form.date" />
            </div>
            <div class="form-group">
              <label>希望時段</label>
              <select v-model="form.time">
                <option value="">請選擇</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label>服務項目</label>
            <select v-model="form.service">
              <option value="">請選擇服務</option>
              <option value="gel">光療指甲</option>
              <option value="extension">甲片延伸</option>
              <option value="art">彩繪設計</option>
              <option value="eyelash">睫毛嫁接</option>
              <option value="consult">不確定，請協助建議</option>
            </select>
          </div>

          <div class="form-group">
            <label>備註 / 參考圖說明</label>
            <textarea v-model="form.note" rows="3" placeholder="可描述喜歡的風格、顏色，或附上 Instagram 參考圖連結…"></textarea>
          </div>

          <button type="submit" class="btn-dark" style="width:100%; justify-content:center; padding: 1rem;">
            送出預約申請
          </button>
        </form>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="nail-footer">
      <div class="footer-inner">
        <div class="footer-left">
          <div class="footer-brand">IVOIRE</div>
          <p class="footer-tagline">純粹之美，始於指尖</p>
        </div>

        <div class="footer-center">
          <div class="footer-info-row">
            <span class="footer-label">地址</span>
            <span>台北市大安區忠孝東路四段 100 號 3F</span>
          </div>
          <div class="footer-info-row">
            <span class="footer-label">電話</span>
            <span>02-2700-1234</span>
          </div>
          <div class="footer-info-row">
            <span class="footer-label">營業時間</span>
            <span>週二至週日 10:00 – 20:00（週一公休）</span>
          </div>
        </div>

        <div class="footer-right">
          <a href="#" class="footer-social">Instagram</a>
          <a href="#" class="footer-social">LINE</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2025 IVOIRE Nail Studio. All rights reserved.</span>
        <span class="footer-credit">Demo by Golden Mountain 網頁設計</span>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  date: '',
  time: '',
  service: '',
  note: '',
})

const services = [
  {
    icon: '◇',
    title: '光療指甲',
    desc: '採用日本頂級光療膠，持色長達三週以上，不易剝落起翹。',
    items: [
      { name: '基礎單色光療', price: '800' },
      { name: '法式 / 漸層', price: '1,000' },
      { name: '設計款（簡約）', price: '1,200+' },
      { name: '精緻彩繪', price: '1,500+' },
    ],
  },
  {
    icon: '◈',
    title: '甲片延伸',
    desc: '訂製適合您手型的甲型，打造纖長優雅的指尖比例。',
    items: [
      { name: '軟甲延伸（基礎）', price: '1,500' },
      { name: '硬甲延伸', price: '1,800' },
      { name: '甲片 + 設計', price: '2,200+' },
      { name: '特殊造型甲', price: '2,800+' },
    ],
  },
  {
    icon: '◉',
    title: '美睫嫁接',
    desc: '單根嫁接技術，輕盈自然，睜眼閉眼皆是風景。',
    items: [
      { name: '自然款（80根）', price: '1,200' },
      { name: '濃密款（120根）', price: '1,600' },
      { name: '貂毛睫毛', price: '2,000' },
      { name: '補接（28天內）', price: '700' },
    ],
  },
]
</script>

<style scoped>
/* ===== Root ===== */
.nail-root {
  background: #FAF8F4;
  color: #2C2825;
  font-family: 'Noto Sans TC', 'Inter', sans-serif;
  min-height: 100vh;
}

/* ===== Nav ===== */
.nail-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 248, 244, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #EDE8DE;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-en {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: #2C2825;
}

.brand-divider {
  width: 1px;
  height: 14px;
  background: #C4A882;
}

.brand-zh {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  color: #8C7B6B;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  color: #8C7B6B;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #2C2825;
}

.nav-cta {
  padding: 0.5rem 1.25rem;
  background: #2C2825;
  color: #FAF8F4 !important;
  border-radius: 999px;
  font-size: 0.78rem !important;
  letter-spacing: 0.15em;
  transition: background 0.3s !important;
}

.nav-cta:hover {
  background: #C4A882 !important;
  color: #2C2825 !important;
}

/* ===== Hero ===== */
.hero-section {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 4rem;
  gap: 4rem;
  align-items: center;
}

.hero-left {
  display: flex;
  flex-direction: column;
}

.hero-eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: #C4A882;
  margin-bottom: 1.5rem;
}

.hero-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.75rem;
  line-height: 1.05;
}

.hero-title-line {
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #2C2825;
}

.hero-title-accent {
  color: #C4A882;
}

.hero-desc {
  font-size: 0.9rem;
  line-height: 2;
  color: #8C7B6B;
  margin-bottom: 2.5rem;
  letter-spacing: 0.04em;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-dark {
  padding: 0.85rem 2rem;
  background: #2C2825;
  color: #FAF8F4;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
}

.btn-dark:hover {
  background: #C4A882;
  color: #2C2825;
}

.btn-outline {
  padding: 0.85rem 2rem;
  border: 1.5px solid #2C2825;
  color: #2C2825;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s;
  background: transparent;
}

.btn-outline:hover {
  background: #2C2825;
  color: #FAF8F4;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2C2825;
  letter-spacing: 0.05em;
}

.stat-label {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: #8C7B6B;
  margin-top: 0.15rem;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: #EDE8DE;
}

/* Hero Right */
.hero-right {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-img-frame {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 2rem;
  overflow: hidden;
  aspect-ratio: 3/4;
  background: #EDE8DE;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-img-tag {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background: rgba(250, 248, 244, 0.9);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: #2C2825;
}

.hero-float-card {
  position: absolute;
  top: 2rem;
  right: -1rem;
  background: #2C2825;
  color: #FAF8F4;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 24px rgba(44,40,37,0.15);
}

.float-dot {
  width: 6px;
  height: 6px;
  background: #8BC48A;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ===== Marquee ===== */
.marquee-bar {
  background: #2C2825;
  padding: 0.85rem 0;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-track {
  display: inline-block;
  animation: marquee 30s linear infinite;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: rgba(250, 248, 244, 0.5);
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ===== Section共用 ===== */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: #C4A882;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: #2C2825;
  letter-spacing: 0.15em;
  margin-bottom: 0;
}

/* ===== Services ===== */
.services-section {
  padding: 7rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2.5rem;
  border: 1px solid #EDE8DE;
  border-radius: 1.5rem;
  background: #fff;
  transition: all 0.4s;
}

.service-card:hover {
  border-color: #C4A882;
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(196, 168, 130, 0.12);
}

.service-icon {
  font-size: 1.5rem;
  color: #C4A882;
  margin-bottom: 1rem;
  letter-spacing: 0;
}

.service-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2C2825;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.service-desc {
  font-size: 0.8rem;
  color: #8C7B6B;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #EDE8DE;
}

.service-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
}

.item-name {
  color: #2C2825;
  letter-spacing: 0.05em;
}

.item-price {
  color: #C4A882;
  font-weight: 600;
  font-size: 0.8rem;
}

/* ===== Gallery ===== */
.gallery-section {
  padding: 7rem 2rem;
  background: #F5F0E8;
}

.gallery-section .section-header {
  max-width: 1200px;
  margin: 0 auto 4rem;
  text-align: center;
}

.gallery-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 280px 280px;
  gap: 1rem;
}

.gallery-item {
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.gallery-item:hover .g-overlay {
  opacity: 1;
}

.g-large {
  grid-row: span 2;
}

.g-wide {
  grid-column: span 2;
}

.g-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover .g-img {
  transform: scale(1.05);
}

.g-overlay {
  position: absolute;
  inset: 0;
  background: rgba(44, 40, 37, 0.55);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s;
}

.g-overlay span {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: #FAF8F4;
}

.gallery-note {
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: #8C7B6B;
  letter-spacing: 0.1em;
}

.gallery-ig {
  color: #C4A882;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.gallery-ig:hover { color: #2C2825; }

/* ===== About ===== */
.about-section {
  padding: 7rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.about-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-img-wrap {
  border-radius: 1.5rem;
  overflow: hidden;
  aspect-ratio: 4/5;
  background: #EDE8DE;
}

.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-desc {
  font-size: 0.88rem;
  line-height: 2;
  color: #8C7B6B;
  margin-bottom: 2rem;
}

.about-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.badge {
  padding: 0.4rem 1rem;
  border: 1px solid #C4A882;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: #C4A882;
}

/* ===== Booking ===== */
.booking-section {
  padding: 7rem 2rem;
  background: #F5F0E8;
}

.booking-inner {
  max-width: 700px;
  margin: 0 auto;
}

.booking-inner .section-header {
  margin-bottom: 0;
}

.booking-subtitle {
  font-size: 0.82rem;
  color: #8C7B6B;
  letter-spacing: 0.05em;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  text-align: center;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: #8C7B6B;
  text-transform: uppercase;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: #fff;
  border: 1px solid #EDE8DE;
  border-radius: 0.75rem;
  padding: 0.85rem 1rem;
  color: #2C2825;
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #C4A882;
}

.form-group textarea {
  resize: vertical;
}

/* ===== Footer ===== */
.nail-footer {
  background: #2C2825;
  padding: 4rem 2rem 2rem;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(250, 248, 244, 0.08);
}

.footer-brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  color: #C4A882;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: rgba(250, 248, 244, 0.3);
}

.footer-center {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-info-row {
  display: flex;
  gap: 1.5rem;
  font-size: 0.78rem;
  color: rgba(250, 248, 244, 0.5);
}

.footer-label {
  color: #C4A882;
  width: 65px;
  flex-shrink: 0;
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;
}

.footer-social {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: rgba(250, 248, 244, 0.4);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-social:hover {
  color: #C4A882;
}

.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.68rem;
  color: rgba(250, 248, 244, 0.2);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-credit {
  color: rgba(196, 168, 130, 0.35);
}

/* ===== RWD ===== */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    padding-top: 6rem;
    gap: 2.5rem;
  }

  .hero-right {
    order: -1;
  }

  .hero-img-frame {
    max-width: 280px;
    aspect-ratio: 3/4;
  }

  .hero-float-card {
    right: 0;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .g-large {
    grid-row: span 1;
    grid-column: span 2;
  }

  .g-wide {
    grid-column: span 2;
  }

  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-right {
    align-items: flex-start;
    flex-direction: row;
    gap: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }
}
</style>
