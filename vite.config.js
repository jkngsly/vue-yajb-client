import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const getPaths = (paths) => {
  let a = [];
  paths.forEach((p) => {
    a.push({
      find: "@" + p,
      replacement: fileURLToPath(
        new URL("./src" + (p.length ? "/" + p : ""), import.meta.url)
      ),
    });
  });

  return a;
};

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: getPaths([
      "",
      "assets",
      "components",
      "config",
      "directives",
      "services",
      "store",
      "views",
    ]),
  },
});
