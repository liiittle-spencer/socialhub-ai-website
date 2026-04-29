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
	{ label: 'Product', href: '/platform/' },
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
		title: 'Hyper-personalized Loyalty',
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
	{ label: 'adidas', src: '/assets/brand-logos/Adidas_Logo_Alternative_0.svg' },
	{ label: 'VANS', src: '/assets/brand-logos/Vans_idPRQzpTzD_0.svg' },
	{ label: 'TNF', src: '/assets/brand-logos/The_North_Face®_idag8zcHyV_0.svg' },
	{ label: 'Haagen-Dazs', src: '/assets/brand-logos/haagen-dazs.svg' },
	{ label: 'MCD', src: "/assets/brand-logos/McDonald's_Symbol_0.svg" },
	{ label: 'Swatch', src: '/assets/brand-logos/Swatch_idD4ahNHn1_1.svg' },
	{ label: 'ASUS' },
	{ label: 'Microsoft', src: '/assets/brand-logos/Microsoft_Logo_0.svg' },
	{ label: 'SHK' },
	{ label: 'HL' },
	{ label: 'ABBOTT', src: '/assets/brand-logos/Abbott_Logo_0.svg' },
	{ label: 'GM', src: '/assets/brand-logos/General_Motors_Logo_0.svg' },
	{ label: 'DeFacto' },
	{ label: 'kipling', src: '/assets/brand-logos/Kipling_iddh8ZBn90_1.svg' },
	{ label: 'Dickies', src: '/assets/brand-logos/Dickies_idyep8kurc_1.svg' },
	{ label: 'Timberland', src: '/assets/brand-logos/Timberland_idi5E8k4YG_0.svg' },
	{ label: 'BIODERMA' },
	{ label: 'P&G' },
];

export const valueCards = [
	{
		kicker: 'Unify',
		title: 'AI-ready customer data',
		description:
			'Connect POS, ecommerce, CRM, loyalty, app, service, and third-party data into one AI-interpretable customer foundation.',
	},
	{
		kicker: 'Understand',
		title: 'Business clarity in real time',
		description:
			'Standardize revenue, conversion, retention, CAC, LTV, AOV, and other KPIs so leaders see one version of truth.',
	},
	{
		kicker: 'Activate',
		title: 'Multi-agent activation',
		description:
			'Let AI plan audiences, recommend actions, generate campaign content, and trigger loyalty workflows across channels.',
	},
];

export const footerGroups = [
	{
		title: 'Platform',
		links: [
			{ label: 'Overview', href: '/platform/' },
			{ label: 'Real-time CDP', href: '/platform/real-time-cdp/' },
			{ label: 'Loyalty Management', href: '/platform/loyalty-management/' },
			{ label: 'Marketing Automation', href: '/platform/marketing-automation/' },
		],
	},
	{
		title: 'Solutions',
		links: [
			{ label: 'Fashion & Apparel', href: '/solutions/fashion/' },
			{ label: 'Food & Beverage', href: '/solutions/food-beverage/' },
			{ label: 'Supermarket & Grocery', href: '/solutions/supermarket-grocery/' },
			{ label: 'Hospitality', href: '/solutions/hospitality/' },
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
