import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/DashboardGudang/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
})
