/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  const base = process.env.VITE_BASE_URL || '/'
  const config = {
    base,
    plugins: [vue()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/setupTests.ts'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }

  return config
})
