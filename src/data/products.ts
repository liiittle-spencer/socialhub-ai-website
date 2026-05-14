export const productProofPoints = [
	{ value: '100+', label: 'consumer brands served' },
	{ value: '50+', label: 'enterprise systems and channel integrations' },
	{ value: '25', label: 'countries covered across global operations' },
	{ value: 'SOC 2', label: 'aligned with GDPR / ISO enterprise requirements' },
];

export const activationChannels = ['WhatsApp', 'Instagram', 'Facebook', 'Email', 'Website', 'Live Chat', 'In-App', 'Store / POS'];

export const businessLoop = [
	{
		step: 'Unknown Visitor',
		title: 'A Signal Appears',
		description: 'Someone browses, scans, clicks, buys, asks, or walks into a store. The moment starts before the team sees it.',
		product: 'Real-Time CDP',
	},
	{
		step: 'Known Customer',
		title: 'The Profile Comes Together',
		description: 'Socialhub.AI resolves identity, connects behavior, and turns scattered events into a usable customer view.',
		product: 'Real-Time CDP',
	},
	{
		step: 'Registered Member',
		title: 'The Relationship Becomes Operable',
		description: 'Registration, membership status, consent, tier, points, and benefits give the brand a clear way to act.',
		product: 'Loyalty CRM',
	},
	{
		step: 'Loyalty Value',
		title: 'The Next Reason To Return Is Created',
		description: 'The system recognizes value, risk, eligibility, and timing, then recommends the right member action.',
		product: 'Loyalty CRM',
	},
	{
		step: 'Automated Journey',
		title: 'The Moment Becomes a Journey',
		description: 'Marketing Automation turns the signal into an audience, message, channel, test, and action plan.',
		product: 'Marketing Automation',
	},
	{
		step: 'Repeat Revenue',
		title: 'Every Result Feeds The Loop',
		description: 'Purchases, clicks, redemptions, visits, and service signals return to the profile so the next action improves.',
		product: 'Feedback Loop',
	},
];

export const businessOutcomes = [
	{
		title: 'Move While The Moment Is Alive',
		description: 'Act on live customer signals before a trend, visit, or purchase window disappears.',
	},
	{
		title: 'Spend Less On Wasted Promotions',
		description: 'Use value, intent, and eligibility to avoid giving every customer the same discount.',
	},
	{
		title: 'Grow Repeat Revenue',
		description: 'Connect member value, journeys, and results so teams can see what brings customers back.',
	},
];

export const productRoles = [
	{
		title: 'Real-Time CDP',
		href: '/product/socialhub-ai/real-time-cdp/',
		role: 'Know Who Just Showed Up',
		description: 'Capture signals, resolve identity, enrich profiles, build segments, and trigger the next action.',
	},
	{
		title: 'Loyalty CRM',
		href: '/product/socialhub-ai/loyalty-crm/',
		role: 'Give Members A Reason To Return',
		description: 'Turn registration, tiers, points, benefits, and risk signals into measurable member value.',
	},
	{
		title: 'Marketing Automation',
		href: '/product/socialhub-ai/marketing-automation/',
		role: 'Move Each Customer To The Next Step',
		description: 'Turn events into audiences, messages, channels, tests, and revenue feedback.',
	},
];

export const productMenu = {
	platform: [
		{
			title: 'Socialhub.AI Overview',
			description: 'Start with the full customer growth loop.',
			href: '/product/socialhub-ai/',
		},
	],
	modules: [
		{
			title: 'Real-Time CDP',
			description: 'Make every customer signal usable.',
			href: '/product/socialhub-ai/real-time-cdp/',
		},
		{
			title: 'Loyalty CRM',
			description: 'Turn membership into repeat revenue.',
			href: '/product/socialhub-ai/loyalty-crm/',
		},
		{
			title: 'Marketing Automation',
			description: 'Move customers while the moment is alive.',
			href: '/product/socialhub-ai/marketing-automation/',
		},
	],
	capabilities: [
		{
			title: 'Real-Time Customer Profiles',
			description: 'Resolve identity and behavior into one live view.',
			href: '/product/socialhub-ai/real-time-cdp/',
		},
		{
			title: 'Member Value Loop',
			description: 'Recognize, reward, return, and measure members.',
			href: '/product/socialhub-ai/loyalty-crm/',
		},
		{
			title: 'Journey Orchestration',
			description: 'Turn signals into audiences, messages, and tests.',
			href: '/product/socialhub-ai/marketing-automation/',
		},
		{
			title: 'AI-Native Recommendations',
			description: 'Shorten the path from signal to next action.',
			href: '/product/socialhub-ai/',
		},
		{
			title: 'Reporting And Feedback',
			description: 'Connect results back to profiles and revenue.',
			href: '/product/socialhub-ai/',
		},
	],
};

