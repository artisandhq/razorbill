import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
      manifest: {
        name: "React-vite-app",
        short_name: "react-vite-app",
        description: "I am a simple vite app",
        icons: [{
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'favicon'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'favicon'
        },
        {
          src: '/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'apple touch icon',
        },
        {
          src: '/maskable_icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        }
        ],
        theme_color: '#171717',
        background_color: '#f0e7db',
        display: "standalone",
        scope: '/',
        start_url: "/",
        orientation: 'portrait'
      }
    }),],
})
