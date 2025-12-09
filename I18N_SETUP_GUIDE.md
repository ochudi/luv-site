# Internationalization (i18n) Setup Guide

## What I've Set Up

I've created a comprehensive i18n infrastructure for your site using `next-intl`. Here's what's been completed:

### 1. ✅ Installed Dependencies
- Added `next-intl` for internationalization support

### 2. ✅ Created i18n Configuration Files
- `/i18n/routing.ts` - Defines supported locales (en, fr) and routing configuration
- `/i18n/request.ts` - Configures message loading for each locale
- `/middleware.ts` - Handles locale detection and routing
- `/messages/en.json` - English translations for UI elements
- `/messages/fr.json` - French translations for UI elements
- Updated `next.config.mjs` to integrate next-intl

### 3. ✅ Created Multilingual Story Structure
- `/lib/stories-i18n.ts` - New file with `getStories(locale)` and `getStoryBySlug(slug, locale)` functions
- Supports both English and French stories
- French story content is placeholders waiting for your translations

### 4. ✅ Created Language Switcher Component
- `/components/LanguageSwitcher.tsx` - A dropdown button with language options

## Next Steps - What You Need to Do

### Step 1: Restructure App Directory for Locales

Next.js with next-intl requires a specific folder structure. You need to move your current app directory into a `[locale]` folder:

**Current structure:**
```
app/
  layout.tsx
  page.tsx
  about/
    page.tsx
  stories/
    page.tsx
  ...
```

**New structure needed:**
```
app/
  [locale]/
    layout.tsx
    page.tsx
    about/
      page.tsx
    stories/
      page.tsx
    ...
```

**How to do this:**
1. Create a new folder: `app/[locale]/`
2. Move ALL files and folders from `app/` into `app/[locale]/` EXCEPT:
   - `globals.css` (keep in `app/`)
   - `favicon.ico` (if present, keep in `app/`)

### Step 2: Update the Root Layout

Create a new root layout at `app/layout.tsx`:

\`\`\`tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
\`\`\`

### Step 3: Update Your Current Layout

Move your current `app/layout.tsx` to `app/[locale]/layout.tsx` and update it:

\`\`\`tsx
import type React from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";
import FloatingBotButton from "@/components/FloatingBotButton";
import { Toaster } from "@/components/ui/toaster";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // ... your existing metadata
};

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className={workSans.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <CommandMenu />
        <FloatingBotButton />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}
\`\`\`

### Step 4: Add Language Switcher to Header

Update `/components/header.tsx` to include the language switcher:

\`\`\`tsx
import LanguageSwitcher from "./LanguageSwitcher";

// In the desktop actions section:
<div className="hidden md:flex items-center space-x-4">
  <LanguageSwitcher />  {/* Add this line */}
  <ThemeToggle />
  <a
    href="https://paystack.shop/pay/life-upside-view"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="rounded-sm">Donate</Button>
  </a>
</div>

// In mobile menu section:
<div className="flex md:hidden items-center space-x-4">
  <LanguageSwitcher />  {/* Add this line */}
  <ThemeToggle />
  <button>...</button>
</div>
\`\`\`

### Step 5: Update Navigation and Links

Replace all instances of Next.js \`Link\` and navigation hooks with the i18n versions:

**Change from:**
\`\`\`tsx
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
\`\`\`

**To:**
\`\`\`tsx
import { Link, useRouter, usePathname } from "@/i18n/routing";
\`\`\`

### Step 6: Update Stories Pages to Use Locale

Update pages that display stories to use the locale-aware functions:

\`\`\`tsx
import { getStories, getStoryBySlug } from "@/lib/stories-i18n";

// In your component:
export default function StoriesPage({ params: { locale } }: { params: { locale: 'en' | 'fr' } }) {
  const stories = getStories(locale);
  // ... rest of your component
}
\`\`\`

### Step 7: Extract French Translations from Word Documents

The French .docx files in \`public/french/\` need to be converted to text and added to \`/lib/stories-i18n.ts\`.

**Mapping (based on filenames):**
1. "DE CONDUCTEUR DE MOTOCYCLE À BOURSIER CHEVENING(Story1).docx" → Story 1 (From Okada Rider)
2. "Une pause dans le désespoir(story2).docx" → Story 2 (A Break From Despair)
3. "Une vie marquée par la rébellion(story3).docx" → Story 3 (A Life Defined By Defiance)
4. "Une lumière à travers la douleur(story4).docx" → Story 4 (A Light Through Pain)
5. "Rêves brisés(story5).docx" & "Rêves brisés(story5 part2).docx" → Stories 5 & 6 (Broken Dreams Parts 1 & 2)
6. "Des os brisés à des rêves indestructibles(story6).docx" → Story 7 (From Broken Bones)
7. "Soutenu par mes peurs(story7).docx" → Story 10 (Supported by my Fears)
8. "Le long chemin vers ma réussite I CAN(story8).docx" → Story 11 (Long Road to ICAN Success)
9. "Le mariage arrangé(story9).docx" & "Le mariage arrangé(story9 part2).docx" → Stories 12 & 13 (Marriage Parts 1 & 2)

**To extract:**
1. Open each .docx file in Microsoft Word or Google Docs
2. Copy the content
3. Format it as an array of paragraphs in the \`content\` field of the corresponding story in \`storiesFr\` array

## Benefits of This Setup

1. **SEO-Friendly**: Each language gets its own URL path (e.g., `/en/stories`, `/fr/stories`)
2. **User Preference**: Language choice is preserved in the URL
3. **Scalable**: Easy to add more languages in the future
4. **Type-Safe**: Full TypeScript support
5. **Automatic**: Middleware handles language detection automatically

## Testing

After completing the restructuring:

1. Visit `http://localhost:3000` (should show English)
2. Visit `http://localhost:3000/fr` (should show French)
3. Use the language switcher to toggle between languages
4. Verify navigation works across all pages

## Need Help?

If you encounter any issues during the restructuring, let me know and I can help troubleshoot!