export const moduleLoops = {
	'real-time-cdp': {
		hero: 'Make Every Customer Signal Usable',
		intro: 'Real-Time CDP is where anonymous behavior becomes a customer profile your teams can act on.',
		scenario:
			'A shopper browses a product, redeems a voucher, or visits a store. Socialhub.AI connects the signal to the right identity and makes it ready for loyalty and marketing action.',
		steps: [
			['Capture', 'Collect behavior, transactions, service signals, and channel events as they happen.'],
			['Resolve', 'Match records across devices, stores, accounts, and systems.'],
			['Understand', 'Add value, intent, lifecycle, preference, and risk context.'],
			['Segment', 'Create audiences that are ready for campaigns, loyalty, and AI recommendations.'],
			['Trigger', 'Send the next signal to Loyalty CRM or Marketing Automation.'],
		],
		focus: [
			['Live identity', 'One customer view across fragmented systems.'],
			['Behavioral context', 'Events become meaning, not just stored data.'],
			['Activation-ready segments', 'Audiences can move into action without exports.'],
		],
		aiSupport: 'AI helps interpret behavior, detect intent, surface risk, and recommend the next segment to act on.',
	},
	'loyalty-crm': {
		hero: 'Turn Membership into Repeat Revenue',
		intro: 'Loyalty CRM is where registered customers become members with value, benefits, and reasons to come back.',
		scenario:
			'A customer registers after a first purchase. Socialhub.AI recognizes their value, assigns the right benefit path, and triggers moments that move them toward another visit.',
		steps: [
			['Register', 'Turn customers into reachable members with identity, consent, and profile context.'],
			['Recognize', 'Understand tier, value, preference, visit pattern, and churn risk.'],
			['Reward', 'Apply points, vouchers, benefits, member pricing, or tier privileges.'],
			['Return', 'Trigger moments like expiry, birthday, upgrade, win-back, and VIP care.'],
			['Revenue', 'Measure repeat purchase, frequency, redemption, and member contribution.'],
		],
		focus: [
			['Member identity', 'Know who the member is across store, app, ecommerce, and service.'],
			['Value logic', 'Use tiers, points, benefits, and eligibility to guide action.'],
			['Retention moments', 'Create timely reasons for members to return.'],
		],
		aiSupport: 'AI helps spot churn risk, unused value, tier movement, and next-best retention actions.',
	},
	'marketing-automation': {
		hero: 'Move Customers While the Moment Is Still Alive',
		intro: 'Marketing Automation is where customer signals become journeys, messages, tests, and measurable results.',
		scenario:
			'A high-intent customer leaves without buying. Socialhub.AI turns that moment into the right audience, offer, message, channel, and feedback loop.',
		steps: [
			['Signal', 'Start from behavior, purchase, membership, service, or lifecycle events.'],
			['Audience', 'Select the customers where action can change the outcome.'],
			['Message', 'Create the offer, copy, and journey logic for that moment.'],
			['Channel', 'Activate through the right owned, private, social, or store channel.'],
			['Test', 'Compare messages, offers, timing, and audiences.'],
			['Feedback', 'Send results back to the customer profile and next decision.'],
		],
		focus: [
			['Journey orchestration', 'Build flows around customer behavior, not campaign calendars.'],
			['AI-assisted content', 'Generate message angles for the audience and channel.'],
			['Revenue feedback', 'Connect conversion, redemption, and revenue back to the profile.'],
		],
		aiSupport: 'AI helps choose audiences, draft messages, recommend channels, test variations, and scale what works.',
	},
};

