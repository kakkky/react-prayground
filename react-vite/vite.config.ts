/// <reference types="vitest"/>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// vite.config.tsは ts.configを参照するため変更に伴ってこのファイルを編集する必要があるが
// 編集する必要がなくなる
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
