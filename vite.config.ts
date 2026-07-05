import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // Ensure a single React instance (fixes "Invalid hook call" from
    // pre-bundled deps such as @lottiefiles/dotlottie-react).
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@lottiefiles/dotlottie-react'],
  },
  server: {
    port: 3000,
    host: true,
  },
});
