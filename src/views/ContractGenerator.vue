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
          合約產生器
        </span>
      </h1>
      <p class="text-gray-300 text-sm">填寫專案資訊後，右側即時產生合約預覽，完成後點擊「列印 / 儲存 PDF」。</p>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

      <!-- ===== LEFT: FORM ===== -->
      <div class="no-print space-y-6">

        <!-- 1. 甲方資料 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">1</span>
            甲方（客戶）資料
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2">
              <label class="form-label">公司或個人名稱 *</label>
              <input v-model="form.clientName" class="form-input" placeholder="例：○○有限公司 / 王小明" />
            </div>
            <div>
              <label class="form-label">負責人姓名</label>
              <input v-model="form.clientPerson" class="form-input" placeholder="例：王小明" />
            </div>
            <div>
              <label class="form-label">統一編號（選填）</label>
              <input v-model="form.clientTaxId" class="form-input" placeholder="公司填寫" />
            </div>
            <div>
              <label class="form-label">聯絡電話</label>
              <input v-model="form.clientPhone" class="form-input" placeholder="0912-345-678" />
            </div>
            <div>
              <label class="form-label">電子郵件</label>
              <input v-model="form.clientEmail" class="form-input" placeholder="client@example.com" />
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">聯絡地址</label>
              <input v-model="form.clientAddress" class="form-input" placeholder="台北市○○區○○路123號" />
            </div>
          </div>
        </section>

        <!-- 2. 專案範圍 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">2</span>
            專案範圍
          </h2>
          <div class="space-y-4">
            <div>
              <label class="form-label">專案名稱 *</label>
              <input v-model="form.projectName" class="form-input" placeholder="例：○○品牌官網設計開發" />
            </div>
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
              <label class="form-label">交付項目 *</label>
              <textarea
                v-model="form.deliverables"
                class="form-input"
                rows="5"
                placeholder="詳細列出交付內容，例如：&#10;1. 響應式形象網站（5頁）&#10;2. 聯絡表單 + Email 通知&#10;3. 基礎 SEO 設定&#10;4. 上線部署協助"
              ></textarea>
            </div>
            <div>
              <label class="form-label">不含範圍（選填）</label>
              <textarea
                v-model="form.exclusions"
                class="form-input"
                rows="2"
                placeholder="例：主機費用、第三方服務費、文案撰寫、圖片購買"
              ></textarea>
            </div>
            <div>
              <label class="form-label">修改次數</label>
              <select v-model="form.revisions" class="form-input">
                <option value="2">2 次</option>
                <option value="3">3 次</option>
                <option value="5">5 次</option>
                <option value="不限次數（需於合理範圍內）">不限次數（合理範圍內）</option>
              </select>
            </div>
          </div>
        </section>

        <!-- 3. 費用與付款 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">3</span>
            費用與付款
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">專案總金額（NT$）*</label>
              <input v-model.number="form.totalAmount" type="number" min="0" class="form-input" placeholder="60000" />
            </div>
            <div>
              <label class="form-label">訂金比例</label>
              <select v-model.number="form.depositRate" class="form-input">
                <option :value="30">30%</option>
                <option :value="50">50%</option>
                <option :value="100">100%（全額付清）</option>
              </select>
            </div>
            <div>
              <label class="form-label">訂金金額</label>
              <div class="form-input-readonly">NT$ {{ depositAmount.toLocaleString() }}</div>
            </div>
            <div>
              <label class="form-label">尾款金額</label>
              <div class="form-input-readonly">NT$ {{ finalAmount.toLocaleString() }}</div>
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">付款方式</label>
              <select v-model="form.paymentMethod" class="form-input">
                <option>銀行轉帳（ATM）</option>
                <option>LINE Pay</option>
                <option>現金</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">匯款資訊</label>
              <input v-model="form.bankInfo" class="form-input" placeholder="例：玉山銀行 808-1234567890 戶名：金山網頁設計" />
            </div>
          </div>
        </section>

        <!-- 4. 時程 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">4</span>
            時程
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">簽約日期</label>
              <input v-model="form.signDate" type="date" class="form-input" />
            </div>
            <div>
              <label class="form-label">預計完成日期</label>
              <input v-model="form.estimatedComplete" type="date" class="form-input" />
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">里程碑規劃（選填）</label>
              <textarea
                v-model="form.milestones"
                class="form-input"
                rows="3"
                placeholder="例：&#10;簽約後 7 天：線框稿提交&#10;簽約後 21 天：視覺設計稿審核&#10;簽約後 45 天：測試版上線"
              ></textarea>
            </div>
          </div>
        </section>

        <!-- 5. 月費服務 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">5</span>
            月費服務（選填）
          </h2>
          <div class="mb-4 flex items-center gap-3">
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="form.hasMonthly" class="sr-only peer" />
              <div class="w-10 h-6 bg-white/20 rounded-full peer peer-checked:bg-[#BFA76A] transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:after:translate-x-4"></div>
            </label>
            <span class="text-gray-300 text-sm">{{ form.hasMonthly ? '已啟用月費服務條款' : '本合約不含月費服務' }}</span>
          </div>
          <div v-if="form.hasMonthly" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="sm:col-span-2">
              <label class="form-label">訂閱方案名稱</label>
              <select v-model="form.monthlyPlan" class="form-input">
                <option>維護方案</option>
                <option>成長方案</option>
                <option>全託方案</option>
                <option>自訂方案</option>
              </select>
            </div>
            <div>
              <label class="form-label">月費金額（NT$）</label>
              <input v-model.number="form.monthlyAmount" type="number" min="0" class="form-input" placeholder="例：4500" />
            </div>
            <div>
              <label class="form-label">計費開始日</label>
              <input v-model="form.monthlyBillingStart" type="date" class="form-input" />
            </div>
            <div>
              <label class="form-label">最短合約期限</label>
              <select v-model="form.monthlyMinTerm" class="form-input">
                <option value="無">無（可隨時取消）</option>
                <option value="3個月">3 個月</option>
                <option value="6個月">6 個月</option>
                <option value="12個月">12 個月</option>
              </select>
            </div>
            <div>
              <label class="form-label">取消通知期</label>
              <select v-model="form.monthlyNoticeDays" class="form-input">
                <option value="30">提前 30 天</option>
                <option value="60">提前 60 天</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label class="form-label">月費服務內容說明（選填）</label>
              <textarea
                v-model="form.monthlyNotes"
                class="form-input"
                rows="3"
                placeholder="例：&#10;- VPS 主機管理與監控&#10;- 每月 3 小時功能調整&#10;- 優先回應（24 小時內）"
              ></textarea>
            </div>
          </div>
        </section>

        <!-- 6. 其他約定 -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">6</span>
            其他約定（選填）
          </h2>
          <textarea
            v-model="form.otherTerms"
            class="form-input"
            rows="3"
            placeholder="任何額外條款或雙方協議事項…"
          ></textarea>
        </section>

        <!-- 乙方聯絡資訊（可自訂） -->
        <section class="form-section">
          <h2 class="section-title">
            <span class="section-badge">6</span>
            乙方資訊（預設值可修改）
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">乙方名稱</label>
              <input v-model="form.providerName" class="form-input" />
            </div>
            <div>
              <label class="form-label">負責人</label>
              <input v-model="form.providerPerson" class="form-input" />
            </div>
            <div>
              <label class="form-label">電話</label>
              <input v-model="form.providerPhone" class="form-input" placeholder="0912-000-000" />
            </div>
            <div>
              <label class="form-label">Email</label>
              <input v-model="form.providerEmail" class="form-input" />
            </div>
          </div>
        </section>

        <!-- Print Button -->
        <button
          @click="printContract"
          class="w-full py-4 bg-gradient-to-r from-[#BFA76A] to-[#A58A4A] text-black font-bold text-base rounded-xl hover:opacity-90 transition-opacity"
        >
          列印 / 儲存 PDF
        </button>
        <p class="text-center text-gray-500 text-xs pb-4">列印時建議使用「另存為 PDF」，並勾選「背景圖形」以保留樣式</p>
      </div>

      <!-- ===== RIGHT: PREVIEW ===== -->
      <div class="lg:sticky lg:top-24 lg:self-start">
        <div class="no-print bg-white/5 border border-white/10 rounded-xl px-4 py-2 mb-3 text-center">
          <p class="text-gray-400 text-xs">即時預覽 — 填寫左側表單後合約內容會自動更新</p>
        </div>

        <div id="contract-preview" class="bg-white text-gray-900 rounded-2xl shadow-2xl p-10 text-sm leading-relaxed">

          <!-- Contract Title -->
          <div class="text-center mb-8">
            <h1 class="text-xl font-bold tracking-widest mb-1">網頁設計服務合約書</h1>
            <p class="text-gray-400 text-xs tracking-wider">WEB DESIGN SERVICE AGREEMENT</p>
            <div class="mt-3 mx-auto w-16 h-0.5 bg-gray-300"></div>
          </div>

          <!-- Parties -->
          <div class="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 text-xs leading-6">
            <div class="grid grid-cols-2 gap-x-6">
              <!-- 甲方 -->
              <div class="space-y-0.5">
                <div>
                  <span class="font-bold">甲方（委託方）：</span>
                  <span>{{ form.clientName || '＿＿＿＿＿＿' }}</span>
                  <span v-if="form.clientTaxId" class="text-gray-500">（統編：{{ form.clientTaxId }}）</span>
                </div>
                <div v-if="form.clientPerson"><span class="font-semibold">負責人：</span>{{ form.clientPerson }}</div>
                <div v-if="form.clientPhone"><span class="font-semibold">電話：</span>{{ form.clientPhone }}</div>
                <div v-if="form.clientEmail"><span class="font-semibold">Email：</span>{{ form.clientEmail }}</div>
                <div v-if="form.clientAddress"><span class="font-semibold">地址：</span>{{ form.clientAddress }}</div>
              </div>
              <!-- 乙方 -->
              <div class="space-y-0.5">
                <div>
                  <span class="font-bold">乙方（承接方）：</span>
                  <span>{{ form.providerName }}</span>
                </div>
                <div><span class="font-semibold">負責人：</span>{{ form.providerPerson }}</div>
                <div v-if="form.providerPhone"><span class="font-semibold">電話：</span>{{ form.providerPhone }}</div>
                <div><span class="font-semibold">Email：</span>{{ form.providerEmail }}</div>
              </div>
            </div>
          </div>

          <p class="mb-6 text-gray-600 text-xs leading-6">
            茲因甲方委託乙方提供網頁設計相關服務，雙方同意依下列條款訂立本合約，共同遵守：
          </p>

          <!-- Article 1：服務範圍 -->
          <div class="article">
            <h3 class="article-title">第一條　服務範圍</h3>
            <p class="mb-1">一、服務類型：{{ form.serviceType }}</p>
            <p class="mb-1">二、專案名稱：{{ form.projectName || '＿＿＿＿＿＿＿＿' }}</p>
            <p class="mb-1">三、交付項目：</p>
            <div class="ml-4 whitespace-pre-line text-gray-700">{{ form.deliverables || '（待填寫）' }}</div>
            <template v-if="form.exclusions">
              <p class="mt-2">四、不含範圍：{{ form.exclusions }}</p>
              <p class="mt-1">五、本合約範圍內提供 <strong>{{ form.revisions }}</strong> 次設計階段修改。超出次數之修改，另行議定費用。</p>
            </template>
            <template v-else>
              <p class="mt-2">四、本合約範圍內提供 <strong>{{ form.revisions }}</strong> 次設計階段修改。超出次數之修改，另行議定費用。</p>
            </template>
          </div>

          <!-- Article 2：報酬與付款 -->
          <div class="article">
            <h3 class="article-title">第二條　報酬與付款方式</h3>
            <p class="mb-1">
              一、本專案總費用為新台幣
              <strong>{{ form.totalAmount ? Number(form.totalAmount).toLocaleString() : '＿＿＿＿' }}</strong>
              元整（NT$&nbsp;{{ form.totalAmount ? Number(form.totalAmount).toLocaleString() : '0' }}）。
            </p>
            <p class="mb-1">二、付款方式：</p>
            <div class="ml-4 space-y-0.5">
              <p>（一）簽約時支付訂金 {{ form.depositRate }}%，計新台幣 <strong>{{ depositAmount.toLocaleString() }}</strong> 元。</p>
              <p v-if="form.depositRate < 100">（二）專案驗收完成後支付尾款，計新台幣 <strong>{{ finalAmount.toLocaleString() }}</strong> 元。</p>
            </div>
            <p class="mt-1">三、付款方式：{{ form.paymentMethod }}</p>
            <p v-if="form.bankInfo" class="mt-1">四、匯款資訊：{{ form.bankInfo }}</p>
            <p class="mt-1">{{ form.bankInfo ? '五' : '四' }}、甲方逾期付款超過七（7）日，乙方得暫停服務，直至款項付清為止。</p>
          </div>

          <!-- Article 3：交付時程 -->
          <div class="article">
            <h3 class="article-title">第三條　交付時程</h3>
            <p class="mb-1">一、本合約簽訂日期：{{ formatDate(form.signDate) }}</p>
            <p class="mb-1">二、預計完成日期：{{ formatDate(form.estimatedComplete) }}</p>
            <p class="mb-1">三、如因甲方提供資料延遲、需求變更或不可抗力因素，完成日期得相應順延，雙方協商調整。</p>
            <template v-if="form.milestones">
              <p class="mt-1">四、里程碑規劃：</p>
              <div class="ml-4 whitespace-pre-line text-gray-700 mt-1">{{ form.milestones }}</div>
            </template>
          </div>

          <!-- Article 月費服務（conditional） -->
          <div class="article" v-if="form.hasMonthly">
            <h3 class="article-title">第{{ toChNum(articleNums.monthly) }}條　月費服務條款</h3>
            <p class="mb-1">
              一、本合約另含月費服務，方案為「{{ form.monthlyPlan }}」，月費為新台幣
              <strong>{{ form.monthlyAmount ? Number(form.monthlyAmount).toLocaleString() : '＿＿＿＿' }}</strong>
              元，自 {{ formatDate(form.monthlyBillingStart) }} 起按月計費。
            </p>
            <p class="mb-1" v-if="form.monthlyNotes">二、本月費服務包含以下項目：
              <span class="block ml-4 whitespace-pre-line text-gray-700 mt-0.5">{{ form.monthlyNotes }}</span>
            </p>
            <p class="mb-1">{{ form.monthlyNotes ? '三' : '二' }}、月費應於每月計費日前以本合約約定之付款方式支付。逾期超過七（7）日，乙方得暫停月費服務直至款項付清。</p>
            <p class="mb-1">{{ form.monthlyNotes ? '四' : '三' }}、任一方得提前 {{ form.monthlyNoticeDays }} 天以書面通知取消月費服務；取消後服務持續至當期結束，已付月費不予退還。</p>
            <p class="mb-1" v-if="form.monthlyMinTerm !== '無'">{{ form.monthlyNotes ? '五' : '四' }}、月費服務最短合約期限為 <strong>{{ form.monthlyMinTerm }}</strong>，於最短期限內非因乙方違約不得單方面取消。</p>
          </div>

          <!-- Article 需求確認與變更管理 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.requirements) }}條　需求確認與變更管理</h3>
            <p class="mb-1">一、本專案功能與設計需求以雙方確認之需求文件（含本合約交付項目）為準。若甲方於專案進行中提出新增功能或重大設計變更，乙方得另行報價，並視情況調整交付時程；雙方書面確認後方為有效變更。</p>
            <p class="mb-1">二、乙方交付成果後，甲方應於七（7）個工作日內完成驗收並書面提出修改事項。若甲方逾期未提出異議，視為驗收完成，乙方得請求支付尾款。</p>
            <p class="mb-1">三、網站主機、網域名稱及第三方服務費用（如 API、金流、Email 服務等）均由甲方負擔。乙方可協助申請或設定，但相關費用由甲方直接支付。</p>
          </div>

          <!-- Article 第三方服務免責 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.thirdParty) }}條　第三方服務免責</h3>
            <p class="mb-1">一、本專案如涉及第三方服務（包含但不限於：金流、Google API、LINE Login、社群平台、雲端服務等），乙方僅負責整合介接，對第三方服務之穩定性、可用性及政策變更不負責任。</p>
            <p class="mb-1">二、因第三方服務故障、政策調整、停止服務等因素導致之功能異常，乙方不承擔賠償責任，但應協助甲方評估替代方案。</p>
          </div>

          <!-- Article 責任限制 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.liability) }}條　責任限制</h3>
            <p>因本專案所生之任何損害賠償責任，以本專案已支付金額為上限。乙方不對間接損失、利潤損失或業務中斷損失負責。</p>
          </div>

          <!-- Article 著作財產權 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.copyright) }}條　著作財產權</h3>
            <p class="mb-1">一、本專案完工且乙方收到全額款項後，甲方取得本專案之著作財產權。</p>
            <p class="mb-1">二、乙方於開發過程中使用之通用工具、開源框架（如 Vue.js、Laravel 等）及程式庫，乙方保留使用於其他專案之權利。</p>
            <p class="mb-1">三、乙方得以本專案之視覺成果作為作品集展示（不揭露甲方機密資訊）。若甲方不同意，請於簽約前書面告知。</p>
          </div>

          <!-- Article 保密義務 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.confidentiality) }}條　保密義務</h3>
            <p>雙方對合作期間所獲知之商業資訊、技術資料及客戶資料，負有保密義務，未經對方書面同意，不得向第三方揭露或利用。本條義務於合約終止後仍繼續有效。</p>
          </div>

          <!-- Article 合約終止 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.termination) }}條　合約終止</h3>
            <p class="mb-1">一、任一方得提前三十（30）日以書面通知對方終止本合約。</p>
            <p class="mb-1">二、若甲方主動終止，乙方得依已完成工作比例收取費用，已付訂金不予退還；尾款不足以支付已完成工作費用時，甲方應補足差額。</p>
            <p class="mb-1">三、若乙方主動終止，應依已完成工作比例退還甲方已付款項中未完成部分之金額。</p>
          </div>

          <!-- Article 準據法 -->
          <div class="article">
            <h3 class="article-title">第{{ toChNum(articleNums.jurisdiction) }}條　準據法及管轄</h3>
            <p>本合約依中華民國法律為準據法。雙方因本合約所生之爭議，應先以誠信原則協商解決；協商不成時，以台灣台北地方法院為第一審管轄法院。</p>
          </div>

          <!-- Article 其他約定 -->
          <div class="article" v-if="form.otherTerms">
            <h3 class="article-title">第{{ toChNum(articleNums.other) }}條　其他約定</h3>
            <div class="whitespace-pre-line">{{ form.otherTerms }}</div>
          </div>

          <!-- Signatures -->
          <div class="mt-8 pt-6 border-t border-gray-300">
            <p class="text-center text-gray-600 text-xs mb-2">本合約一式兩份，雙方各執一份，具同等法律效力。</p>
            <p class="text-center text-xs mb-8">立約日期：{{ formatDate(form.signDate) }}</p>

            <div class="grid grid-cols-2 gap-12 text-xs">
              <div>
                <p class="font-bold text-sm mb-3">甲方（委託方）</p>
                <p>公司／姓名：{{ form.clientName || '＿＿＿＿＿＿＿' }}</p>
                <p v-if="form.clientPerson">負責人：{{ form.clientPerson }}</p>
                <p>電話：{{ form.clientPhone || '＿＿＿＿＿＿＿' }}</p>
                <p>Email：{{ form.clientEmail || '＿＿＿＿＿＿＿' }}</p>
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
                <p>公司／姓名：{{ form.providerName }}</p>
                <p>負責人：{{ form.providerPerson }}</p>
                <p v-if="form.providerPhone">電話：{{ form.providerPhone }}</p>
                <p>Email：{{ form.providerEmail }}</p>
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

        </div><!-- end #contract-preview -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'

