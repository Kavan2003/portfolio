import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublished } from '../lib/content';
import { SITE } from '../site';

// One feed for teardowns and notes together, newest first.
export async function GET(context: APIContext) {
	const teardowns = await getPublished('teardowns');
	const notes = await getPublished('notes');

	const items = [
		...teardowns.map((e) => ({
			title: e.data.title,
			description: e.data.description,
			pubDate: e.data.date,
			link: `/teardowns/${e.id}/`,
			categories: ['Teardown'],
		})),
		...notes.map((e) => ({
			title: e.data.title,
			description: e.data.description,
			pubDate: e.data.date,
			link: `/notes/${e.id}/`,
			categories: ['Note'],
		})),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE.name,
		description: SITE.description,
		site: context.site ?? SITE.url,
		items,
	});
}
