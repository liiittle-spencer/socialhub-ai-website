import { collection, config, fields } from '@keystatic/core';

const industries = [
	{ label: 'Fashion & Apparel', value: 'fashion-apparel' },
	{ label: 'Supermarket & Grocery', value: 'supermarket-grocery' },
	{ label: 'Food & Beverage', value: 'food-beverage' },
	{ label: 'Hospitality', value: 'hospitality' },
	{ label: 'Real Estate', value: 'real-estate' },
	{ label: 'Electronics', value: 'electronics' },
];

const products = [
	{ label: 'Customer Intelligence Platform', value: 'customer-intelligence-platform' },
	{ label: 'Real-time CDP', value: 'real-time-cdp' },
	{ label: 'Loyalty Management', value: 'loyalty-management' },
	{ label: 'Marketing Automation', value: 'marketing-automation' },
	{ label: 'AI Analytics', value: 'ai-analytics' },
];

const contentBody = fields.mdx({
	label: 'Body',
	description: 'Main article or story content. Use structured fields above for cards, filters, and SEO.',
});

export default config({
	storage: {
		kind: 'local',
	},
	ui: {
		brand: {
			name: 'Socialhub.AI Website',
		},
		navigation: {
			Content: ['blog', 'customers', 'industries'],
		},
	},
	collections: {
		blog: collection({
			label: 'Blog Posts',
			path: 'src/content/blog/en/*',
			slugField: 'title',
			entryLayout: 'content',
			format: { contentField: 'content' },
			columns: ['title', 'category', 'publishDate'],
			schema: {
				title: fields.text({
					label: 'Title',
					validation: { isRequired: true },
				}),
				description: fields.text({
					label: 'Description',
					multiline: true,
					validation: { isRequired: true },
				}),
				publishDate: fields.date({
					label: 'Publish date',
					defaultValue: { kind: 'today' },
					validation: { isRequired: true },
				}),
				updatedDate: fields.date({ label: 'Updated date' }),
				locale: fields.select({
					label: 'Locale',
					defaultValue: 'en',
					options: [
						{ label: 'English', value: 'en' },
						{ label: 'Chinese', value: 'zh' },
					],
				}),
				author: fields.text({
					label: 'Author',
					defaultValue: 'Socialhub.AI Team',
				}),
				category: fields.text({
					label: 'Category',
					defaultValue: 'Customer Intelligence',
				}),
				tags: fields.array(fields.text({ label: 'Tag' }), {
					label: 'Tags',
				}),
				coverImage: fields.url({ label: 'Cover image URL' }),
				featured: fields.checkbox({
					label: 'Featured',
					defaultValue: false,
				}),
				relatedProducts: fields.multiselect({
					label: 'Related products',
					options: products,
				}),
				ctaVariant: fields.select({
					label: 'CTA variant',
					defaultValue: 'demo',
					options: [
						{ label: 'Book demo', value: 'demo' },
						{ label: 'Explore platform', value: 'platform' },
						{ label: 'Newsletter', value: 'newsletter' },
					],
				}),
				seoTitle: fields.text({ label: 'SEO title' }),
				seoDescription: fields.text({
					label: 'SEO description',
					multiline: true,
				}),
				content: contentBody,
			},
		}),
		customers: collection({
			label: 'Customer Stories',
			path: 'src/content/customers/en/*',
			slugField: 'customerName',
			entryLayout: 'content',
			format: { contentField: 'content' },
			columns: ['customerName', 'industry', 'featured'],
			schema: {
				customerName: fields.text({
					label: 'Customer name',
					validation: { isRequired: true },
				}),
				title: fields.text({
					label: 'Story title',
					validation: { isRequired: true },
				}),
				summary: fields.text({
					label: 'Summary',
					multiline: true,
					validation: { isRequired: true },
				}),
				industry: fields.select({
					label: 'Industry',
					defaultValue: 'fashion-apparel',
					options: industries,
				}),
				region: fields.text({
					label: 'Region',
					defaultValue: 'Global',
				}),
				logoText: fields.text({
					label: 'Logo text',
					description: 'Used when no logo file is available.',
				}),
				logoUrl: fields.url({ label: 'Logo URL' }),
				coverImage: fields.url({ label: 'Cover image URL' }),
				featured: fields.checkbox({
					label: 'Featured',
					defaultValue: true,
				}),
				productsUsed: fields.multiselect({
					label: 'Products used',
					options: products,
				}),
				results: fields.array(
					fields.object({
						value: fields.text({ label: 'Value' }),
						label: fields.text({ label: 'Label' }),
					}),
					{ label: 'Impact metrics' },
				),
				challenge: fields.text({
					label: 'Challenge',
					multiline: true,
				}),
				solution: fields.text({
					label: 'Solution',
					multiline: true,
				}),
				testimonial: fields.object(
					{
						quote: fields.text({ label: 'Quote', multiline: true }),
						name: fields.text({ label: 'Name' }),
						title: fields.text({ label: 'Title' }),
					},
					{ label: 'Testimonial' },
				),
				sections: fields.array(
					fields.object({
						heading: fields.text({ label: 'Heading' }),
						body: fields.text({ label: 'Body', multiline: true }),
					}),
					{ label: 'Story sections' },
				),
				seoTitle: fields.text({ label: 'SEO title' }),
				seoDescription: fields.text({
					label: 'SEO description',
					multiline: true,
				}),
				content: contentBody,
			},
		}),
		industries: collection({
			label: 'Industry Pages',
			path: 'src/content/industries/en/*',
			slugField: 'title',
			entryLayout: 'content',
			format: { contentField: 'content' },
			columns: ['title', 'industry'],
			schema: {
				title: fields.text({
					label: 'Title',
					validation: { isRequired: true },
				}),
				industry: fields.select({
					label: 'Industry',
					defaultValue: 'fashion-apparel',
					options: industries,
				}),
				description: fields.text({
					label: 'Description',
					multiline: true,
					validation: { isRequired: true },
				}),
				primaryUseCases: fields.array(fields.text({ label: 'Use case' }), {
					label: 'Primary use cases',
				}),
				relatedProducts: fields.multiselect({
					label: 'Related products',
					options: products,
				}),
				seoTitle: fields.text({ label: 'SEO title' }),
				seoDescription: fields.text({
					label: 'SEO description',
					multiline: true,
				}),
				content: contentBody,
			},
		}),
	},
});
