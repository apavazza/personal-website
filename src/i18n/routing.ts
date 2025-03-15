import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export type Locale = (typeof routing.locales)[number]
export type LocaleParams = Promise<{ locale: Locale }>
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'hr'],
 
  // Used when no locale matches
  defaultLocale: 'en',

  // Disable cookie
  localeCookie: false,
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing)