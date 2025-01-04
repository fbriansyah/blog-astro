// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  site: 'https://your-domain.com', // Replace with your actual domain
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
