import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
      '@root': fileURLToPath(new URL(resolve(__dirname), import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@static': fileURLToPath(new URL('./src/constants', import.meta.url)),
    },
  },
});
