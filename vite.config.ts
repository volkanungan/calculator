/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/calculator/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setup-tests.ts',
    restoreMocks: true,
  },
});
