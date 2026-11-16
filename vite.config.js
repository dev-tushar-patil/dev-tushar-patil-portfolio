import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Production builds are served from GitHub Pages at /dev-tushar-patil-portfolio/.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dev-tushar-patil-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}));
