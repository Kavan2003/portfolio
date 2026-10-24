# tkavan.com

Personal site of Kavan Thosani: product teardowns, a public notebook, and an about page. Built with [Astro](https://astro.build) as a fully static site, meant to be hosted on Cloudflare.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # outputs the static site to dist/
npm run preview  # serves dist/ locally
```

## Publish a post

1. Copy `src/content/teardowns/_template.md` or `src/content/notes/_template.md` to a new file, e.g. `src/content/teardowns/cursor-vs-vscode.md`. The file name becomes the URL: `/teardowns/cursor-vs-vscode`.
2. Fill in the frontmatter and write in Markdown.
3. Set `draft: false` (or delete the line), then commit and push.

Frontmatter fields:

| Field | Teardowns | Notes | Meaning |
|---|---|---|---|
| `title` | required | required | Post title |
| `description` | required | optional | One or two sentences for lists and link previews |
| `date` | required | required | Publish date, `YYYY-MM-DD`. Sets the order and the entry number |
| `updated` | optional | not used | Shown as "Updated …" |
| `draft` | optional | optional | `true` = visible in `npm run dev` only |

When a teardown from the "Up next" list is published, remove it from `UP_NEXT_TEARDOWNS` in `src/site.ts`.

## Change other things

- **Name, links, headline, up-next list:** `src/site.ts`
- **About and Now pages:** `src/pages/about.md` and `src/pages/now.md`. Bump `updated:` in `now.md` whenever you change it.
- **Colours, fonts, spacing:** the tokens at the top of `src/styles/global.css`
- **Home page bio:** `src/pages/index.astro`

The plan and decisions behind the site live in [PLANNING.md](PLANNING.md).
