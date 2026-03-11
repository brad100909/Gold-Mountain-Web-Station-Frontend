<template>
  <div class="min-h-screen bg-[#f3f4f6] pt-6">

    <!-- Demo Banner -->
    <div class="bg-amber-50 border-b border-amber-200 px-4 py-2.5">
      <div class="max-w-6xl mx-auto flex items-center gap-2 text-amber-700 text-sm">
        <span>🧪</span>
        <span>{{ t('dashboard.banner') }}</span>
      </div>
    </div>

    <div class="flex h-[calc(100vh-88px)]">

      <!-- Sidebar -->
      <aside class="hidden md:flex flex-col w-56 bg-[#111827] text-white shrink-0">
        <div class="px-5 py-5 border-b border-white/10">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-[#BFA76A] flex items-center justify-center text-sm font-bold text-white">G</div>
            <div>
              <div class="font-semibold text-sm">GoldMetrics</div>
              <div class="text-[10px] text-gray-400">{{ t('dashboard.sidebarSub') }}</div>
            </div>
          </div>
        </div>
        <nav class="flex-1 px-3 py-4 space-y-0.5 text-sm">
          <div
            v-for="item in sidebarItems" :key="item.key"
            @click="activePage = item.key"
            class="flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-pointer transition-colors"
            :class="activePage === item.key ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'"
          >
            <span>{{ item.icon }}</span>
            <span>{{ item.label }}</span>
            <span v-if="item.badge" class="ml-auto text-[10px] bg-[#BFA76A] text-white px-1.5 py-0.5 rounded-full">{{ item.badge }}</span>
          </div>
        </nav>
        <div class="px-3 py-4 border-t border-white/10">
          <div class="flex items-center gap-2.5 px-3 py-2">
            <div class="w-7 h-7 rounded-full bg-[#374151] flex items-center justify-center text-xs">👤</div>
            <div>
              <div class="text-xs font-medium">Admin</div>
              <div class="text-[10px] text-gray-500">admin@example.com</div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <div class="flex-1 overflow-y-auto">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">

          <!-- Header row -->
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-xl font-bold text-gray-800">{{ t('dashboard.title') }}</h1>
              <p class="text-sm text-gray-400 mt-0.5">{{ t('dashboard.subtitle') }}</p>
            </div>
            <!-- Period toggle -->
            <div class="flex items-center bg-white border border-gray-200 rounded-lg p-1 text-xs font-medium">
              <button
                v-for="p in periods" :key="p.key"
                @click="period = p.key"
                class="px-3 py-1.5 rounded-md transition-all"
                :class="period === p.key ? 'bg-[#111827] text-white' : 'text-gray-500 hover:text-gray-700'"
              >
                {{ p.label }}
              </button>
            </div>
          </div>

          <!-- Stat cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="card in statCards" :key="card.key"
              class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
            >
              <div class="flex items-start justify-between mb-3">
                <div class="text-xs font-medium text-gray-400 uppercase tracking-wide">{{ card.label }}</div>
                <div class="text-lg">{{ card.icon }}</div>
              </div>
              <div class="text-2xl font-bold text-gray-800">{{ card.value }}</div>
              <div class="flex items-center gap-1 mt-1.5 text-xs">
                <span :class="card.up ? 'text-emerald-500' : 'text-red-400'">
                  {{ card.up ? '▲' : '▼' }} {{ card.change }}
                </span>
                <span class="text-gray-400">{{ t('dashboard.vsLastPeriod') }}</span>
              </div>
            </div>
          </div>

          <!-- Line chart + donut -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

            <!-- Line chart -->
            <div class="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div class="flex items-center justify-between mb-4">
                <div class="font-semibold text-gray-800 text-sm">{{ t('dashboard.revenueTrend') }}</div>
                <div class="text-xs text-gray-400">{{ t('dashboard.unit') }}</div>
              </div>
              <svg viewBox="0 0 500 160" class="w-full" preserveAspectRatio="none">
                <!-- Grid lines -->
                <line v-for="y in [20,60,100,140]" :key="y" :x1="0" :y1="y" x2="500" :y2="y" stroke="#f3f4f6" stroke-width="1"/>
                <!-- Y axis labels -->
                <text v-for="(label, i) in yLabels" :key="i" :x="0" :y="[140,100,60,20][i]" font-size="8" fill="#9ca3af" dominant-baseline="middle">{{ label }}</text>
                <!-- Area fill -->
                <path :d="areaPath" fill="url(#areaGrad)" opacity="0.4"/>
                <!-- Line -->
                <path :d="linePath" fill="none" stroke="#BFA76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Dots -->
                <circle
                  v-for="(pt, i) in chartPoints" :key="i"
                  :cx="pt.x" :cy="pt.y" r="3"
                  fill="white" stroke="#BFA76A" stroke-width="2"
                />
                <!-- Gradient def -->
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#BFA76A" stop-opacity="0.5"/>
                    <stop offset="100%" stop-color="#BFA76A" stop-opacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
              <!-- X labels -->
              <div class="flex justify-between mt-1 text-[10px] text-gray-400 px-1">
                <span v-for="(label, i) in xLabels" :key="i">{{ label }}</span>
              </div>
            </div>

            <!-- Donut chart -->
            <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div class="font-semibold text-gray-800 text-sm mb-4">{{ t('dashboard.serviceBreakdown') }}</div>
              <div class="flex flex-col items-center">
                <svg viewBox="0 0 120 120" class="w-32 h-32">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#f3f4f6" stroke-width="18"/>
                  <circle
                    v-for="(seg, i) in donutSegments" :key="i"
                    cx="60" cy="60" r="48"
                    fill="none"
                    :stroke="seg.color"
                    stroke-width="18"
                    :stroke-dasharray="`${seg.dash} ${301 - seg.dash}`"
                    :stroke-dashoffset="seg.offset"
                    stroke-linecap="butt"
                    transform="rotate(-90 60 60)"
                  />
                  <text x="60" y="57" text-anchor="middle" font-size="13" font-weight="bold" fill="#111827">{{ currentData.totalOrders }}</text>
                  <text x="60" y="70" text-anchor="middle" font-size="7" fill="#9ca3af">{{ t('dashboard.orders') }}</text>
                </svg>
                <div class="w-full mt-3 space-y-2">
                  <div v-for="(seg, i) in donutSegments" :key="i" class="flex items-center justify-between text-xs">
                    <div class="flex items-center gap-1.5">
                      <div class="w-2.5 h-2.5 rounded-full" :style="{ background: seg.color }"></div>
                      <span class="text-gray-600">{{ seg.label }}</span>
                    </div>
                    <span class="font-medium text-gray-700">{{ seg.pct }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Orders table -->
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div class="font-semibold text-gray-800 text-sm">{{ t('dashboard.recentOrders') }}</div>
              <div class="text-xs text-[#BFA76A] font-medium cursor-pointer hover:underline">{{ t('dashboard.viewAll') }}</div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-xs text-gray-400 border-b border-gray-100">
                    <th class="text-left px-5 py-3 font-medium">{{ t('dashboard.colOrder') }}</th>
                    <th class="text-left px-5 py-3 font-medium">{{ t('dashboard.colClient') }}</th>
                    <th class="text-left px-5 py-3 font-medium hidden sm:table-cell">{{ t('dashboard.colService') }}</th>
                    <th class="text-left px-5 py-3 font-medium hidden md:table-cell">{{ t('dashboard.colDate') }}</th>
                    <th class="text-right px-5 py-3 font-medium">{{ t('dashboard.colAmount') }}</th>
                    <th class="text-left px-5 py-3 font-medium">{{ t('dashboard.colStatus') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in recentOrders" :key="order.id" class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td class="px-5 py-3.5 text-xs font-mono text-gray-400">{{ order.id }}</td>
                    <td class="px-5 py-3.5 font-medium text-gray-700">{{ order.client }}</td>
                    <td class="px-5 py-3.5 text-gray-500 hidden sm:table-cell">{{ order.service }}</td>
                    <td class="px-5 py-3.5 text-gray-400 text-xs hidden md:table-cell">{{ order.date }}</td>
                    <td class="px-5 py-3.5 text-right font-semibold text-gray-700">{{ order.amount }}</td>
                    <td class="px-5 py-3.5">
                      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                        :class="{
                          'bg-emerald-50 text-emerald-700': order.status === 'paid',
                          'bg-amber-50 text-amber-700': order.status === 'pending',
                          'bg-gray-100 text-gray-500': order.status === 'cancelled',
                        }">
                        {{ t('dashboard.status_' + order.status) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const period = ref('month')
const activePage = ref('overview')

const sidebarItems = computed(() => [
  { key: 'overview', icon: '📊', label: t('dashboard.navOverview') },
  { key: 'orders',   icon: '📋', label: t('dashboard.navOrders'), badge: '12' },
  { key: 'clients',  icon: '👥', label: t('dashboard.navClients') },
  { key: 'services', icon: '✨', label: t('dashboard.navServices') },
  { key: 'reports',  icon: '📈', label: t('dashboard.navReports') },
  { key: 'settings', icon: '⚙️', label: t('dashboard.navSettings') },
])

const periods = computed(() => [
  { key: '7d',    label: t('dashboard.period7d') },
  { key: 'month', label: t('dashboard.periodMonth') },
  { key: 'year',  label: t('dashboard.periodYear') },
])

// --- Data per period ---
const data = {
  '7d':    { revenue: '$28,400', revenueRaw: 28400, orders: 68,  members: 12, rate: '4.2%', lineData: [60,75,55,90,70,85,95], totalOrders: 68,  donut: [42,31,27] },
  'month': { revenue: '$128,400', revenueRaw: 128400, orders: 312, members: 48, rate: '3.8%', lineData: [40,55,45,70,60,80,65,90,75,85,70,95], totalOrders: 312, donut: [45,33,22] },
  'year':  { revenue: '$1,420,000', revenueRaw: 1420000, orders: 3840, members: 526, rate: '5.1%', lineData: [50,60,45,70,65,80,75,85,90,80,95,100], totalOrders: 3840, donut: [44,35,21] },
}

const currentData = computed(() => data[period.value])

const statCards = computed(() => [
  { key: 'revenue', icon: '💰', label: t('dashboard.statRevenue'), value: currentData.value.revenue, change: '12.5%', up: true },
  { key: 'orders',  icon: '📋', label: t('dashboard.statOrders'),  value: currentData.value.orders, change: '8.2%', up: true },
  { key: 'members', icon: '👥', label: t('dashboard.statMembers'), value: `+${currentData.value.members}`, change: '3.1%', up: true },
  { key: 'rate',    icon: '🎯', label: t('dashboard.statRate'),    value: currentData.value.rate, change: '0.4%', up: false },
])

// --- Line chart ---
const chartWidth = 500
const chartHeight = 160
const padding = { left: 20, right: 10, top: 10, bottom: 10 }

const chartPoints = computed(() => {
  const pts = currentData.value.lineData
  const n = pts.length
  const maxV = Math.max(...pts)
  const minV = Math.min(...pts)
  const range = maxV - minV || 1
  const w = chartWidth - padding.left - padding.right
  const h = chartHeight - padding.top - padding.bottom
  return pts.map((v, i) => ({
    x: padding.left + (i / (n - 1)) * w,
    y: padding.top + (1 - (v - minV) / range) * h,
  }))
})

const linePath = computed(() =>
  chartPoints.value.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
)

const areaPath = computed(() => {
  const pts = chartPoints.value
  const bottom = chartHeight - padding.bottom
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
    + ` L${pts[pts.length - 1].x},${bottom} L${pts[0].x},${bottom} Z`
})

const yLabels = computed(() => {
  const pts = currentData.value.lineData
  const max = Math.max(...pts)
  return ['0', Math.round(max * 0.33) + 'k', Math.round(max * 0.66) + 'k', max + 'k']
})

const xLabels = computed(() => {
  const pts = currentData.value.lineData
  const n = pts.length
  if (period.value === '7d') return ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  if (period.value === 'month') {
    return Array.from({ length: n }, (_, i) => `${(i + 1) * Math.round(30 / n)}`)
  }
  return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
})

// --- Donut chart ---
const donutColors = ['#BFA76A', '#1a3d2e', '#9ca3af']
const donutLabels = computed(() => [
  t('dashboard.svcA'), t('dashboard.svcB'), t('dashboard.svcC')
])
const circumference = 2 * Math.PI * 48 // ≈ 301.6

const donutSegments = computed(() => {
  const pcts = currentData.value.donut
  let offset = 0
  return pcts.map((pct, i) => {
    const dash = (pct / 100) * circumference
    const seg = { color: donutColors[i], dash, offset: -offset, pct, label: donutLabels.value[i] }
    offset += dash
    return seg
  })
})

// --- Orders table ---
const recentOrders = computed(() => [
  { id: '#ORD-0091', client: locale.value === 'zh' ? '陳怡君' : 'Emma Chen',   service: t('dashboard.svcA'), date: '2026-03-04', amount: '$4,800', status: 'paid' },
  { id: '#ORD-0090', client: locale.value === 'zh' ? '林宏達' : 'David Lin',   service: t('dashboard.svcB'), date: '2026-03-03', amount: '$2,200', status: 'paid' },
  { id: '#ORD-0089', client: locale.value === 'zh' ? '王美玲' : 'Mei Wang',    service: t('dashboard.svcC'), date: '2026-03-03', amount: '$6,500', status: 'pending' },
  { id: '#ORD-0088', client: locale.value === 'zh' ? '張志偉' : 'Jason Chang', service: t('dashboard.svcA'), date: '2026-03-02', amount: '$4,800', status: 'paid' },
  { id: '#ORD-0087', client: locale.value === 'zh' ? '許雅婷' : 'Amy Hsu',     service: t('dashboard.svcB'), date: '2026-03-01', amount: '$2,200', status: 'cancelled' },
  { id: '#ORD-0086', client: locale.value === 'zh' ? '蔡明哲' : 'Mark Tsai',   service: t('dashboard.svcC'), date: '2026-02-28', amount: '$6,500', status: 'paid' },
])
</script>