export const productLines = [
	{
		name: 'Socialhub.AI',
		label: 'One-Stop Solution for Intelligence Marketing',
		description:
			'Connect customer data, Loyalty CRM, and Marketing Automation in one AI-native customer intelligence platform for consumer brands.',
		href: '/product/socialhub-ai/',
		tags: ['Real-Time CDP', 'Loyalty CRM', 'Marketing Automation', 'AI-Native Intelligence'],
		primary: true,
	},
	{
		name: 'MarPro',
		label: 'Be a Business Expert in Day-One',
		description:
			'Help business teams start with structured expertise, sharper recommendations, and faster execution from the first day.',
		href: '/product/marpro/',
		tags: ['Business Expertise', 'Strategy Support', 'Execution Guidance'],
		primary: false,
	},
];

export const socialhubModules = [
	{
		slug: 'real-time-cdp',
		title: 'Real-Time CDP',
		shortTitle: 'Real-Time CDP',
		kicker: 'Socialhub.AI / Real-Time CDP',
		tagline: 'Build a live customer data foundation for every growth decision.',
		description:
			'Unify customer data across systems, resolve identities, and create real-time 360-degree profiles that marketing, CRM, and loyalty teams can act on.',
		href: '/product/socialhub-ai/real-time-cdp/',
		accent: 'Data foundation',
		aiRole: 'AI interprets identities, events, behavior, value, lifecycle stage, risk, and intent so customer data becomes activation-ready intelligence.',
		tags: ['Data Integration', 'Identity Resolution', '360-degree Profile', 'Real-Time Signals', 'Audience Segmentation'],
		heroBullets: [
			'Connect customer signals across POS, CRM, ecommerce, app, website, loyalty, social, and third-party sources.',
			'Resolve identities across channels, devices, stores, and systems.',
			'Build real-time profiles with behavior, value, preference, and risk signals.',
			'Activate segments and insights across loyalty and marketing workflows.',
		],
		whyTitle: 'Customer data cannot drive growth if it stays fragmented.',
		whyBody:
			'Consumer brands operate across many systems. POS records transactions, ecommerce records browsing and orders, loyalty systems track points, campaign tools track clicks, and service channels track conversations. Without a real-time customer data foundation, teams cannot see the full customer or trigger timely actions.',
		problems: ['Customer records are duplicated across systems.', 'Data schemas and IDs do not match.', 'Reports arrive too late for real-time engagement.', 'Marketing, CRM, and loyalty teams work from different customer views.'],
		outcomes: ['One customer identity across systems and touchpoints.', 'Live customer profiles that update with behavior and transactions.', 'Segments that can be activated across journeys and channels.', 'Customer intelligence that AI agents and teams can use for action.'],
		capabilities: [
			{
				title: 'Data Integration',
				description: 'Connect customer data from POS, CRM, ecommerce, app, website, loyalty systems, social channels, and third-party sources.',
				details: ['Transaction data', 'Behavioral events', 'Profile attributes', 'Engagement history', 'Membership and loyalty data', 'Third-party enrichment data'],
			},
			{
				title: 'Identity Resolution',
				description: 'Match and merge customer records across devices, accounts, channels, stores, and systems to build a single customer view.',
				details: ['Customer deduplication', 'Cross-channel identity matching', 'Anonymous-to-known profile stitching', 'Account-level relationship mapping', 'Persistent customer ID'],
			},
			{
				title: '360-Degree Customer Profile',
				description: 'View attributes, transactions, engagement, membership status, preferences, LTV, and risk signals in one profile.',
				details: ['Contact and profile data', 'Transaction and basket history', 'Category preferences', 'Channel activity', 'Benefit eligibility', 'LTV and churn signals'],
			},
			{
				title: 'Real-Time Behavioral Signals',
				description: 'Capture customer actions as they happen and make those signals available for segmentation, triggers, and recommendations.',
				details: ['Web and app activity', 'Purchase events', 'Store visits', 'Campaign clicks', 'Voucher redemption', 'Service interactions'],
			},
			{
				title: 'Audience Segmentation',
				description: 'Build segments based on value, behavior, lifecycle stage, frequency, product interest, loyalty status, and engagement history.',
				details: ['High-value customers', 'Dormant buyers', 'Frequent visitors', 'Coupon-sensitive customers', 'Category affinity', 'Churn-risk members'],
			},
			{
				title: 'Governance And Access Control',
				description: 'Support controlled access, field-level visibility, consent handling, and data usage governance for enterprise teams.',
				details: ['Role-based access', 'Field-level visibility', 'Consent handling', 'Data usage controls', 'Audit-ready access patterns'],
			},
		],
		useCases: [
			['Create a Single Customer View', 'Unify transaction, loyalty, engagement, and service records into one customer profile.'],
			['Build Activation-Ready Segments', 'Create segments based on value, category interest, churn risk, frequency, and channel behavior.'],
			['Trigger Real-Time Journeys', 'Use purchase, browsing, redemption, or visit events to trigger the next best journey.'],
			['Support AI Reasoning', 'Give AI agents structured, reliable, and up-to-date customer data for recommendations and execution.'],
		],
	},
	{
		slug: 'loyalty-crm',
		title: 'Loyalty CRM',
		shortTitle: 'Loyalty CRM',
		kicker: 'Socialhub.AI / Loyalty CRM',
		tagline: 'Turn membership into measurable customer revenue.',
		description:
			'Manage member identities, tiers, points, benefits, vouchers, lifecycle journeys, and retention actions from one connected CRM layer.',
		href: '/product/socialhub-ai/loyalty-crm/',
		accent: 'Member value',
		aiRole: 'AI detects member value, churn risk, unused benefits, visit-frequency opportunities, and next-best retention actions.',
		tags: ['Member Identity', 'Tier and Points Rules', 'Benefits and Vouchers', 'Lifecycle Journeys', 'Churn Prevention'],
		heroBullets: [
			'Manage member profiles, tiers, points, and benefits.',
			'Trigger lifecycle journeys based on real customer behavior.',
			'Identify churn risk and retention opportunities.',
			'Measure member value, engagement, and revenue contribution.',
		],
		whyTitle: 'Loyalty should do more than record points.',
		whyBody:
			'Many loyalty systems can track points, tiers, and rewards. Member growth depends on whether the brand can understand each member, recognize valuable behavior, trigger timely engagement, and measure revenue impact.',
		problems: ['Member data sits apart from transaction and engagement data.', 'Points and rewards are managed without clear revenue visibility.', 'Teams cannot easily detect declining visit frequency or churn risk.', 'Campaigns are sent without member context or eligibility.'],
		outcomes: ['One member identity across channels and touchpoints.', 'Loyalty rules connected to real customer behavior.', 'Personalized journeys across lifecycle stages.', 'Clear view of member value, retention, and revenue contribution.'],
		capabilities: [
			{
				title: 'Unified Member Profile',
				description: 'Create one member view across registration, transactions, engagement, reward activity, service history, and channel behavior.',
				details: ['Member ID and contact profile', 'Purchase and visit history', 'Reward and redemption records', 'Tier status and eligibility', 'Engagement and service interactions'],
			},
			{
				title: 'Tier And Points Management',
				description: 'Define how members earn, redeem, upgrade, downgrade, and qualify for benefits across business rules and channels.',
				details: ['Earning rules', 'Redemption rules', 'Upgrade and downgrade logic', 'Expiry rules', 'Real-time member status updates'],
			},
			{
				title: 'Benefits And Voucher Rules',
				description: 'Manage rewards, birthday benefits, upgrade offers, exclusive vouchers, member pricing, and store-level redemption rules.',
				details: ['Birthday rewards', 'Tier upgrade benefits', 'Member-exclusive offers', 'Coupon and voucher rules', 'Store / POS redemption logic'],
			},
			{
				title: 'Member Lifecycle Journeys',
				description: 'Trigger member communication based on lifecycle stage, behavior, points status, tier movement, and engagement history.',
				details: ['Welcome journey', 'Birthday journey', 'Points expiry reminder', 'Tier upgrade notification', 'VIP care journey', 'Dormant member reactivation'],
			},
			{
				title: 'Churn Prediction And Retention Actions',
				description: 'Identify declining frequency, unused rewards, lower engagement, or high churn risk, then trigger recovery actions.',
				details: ['Declining visit frequency', 'Reduced basket size', 'Unused benefit signals', 'No recent engagement', 'Win-back offer recommendation'],
			},
			{
				title: 'Member Revenue Analytics',
				description: 'Track member value, repeat purchase, redemption behavior, offer performance, and loyalty-driven revenue contribution.',
				details: ['Member LTV', 'Purchase frequency', 'Redemption rate', 'Retention performance', 'Revenue by segment and tier'],
			},
		],
		useCases: [
			['Welcome New Members', 'Guide each new member toward first purchase, profile completion, and benefit discovery.'],
			['Prevent Member Churn', 'Detect declining activity and trigger a win-back journey with the right offer, channel, and timing.'],
			['Drive Tier Progression', 'Notify members when they are close to a higher tier and recommend actions that help them qualify.'],
			['Recover Unused Benefits', 'Identify unused vouchers or rewards and trigger reminders before expiry.'],
		],
	},
	{
		slug: 'marketing-automation',
		title: 'Marketing Automation',
		shortTitle: 'Marketing Automation',
		kicker: 'Socialhub.AI / Marketing Automation',
		tagline: 'Move from campaign execution to revenue orchestration.',
		description:
			'Design, launch, test, and optimize personalized customer journeys across social, private, owned, and store channels.',
		href: '/product/socialhub-ai/marketing-automation/',
		accent: 'Revenue actions',
		aiRole: 'AI generates segments, journey logic, message variations, offer angles, channel recommendations, tests, and performance optimizations.',
		tags: ['Journey Builder', 'Trigger Campaigns', 'AI Message Generation', 'Channel Activation', 'ROI Tracking'],
		heroBullets: [
			'Build journeys based on behavior, lifecycle stage, member status, and purchase activity.',
			'Generate audience-specific messages with AI assistance.',
			'Activate journeys across social, private, owned, and store channels.',
			'Track conversion, redemption, revenue contribution, and segment-level ROI.',
		],
		whyTitle: 'Campaigns perform better when they start from customer intelligence.',
		whyBody:
			'Traditional campaign tools often start with a message and then look for an audience. Socialhub.AI starts with the customer: who they are, what they did, what they are likely to do next, and what action can create value for both the customer and the business.',
		problems: ['Campaign calendars are disconnected from real customer behavior.', 'Teams manually build segments and export lists between systems.', 'Messages are personalized by name, but not by value, lifecycle, or intent.', 'Results are measured at campaign level, not customer or revenue level.'],
		outcomes: ['Journeys triggered by behavior, value, and member context.', 'AI-assisted content and offer variation.', 'Cross-channel activation from the same intelligence layer.', 'ROI and conversion feedback connected back to profiles.'],
		capabilities: [
			{
				title: 'Journey Orchestration',
				description: 'Design journeys for acquisition, onboarding, repeat purchase, churn prevention, loyalty growth, and win-back.',
				details: ['Visual journey builder', 'Lifecycle stages', 'Branching logic', 'Wait conditions', 'Exit rules', 'Cross-channel steps'],
			},
			{
				title: 'Trigger-Based Campaigns',
				description: 'Activate campaigns based on behavior, lifecycle stage, purchase activity, membership status, points expiry, visits, or service events.',
				details: ['Birthday trigger', 'Abandoned cart or browse trigger', 'No purchase in 30 / 60 / 90 days', 'Points expiry trigger', 'Tier upgrade trigger', 'Service recovery trigger'],
			},
			{
				title: 'AI-Assisted Message Generation',
				description: 'Generate message variations, subject lines, offer angles, and channel-specific copy based on audience context and journey goals.',
				details: ['Email subject lines', 'WhatsApp drafts', 'In-app notification copy', 'Offer angle variations', 'Tone adaptation', 'Campaign canvas support'],
			},
			{
				title: 'Audience And Channel Recommendations',
				description: 'Use customer intelligence to select the right audience and activation channel for each journey.',
				details: ['Segment recommendation', 'Channel preference signals', 'Offer eligibility', 'Frequency control', 'Next-best action suggestions'],
			},
			{
				title: 'A/B Testing And Optimization',
				description: 'Test messages, offers, segments, timing, and channels. Scale the journeys that perform.',
				details: ['Message testing', 'Offer testing', 'Timing testing', 'Segment testing', 'Channel testing', 'Winner scaling'],
			},
			{
				title: 'ROI and Conversion Tracking',
				description: 'Measure campaign performance, conversion, redemption, revenue contribution, and segment-level ROI.',
				details: ['Opens and clicks', 'Conversions', 'Voucher redemptions', 'Store visits', 'Revenue contribution', 'ROI by segment and journey'],
			},
		],
		useCases: [
			['Win Back Dormant Customers', 'Detect customers with no purchase in a defined period and trigger a personalized recovery journey.'],
			['Convert Buyers into Members', 'Invite first-time buyers to register, complete a profile, and unlock member benefits.'],
			['Trigger Points Expiry Reminders', 'Remind members before points expire and recommend relevant redemption or purchase options.'],
			['Drive Store Visits', 'Use location, purchase history, and member status to send store vouchers or visit prompts.'],
		],
	},
];

