import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" (like _template.md) are ignored, so they can hold examples.
const teardowns = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/teardowns' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

const notes = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { teardowns, notes };
