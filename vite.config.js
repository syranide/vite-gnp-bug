import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const outputPath = resolve(import.meta.dirname, 'out');

export default defineConfig({
  root: import.meta.dirname,
  build: {
    outDir: outputPath,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': resolve(import.meta.dirname, 'index.js'),
      },
      output: {
        format: 'iife',
        entryFileNames: 'output.js',
      },
    },
  },
});
