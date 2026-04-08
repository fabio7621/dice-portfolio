import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/dice-portfolio/',
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
