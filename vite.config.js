import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@config",
        replacement: fileURLToPath(new URL("./src/config", import.meta.url)),
      },
      {
        find: "@services",
        replacement: fileURLToPath(new URL("./src/services", import.meta.url)),
      },
      {
        find: "@views",
        replacement: fileURLToPath(new URL("./src/views", import.meta.url)),
      },
    ],
  },
});