const form = reactive({
  // 甲方
  clientName: '',
  clientPerson: '',
  clientTaxId: '',
  clientPhone: '',
  clientEmail: '',
  clientAddress: '',
  // 乙方（預設值）
  providerName: '金山網頁設計',
  providerPerson: '蔡家豪',
  providerPhone: '',
  providerEmail: 'goldenmountain100707@gmail.com',
  // 專案
  projectName: '',
  serviceType: '客製化形象網站',
  deliverables: '',
  exclusions: '',
  revisions: '3',
  // 費用
  totalAmount: null,
  depositRate: 50,
  paymentMethod: '銀行轉帳（ATM）',
  bankInfo: '',
  // 時程
  signDate: new Date().toISOString().split('T')[0],
  estimatedComplete: '',
  milestones: '',
  // 月費服務
  hasMonthly: false,
  monthlyPlan: '維護方案',
  monthlyAmount: null,
  monthlyBillingStart: '',
  monthlyMinTerm: '無',
  monthlyNoticeDays: '30',
  monthlyNotes: '',
  // 其他
  otherTerms: '',
})

const CHINESE_NUMS = ['一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四']
function toChNum(n) { return CHINESE_NUMS[n - 1] || String(n) }

// 動態計算各條條號（第1~3條固定，月費啟用時插入第4條，其後順移）
const articleNums = computed(() => {
  let n = 3
  const nums = {}
  if (form.hasMonthly) nums.monthly = ++n
  nums.requirements = ++n
  nums.thirdParty = ++n
  nums.liability = ++n
  nums.copyright = ++n
  nums.confidentiality = ++n
  nums.termination = ++n
  nums.jurisdiction = ++n
  if (form.otherTerms) nums.other = ++n
  return nums
})

const depositAmount = computed(() => {
  if (!form.totalAmount) return 0
  return Math.round(form.totalAmount * form.depositRate / 100)
})

const finalAmount = computed(() => {
  if (!form.totalAmount) return 0
  return form.totalAmount - depositAmount.value
})

function formatDate(dateStr) {
  if (!dateStr) return '　　　　年　　月　　日'
  const [y, m, d] = dateStr.split('-')
  return `${y} 年 ${parseInt(m)} 月 ${parseInt(d)} 日`
}

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

function printContract() {
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

  #contract-preview {
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    padding: 1.5cm 2cm !important;
    font-size: 12pt !important;
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

.form-input-readonly {
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
  padding: 0.6rem 0.875rem;
  color: #E3D3A3;
  font-size: 0.875rem;
  font-weight: 600;
}

select.form-input option {
  background: #1a1a2e;
  color: #fff;
}

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

/* Contract preview styles */
.article {
  margin-bottom: 1.25rem;
}

.article-title {
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.4rem;
  color: #111;
}
</style>
