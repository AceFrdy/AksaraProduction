import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Vite config for AksaraProduction
 *
 * Usage notes:
 * - You can set VITE_BASE environment variable to override `base` (e.g. "/AksaraProduction/").
 * - Alternatively set DEPLOY_TARGET=gh-pages when building to auto-use GitHub Pages path.
 *
 * Examples:
 *  VITE_BASE="/AksaraProduction/" npm run build
 *  DEPLOY_TARGET=gh-pages npm run build
 */

const baseFromEnv = process.env.VITE_BASE;

export default defineConfig(({ mode }) => {
  const base =
    baseFromEnv || (process.env.DEPLOY_TARGET === 'gh-pages' ? '/AksaraProduction/' : '/');

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        // gunakan import "@/..." di kode untuk merujuk ke src
        '@': resolve(__dirname, 'src'),
      },
      // optional: resolusi ekstensi
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    optimizeDeps: {
      // sesuai package.json di repo: exclude lucide-react dari optimizeDeps
      exclude: ['lucide-react'],
    },
    server: {
      port: 5173,
      open: true,
      // strictPort: true akan memaksa gagal jika port dipakai; false akan coba port lain
      strictPort: false,
    },
    build: {
      outDir: 'dist',
      // aktifkan sourcemap di mode development (opsional)
      sourcemap: mode === 'development',
      rollupOptions: {
        output: {
          // pisahkan vendor ke chunk per-package (optional, bisa dihapus jika tidak perlu)
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  };
});