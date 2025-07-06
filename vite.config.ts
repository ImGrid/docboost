import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ===== BUILD OPTIMIZATION FOR LANDING PAGE =====
  build: {
    // ✅ Modern browsers target (2025 baseline)
    target: 'baseline-widely-available',
    
    // ✅ Output directory (Netlify default)
    outDir: 'dist',
    
    // ✅ No sourcemaps for production landing page
    sourcemap: false,
    
    // ✅ Minification with esbuild (fastest)
    minify: 'esbuild',
    
    // ✅ Optimize CSS
    cssMinify: true,
    
    // ✅ Asset optimization
    assetsInlineLimit: 4096, // Inline small assets < 4KB
    
    // ✅ Rollup optimizations for landing page
    rollupOptions: {
      output: {
        // Better caching with hashed filenames
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor libraries separate chunk
          vendor: ['react', 'react-dom'],
          // Icons separate chunk  
          icons: ['lucide-react']
        }
      }
    }
  },
  
  // ===== DEVELOPMENT OPTIMIZATION =====
  server: {
    // ✅ Faster HMR
    hmr: true,
    // ✅ Open browser automatically
    open: true,
    // ✅ Port configuration
    port: 3000
  },
  
  // ===== PREVIEW OPTIMIZATION =====
  preview: {
    port: 4173,
    open: true
  },
  
  // ===== DEPENDENCY OPTIMIZATION =====
  optimizeDeps: {
    // ✅ Pre-bundle heavy dependencies
    include: [
      'react',
      'react-dom',
      'lucide-react'
    ]
  }
})