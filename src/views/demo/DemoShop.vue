<template>
  <div class="min-h-screen bg-[#f8f7f4] pt-6">

    <!-- Demo Banner -->
    <div class="bg-amber-50 border-b border-amber-200 px-4 py-2.5">
      <div class="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-amber-700 text-sm">
          <span>🧪</span>
          <span class="hidden sm:inline">{{ t('demo.shopBanner') }}</span>
          <span class="sm:hidden text-xs">{{ t('demo.shopBannerShort') }}</span>
        </div>
        <router-link :to="'/' + locale + '/demo/admin'"
          class="flex items-center gap-1 text-amber-800 font-medium hover:underline text-xs sm:text-sm shrink-0">
          ⚙️ {{ t('demo.goAdmin') }} →
        </router-link>
      </div>
      <div class="max-w-6xl mx-auto mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-amber-600">
        <span>💳 {{ t('demo.testCardLabel') }}：</span>
        <span class="font-mono bg-amber-100 px-2 py-0.5 rounded tracking-wider select-all">4311-9522-2222-2222</span>
        <span>{{ t('demo.testCardExpiry') }}：<span class="font-mono">12/26</span></span>
        <span>CVV：<span class="font-mono">123</span></span>
      </div>
    </div>

    <!-- Shop Sticky Header -->
    <header class="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-[#1a3d2e] flex items-center justify-center text-lg">🌿</div>
          <div>
            <span class="font-bold text-gray-900 text-lg tracking-tight">GreenShop</span>
            <span class="ml-2 text-xs text-gray-400 hidden sm:inline">{{ t('demo.shopTagline') }}</span>
          </div>
        </div>
        <!-- Cart Button -->
        <button
          @click="cartOpen = true"
          :class="cartBounce ? 'scale-110' : 'scale-100'"
          class="relative flex items-center gap-2.5 pl-4 pr-5 py-2 rounded-full bg-[#1a3d2e] text-white text-sm font-medium
                 hover:bg-[#2a5c44] transition-all duration-200 shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="hidden sm:inline">{{ t('demo.cart') }}</span>
          <span v-if="cartCount > 0"
            class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow">
            {{ cartCount }}
          </span>
        </button>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden bg-[#1a3d2e]">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 20% 50%, #4caf78 0%, transparent 50%), radial-gradient(circle at 80% 20%, #a8d5b5 0%, transparent 40%)">
      </div>
      <div class="relative max-w-6xl mx-auto px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1">
          <span class="inline-block text-[11px] tracking-[0.25em] uppercase text-[#6fcf97] mb-4 font-medium">
            {{ t('demo.heroEyebrow') }}
          </span>
          <h1 class="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            {{ t('demo.heroTitle') }}
          </h1>
          <p class="text-[#a8d5b5] text-sm md:text-base leading-relaxed mb-8 max-w-md">
            {{ t('demo.heroDesc') }}
          </p>
          <button
            @click="document.getElementById('products').scrollIntoView({ behavior: 'smooth' })"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a3d2e] rounded-full text-sm font-semibold
                   hover:bg-[#f0faf4] transition-colors shadow-sm"
          >
            {{ t('demo.heroShopNow') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <!-- Featured Emoji Grid -->
        <div class="grid grid-cols-3 gap-3 shrink-0">
          <div v-for="(item, i) in heroItems" :key="i"
            class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-sm"
            :class="item.bg">
            {{ item.emoji }}
          </div>
        </div>
      </div>
    </section>

    <!-- Main -->
    <main id="products" class="max-w-6xl mx-auto px-4 md:px-6 py-10">

      <!-- Category Filter -->
      <div class="flex items-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="activeCategory === cat.key
            ? 'bg-[#1a3d2e] text-white shadow-sm'
            : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1a3d2e] hover:text-[#1a3d2e]'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Product count -->
      <p class="text-xs text-gray-400 mb-5">
        {{ filteredProducts.length }} {{ t('demo.productCount') }}
      </p>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-24">
        <div class="text-5xl mb-4">📦</div>
        <p class="text-gray-500 mb-3">{{ t('demo.shopEmpty') }}</p>
        <router-link :to="'/' + locale + '/demo/admin'"
          class="inline-flex items-center gap-1 text-sm text-[#2d6e47] hover:underline font-medium">
          {{ t('demo.goAdminAdd') }} →
        </router-link>
      </div>

      <!-- Product Grid -->
      <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          @click="openDetail(product)"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100"
        >
          <!-- Card Image -->
          <div class="relative h-40 md:h-48 flex items-center justify-center text-5xl md:text-6xl overflow-hidden"
            :class="getCategoryBg(product.category)">
            <span class="transition-transform duration-500 group-hover:scale-110 drop-shadow-sm">
              {{ product.emoji }}
            </span>
            <!-- Out of Stock -->
            <div v-if="product.stock === 0"
              class="absolute inset-0 bg-white/75 backdrop-blur-[1px] flex items-center justify-center">
              <span class="text-xs font-semibold text-red-500 bg-white border border-red-200 px-3 py-1 rounded-full shadow-sm">
                {{ t('demo.outOfStock') }}
              </span>
            </div>
            <!-- Stock warning -->
            <span v-else-if="product.stock <= 5"
              class="absolute top-2 right-2 text-[10px] font-medium bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
              {{ t('demo.lowStock') }} {{ product.stock }}
            </span>
          </div>

          <!-- Card Body -->
          <div class="p-4">
            <span class="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
              {{ locale === 'zh' ? product.category : product.categoryEn }}
            </span>
            <h3 class="font-semibold text-gray-800 mt-0.5 mb-3 text-sm leading-snug line-clamp-2">
              {{ locale === 'zh' ? product.name : product.nameEn }}
            </h3>
            <div class="flex items-center justify-between">
              <span class="font-bold text-gray-900">NT$ {{ product.price.toLocaleString() }}</span>
              <button
                @click.stop="addToCart(product)"
                :disabled="product.stock === 0"
                class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
                :class="product.stock === 0
                  ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  : 'bg-[#1a3d2e] text-white hover:bg-[#2a5c44] shadow-sm'"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Cart Drawer Overlay -->
    <transition name="overlay">
      <div v-if="cartOpen" class="fixed inset-0 bg-black/30 z-40 backdrop-blur-[2px]"
        @click="cartOpen = false" />
    </transition>

    <transition name="drawer">
      <aside v-if="cartOpen"
        class="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col">

        <!-- Cart Header -->
        <div class="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 class="font-bold text-gray-900 text-lg">{{ t('demo.cartTitle') }}</h2>
            <p class="text-xs text-gray-400 mt-0.5">{{ cartCount }} {{ t('demo.cartItems') }}</p>
          </div>
          <button @click="cartOpen = false"
            class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto">
          <div v-if="cartItems.length === 0" class="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
            <svg class="w-16 h-16 text-gray-200" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p class="text-sm">{{ t('demo.cartEmpty') }}</p>
            <button @click="cartOpen = false"
              class="text-sm text-[#2d6e47] hover:underline font-medium">
              {{ t('demo.continueShopping') }}
            </button>
          </div>

          <div v-else class="divide-y divide-gray-50 px-6">
            <div v-for="item in cartItems" :key="item.id" class="py-4 flex items-center gap-4">
              <div class="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
                :class="getCategoryBg(item.category)">
                {{ item.emoji }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-800 truncate">
                  {{ locale === 'zh' ? item.name : item.nameEn }}
                </p>
                <p class="text-xs text-gray-400 mt-0.5">NT$ {{ item.price.toLocaleString() }}</p>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button @click="changeQty(item.id, -1)"
                  class="w-7 h-7 rounded-full border border-gray-200 text-gray-500 text-sm hover:border-gray-400 flex items-center justify-center transition-colors">
                  −
                </button>
                <span class="text-sm font-semibold w-5 text-center">{{ item.qty }}</span>
                <button @click="changeQty(item.id, 1)"
                  class="w-7 h-7 rounded-full border border-gray-200 text-gray-500 text-sm hover:border-gray-400 flex items-center justify-center transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cart Footer -->
        <div v-if="cartItems.length > 0" class="px-6 py-5 border-t border-gray-100 bg-gray-50/80">
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm text-gray-500">{{ t('demo.cartTotal') }}</span>
            <span class="text-xl font-bold text-gray-900">NT$ {{ cartTotal.toLocaleString() }}</span>
          </div>
          <p class="text-xs text-gray-400 mb-4">{{ t('demo.taxIncluded') }}</p>
          <button @click="handleCheckout" :disabled="isCheckingOut"
            class="w-full py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
            :class="isCheckingOut
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#1a3d2e] text-white hover:bg-[#2a5c44] shadow-sm active:scale-[0.98]'">
            <svg v-if="isCheckingOut" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {{ isCheckingOut ? t('demo.checkingOut') : t('demo.checkout') }}
          </button>
        </div>
      </aside>
    </transition>

    <!-- Product Detail Modal -->
    <transition name="modal-fade">
      <div v-if="selectedProduct"
        class="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center sm:px-4"
        @click.self="selectedProduct = null">
        <div class="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden">
          <!-- Product Image -->
          <div class="relative h-48 flex items-center justify-center text-7xl"
            :class="getCategoryBg(selectedProduct.category)">
            {{ selectedProduct.emoji }}
            <div v-if="selectedProduct.stock === 0"
              class="absolute inset-0 bg-white/75 flex items-center justify-center">
              <span class="text-sm font-semibold text-red-500 bg-white border border-red-200 px-4 py-1.5 rounded-full">
                {{ t('demo.outOfStock') }}
              </span>
            </div>
            <button @click="selectedProduct = null"
              class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-gray-600 flex items-center justify-center hover:bg-white shadow-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Info -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-1">
              <div>
                <span class="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                  {{ locale === 'zh' ? selectedProduct.category : selectedProduct.categoryEn }}
                </span>
                <h2 class="text-xl font-bold text-gray-900 mt-0.5">
                  {{ locale === 'zh' ? selectedProduct.name : selectedProduct.nameEn }}
                </h2>
                <p class="text-xs text-gray-400 mt-0.5">
                  {{ locale === 'zh' ? selectedProduct.nameEn : selectedProduct.name }}
                </p>
              </div>
              <div class="text-right shrink-0 ml-4">
                <p class="text-2xl font-bold text-gray-900">NT$ {{ selectedProduct.price.toLocaleString() }}</p>
                <p class="text-xs mt-0.5" :class="selectedProduct.stock === 0 ? 'text-red-500 font-medium' : 'text-gray-400'">
                  {{ t('demo.colStock') }}：{{ selectedProduct.stock }}
                </p>
              </div>
            </div>
            <div class="mt-6">
              <button
                @click="addToCart(selectedProduct); selectedProduct = null"
                :disabled="selectedProduct.stock === 0"
                class="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
                :class="selectedProduct.stock === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-[#1a3d2e] text-white hover:bg-[#2a5c44] active:scale-[0.98]'"
              >
                {{ selectedProduct.stock === 0 ? t('demo.outOfStock') : t('demo.addToCart') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'
import { useDemoStore } from '../../stores/demoStore'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'
const { t, locale } = useI18n()
const store = useDemoStore()

const cartOpen       = ref(false)
const cartBounce     = ref(false)
const selectedProduct = ref(null)
const cart           = ref([])

const heroItems = [
  { emoji: '🌿', bg: 'bg-emerald-100' },
  { emoji: '🕯️', bg: 'bg-amber-100'   },
  { emoji: '👜', bg: 'bg-orange-100'  },
  { emoji: '☕',  bg: 'bg-yellow-100' },
  { emoji: '👕',  bg: 'bg-blue-100'   },
  { emoji: '🌸',  bg: 'bg-pink-100'   },
]

const categoryBgMap = {
  '配件': 'bg-gradient-to-br from-amber-50 to-orange-100',
  'Accessories': 'bg-gradient-to-br from-amber-50 to-orange-100',
  '居家': 'bg-gradient-to-br from-emerald-50 to-teal-100',
  'Home & Living': 'bg-gradient-to-br from-emerald-50 to-teal-100',
  '服飾': 'bg-gradient-to-br from-blue-50 to-indigo-100',
  'Clothing': 'bg-gradient-to-br from-blue-50 to-indigo-100',
  '廚房': 'bg-gradient-to-br from-yellow-50 to-amber-100',
  'Kitchen': 'bg-gradient-to-br from-yellow-50 to-amber-100',
  '保養': 'bg-gradient-to-br from-pink-50 to-rose-100',
  'Beauty': 'bg-gradient-to-br from-pink-50 to-rose-100',
}

function getCategoryBg(category) {
  return categoryBgMap[category] || 'bg-gradient-to-br from-gray-50 to-slate-100'
}

const categories = computed(() => {
  const all  = { key: '__all__', label: t('demo.categoryAll') }
  const cats = [...new Set(
    store.visibleProducts.map(p =>
      JSON.stringify({
        key:   locale.value === 'zh' ? p.category : p.categoryEn,
        label: locale.value === 'zh' ? p.category : p.categoryEn,
      })
    )
  )].map(s => JSON.parse(s))
  return [all, ...cats]
})

const activeCategory = ref('__all__')

const filteredProducts = computed(() => {
  if (activeCategory.value === '__all__') return store.visibleProducts
  return store.visibleProducts.filter(p =>
    (locale.value === 'zh' ? p.category : p.categoryEn) === activeCategory.value
  )
})

const cartItems = computed(() =>
  cart.value
    .map(item => {
      const product = store.products.find(p => p.id === item.id)
      return product ? { ...product, qty: item.qty } : null
    })
    .filter(Boolean)
)

const cartCount = computed(() => cart.value.reduce((sum, i) => sum + i.qty, 0))
const cartTotal = computed(() => cartItems.value.reduce((sum, i) => sum + i.price * i.qty, 0))

function addToCart(product) {
  if (product.stock === 0) return
  const existing = cart.value.find(i => i.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    cart.value.push({ id: product.id, qty: 1 })
  }
  cartOpen.value  = true
  cartBounce.value = true
  setTimeout(() => { cartBounce.value = false }, 400)
}

function changeQty(id, delta) {
  const item = cart.value.find(i => i.id === id)
  if (!item) return
  item.qty += delta
  if (item.qty <= 0) cart.value = cart.value.filter(i => i.id !== id)
}

function openDetail(product) {
  selectedProduct.value = product
}

const isCheckingOut = ref(false)

async function handleCheckout() {
  if (cartItems.value.length === 0 || isCheckingOut.value) return
  isCheckingOut.value = true
  try {
    const items = cartItems.value.map(i => ({
      name:  locale.value === 'zh' ? i.name : i.nameEn,
      price: i.price,
      qty:   i.qty,
    }))
    const { data } = await axios.post(`${API_BASE}/api/demo/checkout`, {
      items,
      lang: locale.value,
    })
    const form = document.createElement('form')
    form.method = 'POST'
    form.action = data.url
    Object.entries(data.params).forEach(([key, val]) => {
      const input = document.createElement('input')
      input.type  = 'hidden'
      input.name  = key
      input.value = val
      form.appendChild(input)
    })
    document.body.appendChild(form)
    form.submit()
  } catch {
    alert(t('demo.checkoutError'))
    isCheckingOut.value = false
  }
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.overlay-enter-active, .overlay-leave-active { transition: opacity 0.25s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

.drawer-enter-active, .drawer-leave-active { transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
.drawer-enter-from, .drawer-leave-to { transform: translateX(100%); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.2s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-active .bg-white, .modal-fade-leave-active .bg-white { transition: transform 0.25s ease; }
.modal-fade-enter-from .bg-white { transform: translateY(20px); }
</style>
