import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/
// so the base path MUST match your repo name exactly (with leading/trailing slash).
// If you deploy to a user/org page (yourname.github.io repo) or a custom domain,
// change base back to '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
