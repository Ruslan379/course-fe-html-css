import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/hw-js-vite/', //! 👈 ВАЖЛИВО: вкажіть базу
  root: 'src',
  build: {
    rollupOptions: {
      //! ❌ Це шукає тільки HTML-файли верхнього рівня src/, і не включає HTML-файли нижнього рівня
      // input: glob.sync('./src/*.html'),
      //! ✅ Це шукає ВСІ HTML-файли, включаючи HTML-файли нижнього рівня
      input: glob.sync('./src/**/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
