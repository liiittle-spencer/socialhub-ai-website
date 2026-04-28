import { defineCollection, z } from 'astro:content';

const locale = z.enum(['en', 'zh']).default('en');

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		locale,
		author: z.string().default('Socialhub.AI Team'),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		coverImage: z.string().url().optional(),
		featured: z.boolean().default(false),
		relatedProducts: z.array(z.string()).default([]),
		ctaVariant: z.enum(['demo', 'platform', 'newsletter']).default('demo'),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

const customers = defineCollection({
	type: 'content',
	schema: z.object({
		customerName: z.string(),
		title: z.string(),
		summary: z.string(),
		industry: z.string(),
		region: z.string().default('Global'),
		logoText: z.string().optional(),
		logoUrl: z.string().url().optional(),
		coverImage: z.string().url().optional(),
		featured: z.boolean().default(false),
		productsUsed: z.array(z.string()).default([]),
		results: z
			.array(
				z.object({
					value: z.string(),
					label: z.string(),
				}),
			)
			.default([]),
		challenge: z.string().optional(),
		solution: z.string().optional(),
		testimonial: z
			.object({
				quote: z.string().optional(),
				name: z.string().optional(),
				title: z.string().optional(),
			})
			.optional(),
		sections: z
			.array(
				z.object({
					heading: z.string(),
					body: z.string(),
				}),
			)
			.default([]),
		locale,
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

const industries = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		industry: z.string(),
		description: z.string(),
		primaryUseCases: z.array(z.string()).default([]),
		relatedProducts: z.array(z.string()).default([]),
		locale,
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

export const collections = { blog, customers, industries };
