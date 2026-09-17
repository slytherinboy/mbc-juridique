import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import { defineConfig } from "vite";

export default defineConfig({
  root: "github-pages",
  publicDir: "../public",
  // Relative assets work on both GitHub Pages and a Cloudflare domain.
  base: "./",
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    outDir: "../dist-pages",
    emptyOutDir: true,
  },
});
