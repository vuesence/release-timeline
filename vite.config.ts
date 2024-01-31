import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import postcssNesting from "postcss-nesting";

const name = "index";

export default defineConfig({
  base: "/release-timeline/",
  plugins: [
    vue(),
    dts({
      include: "src",
    }),
  ],
  // publicDir: false,
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
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
  // define: {
  //   __DEV__: JSON.stringify(!process.env.prod),
  // },
});
