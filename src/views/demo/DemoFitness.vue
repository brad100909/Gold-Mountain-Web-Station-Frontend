<template>
  <div class="fit-root">

    <!-- ===== NAV ===== -->
    <nav class="fit-nav">
      <div class="nav-inner">
        <div class="nav-brand">
          <span class="brand-name">FORGE</span>
          <span class="brand-dot">●</span>
        </div>
        <ul class="nav-links">
          <li><a href="#philosophy">理念</a></li>
          <li><a href="#programs">方案</a></li>
          <li><a href="#results">成果</a></li>
          <li><a href="#booking" class="nav-cta">立即預約</a></li>
        </ul>
      </div>
    </nav>

    <!-- ===== HERO ===== -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-left">
          <p class="hero-eyebrow">Personal Training · 個人訓練</p>
          <h1 class="hero-title">
            <span class="hero-line">鍛造</span>
            <span class="hero-line hero-line-en">YOUR BEST</span>
            <span class="hero-line hero-line-accent">SELF.</span>
          </h1>
          <p class="hero-desc">
            突破極限，不是口號。<br />
            這是每一次訓練後，身體給你的回答。
          </p>
          <div class="hero-ctas">
            <a href="#booking" class="btn-fire">免費體驗課</a>
            <a href="#programs" class="btn-ghost">查看方案</a>
          </div>
        </div>

        <div class="hero-stats-bar">
          <div class="hero-stat" v-for="s in heroStats" :key="s.label">
            <span class="hstat-num">{{ s.num }}</span>
            <span class="hstat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-scroll">
        <span>SCROLL</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- ===== 三大信念 ===== -->
    <section id="philosophy" class="philosophy-section">
      <div class="phi-inner">
        <div class="section-label">Philosophy</div>
        <h2 class="section-title">訓練哲學</h2>

        <div class="phi-grid">
          <div class="phi-card" v-for="p in philosophy" :key="p.word">
            <div class="phi-num">{{ p.num }}</div>
            <div class="phi-word">{{ p.word }}</div>
            <div class="phi-name">{{ p.name }}</div>
            <p class="phi-desc">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 訓練方案 ===== -->
    <section id="programs" class="programs-section">
      <div class="prog-inner">
        <div class="section-label">Programs</div>
        <h2 class="section-title">訓練方案</h2>

        <div class="prog-grid">
          <div
            class="prog-card"
            v-for="p in programs" :key="p.name"
            :class="p.highlight ? 'prog-highlight' : ''"
          >
            <div v-if="p.highlight" class="prog-badge">最受歡迎</div>
            <div class="prog-icon">{{ p.icon }}</div>
            <h3 class="prog-name">{{ p.name }}</h3>
            <p class="prog-desc">{{ p.desc }}</p>
            <div class="prog-price-wrap">
              <span class="prog-price">NT$ {{ p.price }}</span>
              <span class="prog-unit">/ {{ p.unit }}</span>
            </div>
            <ul class="prog-features">
              <li v-for="f in p.features" :key="f">
                <span class="feat-check">→</span>{{ f }}
              </li>
            </ul>
            <a href="#booking" class="prog-cta" :class="p.highlight ? 'prog-cta-fire' : ''">
              立即報名
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 成果數據 ===== -->
    <section id="results" class="results-section">
      <div class="results-inner">
        <div class="section-label">Results</div>
        <h2 class="section-title">數字不說謊</h2>

        <div class="results-grid">
          <div class="result-item" v-for="r in results" :key="r.label">
            <span class="result-num">{{ r.num }}</span>
            <span class="result-label">{{ r.label }}</span>
          </div>
        </div>

        <div class="results-img-wrap">
          <img src="/fitness_demo/_gym_training_equipment_flat_l_Nano_Banana_2_19263.avif" alt="訓練成果" class="results-img" />
          <div class="results-tag">學員真實成果</div>
        </div>
      </div>
    </section>

    <!-- ===== 學員見證 ===== -->
    <section class="testimonials-section">
      <div class="test-inner">
        <div class="section-label">Testimonials</div>
        <h2 class="section-title">他們說</h2>

        <div class="test-grid">
          <div class="test-card" v-for="t in testimonials" :key="t.name">
            <div class="test-quote">"</div>
            <p class="test-text">{{ t.text }}</p>
            <div class="test-footer">
              <div class="test-avatar">{{ t.name[0] }}</div>
              <div>
                <div class="test-name">{{ t.name }}</div>
                <div class="test-meta">{{ t.meta }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 預約 ===== -->
    <section id="booking" class="booking-section">
      <div class="booking-inner">
        <div class="booking-left">
          <div class="section-label">Free Trial</div>
          <h2 class="section-title" style="text-align:left;">免費體驗課<br />等你來挑戰</h2>
          <p class="booking-desc">
            第一堂體驗課完全免費。<br />
            我們會評估你的現況，制定專屬訓練計畫。<br />
            不需要任何基礎，只需要你願意開始。
          </p>
          <div class="booking-info">
            <div class="binfo-row">
              <span class="binfo-label">地點</span>
              <span>台北市信義區松仁路 100 號 B1</span>
            </div>
            <div class="binfo-row">
              <span class="binfo-label">時間</span>
              <span>週一至週六 07:00 – 21:00</span>
            </div>
            <div class="binfo-row">
              <span class="binfo-label">LINE</span>
              <span>@forge.fit</span>
            </div>
          </div>
        </div>

        <form class="booking-form" @submit.prevent>
          <div class="form-group">
            <label>姓名</label>
            <input type="text" v-model="form.name" placeholder="您的姓名" />
          </div>
          <div class="form-group">
            <label>電話</label>
            <input type="tel" v-model="form.phone" placeholder="0912-345-678" />
          </div>
          <div class="form-group">
            <label>目標</label>
            <select v-model="form.goal">
              <option value="">請選擇訓練目標</option>
              <option value="fat">減脂塑形</option>
              <option value="muscle">增肌訓練</option>
              <option value="rehab">體態矯正</option>
              <option value="sport">運動表現</option>
              <option value="other">其他</option>
            </select>
          </div>
          <div class="form-group">
            <label>備註</label>
            <textarea v-model="form.note" rows="3" placeholder="身體狀況、受傷紀錄、任何想讓教練知道的事…"></textarea>
          </div>
          <button type="submit" class="btn-fire" style="width:100%; justify-content:center; padding:1rem;">
            預約免費體驗課
          </button>
        </form>
      </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer class="fit-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-name">FORGE</span>
          <p class="footer-tagline">鍛造你最好的自己</p>
        </div>
        <div class="footer-links">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">LINE</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 FORGE Personal Training. All rights reserved.</span>
        <span class="footer-credit">Demo by Golden Mountain 網頁設計</span>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', phone: '', goal: '', note: '' })

const heroStats = [
  { num: '500+', label: '訓練學員' },
  { num: '8年', label: '執照教練資歷' },
  { num: '92%', label: '學員達成目標' },
  { num: '4.9★', label: 'Google 評價' },
]

const philosophy = [
  {
    num: '01',
    word: '力',
    name: '以力為基',
    desc: '力量訓練是一切體態改變的根基。我們不追求快速，追求的是正確、持久、可複製的進步。',
  },
  {
    num: '02',
    word: '律',
    name: '紀律創造自由',
    desc: '每週的訓練計畫不是限制，而是讓你在混亂的生活中，保有一塊屬於自己的確定性。',
  },
  {
    num: '03',
    word: '破',
    name: '突破舒適圈',
    desc: '進步永遠發生在你以為撐不下去的那一刻之後。我們會在那裡，陪你跨過去。',
  },
]

const programs = [
  {
    icon: '◈',
    name: '單堂體驗',
    desc: '適合想先感受訓練強度的新手，由教練全程帶領評估。',
    price: '1,200',
    unit: '堂',
    highlight: false,
    features: [
      '60 分鐘一對一訓練',
      '體能評估測試',
      '專屬訓練建議',
    ],
  },
  {
    icon: '◉',
    name: '12 堂精英方案',
    desc: '最受歡迎的選擇，完整週期讓身體產生可見的改變。',
    price: '10,800',
    unit: '12堂',
    highlight: true,
    features: [
      '一對一專屬課表',
      '飲食建議規劃',
      '每月體態追蹤',
      'LINE 隨時諮詢',
      '免費補課一次',
    ],
  },
  {
    icon: '◇',
    name: '24 堂旗艦方案',
    desc: '深度體態重塑，適合有明確目標且長期投入的學員。',
    price: '19,200',
    unit: '24堂',
    highlight: false,
    features: [
      '完整體態重塑計畫',
      '每週飲食追蹤',
      '體成分分析（每月）',
      'LINE 全天候諮詢',
      '免費補課兩次',
      '訓練影片記錄存檔',
    ],
  },
]

const results = [
  { num: '500+', label: '累計訓練學員' },
  { num: '-12kg', label: '學員平均減脂成效' },
  { num: '16週', label: '平均達標週期' },
  { num: '92%', label: '學員續課率' },
]

const testimonials = [
  {
    name: '林小姐',
    meta: '上班族 · 減脂 12kg',
    text: '以前試過很多方法都失敗，跟了教練三個月，不只體重掉了，整個人的精神狀態都變好了。現在健身已經變成我生活的一部分。',
  },
  {
    name: '王先生',
    meta: '工程師 · 增肌塑形',
    text: '原本以為自己體質不適合練，但教練完全根據我的狀況調整課表。四個月後朋友都說我變寬了，是真的變寬了！',
  },
  {
    name: '陳小姐',
    meta: '媽媽 · 產後體態恢復',
    text: '產後一直不敢看鏡子，朋友推薦來試試。教練很有耐心，六個月後我穿回婚前的衣服了，感謝到想哭。',
  },
]
</script>

<style scoped>
/* ===== Root ===== */
.fit-root {
  background: #080808;
  color: #F5F5F5;
  font-family: 'Noto Sans TC', 'Inter', sans-serif;
  min-height: 100vh;
}

/* ===== Nav ===== */
.fit-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(8, 8, 8, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(232, 64, 12, 0.15);
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
  align-items: center;
  gap: 0.5rem;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0.25em;
  color: #F5F5F5;
}

.brand-dot {
  font-size: 0.5rem;
  color: #E8400C;
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
  letter-spacing: 0.1em;
  color: rgba(245,245,245,0.5);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover { color: #F5F5F5; }

.nav-cta {
  padding: 0.5rem 1.25rem;
  background: #E8400C;
  color: #F5F5F5 !important;
  border-radius: 4px;
  font-weight: 700 !important;
  transition: background 0.3s !important;
}

.nav-cta:hover { background: #FF6B35 !important; }

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
  background-image: url('/fitness_demo/_dramatic_gym_interior_heavy_d_Nano_Banana_2_12315.webp');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(8,8,8,0.95) 40%, rgba(8,8,8,0.3) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.hero-left { max-width: 620px; }

.hero-eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: #E8400C;
  margin-bottom: 1.5rem;
}

.hero-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.75rem;
  line-height: 1;
}

.hero-line {
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #F5F5F5;
}

.hero-line-en {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  color: rgba(245,245,245,0.25);
}

.hero-line-accent { color: #E8400C; }

.hero-desc {
  font-size: 0.95rem;
  line-height: 2;
  color: rgba(245,245,245,0.55);
  margin-bottom: 2.5rem;
  letter-spacing: 0.04em;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-fire {
  padding: 0.9rem 2rem;
  background: #E8400C;
  color: #F5F5F5;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
}

.btn-fire:hover {
  background: #FF6B35;
  transform: translateY(-2px);
}

.btn-ghost {
  padding: 0.9rem 2rem;
  border: 1px solid rgba(245,245,245,0.2);
  color: rgba(245,245,245,0.7);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
  background: transparent;
}

.btn-ghost:hover {
  border-color: #E8400C;
  color: #E8400C;
}

/* Hero Stats Bar */
.hero-stats-bar {
  display: flex;
  gap: 0;
  border-top: 1px solid rgba(245,245,245,0.08);
  padding-top: 2.5rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.hstat-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: #F5F5F5;
  letter-spacing: 0.05em;
}

.hstat-label {
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  color: rgba(245,245,245,0.35);
  text-transform: uppercase;
}

.hero-scroll {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(245,245,245,0.2);
  font-size: 0.55rem;
  letter-spacing: 0.3em;
}

.scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, #E8400C, transparent);
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ===== Section 共用 ===== */
.section-label {
  font-size: 0.6rem;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #E8400C;
  margin-bottom: 0.75rem;
  text-align: center;
}

.section-title {
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #F5F5F5;
  text-align: center;
  margin-bottom: 4rem;
}

/* ===== Philosophy ===== */
.philosophy-section {
  padding: 7rem 2rem;
  background: #0D0D0D;
}

.phi-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.phi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid rgba(245,245,245,0.06);
}

.phi-card {
  padding: 3rem 2.5rem;
  border-right: 1px solid rgba(245,245,245,0.06);
  transition: background 0.4s;
}

.phi-card:last-child { border-right: none; }

.phi-card:hover {
  background: rgba(232, 64, 12, 0.04);
}

.phi-num {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  color: #E8400C;
  margin-bottom: 1rem;
  font-weight: 700;
}

.phi-word {
  font-size: 4rem;
  font-weight: 900;
  color: rgba(245,245,245,0.08);
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.phi-name {
  font-size: 1rem;
  font-weight: 700;
  color: #F5F5F5;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.phi-desc {
  font-size: 0.8rem;
  line-height: 2;
  color: rgba(245,245,245,0.45);
}

/* ===== Programs ===== */
.programs-section {
  padding: 7rem 2rem;
  background: #080808;
}

.prog-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.prog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.prog-card {
  position: relative;
  background: #111;
  border: 1px solid rgba(245,245,245,0.06);
  border-radius: 8px;
  padding: 2.5rem 2rem;
  transition: all 0.4s;
}

.prog-card:hover {
  border-color: rgba(232,64,12,0.3);
  transform: translateY(-4px);
}

.prog-highlight {
  border-color: #E8400C !important;
  background: #130800;
}

.prog-badge {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: #E8400C;
  color: #F5F5F5;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  padding: 0.3rem 1rem;
  border-radius: 0 0 6px 6px;
}

.prog-icon {
  font-size: 1.5rem;
  color: #E8400C;
  margin-bottom: 1.25rem;
}

.prog-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #F5F5F5;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}

.prog-desc {
  font-size: 0.78rem;
  line-height: 1.8;
  color: rgba(245,245,245,0.4);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(245,245,245,0.06);
}

.prog-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.prog-price {
  font-size: 1.8rem;
  font-weight: 800;
  color: #F5F5F5;
}

.prog-unit {
  font-size: 0.75rem;
  color: rgba(245,245,245,0.35);
}

.prog-features {
  list-style: none;
  padding: 0; margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 2rem;
}

.prog-features li {
  font-size: 0.8rem;
  color: rgba(245,245,245,0.6);
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
}

.feat-check {
  color: #E8400C;
  font-size: 0.7rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.prog-cta {
  display: block;
  text-align: center;
  padding: 0.8rem;
  border: 1px solid rgba(245,245,245,0.15);
  color: rgba(245,245,245,0.6);
  border-radius: 4px;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.3s;
}

.prog-cta:hover {
  border-color: #E8400C;
  color: #E8400C;
}

.prog-cta-fire {
  background: #E8400C;
  border-color: #E8400C !important;
  color: #F5F5F5 !important;
}

.prog-cta-fire:hover {
  background: #FF6B35 !important;
  border-color: #FF6B35 !important;
}

/* ===== Results ===== */
.results-section {
  padding: 7rem 2rem;
  background: #E8400C;
}

.results-section .section-label { color: rgba(8,8,8,0.5); }
.results-section .section-title { color: #080808; }

.results-inner { max-width: 1100px; margin: 0 auto; }

.results-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.result-num {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #080808;
  letter-spacing: 0.05em;
}

.result-label {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: rgba(8,8,8,0.55);
  text-align: center;
}

.results-img-wrap {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/6;
  background: rgba(8,8,8,0.15);
}

.results-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.results-tag {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background: #080808;
  color: #E8400C;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-weight: 700;
}

/* ===== Testimonials ===== */
.testimonials-section {
  padding: 7rem 2rem;
  background: #0D0D0D;
}

.test-inner { max-width: 1100px; margin: 0 auto; }

.test-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.test-card {
  background: #111;
  border: 1px solid rgba(245,245,245,0.06);
  border-radius: 8px;
  padding: 2rem;
  transition: border-color 0.4s;
}

.test-card:hover { border-color: rgba(232,64,12,0.25); }

.test-quote {
  font-size: 3rem;
  color: #E8400C;
  line-height: 1;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
  opacity: 0.7;
}

.test-text {
  font-size: 0.85rem;
  line-height: 2;
  color: rgba(245,245,245,0.6);
  margin-bottom: 1.5rem;
}

.test-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(245,245,245,0.06);
}

.test-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #E8400C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #F5F5F5;
  flex-shrink: 0;
}

.test-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: #F5F5F5;
  letter-spacing: 0.05em;
}

.test-meta {
  font-size: 0.68rem;
  color: rgba(245,245,245,0.3);
  margin-top: 0.2rem;
  letter-spacing: 0.05em;
}

/* ===== Booking ===== */
.booking-section {
  padding: 7rem 2rem;
  background: #080808;
  border-top: 1px solid rgba(232,64,12,0.15);
}

.booking-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: start;
}

.booking-left .section-label { text-align: left; }
.booking-left .section-title { text-align: left; margin-bottom: 1.5rem; }

.booking-desc {
  font-size: 0.85rem;
  line-height: 2;
  color: rgba(245,245,245,0.45);
  margin-bottom: 2.5rem;
}

.booking-info {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.binfo-row {
  display: flex;
  gap: 1.5rem;
  font-size: 0.8rem;
  color: rgba(245,245,245,0.5);
}

.binfo-label {
  color: #E8400C;
  width: 50px;
  flex-shrink: 0;
  font-weight: 600;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem;
  background: #111;
  border: 1px solid rgba(245,245,245,0.06);
  border-radius: 8px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  color: rgba(245,245,245,0.4);
  text-transform: uppercase;
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(245,245,245,0.04);
  border: 1px solid rgba(245,245,245,0.08);
  border-radius: 4px;
  padding: 0.85rem 1rem;
  color: #F5F5F5;
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #E8400C;
}

.form-group select option { background: #1a1a1a; }
.form-group textarea { resize: vertical; }

/* ===== Footer ===== */
.fit-footer {
  background: #040404;
  padding: 3rem 2rem 2rem;
  border-top: 1px solid rgba(245,245,245,0.04);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(245,245,245,0.04);
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer-name {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.3em;
  color: #F5F5F5;
  margin-bottom: 0.4rem;
}

.footer-tagline {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: rgba(245,245,245,0.2);
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-links a {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  color: rgba(245,245,245,0.3);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover { color: #E8400C; }

.footer-bottom {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: rgba(245,245,245,0.15);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-credit { color: rgba(232,64,12,0.3); }

/* ===== RWD ===== */
@media (max-width: 768px) {
  .phi-grid { grid-template-columns: 1fr; }
  .phi-card { border-right: none; border-bottom: 1px solid rgba(245,245,245,0.06); }
  .phi-card:last-child { border-bottom: none; }

  .prog-grid { grid-template-columns: 1fr; }

  .results-grid { grid-template-columns: repeat(2, 1fr); }

  .test-grid { grid-template-columns: 1fr; }

  .booking-inner { grid-template-columns: 1fr; gap: 3rem; }

  .nav-links { display: none; }
}
</style>
