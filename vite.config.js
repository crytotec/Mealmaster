import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // This is the default and can be omitted
  build: {
    outDir: 'dist',  // Output directory for the build
  },
});