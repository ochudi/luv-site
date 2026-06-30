# Life Upside View

The website for **Life Upside View**, a mental-health foundation. It shares first-person
recovery stories, evidence-informed self-help tools, a mental-health self check-up, and
pathways to support — in **English and French**.

It is a static, content-driven [Next.js](https://nextjs.org) site: there is **no database
and no backend service**. Contact/“share your story” forms open the visitor’s email client
(`mailto:`), and donations link out to Paystack.

---

## Tech stack

| Area            | Choice                                                            |
| --------------- | ----------------------------------------------------------------- |
| Framework       | Next.js 15 (App Router, React 18, TypeScript)                     |
| Styling         | Tailwind CSS 3 + CSS design tokens (`app/globals.css`)            |
| i18n            | [next-intl](https://next-intl.dev) — English (`/`) & French (`/fr`) |
| UI primitives   | Radix UI + small shadcn-style wrappers in `components/ui`         |
| Animation       | Framer Motion                                                     |
| Icons           | lucide-react                                                      |
| Theme           | next-themes (light/dark, class-based)                             |
| Font            | Inter (via `next/font`)                                           |

There are **no environment variables and no API keys** required to run the site.

---

## Prerequisites

- **Node.js 20 LTS** (or any version ≥ 18.18)
- **npm** (the repo ships a `package-lock.json`)

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open <http://localhost:3000>. The French site lives at <http://localhost:3000/fr>.

## Scripts

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload          |
| `npm run build` | Production build                              |
| `npm run start` | Serve the production build (run `build` first)|
| `npm run lint`  | Run ESLint                                     |

> Note: `next.config.mjs` sets `eslint.ignoreDuringBuilds` and
> `typescript.ignoreBuildErrors` to `true`, so **`npm run build` will not fail on lint or
> type errors**. Run `npm run lint` and `npx tsc --noEmit` yourself before pushing.

---

## Project structure

```
app/
  layout.tsx                 # Root <html>: theme + NextIntlClientProvider
  globals.css                # Design tokens (CSS vars) + component/utility classes
  sitemap.ts, robots.ts,     # SEO file conventions
  manifest.ts
  [locale]/
    layout.tsx               # Per-locale shell: Header, Footer, fonts, JSON-LD, metadata
    page.tsx + client.tsx    # Home page (see "Page pattern" below)
    about/, stories/,
    self-help/, checkups/,
    support/, search/, …     # One folder per route
    opengraph-image.tsx      # Auto-generated 1200×630 social card

components/
  header.tsx, footer.tsx     # Site chrome
  SearchHero.tsx             # Homepage search bar + full-screen search overlay
  command-menu.tsx           # ⌘K command palette
  FloatingBotButton.tsx      # "Talk to us" mailto widget
  LanguageSwitcher.tsx, theme-toggle.tsx
  ui/                        # Radix-based primitives (dialog, toast, tooltip, …)

lib/
  stories.ts                 # Canonical (English) story content
  stories-i18n.ts            # French stories + getStories()/getStoryBySlug()
  seo.ts                     # pageMetadata() helper used by every route
  utils.ts                   # cn() classname helper

messages/
  en.json, fr.json           # All UI copy, keyed by namespace

i18n/
  routing.ts                 # Locales, default, locale-aware Link/useRouter
  request.ts                 # Loads the right messages bundle per request
middleware.ts                # next-intl locale routing

types/story.ts               # Story type
public/                      # Static assets (images live under public/images)
```

---

## How it works

### Routing & internationalisation

- Every page lives under `app/[locale]/`. Locales are defined in
  [`i18n/routing.ts`](i18n/routing.ts): `en` and `fr`, with `localePrefix: 'as-needed'`.
  That means **English has no prefix** (`/about`) and **French is prefixed** (`/fr/about`).
- [`middleware.ts`](middleware.ts) handles locale resolution. Automatic locale detection is
  **off** — visitors land on English by default and switch via the language switcher.
- **Always navigate with the locale-aware helpers** from `@/i18n/routing` (`Link`,
  `useRouter`), not the ones from `next/navigation`, so the locale prefix is preserved.

### Page pattern (server + client split)

Each route is two files:

- **`page.tsx`** — a server component. It exports `generateMetadata()` (calling
  `pageMetadata()` from [`lib/seo.ts`](lib/seo.ts) for canonical URLs, hreflang, OpenGraph,
  and Twitter cards) and renders the client component.
- **`client.tsx`** — `"use client"`. Holds the interactive UI and reads copy with
  `useTranslations()`.

This keeps SEO/metadata on the server while interactivity stays on the client.

### Content & copy

There are two sources of content:

1. **UI strings** → [`messages/en.json`](messages/en.json) and
   [`messages/fr.json`](messages/fr.json), organised by namespace (e.g. `home`, `search`,
   `stories`). Read them in components with `useTranslations("home")`.
2. **Stories** → [`lib/stories.ts`](lib/stories.ts) (English) and the `storiesFr` array in
   [`lib/stories-i18n.ts`](lib/stories-i18n.ts) (French). Pages fetch stories via
   `getStories(locale)` / `getStoryBySlug(slug, locale)`. Story **tags** are authored once
   on the English data and merged onto other locales by slug.

### Styling & theming

- Tailwind utility classes everywhere. Shared/complex styles and the **design tokens** live
  in [`app/globals.css`](app/globals.css) as HSL CSS variables (`--background`,
  `--accent`, …), with a `.dark` block for dark mode.
- There is **one font** (Inter). Note: in the Tailwind config `font-serif` is aliased to the
  same font as `font-sans`, and `globals.css` treats `.font-serif` as the display/heading
  style — so “serif” here means *heading treatment*, not an actual serif typeface.
- Reusable class helpers: `.editorial-container`, `.eyebrow`, `.btn-solid`, `.btn-ghost`,
  `.btn-dark`, `.link-quiet`, `.display-1/2/3`, `.lede`.

### SEO

Handled centrally so you rarely touch it: `pageMetadata()` per route, plus the file
conventions `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, and `manifest.ts`. Story pages
and the org also emit JSON-LD structured data.

---

## Common tasks

**Add a new page** (e.g. `/resources`):

1. Create `app/[locale]/resources/page.tsx` and `client.tsx` (copy an existing pair such as
   `about/` as a template).
2. In `page.tsx`, return metadata via `pageMetadata({ title, description, path: "/resources", locale })`.
3. Add any copy under a new namespace in **both** `messages/en.json` and `messages/fr.json`.
4. Link to it with `Link` from `@/i18n/routing`.

**Add a story:**

1. Append a `Story` object to the `stories` array in `lib/stories.ts` (English), then add the
   French translation to `storiesFr` in `lib/stories-i18n.ts` using the **same `slug`**.
2. Drop the cover image in `public/images/covers/` and inner images in
   `public/images/stories/<name>/` and reference them by path.
3. The story is automatically routed at `/stories/<slug>` and appears in the All Stories list.

**Add or change UI copy:** edit the matching key in **both** `messages/en.json` and
`messages/fr.json` (keep the keys identical across files).

> ⚠️ Always update **both** locale files together. A key present in one but missing in the
> other will throw at runtime.

---

## Deployment notes

- The site is a standard Next.js app and deploys cleanly to Vercel (or any Node host) with
  `npm run build` / `npm run start`.
- Images use `images.unoptimized: true`, so no image CDN/loader is required.
- `next.config.mjs` 301-redirects the apex domain `lifeupsideview.org` → `www.lifeupsideview.org`.
  This only fires once DNS points the apex at the app.
- Donations and "share your story" actions are external (Paystack) or `mailto:` — there is no
  server-side form handling to provision.
