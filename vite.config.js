
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'CertificateGenerator',
      fileName: (format) => 'certificate_generator.' + format + '.js',
       formats: ['es', 'umd'] // Output both ESM and UMD formats
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  optimizeDeps: {
    entries: []  
  },
});
  