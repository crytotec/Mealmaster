import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure Vite serves from root
  build: {
    outDir: 'dist',
  },
});
