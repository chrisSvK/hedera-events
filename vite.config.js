import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkSectionize from "remark-sectionize";

// `options` are passed to `@mdx-js/mdx`
const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
    remarkSectionize,
  ],
  rehypePlugins: [],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx(options)],
});
