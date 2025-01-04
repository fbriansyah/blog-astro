// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  collections: {
    blog: {
      type: 'content',
      schema: {
        title: 'string',
        publishDate: 'date',
        description: 'string',
        author: 'string',
        image: 'string?',
        tags: 'string[]'
      }
    }
  }
});
