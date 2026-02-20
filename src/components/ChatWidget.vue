<template>
  <!-- Floating Bubble Button -->
  <button
    @click="toggleChat"
    :aria-label="t('chat.toggleLabel')"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg
           bg-gradient-to-br from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A]
           flex items-center justify-center
           hover:scale-110 transition-transform duration-200 focus:outline-none
           focus-visible:ring-2 focus-visible:ring-green-700"
  >
    <!-- Chat icon when closed -->
    <svg
      v-if="!isOpen"
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 text-gray-900"
      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8
           a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12
           c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
    <!-- X icon when open -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="w-7 h-7 text-gray-900"
      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <!-- Chat Panel -->
  <Transition name="chat-slide">
    <div
      v-if="isOpen"
      class="fixed bottom-24 right-6 z-40 w-80 sm:w-96
             bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl
             flex flex-col overflow-hidden"
      style="max-height: 520px;"
    >
      <!-- Panel Header -->
      <div class="flex items-center gap-3 px-4 py-3
                  bg-gradient-to-r from-[#BFA76A] via-[#E3D3A3] to-[#A58A4A]">
        <div class="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#BFA76A]"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0
                 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0
                 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0
                 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0
                 00-3.09 3.09z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-semibold text-gray-900 leading-none">Golden Mountain AI</p>
          <p class="text-xs text-gray-700 mt-0.5">{{ t('chat.subtitle') }}</p>
        </div>
      </div>

      <!-- Message List -->
      <div
        ref="messageContainer"
        class="flex-1 overflow-y-auto px-4 py-3 space-y-3"
        style="min-height: 200px;"
      >
        <!-- Welcome message -->
        <div class="flex justify-start">
          <div class="max-w-[80%] bg-gray-800 text-gray-100 text-sm
                      rounded-2xl rounded-tl-sm px-3 py-2 leading-relaxed">
            {{ t('chat.welcomeMessage') }}
          </div>
        </div>

        <!-- Conversation messages -->
        <template v-for="(msg, index) in messages" :key="index">
          <div v-if="msg.role === 'user'" class="flex justify-end">
            <div class="max-w-[80%] bg-green-700 text-white text-sm
                        rounded-2xl rounded-tr-sm px-3 py-2 leading-relaxed">
              {{ msg.content }}
            </div>
          </div>
          <div v-else class="flex justify-start">
            <div class="max-w-[80%] bg-gray-800 text-gray-100 text-sm
                        rounded-2xl rounded-tl-sm px-3 py-2 leading-relaxed whitespace-pre-wrap">
              {{ msg.content }}
            </div>
          </div>
        </template>

        <!-- Typing indicator -->
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5">
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
        </div>

        <!-- Error message -->
        <div v-if="errorMsg" class="flex justify-start">
          <div class="max-w-[80%] bg-red-900/60 text-red-300 text-xs
                      rounded-2xl rounded-tl-sm px-3 py-2 border border-red-700/40">
            {{ errorMsg }}
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t border-gray-700 px-3 py-2 flex gap-2 items-end bg-gray-900">
        <textarea
          v-model="inputText"
          @keydown.enter.exact.prevent="sendMessage"
          :placeholder="t('chat.inputPlaceholder')"
          :disabled="isLoading"
          rows="1"
          class="flex-1 resize-none bg-gray-800 text-gray-100 text-sm
                 rounded-xl px-3 py-2 border border-gray-700
                 focus:outline-none focus:border-green-700
                 placeholder-gray-500 disabled:opacity-50
                 leading-relaxed transition-colors duration-150"
          style="max-height: 96px; overflow-y: auto;"
          @input="autoResize"
          ref="textareaRef"
        ></textarea>
        <button
          @click="sendMessage"
          :disabled="isLoading || !inputText.trim()"
          :aria-label="t('chat.sendLabel')"
          class="flex-shrink-0 w-9 h-9 rounded-xl bg-green-700
                 flex items-center justify-center
                 hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed
                 transition-colors duration-150 focus:outline-none
                 focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white"
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0
                 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { t, locale } = useI18n()

const isOpen = ref(false)
const inputText = ref('')
const messages = ref([])
const isLoading = ref(false)
const errorMsg = ref('')

const messageContainer = ref(null)
const textareaRef = ref(null)

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function toggleChat() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => textareaRef.value?.focus())
  }
}

function autoResize(event) {
  const el = event.target
  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, 96) + 'px'
}

async function scrollToBottom() {
  await nextTick()
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

async function sendMessage() {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return

  errorMsg.value = ''
  inputText.value = ''

  if (textareaRef.value) {
    textareaRef.value.style.height = 'auto'
  }

  messages.value.push({ role: 'user', content: text })
  await scrollToBottom()

  isLoading.value = true

  try {
    const { data } = await axios.post(`${API_URL}/api/chat`, {
      messages: messages.value,
      locale: locale.value,
    })
    messages.value.push({ role: 'assistant', content: data.reply })
    await scrollToBottom()
  } catch (err) {
    const serverMsg = err.response?.data?.error
    errorMsg.value = serverMsg || t('chat.errorGeneric')
  } finally {
    isLoading.value = false
    await nextTick()
    textareaRef.value?.focus()
  }
}

watch(messages, scrollToBottom, { deep: true })
</script>

<style scoped>
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.chat-slide-enter-from,
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.97);
}
</style>
