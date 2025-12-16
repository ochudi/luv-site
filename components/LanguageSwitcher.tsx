"use client";

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = (newLocale: 'en' | 'fr') => {
    if (locale === newLocale) return;
    
    startTransition(() => {
      // Build the correct URL path
      const newPath = newLocale === 'en' ? pathname : `/fr${pathname}`;
      // Force a hard reload to bypass cache
      window.location.replace(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-3 gap-2 font-semibold">
          <Languages className="h-4 w-4" />
          <span className="text-xs font-bold uppercase">{locale}</span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuItem
          onClick={() => switchLanguage('en')}
          className={`cursor-pointer ${locale === 'en' ? 'bg-accent font-semibold' : ''}`}
        >
          <span className="flex items-center gap-3 w-full">
            <span className="text-lg font-bold">EN</span>
            <span className="flex-1">English</span>
            {locale === 'en' && <span className="text-yellow-500">✓</span>}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage('fr')}
          className={`cursor-pointer ${locale === 'fr' ? 'bg-accent font-semibold' : ''}`}
        >
          <span className="flex items-center gap-3 w-full">
            <span className="text-lg font-bold">FR</span>
            <span className="flex-1">Français</span>
            {locale === 'fr' && <span className="text-yellow-500">✓</span>}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
