import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
    open: "/",
    port: 3000,
  },

  devToolbar: {
    enabled: false
  },

  integrations: [preact({
    include: ['./src/components/navigation/**/*.tsx'],
  })],
});
