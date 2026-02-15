<template>
  <div>
    <h1>Shopify 商品列表</h1>
    <div v-if="loading">載入中...</div>
    <div v-else-if="error" style="color: red;">
      <p>錯誤: {{ error }}</p>
      <p>請檢查瀏覽器 Console 查看詳細錯誤訊息</p>
    </div>
    <ul v-else>
      <li v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.title }}</h2>
        <p>價格: ${{ product.price }} {{ product.currencyCode }}</p>
        <img v-if="product.image" :src="product.image" :alt="product.title" width="150" />
        <p v-html="product.description"></p>
        <button
          @click="buyNow(product.variantId)"
          class="buy-btn"
        >
          立即購買
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Shopify 資訊
const SHOPIFY_DOMAIN = 'pqkvn8-ki.myshopify.com'
const STOREFRONT_TOKEN = '9aeca82193079d6a734472d4c8fb3734'
const API_VERSION = '2024-10'

const products = ref([])
const loading = ref(true)
const error = ref(null)

// 測試商品
const fallbackProducts = [
  {
    id: 'test-1',
    title: '測試商品 A',
    description: '這是測試商品 A 的描述。',
    price: '99.99',
    currencyCode: 'TWD',
    image: 'https://via.placeholder.com/150?text=商品A',
    variantId: null,
  },
]

// 從 GID 提取數字 ID
const extractNumericId = (gid) => {
  // gid://shopify/ProductVariant/123456 → 123456
  const match = gid.match(/\/(\d+)$/)
  return match ? match[1] : null
}

// 取得商品
const fetchProducts = async () => {
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            description
            images(first: 1) {
              edges {
                node {
                  url
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await axios.post(
      `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
        },
      }
    )

    console.log('API 回應:', response.data)

    if (response.data.errors) {
      console.error('GraphQL 錯誤:', response.data.errors)
      error.value = `GraphQL 錯誤: ${response.data.errors[0].message}`
      products.value = fallbackProducts
      return
    }

    const edges = response.data.data.products.edges
    
    if (edges.length > 0) {
      products.value = edges.map(({ node }) => {
        const variantGid = node.variants.edges[0]?.node.id || ''
        const variantNumericId = extractNumericId(variantGid)
        
        return {
          id: node.id,
          title: node.title,
          description: node.description || '無描述',
          price: node.variants.edges[0]?.node.price.amount || '0.00',
          currencyCode: node.variants.edges[0]?.node.price.currencyCode || 'TWD',
          image: node.images.edges[0]?.node.url || '',
          variantId: variantNumericId,
        }
      })
      console.log('成功載入商品:', products.value)
    } else {
      console.warn('Shopify 沒有商品,使用測試資料')
      products.value = fallbackProducts
    }
  } catch (err) {
    console.error('抓取 Shopify 商品錯誤:', err)
    console.error('錯誤詳情:', err.response?.data || err.message)
    
    if (err.response?.status === 401) {
      error.value = 'API Token 無效,請檢查 Storefront API 設定'
    } else if (err.response?.status === 403) {
      error.value = 'API 權限不足,請檢查 Storefront API scopes'
    } else {
      error.value = `網路錯誤: ${err.message}`
    }
    
    products.value = fallbackProducts
  } finally {
    loading.value = false
  }
}

// 點購買按鈕 → 加入購物車並跳轉結帳
const buyNow = (variantId) => {
  if (!variantId) {
    alert('這是測試商品,無法購買')
    return
  }

  // 正確的 Shopify 購物車 URL 格式
  const checkoutUrl = `https://${SHOPIFY_DOMAIN}/cart/${variantId}:1`
  
  console.log('跳轉到:', checkoutUrl)
  window.location.href = checkoutUrl
}

onMounted(() => {
  fetchProducts()
})
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 15px;
  list-style: none;
  border-radius: 8px;
}

.product h2 {
  margin-top: 0;
  color: #333;
}

.product img {
  border-radius: 4px;
  margin: 10px 0;
}

.buy-btn {
  background-color: #008060;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.buy-btn:hover {
  background-color: #006644;
}
</style>
