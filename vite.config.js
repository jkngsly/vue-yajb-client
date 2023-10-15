import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// Alias paths '@'
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

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: getPaths([
        "", // @ (./src)
        "assets", // @assets (./src/assets)
        "components",
        "config",
        "directives",
        "router",
        "services",
        "store",
        "views",
      ]),
    },
  });
};
