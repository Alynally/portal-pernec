import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.js',
        'resources/css/app.css'
      ],
      refresh: [
        'resources/views/**',
        'routes/**'
      ],
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      'ziggy': fileURLToPath(new URL('./vendor/tightenco/ziggy/dist', import.meta.url)),
    },
    extensions: ['.js', '.vue', '.json']
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@inertiajs/vue3',
      '@vueuse/motion',
      'aos'
    ],
    exclude: ['vue-demi']
  },
  build: {
    chunkSizeWarningLimit: 1600,
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          inertia: ['@inertiajs/vue3'],
          animation: ['@vueuse/motion', 'aos'],
          vendor: ['axios', 'lodash']
        }
      }
    }
  },
  server: {
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    },
    watch: {
      usePolling: true,
    }
  }
})