# tkavan.com: planning scratchpad

This file collects what we've agreed before any code gets written. It's a working doc that we keep editing.

## Goal

- **Long-term:** build a personal presence that points toward a Product Manager role. Not job-hunting yet.
- **Today:** Product Analyst, with little published work so far. The plan is to start writing and building in public.
- **Domain:** `tkavan.com`, bought on Cloudflare. **Live since 2026-10-25** on Cloudflare Workers (static assets), deploying from github.com/Kavan2003/portfolio on every push to `main`. `www.tkavan.com` serves the same site.

## Inspiration: what each site does

### kawal.co (design practice)
- Visual and confident: a big serif headline over a collage of real work.
- Reads like an agency: services, testimonials, client logos, stats ("10+ years", "60+ orgs").
- It works because there's a lot of proof. Copying the stats-and-testimonials format with nothing to fill it would look empty.

### arpitbhayani.me (engineer)
- Text first and calm, with a one-line tagline ("always building.").
- A short bio in plain prose, then a hub of everything published: Blogs, Notes, Videos, Papershelf, Bookshelf, Talks, with counts.
- Recent items are listed with dates. The site grows as the content does.

### Gap to solve
Both sites run on years of output. We need a design that **looks deliberate when it's nearly empty** and grows as writing and projects pile up.

Early ideas to discuss (nothing decided):
- Frame it as "learning product in public". Being early is the story, not something to hide.
- Start with formats that are cheap to fill: short notes, product teardowns, a bookshelf, a `/now` page.
- Show counts and archive pages only once they're worth showing.

## Decisions

- **Feel:** a blend. Arpit's writing-led content structure, with some of Kawal's typographic boldness and personality.
- **Audience, main:** people in product (PMs and peers) who'd read the thinking, share it, and become a network.
- **Audience, side:** a public notebook for building the writing habit. Audience comes later.
- **First content types:** product teardowns and short notes.
- **Cadence:** about one piece every 2 weeks.
- **Notebook:** lives on the main site as its own section (e.g. `/notes`), labelled as rough, low-pressure notes. Teardowns are the polished, featured work.
- **Writing workflow:** Markdown files in this repo. Commit and it goes live.
- **Code ownership:** an AI agent writes and maintains nearly all the code. It has to stay simple, conventional and well-organised so any agent (or person) can pick it up later. The owner cares that it works, not how.
- **Home page:** a short, bold one-line point of view (the Kawal touch), then a short bio that owns the analyst-to-PM, learning-in-public story, then the latest teardowns and notes (the Arpit structure). _Agreed._
- **Stack:** Astro as a static site, on Cloudflare Pages, deployed on push to GitHub. Markdown posts, almost no JavaScript, free hosting. _Agreed._
- **Launch sections:** Home, Teardowns, Notes, About/Now. Add Bookshelf, Projects and the rest only once they have content. _Agreed._
- **Look:** "analyst's notebook". Newsreader serif for the writing, JetBrains Mono for labels, dates and numerals (the analyst side). One accent colour (red editor's pen) on warm paper. Light and dark modes. Signature element: oversized index numerals on every entry, with planned teardowns shown as outlined "up next" numbers. _Built in v1._

## About Kavan

- **Name on site:** KAVAN THOSANI
- **Role:** Product Analyst at [Posha](https://www.posha.com/)
- **What the work actually is:** building internal tools and automation that cut manual work for teams. Examples:
  - **CX auto-replies:** an AI agent that learns from trusted human CX agents and improves over time.
  - **Payment and delivery comms:** automated payment reminders and sending delivery-tracking links for the main device.
  - **Repair ops:** automation that helps teams reach customers easily, with less human involvement.
  - **Repair analytics:** a dashboard that breaks repairs down by criteria such as device generation and state.
- **Theme that ties it together:** an analyst who ships. Spots where humans are doing repetitive work, then builds the agent, automation or dashboard that removes it. That's PM instinct already: problem → solution → measured outcome.

## Links

- LinkedIn: https://www.linkedin.com/in/kavanthosani/
- GitHub: https://github.com/Kavan2003
- Email: hello@tkavan.com (Cloudflare Email Routing is already set up)

## Teardown backlog

1. **Cursor vs VS Code:** how a fork beat the long-time default editor.
2. **The AI model market:** Claude, Gemini and the rest. How they're evolving, where the competition goes next.
3. **Duolingo:** how it won a crowded market of near-identical language apps.

## Later / phase 2

- **Portrait photo:** on the home hero as a circle with a soft, blended edge and a warm, muted tone so it matches the paper-and-ink palette (`src/assets/portrait.jpg`, square crop, metadata stripped). _Done._
- **3D avatar:** a realistic 3D avatar of Kavan that waves hi and follows the cursor. It's feasible with three.js and a rigged avatar model. Trade-offs: a few MB of page weight, slower first load, and it needs a fallback for mobile and reduced-motion users. Plan: launch without it, keep the hero layout ready for it, and build it as its own project.

## Site map (v1)

```
/                 Home: headline, short bio, latest teardowns + notes, links
/teardowns        List of teardowns (polished, long-form)
/teardowns/<slug> One teardown
/notes            Notebook: rough, short notes, labelled as such
/notes/<slug>     One note
/about            Longer story: analyst → PM, what I build at Posha, what I'm learning
/now              What I'm focused on this month (a small page that's easy to keep fresh)
/rss.xml          Feed so peers can subscribe
```

## Home page draft copy

**Headline:** "Product, learned in public." _Agreed._

**Bio:** _approved as drafted, including naming Posha and the high-level work._

**Bio draft:**
> I'm Kavan, a Product Analyst at Posha. Most of my work is spotting where people on our teams are doing the same thing over and over, then building what takes it off their plate: an AI agent that learns from our best CX agents, automations for payments, deliveries and repairs, and the dashboards that show whether any of it worked.
>
> I'm working my way toward product management, and I'm doing it in the open: teardowns of products I admire, and rough notes on what I'm learning along the way.

## Open questions

None blocking v1. The 3D avatar is confirmed as phase 2.
