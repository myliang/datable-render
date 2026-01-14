import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: false,
    lib: {
      name: 'datable-render',
      entry: 'src/index.ts',
      fileName: 'datable-render',
    },
  },
});
