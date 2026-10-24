// Single source of truth for who the site is about and how it links out.
// Change copy, links or the "up next" backlog here, not in templates.

export const SITE = {
	name: 'Kavan Thosani',
	url: 'https://tkavan.com',
	role: 'Product Analyst',
	company: { name: 'Posha', url: 'https://www.posha.com/' },
	headline: 'Product, learned in public.',
	description:
		'Kavan Thosani is a Product Analyst at Posha, writing product teardowns and notes on the way to product management.',
	email: 'hello@tkavan.com',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/kavanthosani/' },
		{ label: 'GitHub', href: 'https://github.com/Kavan2003' },
	],
} as const;

export const NAV = [
	{ label: 'Teardowns', href: '/teardowns' },
	{ label: 'Notes', href: '/notes' },
	{ label: 'About', href: '/about' },
	{ label: 'Now', href: '/now' },
] as const;

// Teardowns that are planned but not yet published. They show as numbered
// "up next" entries after the published ones. When you publish one, remove it here.
export const UP_NEXT_TEARDOWNS = [
	'Cursor vs VS Code: how a fork beat the default editor',
	'The AI model market: where Claude, Gemini and the rest are heading',
	'Duolingo: winning a market full of look-alikes',
];
