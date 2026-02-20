# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local development server (Vite)
npm run build     # Production build to dist/
npm run preview   # Preview the production build locally
```

No lint or test commands are configured.

## Architecture Overview

This is a **Vue 3 + Vite** bilingual portfolio/service website for a web design business. It uses JavaScript (not TypeScript).

### Tech Stack

- **Vue 3** with Composition API (`<script setup>` syntax throughout)
- **Vue Router 4** — language-prefixed routes (`/:lang(zh|en)`)
- **Vue I18n 11** — dual-language support (zh / en), `legacy: false`
- **Pinia** — configured but currently unused, available for future features
- **Tailwind CSS 3** — utility classes + custom fonts (Inter, Noto Sans TC) and a `fadeInUpSmooth` animation
- **Swiper 12** — carousel in `SwiperGallery.vue`
- **Axios** — HTTP client (available, not yet used in views)

### Routing & i18n Integration

All routes are prefixed with a language segment. The router's `beforeEach` guard reads `/:lang` from the URL, validates it (`zh` or `en`), sets the i18n locale accordingly, and redirects bare `/` to `/zh`.

```
/           → redirects to /zh
/:lang/     → Home.vue (wrapped in LangWrapper.vue)
```

`LangWrapper.vue` sits between the router-view and child views to manage language context. Language switching (button in `Header.vue`) updates both the i18n locale and navigates to the same path with the new lang param.

### Component Hierarchy

```
App.vue
├── Header.vue          # Fixed sticky nav; mobile hamburger; language toggle
└── router-view
    └── LangWrapper.vue
        └── Home.vue    # Main landing page with all content sections
```

`Home.vue` uses `IntersectionObserver` for scroll-triggered `fadeInUpSmooth` animations on sections.

### Translations

Located in `src/i18n/`:
- `zh-TW.json` — Traditional Chinese
- `en.json` — English

The i18n instance is configured in `src/i18n/index.js` and registered globally in `main.js`. Use `t('key.path')` in templates.

### Styling Conventions

- Gold gradient palette: `#BFA76A`, `#E3D3A3`, `#A58A4A` on dark/video backgrounds
- Smooth scroll enabled globally via `main.css`
- Tailwind `fadeInUpSmooth` keyframes defined in `tailwind.config.js`
- `SwiperGallery.vue` uses a fixed 680px width with 16:9 aspect ratio (56.25% padding-top)

### Notable Files

| File | Purpose |
|------|---------|
| `src/router/index.js` | Route definitions and language guard |
| `src/i18n/index.js` | i18n setup with locale detection |
| `src/views/Home.vue` | Full landing page — all content sections |
| `src/components/Header.vue` | Navigation with language switcher |
| `src/components/SwiperGallery.vue` | Auto-play carousel with slide animations |
| `src/components/ShopifyProducts.vue` | Shopify integration stub (not yet used) |
| `tailwind.config.js` | Custom fonts and animation definitions |
