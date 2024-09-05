import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    open: "/",
    port: 3000,
  },
  devToolbar: {
    enabled: false
  },
});
