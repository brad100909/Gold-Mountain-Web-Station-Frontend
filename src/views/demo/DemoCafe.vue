<template>
  <div class="cafe-root">

    <!-- ===== NAV ===== -->
    <nav class="cafe-nav">
      <div class="nav-inner">
        <div class="nav-brand">
          <span class="brand-name">SOLEIL</span>
          <span class="brand-sub">CAFÉ</span>
        </div>
        <ul class="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">空間</a></li>
          <li><a href="#about">關於</a></li>
          <li><a href="#info" class="nav-cta">找我們</a></li>
        </ul>
      </div>
    </nav>

    <!-- ===== HERO ===== -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <p class="hero-eyebrow">Specialty Coffee · Homemade Pastry</p>
        <h1 class="hero-title">
          <span>每一口，</span>
          <span class="hero-accent">都是早晨。</span>
        </h1>
        <p class="hero-desc">
          精選單品咖啡豆，手作現烤甜點<br />
          在這裡，時間會慢下來
        </p>
        <div class="hero-ctas">
          <a href="#menu" class="btn-warm">查看菜單</a>
          <a href="#info" class="btn-outline">營業時間</a>
        </div>
      </div>

      <div class="hero-badge">
        <span class="badge-icon">☕</span>
        <span>Specialty Coffee</span>
      </div>
    </section>

    <!-- ===== 招牌飲品 ===== -->
    <section id="menu" class="drinks-section">
      <div class="section-header">
        <p class="section-eyebrow">Signature Drinks</p>
        <h2 class="section-title">招牌飲品</h2>
      </div>

      <div class="drinks-grid">
        <div class="drink-card" v-for="d in drinks" :key="d.name">
          <div class="drink-img-wrap">
            <img :src="d.img" :alt="d.name" class="drink-img" />
          </div>
          <div class="drink-info">
            <div class="drink-tag">{{ d.tag }}</div>
            <h3 class="drink-name">{{ d.name }}</h3>
            <p class="drink-desc">{{ d.desc }}</p>
            <span class="drink-price">NT$ {{ d.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 手作甜點 ===== -->
    <section class="pastry-section">
      <div class="pastry-inner">
        <div class="section-header">
          <p class="section-eyebrow">Homemade Pastry</p>
          <h2 class="section-title">手作甜點</h2>
        </div>

        <div class="pastry-grid">
          <div class="pastry-card" v-for="p in pastries" :key="p.name">
            <div class="pastry-img-wrap">
              <img :src="p.img" :alt="p.name" class="pastry-img" />
            </div>
            <div class="pastry-info">
              <h3 class="pastry-name">{{ p.name }}</h3>
              <p class="pastry-desc">{{ p.desc }}</p>
              <span class="pastry-price">NT$ {{ p.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== GALLERY ===== -->
    <section id="gallery" class="gallery-section">
      <div class="section-header">
        <p class="section-eyebrow">Our Space</p>
        <h2 class="section-title">空間氛圍</h2>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item g-tall">
          <img src="/coffe_shop_demo/_cozy_cafe_interior_warm_morni_Nano_Banana_2_50292.webp" alt="窗邊座位" class="g-img" />
          <div class="g-label">窗邊座位</div>
        </div>
        <div class="gallery-col">
          <div class="gallery-item">
            <img src="/coffe_shop_demo/_specialty_coffee_shop_interio_Nano_Banana_2_40680.webp" alt="吧台區" class="g-img" />
            <div class="g-label">吧台區</div>
          </div>
          <div class="gallery-item">
            <img src="/coffe_shop_demo/_matcha_latte_in_ceramic_cup_b_Nano_Banana_2_91159.webp" alt="戶外露台" class="g-img" />
            <div class="g-label">戶外露台</div>
          </div>
        </div>
        <div class="gallery-item g-tall">
          <img src="/coffe_shop_demo/_pour_over_specialty_coffee_gl_Nano_Banana_2_15849.webp" alt="包廂空間" class="g-img" />
          <div class="g-label">包廂空間</div>
        </div>
      </div>
    </section>

    <!-- ===== 品牌故事 ===== -->
    <section id="about" class="about-section">
      <div class="about-inner">
        <div class="about-img-wrap">
          <img src="/coffe_shop_demo/_specialty_coffee_shop_interio_Nano_Banana_2_40680.webp" alt="SOLEIL CAFÉ" class="about-img" />
          <div class="about-img-tag">since 2019</div>
        </div>
        <div class="about-text">
          <p class="section-eyebrow" style="text-align:left;">Our Story</p>
          <h2 class="section-title" style="text-align:left; margin-bottom:1.5rem;">關於 SOLEIL</h2>
          <p class="about-desc">
            SOLEIL，法文「太陽」。<br /><br />
            2019 年，我們在台北巷弄間開了這扇小門，只想做一件事：讓每個走進來的人，感覺早晨值得期待。<br /><br />
            我們的咖啡豆直接向產地農場採購，每週小批次烘焙。甜點由甜點師每日手作，不放隔夜。我們不追求快，只追求對的。
          </p>
          <div class="about-values">
            <div class="value-item" v-for="v in values" :key="v">
              <span class="value-dot">◆</span>
              <span>{{ v }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 營業資訊 ===== -->
    <section id="info" class="info-section">
      <div class="info-inner">
        <div class="section-header">
          <p class="section-eyebrow">Visit Us</p>
          <h2 class="section-title">來找我們</h2>
        </div>

        <div class="info-grid">
          <div class="info-card" v-for="item in infoItems" :key="item.label">
            <div class="info-icon">{{ item.icon }}</div>
            <div class="info-label">{{ item.label }}</div>
            <div class="info-value">{{ item.value }}</div>
            <div v-if="item.sub" class="info-sub">{{ item.sub }}</div>
          </div>
        </div>

        <!-- 地圖佔位 -->
        <div class="map-placeholder">
          <span>地圖嵌入區域（Google Maps）</span>
        </div>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="cafe-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-name">SOLEIL CAFÉ</span>
          <p class="footer-tagline">每一口，都是早晨。</p>
        </div>
        <div class="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LINE</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 SOLEIL CAFÉ. All rights reserved.</span>
        <span class="footer-credit">Demo by Golden Mountain 網頁設計</span>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const drinks = [
  {
    name: '焦糖拿鐵',
    tag: 'Bestseller',
    desc: '衣索比亞日曬豆，搭配自製焦糖醬，奶香濃郁，甜而不膩。',
    price: '165',
    img: '/coffe_shop_demo/caramel_latte_in_ceramic_cup_g_Nano_Banana_2_23206.webp',
  },
  {
    name: '玫瑰氣泡美式',
    tag: 'Seasonal',
    desc: '冷萃咖啡加上玫瑰糖漿與氣泡水，清爽又帶花香，適合夏日午後。',
    price: '175',
    img: '/coffe_shop_demo/_sparkling_iced_americano_with_Nano_Banana_2_87372.webp',
  },
  {
    name: '抹茶拿鐵',
    tag: 'Popular',
    desc: '京都宇治一番摘抹茶，搭配燕麥奶，層次分明，苦甘平衡。',
    price: '175',
    img: '/coffe_shop_demo/_matcha_latte_in_ceramic_cup_b_Nano_Banana_2_91159.webp',
  },
  {
    name: '手沖單品',
    tag: 'Specialty',
    desc: '每週更換產地豆款，請洽當日黑板。帶著您的專屬風味踏上旅程。',
    price: '190',
    img: '/coffe_shop_demo/_pour_over_specialty_coffee_gl_Nano_Banana_2_15849.webp',
  },
]

const pastries = [
  {
    name: '法式可頌',
    desc: '72 小時低溫發酵，手工疊層，外酥內軟，每日現烤限量供應。',
    price: '85',
    img: '/coffe_shop_demo/_golden_french_croissant_flaky_Nano_Banana_2_37992.webp',
  },
  {
    name: '抹茶生乳捲',
    desc: '宇治抹茶海綿蛋糕，包裹北海道生奶油，入口即化，清爽不膩。',
    price: '120',
    img: '/coffe_shop_demo/_matcha_swiss_roll_cake_slice__Nano_Banana_2_90807.webp',
  },
  {
    name: '焦糖布丁',
    desc: '古法焦糖醬，全蛋配方，口感細緻滑順，每日限量 20 個。',
    price: '95',
    img: '/coffe_shop_demo/_caramel_pudding_in_glass_jar__Nano_Banana_2_23992.webp',
  },
]

const values = [
  '每週小批次手工烘焙咖啡豆',
  '甜點每日現做，不賣隔夜',
  '使用無農藥認證食材',
  '友善環境，鼓勵自備杯折 10 元',
]

const infoItems = [
  {
    icon: '◎',
    label: '地址',
    value: '台北市大安區敦化南路一段 161 巷 12 號',
    sub: '近忠孝敦化捷運站 5 號出口步行 3 分鐘',
  },
  {
    icon: '◷',
    label: '營業時間',
    value: '週一至週五 08:00 – 21:00',
    sub: '週六、日 09:00 – 22:00（週三公休）',
  },
  {
    icon: '◈',
    label: '聯絡方式',
    value: 'LINE：@soleil.cafe',
    sub: 'Instagram：@soleil.taipei',
  },
]
</script>

<style scoped>
/* ===== Root ===== */
.cafe-root {
  background: #FDFAF6;
  color: #2A1F14;
  font-family: 'Noto Sans TC', 'Inter', sans-serif;
  min-height: 100vh;
}

/* ===== Nav ===== */
.cafe-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(253, 250, 246, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #EDE0D0;
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.3em;
  color: #2A1F14;
}

.brand-sub {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  color: #C8804A;
  font-weight: 500;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0; padding: 0;
}

.nav-links a {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: #8A7060;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover { color: #2A1F14; }

.nav-cta {
  padding: 0.5rem 1.25rem;
  background: #2A1F14;
  color: #FDFAF6 !important;
  border-radius: 999px;
  transition: background 0.3s !important;
}

.nav-cta:hover { background: #C8804A !important; }

/* ===== Hero ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/coffe_shop_demo/_cozy_cafe_interior_warm_morni_Nano_Banana_2_50292.webp');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(253,250,246,0.92) 45%, rgba(253,250,246,0.2) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 6rem;
  max-width: 600px;
  padding-left: 2rem;
  width: 100%;
}

.hero-eyebrow {
  font-size: 0.62rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #C8804A;
  margin-bottom: 1.5rem;
}

.hero-title {
  display: flex;
  flex-direction: column;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  color: #2A1F14;
}

.hero-accent { color: #C8804A; }

.hero-desc {
  font-size: 0.95rem;
  line-height: 2;
  color: #8A7060;
  margin-bottom: 2.5rem;
  letter-spacing: 0.04em;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-warm {
  padding: 0.85rem 2rem;
  background: #C8804A;
  color: #FDFAF6;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
}

.btn-warm:hover {
  background: #A86030;
  transform: translateY(-2px);
}

.btn-outline {
  padding: 0.85rem 2rem;
  border: 1.5px solid #2A1F14;
  color: #2A1F14;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.3s;
  background: transparent;
}

.btn-outline:hover {
  background: #2A1F14;
  color: #FDFAF6;
}

.hero-badge {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  z-index: 10;
  background: #2A1F14;
  color: #FDFAF6;
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.badge-icon { font-size: 1rem; }

/* ===== Section 共用 ===== */
.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-eyebrow {
  font-size: 0.6rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: #C8804A;
  margin-bottom: 0.6rem;
}

.section-title {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  font-weight: 800;
  color: #2A1F14;
  letter-spacing: 0.1em;
  margin-bottom: 0;
}

/* ===== Drinks ===== */
.drinks-section {
  padding: 7rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.drinks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.drink-card {
  background: #FAF4EC;
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.4s;
}

.drink-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(42,31,20,0.1);
}

.drink-img-wrap {
  aspect-ratio: 3/4;
  overflow: hidden;
}

.drink-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.drink-card:hover .drink-img {
  transform: scale(1.05);
}

.drink-info {
  padding: 1.25rem 1.25rem 1.5rem;
}

.drink-tag {
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #C8804A;
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.drink-name {
  font-size: 1rem;
  font-weight: 700;
  color: #2A1F14;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.drink-desc {
  font-size: 0.75rem;
  line-height: 1.8;
  color: #8A7060;
  margin-bottom: 0.85rem;
}

.drink-price {
  font-size: 0.9rem;
  font-weight: 700;
  color: #C8804A;
}

/* ===== Pastry ===== */
.pastry-section {
  padding: 7rem 2rem;
  background: #F5EDE0;
}

.pastry-inner { max-width: 1200px; margin: 0 auto; }

.pastry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.pastry-card {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background: #FDFAF6;
  border-radius: 1.25rem;
  overflow: hidden;
  transition: all 0.4s;
}

.pastry-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(42,31,20,0.08);
}

.pastry-img-wrap {
  aspect-ratio: 1;
}

.pastry-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pastry-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.pastry-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #2A1F14;
  letter-spacing: 0.05em;
}

.pastry-desc {
  font-size: 0.72rem;
  line-height: 1.8;
  color: #8A7060;
}

.pastry-price {
  font-size: 0.88rem;
  font-weight: 700;
  color: #C8804A;
}

/* ===== Gallery ===== */
.gallery-section {
  padding: 7rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 480px;
  gap: 1rem;
}

.gallery-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gallery-item {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  flex: 1;
}

.gallery-item:hover .g-label { opacity: 1; }
.gallery-item:hover .g-ph { transform: scale(1.04); }

.g-tall { height: 100%; }

.g-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover .g-img {
  transform: scale(1.04);
}

.g-label {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(253,250,246,0.9);
  color: #2A1F14;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  opacity: 0;
  transition: opacity 0.3s;
}

/* ===== About ===== */
.about-section {
  padding: 7rem 2rem;
  background: #F5EDE0;
}

.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-img-wrap {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  aspect-ratio: 4/5;
  background: #E8D5C0;
}

.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-img-tag {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #2A1F14;
  color: #C8804A;
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-weight: 700;
}

.about-desc {
  font-size: 0.88rem;
  line-height: 2.1;
  color: #8A7060;
  margin-bottom: 2rem;
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.82rem;
  color: #2A1F14;
  letter-spacing: 0.04em;
}

.value-dot {
  color: #C8804A;
  font-size: 0.5rem;
  flex-shrink: 0;
  margin-top: 0.35rem;
}

/* ===== Info ===== */
.info-section {
  padding: 7rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.info-card {
  background: #FAF4EC;
  border-radius: 1.25rem;
  padding: 2rem;
  border: 1px solid #EDE0D0;
  transition: all 0.3s;
}

.info-card:hover {
  border-color: #C8804A;
  transform: translateY(-2px);
}

.info-icon {
  font-size: 1.2rem;
  color: #C8804A;
  margin-bottom: 1rem;
}

.info-label {
  font-size: 0.62rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #C8804A;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.info-value {
  font-size: 0.88rem;
  color: #2A1F14;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 0.35rem;
  line-height: 1.6;
}

.info-sub {
  font-size: 0.75rem;
  color: #8A7060;
  line-height: 1.7;
}

.map-placeholder {
  background: #F0E4D4;
  border-radius: 1.25rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #C8A882;
  color: #A08060;
  font-size: 0.82rem;
  letter-spacing: 0.1em;
}

/* ===== Footer ===== */
.cafe-footer {
  background: #2A1F14;
  padding: 3.5rem 2rem 2rem;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(253,250,246,0.08);
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-name {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.25em;
  color: #C8804A;
  display: block;
  margin-bottom: 0.4rem;
}

.footer-tagline {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: rgba(253,250,246,0.25);
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: rgba(253,250,246,0.3);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover { color: #C8804A; }

.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: rgba(253,250,246,0.15);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-credit { color: rgba(200,128,74,0.35); }

/* ===== RWD ===== */
@media (max-width: 900px) {
  .drinks-grid { grid-template-columns: repeat(2, 1fr); }
  .pastry-grid { grid-template-columns: 1fr; }
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .g-tall { height: 300px; }
  .about-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .info-grid { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .drinks-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: 1fr; }
  .hero-content { max-width: 100%; }
  .nav-links { display: none; }
  .hero-badge { display: none; }
}
</style>
