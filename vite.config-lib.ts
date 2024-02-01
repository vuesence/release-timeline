import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const name = "index";

export default defineConfig({
  // base: "/release-timeline/",
  plugins: [
    vue(),
  ],
  // publicDir: true,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name,
      fileName: format => `${name}.${format}.${format === "es" ? "m" : ""}js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
