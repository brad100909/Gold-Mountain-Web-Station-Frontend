<template>
  <div class="min-h-screen bg-gray-100 pt-6">

    <!-- Toast Notifications -->
    <div class="fixed top-20 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <transition-group name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium text-white pointer-events-auto"
          :class="{
            'bg-green-600': toast.type === 'success',
            'bg-red-500':   toast.type === 'error',
            'bg-gray-700':  toast.type === 'info',
          }"
        >
          {{ toast.msg }}
        </div>
      </transition-group>
    </div>

    <!-- Demo Banner -->
    <div class="bg-indigo-50 border-b border-indigo-200 px-4 py-2 flex items-center justify-between text-sm">
      <div class="flex items-center gap-2 text-indigo-700">
        <span>🧪</span>
        <span class="hidden sm:inline">{{ t('demo.adminBanner') }}</span>
        <span class="sm:hidden text-xs">{{ t('demo.adminBannerShort') }}</span>
      </div>
      <router-link :to="'/' + locale + '/demo/shop'"
        class="flex items-center gap-1 text-indigo-800 font-medium hover:underline text-xs sm:text-sm">
        🛍 {{ t('demo.goShop') }} →
      </router-link>
    </div>

    <!-- Mobile Top Nav -->
    <div class="md:hidden bg-gray-900 text-gray-300 flex border-b border-gray-700">
      <button
        class="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium bg-gray-700 text-white"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
        {{ t('demo.adminProducts') }}
      </button>
      <button class="flex-1 flex items-center justify-center gap-2 py-3 text-sm text-gray-500 cursor-not-allowed opacity-50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
        {{ t('demo.adminOrders') }}
      </button>
      <button class="flex-1 flex items-center justify-center gap-2 py-3 text-sm text-gray-500 cursor-not-allowed opacity-50">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {{ t('demo.adminMembers') }}
      </button>
    </div>

    <div class="flex">

      <!-- Sidebar (desktop only) -->
      <aside class="hidden md:flex w-52 shrink-0 flex-col bg-gray-900 text-gray-300" style="min-height: calc(100vh - 104px)">
        <div class="px-5 py-5 border-b border-gray-700">
          <p class="text-xs uppercase tracking-widest text-gray-500 mb-1">{{ t('demo.adminTitle') }}</p>
          <p class="text-white font-semibold text-sm">GreenShop</p>
        </div>

        <nav class="flex-1 px-3 py-4 space-y-1 text-sm">
          <div class="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gray-700 text-white font-medium cursor-pointer">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            {{ t('demo.adminProducts') }}
          </div>

          <div class="group relative flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-500 cursor-not-allowed">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
              </svg>
              {{ t('demo.adminOrders') }}
            </div>
            <span class="text-[9px] bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded">{{ t('demo.demoOnly') }}</span>
          </div>

          <div class="group relative flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-500 cursor-not-allowed">
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ t('demo.adminMembers') }}
            </div>
            <span class="text-[9px] bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded">{{ t('demo.demoOnly') }}</span>
          </div>
        </nav>

        <!-- Reset Button -->
        <div class="px-4 py-4 border-t border-gray-700 space-y-3">
          <button
            @click="confirmReset = true"
            class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-red-900/60 text-gray-300 hover:text-red-300 text-xs transition-colors"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ t('demo.resetData') }}
          </button>
          <p class="text-[10px] text-gray-600 leading-relaxed">{{ t('demo.adminSidebarNote') }}</p>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 px-4 md:px-8 py-6 overflow-x-auto">

        <!-- Mobile Reset Button -->
        <div class="md:hidden mb-4 flex justify-end">
          <button
            @click="confirmReset = true"
            class="flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-red-100 text-gray-600 hover:text-red-600 text-xs rounded-lg transition-colors"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ t('demo.resetData') }}
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <p class="text-xs text-gray-400 mb-1">{{ t('demo.statTotal') }}</p>
            <p class="text-2xl font-bold text-gray-800">{{ store.products.length }}</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <p class="text-xs text-gray-400 mb-1">{{ t('demo.statVisible') }}</p>
            <p class="text-2xl font-bold text-green-600">{{ store.visibleProducts.length }}</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <p class="text-xs text-gray-400 mb-1">{{ t('demo.statHidden') }}</p>
            <p class="text-2xl font-bold text-gray-400">{{ store.products.length - store.visibleProducts.length }}</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm">
            <p class="text-xs text-gray-400 mb-1">{{ t('demo.statValue') }}</p>
            <p class="text-xl font-bold text-indigo-600">NT$ {{ totalValue.toLocaleString() }}</p>
          </div>
        </div>

        <!-- Products Table -->
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div class="px-4 md:px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 class="font-semibold text-gray-800">{{ t('demo.adminProducts') }}</h2>
            <button
              @click="showAddForm = !showAddForm"
              class="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-gray-800 text-white text-xs md:text-sm rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              {{ t('demo.addProduct') }}
            </button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm min-w-[600px]">
              <thead class="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th class="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10"></th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('demo.colName') }}</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('demo.colCategory') }}</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('demo.colPrice') }}</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('demo.colStock') }}</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('demo.colVisible') }}</th>
                  <th class="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr
                  v-for="product in store.products"
                  :key="product.id"
                  class="hover:bg-gray-50 transition-colors"
                  :class="!product.visible ? 'opacity-50' : ''"
                >
                  <td class="px-4 md:px-6 py-3 text-xl">{{ product.emoji }}</td>

                  <td class="px-4 py-3">
                    <div v-if="editingId === product.id">
                      <input v-model="editForm.name"
                        class="border border-indigo-300 rounded px-2 py-1 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-400 mb-1" />
                      <input v-model="editForm.nameEn" placeholder="English name"
                        class="border border-indigo-300 rounded px-2 py-1 text-sm w-full focus:outline-none focus:ring-1 focus:ring-indigo-400" />
                    </div>
                    <div v-else>
                      <p class="font-medium text-gray-800">{{ product.name }}</p>
                      <p class="text-xs text-gray-400">{{ product.nameEn }}</p>
                    </div>
                  </td>

                  <td class="px-4 py-3">
                    <span class="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{{ product.category }}</span>
                  </td>

                  <td class="px-4 py-3">
                    <input v-if="editingId === product.id"
                      v-model.number="editForm.price" type="number"
                      class="border border-indigo-300 rounded px-2 py-1 text-sm w-24 focus:outline-none focus:ring-1 focus:ring-indigo-400" />
                    <span v-else class="text-gray-700">NT$ {{ product.price.toLocaleString() }}</span>
                  </td>

                  <td class="px-4 py-3">
                    <input v-if="editingId === product.id"
                      v-model.number="editForm.stock" type="number"
                      class="border border-indigo-300 rounded px-2 py-1 text-sm w-20 focus:outline-none focus:ring-1 focus:ring-indigo-400" />
                    <span v-else :class="product.stock === 0 ? 'text-red-500 font-medium' : 'text-gray-700'">
                      {{ product.stock }}
                    </span>
                  </td>

                  <td class="px-4 py-3">
                    <button
                      @click="store.toggleVisibility(product.id)"
                      class="w-10 h-5 rounded-full relative transition-colors duration-200 focus:outline-none"
                      :class="product.visible ? 'bg-green-500' : 'bg-gray-300'"
                    >
                      <span
                        class="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                        :class="product.visible ? 'left-[calc(100%-18px)]' : 'left-0.5'"
                      />
                    </button>
                  </td>

                  <td class="px-4 py-3">
                    <!-- Editing mode -->
                    <div v-if="editingId === product.id" class="flex items-center gap-2">
                      <button @click="saveEdit(product.id)"
                        class="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700">
                        {{ t('demo.save') }}
                      </button>
                      <button @click="cancelEdit"
                        class="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">
                        {{ t('demo.cancel') }}
                      </button>
                    </div>
                    <!-- Delete confirmation mode -->
                    <div v-else-if="deletingId === product.id" class="flex items-center gap-2">
                      <span class="text-xs text-red-500 font-medium">{{ t('demo.deleteConfirm') }}</span>
                      <button @click="confirmDelete(product.id)"
                        class="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">
                        {{ t('demo.yes') }}
                      </button>
                      <button @click="deletingId = null"
                        class="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">
                        {{ t('demo.no') }}
                      </button>
                    </div>
                    <!-- Normal mode -->
                    <div v-else class="flex items-center gap-2">
                      <button @click="startEdit(product)"
                        class="p-1.5 text-gray-400 hover:text-indigo-600 transition-colors rounded hover:bg-indigo-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button @click="deletingId = product.id"
                        class="p-1.5 text-gray-400 hover:text-red-500 transition-colors rounded hover:bg-red-50">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Add Product Form -->
        <transition name="fade">
          <div v-if="showAddForm" class="bg-white rounded-2xl shadow-sm p-6">
            <h3 class="font-semibold text-gray-800 mb-4">{{ t('demo.addProduct') }}</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label class="text-xs text-gray-500 mb-1 block">{{ t('demo.colName') }} (中)</label>
                <input v-model="newProduct.name" class="input-field" :placeholder="t('demo.newNameZh')" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">{{ t('demo.colName') }} (EN)</label>
                <input v-model="newProduct.nameEn" class="input-field" :placeholder="t('demo.newNameEn')" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">Emoji</label>
                <input v-model="newProduct.emoji" class="input-field" placeholder="🛍" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">{{ t('demo.colCategory') }} (中)</label>
                <input v-model="newProduct.category" class="input-field" :placeholder="t('demo.newCatZh')" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">{{ t('demo.colCategory') }} (EN)</label>
                <input v-model="newProduct.categoryEn" class="input-field" :placeholder="t('demo.newCatEn')" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">{{ t('demo.colPrice') }} (NT$)</label>
                <input v-model.number="newProduct.price" type="number" class="input-field" placeholder="500" />
              </div>
              <div>
                <label class="text-xs text-gray-500 mb-1 block">{{ t('demo.colStock') }}</label>
                <input v-model.number="newProduct.stock" type="number" class="input-field" placeholder="10" />
              </div>
            </div>
            <div class="flex gap-3 mt-5">
              <button @click="submitNewProduct"
                class="px-5 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                {{ t('demo.save') }}
              </button>
              <button @click="showAddForm = false"
                class="px-5 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                {{ t('demo.cancel') }}
              </button>
            </div>
          </div>
        </transition>

      </main>
    </div>

    <!-- Reset Confirm Modal -->
    <transition name="fade">
      <div v-if="confirmReset" class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
        <div class="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
          <div class="text-2xl mb-3 text-center">🔄</div>
          <h3 class="font-semibold text-gray-800 text-center mb-2">{{ t('demo.resetData') }}</h3>
          <p class="text-sm text-gray-500 text-center mb-5">{{ t('demo.resetConfirm') }}</p>
          <div class="flex gap-3">
            <button @click="doReset"
              class="flex-1 py-2.5 bg-gray-800 text-white rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors">
              {{ t('demo.yes') }}
            </button>
            <button @click="confirmReset = false"
              class="flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
              {{ t('demo.no') }}
            </button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDemoStore } from '../../stores/demoStore'

