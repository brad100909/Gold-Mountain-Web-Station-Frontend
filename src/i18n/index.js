import { createI18n } from 'vue-i18n'
import zh from './zh-TW.json'
import en from './en.json'

const i18n = createI18n({
  legacy: false,          // Vue 3 必須
  locale: 'zh',            // 預設語言
  fallbackLocale: 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