export const aiNativeLayers = [
	['Unified Data Fabric', 'Connect CRM, POS, ecommerce, loyalty, service, and external signals into a trusted real-time customer data foundation.'],
	['Business Semantic Layer', 'Translate raw data into business meaning: value, intent, lifecycle, risk, tags, segments, and metrics.'],
	['AI Agent Layer', 'Support customer analysis, segment discovery, campaign planning, loyalty recommendations, and service guidance.'],
	['Workflow and Governance', 'Keep decisions controlled with approvals, permissions, audit trails, privacy, compliance, and human-in-the-loop execution.'],
	['AI Interaction Overlay', 'Allow natural-language analysis and workflow operation through chat, Copilot-style interfaces, CLI, and MCP-ready tools.'],
];

export const industrySolutions = {
	'fashion-apparel': {
		brands: ['adidas', 'TNF', 'Timberland', 'DeFacto', 'VANS', 'Dickies', 'kipling'],
		commonWork: [
			'Unify member identity across ecommerce, store, app, and campaign touchpoints.',
			'Run tier, points, and benefit rules against real transaction context.',
			'Build behavior-driven segments for new member activation, repurchase, and VIP care.',
			'Launch campaigns faster with real-time data flow, A/B testing, and AI-assisted content.',
		],
	},
	'supermarket-grocery': {
		brands: ['YATA', 'Watsons Water'],
		commonWork: [
			'Connect identity, points, coupons, digital stamps, campaigns, and ecosystem traffic into one operating model.',
			'Use store-level inventory and redemption rules to make coupons dependable at pickup.',
			'Replace blanket discounting with targeted point multipliers by member tier and product category.',
			'Shift activation toward lower-cost digital channels while tracking campaign and loyalty impact.',
		],
	},
	'food-beverage': {
		brands: ['Haagen-Dazs', 'MCD'],
		commonWork: [
			'Connect ordering, membership, vouchers, stores, and ecommerce channels into one customer profile.',
			'Digitize coupon, voucher, and member benefit operations across online and offline redemption.',
			'Trigger repeat-visit, birthday, lifecycle, and reactivation journeys from customer behavior.',
			'Measure member repurchase, channel performance, delivery efficiency, and campaign conversion.',
		],
	},
};
