"use client"

import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const locales = routing.locales;

  // Change locale function
  const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.push(
        // @ts-expect-error -- No need to check at runtime
        { pathname, params },
        { locale: nextLocale } // Set the new locale
      )
      router.refresh()
    })
  }

  return (
    <select
      onChange={changeLocale}
      value={locale}
      className="bg-transparent disabled:text-gray-400"
      disabled={isPending}
    >
      {locales.map((loc) => (
        <option
          key={loc}
          value={loc}
          className="bg-white text-gray-800 px-3 py-2 hover:bg-blue-100 focus:bg-blue-200"
        >
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  )
}