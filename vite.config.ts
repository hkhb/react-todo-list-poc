import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/react-todo-list-poc/',
  plugins: [react()],
  publicDir: path.resolve(__dirname, "public"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    copyPublicDir: true,
    cssCodeSplit: true, // CSS を分割して出力
    rollupOptions: {
      input: {
        "": path.resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "assets/bundle.js",
        assetFileNames: "assets/[hash].css", // 画像などの静的アセット
      },
    },
  },
});