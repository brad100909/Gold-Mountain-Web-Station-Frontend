import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const initialData = [
  { id: 1, name: '手工皮革錢包', nameEn: 'Handmade Leather Wallet', price: 1200, stock: 15, visible: true, category: '配件', categoryEn: 'Accessories', emoji: '👜' },
  { id: 2, name: '香氛蠟燭禮盒', nameEn: 'Scented Candle Gift Set', price: 880, stock: 8, visible: true, category: '居家', categoryEn: 'Home & Living', emoji: '🕯️' },
  { id: 3, name: '有機棉 T-shirt', nameEn: 'Organic Cotton Tee', price: 650, stock: 30, visible: true, category: '服飾', categoryEn: 'Clothing', emoji: '👕' },
  { id: 4, name: '竹製環保餐具組', nameEn: 'Bamboo Cutlery Set', price: 420, stock: 20, visible: false, category: '廚房', categoryEn: 'Kitchen', emoji: '🥢' },
  { id: 5, name: '手沖咖啡濾杯', nameEn: 'Pour-Over Dripper', price: 780, stock: 12, visible: true, category: '廚房', categoryEn: 'Kitchen', emoji: '☕' },
  { id: 6, name: '植萃護手霜', nameEn: 'Botanical Hand Cream', price: 360, stock: 45, visible: true, category: '保養', categoryEn: 'Beauty', emoji: '🌿' },
]

export const useDemoStore = defineStore('demo', () => {
  const products = ref(initialData.map(p => ({ ...p })))
  const nextId = ref(initialData.length + 1)

  const visibleProducts = computed(() => products.value.filter(p => p.visible))

  function toggleVisibility(id) {
    const p = products.value.find(p => p.id === id)
    if (p) p.visible = !p.visible
  }

  function updateProduct(id, changes) {
    const p = products.value.find(p => p.id === id)
    if (p) Object.assign(p, changes)
  }

  function deleteProduct(id) {
    const idx = products.value.findIndex(p => p.id === id)
    if (idx !== -1) products.value.splice(idx, 1)
  }

  function addProduct(product) {
    products.value.push({ ...product, id: nextId.value++ })
  }

  function resetProducts() {
    products.value = initialData.map(p => ({ ...p }))
    nextId.value = initialData.length + 1
  }

  return { products, visibleProducts, toggleVisibility, updateProduct, deleteProduct, addProduct, resetProducts }
})