const { t, locale } = useI18n()
const store = useDemoStore()

const totalValue = computed(() =>
  store.products.reduce((sum, p) => sum + p.price * p.stock, 0)
)

// Toast
const toasts = ref([])
function showToast(msg, type = 'success') {
  const id = Date.now()
  toasts.value.push({ id, msg, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 2500)
}

// Inline edit
const editingId = ref(null)
const editForm = reactive({ name: '', nameEn: '', price: 0, stock: 0 })

function startEdit(product) {
  deletingId.value = null
  editingId.value = product.id
  editForm.name = product.name
  editForm.nameEn = product.nameEn
  editForm.price = product.price
  editForm.stock = product.stock
}

function saveEdit(id) {
  store.updateProduct(id, { ...editForm })
  editingId.value = null
  showToast(t('demo.toastSaved'))
}

function cancelEdit() {
  editingId.value = null
}

// Delete with confirmation
const deletingId = ref(null)

function confirmDelete(id) {
  store.deleteProduct(id)
  deletingId.value = null
  showToast(t('demo.toastDeleted'), 'error')
}

// Add product
const showAddForm = ref(false)
const newProduct = reactive({
  name: '', nameEn: '', emoji: '📦',
  category: '', categoryEn: '',
  price: 0, stock: 0, visible: true
})

function submitNewProduct() {
  if (!newProduct.name || !newProduct.price) return
  store.addProduct({ ...newProduct })
  Object.assign(newProduct, { name: '', nameEn: '', emoji: '📦', category: '', categoryEn: '', price: 0, stock: 0, visible: true })
  showAddForm.value = false
  showToast(t('demo.toastAdded'))
}

// Reset
const confirmReset = ref(false)
function doReset() {
  store.resetProducts()
  confirmReset.value = false
  editingId.value = null
  deletingId.value = null
  showAddForm.value = false
  showToast(t('demo.toastReset'), 'info')
}
</script>

<style scoped>
.input-field {
  @apply w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400;
}

.fade-enter-active, .fade-leave-active { transition: all 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-8px); }

.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from { opacity: 0; transform: translateX(20px); }
.toast-leave-to { opacity: 0; transform: translateX(20px); }
</style>
