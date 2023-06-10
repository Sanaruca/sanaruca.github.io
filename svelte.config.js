import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import path, { dirname } from "node:path";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const articleFiles = readdirSync(path.join(__dirname, "/src/articles"))

const prerenderEntries = articleFiles.map(file => {
  const article = file.replace(".svx", "")
  return `/blog/${article}`
})

console.log(prerenderEntries);



/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  preprocess: [vitePreprocess(), mdsvex({ extension: ".svx" })],
  kit: {
    adapter: adapter(),
    alias: {
      "@components/*": "./src/components/*",
    },
    prerender: {
      entries: [ "*",...prerenderEntries]
    }
  },
};

export default config;
