import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Sklep Internetowy",
        short_name: "Sklep",
        description: "Prosty sklep internetowy",
        theme_color: "#22c55e",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        runtimeCaching: [
          // Cache API produktów
          {
            urlPattern: /^https:\/\/dummyjson\.com\/products.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "products-cache",
              expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
            },
          },
          // Cache miniaturki obrazków
          {
            urlPattern: /^https:\/\/i\.dummyjson\.com\/.*$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 }, // 7 dni
            },
          },
        ],
      },
    }),
  ],
});