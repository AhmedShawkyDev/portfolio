import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en';

// export const routes = {
//   home: "/",
//   projects: "/projects",
//   aboutMe: "/about-me",
//   contacts: "/contacts"
// }
export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales });


