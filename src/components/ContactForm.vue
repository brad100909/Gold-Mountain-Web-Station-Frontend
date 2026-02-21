<template>
  <section id="contact" class="py-24 px-6 bg-gray-900 text-gray-100">
    <div class="max-w-lg mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-3">
        {{ t('contact.title') }}
      </h2>
      <p class="text-gray-400 text-center mb-10">
        {{ t('contact.description') }}
      </p>

      <!-- Success state -->
      <div v-if="submitted" class="text-center py-10">
        <div class="text-green-400 text-5xl mb-6">✓</div>
        <h3 class="text-xl font-semibold mb-3">{{ t('contact.form.successTitle') }}</h3>
        <p class="text-gray-400">{{ t('contact.form.successBody') }}</p>
      </div>

      <!-- Form -->
      <form v-else @submit.prevent="handleSubmit" novalidate>
        <!-- Name -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-300 mb-1">
            {{ t('contact.form.nameLabel') }}
          </label>
          <input
            v-model="form.name"
            type="text"
            :placeholder="t('contact.form.namePlaceholder')"
            class="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700 placeholder-gray-500"
          />
        </div>

        <!-- Email -->
        <div class="mb-5">
          <label class="block text-sm font-medium text-gray-300 mb-1">
            {{ t('contact.form.emailLabel') }}
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="your@email.com"
            class="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700 placeholder-gray-500"
          />
        </div>

        <!-- Message -->
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-300 mb-1">
            {{ t('contact.form.messageLabel') }}
          </label>
          <textarea
            v-model="form.message"
            rows="5"
            :placeholder="t('contact.form.messagePlaceholder')"
            class="w-full bg-gray-800 border border-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-green-700 placeholder-gray-500 resize-none"
          ></textarea>
        </div>

        <!-- Error -->
        <p v-if="errorMsg" class="text-red-400 text-sm mb-4">{{ errorMsg }}</p>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg px-6 py-3 transition"
        >
          {{ loading ? t('contact.form.submitting') : t('contact.form.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { t } = useI18n()

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
    await axios.post('/api/contact', {
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
