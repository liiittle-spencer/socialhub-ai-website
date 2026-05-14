export const siteConfig = {
	name: 'Socialhub.AI',
	url: 'https://www.socialhub.ai',
	description:
		'AI-native customer intelligence platform for consumer brands across retail, F&B, grocery, and hospitality.',
	email: 'business@socialhub.ai',
	cta: {
		label: 'Book Demo',
		href: '/contact',
	},
	contact: {
		formAction: 'mailto:business@socialhub.ai',
		emailTo: 'business@socialhub.ai',
	},
	languages: [
		{ label: 'English', code: 'en', href: '/' },
		{ label: 'Simplified Chinese', code: 'zh', href: '/zh/' },
		{ label: 'Traditional Chinese', code: 'zh-hant', href: '/zh-hant/' },
	],
};

export const navigation = [
	{ label: 'Product', href: '/product/' },
	{ label: 'Industry', href: '/solutions/' },
	{ label: 'Client', href: '/customers/' },
	{ label: 'Blog', href: '/blog/' },
	{ label: 'Company', href: '/about/' },
];

export const platformModules = [
	{
		title: 'AI Advisor',
		description:
			'Guide opportunity research, go-to-market planning, business growth, and loyalty strategy with one strategic intelligence layer.',
		href: '/platform/',
		tag: 'Strategy',
	},
	{
		title: 'AI Data Scientist',
		description:
			'Unify enterprise data, standardize KPIs, and turn fragmented metrics into real-time, AI-interpreted business intelligence.',
		href: '/platform/real-time-cdp/',
		tag: 'Data',
	},
	{
		title: 'AI Marketing Master',
		description:
			'Generate audiences, marketing canvases, content templates, and campaign workflows from customer intelligence.',
		href: '/platform/marketing-automation/',
		tag: 'Activation',
	},
	{
		title: 'Hyper-Personalized Loyalty',
		description:
			'Analyze member behavior and trigger real-time, multi-channel loyalty actions based on preferences and value signals.',
		href: '/platform/loyalty-management/',
		tag: 'Loyalty',
	},
];

export const industries = [
	{
		title: 'Fashion & Apparel',
		href: '/solutions/fashion/',
		description: 'Unify store, ecommerce, campaign, and loyalty data for brands with complex customer journeys.',
	},
	{
		title: 'Supermarket & Grocery',
		href: '/solutions/supermarket-grocery/',
		description: 'Support massive product data, high concurrency, real-time pricing, and scalable CRM operations.',
	},
	{
		title: 'Food & Beverage',
		href: '/solutions/food-beverage/',
		description: 'Connect ordering, WhatsApp service, membership, and omnichannel journeys for repeat visits.',
	},
	{
		title: 'Hospitality',
		href: '/solutions/hospitality/',
		description: 'Standardize guest identity, service signals, and member engagement across locations and channels.',
	},
];

export const proofLogos = [
	{ label: 'adidas', src: '/assets/brand-logos/adidas.svg' },
	{ label: 'VANS', src: '/assets/brand-logos/vans.svg' },
	{ label: 'TNF', src: '/assets/brand-logos/tnf.svg' },
	{ label: 'Haagen-Dazs', src: '/assets/brand-logos/haagen-dazs.svg', height: 62, maxWidth: 148 },
	{ label: 'MCD', src: '/assets/brand-logos/mcd.svg' },
	{ label: 'Swatch', src: '/assets/brand-logos/swatch.svg' },
	{ label: 'YATA', src: '/assets/brand-logos/yata.png', height: 48, maxWidth: 72 },
	{ label: 'ASUS', src: '/assets/brand-logos/ASUS.svg', height: 34, maxWidth: 180 },
	{ label: 'Microsoft', src: '/assets/brand-logos/microsoft.svg' },
	{ label: 'SHK', src: '/assets/brand-logos/shk.svg' },
	{ label: 'HL', src: '/assets/brand-logos/hl.svg' },
	{ label: 'HLA', src: '/assets/brand-logos/HLA.png' },
	{ label: 'ABBOTT', src: '/assets/brand-logos/abbott.svg' },
	{ label: 'GM', src: '/assets/brand-logos/gm.svg' },
	{ label: 'DeFacto', src: '/assets/brand-logos/defacto.svg' },
	{ label: 'kipling', src: '/assets/brand-logos/kipling.svg' },
	{ label: 'Dickies', src: '/assets/brand-logos/dickies.svg' },
	{ label: 'Timberland', src: '/assets/brand-logos/timberland.svg' },
	{ label: 'BIODERMA', src: '/assets/brand-logos/bioderma.svg' },
	{ label: 'P&G', src: '/assets/brand-logos/pg.svg' },
];

