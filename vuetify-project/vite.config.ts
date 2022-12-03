// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { VitePluginFonts } from 'vite-plugin-fonts' // 追加

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/vuetify-project/' : './',
  base: process.env.NODE_ENV === 'production' ? './' : './',
  plugins: [
    vue(),
    VitePluginFonts({
      google: {
        families: [
          'Zen Old Mincho' // ここに導入したいフォント名を入れる
        ],
      }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    host: true,
    port: 3000,
  },
})
