import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const url = req.url?.split('?')[0].split('#')[0];
          const cleanRoutes: Record<string, string> = {
            '/lp-family-law': '/lp-family-law/index.html',
            '/lp-family-law-thank-you': '/lp-family-law-thank-you/index.html',
          };
          if (url && cleanRoutes[url]) {
            req.url = req.url!.replace(url, cleanRoutes[url]);
          }
          next();
        });
      },
    },
  ],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'thank-you': './thank-you.html',
        'lp-family-law': './lp-family-law/index.html',
        'lp-family-law-thank-you': './lp-family-law-thank-you/index.html',
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
