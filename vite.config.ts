import { sveltekit } from "@sveltejs/kit/vite";

import type { Config as SvelteKitConfig } from "@sveltejs/kit";

const config:   SvelteKitConfig = {
  plugins: [sveltekit()],
};

export default config;
