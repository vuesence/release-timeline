import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssNesting from "postcss-nesting";

// const name = "index";

export default defineConfig({
  base: "/release-timeline/",
  plugins: [
    vue(),
  ],
  // publicDir: false,
  build: {
    target: "esnext",
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
