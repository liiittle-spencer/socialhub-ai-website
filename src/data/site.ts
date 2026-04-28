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
		{ label: '中文', code: 'zh', href: '/zh/' },
	],
};

export const navigation = [
	{ label: 'Platform', href: '/platform/' },
	{ label: 'Solutions', href: '/solutions/' },
	{ label: 'Customers', href: '/customers/' },
	{ label: 'Blog', href: '/blog/' },
	{ label: 'Company', href: '/about/' },
];

export const platformModules = [
	{
		title: 'Customer Intelligence Platform',
		description:
			'Unify customer profiles, transactions, loyalty behavior, and engagement signals into one intelligence layer.',
		href: '/platform/',
		tag: 'Platform',
	},
	{
		title: 'Real-time CDP',
		description:
			'Create actionable segments and customer 360 views that update as new signals arrive.',
		href: '/platform/real-time-cdp/',
		tag: 'Data',
	},
	{
		title: 'Loyalty Management',
		description:
			'Design tiering, rewards, points, and member journeys around each customer relationship.',
		href: '/platform/loyalty-management/',
		tag: 'Retention',
	},
	{
		title: 'Marketing Automation',
		description:
			'Activate campaigns across lifecycle moments with AI-assisted recommendations and orchestration.',
		href: '/platform/marketing-automation/',
		tag: 'Growth',
	},
];

export const industries = [
	{
		title: 'Fashion & Apparel',
		href: '/solutions/fashion/',
		description: 'Connect online, offline, membership, and merchandising signals for sharper growth decisions.',
	},
	{
		title: 'Supermarket & Grocery',
		href: '/solutions/supermarket-grocery/',
		description: 'Understand household behavior, basket patterns, promotions, and frequency drivers.',
	},
	{
		title: 'Food & Beverage',
		href: '/solutions/food-beverage/',
		description: 'Turn ordering, loyalty, and visit behavior into personalized journeys and repeat visits.',
	},
	{
		title: 'Hospitality',
		href: '/solutions/hospitality/',
		description: 'Unify guest preferences and engagement signals across properties, channels, and services.',
	},
];

export const proofLogos = ['Adidas', 'The North Face', 'Timberland', 'DeFacto'];

export const valueCards = [
	{
		kicker: 'Unify',
		title: 'Every customer signal',
		description:
			'Bring profile, purchase, loyalty, campaign, and service data into a single customer foundation.',
	},
	{
		kicker: 'Understand',
		title: 'Insights in real time',
		description:
			'Surface segments, trends, churn risks, and revenue opportunities without waiting on static reports.',
	},
	{
		kicker: 'Activate',
		title: 'Personalized growth',
		description:
			'Trigger targeted campaigns, loyalty actions, and next-best recommendations across channels.',
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
			{ label: 'Contact', href: '/contact/' },
		],
	},
];
