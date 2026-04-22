import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { posts } from './src/data/blog.js'

export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes() {
      const langs = ['zh', 'en']
      const staticRoutes = [
        '',
        '/portfolio',
        '/services',
        '/pricing',
        '/contact',
        '/blog',
      ]
      const blogRoutes = posts.map(p => `/blog/${p.slug}`)
      return langs.flatMap(lang =>
        [...staticRoutes, ...blogRoutes].map(r => `/${lang}${r}`)
      )
    }
  }
})
