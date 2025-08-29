import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // automatyczna aktualizacja SW
      manifest: {
        name: 'My React PWA',
        short_name: 'PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        icons: [
          { src: 'android-launchericon-192-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'android-launchericon-512-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});