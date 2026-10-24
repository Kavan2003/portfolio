# Working on tkavan.com

The owner doesn't edit code by hand; AI agents do nearly all the maintenance. Keep the code boring, conventional and easy to read for the next agent. Read `PLANNING.md` for the goals and agreed decisions before changing anything visible.

## Stack

- Astro 7, fully static output (`dist/`). No server adapter, no UI framework, no Tailwind.
- Hosted on Cloudflare Workers as static assets (`wrangler.jsonc`). Pushing to `main` builds (`npm run build`) and deploys (`npx wrangler deploy`). Node version is pinned in `.node-version`.
- Plain CSS: global tokens and base styles in `src/styles/global.css`, component styles in each `.astro` file's `<style>` block.
- Fonts are self-hosted via `@fontsource-variable/*` (Newsreader + JetBrains Mono). Don't add runtime font or CDN requests.
- Don't add dependencies without a clear reason; prefer a few lines of code.
- Cloudflare installs with npm 10 (`npm ci`). After any dependency change, refresh the lock file with `npx npm@10 install` and check `npx npm@10 ci --dry-run` passes; a lock file written only by npm 11 can fail there.

## Where things live

```
src/site.ts               Name, links, headline, nav, "up next" teardowns. Edit copy here first.
src/content.config.ts     Collection schemas (teardowns, notes)
src/content/teardowns/    Teardown posts (Markdown). File name = URL slug.
src/content/notes/        Notes (Markdown). File name = URL slug.
src/lib/content.ts        getPublished(): filters drafts, sorts, assigns entry numbers
src/layouts/              Base (html shell), Post (one teardown/note), Page (about.md / now.md)
src/components/           Header, Footer, ThemeToggle, EntryList, SectionHead, PageIntro
src/pages/                Routes; rss.xml.ts is the combined feed
```

## Content rules

- Files starting with `_` in a collection folder are ignored (used for `_template.md`).
- `draft: true` shows in dev only. Never publish drafts.
- Entry numbers come from date order (oldest = 01/001). Don't store numbers in frontmatter.
- Never write posts in the owner's voice unless asked to; drafts must stay `draft: true` until the owner approves.
- When a planned teardown ships, remove it from `UP_NEXT_TEARDOWNS` in `src/site.ts`.
- Bump `updated:` in `src/pages/now.md` whenever that page changes.

## Design rules

- Direction: "analyst's notebook". Serif (Newsreader) for writing, mono (JetBrains Mono) for labels, dates and numerals. One accent colour (red pen). The oversized index numerals are the signature element; don't add competing ones.
- Use the tokens in `global.css`; don't hard-code new colours or sizes.
- Light and dark mode are both required. The theme is set before paint by the inline script in `Base.astro`.
- Check changes at phone width (375px) and in both themes.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`. Run `npm run build` before committing; it must pass. (Warnings that a collection is empty are expected until posts exist.)

## Astro docs

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
