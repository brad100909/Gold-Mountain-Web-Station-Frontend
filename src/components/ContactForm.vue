<template>
  <footer id="contact" class="bg-[#0f1117] text-gray-300">

    <!-- Main Footer -->
    <div class="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16">

      <!-- Left: Brand Info -->
      <div class="lg:col-span-2 flex flex-col gap-6">
        <div class="flex items-center gap-3">
          <img src="/Logo.svg" alt="Golden Mountain Logo" class="h-9 w-auto" />
          <span class="text-lg font-bold text-white tracking-wide">Golden Mountain</span>
        </div>

        <p class="text-[#BFA76A] font-medium text-sm leading-relaxed">
          {{ t('footer.tagline') }}
        </p>

        <p class="text-gray-400 text-sm leading-relaxed">
          {{ t('footer.description') }}
        </p>

        <div class="flex flex-col gap-2 text-sm">
          <span class="text-gray-500 text-xs uppercase tracking-widest">{{ t('footer.emailLabel') }}</span>
          <a
            href="mailto:brad100909@gmail.com"
            class="text-gray-300 hover:text-[#BFA76A] transition-colors duration-200 flex items-center gap-2"
          >
            <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0
                   01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25
                   2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07
                   1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25
                   2.25 0 01-1.07-1.916V6.75" />
            </svg>
            brad100909@gmail.com
          </a>
        </div>

        <!-- Gold divider -->
        <div class="w-12 h-px bg-gradient-to-r from-[#BFA76A] to-transparent mt-2"></div>

        <p class="text-gray-600 text-xs">Vue 3 · Laravel · VPS</p>
      </div>

      <!-- Right: Contact Form -->
      <div class="lg:col-span-3">
        <h2 class="text-xl font-semibold text-white mb-1">{{ t('contact.title') }}</h2>
        <p class="text-gray-400 text-sm mb-8">{{ t('contact.description') }}</p>

        <!-- Success -->
        <div v-if="submitted" class="flex flex-col items-start gap-4 py-8">
          <div class="w-12 h-12 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center">
            <svg class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg">{{ t('contact.form.successTitle') }}</h3>
            <p class="text-gray-400 text-sm mt-1">{{ t('contact.form.successBody') }}</p>
          </div>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="handleSubmit" novalidate class="flex flex-col gap-4">
          <!-- Name + Email row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                {{ t('contact.form.nameLabel') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                :placeholder="t('contact.form.namePlaceholder')"
                class="w-full bg-[#1a1f2e] border border-gray-700/60 text-gray-100 rounded-lg px-4 py-3 text-sm
                       focus:outline-none focus:border-[#BFA76A]/60 focus:bg-[#1e2436]
                       placeholder-gray-600 transition-colors duration-200"
              />
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
                {{ t('contact.form.emailLabel') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                class="w-full bg-[#1a1f2e] border border-gray-700/60 text-gray-100 rounded-lg px-4 py-3 text-sm
                       focus:outline-none focus:border-[#BFA76A]/60 focus:bg-[#1e2436]
                       placeholder-gray-600 transition-colors duration-200"
              />
            </div>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
              {{ t('contact.form.messageLabel') }}
            </label>
            <textarea
              v-model="form.message"
              rows="5"
              :placeholder="t('contact.form.messagePlaceholder')"
              class="w-full bg-[#1a1f2e] border border-gray-700/60 text-gray-100 rounded-lg px-4 py-3 text-sm
                     focus:outline-none focus:border-[#BFA76A]/60 focus:bg-[#1e2436]
                     placeholder-gray-600 resize-none transition-colors duration-200"
            ></textarea>
          </div>

          <!-- Error -->
          <p v-if="errorMsg" class="text-red-400 text-xs flex items-center gap-1.5">
            <svg class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            {{ errorMsg }}
          </p>

          <!-- Submit -->
          <div class="flex items-center justify-between pt-1">
            <p class="text-gray-600 text-xs hidden sm:block">{{ t('contact.cta') }}</p>
            <button
              type="submit"
              :disabled="loading"
              class="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium
                     bg-gradient-to-r from-[#BFA76A] to-[#A58A4A]
                     hover:from-[#CDB87A] hover:to-[#B59A5A]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     text-gray-900 transition-all duration-200 shadow-lg shadow-[#BFA76A]/10"
            >
              <svg v-if="!loading" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
              {{ loading ? t('contact.form.submitting') : t('contact.form.submit') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p class="text-gray-600 text-xs">{{ t('footer.copyright') }}</p>
        <p class="text-gray-700 text-xs">Built with Vue 3 + Laravel</p>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { t } = useI18n()

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

const form = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    errorMsg.value = t('contact.form.errorGeneric')
    return false
  }
  if (!emailRe.test(form.email)) {
    errorMsg.value = t('contact.form.errorGeneric')
    return false
  }
  return true
}

async function handleSubmit() {
  errorMsg.value = ''
  if (!validate()) return

  loading.value = true
  try {
    await axios.post(`${API_URL}/api/contact`, {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    })
    submitted.value = true
  } catch {
    errorMsg.value = t('contact.form.errorGeneric')
  } finally {
    loading.value = false
  }
}
</script>
