import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// const name = "index";

export default defineConfig({
  base: "/release-timeline/",
  plugins: [
    vue(),
    // vue({ customElement: true }),
  ],
  // publicDir: false,
  build: {
    target: "esnext",
  },
  // css: {
  //   postcss: {
  //     plugins: [postcssNesting],
  //   },
  // },
});
