import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/react-todo-list-poc/",
  plugins: [react()],
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
      output: {
        entryFileNames: "assets/bundle.js",
      },
    },
  },
});