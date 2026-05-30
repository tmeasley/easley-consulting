import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://easley.consulting',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
