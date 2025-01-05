import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string())
  })
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    demoUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    completionDate: z.date()
  })
});

export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
};
