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
		cssCodeSplit: false,
    rollupOptions: {
      input: {
        "": path.resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "assets/bundle.js",
				assetFileNames: "assets/[name]-[hash].css", // CSS と JS のファイル名パターンを設定
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});