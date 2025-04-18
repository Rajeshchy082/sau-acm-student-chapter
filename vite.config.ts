import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY === 'true' ? '/' : '/sau-acm-student-chapter/',
  server: {
    port: 5173,
  },
});