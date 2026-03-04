<template>
  <div class="min-h-screen bg-gray-50 pt-6">

    <!-- Demo Banner -->
    <div class="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center justify-between text-sm">
      <div class="flex items-center gap-2 text-amber-700">
        <span>🧪</span>
        <span class="hidden sm:inline">{{ t('demo.shopBanner') }}</span>
        <span class="sm:hidden text-xs">{{ t('demo.shopBannerShort') }}</span>
      </div>
      <router-link :to="'/' + locale + '/demo/admin'"
        class="flex items-center gap-1 text-amber-800 font-medium hover:underline text-xs sm:text-sm">
        ⚙️ {{ t('demo.goAdmin') }} →
      </router-link>
    </div>

    <!-- Shop Header -->
    <header class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-16 z-30">
      <div class="flex items-center gap-3">
        <span class="text-xl md:text-2xl font-bold text-gray-800">🌿 GreenShop</span>
        <span class="text-xs text-gray-400 hidden sm:block">{{ t('demo.shopTagline') }}</span>
      </div>
      <button
        @click="cartOpen = !cartOpen"
        :class="cartBounce ? 'scale-125' : 'scale-100'"
        class="relative flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
      >
        <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="text-sm font-medium text-gray-700 hidden sm:inline">{{ t('demo.cart') }}</span>
        <span v-if="cartCount > 0"
          class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
          {{ cartCount }}
        </span>
      </button>
    </header>

    <!-- Hero Banner -->
    <div class="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-10 md:py-14">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-xs tracking-widest uppercase text-gray-400 mb-2">{{ t('demo.heroEyebrow') }}</p>
          <h1 class="text-2xl md:text-3xl font-bold mb-3 leading-snug">{{ t('demo.heroTitle') }}</h1>
          <p class="text-gray-400 text-sm md:text-base">{{ t('demo.heroDesc') }}</p>
        </div>
        <div class="flex gap-4 text-4xl shrink-0">
          <span>🌿</span><span>🕯️</span><span>👜</span>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 md:px-6 py-8 flex gap-8">

      <!-- Main Content -->
      <div class="flex-1 min-w-0">

        <!-- Category Filter -->
        <div class="flex flex-wrap gap-2 mb-6">
          <button
            v-for="cat in categories"
            :key="cat.key"
            @click="activeCategory = cat.key"
            class="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
            :class="activeCategory === cat.key
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProducts.length === 0" class="text-center py-20">
          <div class="text-5xl mb-4">📦</div>
          <p class="text-gray-500">{{ t('demo.shopEmpty') }}</p>
          <router-link :to="'/' + locale + '/demo/admin'" class="mt-3 inline-block text-sm text-amber-700 hover:underline">
            {{ t('demo.goAdminAdd') }}
          </router-link>
        </div>

        <!-- Product Grid -->
        <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            @click="openDetail(product)"
          >
            <!-- Product Image -->
            <div class="h-32 md:h-36 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-4xl md:text-5xl
                        group-hover:scale-105 transition-transform duration-300 relative">
              {{ product.emoji }}
              <!-- Out of Stock Badge -->
              <div v-if="product.stock === 0"
                class="absolute inset-0 bg-white/70 flex items-center justify-center">
                <span class="text-xs font-semibold text-red-500 bg-red-50 border border-red-200 px-2 py-1 rounded-full">
                  {{ t('demo.outOfStock') }}
                </span>
              </div>
            </div>
            <!-- Product Info -->
            <div class="p-3 md:p-4">
              <span class="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                {{ locale === 'zh' ? product.category : product.categoryEn }}
              </span>
              <h3 class="font-semibold text-gray-800 mt-0.5 mb-1 text-sm leading-snug">
                {{ locale === 'zh' ? product.name : product.nameEn }}
              </h3>
              <div class="flex items-center justify-between mt-3">
                <span class="font-bold text-gray-900 text-sm">NT$ {{ product.price.toLocaleString() }}</span>
                <button
                  @click.stop="addToCart(product)"
                  :disabled="product.stock === 0"
                  class="px-3 py-1.5 text-xs rounded-full transition-colors active:scale-95"
                  :class="product.stock === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-800 text-white hover:bg-gray-700'"
                >
                  {{ product.stock === 0 ? t('demo.outOfStock') : t('demo.addToCart') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Sidebar -->
      <transition name="cart-slide">
        <aside v-if="cartOpen" class="w-64 md:w-72 shrink-0">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 sticky top-40 overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 class="font-semibold text-gray-800">{{ t('demo.cartTitle') }}</h2>
              <button @click="cartOpen = false" class="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div v-if="cartItems.length === 0" class="px-5 py-8 text-center text-gray-400 text-sm">
              {{ t('demo.cartEmpty') }}
            </div>
            <div v-else class="divide-y divide-gray-100 max-h-80 overflow-y-auto">
              <div v-for="item in cartItems" :key="item.id" class="px-5 py-3 flex items-center gap-3">
                <span class="text-xl">{{ item.emoji }}</span>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-medium text-gray-700 truncate">
                    {{ locale === 'zh' ? item.name : item.nameEn }}
                  </p>
                  <p class="text-xs text-gray-400">NT$ {{ item.price.toLocaleString() }}</p>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button @click="changeQty(item.id, -1)"
                    class="w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs hover:bg-gray-200 flex items-center justify-center">−</button>
                  <span class="text-xs font-medium w-4 text-center">{{ item.qty }}</span>
                  <button @click="changeQty(item.id, 1)"
                    class="w-5 h-5 rounded-full bg-gray-100 text-gray-600 text-xs hover:bg-gray-200 flex items-center justify-center">+</button>
                </div>
              </div>
            </div>

            <div v-if="cartItems.length > 0" class="px-5 py-4 border-t border-gray-100 bg-gray-50">
              <div class="flex justify-between text-sm font-semibold text-gray-800 mb-3">
                <span>{{ t('demo.cartTotal') }}</span>
                <span>NT$ {{ cartTotal.toLocaleString() }}</span>
              </div>
              <button @click="checkoutAlert"
                class="w-full py-2.5 bg-gray-800 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors">
                {{ t('demo.checkout') }}
              </button>
            </div>
          </div>
        </aside>
      </transition>

    </div>

    <!-- Product Detail Modal -->
    <transition name="modal">
      <div v-if="selectedProduct" class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
        @click.self="selectedProduct = null">
        <div class="bg-white rounded-2xl shadow-xl max-w-sm w-full overflow-hidden">
          <div class="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl relative">
            {{ selectedProduct.emoji }}
            <div v-if="selectedProduct.stock === 0"
              class="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span class="text-sm font-semibold text-red-500 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                {{ t('demo.outOfStock') }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <span class="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
              {{ locale === 'zh' ? selectedProduct.category : selectedProduct.categoryEn }}
            </span>
            <h2 class="text-xl font-bold text-gray-800 mt-1 mb-1">
              {{ locale === 'zh' ? selectedProduct.name : selectedProduct.nameEn }}
            </h2>
            <p class="text-xs text-gray-400 mb-4">
              {{ locale === 'zh' ? selectedProduct.nameEn : selectedProduct.name }}
            </p>
            <div class="flex items-center justify-between mb-5">
              <span class="text-2xl font-bold text-gray-900">NT$ {{ selectedProduct.price.toLocaleString() }}</span>
              <span class="text-xs text-gray-400">
                {{ t('demo.colStock') }}：
                <span :class="selectedProduct.stock === 0 ? 'text-red-500 font-semibold' : 'text-gray-700'">
                  {{ selectedProduct.stock }}
                </span>
              </span>
            </div>
            <div class="flex gap-3">
              <button
                @click="addToCart(selectedProduct); selectedProduct = null"
                :disabled="selectedProduct.stock === 0"
                class="flex-1 py-2.5 text-sm font-medium rounded-xl transition-colors"
                :class="selectedProduct.stock === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-800 text-white hover:bg-gray-700'"
              >
                {{ selectedProduct.stock === 0 ? t('demo.outOfStock') : t('demo.addToCart') }}
              </button>
              <button @click="selectedProduct = null"
                class="px-4 py-2.5 bg-gray-100 text-gray-700 text-sm rounded-xl hover:bg-gray-200 transition-colors">
                {{ t('demo.close') }}
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
import { useDemoStore } from '../../stores/demoStore'

const { t, locale } = useI18n()
const store = useDemoStore()

const cartOpen = ref(false)
const cartBounce = ref(false)
const selectedProduct = ref(null)

// cart stores { id, qty } only — price is always derived from store
const cart = ref([])

const categories = computed(() => {
  const all = { key: '__all__', label: t('demo.categoryAll') }
  const cats = [...new Set(
    store.visibleProducts.map(p => JSON.stringify({
      key: locale.value === 'zh' ? p.category : p.categoryEn,
      label: locale.value === 'zh' ? p.category : p.categoryEn
    }))
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

// cartItems: join cart ids with live store data (price always up-to-date)
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
  cartOpen.value = true
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

function checkoutAlert() {
  alert(t('demo.checkoutAlert'))
}
</script>

<style scoped>
.cart-slide-enter-active, .cart-slide-leave-active { transition: all 0.25s ease; }
.cart-slide-enter-from, .cart-slide-leave-to { opacity: 0; transform: translateX(20px); }

.modal-enter-active, .modal-leave-active { transition: all 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .bg-white, .modal-leave-to .bg-white { transform: scale(0.95); }
</style>
