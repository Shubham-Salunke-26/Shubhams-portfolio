import { defineCollection, z } from 'astro:content';

const blogsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        author: z.string().optional().default('Shubham Salunke'),
        image: z.string().optional(),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
    blogs: blogsCollection,
};
