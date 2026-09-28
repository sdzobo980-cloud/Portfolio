import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
// // NOT NEEDED: Only if compiling markdown (.mdx) files as components
// import mdx from "@mdx-js/rollup";
// import remarkFrontmatter from "remark-frontmatter";
// import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export default defineConfig(() => {
  return {
    plugins: [
      // // NOT NEEDED: Stripping out MDX markdown parsing middleware
      // {
      //   enforce: "pre" as const,
      //   ...mdx({
      //     remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      //     providerImportSource: "@mdx-js/react",
      //   }),
      // },
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // // NOT NEEDED: Standard dev servers handle HMR perfectly out of the box
    // server: {
    //   hmr: process.env.DISABLE_HMR !== "true",
    //   watch: process.env.DISABLE_HMR === "true" ? null : {},
    // },
  };
});
