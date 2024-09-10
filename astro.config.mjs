import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import lit from "@astrojs/lit";

import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  server: {
    open: "/",
    port: 3000,
  },

  devToolbar: {
    enabled: true
  },

  integrations: [preact({
    include: ['./src/components/navigation/**/*.tsx'],
  }), lit(), vue(), svelte()],
});