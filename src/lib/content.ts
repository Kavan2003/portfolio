import { getCollection, type CollectionEntry } from 'astro:content';

type Kind = 'teardowns' | 'notes';

export type Numbered<K extends Kind> = CollectionEntry<K> & { number: number };

// Published entries, newest first. Drafts show up in `npm run dev` only.
// Each entry gets a running number by publish order (oldest = 1), which the
// design shows as its index numeral.
export async function getPublished<K extends Kind>(kind: K): Promise<Numbered<K>[]> {
	const entries = (await getCollection(kind)) as CollectionEntry<K>[];
	const visible = entries.filter((e) => import.meta.env.DEV || !e.data.draft);
	const oldestFirst = visible.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
	return oldestFirst.map((e, i) => ({ ...e, number: i + 1 })).reverse();
}

export function pad(n: number, width: number) {
	return String(n).padStart(width, '0');
}

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
