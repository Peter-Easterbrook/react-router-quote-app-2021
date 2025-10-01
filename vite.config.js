import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Adjust to your backend port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'build',
  },
  define: {
    'process.env': {},
  },
});
