import { defineCollection, z } from 'astro:content';

// Define languages
export const languages = {
  en: 'English',
  id: 'Bahasa Indonesia'
};

// Define common schemas
const blogSchema = z.object({
  title: z.string(),
  publishDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()),
  language: z.enum(['en', 'id']).default('en')
});

const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  demoUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  technologies: z.array(z.string()),
  featured: z.boolean().default(false),
  completionDate: z.date(),
  language: z.enum(['en', 'id']).default('en')
});

// Define collections
const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: portfolioSchema
});

export const collections = {
  'blog': blogCollection,
  'portfolio': portfolioCollection,
};
