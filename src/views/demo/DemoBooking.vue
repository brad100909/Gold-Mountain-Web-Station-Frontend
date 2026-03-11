<template>
  <div class="min-h-screen bg-[#f8f7f4] pt-6">

    <!-- Demo Banner -->
    <div class="bg-amber-50 border-b border-amber-200 px-4 py-2.5">
      <div class="max-w-3xl mx-auto flex items-center gap-2 text-amber-700 text-sm">
        <span>🧪</span>
        <span>{{ t('booking.banner') }}</span>
      </div>
    </div>

    <!-- Header -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-3xl mx-auto px-6 py-5 flex items-center gap-3">
        <div class="w-9 h-9 rounded-full bg-[#1a3d2e] flex items-center justify-center text-lg">📅</div>
        <div>
          <div class="font-bold text-gray-800 text-lg">{{ t('booking.brandName') }}</div>
          <div class="text-xs text-gray-400">{{ t('booking.brandSub') }}</div>
        </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-8 space-y-6">

      <!-- Step indicator -->
      <div class="flex items-center gap-2 text-sm">
        <div v-for="(label, i) in steps" :key="i" class="flex items-center gap-2">
          <div class="flex items-center gap-1.5">
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
              :class="step > i ? 'bg-[#1a3d2e] text-white' : step === i ? 'bg-[#BFA76A] text-white' : 'bg-gray-200 text-gray-400'"
            >
              <span v-if="step > i">✓</span>
              <span v-else>{{ i + 1 }}</span>
            </div>
            <span :class="step === i ? 'text-gray-800 font-medium' : 'text-gray-400'">{{ label }}</span>
          </div>
          <div v-if="i < steps.length - 1" class="w-8 h-px bg-gray-200"></div>
        </div>
      </div>

      <!-- Step 0: 選服務 -->
      <div v-if="step === 0" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 class="font-semibold text-gray-800">{{ t('booking.selectService') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            v-for="svc in services" :key="svc.key"
            @click="selectedService = svc.key"
            class="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-center"
            :class="selectedService === svc.key
              ? 'border-[#BFA76A] bg-[#FBF8F0]'
              : 'border-gray-100 hover:border-gray-200'"
          >
            <span class="text-3xl">{{ svc.icon }}</span>
            <div class="font-medium text-sm text-gray-700">{{ svc.name }}</div>
            <div class="text-xs text-gray-400">{{ svc.duration }}</div>
          </button>
        </div>
        <div class="flex justify-end pt-2">
          <button
            @click="step = 1"
            :disabled="!selectedService"
            class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            :class="selectedService ? 'bg-[#1a3d2e] text-white hover:bg-[#14311f]' : 'bg-gray-100 text-gray-300 cursor-not-allowed'"
          >
            {{ t('booking.next') }} →
          </button>
        </div>
      </div>

      <!-- Step 1: 選日期 -->
      <div v-if="step === 1" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 class="font-semibold text-gray-800">{{ t('booking.selectDate') }}</h2>

        <!-- Month navigation -->
        <div class="flex items-center justify-between">
          <button
            @click="prevMonth"
            :disabled="isCurrentMonth"
            class="p-2 rounded-lg transition-colors"
            :class="isCurrentMonth ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-gray-100 text-gray-600'"
          >
            ‹
          </button>
          <span class="font-medium text-gray-700">{{ displayMonth }}</span>
          <button @click="nextMonth" class="p-2 rounded-lg hover:bg-gray-100 text-gray-600">›</button>
        </div>

        <!-- Day labels -->
        <div class="grid grid-cols-7 text-center text-xs text-gray-400 mb-1">
          <div v-for="d in dayLabels" :key="d">{{ d }}</div>
        </div>

        <!-- Calendar grid -->
        <div class="grid grid-cols-7 gap-1">
          <div v-for="blank in calendarBlanks" :key="'b' + blank" class="h-9"></div>
          <button
            v-for="day in calendarDays" :key="day.date"
            @click="!day.disabled && selectDate(day.date)"
            class="h-9 w-full rounded-lg text-sm transition-all font-medium"
            :class="[
              day.disabled ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-[#F5F2EA] cursor-pointer',
              selectedDate === day.date ? 'bg-[#1a3d2e] text-white hover:bg-[#1a3d2e]' : '',
              day.isToday && selectedDate !== day.date ? 'ring-1 ring-[#BFA76A]' : '',
              !day.disabled && selectedDate !== day.date ? 'text-gray-700' : ''
            ]"
          >
            {{ day.num }}
          </button>
        </div>

        <div class="flex justify-between pt-2">
          <button @click="step = 0" class="px-4 py-2 text-sm text-gray-400 hover:text-gray-600">← {{ t('booking.back') }}</button>
          <button
            @click="step = 2"
            :disabled="!selectedDate"
            class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            :class="selectedDate ? 'bg-[#1a3d2e] text-white hover:bg-[#14311f]' : 'bg-gray-100 text-gray-300 cursor-not-allowed'"
          >
            {{ t('booking.next') }} →
          </button>
        </div>
      </div>

      <!-- Step 2: 選時段 -->
      <div v-if="step === 2" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 class="font-semibold text-gray-800">{{ t('booking.selectTime') }}</h2>
        <p class="text-sm text-gray-400">{{ formattedDate }}</p>

        <!-- 圖例 -->
        <div class="flex items-center gap-4 text-xs text-gray-400">
          <div class="flex items-center gap-1.5">
            <div class="w-3 h-3 rounded border border-gray-200 bg-white"></div>
            <span>{{ t('booking.slotAvailable') }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <div class="w-3 h-3 rounded bg-gray-100 border border-gray-200"></div>
            <span>{{ t('booking.slotBooked') }}</span>
          </div>
        </div>

        <div v-for="period in timePeriods" :key="period.label" class="space-y-2">
          <div class="text-xs font-semibold text-gray-400 uppercase tracking-wide">{{ period.label }}</div>
          <div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
            <button
              v-for="slot in period.slots" :key="slot"
              @click="!isBooked(slot) && (selectedTime = slot)"
              class="py-2.5 rounded-lg border text-sm font-medium transition-all relative"
              :class="isBooked(slot)
                ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                : selectedTime === slot
                  ? 'border-[#1a3d2e] bg-[#1a3d2e] text-white'
                  : 'border-gray-200 text-gray-600 hover:border-[#BFA76A] hover:bg-[#FBF8F0] cursor-pointer'"
            >
              {{ slot }}
              <span v-if="isBooked(slot)" class="block text-[9px] text-gray-300 leading-none mt-0.5">{{ t('booking.slotBookedLabel') }}</span>
            </button>
          </div>
        </div>

        <div class="flex justify-between pt-2">
          <button @click="step = 1" class="px-4 py-2 text-sm text-gray-400 hover:text-gray-600">← {{ t('booking.back') }}</button>
          <button
            @click="step = 3"
            :disabled="!selectedTime"
            class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            :class="selectedTime ? 'bg-[#1a3d2e] text-white hover:bg-[#14311f]' : 'bg-gray-100 text-gray-300 cursor-not-allowed'"
          >
            {{ t('booking.next') }} →
          </button>
        </div>
      </div>

      <!-- Step 3: 確認 -->
      <div v-if="step === 3" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 class="font-semibold text-gray-800">{{ t('booking.confirm') }}</h2>

        <div class="bg-[#F5F2EA] rounded-xl p-4 space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-500">{{ t('booking.labelService') }}</span>
            <span class="font-medium text-gray-800">{{ selectedServiceObj?.name }}</span>
          </div>
          <div class="border-t border-[#E3D3A3]"></div>
          <div class="flex justify-between">
            <span class="text-gray-500">{{ t('booking.labelDate') }}</span>
            <span class="font-medium text-gray-800">{{ formattedDate }}</span>
          </div>
          <div class="border-t border-[#E3D3A3]"></div>
          <div class="flex justify-between">
            <span class="text-gray-500">{{ t('booking.labelTime') }}</span>
            <span class="font-medium text-gray-800">{{ selectedTime }}</span>
          </div>
          <div class="border-t border-[#E3D3A3]"></div>
          <div class="flex justify-between">
            <span class="text-gray-500">{{ t('booking.labelDuration') }}</span>
            <span class="font-medium text-gray-800">{{ selectedServiceObj?.duration }}</span>
          </div>
        </div>

        <!-- Name + note -->
        <div class="space-y-3">
          <div>
            <label class="text-sm text-gray-600 mb-1 block">{{ t('booking.labelName') }}</label>
            <input
              v-model="customerName"
              type="text"
              :placeholder="t('booking.namePlaceholder')"
              class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BFA76A] focus:border-transparent"
            />
          </div>
          <div>
            <label class="text-sm text-gray-600 mb-1 block">{{ t('booking.labelNote') }} <span class="text-gray-400">({{ t('booking.optional') }})</span></label>
            <textarea
              v-model="note"
              rows="2"
              :placeholder="t('booking.notePlaceholder')"
              class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#BFA76A] focus:border-transparent resize-none"
            />
          </div>
        </div>

        <div class="flex justify-between pt-1">
          <button @click="step = 2" class="px-4 py-2 text-sm text-gray-400 hover:text-gray-600">← {{ t('booking.back') }}</button>
          <button
            @click="submitBooking"
            :disabled="!customerName.trim()"
            class="px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            :class="customerName.trim() ? 'bg-[#BFA76A] text-white hover:bg-[#A58A4A]' : 'bg-gray-100 text-gray-300 cursor-not-allowed'"
          >
            {{ t('booking.submit') }}
          </button>
        </div>
      </div>

      <!-- Step 4: 完成 -->
      <div v-if="step === 4" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center space-y-4">
        <div class="text-5xl">🎉</div>
        <h2 class="font-bold text-gray-800 text-xl">{{ t('booking.successTitle') }}</h2>
        <p class="text-gray-500 text-sm">{{ t('booking.successDesc', { name: customerName }) }}</p>

        <div class="bg-[#F5F2EA] rounded-xl p-4 text-left text-sm space-y-2 max-w-xs mx-auto">
          <div class="flex justify-between">
            <span class="text-gray-400">{{ t('booking.labelService') }}</span>
            <span class="font-medium">{{ selectedServiceObj?.name }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">{{ t('booking.labelDate') }}</span>
            <span class="font-medium">{{ formattedDate }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">{{ t('booking.labelTime') }}</span>
            <span class="font-medium">{{ selectedTime }}</span>
          </div>
        </div>

        <button
          @click="resetBooking"
          class="mt-4 px-6 py-2.5 rounded-lg text-sm font-medium bg-[#1a3d2e] text-white hover:bg-[#14311f] transition-colors"
        >
          {{ t('booking.bookAgain') }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const step = ref(0)
const selectedService = ref('')
const selectedDate = ref('')
const selectedTime = ref('')
const customerName = ref('')
const note = ref('')

// --- Services ---
const services = computed(() => [
  { key: 'consult', icon: '💬', name: t('booking.svcConsult'), duration: t('booking.svcConsultDuration') },
  { key: 'beauty',  icon: '✨', name: t('booking.svcBeauty'),  duration: t('booking.svcBeautyDuration') },
  { key: 'health',  icon: '🌿', name: t('booking.svcHealth'),  duration: t('booking.svcHealthDuration') },
])
const selectedServiceObj = computed(() => services.value.find(s => s.key === selectedService.value))

// --- Steps labels ---
const steps = computed(() => [
  t('booking.step1'), t('booking.step2'), t('booking.step3'), t('booking.step4')
])

// --- Calendar ---
const viewYear = ref(new Date().getFullYear())
const viewMonth = ref(new Date().getMonth()) // 0-indexed

const isCurrentMonth = computed(() => {
  const now = new Date()
  return viewYear.value === now.getFullYear() && viewMonth.value === now.getMonth()
})

const displayMonth = computed(() => {
  const d = new Date(viewYear.value, viewMonth.value, 1)
  return d.toLocaleDateString(locale.value === 'zh' ? 'zh-TW' : 'en-US', { year: 'numeric', month: 'long' })
})

const dayLabels = computed(() =>
  locale.value === 'zh'
    ? ['日', '一', '二', '三', '四', '五', '六']
    : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
)

const calendarBlanks = computed(() => {
  return new Date(viewYear.value, viewMonth.value, 1).getDay()
})

const calendarDays = computed(() => {
  const totalDays = new Date(viewYear.value, viewMonth.value + 1, 0).getDate()
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const days = []
  for (let i = 1; i <= totalDays; i++) {
    const d = new Date(viewYear.value, viewMonth.value, i)
    const dateStr = `${viewYear.value}-${String(viewMonth.value + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
    days.push({
      num: i,
      date: dateStr,
      disabled: d < today || d.getDay() === 0, // 禁用過去 + 週日
      isToday: d.getTime() === today.getTime(),
    })
  }
  return days
})

function prevMonth() {
  if (isCurrentMonth.value) return
  if (viewMonth.value === 0) { viewMonth.value = 11; viewYear.value-- }
  else viewMonth.value--
}
function nextMonth() {
  if (viewMonth.value === 11) { viewMonth.value = 0; viewYear.value++ }
  else viewMonth.value++
}
function selectDate(date) {
  selectedDate.value = date
  selectedTime.value = ''
}

// --- Time slots ---
const allSlots = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30']

// 用日期字串做簡單 hash，讓同一天顯示相同的已預約時段
const bookedSlots = computed(() => {
  if (!selectedDate.value) return new Set()
  const hash = selectedDate.value.split('-').reduce((acc, n) => acc + parseInt(n), 0)
  return new Set(allSlots.filter((_, i) => (i + hash) % 3 === 0))
})

function isBooked(slot) {
  return bookedSlots.value.has(slot)
}

const timePeriods = computed(() => [
  { label: t('booking.morning'), slots: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'] },
  { label: t('booking.afternoon'), slots: ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'] },
  { label: t('booking.evening'), slots: ['17:00', '17:30', '18:00', '18:30'] },
])

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  const [y, m, d] = selectedDate.value.split('-')
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString(locale.value === 'zh' ? 'zh-TW' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'short'
  })
})

// --- Submit ---
function submitBooking() {
  if (!customerName.value.trim()) return
  step.value = 4
}

function resetBooking() {
  step.value = 0
  selectedService.value = ''
  selectedDate.value = ''
  selectedTime.value = ''
  customerName.value = ''
  note.value = ''
}
</script>