export const valueCards = [
	{
		kicker: 'Unify',
		title: 'AI-Ready Customer Data',
		description:
			'Connect POS, ecommerce, CRM, loyalty, app, service, and third-party data into one AI-interpretable customer foundation.',
	},
	{
		kicker: 'Understand',
		title: 'Business Clarity In Real Time',
		description:
			'Standardize revenue, conversion, retention, CAC, LTV, AOV, and other KPIs so leaders see one version of truth.',
	},
	{
		kicker: 'Activate',
		title: 'Multi-Agent Activation',
		description:
			'Let AI plan audiences, recommend actions, generate campaign content, and trigger loyalty workflows across channels.',
	},
];

export const footerGroups = [
	{
		title: 'Product',
		links: [
			{ label: 'Product Overview', href: '/product/' },
			{ label: 'Socialhub.AI', href: '/product/socialhub-ai/' },
			{ label: 'Real-Time CDP', href: '/product/socialhub-ai/real-time-cdp/' },
			{ label: 'Loyalty CRM', href: '/product/socialhub-ai/loyalty-crm/' },
			{ label: 'Marketing Automation', href: '/product/socialhub-ai/marketing-automation/' },
		],
	},
	{
		title: 'Solutions',
		links: [
			{ label: 'Fashion & Apparel', href: '/solutions/fashion/' },
			{ label: 'Food & Beverage', href: '/solutions/food-beverage/' },
			{ label: 'Supermarket & Grocery', href: '/solutions/supermarket-grocery/' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'Customers', href: '/customers/' },
			{ label: 'Blog', href: '/blog/' },
			{ label: 'About', href: '/about/' },
		],
	},
];

export const navigationMenus = {
	Industry: {
		overview: {
			title: 'Industry Solutions',
			description: 'See how Socialhub.AI adapts the customer growth loop for consumer verticals.',
			href: '/solutions/',
		},
		links: [
			{
				title: 'Fashion & Apparel',
				description: 'Connect member identity, loyalty, commerce data, and campaign moments.',
				href: '/solutions/fashion/',
			},
			{
				title: 'Supermarket & Grocery',
				description: 'Support high-frequency transactions, points, coupons, and store-level activation.',
				href: '/solutions/supermarket-grocery/',
			},
			{
				title: 'Food & Beverage',
				description: 'Turn ordering, vouchers, stores, and service signals into repeat visits.',
				href: '/solutions/food-beverage/',
			},
		],
		cta: {
			title: 'Built For Repeat Purchase',
			description: 'Start with the industries where customer timing, membership, and promotion ROI matter most.',
			href: '/solutions/',
			label: 'View Industries',
		},
	},
	Client: {
		overview: {
			title: 'Customer Stories',
			description: 'Review examples from brands building intelligence-led growth.',
			href: '/customers/',
		},
		links: [
			{
				title: 'Fashion And Apparel',
				description: 'Member identity, tier value, segmentation, and campaign activation.',
				href: '/customers/',
			},
			{
				title: 'Grocery And Retail',
				description: 'Points, coupons, inventory-aware activation, and lower-cost engagement.',
				href: '/customers/',
			},
			{
				title: 'Food And Beverage',
				description: 'Voucher operations, omnichannel membership, and repeat-visit journeys.',
				href: '/customers/',
			},
		],
		cta: {
			title: 'Proof Before Scale',
			description: 'Use customer stories to understand the patterns before choosing a pilot scenario.',
			href: '/customers/',
			label: 'View Customers',
		},
	},
	Blog: {
		overview: {
			title: 'Insights',
			description: 'Read practical thinking on customer data, loyalty, and AI-native growth operations.',
			href: '/blog/',
		},
		links: [
			{
				title: 'Customer Intelligence',
				description: 'How brands turn customer signals into operating decisions.',
				href: '/blog/customer-intelligence-for-consumer-brands/',
			},
			{
				title: 'Restaurant Customer Data',
				description: 'How F&B teams use data for repeat visits and service context.',
				href: '/blog/restaurant-customer-data/',
			},
			{
				title: 'Loyalty Operating Model',
				description: 'How AI changes loyalty beyond points and tiers.',
				href: '/blog/loyalty-ai-operating-model/',
			},
		],
		cta: {
			title: 'Think In Loops',
			description: 'The blog is where we explain the operating model behind the product pages.',
			href: '/blog/',
			label: 'Read Blog',
		},
	},
	Company: {
		overview: {
			title: 'About Socialhub.AI',
			description: 'Learn how the company builds product-led customer intelligence solutions.',
			href: '/about/',
		},
		links: [
			{
				title: 'Company Overview',
				description: 'Seattle HQ, regional operations, and the Customer Intelligence Platform story.',
				href: '/about/',
			},
			{
				title: 'Contact',
				description: 'Bring one customer growth moment and talk to a product expert.',
				href: '/contact/',
			},
		],
		cta: {
			title: 'Talk To The Team',
			description: 'Share your current stack, customer channels, and first use case.',
			href: '/contact/',
			label: 'Contact Us',
		},
	},
};
