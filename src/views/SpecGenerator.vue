<template>
  <video autoplay loop muted playsinline class="bg-video no-print">
    <source src="/bc_video.mp4" type="video/mp4" />
  </video>

  <div class="min-h-screen relative z-10">

    <!-- Page Header -->
    <div class="no-print pt-24 pb-8 px-6 text-center">
      <p class="text-xs tracking-[0.3em] uppercase text-[#BFA76A] mb-3">Golden Mountain 內部工具</p>
      <h1 class="text-3xl md:text-4xl font-extrabold mb-3">
        <span class="bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A] bg-clip-text text-transparent">
          規格書產生器
        </span>
      </h1>
      <p class="text-gray-300 text-sm">填寫專案規格後，右側即時產生規格書預覽，完成後點擊「列印 / 儲存 PDF」。</p>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

      <!-- ===== LEFT: FORM ===== -->
      <div class="no-print space-y-6">

        <!-- 1. 基本資料 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">1</span>
            基本資料
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2">
              <label class="form-label">專案名稱 *</label>
              <input v-model="form.projectName" class="form-input" placeholder="例：○○品牌官網設計開發" />
            </div>
            <div>
              <label class="form-label">客戶名稱 *</label>
              <input v-model="form.clientName" class="form-input" placeholder="例：○○有限公司" />
            </div>
            <div>
              <label class="form-label">文件版本</label>
              <input v-model="form.version" class="form-input" placeholder="例：v1.0" />
            </div>
            <div>
              <label class="form-label">建立日期</label>
              <input v-model="form.createDate" type="date" class="form-input" />
            </div>
            <div>
              <label class="form-label">文件狀態</label>
              <select v-model="form.status" class="form-input">
                <option>草稿</option>
                <option>審核中</option>
                <option>已確認</option>
              </select>
            </div>
            <div>
              <label class="form-label">撰寫人</label>
              <input v-model="form.author" class="form-input" />
            </div>
            <div>
              <label class="form-label">客戶確認人</label>
              <input v-model="form.clientContact" class="form-input" placeholder="例：王小明" />
            </div>
          </div>
        </section>

        <!-- 2. 專案概述 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">2</span>
            專案概述
          </h2>
          <div class="space-y-4">
            <div>
              <label class="form-label">服務類型</label>
              <select v-model="form.serviceType" class="form-input">
                <option>客製化形象網站</option>
                <option>系統 / 會員功能開發</option>
                <option>電商平台開發</option>
                <option>VPS 主機架設與維護</option>
                <option>網站設計開發（含系統）</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="form-label">專案目標</label>
              <textarea
                v-model="form.projectGoal"
                class="form-input"
                rows="3"
                placeholder="例：建立品牌官方形象網站，提升線上能見度，提供聯絡管道給潛在客戶。"
              ></textarea>
            </div>
            <div>
              <label class="form-label">目標受眾</label>
              <input v-model="form.targetAudience" class="form-input" placeholder="例：25-45 歲台灣中小企業主" />
            </div>
            <div>
              <label class="form-label">參考網站（選填）</label>
              <textarea
                v-model="form.references"
                class="form-input"
                rows="2"
                placeholder="列出客戶喜歡的參考網站，例如：&#10;https://example.com（喜歡其排版風格）"
              ></textarea>
            </div>
          </div>
        </section>

        <!-- 3. 頁面 / 功能清單 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">3</span>
            頁面 / 功能清單
          </h2>
          <div class="space-y-3">
            <div
              v-for="(page, idx) in form.pages"
              :key="idx"
              class="page-item"
            >
              <div class="flex items-center gap-2 mb-2">
                <span class="text-[#BFA76A] text-xs font-bold w-6 shrink-0">{{ idx + 1 }}.</span>
                <input
                  v-model="page.name"
                  class="form-input flex-1"
                  :placeholder="'頁面 / 功能名稱，例：' + pagePlaceholders[idx % pagePlaceholders.length]"
                />
                <button @click="removePage(idx)" class="remove-btn" title="移除">✕</button>
              </div>
              <textarea
                v-model="page.features"
                class="form-input ml-8"
                rows="3"
                :placeholder="'功能細節，例如：\n- 滿版 Hero Banner（含影片背景）\n- CTA 按鈕連結至聯絡頁\n- 手機版響應式佈局'"
              ></textarea>
            </div>
            <button @click="addPage" class="add-btn">
              + 新增頁面 / 功能
            </button>
          </div>
        </section>

        <!-- 4. 設計規範 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">4</span>
            設計規範
          </h2>
          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="form-label">主色調</label>
                <div class="flex gap-2 items-center">
                  <input type="color" v-model="form.primaryColor" class="color-picker" />
                  <input v-model="form.primaryColor" class="form-input" placeholder="#000000" />
                </div>
              </div>
              <div>
                <label class="form-label">輔助色</label>
                <div class="flex gap-2 items-center">
                  <input type="color" v-model="form.secondaryColor" class="color-picker" />
                  <input v-model="form.secondaryColor" class="form-input" placeholder="#ffffff" />
                </div>
              </div>
            </div>
            <div>
              <label class="form-label">字型</label>
              <input v-model="form.typography" class="form-input" placeholder="例：繁體中文用 Noto Sans TC，英文用 Inter" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="form-label">按鈕風格</label>
                <select v-model="form.buttonStyle" class="form-input">
                  <option>圓角填色按鈕</option>
                  <option>直角填色按鈕</option>
                  <option>圓角外框按鈕</option>
                  <option>直角外框按鈕</option>
                  <option>漸層按鈕</option>
                  <option>文字連結按鈕</option>
                </select>
              </div>
              <div>
                <label class="form-label">版面風格</label>
                <select v-model="form.layoutStyle" class="form-input">
                  <option>居中容器（max-width）</option>
                  <option>全寬版面</option>
                  <option>非對稱佈局</option>
                  <option>卡片式網格</option>
                  <option>雜誌式排版</option>
                </select>
              </div>
              <div>
                <label class="form-label">圖片比例</label>
                <select v-model="form.imageRatio" class="form-input">
                  <option>16:9</option>
                  <option>4:3</option>
                  <option>1:1（正方形）</option>
                  <option>3:2</option>
                  <option>自由比例</option>
                </select>
              </div>
            </div>
            <div>
              <label class="form-label">設計風格方向</label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <label v-for="style in designStyles" :key="style" class="style-chip">
                  <input type="checkbox" v-model="form.designStyles" :value="style" class="hidden" />
                  <span :class="form.designStyles.includes(style) ? 'style-chip-active' : 'style-chip-inactive'">
                    {{ style }}
                  </span>
                </label>
              </div>
            </div>
            <div>
              <label class="form-label">其他設計備註（選填）</label>
              <textarea v-model="form.designNotes" class="form-input" rows="2" placeholder="例：整體偏高端質感，避免過於花俏"></textarea>
            </div>
          </div>
        </section>

        <!-- 5. 技術規格 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">5</span>
            技術規格
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">前端框架</label>
              <select v-model="form.frontend" class="form-input">
                <option>Vue 3</option>
                <option>React</option>
                <option>HTML / CSS / JS（靜態）</option>
                <option>WordPress</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="form-label">後端框架</label>
              <select v-model="form.backend" class="form-input">
                <option>不需要後端</option>
                <option>Laravel</option>
                <option>Node.js / Express</option>
                <option>WordPress（含後端）</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="form-label">資料庫</label>
              <select v-model="form.database" class="form-input">
                <option>不需要</option>
                <option>MySQL</option>
                <option>PostgreSQL</option>
                <option>MongoDB</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="form-label">主機 / 部署環境</label>
              <select v-model="form.hosting" class="form-input">
                <option>客戶自備主機</option>
                <option>乙方 VPS（另議費用）</option>
                <option>Vercel / Netlify</option>
                <option>AWS / GCP</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="form-label">部署方式</label>
              <select v-model="form.deployment" class="form-input">
                <option>Linux VPS + Nginx</option>
                <option>Linux VPS + Apache</option>
                <option>Vercel / Netlify</option>
                <option>Docker + VPS</option>
                <option>AWS / GCP</option>
                <option>其他</option>
              </select>
            </div>
            <div>
              <label class="form-label">版本控制</label>
              <select v-model="form.versionControl" class="form-input">
                <option>Git（GitHub）</option>
                <option>Git（GitLab）</option>
                <option>Git（Bitbucket）</option>
                <option>不使用</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">瀏覽器相容性</label>
              <input v-model="form.browsers" class="form-input" placeholder="例：Chrome、Safari、Edge（最新版），支援 iOS / Android 手機" />
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">第三方服務 / 整合（選填）</label>
              <textarea
                v-model="form.thirdParty"
                class="form-input"
                rows="2"
                placeholder="例：Google Analytics、Resend（Email）、LINE 通知、金流（綠界）"
              ></textarea>
            </div>
          </div>
        </section>

        <!-- 6. 不含範圍 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">6</span>
            不含範圍
          </h2>
          <textarea
            v-model="form.exclusions"
            class="form-input"
            rows="3"
            placeholder="例：&#10;- 主機費用及網域費用&#10;- 文案撰寫與翻譯&#10;- 商業攝影及圖片授權&#10;- 第三方服務月費"
          ></textarea>
        </section>

        <!-- 7. 測試與驗收 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">7</span>
            測試與驗收
          </h2>
          <div class="space-y-4">
            <div>
              <label class="form-label">甲方驗收期限（工作日）</label>
              <select v-model.number="form.acceptanceDays" class="form-input">
                <option :value="3">3 個工作日</option>
                <option :value="5">5 個工作日</option>
                <option :value="7">7 個工作日</option>
                <option :value="14">14 個工作日</option>
              </select>
            </div>
            <div>
              <label class="form-label">驗收細項（選填）</label>
              <textarea
                v-model="form.acceptance"
                class="form-input"
                rows="4"
                placeholder="例：&#10;• 所有頁面於指定瀏覽器正常顯示，無版面破版&#10;• 所有表單功能正常運作（含 Email 通知）&#10;• Google PageSpeed 行動版分數 ≥ 70"
              ></textarea>
            </div>
          </div>
        </section>

        <!-- 8. 版本變更紀錄 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">8</span>
            版本變更紀錄
          </h2>
          <div class="space-y-2">
            <div
              v-for="(log, idx) in form.changelog"
              :key="idx"
              class="flex gap-2 items-center"
            >
              <input v-model="log.version" class="form-input w-20 shrink-0" placeholder="v1.0" />
              <input v-model="log.date" type="date" class="form-input w-36 shrink-0" />
              <input v-model="log.description" class="form-input flex-1" placeholder="說明，例：初版建立" />
              <button @click="removeLog(idx)" class="remove-btn shrink-0" title="移除">✕</button>
            </div>
            <button @click="addLog" class="add-btn">+ 新增版本</button>
          </div>
        </section>

        <!-- 9. 備註 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">9</span>
            其他備註（選填）
          </h2>
          <textarea
            v-model="form.notes"
            class="form-input"
            rows="3"
            placeholder="任何補充說明或特殊需求…"
          ></textarea>
        </section>

        <!-- Print Button -->
        <button
          @click="printSpec"
          class="w-full py-4 bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-black font-bold text-base rounded-xl hover:opacity-90 transition-opacity"
        >
          列印 / 儲存 PDF
        </button>
        <p class="text-center text-gray-500 text-xs pb-4">列印時建議使用「另存為 PDF」，並勾選「背景圖形」以保留樣式</p>
      </div>

      <!-- ===== RIGHT: PREVIEW ===== -->
      <div class="lg:sticky lg:top-24 lg:self-start">
        <div class="no-print bg-white/5 border border-white/10 rounded-xl px-4 py-2 mb-3 text-center">
          <p class="text-gray-400 text-xs">即時預覽 — 填寫左側表單後規格書內容會自動更新</p>
        </div>

        <div id="spec-preview" class="bg-white text-gray-900 rounded-2xl shadow-2xl p-10 text-sm leading-relaxed">

          <!-- Header -->
          <div class="text-center mb-6">
            <h1 class="text-xl font-bold tracking-widest mb-1">專案規格書</h1>
            <p class="text-gray-400 text-xs tracking-wider">PROJECT SPECIFICATION DOCUMENT</p>
            <div class="mt-3 mx-auto w-16 h-0.5 bg-gray-300"></div>
          </div>

          <!-- Meta table -->
          <table class="meta-table">
            <tbody>
              <tr>
                <td class="meta-label">專案名稱</td>
                <td class="meta-value font-semibold">{{ form.projectName || '＿＿＿＿＿＿＿＿' }}</td>
                <td class="meta-label">客戶名稱</td>
                <td class="meta-value">{{ form.clientName || '＿＿＿＿＿＿' }}</td>
              </tr>
              <tr>
                <td class="meta-label">文件版本</td>
                <td class="meta-value">{{ form.version || 'v1.0' }}</td>
                <td class="meta-label">文件狀態</td>
                <td class="meta-value">
                  <span :class="statusClass">{{ form.status }}</span>
                </td>
              </tr>
              <tr>
                <td class="meta-label">建立日期</td>
                <td class="meta-value">{{ formatDate(form.createDate) }}</td>
                <td class="meta-label">撰寫人</td>
                <td class="meta-value">{{ form.author }}</td>
              </tr>
              <tr v-if="form.clientContact">
                <td class="meta-label">客戶確認人</td>
                <td class="meta-value" colspan="3">{{ form.clientContact }}</td>
              </tr>
            </tbody>
          </table>

          <!-- Version changelog -->
          <div v-if="form.changelog.length" class="mb-5">
            <table class="meta-table">
              <thead>
                <tr>
                  <td class="meta-label" style="width:15%">版本</td>
                  <td class="meta-label" style="width:25%">日期</td>
                  <td class="meta-label">變更說明</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(log, idx) in form.changelog" :key="idx">
                  <td class="meta-value font-mono">{{ log.version }}</td>
                  <td class="meta-value">{{ log.date }}</td>
                  <td class="meta-value">{{ log.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Section 1: 專案概述 -->
          <div class="spec-section">
            <h3 class="spec-title">一、專案概述</h3>
            <div class="spec-row">
              <span class="spec-label">服務類型：</span>
              <span>{{ form.serviceType }}</span>
            </div>
            <div class="spec-row" v-if="form.projectGoal">
              <span class="spec-label">專案目標：</span>
              <div class="whitespace-pre-line">{{ form.projectGoal }}</div>
            </div>
            <div class="spec-row" v-if="form.targetAudience">
              <span class="spec-label">目標受眾：</span>
              <span>{{ form.targetAudience }}</span>
            </div>
            <div class="spec-row" v-if="form.references">
              <span class="spec-label">參考網站：</span>
              <div class="whitespace-pre-line text-gray-600">{{ form.references }}</div>
            </div>
          </div>

          <!-- Section 2: 頁面/功能清單 -->
          <div class="spec-section">
            <h3 class="spec-title">二、頁面 / 功能清單</h3>
            <div v-if="form.pages.length === 0" class="text-gray-400 text-xs italic">（尚未新增頁面）</div>
            <div v-for="(page, idx) in form.pages" :key="idx" class="mb-3">
              <p class="font-semibold text-xs mb-1">
                {{ idx + 1 }}. {{ page.name || `頁面 ${idx + 1}` }}
              </p>
              <div class="ml-4 whitespace-pre-line text-gray-600 text-xs">{{ page.features || '（功能待填寫）' }}</div>
            </div>
          </div>

          <!-- Section 3: 設計規範 -->
          <div class="spec-section">
            <h3 class="spec-title">三、設計規範</h3>
            <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2">
              <div class="spec-row">
                <span class="spec-label">主色調：</span>
                <span class="inline-flex items-center gap-1.5">
                  <span class="inline-block w-3 h-3 rounded border border-gray-300 shrink-0" :style="{ background: form.primaryColor }"></span>
                  {{ form.primaryColor }}
                </span>
              </div>
              <div class="spec-row">
                <span class="spec-label">輔助色：</span>
                <span class="inline-flex items-center gap-1.5">
                  <span class="inline-block w-3 h-3 rounded border border-gray-300 shrink-0" :style="{ background: form.secondaryColor }"></span>
                  {{ form.secondaryColor }}
                </span>
              </div>
              <div class="spec-row" v-if="form.typography">
                <span class="spec-label">字型：</span>
                <span>{{ form.typography }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">按鈕風格：</span>
                <span>{{ form.buttonStyle }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">版面風格：</span>
                <span>{{ form.layoutStyle }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">圖片比例：</span>
                <span>{{ form.imageRatio }}</span>
              </div>
            </div>
            <div class="spec-row" v-if="form.designStyles.length">
              <span class="spec-label">設計風格：</span>
              <span>{{ form.designStyles.join('、') }}</span>
            </div>
            <div class="spec-row" v-if="form.designNotes">
              <span class="spec-label">備註：</span>
              <span>{{ form.designNotes }}</span>
            </div>
          </div>

          <!-- Section 4: 技術規格 -->
          <div class="spec-section">
            <h3 class="spec-title">四、技術規格</h3>
            <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div class="spec-row">
                <span class="spec-label">前端框架：</span>
                <span>{{ form.frontend }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">後端框架：</span>
                <span>{{ form.backend }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">資料庫：</span>
                <span>{{ form.database }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">主機環境：</span>
                <span>{{ form.hosting }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">部署方式：</span>
                <span>{{ form.deployment }}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">版本控制：</span>
                <span>{{ form.versionControl }}</span>
              </div>
            </div>
            <div class="spec-row mt-1" v-if="form.thirdParty">
              <span class="spec-label">第三方整合：</span>
              <span>{{ form.thirdParty }}</span>
            </div>
            <div class="spec-row" v-if="form.browsers">
              <span class="spec-label">瀏覽器相容：</span>
              <span>{{ form.browsers }}</span>
            </div>
          </div>

          <!-- Section 五：不含範圍 -->
          <div class="spec-section" v-if="form.exclusions">
            <h3 class="spec-title">{{ toChSec(sectionNums.exclusions) }}、不含範圍</h3>
            <div class="whitespace-pre-line text-gray-700">{{ form.exclusions }}</div>
          </div>

          <!-- Section 測試與驗收 -->
          <div class="spec-section">
            <h3 class="spec-title">{{ toChSec(sectionNums.testing) }}、測試與驗收</h3>
            <p class="text-xs text-gray-700 mb-1">一、乙方完成開發後，將提供測試版本供甲方確認。</p>
            <p class="text-xs text-gray-700 mb-1">二、甲方應於 <strong>{{ form.acceptanceDays }} 個工作日</strong>內進行測試並以書面提出修改事項。若未於期限內提出異議，視為驗收完成，乙方得請求支付尾款。</p>
            <p class="text-xs text-gray-700 mb-1">三、驗收後之額外修改需求，非屬原合約範圍者，另行報價處理。</p>
            <div v-if="form.acceptance" class="mt-2">
              <p class="text-xs font-semibold text-gray-600 mb-1">四、驗收細項：</p>
              <div class="ml-4 whitespace-pre-line text-gray-700 text-xs">{{ form.acceptance }}</div>
            </div>
          </div>

          <!-- Section 備註 -->
          <div class="spec-section" v-if="form.notes">
            <h3 class="spec-title">{{ toChSec(sectionNums.notes) }}、其他備註</h3>
            <div class="whitespace-pre-line text-gray-700">{{ form.notes }}</div>
          </div>

          <!-- Confirmation -->
          <div class="mt-8 pt-6 border-t border-gray-300">
            <p class="text-center text-gray-600 text-xs mb-2">本規格書經雙方確認後即為本次專案之執行依據，如需變更須雙方書面同意。</p>
            <p class="text-center text-xs mb-8">確認日期：{{ formatDate(form.createDate) }}</p>

            <div class="grid grid-cols-2 gap-12 text-xs">
              <div>
                <p class="font-bold text-sm mb-3">甲方（客戶）</p>
                <p>公司／姓名：{{ form.clientName || '＿＿＿＿＿＿＿' }}</p>
                <p>確認人：{{ form.clientContact || '＿＿＿＿＿＿＿' }}</p>
                <div class="mt-4">
                  <p class="text-gray-400 text-[10px] mb-1">簽章（簽名或電子簽章）</p>
                  <canvas
                    ref="clientCanvas"
                    width="220" height="80"
                    class="sig-canvas"
                  ></canvas>
                  <div class="sig-type-row no-print">
                    <input v-model="clientSigText" class="sig-type-input" placeholder="輸入姓名套用簽名字型" />
                    <button @click="applyClientSig" class="sig-type-btn">套用</button>
                    <button @click="clearClientCanvas" class="sig-clear">清除</button>
                  </div>
                </div>
              </div>
              <div>
                <p class="font-bold text-sm mb-3">乙方（承接方）</p>
                <p>公司／姓名：金山網頁設計</p>
                <p>負責人：{{ form.author }}</p>
                <div class="mt-4">
                  <p class="text-gray-400 text-[10px] mb-1">簽章（簽名或電子簽章）</p>
                  <canvas
                    ref="providerCanvas"
                    width="220" height="80"
                    class="sig-canvas"
                  ></canvas>
                  <div class="sig-type-row no-print">
                    <input v-model="providerSigText" class="sig-type-input" placeholder="輸入姓名套用簽名字型" />
                    <button @click="applyProviderSig" class="sig-type-btn">套用</button>
                    <button @click="clearProviderCanvas" class="sig-clear">清除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div><!-- end #spec-preview -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'

const designStyles = ['極簡現代', '高端質感', '活潑親切', '企業穩重', '科技感', '日系清新', '暗黑風格', '繽紛多彩']

const pagePlaceholders = ['首頁（Home）', '關於我們', '服務項目', '作品集', '聯絡我們', '會員登入', '購物車', '後台管理']

const form = reactive({
  // 基本資料
  projectName: '',
  clientName: '',
  version: 'v1.0',
  createDate: new Date().toISOString().split('T')[0],
  status: '草稿',
  author: '蔡家豪',
  clientContact: '',
  // 專案概述
  serviceType: '客製化形象網站',
  projectGoal: '',
  targetAudience: '',
  references: '',
  // 頁面清單
  pages: [
    { name: '', features: '' },
  ],
  // 設計規範
  primaryColor: '#BFA76A',
  secondaryColor: '#1a1a2e',
  typography: 'Noto Sans TC（中文）、Inter（英文）',
  buttonStyle: '圓角填色按鈕',
  layoutStyle: '居中容器（max-width）',
  imageRatio: '16:9',
  designStyles: [],
  designNotes: '',
  // 技術規格
  frontend: 'Vue 3',
  backend: 'Laravel',
  database: 'MySQL',
  hosting: '客戶自備主機',
  deployment: 'Linux VPS + Nginx',
  versionControl: 'Git（GitHub）',
  thirdParty: '',
  browsers: 'Chrome、Safari、Edge（最新版），支援 iOS / Android 手機',
  // 其他
  exclusions: '• 客戶內容撰寫\n• 專業攝影\n• Logo 設計\n• 付費素材購買\n• 第三方 API 費用',
  acceptanceDays: 7,
  acceptance: '',
  notes: '',
  // 版本紀錄
  changelog: [
    { version: 'v1.0', date: new Date().toISOString().split('T')[0], description: '初版建立' },
  ],
})

function addPage() {
  form.pages.push({ name: '', features: '' })
}

function removePage(idx) {
  form.pages.splice(idx, 1)
}

function addLog() {
  form.changelog.push({ version: '', date: new Date().toISOString().split('T')[0], description: '' })
}

function removeLog(idx) {
  form.changelog.splice(idx, 1)
}

const CH_NUMS = ['一','二','三','四','五','六','七','八','九','十']
function toChSec(n) { return CH_NUMS[n - 1] || String(n) }

const sectionNums = computed(() => {
  let n = 4
  const nums = {}
  if (form.exclusions) nums.exclusions = ++n
  nums.testing = ++n
  if (form.notes) nums.notes = ++n
  return nums
})

function formatDate(dateStr) {
  if (!dateStr) return '　　　　年　　月　　日'
  const [y, m, d] = dateStr.split('-')
  return `${y} 年 ${parseInt(m)} 月 ${parseInt(d)} 日`
}

const statusClass = computed(() => {
  const map = {
    '草稿': 'px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-600',
    '審核中': 'px-2 py-0.5 rounded text-xs bg-yellow-100 text-yellow-700',
    '已確認': 'px-2 py-0.5 rounded text-xs bg-green-100 text-green-700',
  }
  return map[form.status] || ''
})

// ── Signature canvas ──────────────────────────────
const clientCanvas = ref(null)
const providerCanvas = ref(null)

function initCanvas(canvas) {
  let isDrawing = false
  let lastX = 0
  let lastY = 0

  function getPos(e) {
    const rect = canvas.getBoundingClientRect()
    const src = e.touches ? e.touches[0] : e
    return {
      x: (src.clientX - rect.left) * (canvas.width / rect.width),
      y: (src.clientY - rect.top) * (canvas.height / rect.height),
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    const pos = getPos(e)
    lastX = pos.x
    lastY = pos.y
  })

  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault()
    isDrawing = true
    const pos = getPos(e)
    lastX = pos.x
    lastY = pos.y
  }, { passive: false })

  function onMove(e) {
    if (!isDrawing) return
    const pos = getPos(e)
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(pos.x, pos.y)
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
    lastX = pos.x
    lastY = pos.y
  }

  window.addEventListener('mousemove', onMove)
  canvas.addEventListener('touchmove', (e) => { e.preventDefault(); onMove(e) }, { passive: false })

  window.addEventListener('mouseup', () => { isDrawing = false })
  canvas.addEventListener('touchend', () => { isDrawing = false })
}

onMounted(() => {
  initCanvas(clientCanvas.value)
  initCanvas(providerCanvas.value)
})

function clearClientCanvas() {
  if (clientCanvas.value) clientCanvas.value.width = clientCanvas.value.width
}
function clearProviderCanvas() {
  if (providerCanvas.value) providerCanvas.value.width = providerCanvas.value.width
}

const clientSigText = ref('')
const providerSigText = ref('蔡家豪')

function applyTextSig(canvas, name) {
  if (!canvas || !name.trim()) return
  canvas.width = canvas.width
  document.fonts.load('40px "Liu Jian Mao Cao"').then(() => {
    const ctx = canvas.getContext('2d')
    ctx.font = '40px "Liu Jian Mao Cao"'
    ctx.fillStyle = '#1a1a1a'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(name.trim(), canvas.width / 2, canvas.height / 2)
  })
}

function applyClientSig() {
  applyTextSig(clientCanvas.value, clientSigText.value)
}
function applyProviderSig() {
  applyTextSig(providerCanvas.value, providerSigText.value)
}
// ──────────────────────────────────────────────────

function printSpec() {
  window.print()
}
</script>

<!-- Global: print styles -->
<style>
@media print {
  header,
  .no-print {
    display: none !important;
  }

  body {
    background: white !important;
  }

  #spec-preview {
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    padding: 1.5cm 2cm !important;
    font-size: 11pt !important;
    line-height: 1.8 !important;
  }
}
</style>

<!-- Scoped: component styles -->
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

.form-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #E3D3A3;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.section-badge {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #BFA76A;
  color: #000;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.form-label {
  display: block;
  color: #d1d5db;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.form-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 0.6rem 0.875rem;
  color: #fff;
  font-size: 0.875rem;
  transition: border-color 0.2s;
  outline: none;
}

.form-input:focus {
  border-color: #BFA76A;
}

.form-input::placeholder {
  color: #6b7280;
}

select.form-input option {
  background: #1a1a2e;
  color: #fff;
}

.color-picker {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: none;
  cursor: pointer;
  padding: 2px;
  flex-shrink: 0;
}

.style-chip {
  cursor: pointer;
}

.style-chip-active {
  display: block;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  background: #BFA76A;
  color: #000;
  font-weight: 600;
}

.style-chip-inactive {
  display: block;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: #9ca3af;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.page-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 0.75rem;
}

.add-btn {
  width: 100%;
  padding: 0.6rem;
  border: 1px dashed rgba(191, 167, 106, 0.4);
  border-radius: 0.5rem;
  color: #BFA76A;
  font-size: 0.8rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.add-btn:hover {
  background: rgba(191, 167, 106, 0.08);
  border-color: #BFA76A;
}

.remove-btn {
  color: #6b7280;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 0.25rem 0.4rem;
  border-radius: 0.25rem;
  flex-shrink: 0;
  transition: color 0.2s;
}

.remove-btn:hover {
  color: #ef4444;
}

/* Preview styles */
/* Signature canvas */
.sig-canvas {
  display: block;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: crosshair;
  touch-action: none;
  background: #fafafa;
  width: 100%;
  max-width: 220px;
}

.sig-type-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}

.sig-type-input {
  flex: 1;
  font-size: 12px;
  padding: 3px 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  outline: none;
  color: #374151;
  min-width: 0;
}

.sig-type-input:focus {
  border-color: #BFA76A;
}

.sig-type-btn {
  font-size: 11px;
  padding: 3px 10px;
  background: #BFA76A;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.sig-type-btn:hover {
  background: #A58A4A;
}

.sig-clear {
  font-size: 11px;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  white-space: nowrap;
}

.sig-clear:hover {
  color: #ef4444;
}

.meta-table {
  width: 100%;
  font-size: 0.75rem;
  border-collapse: collapse;
  margin-bottom: 1.25rem;
}

.meta-table td {
  padding: 0.3rem 0.5rem;
  border: 1px solid #e5e7eb;
}

.meta-label {
  background: #f9fafb;
  color: #6b7280;
  font-weight: 600;
  width: 20%;
  white-space: nowrap;
}

.meta-value {
  width: 30%;
}

.spec-section {
  margin-bottom: 1.25rem;
}

.spec-title {
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: #111;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.25rem;
}

.spec-row {
  display: flex;
  gap: 0.25rem;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
}

.spec-label {
  color: #6b7280;
  font-weight: 600;
  white-space: nowrap;
}
</style>
