import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    rollupOptions:{
      output:{
        assetFileNames: (assetInfo) => {
          if (assetInfo.names.endsWith(".glb")) {
            return "Models/[name][extname]"
          }
          return "assets/[name]-[hash][extname]"
        }
      }
    }
  }
})
