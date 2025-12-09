# Quick Reference: i18n Implementation

## 📁 New Files Created

```
i18n/
  ├── routing.ts          # Locale routing config
  └── request.ts          # Message loading config

messages/
  ├── en.json            # English UI translations
  └── fr.json            # French UI translations

lib/
  └── stories-i18n.ts    # Multilingual stories

components/
  └── LanguageSwitcher.tsx  # Language toggle component

middleware.ts            # Locale detection
extract-french-stories.sh  # Helper script
I18N_SETUP_GUIDE.md     # Detailed setup guide
I18N_IMPLEMENTATION_SUMMARY.md  # This summary
```

## 🔧 Modified Files

- `next.config.mjs` - Added next-intl plugin
- `components/header.tsx` - Added language switcher
- `package.json` - Added next-intl dependency

## 🎯 Quick Start Commands

```bash
# Extract French text from Word documents
./extract-french-stories.sh

# Start dev server (after app restructuring)
pnpm dev

# Build for production
pnpm build
```

## 🌐 Using the i18n System

### In Components
```tsx
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

function MyComponent() {
  const locale = useLocale(); // 'en' or 'fr'
  
  return <Link href="/about">About</Link>; // Auto locale-aware
}
```

### Get Stories
```tsx
import { getStories, getStoryBySlug } from '@/lib/stories-i18n';

// Get all stories in current locale
const stories = getStories(locale);

// Get specific story
const story = getStoryBySlug('my-story-slug', locale);
```

### Translate UI Text
```tsx
import { useTranslations } from 'next-intl';

function Nav() {
  const t = useTranslations('navigation');
  
  return <Link href="/">{t('home')}</Link>; // Shows "HOME" or "ACCUEIL"
}
```

## 📝 Story Translation Template

```typescript
{
  title: "French Title",
  description: "French description",
  slug: "same-as-english-slug", // Keep slug same for both languages
  coverImage: "/images/covers/same-image.png",
  images: [/* same images */],
  content: [
    "Premier paragraphe en français...",
    "Deuxième paragraphe...",
    // etc.
  ],
}
```

## 🗂️ Story Mapping Reference

| French File | English Story | Slug |
|------------|---------------|------|
| Story1.docx | From Okada Rider | from-okada-rider-to-chevening-scholar |
| Story2.docx | A Break From Despair | a-break-from-despair |
| Story3.docx | A Life Defined By Defiance | a-life-defined-by-defiance |
| Story4.docx | A Light Through Pain | a-light-through-pain |
| Story5.docx | Broken Dreams Part 1 | broken-dreams-brighter-paths |
| Story5 Part2.docx | Broken Dreams Part 2 | broken-dreams-brighter-paths-2 |
| Story6.docx | From Broken Bones | from-broken-bones-to-unbreakable-dreams |
| Story7.docx | Supported by Fears | supported-by-my-fears |
| Story8.docx | Long Road to ICAN | long-road-to-ican-success |
| Story9.docx | Marriage Part 1 | the-marriage-they-made-for-me-part-1 |
| Story9 Part2.docx | Marriage Part 2 | the-marriage-they-made-for-me-part-2 |

## ⚠️ Important Notes

1. **App Restructuring Required**: The language switcher button is visible but won't fully work until you complete the app directory restructuring (see I18N_SETUP_GUIDE.md)

2. **Slug Consistency**: Keep the same slug for both English and French versions of each story

3. **Images**: Use the same image paths for both languages

4. **URL Format**: 
   - English: `/stories` or `/en/stories`
   - French: `/fr/stories`

## 🔍 Testing Checklist

After completing app restructuring:
- [ ] Visit `http://localhost:3000` (should show English)
- [ ] Visit `http://localhost:3000/fr` (should show French)
- [ ] Click language switcher (should toggle languages)
- [ ] Navigate between pages (should maintain language)
- [ ] Check all routes work in both languages
- [ ] Verify story pages display correct language

## 📞 Need Help?

If you encounter issues:
1. Check `I18N_SETUP_GUIDE.md` for detailed instructions
2. Verify all files are in correct locations
3. Ensure app directory restructuring is complete
4. Check browser console for errors

---

**Status**: Infrastructure complete ✅ | App restructuring pending ⏳ | French content extraction pending ⏳
