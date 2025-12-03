import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en';
export type Locale = (typeof locales)[number]
export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales });


