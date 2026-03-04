<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-6">
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md w-full p-8 text-center">

      <!-- Success -->
      <template v-if="status === 'success'">
        <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-xl font-bold text-gray-800 mb-2">{{ t('payment.successTitle') }}</h1>
        <p class="text-gray-500 text-sm mb-6">{{ t('payment.successDesc') }}</p>
        <div class="bg-gray-50 rounded-xl p-4 text-left mb-6 space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">{{ t('payment.orderNo') }}</span>
            <span class="font-medium text-gray-700 font-mono text-xs">{{ orderNo }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">{{ t('payment.amount') }}</span>
            <span class="font-semibold text-gray-800">NT$ {{ Number(amount).toLocaleString() }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-400">{{ t('payment.method') }}</span>
            <span class="text-gray-700">{{ t('payment.creditCard') }}</span>
          </div>
        </div>
      </template>

      <!-- Failed -->
      <template v-else>
        <div class="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
          <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 class="text-xl font-bold text-gray-800 mb-2">{{ t('payment.failedTitle') }}</h1>
        <p class="text-gray-500 text-sm mb-2">{{ t('payment.failedDesc') }}</p>
        <p v-if="msg" class="text-xs text-red-400 bg-red-50 rounded-lg px-3 py-2 mb-6">{{ msg }}</p>
      </template>

      <!-- Demo note -->
      <div class="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 text-xs text-amber-700 mb-6">
        🧪 {{ t('payment.demoNote') }}
      </div>

      <!-- Actions -->
      <div class="flex flex-col gap-3">
        <router-link
          :to="'/' + locale + '/demo/shop'"
          class="w-full py-2.5 bg-gray-800 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors text-center"
        >
          {{ t('payment.backToShop') }}
        </router-link>
        <router-link
          :to="'/' + locale"
          class="w-full py-2.5 bg-gray-100 text-gray-700 text-sm rounded-xl hover:bg-gray-200 transition-colors text-center"
        >
          {{ t('payment.backToHome') }}
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const route = useRoute()

const status  = computed(() => route.query.status || 'failed')
const msg     = computed(() => route.query.msg || '')
const orderNo = computed(() => route.query.no || '—')
const amount  = computed(() => route.query.amount || 0)
</script>
